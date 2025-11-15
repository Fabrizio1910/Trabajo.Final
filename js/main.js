const Home = () => {
  return (
    <div>
      {/* HERO PRINCIPAL */}
      <section
        style={{
          backgroundImage: "url('imagenes/mujer.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          textAlign: "center",
          padding: "150px 20px"
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px" }}>
          Transforma tu cuerpo. Mejora tu vida.
        </h1>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Entrena, juega y alcanza tus metas con FitPulse.
        </p>
        <a
          href="juego.html"
          style={{
            backgroundColor: "#00E676",
            color: "#fff",
            padding: "12px 25px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "background 0.3s"
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#00c96b")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#00E676")}
        >
          Comenzar ahora
        </a>
      </section>

      {/* SECCIÓN: CONOCE A FITPULSE */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "center",
          padding: "80px 10%",
          backgroundColor: "#fff",
          color: "#333"
        }}
      >
        <div>
          <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Conoce a FitPulse</h2>
          <p style={{ lineHeight: "1.6", marginBottom: "15px" }}>
            Somos una comunidad fitness enfocada en tu bienestar físico y mental.
          </p>
          <p style={{ lineHeight: "1.6", marginBottom: "15px" }}>
            En FitPulse, te ayudamos a transformar tu cuerpo con rutinas, desafíos y productos diseñados para alcanzar tus metas.
          </p>
          <p style={{ fontStyle: "italic", color: "#555" }}>Entrenamiento FitPulse</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <img
            src="imagenes/mujer.jpg"
            alt="Entrenamiento FitPulse"
            style={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
            }}
          />
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          padding: "0 10% 80px"
        }}
      >
        <div
          style={{
            background: "#f5f5f5",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
          }}
        >
          <h3 style={{ marginBottom: "15px", fontSize: "22px" }}>Nuestra Misión</h3>
          <p style={{ margin: 0, color: "#555", lineHeight: "1.6" }}>
            Impulsar una vida saludable y activa mediante tecnología, comunidad y motivación constante.
          </p>
        </div>

        <div
          style={{
            background: "#f5f5f5",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
          }}
        >
          <h3 style={{ marginBottom: "15px", fontSize: "22px" }}>Nuestra Visión</h3>
          <p style={{ margin: 0, color: "#555", lineHeight: "1.6" }}>
            Ser la plataforma fitness líder en Latinoamérica, inspirando a millones a transformar su vida.
          </p>
        </div>
      </section>
    </div>
  );
};

// Renderizar en el div principal
ReactDOM.render(<Home />, document.getElementById("home"));
