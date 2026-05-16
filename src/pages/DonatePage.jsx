import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * DonatePage.jsx
 *
 * Triggered by the desktop "Donate Now" navbar button:
 *   const navigate = useNavigate();
 *   const handleDonate = () => navigate("/donate");
 *
 * Add to App.jsx:
 *   import DonatePage from "./pages/DonatePage";
 *   <Route path="/donate" element={<DonatePage />} />
 *
 * Flow:
 *   Step 1 → Donation form (left) + image (right)
 *   Step 2 → Payment  form (left) + same image (right)
 *   Step 3 → Full-screen Thank You overlay on the same image
 */

// ── Replace with your actual asset ───────────────────────────────────────────
const SIDE_IMAGE = "/Donate.png";

// ── Colour tokens ─────────────────────────────────────────────────────────────
const C = {
  green:      "#1b4332",
  greenMid:   "#2d6a4f",
  greenLight: "#52b788",
  cream:      "#fafaf6",
  border:     "#dde8e2",
  text:       "#1a1a1a",
  muted:      "#6b7280",
  error:      "#b91c1c",
};

// ── Shared two-column shell ───────────────────────────────────────────────────
function SplitShell({ left, caption }) {
  return (
    <div style={s.split}>
      <div style={s.leftCol}>{left}</div>
      <div style={s.rightCol}>
        <img
          src={SIDE_IMAGE}
          alt="Bridge the divide"
          style={s.sideImg}
          onError={(e) => (e.target.style.display = "none")}
        />
        <div style={s.imgGradient} />
        <p style={s.imgCaption}>{caption}</p>
      </div>
    </div>
  );
}

// ── Step indicator ────────────────────────────────────────────────────────────
function Steps({ current }) {
  return (
    <div style={s.steps}>
      {["Details", "Payment"].map((label, i) => {
        const n = i + 1;
        const done   = n < current;
        const active = n === current;
        return (
          <div key={n} style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ ...s.dot, ...(done ? s.dotDone : active ? s.dotActive : {}) }}>
                {done ? "✓" : n}
              </span>
              <span style={{ ...s.stepLabel, ...(active ? { color: C.green, fontWeight: 600 } : done ? { color: C.greenMid } : {}) }}>
                {label}
              </span>
            </div>
            {i === 0 && <div style={{ ...s.stepLine, ...(done ? { background: C.greenMid } : {}) }} />}
          </div>
        );
      })}
    </div>
  );
}

// ── Amount picker ─────────────────────────────────────────────────────────────
const PRESETS = ["10", "25", "50", "100"];

function AmountPicker({ value, onChange }) {
  const [custom, setCustom] = useState(false);
  const pick = (v) => { setCustom(false); onChange(v); };
  return (
    <div style={s.field}>
      <span style={s.label}>Amount (USD)</span>
      <div style={s.presetRow}>
        {PRESETS.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => pick(p)}
            style={{ ...s.preset, ...(value === p && !custom ? s.presetOn : {}) }}
          >
            ${p}
          </button>
        ))}
      </div>
      {!custom
        ? <button type="button" style={s.customLink} onClick={() => { setCustom(true); onChange(""); }}>Enter a custom amount →</button>
        : (
          <div style={{ position: "relative" }}>
            <span style={s.dollarSym}>$</span>
            <input autoFocus type="number" min="1" placeholder="0.00" value={value} onChange={(e) => onChange(e.target.value)} style={{ ...s.input, paddingLeft: "1.85rem" }} />
          </div>
        )
      }
    </div>
  );
}

// ── STEP 1 ────────────────────────────────────────────────────────────────────
function StepDetails({ onNext }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: "", email: "", amount: "25" });
  const [err, setErr]   = useState("");
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const proceed = () => {
    if (!form.fullName.trim())             return setErr("Please enter your full name.");
    if (!/\S+@\S+\.\S+/.test(form.email)) return setErr("Please enter a valid email.");
    if (!form.amount || +form.amount <= 0) return setErr("Please choose a donation amount.");
    setErr("");
    onNext(form);
  };

  const fmtAmt = form.amount ? `$${parseFloat(form.amount).toFixed(2)}` : "";

  return (
    <SplitShell
      caption="Every gift builds a bridge."
      left={
        <div style={s.form}>
          <button style={s.back} onClick={() => navigate(-1)}>← Back</button>

          <h1 style={s.headline}>Let's Bridge<br />the Divide</h1>
          <p style={s.subline}>
            Your generosity funds access to education, opportunity, and community
            for the people who need it most.
          </p>

          <Steps current={1} />

          <AmountPicker value={form.amount} onChange={(v) => setForm({ ...form, amount: v })} />

          <div style={s.field}>
            <label style={s.label}>Full Name</label>
            <input style={s.input} type="text" placeholder="Ada Okafor" value={form.fullName} onChange={set("fullName")} />
          </div>

          <div style={s.field}>
            <label style={s.label}>Email Address</label>
            <input style={s.input} type="email" placeholder="ada@example.com" value={form.email} onChange={set("email")} />
          </div>

          {err && <p style={s.errTxt}>{err}</p>}

          <button style={s.donateBtn} onClick={proceed}>
            Donate {fmtAmt}
          </button>
          <p style={s.secure}>🔒 Secure · SSL encrypted · 100% to the cause</p>
        </div>
      }
    />
  );
}

