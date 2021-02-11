import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { RadioGroup, FormControlLabel, Radio, FormLabel, Grid, ButtonBase, TextField, Select, MenuItem, IconButton, InputLabel, FormControl, Card, CardHeader, Avatar, CardContent, Tooltip, CardActions } from '@material-ui/core';
import AxiosService from './api/AxiosService';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Edit() {

    let location = useLocation();

    const [name, setName] = useState('');
    const [type, setType] = useState([]);
    const [selectedType, setSelectedType] = useState('');
    const [application, setApplication] = useState([]);
    const [selectedApplication, setSelectedApplication] = useState('');
    const [imageStatus, setImageStatus] = useState('');

    useEffect(() => {
        setName(location.state.name);
        retrieveType();
        retrieveApplication();
        setImageStatus(location.state.imageStatus);
    }, []);

    const retrieveType = () => {
        AxiosService.getType()
            .then(response => {
                setType(response.data);
                setSelectedType(location.state.type);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const retrieveApplication = () => {
        AxiosService.getApplication()
            .then(response => {
                setApplication(response.data);
                setSelectedApplication(location.state.application);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handleApplicationChange = (event) => {
        setSelectedApplication(event.target.value);
    };

    const handleImageStatusChange = (event) => {
        setImageStatus(event.target.value);
    };

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader title={name} subheader={location.state.fileName}
                    avatar={
                        <Avatar className={imageStatus === 'Active' ? classes.avatar : ''}>
                            <Tooltip title={imageStatus} placement="top">
                                <FavoriteIcon />
                            </Tooltip>
                        </Avatar>}
                />
                <CardContent className={classes.cardContent}>
                    <Grid container>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={location.state.image} />
                            </ButtonBase>
                        </Grid>
                        <Grid item>
                            <FormControl className={classes.formControl}>
                                <TextField className={classes.textField} label="Name" variant="outlined"
                                    value={name || ''} onChange={handleNameChange} error={name === '' ? true : false} helperText={name === '' ? 'Name is required' : ''} />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl className={classes.formControl} variant="outlined">
                                <InputLabel id="type-label">Type</InputLabel>
                                <Select id="type-select" labelId="type-label" className={classes.select} label="Type"
                                    value={selectedType || ''} defaultValue={location.state.type || ''} onChange={handleTypeChange}>
                                    {type.map((item) => (
                                        <MenuItem key={item.id} value={item.name || ''}>
                                            {item.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl className={classes.formControl} variant="outlined">
                                <InputLabel id="application-label">Application</InputLabel>
                                <Select id="application-select" labelId="application-label" className={classes.select} label="Application"
                                    value={selectedApplication || ''} defaultValue={location.state.application || ''} onChange={handleApplicationChange}>
                                    {application.map((item) => (
                                        <MenuItem key={item.id} value={item.name || ''}>
                                            {item.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl className={classes.formControl}>
                                <TextField className={classes.multilineTextField} label="Legend Title" variant="outlined"
                                    defaultValue={location.state.legendTitle || ''} multiline />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl className={classes.formControl} component="fieldset">
                                <FormLabel component="legend">Image Status</FormLabel>
                                <RadioGroup name="imageStatus" value={imageStatus} onChange={handleImageStatusChange}>
                                    <FormControlLabel value="Active" control={<Radio />} label="Active" />
                                    <FormControlLabel value="Inactive" control={<Radio />} label="Inactive" />
                                </RadioGroup>
                            </FormControl>
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
        width: 228,
        height: 228
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
        minWidth: 100
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: 'green'
    }
}));
