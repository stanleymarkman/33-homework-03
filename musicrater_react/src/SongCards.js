import React from 'react';
import axios from "axios";

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";

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

class SongCard extends React.Component {
    constructor() {
        super();
        this.state = { data: [] };
      }
    
    componentDidMount(){
        axios.get('http://localhost:8000/getallsongs/')//.then(res => res.json())
        .then(json => this.setState({ data: json.data }));

    }

    refresh(){
      axios.get('http://localhost:8000/getallsongs/')//.then(res => res.json())
      .then(json => this.setState({ data: json.data }));

  }

    handleDelete(pk) {
      const formData = new FormData();
      formData.append('song', pk.pk);
      axios.post('http://localhost:8000/deletesong/', formData);

      var arr = [...this.state.data];
      var i = arr.indexOf(pk);
      if (i != -1) {
        arr.splice(i, 1);
        this.setState({ data: arr}, () => {
          console.log(this.state.data)
        });
      }
      
    }

    handleSort(mode){
      var data = this.state.data;
      if(mode == "rating"){
        data.sort((a, b) => (a.fields.avgrating < b.fields.avgrating) ? 1 : -1)
      }
      if(mode == "songname"){
        data.sort((a, b) => (a.pk < b.pk) ? 1 : -1)
      }
      if(mode == "artistname"){
        data.sort((a, b) => (a.fields.artist < b.fields.artist) ? 1 : -1)
      }
      this.setState({ data: data });
    }


    render() {
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

        const classes = this.props;
        console.log("SONGCARDS" + JSON.stringify(this.state.data[0]));
        if(this.state.data == []){
            console.log("EMPTY");
            return "error";
        }

        return (
          
            <Grid container spacing={4}>
              <Button size="large" color="primary" onClick={() => this.refresh()}>
                      REFRESH
          </Button>

              <Button size="small" color="primary" onClick={() => this.handleSort("rating")}>
                      Sort By Rating
          </Button>
          <Button size="small" color="primary" onClick={() => this.handleSort("songname")}>
                      Sort By Song Name
          </Button>
          <Button size="small" color="primary" onClick={() => this.handleSort("artistname")}>
                      Sort By Artist Name
          </Button>

            {this.state.data.map((card) =>
            (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" component="h2">
                        {card.pk}
                    </Typography>
                    <Typography variant="subtitle1" component="h2">
                        by {card.fields.artist}
                    </Typography>

                    Average Rating: {card.fields.avgrating}
                    
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => this.handleDelete(card)}>
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              )
            )
            }
          </Grid>
        )
    }
  }
export default withStyles(useStyles, { withTheme: true })(SongCard);