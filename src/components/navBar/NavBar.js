import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CartWidgetContainer from '../../containers/navBar/cartWidgetContainer'
import {useHistory} from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  let history = useHistory()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} onClick={() => history.push("/")}>
            MOTOPASIÓN
          </Typography>
          <Typography variant="h6" className={classes.title} onClick={() => history.push("/nuevas")}>
          <Button>Nuevas</Button>
          </Typography>
          <Typography variant="h6" className={classes.title} onClick={() => history.push("/usadas")}>
            <Button>Usadas</Button>
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <CartWidgetContainer />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
