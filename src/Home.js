import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Movie from './components/Movie';

function Home() {
  const [movies, setMovies] = useState(null);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/?apikey=${process.env.REACT_APP_API_KEY}&s=man`
      );
      setMovies(result.data.Search);
      // console.log(result.data.Search);
    };
    getData();
  }, []);

  return (
    <div className="Home">
      <Header title="Zero Movie" setSearch={setSearch} />
      <Movie movies={movies} search={search} />
    </div>
  );
}

export default Home;
