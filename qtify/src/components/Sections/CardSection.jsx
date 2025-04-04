import styles from "./CardSection.module.css";
import { useEffect, useState } from "react";
import AlbumCard from "../Card/AlbumCard";
import axios from "axios";
import { capitalize } from "@mui/material";

export default function CardSection(props) {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        async function fetchAlbums() {
            try {
                let response = await axios.get(`https://qtify-backend-labs.crio.do/albums/${props.type}`);
                setAlbums(response.data);
            } catch (error) {
                console.error("Error fetching albums:", error);
            }
        }
        fetchAlbums();
    }, []);
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <section className={styles.Cardcontainer}>
            <header className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{capitalize(props.type)} Albums</h2>
                <button className={styles.seeAllButton} onClick={handleShowAll}>
                    {showAll ? "Collapse" : "Show All"}
                </button>
            </header>
            <div className={styles.cardGrid}>
                {albums.slice(0, 7).map((album) => (
                    <AlbumCard
                        key={album.id} // Ensure each child has a unique key
                        albumArt={album.image}
                        albumName={album.title}
                        countOfFollowers={album.follows}
                    />
                ))}
            </div>
            {showAll && (
                <div className={styles.cardGrid}>
                    {albums.slice(7).map((album) => (
                        <AlbumCard
                            key={album.id} // Ensure each child has a unique key
                            albumArt={album.image}
                            albumName={album.title}
                            countOfFollowers={album.follows}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
