import Masonry from "./ImagemLateral/Masonry.js";
import './AboutPage.css';

function AboutPage() {
  const items = [
    // Alturas reduzidas (entre 100px e 200px)
    { id: "0", img: process.env.PUBLIC_URL + "/images-du/imagemAbout.jpg", height: 170 },
    { id: "1", img: process.env.PUBLIC_URL + "/images-du/imagemAbout1.jpg", height: 180 },
    { id: "2", img: process.env.PUBLIC_URL + "/images-du/imagemAbout9.jpg", height: 110},
    { id: "3", img: process.env.PUBLIC_URL + "/images-du/imagemAbout3.jpg", height: 200 },
    { id: "4", img: process.env.PUBLIC_URL + "/images-du/imagemAbout4.jpg", height: 160 },
    { id: "5", img: process.env.PUBLIC_URL + "/images-du/imagemAbout5.jpg", height: 140 },
    { id: "6", img: process.env.PUBLIC_URL + "/images-du/imagemAbout6.jpg", height: 170 },
    { id: "7", img: process.env.PUBLIC_URL + "/images-du/imagemAbout7.jpg", height: 240 },
    { id: "8", img: process.env.PUBLIC_URL + "/images-du/imagemAbout8.jpg", height: 130 },
    { id: "9", img: process.env.PUBLIC_URL + "/images-du/imagemAbout2.jpg", height: 180 },
    { id: "10", img: process.env.PUBLIC_URL + "/images-du/imagemAbout10.jpg", height: 180}
  ];

  return (
    <div className="page-layout">
      <div className="masonry-right">
        <Masonry items={items} columns={3} /> {/* 3 colunas compactas */}
      </div>
    </div>
  );
}

export default AboutPage;