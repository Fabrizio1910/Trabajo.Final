const Ejercicios = () => {
  const data = [
    {
      titulo: "Rutina de Bíceps",
      descripcion: "Desarrolla tu fuerza muscular con estos ejercicios.",
      img: "imagenes/biceps.jpg",
      link: "https://www.youtube.com/watch?v=C8z8N3183-c"
    },
    {
      titulo: "Cardio / Sentadillas",
      descripcion: "Quema calorías y mejora tu resistencia cardiovascular.",
      img: "imagenes/sentadillas.jpg",
      link: "https://www.youtube.com/watch?v=IE3ZJezh-wc"
    },
    {
      titulo: "Nutrición Fitness",
      descripcion: "Aprende a alimentarte correctamente para tus objetivos.",
      img: "imagenes/receta.jpg",
      link: "https://www.youtube.com/watch?v=JoQ6T0dX0mM"
    }
  ];

  const containerStyle = {
    textAlign: "center",
    padding: "60px 0",
    background: "#fff"
  };

  const cardContainer = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "40px",
    marginTop: "40px"
  };

  const cardStyle = {
    width: "300px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
    textAlign: "left",
    background: "#f9f9f9"
  };

  const imgStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    cursor: "pointer",
    position: "relative"
  };

  const playButtonStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#00E676",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    color: "#fff",
    cursor: "pointer"
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>Rutinas de Ejercicios</h1>
      <div style={cardContainer}>
        {data.map((item, index) => (
          <div key={index} style={cardStyle}>
            <div style={{ position: "relative" }}>
              <img
                src={item.img}
                alt={item.titulo}
                style={imgStyle}
                onClick={() => window.open(item.link, "_blank")}
              />
              <div
                style={playButtonStyle}
                onClick={() => window.open(item.link, "_blank")}
              >
                ▶️
              </div>
            </div>
            <div style={{ padding: "20px" }}>
              <h3 style={{ margin: "0 0 10px" }}>{item.titulo}</h3>
              <p style={{ margin: "0", color: "#555" }}>{item.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      <a
        href="contacto.html"
        style={{
          display: "inline-block",
          marginTop: "50px",
          padding: "12px 30px",
          background: "#222",   
          color: "#fff",
          borderRadius: "25px",
          textDecoration: "none",
          transition: "background 0.3s"
        }}
        onMouseOver={(e) => (e.target.style.background = "#00E676")}
        onMouseOut={(e) => (e.target.style.background = "#222")}
      >
        Contáctanos
      </a>
    </div>
  );
};

// Renderizar en el div del HTML
ReactDOM.render(<Ejercicios />, document.getElementById("ejercicios"));
