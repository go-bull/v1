import { useState, useEffect } from "react"
import React from "react"
import "./style-i.css"
import CardX from "../../Componentes/CardX"

const Home = () => {
    // const [items, setItems] = useState(null)

    // useEffect(() => {
    //   fetch('https://deploy-backend-p.onrender.com/api/v1/products')
    //     .then(response => response.json())
    //     .then(data => setItems(data))
    //     console.log(items);
    // }, [])
  
    return(
        <>
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Inicio de Attom</title>
  <link rel="shortcut icon" href="https://i.imgur.com/Ju2U2kM.png" />
  <link rel="stylesheet" href="./style-i.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" />
  {/* Barre de navigation */}
  <nav>
    {/* class="icononav"><svg width="100" height="94" viewBox="0 0 100 24" fill="#ffffff"></svg> */}
    {/* <img src='https://i.imgur.com/CiGZYTt.png' width="60" height="60"> */}
    <svg className="icononavH" width={100} height={65} viewBox="321 320 464 360">
    <path class="cls-1" d="m466.52,375.1c6.68-2.65,13.36-5.31,20.46-8.13-.33-1.66-.74-3.71-1.34-6.73-9.52,1.64-18.93,2.69-28.04,4.97-13.04,3.27-26.1,6.77-38.71,11.39-13.27,4.87-26.36,4.48-39.76,1.86-.77-.15-1.54-.36-3.08.38,3.03,3.28,6.06,6.55,9.16,9.89-7.65,1.3-15.55,2.65-24.56,4.19,5.63,2.34,10.11,4.2,14.47,6.01-11.33,6.97-22.32,13.72-33.78,20.76,4.75,9,9.12,17.28,13.37,25.34,12.89-9.6,25.39-18.91,37.89-28.23.29.35.58.7.86,1.05-1.4,1.45-2.95,2.79-4.18,4.38-8.64,11.16-17.28,22.33-25.72,33.65-.8,1.07-.85,3.59-.14,4.78,18.65,31.12,37.44,62.15,56.22,93.19.32.53.83.95,1.68,1.92,7.24-26.24,18-50.29,33.1-71.5-4.28,14.32-9.52,29.05-12.98,44.19-3.24,14.21-4.76,28.83-6.64,43.32-.32,2.48.73,5.6,2.16,7.77,5.54,8.4,11.49,16.53,18.06,25.85.54-10.21.71-18.96,1.5-27.65,3.35-36.71,13.16-71.89,25.7-106.39,2.61-7.19,5.72-14.19,8.3-21.39.71-1.98.32-4.34.44-6.53-2.23.63-5.06.6-6.57,2-6.33,5.85-12.27,12.13-18.9,18.05,7.74-12.07,15.48-24.15,23.24-36.24-4.29-3.26-8.93-6.79-13.57-10.33.11-.43.23-.86.34-1.29,10.83.84,18.74-4.3,25.5-11.81,2.45-2.72,4.91-6.18,2.35-9.23-1.5-1.78-5.89-2.51-8.42-1.77-6.48,1.89-13.04,4.18-18.86,7.54-24.1,13.92-47.24,29.23-66.73,49.41,22.3-30.04,51.94-51.21,84.1-69.38q-3.87-7.27-11.73-6.02c-4.9.79-9.79,1.65-14.68,2.48-.17-.58-.34-1.15-.51-1.73Z"/>
  <path class="cls-1" d="m652.39,439.2c1.53,1.27,3.2,2.41,4.58,3.83,4.65,4.76,9.47,8.2,16.91,7.24,2.91-.38,6.57,2.03,9.32,3.97,5.15,3.62,9.88,7.83,15.34,12.25-7.34-18.07-24.2-38.46-40.3-36.18.76,1.34,1.47,2.57,2.2,3.86-4.02-1.11-7.85-2.7-11.81-3.15-6.32-.72-8.63,2.85-6.21,8.63.94,2.24,1.6,4.6,1.9,7.05-3.01-4.14-5.94-8.35-9.06-12.4-1.1-1.43-2.48-2.88-4.05-3.61-1.24-.58-2.99-.08-4.51-.06.07,1.46-.2,3.05.29,4.36.55,1.49,1.78,2.73,2.35,3.55-6.2-2.74-12.58-7.33-19.38-8.07-7.06-.76-14.52,2.21-23.14,3.8,2.72-2.25,4.64-4.4,7.03-5.67,3.12-1.67,3.27-3.81,2.21-6.6-3.77-9.96-5.63-15.12-19.94-14.25.91-.42,2.01-.63,2.68-1.29,1.23-1.21,2.21-2.68,3.3-4.03-1.51-1.13-2.86-2.73-4.56-3.3-7.01-2.37-13.42-.53-19.42,3.39-11.02,7.19-25.4,12.18-34.26,12.14,4.94-2.46,10.44-5.06,15.78-7.96,1.27-.69,2.92-2.56,2.72-3.55-.25-1.23-2.08-2.54-3.51-3.05-5.48-1.96-11.09-2.76-16.3.73-5.66,3.8-11.15,7.85-16.73,11.77-3.5,2.46-7.02,4.9-11.46,7.99,22.3,7.23,42.02,2.59,60.91-8.51.28.44.56.88.84,1.33-5.32,4.04-10.36,8.5-16,12.03-23.03,14.41-33.47,40.38-26.43,66.6,5.23,19.44,21.17,31.97,41.36,32,10.65.01,21.31-1.1,31.96-.94,18.71.27,35.74,5.62,49.95,18.37.62.55,1.45.86,2.19,1.28-.26.36-.52.72-.78,1.08-1.86-.74-3.72-1.49-6.04-2.42.71,5.57,2.24,10.24,7.4,12.42,6.18,2.6,12.41,2.49,19.36-1.06-3.4-.82-5.85-1.41-8.3-2,.02-.24.04-.48.07-.72,2.76-.42,5.52-.84,7.85-1.2-2.2-6.65-4.37-13.28-6.65-19.88-.23-.66-1.12-1.12-1.74-1.62-4.31-3.5-8.6-7.03-12.96-10.46-1.54-1.21-3.16-2.43-4.93-3.23-12.89-5.88-26.73-7.88-40.6-9.72-6.59-.87-13.23-1.65-19.69-3.12-1.79-.41-4.05-2.97-4.4-4.87-3.28-17.63,7.31-30.86,26.02-32.9,2.42-.26,4.86-.39,8.71-.7-4.11-3.59-7.17-6.27-10.23-8.95.21-.32.41-.65.62-.97,3.59,2.41,7.91,4.19,10.65,7.35,8.37,9.66,16.53,19.56,24,29.92,5.33,7.39,9.16,15.85,14.17,23.49,2.33,3.56,5.87,6.34,9.56,9.21,2.89-14.57,10.29-24.95,23.29-30.93q-5.43-10.47-12.73-8.78c5.06-7.05,14.81-9.72,19.56-.1,3.45,6.98,6.47,14.16,9.3,21.71-3.26-3.76-6.6-3.67-10.34-1.35-7.32,4.54-11.47,11.05-11.96,19.61-.07,1.28,1.58,3.29,2.93,3.93,5.97,2.81,12.18,5.12,18.2,7.84,3.8,1.72,7.61,1.52,10.14-1.38,3.69-4.24,6.51-9.22,10.02-14.35-3.11-1.23-4.76-1.88-6.12-2.42,4.96-3.65,10.44-6.77,14.67-11.11,2.93-3,4.32-7.62,5.91-11.7.3-.76-1.54-3.32-2.67-3.53-12.62-2.3-21.36-10.08-29.33-19.44-3.72-4.37-8.06-8.53-12.89-11.56-9.34-5.85-16.73-4-23.49,4.75-.49.63-.98,1.27-2.19,1.88,6.04-9.19,4.17-17.67-2.48-25.75.45-.16.9-.32,1.34-.48Zm-78.24,12.27c.08.41.16.83.24,1.24-11.71,4.89-18.59,13.82-21.7,26.02-2.2-6.11-4.17-12.42-.86-17.85,2.19-3.59,6.86-5.66,10.18-8.22-.15-.07-1.26-.6-2.37-1.13l.24-.68c4.75.21,9.51.42,14.26.63Z"/>
  <path class="cls-1" d="m538.67,666.99c-3.03-22.94-2.82-44.97.78-66.99,3.61-22.09,10.7-42.84,23.72-62.5-22.01,5.86-42.31,6.74-59.79-10.47,5.96.74,11.29,1.79,16.65,1.95,5.33.15,10.69-.59,16.14-1.68-12.81-5.24-23.79-12.32-31.16-24.04-7.34-11.67-8.67-24.58-7.15-38.03-.52-.12-1.04-.23-1.56-.35-2.5,7.77-5.54,15.4-7.4,23.32-7.06,30.06-8.42,60.59-6.54,91.33,1.32,21.67,4.27,43.04,11.24,63.7,3.64,10.79,8.41,20.98,15.96,29.71,2.49,2.88,4.84,3.99,8.63,2.31,6.66-2.97,13.53-5.48,20.48-8.24Z"/>
  <path class="cls-1" d="m614.37,320.33c-10.8,4.63-21.95,7.31-33.43,7.01-11.78-.31-23.52-2.07-35.31-2.84-6.79-.44-13.67-.72-20.43-.09-12.63,1.18-21.43,7.91-25.07,20.28-3.82,12.97-1.76,24.78,8.62,34.24,12.98,11.84,37.67,12.64,51.43,1.71,4.96-3.94,8.49-8.8,8.85-15.93-13.13.53-26.2,1.98-37.25-7.04,16.63,4.36,32.65,2.41,47.9-4.88,14.86-7.1,27.71-16.64,34.68-32.47Z"/>
  <path class="cls-1" d="m592.96,381.76c-2.72-.54-4.41-1.33-5.93-1.07-2.26.38-5.47.94-6.29,2.47-.83,1.55.03,5.05,1.4,6.57,6.31,7,14.84,9.86,23.88,11.11,3.34.46,5.03-2.66,3.27-5.78-1.29-2.28-3.19-4.22-4.23-7.13,3.77,2.98,8.01,5.53,11.19,9.04,4.21,4.65,7.81,9.91,11.3,15.15,7.74,11.6,24.38,16.82,37.3,11.44,1.05-.44,2.07-.97,3.82-1.79-.55,1.85-.92,3.1-1.42,4.78,4.04-.1,7.99,4.14,11.12-.82,3.26-5.15-2.03-7.07-4.48-9.59-13.43-13.84-26.77-27.8-40.79-41.04-10.9-10.29-24.08-15.31-39.4-12.16-4.32.89-10.11,1.05-10.94,6.05-.42,2.53,3.76,5.89,6.01,8.77,1,1.28,2.36,2.29,4.19,4.03Z"/>
  <path class="cls-1" d="m718.43,364.03c-21.76,9.48-44.17,12.48-68.39,9.73,4.39,5.84,8.74,11.71,13.24,17.47.46.59,1.84.74,2.75.66,13.51-1.2,26.77-3.38,38.35-11.17,6.17-4.15,11.1-9.43,14.03-16.69Z"/>
  <path class="cls-1" d="m584.89,547.68c-11.27,30.54-10.38,61.25-.88,93.29,4.22-2.86,7.27-4.92,10.22-6.92-10.57-28.31-13.19-56.93-9.34-86.37Z"/>
  <path class="cls-1" d="m615.64,618.12c3.4-2.71,6.48-5.16,10-7.98-11.2-15.67-18.15-33.09-23.04-52.27-2.79,13.8,3.49,42.46,13.04,60.24Z"/>
  <path class="cls-1" d="m626.62,500.5c-3.75-9.38-7.54-12.85-11.92-12.05-1.23-3.27-2.41-6.42-3.59-9.58-1.96,1.01-3.91,2.02-5.84,3.02.15-2.37.54-4.97.4-7.54-.08-1.48-1.01-2.91-1.55-4.37-1.36.78-2.77,1.49-4.05,2.38-.63.44-1,1.24-2.06,2.61-.23-2.61-.39-4.44-.55-6.22-5.09-.52-7.18,1.16-5.9,5.51,1.09,3.7,2.84,7.58,5.39,10.39,7.83,8.64,18.35,12.58,29.69,15.84Z"/>
  <path class="cls-1" d="m624.11,506.22c-7.01-4.41-14.17-8.59-20.98-13.3-4.9-3.39-9.29-7.5-13.94-11.24-.84-.67-1.87-1.64-2.77-1.6-4.91.2-12.93,10.32-12.37,16.29,1.87-1.16,3.49-2.04,4.97-3.12,1.41-1.02,2.67-2.24,4.35-3.68-.25,2.72-.43,4.76-.72,7.94,3.43-1.47,5.9-2.53,8.21-3.52,1.08,2.01,1.74,5.17,3.51,6,1.74.82,4.6-.71,6.05-1.01,6.92,6.47,15.94,5.17,23.7,7.25Z"/>
  <path class="cls-1" d="m625.14,422.88c-2.83-3.9-5.4-7.56-8.09-11.13-3.71-4.93-9.21-5.73-14.75-5.54-1.2.04-3.42,2.89-3.24,4.17.43,3.08,1.3,6.61,3.26,8.85,4.54,5.2,15.87,6.67,22.81,3.65Z"/>
  <path class="cls-1" d="m674.34,541.79c2.05-3.48,3.25-5.51,4.87-8.28-3.41-1.15-6.21-2.1-9.01-3.04-.36.35-.71.69-1.07,1.04,1.52,3,3.04,6.01,5.21,10.28Z"/>
  <polygon class="cls-1" points="674.52 491.45 690.65 504.27 673.53 527.49 651.24 522.38 655.64 491.45 674.52 491.45"/>
  <path class="cls-1" d="m672.23,532.97c.55.77,3.28,4.68,2.11,8.82-1.41,5-8.03,8.69-15.63,7.03l-10.16-22.95c7.22,1.53,14.43,3.06,21.65,4.59"/>
</svg>
    <div className="onglets">
      {/* <p class="link">Hogar</p>
<p class="link">Novedades</p>
<p class="link">Ofertas</p>
<p class="link">Contacto</p>
<p class="link">Compras</p> */}
      <form>
        <input type="search" placeholder="Buscar" />
      </form>
      {/* <p><i class="far fa-heart"></i></p> */}
      <p><i className="fas fa-shopping-cart" /></p>
    </div>
  </nav>
  {/* Fin de la barre de navigation */}
  <section className="container section-1">
    <div className="slogan">
      <h1 className="company-title">¿Quieres llevar tu entrenamiento al siguiente nivel?</h1>
      <h2 className="company-slogan">
        
      
¡DOMINA tu rendimiento con nuestra selección EXCLUSIVA de SUPLEMENTOS! 💪💥 Despierta tu POTENCIAL y alcanza tus metas fitness como nunca antes. ¡Convierte cada entrenamiento en una VICTORIA y haz que tu cuerpo hable por sí mismo! 🔥🚀
      </h2>
    </div>
    <div className="home-computer-container">
      <img className="home-computer" src="https://www.nutricore.com.co/images/categories/thumbs/brand_31.1606252257.png" alt="a computer in dark with shadow" />
    </div>
  </section>
  {/* Header width="60" height="60" */}
  <header>
    <h1 className="h1Inicial">Activa tu cuerpo con nuestra suplemetacion.</h1>
  </header>
  {/* Fin du header */}
  {/* Section principale */}
  <section className="main">
    {/* Toutes les cartes */}

    <div className="containerCardX">
    {<CardX data={{id: "Hipercalorica", description: '¡Potencia tus ganancias con nuestras proteínas hipercalóricas! Energía y crecimiento en cada gramo.', image: 'https://cdnx.jumpseller.com/elite-nutrition-colombia/image/45040328/resize/540/540?1706549123',category: "Hipercaloricas"}} />}
    {<CardX data={{id: "Deficit", description: '¡Fuerza Pura en Cada Batido! ¡Potencia tu Entrenamiento con Explosión Muscular!',image:"https://suplementos.b-cdn.net/proteinas/nitro-tech-2lbs-vainilla-500x500.webp",category: "Whey Protein",color: "#9bdc28"}} />}
    </div>

    {/* <div className="cards">
      <div className="card">
        <a href="https://4ndresg4.github.io/style1.html" className="enlace-sin-subrayado"> 
          <img src="https://i.imgur.com/lE3JJTD.png" />
          <div className="card-header">
            <h4 className="title">Manga corta Attom</h4>
            <h4 className="priceV">$70.000</h4>
            <h4 className="price">$49.990</h4>
          </div>
          <div className="card-body">
            <p>Tela drift de alta duracion,Blanca con negro</p>
          </div>
        </a></div><a href="https://4ndresg4.github.io/style1.html" className="enlace-sin-subrayado">
      </a><div className="card"><a href="https://4ndresg4.github.io/style1.html" className="enlace-sin-subrayado">
        </a><a href="https://4ndresg4.github.io/style2.html" className="enlace-sin-subrayado"> 
          <img src="https://i.imgur.com/W9nHbfb.png" />
          <div className="card-header">
            <h4 className="title">Manga corta Attom</h4>
            <h4 className="priceV">$70.000</h4>
            <h4 className="price">$49.990</h4>
          </div>
          <div className="card-body">
            <p>Tela drift de alta duracion,Negra con blanco</p>
          </div>
        </a>
      </div>
      <div className="card">
        <a href="https://4ndresg4.github.io/style3.html" className="enlace-sin-subrayado"> 
          <img src="https://i.imgur.com/kicbdZV.png" />
          <div className="card-header">
            <h4 className="title">Manga corta Attom</h4>
            <h4 className="priceV">$70.000</h4>
            <h4 className="price">$49.990</h4>
          </div>
          <div className="card-body">
            <p>Tela drift de alta duracion,Cafe con negro</p>
          </div>
        </a>
      </div>
    </div> */}
    {/* Fin de toutes les cartes */}
    {/* Video de presentation */}
    {/* <img className="Publicidad" src="https://i.imgur.com/HZhYURx.jpeg" /> */}
    {/* Fin de la video de presentation */}
  </section>
  {/* Fin de la section principale */}
  {/* Pied de page */}
  <footer>
    <p>© Contactanos al +57 3225835201</p>
    <div className="social-media">
      {/* <p><i class="fab fa-facebook-f"></i></p>
<p><i class="fab fa-twitter"></i></p> */}
      <a href="https://instagram.com/attom_fitness?igshid=NTc4MTIwNjQ2YQ==" className="instagramF"><p><i className="fab fa-instagram" /></p></a>
      {/* <p><i class="fab fa-linkedin-in"></i></p> */}
    </div>
  </footer>
  {/* Fin du pied de page */}
</div>

        
        </>
    )
}

export default Home