// ── STEP 2 ────────────────────────────────────────────────────────────────────
function StepPayment({ details, onPay, onBack }) {
  const [card, setCard] = useState({ name: "", number: "", expiry: "", cvv: "" });
  const [err, setErr]   = useState("");
  const set = (k) => (e) => setCard({ ...card, [k]: e.target.value });

  const fmtNum = (e) => {
    const v = e.target.value.replace(/\D/g, "").slice(0, 16);
    setCard({ ...card, number: v.replace(/(.{4})/g, "$1 ").trim() });
  };
  const fmtExp = (e) => {
    let v = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (v.length >= 3) v = v.slice(0, 2) + " / " + v.slice(2);
    setCard({ ...card, expiry: v });
  };

  const pay = () => {
    if (!card.name || !card.number || !card.expiry || !card.cvv)
      return setErr("Please complete all card fields.");
    setErr("");
    onPay();
  };

  const total = `$${parseFloat(details.amount).toFixed(2)}`;

  return (
    <SplitShell
      caption="Almost there — thank you for your generosity."
      left={
        <div style={s.form}>
          <button style={s.back} onClick={onBack}>← Back</button>

          <h1 style={s.headline}>Complete<br />Your Gift</h1>
          <p style={s.subline}>You're one step away from making a real difference.</p>

          <Steps current={2} />

          {/* Order summary */}
          <div style={s.summary}>
            <div style={s.sumRow}><span style={s.sumKey}>Donor</span><span style={s.sumVal}>{details.fullName}</span></div>
            <div style={s.sumRow}><span style={s.sumKey}>Email</span><span style={s.sumVal}>{details.email}</span></div>
            <div style={{ ...s.sumRow, ...s.sumTotal }}><span>Total</span><span>{total}</span></div>
          </div>

          <div style={s.field}>
            <label style={s.label}>Name on card</label>
            <input style={s.input} type="text" placeholder="Ada Okafor" value={card.name} onChange={set("name")} />
          </div>
          <div style={s.field}>
            <label style={s.label}>Card number</label>
            <input style={s.input} type="text" placeholder="1234 5678 9012 3456" value={card.number} onChange={fmtNum} maxLength={19} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={s.field}>
              <label style={s.label}>Expiry</label>
              <input style={s.input} type="text" placeholder="MM / YY" value={card.expiry} onChange={fmtExp} maxLength={7} />
            </div>
            <div style={s.field}>
              <label style={s.label}>CVV</label>
              <input style={s.input} type="text" placeholder="123" value={card.cvv} onChange={set("cvv")} maxLength={3} />
            </div>
          </div>

          {err && <p style={s.errTxt}>{err}</p>}

          <button style={s.donateBtn} onClick={pay}>Donate {total}</button>
          <p style={s.secure}>🔒 SSL encrypted · PCI DSS compliant</p>
        </div>
      }
    />
  );
}

// ── STEP 3 ────────────────────────────────────────────────────────────────────
function StepThankYou({ details, onHome }) {
  const first = details.fullName.split(" ")[0];
  const total = `$${parseFloat(details.amount).toFixed(2)}`;
  return (
    <div style={s.tyRoot}>
      <img src={SIDE_IMAGE} alt="Thank you" style={s.tyImg} onError={(e) => (e.target.style.display = "none")} />
      <div style={s.tyOverlay}>
        <div style={s.tyHeart}>♥</div>
        <h1 style={s.tyHeadline}>Thank you,<br />{first}!</h1>
        <p style={s.tyBody}>
          Your donation of <strong style={{ color: C.greenLight }}>{total}</strong> has been received.
          A confirmation is on its way to <strong style={{ color: C.greenLight }}>{details.email}</strong>.
          <br /><br />Together, we're bridging the divide.
        </p>
        <button style={s.tyBtn} onClick={onHome}>Go home</button>
      </div>
    </div>
  );
}

