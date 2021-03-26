import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActions, CardHeader, CardMedia, Avatar, IconButton, Box } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import StorageIcon from '@material-ui/icons/Storage';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

export default function Dashboard() {

    const classes = useStyles();

    return (
        <Grid container className={classes.gridContainer} spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.root}>
                    <CardHeader title="Puppies" subheader="See cute puppies!"
                        avatar={
                            <Avatar>
                                <PetsIcon />
                            </Avatar>}
                    />
                    <CardMedia className={classes.media} image="https://images.dog.ceo/breeds/kelpie/n02105412_6431.jpg" title="Puppies" />
                    <CardActions disableSpacing>
                        <Box>
                            <IconButton component={Link} to="/puppies">
                                <PlayArrowIcon />
                            </IconButton>
                        </Box>
                    </CardActions>
                </Card>
            </Grid >
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.root}>
                    <CardHeader title="Random Data" subheader="See random data."
                        avatar={
                            <Avatar>
                                <StorageIcon />
                            </Avatar>}
                    />
                    <CardMedia className={classes.media} image="https://tistatech.com/wp-content/uploads/2017/01/database-icon.png" title="Random Data" />
                    <CardActions disableSpacing>
                        <Box>
                            <IconButton component={Link} to="/virtualizedlist">
                                <PlayArrowIcon />
                            </IconButton>
                        </Box>
                    </CardActions>
                </Card>
            </Grid >
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.root}>
                    <CardHeader title="Mass Update" subheader="Mass update data."
                        avatar={
                            <Avatar>
                                <StorageIcon />
                            </Avatar>}
                    />
                    <CardMedia className={classes.media} image="images/MassUpdate.jpg" title="Mass Update" />
                    <CardActions disableSpacing>
                        <Box>
                            <IconButton component={Link} to="/MassUpload">
                                <PlayArrowIcon />
                            </IconButton>
                        </Box>
                    </CardActions>
                </Card>
            </Grid >
        </Grid >
    )
};

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 400,
        margin: 'auto'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
        width: '45%',
        marginLeft: '28%'
    },
    cardContent: {
        paddingBottom: 0
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto'
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    gridContainer: {
        margin: 0,
        width: '100%',
        padding: '20px'
    }
}));