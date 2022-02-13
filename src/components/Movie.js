import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';

const MovieBox = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 250px))',
  justifyContent: 'center',
  gridGap: '30px',
  marginTop: '60px',
  marginBottom: '100px',
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

const Movie = ({ movies, search }) => {
  return (
    <Container>
      <MovieBox>
        {search ? (
          search.map((item, i) => (
            <Item key={item.Title + i}>
              <ImageWrap>
                <Image src={item.Poster} alt={item.Title} />
              </ImageWrap>
              <TitleWrap>
                <Typography
                  variant="h6"
                  sx={{ color: 'white', textAlign: 'center' }}
                >
                  {item.Title}
                </Typography>
              </TitleWrap>
            </Item>
          ))
        ) : movies ? (
          movies.map((item, i) => (
            <Item key={item.Title}>
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
        ) : (
          <>
            <Skeleton variant="rectangular" width={250} height={370} />
            <Skeleton variant="rectangular" width={250} height={370} />
            <Skeleton variant="rectangular" width={250} height={370} />
            <Skeleton variant="rectangular" width={250} height={370} />
          </>
        )}
      </MovieBox>
    </Container>
  );
};

export default Movie;
