import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MainNav from '../MainNav'
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position:'absolute',
    top: theme.spacing(1),
    zIndex:100
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(1)
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={100}>
        <Toolbar color="transparent">
        <Avatar alt="ACTEK" src="/static/images/avatar/1.jpg" className={classes.large} />
          <Typography variant="h6" className={classes.title}>
            ACTEK
          </Typography>
          <MainNav/>
        </Toolbar>
      </AppBar>
    </div>
  );
}