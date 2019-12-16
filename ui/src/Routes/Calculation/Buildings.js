import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleImageSlider from 'react-simple-image-slider';

const useStyles = makeStyles(theme => ({
  slider: {
    margin: '20px',
    borderRadius: '8px',
  },
}));

function Buildings() {
  const classes = useStyles();

  const images = [
    { url: '1.png' },
    { url: './Calculation/2.png' },
    { url: '3.png' },
    { url: '4.png' },
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
