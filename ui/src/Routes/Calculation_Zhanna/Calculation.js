import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import BorderAllIcon from '@material-ui/icons/BorderAll';
import Typography from '@material-ui/core/Typography'
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import { red } from '@material-ui/core/colors'
import Avatar from '@material-ui/core/Avatar';
import HeightIcon from '@material-ui/icons/Height';
import TextField from '@material-ui/core/TextField';
import LayersIcon from '@material-ui/icons/Layers';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import Divider from '@material-ui/core/Divider';
import Buildings from './Buildings'
import Slider from '@material-ui/core/Slider';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles(theme => ({
  card: {
    marginTop: '20px',
    width: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  container: {
    margin: '20px',
    padding: theme.spacing(3, 2)
  },
  paper: {
    margin: '20px',
    padding: theme.spacing(3, 2)
  },
  height: {
    color: '#fff',
    backgroundColor:  '#006600',
    margin: '5px'
  },
  floor: {
    color: '#fff',
    backgroundColor:  '#000099',
    margin: '5px'
  },
  area: {
    color: '#fff',
    backgroundColor:  '#993300',
    margin: '5px'
  },
  window: {
    color: '#fff',
    backgroundColor:  '#99ccff',
    margin: '5px'
  },
  wall: {
    color: '#fff',
    backgroundColor: '#990000',
    margin: '5px'
  },
  textfield: {
    marginLeft: '30px',
    display: 'inline-block',
    position: 'flex'
  },
  av: {
    display: 'inline-block'
  },
  formControl: {
    marginLeft: '10px',
    minWidth: '120px',
  },
  slider: {
    width: '70%',
    display: 'inline-block'
  }
}));

function Result() {
  const classes = useStyles();

  const marks = [
    {
      value: 1,
      label: '1 room',
    },
    {
      value: 2,
      label: '2 rooms',
    },
    {
      value: 3,
      label: '3 rooms',
    },
    {
      value: 10,
      label: '10 rooms',
    },
  ];

  const [age, setAge] = React.useState('');

  return (
    <Card className={classes.card}>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <div>
            <Buildings />
          </div>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <div>
              <div className={classes.av}>
              <Avatar variant="rounded" className={classes.wall}>
                <FilterNoneIcon />
              </Avatar>
              </div>
              <TextField className={classes.textfield} id="standard-basic" label="Number of walls" />
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Material</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <MenuItem>Stone</MenuItem>
                  <MenuItem>Glass</MenuItem>
                  <MenuItem>Brick</MenuItem>
                </Select>
              </FormControl>
            </div>
            <br></br>
            <br></br>
            <Divider />
            <br></br>
            <div>
            <div className={classes.av}>
              <Avatar variant="rounded" className={classes.window}>
                <BorderAllIcon />
              </Avatar>
              </div>
              <TextField className={classes.textfield} id="standard-basic" label="Number of windows" />
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Material</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <MenuItem>Stone</MenuItem>
                  <MenuItem>Glass</MenuItem>
                  <MenuItem>Brick</MenuItem>
                </Select>
              </FormControl>
            </div>
            <br></br>
            <Divider />
            <br></br>
            <div>
              <div className={classes.av}>
                <Avatar variant="rounded" className={classes.height}>
                  <HeightIcon />
                </Avatar>
                </div>
                <TextField className={classes.textfield} id="standard-basic" label="Ceiling height" />
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Units</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}

                  >
                    <MenuItem>cm</MenuItem>
                    <MenuItem>m</MenuItem>
                  </Select>
                </FormControl>
            </div>
            <br></br>
            <Divider />
            <br></br>
            <div>
            <div className={classes.av}>
                <Avatar variant="rounded" className={classes.floor}>
                  <LayersIcon />
                </Avatar>
                </div>
                <TextField className={classes.textfield} id="standard-basic" label="Floor thickness (cm)" />
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Material</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    <MenuItem>Stone</MenuItem>
                    <MenuItem>Glass</MenuItem>
                    <MenuItem>Brick</MenuItem>
                  </Select>
                </FormControl>
            </div>
            <br></br>
            <Divider />
            <br></br>
            <div>
            <div className={classes.av}>
                <Avatar variant="rounded" className={classes.area}>
                  <TextFormatIcon />
                </Avatar>
                </div>
                <TextField className={classes.textfield} id="standard-basic" label="Area of the building" />
                <div className="slider">
                  <Typography id="discrete-slider" gutterBottom>
                    Number of rooms
                  </Typography>
                  <Slider
                    defaultValue={3}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={15}
                  />
                </div>
            </div>
            <br></br>
            <Divider />
            <br></br>
            <Link to="/result/1">
              <Button variant="contained" color="primary">Calculate</Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>      
    </Card>
  );
}

export default Result
