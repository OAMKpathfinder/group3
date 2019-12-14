import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SimpleImageSlider from "react-simple-image-slider";

const useStyles = makeStyles(theme => ({
  slider: {
    margin: '20px',
    borderRadius: '8px'
  }
}));

function Buildings() {
  const classes = useStyles();

  const images = [
    { url:"http://www.bokorrenovation.com/wp-content/uploads/2015/02/Master-Small-Bathroom-Remodels.jpg" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Huvilakatu_omakotitalo.jpg" },
    { url: "https://assets.meillakotona.fi/w7lrg8grgqb7/meillakotona_file_125088/eb868274e5a121ee1bed03ef76b8a303/MT_korjaa_oikein_50_luvun_talo_cEftZ.jpg?w=1536&q=75&fit=crop-center" },
    { url: "https://designmag.fr/wp-content/uploads/2015/02/bibliotheque-piece-design-oval.jpg" }
  ];

  return (
    <div className={classes.slider}>
      <SimpleImageSlider
        className={classes.slider}
        width={500}
        borderRadius={5}
        height={304}
        images={images}
      />
    </div>
  );
}

export default Buildings;

