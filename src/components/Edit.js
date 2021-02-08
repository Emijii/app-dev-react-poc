import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, ButtonBase, TextField, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';

export default function Edit() {

    //TODO: Remove hard coded data once we have API data.
    const name = "Mochi";
    const type = "Australian Kelpie";
    //const application = "Herding";
    const legendTitle = "Mochi is the best! This is a multiline text box.";
    const fileName = "Mochi.png";
    const imageStatus = "Active";

    const [application, setapplication] = useState('2');

    const handleChange = (event) => {
        setapplication(event.target.value);
    };


    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.paper}>
                <Grid item xs={12} container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src="https://images.dog.ceo/breeds/cairn/n02096177_1362.jpg" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid container spacing={1}>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={12}>
                                    <TextField label="Name" variant="outlined" defaultValue={name || ''} />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={12}>
                                    <TextField label="Type" variant="outlined" defaultValue={type || ''} />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={12}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="application-label">Application</InputLabel>
                                        <Select id="application-select" labelId="application-label" value={application} onChange={handleChange} label="Application">
                                            <MenuItem value={1}>Detection</MenuItem>
                                            <MenuItem value={2}>Herding</MenuItem>
                                            <MenuItem value={3}>Service</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={12}>
                                    <TextField label="Legend Title" variant="outlined" defaultValue={legendTitle || ''} multiline />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={12}>
                                    <TextField label="File Name" variant="outlined" defaultValue={fileName || ''} InputProps={{ readOnly: true, }} />
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} spacing={3}>
                                <Grid item xs={12}>
                                    <TextField label="Image Status" variant="outlined" defaultValue={imageStatus || ''} />
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}));
