"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Love, beautifully planned.",
  "Every detail, considered.",
  "Your day, your way.",
];

const FooterTypingText = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[index];
    const finished = deleting ? text.length === 0 : text === phrase;
    const delay = finished ? (deleting ? 350 : 1800) : deleting ? 45 : 75;

    const timeout = window.setTimeout(() => {
      if (finished) {
        if (deleting) {
          setIndex((current) => (current + 1) % phrases.length);
          setDeleting(false);
        } else {
          setDeleting(true);
        }
        return;
      }

      setText(
        deleting
          ? phrase.slice(0, text.length - 1)
          : phrase.slice(0, text.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleting, index, text]);

  return (
    <p className="min-h-5 font-heading text-sm text-antique-gold">
      <span aria-hidden="true">
        {text}
        <span className="footer-typing-caret">|</span>
      </span>
      <span className="sr-only">Love, beautifully planned.</span>
    </p>
  );
};

export default FooterTypingText;
