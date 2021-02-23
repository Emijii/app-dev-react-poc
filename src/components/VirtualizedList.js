import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FixedSizeList } from 'react-window';
import ItemContext from './context/ItemContext';

export default function VirtualizedList() {

    const { items } = useContext(ItemContext);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FixedSizeList itemData={items} itemSize={46} itemCount={items.length} height={400} width={300}>
                {ItemRenderer}
            </FixedSizeList>
        </div>
    );
};

function ItemRenderer({ data, index, style }) {
    //Access the items array using the "data" prop.
    const item = data[index];

    return (
        <div style={style}>
            {item.name}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        width: '100%',
        padding: '20px'
    }
}));