// ── Root export ───────────────────────────────────────────────────────────────
export default function DonatePage() {
  const navigate = useNavigate();
  const [step, setStep]       = useState(1);
  const [details, setDetails] = useState(null);

  return (
    <div style={{ minHeight: "100vh", background: C.cream }}>
      {step === 1 && <StepDetails onNext={(d) => { setDetails(d); setStep(2); }} />}
      {step === 2 && <StepPayment details={details} onPay={() => setStep(3)} onBack={() => setStep(1)} />}
      {step === 3 && <StepThankYou details={details} onHome={() => navigate("/")} />}
    </div>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────
const s = {
  // layout
  split:       { display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100vh" },
  leftCol:     { background: C.cream, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1.5rem" },
  rightCol:    { position: "relative", overflow: "hidden", background: C.green },
  sideImg:     { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  imgGradient: { position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(27,67,50,0.82) 0%, rgba(27,67,50,0.04) 65%)" },
  imgCaption:  { position: "absolute", bottom: "2rem", left: "2rem", right: "2rem", fontFamily: "'Georgia',serif", fontStyle: "italic", fontSize: "1.05rem", color: "rgba(255,255,255,0.86)", lineHeight: 1.55, margin: 0 },

  // form
  form:     { width: "100%", maxWidth: "420px", display: "flex", flexDirection: "column" },
  back:     { background: "none", border: "none", cursor: "pointer", fontSize: "13px", color: C.greenMid, padding: 0, marginBottom: "1.6rem", fontFamily: "sans-serif", textAlign: "left" },
  headline: { fontFamily: "'Georgia','Times New Roman',serif", fontSize: "clamp(1.85rem,3.5vw,2.6rem)", fontWeight: "bold", color: C.green, lineHeight: 1.12, letterSpacing: "-0.025em", marginBottom: "0.55rem" },
  subline:  { fontFamily: "sans-serif", fontSize: "14px", color: C.muted, lineHeight: 1.7, marginBottom: "1.6rem" },

  // steps
  steps:     { display: "flex", alignItems: "center", marginBottom: "1.75rem" },
  dot:       { width: 24, height: 24, borderRadius: "50%", border: "1.5px solid #c8d5ce", color: "#b0b0b0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
  dotActive: { border: `1.5px solid ${C.green}`, color: C.green },
  dotDone:   { background: C.greenMid, border: `1.5px solid ${C.greenMid}`, color: "#fff" },
  stepLabel: { fontSize: 12, color: "#b0b0b0", fontFamily: "sans-serif" },
  stepLine:  { width: 36, height: 1, background: "#d8d8d8", margin: "0 10px" },

  // fields
  field:  { display: "flex", flexDirection: "column", gap: 6, marginBottom: "1rem" },
  label:  { fontSize: 11, fontWeight: 700, color: "#444", letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "sans-serif" },
  input:  { width: "100%", height: 44, padding: "0 14px", fontSize: 14, fontFamily: "sans-serif", border: `1.5px solid ${C.border}`, borderRadius: 8, background: "#fff", color: C.text, outline: "none", boxSizing: "border-box" },

  // amount
  presetRow:  { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: 8 },
  preset:     { padding: "10px 4px", border: `1.5px solid ${C.border}`, borderRadius: 7, background: "#fff", color: C.green, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "sans-serif" },
  presetOn:   { background: C.green, color: "#fff", borderColor: C.green },
  customLink: { background: "none", border: "none", color: C.greenMid, fontSize: 12, cursor: "pointer", padding: 0, fontFamily: "sans-serif", textDecoration: "underline", marginBottom: 4, textAlign: "left" },
  dollarSym:  { position: "absolute", top: "50%", left: 13, transform: "translateY(-50%)", fontSize: 14, color: C.muted, fontFamily: "sans-serif", pointerEvents: "none" },

  // cta
  donateBtn: { width: "100%", padding: 15, background: C.green, color: "#fff", border: "none", borderRadius: 8, fontSize: 16, fontWeight: "bold", cursor: "pointer", fontFamily: "'Georgia',serif", letterSpacing: "0.01em", marginTop: 4 },
  secure:    { fontSize: 12, color: "#999", textAlign: "center", marginTop: "0.75rem", fontFamily: "sans-serif" },
  errTxt:    { fontSize: 13, color: C.error, fontFamily: "sans-serif", marginBottom: "0.5rem" },

  // summary
  summary:  { background: "#eef4f0", borderRadius: 8, padding: "1rem 1.2rem", marginBottom: "1.25rem", display: "flex", flexDirection: "column", gap: 8 },
  sumRow:   { display: "flex", justifyContent: "space-between", fontSize: 14, fontFamily: "sans-serif" },
  sumKey:   { color: C.muted },
  sumVal:   { fontWeight: 500, color: C.text },
  sumTotal: { fontWeight: 700, fontSize: 16, color: C.green, borderTop: "1px solid #cdddd5", paddingTop: 8, marginTop: 4 },

  // thank you
  tyRoot:     { position: "relative", minHeight: "100vh", background: C.green, overflow: "hidden" },
  tyImg:      { width: "100%", height: "100vh", objectFit: "cover", display: "block" },
  tyOverlay:  { position: "absolute", inset: 0, background: "rgba(10,28,18,0.62)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem", gap: "1.1rem" },
  tyHeart:    { fontSize: "2.25rem", color: C.greenLight, lineHeight: 1 },
  tyHeadline: { fontFamily: "'Georgia',serif", fontSize: "clamp(2.2rem,5vw,3.5rem)", fontWeight: "bold", color: "#fff", lineHeight: 1.12, letterSpacing: "-0.025em" },
  tyBody:     { fontFamily: "sans-serif", fontSize: 15, color: "rgba(255,255,255,0.82)", maxWidth: 400, lineHeight: 1.75 },
  tyBtn:      { marginTop: "0.35rem", padding: "13px 2.5rem", border: "1.5px solid rgba(255,255,255,0.65)", borderRadius: 8, background: "transparent", color: "#fff", fontSize: 15, fontWeight: "bold", cursor: "pointer", fontFamily: "'Georgia',serif" },
};
