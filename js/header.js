function Header() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "#000",
    color: "#fff"
  };
  const linkStyle = {
    color: "#fff",
    margin: "0 10px",
    textDecoration: "none",
    transition: "0.3s"
  };
  const hover = (e, color) => (e.target.style.color = color);
  return (
    <header style={navStyle}>
      <div style={{ fontWeight: "bold", fontSize: "24px" }}>
        <span style={{ color: "#00E676" }}>Fit</span>Pulse
      </div>
      <nav>
        {["index.html","juego.html","productos.html","ejercicios.html","contacto.html"].map((p, i) => {
          const name = ["Home","Juego","Productos","Ejercicios","Contacto"][i];
          return (
            <a
              key={i}
              href={p}
              style={linkStyle}
              onMouseEnter={(e) => hover(e, "#00E676")}
              onMouseLeave={(e) => hover(e, "#fff")}
            >
              {name}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
ReactDOM.render(<Header />, document.getElementById("header"));
