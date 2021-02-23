import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FixedSizeList } from 'react-window';
import { FixedSizeGrid } from 'react-window';
import ItemContext from './context/ItemContext';

export default function VirtualizedList() {

    const { items } = useContext(ItemContext);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FixedSizeGrid itemData={items} columnCount={3} columnWidth={100} height={150} rowCount={Math.max(items.length / 3)} rowHeight={35} width={300}>
                {Cell}
            </FixedSizeGrid>
            <FixedSizeList itemData={items} itemSize={46} itemCount={items.length} height={400} width={300}>
                {ItemRenderer}
            </FixedSizeList>
        </div>
    );
};

function Cell({ columnIndex, rowIndex, style, data }) {

    const item = data[rowIndex * 3 + columnIndex];

    console.log("item: " + item.name);

    return (
        <div style={style}>
            {item.name} {rowIndex},{columnIndex} {data.name}
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

const useStyles = makeStyles(() => ({
    root: {
        margin: 0,
        width: '100%',
        padding: '20px'
    }
}));
