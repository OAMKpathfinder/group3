import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GliderComponent from 'react-glider-carousel';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import './glider.css';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';

const useStyles = makeStyles(theme => ({
  slider: {
    margin: '20px',
    borderRadius: '8px',
    width: '400px'
  },
  card: {
    margin: '20px',
  },
  media: {
    height: 150,
    marginBottom: '40px'
  },
  img: {
    width: '80%',
    height: '300px',
  },
}));

function ObjectSlider() {
  const classes = useStyles();

  return (
    <div className={classes.slider}>
      <GliderComponent hasArrows={true} hasDots={false}>
        <div>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.media} title="Contemplative Reptile">
                <img alt="" src={img1} className="img" />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom body2="h6" component="h2">
                  Window
                </Typography>
                <Typography variant="caption" color="textSecondary" component="p">
                an opening in the wall or roof of a building or vehicle, fitted with glass in a frame to admit light or air and allow people to see out
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Manual
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.media} title="Contemplative Reptile">
                <img alt="" src={img2} className="img" />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Door
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                A door is a hinged or otherwise movable barrier that allows ingress and egress into an "enclosure"
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Manual
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.media} title="Contemplative Reptile">
                <img alt="" src={img3} className="img" />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Roof
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                The structure forming the upper covering of a building or vehicle.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Manual
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.media}>
                <img alt="" src={img4} className="img" />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Walls
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                A wall is a structure that defines an area, carries a load; provides security, shelter, or soundproofing; or is decorative.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Manual
              </Button>
            </CardActions>
          </Card>
        </div>
      </GliderComponent>
    </div>
  );
}

export default ObjectSlider;
