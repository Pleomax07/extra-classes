import axios from 'axios';

axios.defaults.baseURl = `https://api.themoviedb.org/3/`;
const API_KEY = '0214e4f6556edfc65f2eadfc23b43510';

export const fetchMovies = page => {
  return axios('trending/movie/day', {
    params: { api_key: API_KEY, page },
  });
};

// const searchParams = new URLSearchParams({
//     api_key: '0214e4f6556edfc65f2eadfc23b43510',
//     language: 'en-US',
//     page: p ?? 1,
//     include_adult: false,
//   });
// 10:25
// https://api.themoviedb.org/3/trending/movie/day?${searchParams}
