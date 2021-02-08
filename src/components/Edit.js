import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, ButtonBase, Typography, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';

export default function Edit() {

    const name = "Mochi";

    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.paper}>
                <Typography gutterBottom variant="subtitle1">
                    <TextField label="Name" variant="outlined" value={name || ''} />
                </Typography>
                <Grid item xs={12} container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src="https://images.dog.ceo/breeds/cairn/n02096177_1362.jpg" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid container spacing={1}>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={4}>
                                    <Typography>TYPE</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography>Australian Kelpie</Typography>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={4}>
                                    <Typography>APPLICATION</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography>Service</Typography>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={4}>
                                    <Typography>LEGEND TITLE</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography>Mochi is the best!</Typography>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={4}>
                                    <Typography>FILE NAME</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography>Mochi.jpg</Typography>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={4}>
                                    <Typography>IMAGE STATUS</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography>Active</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Link to="/">
                            <SaveIcon />
                        </Link>
                        <Link to="/">
                            <ClearIcon />
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 800,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));
