import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * DonatePage.jsx
 *
 * Step 1 → Donation form  (left) + image (right)
 * Step 2 → Payment form   (left) + same image (right)
 * Step 3 → Full-screen Thank You
 *
 * Wiring:
 *   const navigate = useNavigate();
 *   const handleDonate = () => navigate("/donate");
 *
 *   <Route path="/donate" element={<DonatePage />} />
 *
 * Swap the image path below ↓
 */
const SIDE_IMAGE = "/Donate.png";
const GREEN      = "#1b4332";

// ── Shared split wrapper ──────────────────────────────────────────────────────
function Split({ children }) {
  return (
    <div style={s.split}>
      {/* Left – form panel */}
      <div style={s.left}>{children}</div>

      {/* Right – image */}
      <div style={s.right}>
        <img
          src={SIDE_IMAGE}
          alt="Donate"
          style={s.img}
          onError={(e) => (e.target.style.display = "none")}
        />
        <div style={s.imgOverlay} />
      </div>
    </div>
  );
}

// ── STEP 1 – Donation details ─────────────────────────────────────────────────
function StepOne({ onNext }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: "", email: "", amount: "" });
  const [err,  setErr]  = useState("");
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = () => {
    if (!form.fullName.trim())             return setErr("Please enter your full name.");
    if (!/\S+@\S+\.\S+/.test(form.email)) return setErr("Please enter a valid email.");
    if (!form.amount || +form.amount <= 0) return setErr("Please enter a donation amount.");
    setErr("");
    onNext(form);
  };

  return (
    <Split>
      <div style={s.formWrap}>
        {/* Back link */}
        <button style={s.backBtn} onClick={() => navigate(-1)}>← Back</button>

        {/* Header */}
        <h1 style={s.heading}>Let's Bridge the Divide</h1>

        {/* Fields */}
        <div style={s.field}>
          <label style={s.label}>Full Name</label>
          <input
            style={s.input}
            type="text"
            value={form.fullName}
            onChange={set("fullName")}
          />
        </div>

        <div style={s.field}>
          <label style={s.label}>Email</label>
          <input
            style={s.input}
            type="email"
            value={form.email}
            onChange={set("email")}
          />
        </div>

        <div style={s.field}>
          <label style={s.label}>Amount (USD)</label>
          <input
            style={s.input}
            type="number"
            min="1"
            value={form.amount}
            onChange={set("amount")}
          />
        </div>

        {err && <p style={s.err}>{err}</p>}

        <button style={s.cta} onClick={handleSubmit}>
          Donate
        </button>
      </div>
    </Split>
  );
}

// ── STEP 2 – Payment details ──────────────────────────────────────────────────
function StepTwo({ details, onPay, onBack }) {
  const [card, setCard] = useState({ holder: "", number: "", expiry: "", cvv: "" });
  const [err,  setErr]  = useState("");
  const set = (k) => (e) => setCard({ ...card, [k]: e.target.value });

  const fmtNumber = (e) => {
    const v = e.target.value.replace(/\D/g, "").slice(0, 16);
    setCard({ ...card, number: v.replace(/(.{4})/g, "$1 ").trim() });
  };

  const fmtExpiry = (e) => {
    let v = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (v.length >= 3) v = v.slice(0, 2) + " / " + v.slice(2);
    setCard({ ...card, expiry: v });
  };

  const handlePay = () => {
    if (!card.holder || !card.number || !card.expiry || !card.cvv)
      return setErr("Please complete all card fields.");
    setErr("");
    onPay();
  };

  return (
    <Split>
      <div style={s.formWrap}>
        {/* Back link */}
        <button style={s.backBtn} onClick={onBack}>← Back</button>

        {/* Same header */}
        <h1 style={s.heading}>Let's Bridge the Divide</h1>

        {/* Card Holder Name – full width */}
        <div style={s.field}>
          <label style={s.label}>Card Holder Name</label>
          <input
            style={s.input}
            type="text"
            value={card.holder}
            onChange={set("holder")}
          />
        </div>

        {/* Card Number – full width */}
        <div style={s.field}>
          <label style={s.label}>Card Number</label>
          <input
            style={s.input}
            type="text"
            value={card.number}
            onChange={fmtNumber}
            maxLength={19}
          />
        </div>

        {/* Expiry Date + CVV – side by side */}
        <div style={s.row}>
          <div style={{ ...s.field, flex: 1 }}>
            <label style={s.label}>Expiry Date</label>
            <input
              style={s.input}
              type="text"
              placeholder="MM / YY"
              value={card.expiry}
              onChange={fmtExpiry}
              maxLength={7}
            />
          </div>
          <div style={{ ...s.field, flex: 1 }}>
            <label style={s.label}>CVV</label>
            <input
              style={s.input}
              type="text"
              placeholder="123"
              value={card.cvv}
              onChange={set("cvv")}
              maxLength={3}
            />
          </div>
        </div>

        {err && <p style={s.err}>{err}</p>}

        <button style={s.cta} onClick={handlePay}>
          Make Payment
        </button>
      </div>
    </Split>
  );
}

