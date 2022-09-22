import React, {useState} from 'react';
import styles from './movierow.module.scss'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



export type Objeto1 = {
    results: {length: number; results: Function; map: Function;}
    poster_path: string;
    original_title: string;
}

export type MovieRow = {
    items: Objeto1 ;
    title: string;
}

export default ({title, items}:MovieRow) => {
    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x)

    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth /2);
        let listW = items.results.length * 150;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60

        }
        setScrollX(x)

        
    }

    return(
        <div className={styles.movieRow}>
            <h2>{title}</h2>
            <div className={styles.movieRowLeft} onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize:50}}/>
            </div>
            <div className={styles.movieRowRight} onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize:50}}/>
            </div>
            <div className={styles.movieRowListArea}>
                <div className={styles.movieRowList} style={{
                    marginLeft: scrollX, width: items.results.length * 150
                    }}>
                    {items.results.length > 0 && items.results.map((item:Objeto1, key:number) =>(
                        <div key={key} className={styles.movieRowItem}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}></img>
                        </div>
                    ))}          
                </div>
            </div>
        </div>
    );
}