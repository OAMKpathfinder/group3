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

const useStyles = makeStyles(theme => ({
  slider: {
    margin: '40px',
    borderRadius: '8px',
  },
  card: {
    margin: '30px',
  },
  media: {
    height: 240,
  },
  img: {
    width: '100%',
    height: '300px',
  },
}));

function Buildings() {
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
                <Typography gutterBottom variant="h5" component="h2">
                  Cottage (historic)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                  ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Save
              </Button>
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
                  Single family (detached)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                  ranging across all continents except Antarctica
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
                  Townhome (historic)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                  ranging across all continents except Antarctica
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
                  Condominium (historic)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                  ranging across all continents except Antarctica
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
                  Apartment
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                  ranging across all continents except Antarctica
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

export default Buildings;
