function Home() {
  const section = { textAlign: "center", padding: "60px 20px" };
  const btn = {
    background: "#00E676",
    color: "#fff",
    padding: "15px 30px",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    cursor: "pointer",
    transition: "0.3s"
  };
  const hover = (e, bg) => (e.target.style.background = bg);

  return (
    <div>
      <section style={section}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Transforma tu cuerpo. Mejora tu vida.
        </h1>
        <p style={{ fontSize: "18px", color: "#555", marginBottom: "30px" }}>
          Entrena, juega y alcanza tus metas con FitPulse.
        </p>
        <button
          style={btn}
          onMouseEnter={(e) => hover(e, "#00c76b")}
          onMouseLeave={(e) => hover(e, "#00E676")}
          onClick={() => (window.location.href = "juego.html")}
        >
          Comenzar ahora
        </button>
      </section>
    </div>
  );
}
ReactDOM.render(<Home />, document.getElementById("home"));
