"use client";

import { useEffect, useRef, useState } from "react";

const SUBSCRIBE_ENDPOINT = "https://formsubmit.co/sabrrinareyes@icloud.com";

type ButtonState = "idle" | "sending" | "done" | "error";

const BUTTON_TEXT: Record<ButtonState, string> = {
  idle: "I'm In",
  sending: "Sending…",
  done: "You're in!",
  error: "Something went wrong",
};

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [buttonState, setButtonState] = useState<ButtonState>("idle");
  const [popupVisible, setPopupVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // dim the page while the thank-you popup is up (styles hook onto body.popup-open)
  useEffect(() => {
    document.body.classList.toggle("popup-open", popupVisible);
    return () => document.body.classList.remove("popup-open");
  }, [popupVisible]);

  // popup dismisses itself, on outside click, or via the × button
  useEffect(() => {
    if (!popupVisible) return;
    hideTimer.current = setTimeout(() => setPopupVisible(false), 5000);
    function onClick(e: MouseEvent) {
      if (!popupRef.current?.contains(e.target as Node)) setPopupVisible(false);
    }
    document.addEventListener("click", onClick);
    return () => {
      clearTimeout(hideTimer.current);
      document.removeEventListener("click", onClick);
    };
  }, [popupVisible]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!value || buttonState === "sending") return;

    setButtonState("sending");
    const body = new URLSearchParams();
    body.append("email", value);
    body.append("_captcha", "false");

    try {
      await fetch(SUBSCRIBE_ENDPOINT, { method: "POST", body });
      setEmail("");
      setButtonState("done");
      setPopupVisible(true);
      setTimeout(() => setButtonState("idle"), 2500);
    } catch {
      setButtonState("error");
      setTimeout(() => setButtonState("idle"), 3000);
    }
  }

  return (
    <>
      <section className="newsletter" id="newsletter">
        <h2>A Letter from Chévere</h2>
        <p className="newsletter-sub">
          Get Chévere in your inbox — a weekly curation of finds worth discovering.
        </p>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" disabled={buttonState === "sending" || buttonState === "done"}>
            {BUTTON_TEXT[buttonState]}
          </button>
        </form>
      </section>

      <div
        ref={popupRef}
        className={"newsletter-popup" + (popupVisible ? " newsletter-popup--visible" : "")}
      >
        <button
          className="newsletter-popup-close"
          aria-label="Close"
          onClick={() => setPopupVisible(false)}
        >
          &times;
        </button>
        <h3>Thank you for subscribing!</h3>
        <p>Be on the look out for our weekly newsletters!</p>
        <p className="newsletter-popup-signoff">
          Stay <em>chévere</em>
        </p>
      </div>
    </>
  );
}
