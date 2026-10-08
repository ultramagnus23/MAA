import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { auth, signIn } from "@/auth";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Sign in" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; callbackUrl?: string }>;
}) {
  const { error, callbackUrl } = await searchParams;
  const session = await auth();
  const target = callbackUrl && callbackUrl.startsWith("/") ? callbackUrl : "/";
  if (session) redirect(target);

  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-12">
      <div className="w-full max-w-md rounded-lg border border-line bg-white p-8 text-center">
        <Image src="/logo.png" alt="" width={96} height={96} priority className="mx-auto h-24 w-24" />
        <h1 className="mt-5 text-ink">{site.name}</h1>
        <p className="mt-1 text-sm text-ink-soft">{site.university}</p>

        <p className="mt-6 text-base text-ink-soft">
          This site is for Ashoka students and staff. Sign in with your
          Ashoka email address to continue.
        </p>

        {error && (
          <p
            role="alert"
            className="mt-5 rounded border border-line-strong bg-paper-dim p-3 text-sm text-ink"
          >
            {error === "AccessDenied"
              ? "That account cannot be used. Please sign in with your @ashoka.edu.in email address."
              : "Something went wrong while signing in. Please try again."}
          </p>
        )}

        <form
          className="mt-6"
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: target });
          }}
        >
          <button
            type="submit"
            className="w-full rounded bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dim"
          >
            Sign in with your Ashoka email
          </button>
        </form>

        <p className="mt-6 text-xs text-ink-faint">
          Need help? Write to{" "}
          <a href={`mailto:${site.email}`} className="text-accent underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
