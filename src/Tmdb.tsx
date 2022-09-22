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
-
*/
type MovieInfo = {
    movieId: number;
    tipo: string;
}

type HomeList = {
    endpoint: string;
}

const basicFetch = async ({endpoint}:HomeList) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch({endpoint: `/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`})
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch({endpoint: `/trending/all/week?language=pt-BR&api_key=${API_KEY}`})
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch({endpoint: `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`})
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch({endpoint: `/discover/movie?with_genres=28&language=pt-BR&pt-BR&api_key=${API_KEY}`})
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch({endpoint: `/discover/movie?with_genres=35&language=pt-BR&pt-BR&api_key=${API_KEY}`})
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch({endpoint:`/discover/movie?with_genres=27&language=pt-BR&pt-BR&api_key=${API_KEY}`})
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch({endpoint: `/discover/movie?with_genres=10749&language=pt-BR&pt-BR&api_key=${API_KEY}`})
            },
            {
                slug: 'Science Fiction',
                title: 'Ficção Ciêntifica',
                items: await basicFetch({endpoint: `/discover/movie?with_genres=878&language=pt-BR&pt-BR&api_key=${API_KEY}`})
            },
        ]
    },
    getMovieInfo: async ({movieId, tipo}:MovieInfo) => {
        let info = null;
        
        if(movieId) {
            switch(tipo){
                case 'movie':
                    info = await basicFetch({endpoint: `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`});

                break;
                case 'tv':
                    info = await basicFetch({endpoint: `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`});

                break;
            }
        }


        return info;

    }
}