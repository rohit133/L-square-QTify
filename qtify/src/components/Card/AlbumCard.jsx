import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import styles from './AlbumCard.module.css';

export default function AlbumCard({ albumArt, countOfFollowers, albumName }) {
    return (
    <div className={styles.Card}>
            <Card sx={{ width: 159, height:215, borderRadius:2 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height={170}
                    width={159}
                    image={albumArt}
                />
                <CardContent className={styles.cardContent}>
                    <Chip className={styles.chip} label={`${countOfFollowers} Followers`} />
                </CardContent>
            </Card>
            <div className={styles.albumName}>
                {albumName}
            </div>
        </div>
    );
}