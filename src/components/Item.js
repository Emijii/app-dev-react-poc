import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Collapse, Card, CardContent, CardActions, CardHeader, CardMedia, Avatar, IconButton, Typography, Tooltip } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Item({ item }) {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
                <CardHeader title={item.name} subheader={item.fileName}
                    avatar={
                        <Avatar className={item.imageStatus === 'Active' ? classes.avatar : ''}>
                            <Tooltip title={item.imageStatus} placement="top">
                                <FavoriteIcon />
                            </Tooltip>
                        </Avatar>}
                />
                <CardMedia className={classes.media} image={item.image} title="Image" />
                <CardContent className={classes.cardContent}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.type}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton component={Link} to="/edit">
                        <EditIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton className={clsx(classes.expand, { [classes.expandOpen]: expanded, })} onClick={handleExpandClick}>
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            Test
                    </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    )
}

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 400,
        margin: 'auto'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
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
    avatar: {
        backgroundColor: 'green'
    }
}));