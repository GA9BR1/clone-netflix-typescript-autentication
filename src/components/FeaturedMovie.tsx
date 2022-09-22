import React from "react";
import styles from './featuredmovie.module.scss'

type Genre =  {
    name: string;
}

export type Objeto = {
    first_air_date: string;
    genres: Genre [];
    overview: string;
    id: number;
    name: string;
    vote_average: number;
    number_of_seasons: number;
    backdrop_path: string;
}

type Item = {
    item: Objeto ;

}

export default ({item}:Item) => {
    

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.overview; 
    if(description.length > 200) {
        description = description.substring(0, 200)+'...';
    }

    return (
        <section className={styles.featured} style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className={styles.featuredVertical}>
                <div className={styles.featuredHorizontal}>
                    <div className={styles.featuredName}>{item.name}</div>
                    <div className={styles.featuredInfo}>
                        <div className={styles.featuredPoints}>{item.vote_average} pontos</div>
                        <div className={styles.featuredYear}>{firstDate.getFullYear()}</div>
                        <div className={styles.featuredSeasons}>{item.number_of_seasons} temproada{item.number_of_seasons != 1 ? 's' : ''}</div>
                    </div>
                    <div className={styles.featuredDescription}>{description}</div>
                    <div className={styles.featuredButtons}>
                        <a href={`/watch/${item.id}`} className={styles.featuredWatchButton}>► Assistir</a>
                        <a href={`/list/add/${item.id}`} className={styles.featuredMylistButton}>+ Minha Lista</a>

                    </div>
                    <div className={styles.featuredGenres}><strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
        
    )
}