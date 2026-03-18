"use client";

import {
    getConsentApiBaseUrl,
    getPolicyContent,
    sanitizePolicyHtml,
    type PolicyContent,
} from "@/lib/consent-policies";
import { useEffect, useMemo, useState } from "react";

interface PolicyDocumentProps {
  policyType: string;
}

export function PolicyDocument({ policyType }: PolicyDocumentProps) {
  const [policy, setPolicy] = useState<PolicyContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadPolicy() {
      try {
        setLoading(true);
        setError(null);
        const data = await getPolicyContent(policyType);
        if (active) {
          setPolicy(data);
        }
      } catch {
        if (active) {
          setError("We could not load this policy right now.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadPolicy();

    return () => {
      active = false;
    };
  }, [policyType]);

  const renderedHtml = useMemo(
    () => sanitizePolicyHtml(policy?.content ?? ""),
    [policy?.content],
  );

  return (
    <main className="min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-accent/30 border-t-accent" />
          </div>
        )}

        {!loading && error && (
          <div className="rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200">
            {error}
            <p className="mt-2 text-red-200/80">
              Consent API base URL:{" "}
              <code className="text-red-100">{getConsentApiBaseUrl()}</code>
            </p>
          </div>
        )}

        {!loading && !error && policy && (
          <>
            <header className="mb-8 border-b border-white/10 pb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                {policy.title}
              </h1>
              <p className="mt-2 text-xs uppercase tracking-wider text-gray-400">
                Version {policy.version} | Last updated {policy.last_updated}
              </p>
            </header>

            <article
              className="text-gray-200 text-sm md:text-base leading-relaxed space-y-4
                [&_h1]:text-2xl [&_h1]:md:text-3xl [&_h1]:font-bold [&_h1]:text-white [&_h1]:mb-4
                [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-3
                [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-5 [&_h3]:mb-2
                [&_p]:text-gray-200 [&_p]:leading-7 [&_p]:mb-3
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-4
                [&_li]:text-gray-200
                [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-white
                [&_strong]:text-white"
              dangerouslySetInnerHTML={{ __html: renderedHtml }}
            />
          </>
        )}
      </div>
    </main>
  );
}
