const API_KEY = '84aca8079c89ba58a2ee50daedcd793b'
const apiBaseUrl='https://api.themoviedb.org/3'
const action =`/discover/movie?api_key=${API_KEY}&with_genres=28`
const originals = `/discover/tv?api_key=${API_KEY}&with_networks=213`
const ComedyMovies = `/discover/movie?api_key=${API_KEY}&with_genres=35`
const HorrorMovies = `/discover/movie?api_key=${API_KEY}&with_genres=27`
const RomanceMovies = `/discover/movie?api_key=${API_KEY}&with_genres=10749`
const Documentaries = `/discover/movie?api_key=${API_KEY}&with_genres=99`
const imageUrl = 'https://image.tmdb.org/t/p/w500/'
const posterUrl = 'https://image.tmdb.org/t/p/original/'

export {API_KEY, apiBaseUrl, imageUrl, posterUrl, originals, action, ComedyMovies, HorrorMovies, RomanceMovies, Documentaries}