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
              NFT Event Ticking
            </Typography>
            <CardMedia
                    className={classes.cardMedia}
                    image="https://turinglimited.com/assets/brand/2023-01-22_23_47_34.759604_0104efb9-1d79-4621-b639-9cbc65b7cc34.jpg"
                    title="Event Ticket NFT Asset"
                  />
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
               <Grid item>
                  <Link to="/eventcreator">
                    <Button variant="contained" color="primary">
                      Event Form
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/eventcreatorwizard">
                    <Button variant="contained" color="primary">
                      Event Wizard
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/ticketsales">
                    <Button variant="contained" color="primary">
                      Ticket Sales
                    </Button>
                  </Link>
                </Grid>                
                {/* <Grid item>
                  <Link to="/ticketsalestest">
                    <Button variant="contained" color="primary">
                      Ticket Sales Test
                    </Button>
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link to="/eventreporter">
                    <Button variant="contained" color="primary">
                      Event Reporter
                    </Button>
                  </Link>
                </Grid>
                {/* <Grid item>
                  <Link to="/eventreportertest">
                    <Button variant="contained" color="primary">
                      Event Reporter Test
                    </Button>
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link to="/auth/signin">
                    <Button variant="contained" color="primary">
                      Sign In for Example Graphical Dashboard Report
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/venueseatmapper">
                    <Button variant="contained" color="primary">
                      Venue Seat Mapper
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://turinglimited.com/assets/brand/2023-01-22_23_47_34.759604_0104efb9-1d79-4621-b639-9cbc65b7cc34.jpg"
                    title="Event Ticket NFT Asset"
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
                    <Button size="small" color="primary" href='https://www.roblox.com/catalog?Category=3&Subcategory=58&salesTypeFilter=1' target="_blank">
                      Digtal Assets
                    </Button>
                    <Button size="small" color="primary" href='https://www.etsy.com/search?q=metaverse%20concert%20posters&ref=search_bar' target="_blank">
                      IRL Assets
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
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
