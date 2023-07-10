import React, { useState } from 'react';
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MaterialLink from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import { Img } from 'react-image';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MaterialLink component={Link} to="/" color="inherit">
      Turing Limited
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    display: 'flex'
    
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const SearchComponent = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.duckduckgo.com/?q=${searchTerm}&format=json`
      );
      const data = await response.json();
      setResults(data.RelatedTopics);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
        


      <Typography variant="h5" align="center" color="textSecondary" paragraph>
      <div><Img
          src="https://turinglimited.com/assets/brand/search-purple-svgrepo-com.svg"
          alt="Search"
          style={{ width: '25%', height: 'auto' }}
        /></div>
      <Typography variant='h3' align='center' color='textPrimary' paragraph>
      Event Search
      </Typography>
        <Input
        className="form-control mb-3"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button 
          variant='contained'
          color='primary'
          onClick={handleSearch}>
            Search
        </Button>
        <Typography variant='subtitle1' align='center' color='textSecondary' paragraph>
          ( search for your favorite band, team, convention, venue, or event )
        </Typography>
        {results.length > 0 ? (
          <ul>
            {results.map((result) => (
              <li key={result.FirstURL}>
                <a href={result.FirstURL} target="_blank" rel="noreferrer">
                  {result.Text}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </Typography>
      <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <Img
                    src="https://turinglimited.com/assets/brand/event-poster-with-white-details-svgrepo-com.svg"
                    title="Event Ticket NFT Asset"
                    style={{ width: '85%', height: 'auto' }}
                  />

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      NFT Event Ticket Asset
                    </Typography>
                    <Typography>
                      A once in a lifetime event!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href='' target="_blank">
                      Add to cart
                    </Button>

                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
            {/* Footer */}
            <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              Turing Limited
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              component="p"
            >
              <p>Developing visionary software where artificial intelligence,
                  blockchain and distributed/decentralized technologies come together,
                  for the purposes of a safer, more egalitarian marketplace.</p>
            </Typography>
            <Copyright />
          </footer>
          {/* End footer */}
    </div>
  );
};

export default SearchComponent;
