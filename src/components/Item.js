import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Collapse, Card, CardContent, CardActions, CardHeader, CardMedia, Avatar, IconButton, Typography, Tooltip, Box } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

export default function Item({ item, onDelete }) {

    const [expanded, setExpanded] = useState(false);
    const [confirmButtonDisplay, setConfirmButtonDisplay] = useState("hidden");
    const [actionButtonDisplay, setActionButtonDisplay] = useState("inline-block");

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleShowConfirmDelete = () => {
        setConfirmButtonDisplay("visible");
        setActionButtonDisplay("none");
    };

    const handleHideConfirmDelete = () => {
        setConfirmButtonDisplay("hidden");
        setActionButtonDisplay("inline-block");
    }

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
                        {item.type} / {item.application}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Box display={actionButtonDisplay}>
                        <IconButton component={Link} to={{
                            pathname: '/edit',
                            state: {
                                name: item.name,
                                image: item.image,
                                type: item.type,
                                application: item.application,
                                legendTitle: item.legendTitle,
                                fileName: item.fileName,
                                imageStatus: item.imageStatus
                            }
                        }}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={handleShowConfirmDelete}>
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                    <Box visibility={confirmButtonDisplay}>
                        <Tooltip title="Confirm Delete" placement="left">
                            <IconButton onClick={() => onDelete(item.id)} >
                                <CheckIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Cancel" placement="right">
                            <IconButton onClick={handleHideConfirmDelete}>
                                <ClearIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <IconButton className={clsx(classes.expand, { [classes.expandOpen]: expanded, })} onClick={handleExpandClick}>
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {item.legendTitle}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
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