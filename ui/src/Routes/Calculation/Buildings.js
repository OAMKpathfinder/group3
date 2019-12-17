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
                  A small house, usually in the countryside, a historic construction
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
                  Single family (detached)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A stand-alone house is a free-standing residential building. It is sometimes
                  referred to as a single-family home, as opposed to a multi-family residential
                  dwelling.
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
                  Townhome (historic)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Historically, a townhouse was the city residence of a noble or wealthy family, who
                  would own one or more country houses in which they lived for much of the year.
                  From the 18th century, landowners and their servants would move to a townhouse
                  during the social season (when major balls took place).
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
                  Condominium (historic)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Unlike apartments, which are leased by their tenants, condominium units are owned
                  outright. ... Scholars have traced the earliest known use of the condominium form
                  of tenure to a document from first-century Babylon. The word condominium
                  originated in Latin.
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
                <img alt="" src={img5} className="img" />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Apartment
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An apartment (American English), or flat (British English, Indian English) is a
                  self-contained housing unit (a type of residential real estate) that occupies only
                  part of a building, generally on a single storey.
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

export default Buildings;
