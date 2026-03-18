export interface SignupPolicy {
  type: string;
  version: string;
  title: string;
}

export interface SignupPoliciesResponse {
  policies: SignupPolicy[];
}

export interface PolicyContent {
  version: string;
  title: string;
  content: string;
  last_updated: string;
}

const DEFAULT_CONSENT_API_BASE_URL = "https://api.letscatchup-kcs.com";

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.trim().replace(/\/+$/, "");
}

export function getConsentApiBaseUrl(): string {
  const configuredBaseUrl =
    process.env.NEXT_PUBLIC_API_URL || DEFAULT_CONSENT_API_BASE_URL;

  return normalizeBaseUrl(configuredBaseUrl);
}

function buildConsentUrl(path: string): string {
  const base = getConsentApiBaseUrl();
  const apiBase = base.endsWith("/api") ? base : `${base}/api`;
  return `${apiBase}${path}`;
}

async function fetchConsentJson<T>(path: string): Promise<T> {
  const response = await fetch(buildConsentUrl(path), {
    method: "GET",
    cache: "no-store",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Consent API request failed: ${response.status}`);
  }

  return (await response.json()) as T;
}

export async function getSignupPolicies(): Promise<SignupPolicy[]> {
  const data = await fetchConsentJson<SignupPoliciesResponse>(
    "/consent/public/signup-policies",
  );
  return data.policies ?? [];
}

export async function getPolicyContent(
  policyType: string,
): Promise<PolicyContent> {
  return fetchConsentJson<PolicyContent>(
    `/consent/public/content/${policyType}`,
  );
}

export const POLICY_ROUTE_BY_TYPE: Record<string, string> = {
  TERMS_OF_SERVICE: "/terms-of-service",
  COMMUNITY_GUIDELINES: "/community-guidelines",
};

export function getPolicyRoute(policyType: string): string {
  return POLICY_ROUTE_BY_TYPE[policyType] || "/privacy-policy";
}

export function sanitizePolicyHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<\/?parameter[^>]*>/gi, "")
    .replace(/\son\w+=\"[^\"]*\"/gi, "")
    .replace(/\son\w+='[^']*'/gi, "")
    .replace(/javascript:/gi, "");
}
