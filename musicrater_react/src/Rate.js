import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import axios from "axios";

import "./static/formStyles.css";

const useStyles = makeStyles((theme) => ({
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    }));
const schema = yup.object().shape({
    username: yup.string().required(),
    songname: yup.string().required(),
    artistname: yup.string().required(),
    rating: yup.number().positive().integer().required(),
});

export default function Rate() {
    const { control, register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const classes = useStyles();

    const onSubmit = (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('username', data.username);
        formData.append('songname', data.songname);
        formData.append('artistname', data.artistname);
        formData.append('rating', data.rating);
        axios.post("http://localhost:8000/rate/", formData)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <Controller
            render={({ field }) => <input {...register("username")} />}
            name="username"
            control={control}
            defaultValue=""
        />
        <br />
        <p>{errors.username?.message}</p>
        <label>Song</label>
        <Controller
            render={({ field }) => <input {...register("songname")} />}
            name="songname"
            control={control}
            defaultValue=""
        />
        <br />
        <p>{errors.songname?.message}</p>
        <label>Artist</label>
        <Controller
            render={({ field }) => <input {...register("artistname")} />}
            name="artistname"
            control={control}
            defaultValue=""
        />
        <br />
        <p>{errors.artistname?.message}</p>
        <label>Rating</label>
        <Controller
            render={({ field }) => <input {...register("rating")} />}
            name="rating"
            control={control}
            defaultValue=""
        />

        <br />
        <p>{errors.rating?.message}</p>

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