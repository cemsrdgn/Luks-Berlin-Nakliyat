import React, { useRef, useState } from "react";
import "./contacttestimonials.css";
import bgContact from "./contact_bg.jpg";

/* aktif testimonial yönünü belirleyip slide sınıfı seçiyoruz */
function useDirection(index) {
  const prev = useRef(index);
  const [dir, setDir] = useState("left");
  if (prev.current !== index) {
    setDir(index > prev.current ? "left" : "right");
    prev.current = index;
  }
  return dir;
}

/* ===== Left: Testimonials ===== */
function Testimonials({ items }) {
  const [i, setI] = useState(0);
  const t = items[i] || {};
  const dir = useDirection(i);
  const enter = dir === "left" ? "cts-enter-left" : "cts-enter-right";

  return (
    <div className="cts-left">
      <div className="cts-eyebrow">TESTIMONIALS</div>
      <h2 className="cts-title">OUR CUSTOMER REVIEWS</h2>

      <div className="cts-quote">”</div>

      <div key={i} className={`cts-slide ${enter}`}>
        <p className="cts-body" style={{ margin: 0 }}>
          {t.text}
        </p>

        <div className="cts-author-row">
          <div>
            <div className="cts-author-name">{t.name}</div>
            <div className="cts-author-role">{t.role}</div>
          </div>
        </div>
      </div>

      {/* Sabit oklar */}
      <div className="cts-arrows-fixed">
        <button
          className="cts-arrow-btn"
          onClick={() => setI((p) => (p - 1 + items.length) % items.length)}
          aria-label="Previous testimonial"
        >
          ‹
        </button>
        <button
          className="cts-arrow-btn"
          onClick={() => setI((p) => (p + 1) % items.length)}
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>
    </div>
  );
}

/* ===== Right: CTA odaklı panel (Ara / WhatsApp / E-posta) ===== */
function CtaPanel({ phoneE164, whatsappE164, email }) {
  const telHref = `tel:${(phoneE164 || "").replace(/\s/g, "")}`;
  const waHref = `https://wa.me/${(whatsappE164 || "").replace(/\D/g, "")}`;
  const mailHref = email ? `mailto:${email}` : "#";

  return (
    <div className="cts-cta-card">
      <div className="cts-eyebrow">CONTACTS US</div>
      <h2 className="cts-title">REQUEST A CALL BACK</h2>

      <p className="cts-lead">
        En hızlı dönüş için hemen arayın ya da WhatsApp’tan yazın. İsterseniz
        e-posta da atabilirsiniz.
      </p>

      <div className="cts-actions">
        <a className="cts-btn cts-btn-call" href={telHref}>
          <span>Hemen Ara</span>
        </a>
        <a
          className="cts-btn cts-btn-wa"
          href={waHref}
          target="_blank"
          rel="noreferrer"
        >
          <span>WhatsApp’tan Yaz</span>
        </a>
        <a className="cts-btn cts-btn-mail" href={mailHref}>
          <span>E-posta</span>
        </a>
      </div>

      <div className="cts-small">
        <div className="cts-chips">
          <span className="cts-chip">☎ {phoneE164}</span>
          {email ? <span className="cts-chip">✉ {email}</span> : null}
          <span className="cts-chip">🕘 09:00 – 21:00</span>
          <span className="cts-chip">📍 Berlin & çevresi</span>
        </div>
      </div>
    </div>
  );
}

/* ===== Section Wrapper ===== */
export default function ContactTestimonialsSection({
  backgroundUrl = bgContact,
  phoneE164 = "+49 30 000000",
  whatsappE164 = "+49 30 000000",
  email = "info@luksberlinnakliyat.com",
}) {
  const testimonials = [
    {
      id: 1,
      text: "Eşyalarımızı özenle paketlediler, tam saatinde geldiler. İletişimleri güçlüydü ve süreci çok iyi yönettiller.",
      name: "Ahmet T.",
      role: "Berlin — Ev Taşıma",
    },
    {
      id: 2,
      text: "Ofis taşımamız planlandığı gibi, hızlı bitti. Ekip çözüm odaklıydı; gönül rahatlığıyla öneririm.",
      name: "Merve K.",
      role: "Berlin — Ofis Taşıma",
    },
  ];

  return (
    <section
      id="contact"
      className="cts-section"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      {/* önce görsel perdesi, sonra iki parçalı eğik tonlar */}
      <div className="cts-overlay-img" />
      <div className="cts-overlay-left" />
      <div className="cts-overlay-right" />

      <div className="cts-inner">
        <div className="cts-grid">
          <Testimonials items={testimonials} />
          <CtaPanel
            phoneE164={phoneE164}
            whatsappE164={whatsappE164}
            email={email}
          />
        </div>
      </div>
    </section>
  );
}
