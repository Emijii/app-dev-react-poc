import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ItemContext from './context/ItemContext';
import Item from './Item';

export default function Puppies() {

    const { items, deleteItem, filterName, filterType, filterApplication } = useContext(ItemContext);

    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.gridContainer} spacing={2}>
                {
                    items.filter(item =>
                        item.name.toLowerCase().includes(filterName)
                        || item.type.toLowerCase().includes(filterType)
                        || item.application.toLowerCase().includes(filterApplication)).map((item) => (
                            <Item key={item.id} item={item} onDelete={deleteItem} />
                        ))
                }
            </Grid>
        </>
    )
};

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
    gridContainer: {
        margin: 0,
        width: '100%',
        padding: '20px'
    }
}));
