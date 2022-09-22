import React, { useEffect } from 'react'
import { useState } from 'react'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'
import styles from './styles.module.scss'
import Tmdb, {Categoria} from './Tmdb'
import {FilmeInfo} from './components/FeaturedMovie'
import MovieRow from './components/MovieRow'



export default () => {
  const [movieList, setMovieList] = useState<Categoria[]>([]);
  const [featuredData, setFeaturedData] = useState<FilmeInfo | null>(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=> {
    const loadAll = async () => {
      // Requisição da lista total de filmes.
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o filme principal aleatoriamente.
      let originals = list.filter(i=>i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.length - 1))
      let chosen = originals[0].items[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo({movieId: chosen.id, tipo: 'tv'});

      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }

    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }

  }, []);

  return (
    <div className={styles.page}>
      <Header black={blackHeader}/>

      {featuredData && 
      <FeaturedMovie item={featuredData} />
      }

      <section className={styles.lists}>
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      <footer>
        Feito com <span role='img' aria-label='coração'>❤️</span> por Gustavo Alberto <br></br>
        Direitos de imagem para Netflix <br></br>
        Dados pegos do site themoviedb.org
      </footer>

      {movieList.length <= 0 &&
        <div className={styles.loading}>
          <img src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif' alt='Carregando'></img>
        </div>
      }
    </div>
  )
}
