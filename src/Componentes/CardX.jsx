import "./Cardstyle.css"

const CardX = (data) => {
    return (
<div className="container">
  <div className="card">
    {document.documentElement.style.setProperty('--color-fondo',data.data.color )}
    <div onClick={
        (event) => console.log(new URLSearchParams(window.location.search))} className="imgBx">
      <img src={data.data.image} />
    </div>
    <div className="contentBx">
      <h2>{data.data.category}</h2>
      <div className="size">
        <h3>Precio :{data.data.price}</h3>
        {/* <span>8</span> */}
      </div>
      <div className="color">
        <h3>{data.data.description}</h3>
      </div>
      <a onClick={
        (event) => window.location.href= 'http://localhost:3001/?id=' + data.data.id}>Comprar</a>
    </div>
  </div>
</div>
)
}

export default CardX