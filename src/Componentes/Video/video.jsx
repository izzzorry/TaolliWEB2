import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../Firebase/config';
import './video.css';

function VideoSection() {
  const [escenas, setEscenas] = useState([]);
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // === ESCENAS ===
      const escenasDoc = await getDoc(doc(db, 'Teaser', 'qkgFkeiYrjWTtN8dPc7A'));
      if (escenasDoc.exists()) {
        const data = escenasDoc.data();
        const escenasArray = Object.keys(data)
          .filter((key) => data[key].Titulo && data[key].Descripcion)
          .sort((a, b) => {
            const numA = parseInt(a.match(/\d+/));
            const numB = parseInt(b.match(/\d+/));
            return numA - numB;
          })
          .map((key) => ({
            titulo: data[key].Titulo,
            descripcion: data[key].Descripcion,
            voz: data[key].Voz,
          }));
        setEscenas(escenasArray);
      }

      // === IMÁGENES ===
      const imagenesDoc = await getDoc(doc(db, 'Teaser', 'CjppzKOXaHhN9qCqu3RU'));
      if (imagenesDoc.exists()) {
        const data = imagenesDoc.data().Imagenes;
        const sortedUrls = Object.entries(data)
          .sort((a, b) => {
            const numA = parseInt(a[0].match(/\d+/));
            const numB = parseInt(b[0].match(/\d+/));
            return numA - numB;
          })
          .map(([, url]) => url);
        setImagenes(sortedUrls);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="video-section">
      <div className="video-title">
         <span>Teaser</span>
      </div>

      <div className="video-content">
        <div className="video-box">
          <iframe
            src="https://www.youtube.com/embed/3KpPMZHSVy8"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="storyboard-panel">

          <div className="description-box">
            {escenas.map((escena, index) => (
              <div key={index} className="scene">
                <p><strong>Escena {index + 1}:</strong> {escena.titulo}</p>
                <p className="italic">"{escena.voz}"</p>
                <p>{escena.descripcion}</p>
              </div>
            ))}
          </div>

          <div className="storyboard-grid">
            {imagenes.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Storyboard ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
