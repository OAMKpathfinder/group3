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
import img5 from './5.png';
import img6 from './6.png'

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

function MaterSlider() {
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
                  Silicate brick
                </Typography>
                <Typography variant="caption" color="textSecondary" component="p">
                Calcium silicate bricks are made of sand and lime and known as sand lime bricks. These bricks are used for ornamental works in buildings, masonry works etc.
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
                  Facing brick
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Brick made especially for facing purposes by selecting clays to produce desired color or by special surface treatment.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
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
                  Timber
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Wood prepared for use in building and carpentry.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
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
                  Parquet board
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Five hardwood species (oak, walnut, hickory, maple, and cherry) are among the most common choices for residential flooring and each has its own properties.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.media} title="Contemplative Reptile">
                <img alt="" src={img6} className="img" />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Metal Roofing Panels
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Metal roofing panels have been used in a variety of educational, civic, agricultural, residential, retail, industrial, healthcare and recreational applications
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia className={classes.media} title="Contemplative Reptile">
                <img alt="" src={img5} className="img" />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Cement
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                A cement is a binder, a substance used for construction that sets, hardens, and adheres to other materials to bind them together.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      </GliderComponent>
    </div>
  );
}

export default MaterSlider;
