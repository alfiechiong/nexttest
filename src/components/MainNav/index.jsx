import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Parallax } from '@react-spring/parallax'

const useStyles = makeStyles((theme)=>({
  root: {
    flexGrow: 1,
    position: 'fixed',
    right: theme.spacing(4)
  },
}));

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const parallax = useRef(null)

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(parallax)
    if (parallax.current) {
        parallax.current.scrollTo(newValue)
      }
  };

  const titleRef = useRef()
  function handleBackClick() {
    titleRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
      <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="success"
        centered
      >
        <Tab label="Home" />
        <Tab label="Process" />
        <Tab label="Case Study" />
        <Tab label="Contact Us" />
      </Tabs>
      </div>
  );
}