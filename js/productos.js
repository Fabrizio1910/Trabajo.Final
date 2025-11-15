const Productos = () => {
  const [carrito, setCarrito] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  const productos = [
    { id: 1, nombre: "CREATINA - LEVEL PRO", precio: 120, img: "imagenes/creatina.jpg" },
    { id: 2, nombre: "BARRA DE PROTEÍNA", precio: 5, img: "imagenes/barra.jpg" },
    { id: 3, nombre: "FIT MASS + UN TOMATODO", precio: 140, img: "imagenes/fitmass.jpg" },
    { id: 4, nombre: "XB Quemador de Grasa Pack 15 botellas", precio: 29, img: "imagenes/hidratante.jpg" }
  ];

  const agregarCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    setTotal(total + producto.precio);
  };

  const eliminarProducto = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    const nuevoTotal = nuevoCarrito.reduce((acc, item) => acc + item.precio, 0);
    setCarrito(nuevoCarrito);
    setTotal(nuevoTotal);
  };

  const cardContainer = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
    marginTop: "40px"
  };

  const cardStyle = {
    width: "220px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    padding: "20px",
    textAlign: "center",
    background: "#f9f9f9"
  };

  const botonStyle = {
    background: "#00E676",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "8px 16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s"
  };

  return (
    <div style={{ textAlign: "center", padding: "60px 0", background: "#fff" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>Nuestros Productos</h1>

      <div style={cardContainer}>
        {productos.map((p) => (
          <div key={p.id} style={cardStyle}>
            <img src={p.img} alt={p.nombre} style={{ width: "100%", height: "180px", objectFit: "contain" }} />
            <h4 style={{ fontSize: "16px", margin: "10px 0" }}>{p.nombre}</h4>
            <p style={{ margin: "5px 0", fontWeight: "bold" }}>S/ {p.precio.toFixed(2)}</p>
            <button
              style={botonStyle}
              onClick={() => agregarCarrito(p)}
              onMouseOver={(e) => (e.target.style.background = "#00c96b")}
              onMouseOut={(e) => (e.target.style.background = "#00E676")}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      {carrito.length > 0 && (
        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
            fontSize: "16px",
            background: "#f1f1f1",
            padding: "20px",
            borderRadius: "10px",
            width: "60%",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <h3>🛒 Carrito de compras</h3>
          {carrito.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#fff",
                padding: "10px 15px",
                margin: "5px 0",
                borderRadius: "8px"
              }}
            >
              <span>{item.nombre} — S/ {item.precio}</span>
              <button
                onClick={() => eliminarProducto(index)}
                style={{
                  background: "red",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: "24px",
                  height: "24px",
                  cursor: "pointer"
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: "30px", fontSize: "20px", fontWeight: "bold" }}>
        Total: S/ {total.toFixed(2)}
      </div>

      <div style={{ marginTop: "50px" }}>
        <img src="imagenes/kevin.jpg" alt="Kevin" style={{ width: "180px", borderRadius: "12px" }} />
      </div>

      <div
        style={{
          backgroundColor: "#00E676",
          padding: "20px",
          borderRadius: "12px",
          textAlign: "center",
          fontStyle: "italic",
          fontWeight: "bold",
          color: "#000",
          width: "fit-content",
          margin: "30px auto"
        }}
      >
        SÉ COMO KEVIN, COMPRA NUESTROS PRODUCTOS Y AHORA ES EL ÉXITO.
      </div>

      <a
        href="ejercicios.html"
        style={{
          display: "inline-block",
          marginTop: "20px",
          background: "#222",
          color: "#fff",
          padding: "12px 30px",
          borderRadius: "25px",
          textDecoration: "none"
        }}
        onMouseOver={(e) => (e.target.style.background = "#00E676")}
        onMouseOut={(e) => (e.target.style.background = "#222")}
      >
        Explora nuestros ejercicios
      </a>
    </div>
  );
};

ReactDOM.render(<Productos />, document.getElementById("productos"));