// ── STEP 3 – Thank You ────────────────────────────────────────────────────────
function StepThankYou({ details, onHome }) {
  return (
    <div style={s.ty}>
      <img
        src={SIDE_IMAGE}
        alt="Thank you"
        style={s.tyImg}
        onError={(e) => (e.target.style.display = "none")}
      />
      <div style={s.tyOverlay}>
        <h1 style={s.tyHeading}>Thank You!</h1>
        <p style={s.tyBody}>
          Your donation of <strong style={{ color: "#95d5b2" }}>
            ${parseFloat(details.amount).toFixed(2)}
          </strong> has been received.
          <br />A confirmation is on its way to{" "}
          <strong style={{ color: "#95d5b2" }}>{details.email}</strong>.
          <br /><br />Together, we're bridging the divide.
        </p>
        <button style={s.tyBtn} onClick={onHome}>Go home</button>
      </div>
    </div>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────
export default function DonatePage() {
  const navigate = useNavigate();
  const [step,    setStep]    = useState(1);
  const [details, setDetails] = useState(null);

  return (
    <div style={{ minHeight: "100vh", background: "#fafaf6" }}>
      {step === 1 && (
        <StepOne onNext={(d) => { setDetails(d); setStep(2); }} />
      )}
      {step === 2 && (
        <StepTwo
          details={details}
          onPay={() => setStep(3)}
          onBack={() => setStep(1)}
        />
      )}
      {step === 3 && (
        <StepThankYou details={details} onHome={() => navigate("/")} />
      )}
    </div>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────
const s = {
  /* layout */
  split: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    minHeight: "100vh",
  },
  left: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem 2rem",
    background: "#fafaf6",
  },
  right: {
    position: "relative",
    overflow: "hidden",
    background: GREEN,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(27,67,50,0.72) 0%, rgba(27,67,50,0.05) 70%)",
  },

  /* form */
  formWrap: {
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
  },
  backBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "13px",
    color: GREEN,
    padding: 0,
    marginBottom: "1.75rem",
    fontFamily: "sans-serif",
    textAlign: "left",
  },
  heading: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    fontSize: "clamp(1.65rem, 3vw, 2.2rem)",
    fontWeight: "bold",
    color: "#000000",
    lineHeight: 1.15,
    letterSpacing: "-0.02em",
    marginBottom: "2rem",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    marginBottom: "1.1rem",
  },
  label: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#444",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    fontFamily: "sans-serif",
  },
  input: {
    width: "100%",
    height: "46px",
    padding: "0 14px",
    fontSize: "15px",
    fontFamily: "sans-serif",
    border: "1.5px solid #dde8e2",
    borderRadius: "8px",
    background: "#ffffff",
    color: "#1a1a1a",
    outline: "none",
    boxSizing: "border-box",
  },
  row: {
    display: "flex",
    gap: "12px",
    marginBottom: "0",
  },
  cta: {
    width: "100%",
    padding: "15px",
    background: GREEN,
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    fontFamily: "'Georgia', serif",
    marginTop: "0.5rem",
  },
  err: {
    fontSize: "13px",
    color: "#b91c1c",
    fontFamily: "sans-serif",
    marginBottom: "0.4rem",
  },

  /* thank you */
  ty: {
    position: "relative",
    minHeight: "100vh",
    background: GREEN,
    overflow: "hidden",
  },
  tyImg: {
    width: "100%",
    height: "100vh",
    objectFit: "cover",
    display: "block",
  },
  tyOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(10,28,18,0.60)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "2rem",
    gap: "1rem",
  },
  tyHeading: {
    fontFamily: "'Georgia', serif",
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: "-0.02em",
  },
  tyBody: {
    fontFamily: "sans-serif",
    fontSize: "15px",
    color: "rgba(255,255,255,0.85)",
    maxWidth: "380px",
    lineHeight: 1.75,
  },
  tyBtn: {
    marginTop: "0.5rem",
    padding: "13px 2.5rem",
    border: "1.5px solid rgba(255,255,255,0.65)",
    borderRadius: "8px",
    background: "transparent",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    fontFamily: "'Georgia', serif",
  },
};
