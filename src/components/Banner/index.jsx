import Typography from '@material-ui/core/Typography';
import {Grid} from '@material-ui/core';
import { useTrail, a } from '@react-spring/web'
import styles from './styles.module.css'
import {useState} from 'react'

const Trail = ({ open, children }) => {
    const items = children
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 1000, friction: 900 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 90, height: 0 },
    })
    return (
      <div className={styles.containerList} >
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} className={styles.trailsText} style={style}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    )
  }
  
export default function FixedContainer() {
    const [open, set] = useState(true)
  return (
      <Grid container md={12}>
          <Grid item md={6}>
          <Trail open={open}>
        <span>Secured</span>
        <span>Functional</span>
        <span>Responsive</span>
        <span>Design</span>
      </Trail>
      </Grid>
      </Grid>
  );
}
