import React from 'react';
import axios from "axios";

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

async function GetSongCardsObject(){
    axios.get('http://localhost:8000/getallsongs/')
        .then((response) => {
            console.log("DATA" + JSON.stringify(response.data));
            //console.log(response.status);
            //console.log(response.statusText);
            //console.log(response.headers);
            //console.log(response.config);
            return response.data;
            try{
                return JSON.parse(response.data);
            }
            catch(error){
                console.log("Unable to parse songs from server.")
                return "error";
            }
        });
}

var SongCards = GetSongCardsObject();

const useStyles = makeStyles((theme) => ({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

export default function RenderCard(card){
    const classes = useStyles();
    //var SongCards = await GetSongCardsObject();
    //console.log("SONGCARDS" + SongCards);
    var artistName = "TAY-K";
    var songName = "THE RACE";
    //artistName = SongCards[card].artist;
    //songName = SongCards;
    //console.log(SongCards);
    return (
        <Grid item key={card} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          {/* <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title="Image title"
          /> */}
          <CardContent className={classes.cardContent}>
            <Typography variant="h5" component="h2">
              {songName}
            </Typography>
            <Typography variant="subtitle1" component="h2">
              {artistName}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    )
}