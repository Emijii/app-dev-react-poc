import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import AxiosService from './api/AxiosService';
import Item from './Item';

export default function Home() {

    const [items, setItems] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        retrieveItems();
    }, []);

    const retrieveItems = () => {
        AxiosService.get15()
            .then(response => {
                setItems(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const handleDelete = (id) => {
        const newList = items.filter((item) => item.id !== id);
        setItems(newList);
    };

    return (
        <>
            <Grid container className={classes.gridContainer} spacing={2}>
                {
                    items.map((item) => (
                        <Item key={item.id} item={item} onDelete={handleDelete} />
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
