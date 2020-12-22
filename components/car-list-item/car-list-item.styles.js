const { makeStyles } = require('@material-ui/core');

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    margin: 'auto',
    height: '100%',
    display: 'grid',
    alignItems: 'stretch',
  },
  image: (props) => ({
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    alignSelf: 'stretch',
    background: `url(${props.photo}) no-repeat center`,
    backgroundSize: 'cover',
    '@media (max-width:959px)': {
      height: '25vw',
    },
    '@media (max-width:500px)': {
      height: '60vw',
    },
  }),
  textDiv: {
    padding: '0 8px 8px 0 !important',
    '@media (max-width:959px)': {
      padding: '0 8px 8px !important',
    },
  },
  buttonDiv: {
    padding: '8px !important',
    '& button': {
      padding: '0.5rem',
      backgroundColor: 'darkblue',
      color: 'white',
    },
    '& button:hover': {
      backgroundColor: 'blue',
    },
  },
}));
