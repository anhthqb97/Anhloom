const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export function RecaptchaNotice() {
  if (!recaptchaSiteKey) {
    return null;
  }

  return (
    <p className="text-body-sm text-text-muted">
      This site is protected by reCAPTCHA and the Google{" "}
      <a href="https://policies.google.com/privacy" className="underline">
        Privacy Policy
      </a>{" "}
      and{" "}
      <a href="https://policies.google.com/terms" className="underline">
        Terms of Service
      </a>{" "}
      apply.
    </p>
  );
}
