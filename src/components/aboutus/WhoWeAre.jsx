export default function WhoWeAre() {
  return (
    <section style={{ position: "relative", height: "40vh" }}>
      <img
        src="/WhoWeAre.png"
        alt="Who We Are"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "transparent linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)",
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>
      </div>
    </section>
  );
}