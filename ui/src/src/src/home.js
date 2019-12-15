import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


class Home extends Component{
render(){
return(
<div><Card className={classes.card}>
<CardActionArea>
  <CardMedia
    className={classes.media}
    img src="RENO.jpg" alt="Italian Trulli"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
      Gallery
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      Gallery about renovations done so far- hope you will enjoy it.
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button size="small" color="primary">
   View
  </Button>
  <Button size="small" color="primary">
    Share
  </Button>
</CardActions>
</Card>
</div>
)
}
}

export default Home;