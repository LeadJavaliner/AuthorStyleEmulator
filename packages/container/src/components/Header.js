import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
    },
  },
  appBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // 60% transparency
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
}));

export default function Header({ isSignedIn, onSignOut }) {
  const classes = useStyles();

  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      {/* <video
        className={classes.backgroundVideo}
        autoPlay
        loop
        muted
      >
        <source src="https://mdbootstrap.com/img/video/Lines.mp4" type="video/mp4" />
      </video> */}
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Button
            color="primary"
            variant="contained"
            className={classes.link}
            component={RouterLink}
            to="/"
            onClick={onClick}
          >
            Home
          </Button>
          <Typography>
          </Typography>

          <Button
            color="primary"
            variant="contained"
            className={classes.link}
            component={RouterLink}
            to={isSignedIn ? '/' : '/auth/signin'}
            onClick={onClick}
          >
            {isSignedIn ? 'Logout' : 'Login'}
          </Button>
          <Button
            color="primary"
            variant="outlined"
            className={classes.link}
            component={RouterLink}
            to="/"
            onClick={onClick}
          >
            Cart
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
