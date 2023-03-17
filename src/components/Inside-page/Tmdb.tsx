const API_KEY = '2bdeae335e9f36d190d6f11f0dc32a4c';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- Originais da Netflix
- Recomendados, filmes mais em destaque (trending)
- Em alta (top rated)
- ação
- comédia
- terror
- romance
- documentários
*/

export type Categoria = {
    slug: string;
    title: string;
    items: Filme[];
}

type Genre = {
    name: string;
}

type RespostaDoFilmeInfo = Filme & {
    genres: Genre [];
    number_of_seasons: number;
}

export type Filme = {
    name: string;
    id: number;
    first_air_date: string;
    poster_path: string;
    overview: string;
    vote_average: number;
    backdrop_path: string;
}

export type RespostaDoFilme = {
    results: Filme [];
}

const CategoriaFetch = async ({endpoint}: {endpoint: string}) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const response: RespostaDoFilme = await req.json();
    return response.results;
}

const FetchInfo = async ({endpoint}: {endpoint: string}) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const response: RespostaDoFilmeInfo = await req.json();
    return response;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await CategoriaFetch({endpoint: `/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`})
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await CategoriaFetch({endpoint: `/trending/all/week?language=pt-BR&api_key=${API_KEY}`})
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await CategoriaFetch({endpoint: `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`})
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await CategoriaFetch({endpoint: `/discover/movie?with_genres=28&language=pt-BR&pt-BR&api_key=${API_KEY}`})
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await CategoriaFetch({endpoint: `/discover/movie?with_genres=35&language=pt-BR&pt-BR&api_key=${API_KEY}`})
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await CategoriaFetch({endpoint:`/discover/movie?with_genres=27&language=pt-BR&pt-BR&api_key=${API_KEY}`})
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await CategoriaFetch({endpoint: `/discover/movie?with_genres=10749&language=pt-BR&pt-BR&api_key=${API_KEY}`})
            },
            {
                slug: 'Science Fiction',
                title: 'Ficção Ciêntifica',
                items: await CategoriaFetch({endpoint: `/discover/movie?with_genres=878&language=pt-BR&pt-BR&api_key=${API_KEY}`})
            },
        ]
    },
    getMovieInfo: async ({movieId, tipo}: {movieId: number, tipo: string}) => {
        let info = null;
        
        if(movieId) {
            switch(tipo){
                case 'movie':
                    info = await FetchInfo({endpoint: `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`});

                break;
                case 'tv':
                    info = await FetchInfo({endpoint: `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`});

                break;
            }
        }


        return info;

    }
}