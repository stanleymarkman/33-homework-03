import React from "react";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';

import "./static/formStyles.css";

const useStyles = makeStyles((theme) => ({
    heroButtons: {
      marginTop: theme.spacing(4),
    },
  }));


export default function Rate() {
    const { control, handleSubmit } = useForm();
    const classes = useStyles();

    const onSubmit = (data) => {
    alert(JSON.stringify(data));
    };

    return (
        <form className={classes.formStyle} onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <Controller
            render={({ field }) => <input {...field} />}
            name="username"
            control={control}
            defaultValue=""
        />
        <br />
        <label>Song</label>
        <Controller
            render={({ field }) => <input {...field} />}
            name="song"
            control={control}
            defaultValue=""
        />
        <br />
        <label>Artist</label>
        <Controller
            render={({ field }) => <input {...field} />}
            name="artist"
            control={control}
            defaultValue=""
        />
        <br />
        <label>Rating</label>
        <Controller
            name="rating"
            control={control}
            render={({ field }) => (
                <Slider
                  {...field}
                  onChange={(_, value) => {
                    field.onChange(value);
                  }}
                  valueLabelDisplay="auto"
                  marks
                  min={0}
                  max={5}
                  step={1}
                />
              )}
        />

        <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
            <Grid item>
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </Grid>
            </Grid>
        </div>
    </form>
  );
};