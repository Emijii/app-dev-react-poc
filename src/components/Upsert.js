import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { RadioGroup, FormControlLabel, Radio, FormLabel, Grid, ButtonBase, TextField, Select, MenuItem, IconButton, InputLabel, FormControl, Card, CardHeader, Avatar, CardContent, Tooltip, CardActions } from '@material-ui/core';
import AxiosService from './api/AxiosService';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

export default function Upsert() {

    let location = useLocation();

    const [name, setName] = useState('');
    const [fileName, setFileName] = useState('');
    const [legendTitle, setLegendTitle] = useState('');
    const [imageStatus, setImageStatus] = useState('');
    const [image, setImage] = useState('');
    const [type, setType] = useState([]);
    const [selectedType, setSelectedType] = useState('');
    const [application, setApplication] = useState([]);
    const [selectedApplication, setSelectedApplication] = useState('');

    useEffect(() => {
        setName(location.state.name);
        setFileName(location.state.fileName);
        setImage(location.state.image);
        setLegendTitle(location.state.legendTitle);
        setImageStatus(location.state.imageStatus);
        retrieveType();
        retrieveApplication();
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

    const handleLegendTitleChange = (event) => {
        setLegendTitle(event.target.value);
    };

    const handleImageStatusChange = (event) => {
        setImageStatus(event.target.value);
    };

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handleApplicationChange = (event) => {
        setSelectedApplication(event.target.value);
    };

    const handleUploadImage = (event) => {
        setFileName(event.target.files[0].name);
        setImage(URL.createObjectURL(event.target.files[0]));
    };

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader title={name} subheader={fileName}
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
                                <img className={classes.img} alt="complex" src={image} />
                            </ButtonBase>
                        </Grid>
                        <Grid item>
                            <input id="uploadImageFile" className={classes.input} accept="image/*" type="file" onChange={handleUploadImage} />
                            <label htmlFor="uploadImageFile">
                                <Tooltip title="Upload Image" placement="top">
                                    <IconButton component="span">
                                        <PhotoCamera />
                                    </IconButton>
                                </Tooltip>
                            </label>
                        </Grid>
                        <Grid item>
                            <FormControl className={classes.formControl}>
                                <TextField className={classes.textField} label="Name" variant="outlined"
                                    value={name || ''} onChange={handleNameChange} error={name === '' ? true : false} helperText={name === '' ? 'Required' : ''} />
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
                                    defaultValue={legendTitle || ''} multiline error={legendTitle === '' ? true : false}
                                    helperText={legendTitle === '' ? 'Required' : ''}
                                    onChange={handleLegendTitleChange} />
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
                    <Tooltip title="Save" placement="top">
                        <IconButton component={Link} to="/">
                            <SaveIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Cancel" placement="top">
                        <IconButton component={Link} to="/">
                            <ClearIcon />
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        </div>
    )
};

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
    },
    input: {
        display: 'none'
    }
}));
