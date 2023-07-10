import React from 'react';
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
import { List, ListItem } from '@material-ui/core';

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

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
             Turing Limited
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Blockchain Asset Security Use Cases Research and Development
            </Typography>
            <CardMedia
                    className={classes.cardMedia}
                    image="https://turinglimited.com/assets/brand/2023-01-22_02_35_55.390473_0104efb9-1d79-4621-b639-9cbc65b7cc34.jpg"
                    title="Event Ticket NFT Asset"
                  />
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
              <Grid item>
                    <Link to="/nfteventtickets">
                      <Button variant="contained" color="primary">
                        NFT Event Tickets
                      </Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/usecases">
                      <Button variant="contained" color="primary">
                        Decentralized Identity
                      </Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link
                      to="/"
                      onClick={() => {
                          window.open("https://6uimj51ujk7.typeform.com/to/NMlyHccs", "_blank");
                        }
                      }
                  >
                    <Button variant="contained" color="primary">
                    Contact Us!
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
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
    </React.Fragment>
  );
}
