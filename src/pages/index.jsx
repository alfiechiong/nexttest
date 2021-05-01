import {useRef} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import BottomNav from '../components/BottomNav'
import AppTopBar from '../components/AppTopBar'
import Hidden from '@material-ui/core/Hidden'
import Banner from '../components/Banner'


const useStyles = makeStyles((theme) => ({
    root:{
        backgroundImage: `url("../assets/img/Liquid-Bg.svg")`
    },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  footer: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  content1:{
      minHeight:'100vh',
      backgroundColor:'#2b4f60'
  },
  content2:{
    minHeight:'100vh',
    width:'100vw',
    backgroundColor:'#ead3cb'
    
},
content3:{
    minHeight:'100vh',
    backgroundColor:'#bdc7c9'
},
content4:{
    minHeight:'100vh',
    backgroundColor:'#845460'
}
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const refName = useRef()

  return (
    <div className={classes.root}>
      
         <Hidden smDown>
            <AppTopBar />
        </Hidden>
      <Grid container spacing={3}>
    
        <Grid item sm={12} xs={12}>
                <Banner />
        </Grid>
      
        <Grid item sm={12} xs={12} ref={refName}>
          <Paper className={[classes.paper, classes.content1]}><h1 id="title">An interesting article for Latin readers</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit
            amet luctus neque. Etiam eu quam lacinia, placerat sem ut, interdum
            risus. Quisque ut feugiat mauris. Aenean euismod fermentum facilisis.
            Donec ultricies maximus elit, sit amet convallis urna rhoncus vitae.
            Aliquam bibendum turpis et felis blandit commodo. Donec egestas neque
            non elit laoreet, faucibus tempor ante gravida.
        </p>
        <p>
            Duis in ante turpis. Phasellus dignissim tellus et nunc lacinia
            elementum. Sed venenatis tincidunt justo. Praesent sed purus facilisis,
            porttitor ligula in, mattis velit. Curabitur non pellentesque nunc. Duis
            elit urna, bibendum et purus nec, maximus imperdiet mauris. Cras
            euismod, leo id vehicula vulputate, nibh massa tincidunt justo, sit amet
            fringilla quam orci pellentesque enim.
        </p>
    <p>...</p></Paper>

        </Grid>
        <Grid item md={12} sm={12} xs={12}>

                    <div className={[classes.paper, classes.content2]}>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et odio quam. Aenean commodo vitae lacus a vehicula. Proin sed mauris urna. Nullam non felis quis arcu blandit suscipit. Donec pulvinar risus aliquam auctor consectetur. Ut sem urna, suscipit id pretium quis, convallis ac leo. Donec in dui nisl. Ut ultrices, ligula non viverra gravida, mauris magna mollis ex, ut posuere dolor quam eu augue. Mauris nisi ex, lacinia nec accumsan nec, pretium non erat. Nulla libero mauris, lacinia vel efficitur et, faucibus id nisl.
        </p>
        <p>
        Nulla facilisi. Ut luctus, ligula sit amet varius fermentum, elit velit suscipit est, sed lacinia nisi massa vel nulla. Nulla vel purus ac erat consequat auctor. In placerat dui eu felis ultrices, eget iaculis libero aliquam. In posuere nisi at vestibulum tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras sed finibus felis. Mauris purus lectus, ornare quis quam nec, convallis dignissim turpis. Duis tincidunt ipsum id tincidunt pellentesque. Quisque pulvinar, ex nec ornare vestibulum, ipsum urna suscipit lacus, nec malesuada lacus urna at arcu. Sed aliquam eu massa sit amet facilisis. Nam eleifend risus at orci rhoncus scelerisque. Nunc auctor molestie dui vitae aliquet. Vivamus non sapien luctus, vestibulum dolor eget, condimentum purus. Maecenas non metus metus. Nam at dui auctor, pellentesque turpis non, sollicitudin metus.


          </p>
          </div>
       
        
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
    
          <Paper className={[classes.paper, classes.content3]}>content3</Paper>
      
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
   
          <Paper className={[classes.paper, classes.content4]}>Content4</Paper>
   
        </Grid>
        </Grid>
   
       
      <Hidden mdUp>
        <BottomNav />
      </Hidden>


  
    </div>
  );
}
