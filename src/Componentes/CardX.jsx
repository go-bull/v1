import xi from "./Cardstyle.module.css"

const CardX = (data) => {
    return (
<div className={xi.bodyCardX}>
<div className={xi.container}>
  <div className={xi.card}>
    {document.documentElement.style.setProperty('--color-fondo',data.data.color )}
    <div onClick={
        (event) => console.log(new URLSearchParams(window.location.search))} className={xi.imgBx}>
      <img src={data.data.image} />
    </div>
    <div className={xi.contentBx}>
      <h2>{data.data.category}</h2>
      <div className={xi.color}>
        <h3>{data.data.description}</h3>
      </div>
      <a onClick={
        (event) => window.location.href= 'http://localhost:3000/v1/productos/?cat=' + data.data.id}>Ver</a>
    </div>
  </div>
</div>
</div>
)
}

export default CardX