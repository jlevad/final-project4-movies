import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';

const MovieBox = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 250px))',
  justifyContent: 'center',
  gridGap: '30px',
  marginTop: '60px',
  paddingBottom: '100px',
});
const Item = styled('div')({
  height: 'max-content',
});
const ImageWrap = styled('div')({
  height: '380px',
  width: '100%',
  objectFit: 'cover',
});
const Image = styled('img')({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
});
const TitleWrap = styled('div')({
  padding: '8px 20px',
  background: '#06090c',
  marginTop: '2px',
  height: 'max-content',
  display: 'grid',
  placeItems: 'center',
});

const Movie = (props) => {
  const [movies, setMovies] = useState(props.movies);
  const [loading, setLoading] = useState(props.loading);

  useEffect(() => {
    setMovies(props.movies);
    setLoading(props.loading);
  }, [props]);

  return (
    <Container>
      <MovieBox>
        {
          loading ?
            (
              <>
                <Skeleton variant="rectangular" width={250} height={370} />
                <Skeleton variant="rectangular" width={250} height={370} />
                <Skeleton variant="rectangular" width={250} height={370} />
                <Skeleton variant="rectangular" width={250} height={370} />
              </>
            ) :
            movies.length !== 0 ?
              movies.map((item, i) => (
                <Item key={item.imdbID} className='hover:cursor-pointer hover:shadow-xl'>
                  <ImageWrap>
                    <Image src={item.Poster} alt={item.Title} />
                  </ImageWrap>
                  <TitleWrap>
                    <Typography variant="p" sx={{ color: 'white' }}>
                      {item.Title}
                    </Typography>
                  </TitleWrap>
                </Item>
              ))
              : (
                <div className='flex items-center justify-center w-full'>
                  <Typography>Data is not found</Typography>
                </div>
              )
        }
      </MovieBox>
    </Container>
  );
};

export default Movie;
