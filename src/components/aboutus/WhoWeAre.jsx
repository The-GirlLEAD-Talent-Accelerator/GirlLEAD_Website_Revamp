export default function WhoWeAre() {
  return (
    <section style={{ position: "relative", height: "60vh" }}>
      <img
        src="/WhoWeAre.png"
        alt="Who We Are"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        <h1 style={{ color: "#fff", fontSize: "3rem" }}>About Us</h1>
      </div>
    </section>
  );
}