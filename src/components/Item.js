import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText, Card, CardContent, CardActions, CardHeader, CardMedia, Avatar, IconButton, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Item({ item }) {

    const classes = useStyles();

    return (
        <ListItem>
            <ListItemText>
                <Card className={classes.root}>
                    <CardHeader avatar={<Avatar> <FavoriteIcon /></Avatar>} title={item.name} subheader={item.fileName} />
                    <CardMedia className={classes.media} image={item.image} title="Image" />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.legendTitle}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton component={Link} to="/edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </ListItemText>
        </ListItem>
    )
}

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
}));