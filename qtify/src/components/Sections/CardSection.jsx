import styles from "./CardSection.module.css";
import { useEffect, useState } from "react";
import AlbumCard from "../Card/AlbumCard";
import Carousel from "../Carousel/Carousel";
import axios from "axios";
import { capitalize } from "@mui/material";

export default function CardSection(props) {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const response = await axios.get(
          `https://qtify-backend-labs.crio.do/albums/${props.type}`
        );
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    }
    fetchAlbums();
  }, [props.type]);

  const handleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section className={styles.Cardcontainer}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          {capitalize(props.type)} Albums
        </h2>
        <button className={styles.seeAllButton} onClick={handleShowAll}>
          {showAll ? "Collapse" : "Show All"}
        </button>
      </header>
      <div className={styles.albumContainer}>
        {showAll ? (
          <div className={styles.cardGrid}>
            {albums.map((album) => (
              <AlbumCard
                key={album.id}
                albumArt={album.image}
                albumName={album.title}
                countOfFollowers={album.follows}
              />
            ))}
          </div>
        ) : (
          <Carousel
            items={albums}
            renderItem={(album) => (
              <AlbumCard
                albumArt={album.image}
                albumName={album.title}
                countOfFollowers={album.follows}
              />
            )}
          />
        )}
      </div>
    </section>
  );
}
