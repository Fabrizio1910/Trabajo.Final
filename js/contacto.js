function Contacto() {
  const [f,setF]=React.useState({nombre:"",correo:"",mensaje:""});
  const c=(e)=>setF({...f,[e.target.name]:e.target.value});
  const s=(e)=>{e.preventDefault();alert(`Gracias por contactarte, ${f.nombre}!`)};
  return(
    <div style={{padding:"60px 20px",textAlign:"center"}}>
      <h2>Contacto</h2>
      <form onSubmit={s} style={{maxWidth:"400px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"10px"}}>
        <input name="nombre" placeholder="Tu nombre" value={f.nombre} onChange={c} required style={{padding:"10px",borderRadius:"6px",border:"1px solid #ccc"}}/>
        <input name="correo" placeholder="Tu correo" value={f.correo} onChange={c} required style={{padding:"10px",borderRadius:"6px",border:"1px solid #ccc"}}/>
        <textarea name="mensaje" placeholder="Tu mensaje" value={f.mensaje} onChange={c} required style={{padding:"10px",borderRadius:"6px",border:"1px solid #ccc",minHeight:"100px"}}/>
        <button type="submit" style={{background:"#00E676",color:"#fff",border:"none",padding:"10px",borderRadius:"6px",cursor:"pointer",transition:"0.3s"}}>Enviar</button>
      </form>
    </div>
  );
}
ReactDOM.render(<Contacto />,document.getElementById("contacto"));
