"use client";

import {
    getConsentApiBaseUrl,
    getPolicyRoute,
    getSignupPolicies,
    type SignupPolicy,
} from "@/lib/consent-policies";
import Link from "next/link";
import { useEffect, useState } from "react";

export function PolicyDirectory() {
  const [policies, setPolicies] = useState<SignupPolicy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadPolicies() {
      try {
        setLoading(true);
        setError(null);
        const data = await getSignupPolicies();
        if (active) {
          setPolicies(data);
        }
      } catch {
        if (active) {
          setError("We could not load policy links right now.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadPolicies();

    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <header className="mb-8 border-b border-white/10 pb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Privacy & Policy Center
          </h1>
          <p className="mt-2 text-gray-300 text-sm md:text-base">
            These policies are fetched from the consent backend and updated by
            version.
          </p>
        </header>

        {loading && (
          <div className="flex items-center justify-center py-16">
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

        {!loading && !error && (
          <div className="space-y-4">
            {policies.length === 0 && (
              <p className="text-gray-300 text-sm">
                No signup policies are currently available.
              </p>
            )}

            {policies.map((policy) => (
              <Link
                key={policy.type}
                href={getPolicyRoute(policy.type)}
                className="block rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-accent/50 hover:bg-white/[0.06]"
              >
                <h2 className="text-lg font-semibold text-white">
                  {policy.title}
                </h2>
                <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                  {policy.type.replaceAll("_", " ")}
                </p>
                <p className="mt-2 text-sm text-gray-300">
                  Version {policy.version}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
