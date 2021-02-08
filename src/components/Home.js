import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, ButtonBase, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Home() {

    const classes = useStyles();
    
    return (
        <div>
            <Paper className={classes.paper}>
                <Typography gutterBottom variant="subtitle1">
                    Mochi
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
                        <Link to="/edit">
                            <EditIcon />
                        </Link>
                        <Link to="/">
                            <DeleteIcon />
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
