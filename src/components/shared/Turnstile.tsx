"use client";

import TurnstileComponent from "react-turnstile";

interface TurnstileProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
}

export default function Turnstile({ onVerify, onError, onExpire }: TurnstileProps) {
  const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY;

  if (!siteKey) {
    console.warn("Cloudflare Turnstile site key is missing from NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY.");
    return (
      <div className="text-center text-xs text-red-500 my-2 font-medium">
        Turnstile Site Key is missing. Please restart the dev server after adding it to .env.local.
      </div>
    );
  }

  return (
    <div className="my-3 flex justify-center min-h-[65px] items-center">
      <TurnstileComponent
        sitekey={siteKey}
        onVerify={onVerify}
        onError={onError}
        onExpire={onExpire}
      />
    </div>
  );
}
