import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, ButtonBase, TextField, Select, MenuItem, IconButton, InputLabel, FormControl, Card, CardHeader, Avatar, CardContent, Typography, Tooltip, CardMedia, CardActions } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Edit() {

    let location = useLocation();
    console.log(location);

    //TODO: Remove hard coded data once we have API data.
    const legendTitle = "Mochi is the best! This is a multiline text box.";
    const fileName = "Mochi.png";
    const imageStatus = "Active";

    const [type, setType] = useState('4');
    const [application, setapplication] = useState('3');

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleApplicationChange = (event) => {
        setapplication(event.target.value);
    };


    const classes = useStyles();

    return (
        <div>
            <Card className={classes.card}>
                <CardHeader title={location.state.name} subheader={location.state.fileName}
                    avatar={
                        <Avatar className={location.state.imageStatus === 'Active' ? classes.avatar : ''}>
                            <Tooltip title={location.state.imageStatus} placement="top">
                                <FavoriteIcon />
                            </Tooltip>
                        </Avatar>}
                />
                <CardMedia className={classes.media} image={location.state.image} title="Image" />
                <CardContent className={classes.cardContent}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {location.state.type} / {location.state.application}
                    </Typography>
                    <Grid container>
                        <Grid item>
                            <FormControl className={classes.formControl}>
                                <TextField className={classes.textField} label="Name" variant="outlined" defaultValue={location.state.name || ''} />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl className={classes.formControl} variant="outlined">
                                <InputLabel id="type-label">Type</InputLabel>
                                <Select id="type-select" labelId="type-label" className={classes.select} value={type} onChange={handleTypeChange} label="Type">
                                    <MenuItem value={1}>Australian Kelpie</MenuItem>
                                    <MenuItem value={2}>Border Collie</MenuItem>
                                    <MenuItem value={3}>Pug</MenuItem>
                                    <MenuItem value={4}>Cairn</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl className={classes.formControl} variant="outlined">
                                <InputLabel id="application-label">Application</InputLabel>
                                <Select id="application-select" labelId="application-label" className={classes.select} value={application} onChange={handleApplicationChange} label="Application">
                                    <MenuItem value={1}>Detection</MenuItem>
                                    <MenuItem value={2}>Herding</MenuItem>
                                    <MenuItem value={3}>Service</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl className={classes.formControl}>
                                <TextField className={classes.multilineTextField} label="Legend Title" variant="outlined" defaultValue={legendTitle || ''} multiline />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl className={classes.formControl}>
                                <TextField className={classes.textField} label="File Name" variant="outlined" defaultValue={fileName || ''} disabled />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl className={classes.formControl}>
                                <TextField className={classes.textField} label="Image Status" variant="outlined" defaultValue={imageStatus || ''} />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="https://images.dog.ceo/breeds/cairn/n02096177_1362.jpg" />
                            </ButtonBase>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton component={Link} to="/">
                        <SaveIcon />
                    </IconButton>
                    <IconButton component={Link} to="/">
                        <ClearIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(2)
    },
    image: {
        width: 128,
        height: 128
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%'
    },
    formControl: {
        margin: theme.spacing(1)
    },
    select: {
        minWidth: 223
    },
    multilineTextField: {
        minWidth: 223
    },
    textField: {
        minWidth: 200
    },
    card: {
        maxWidth: 400,
        margin: 'auto'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: 'green'
    }
}));
