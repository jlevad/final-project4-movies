import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Movie from './components/Movie';
import { Typography } from '@mui/material';

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('man');
  const [loading, setLoading] = useState(true);


  const getData = (search) => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_BASE_URL}/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}`)
      .then((response) => {
        // console.log(response);
        if (response.data.Search) {
          setMovies(response.data.Search);
        } else {
          setMovies([]);
        }
        setLoading(false);
      }).catch((error) => {
        // console.log(error);
        setMovies([]);
        setLoading(false);
      })
  }

  useEffect(() => {
    if (search.length >= 3) {
      getData(search);
    } else {
      setSearch('man');
    }
  }, [search]);

  useEffect(() => {
    getData(search)
  }, []);

  return (
    <div className="bg-neutral-500 h-full">
      <Header title="Zero Movie" setSearch={setSearch} />
      <div className='flex items-center justify-center mt-10 flex-col'>
        <Typography
          variant='h5'
        >
          Result for
        </Typography>
        <Typography
          variant='h4'
        >
          "{search}"
        </Typography>
      </div>
      <Movie movies={movies} loading={loading} />
    </div>
  );
}

export default Home;
