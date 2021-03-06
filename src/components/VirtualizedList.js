import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FixedSizeGrid } from 'react-window';
import { AutoSizer } from 'react-virtualized';
import ItemContext from './context/ItemContext';
import VirtualizedItem from './VirtualizedItem';

export default function VirtualizedList() {

    const { items } = useContext(ItemContext);
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <AutoSizer>
                {({ height, width }) => (
                    <FixedSizeGrid
                        itemData={items}
                        columnCount={3}
                        columnWidth={400}
                        rowCount={Math.max(items.length / 3)}
                        rowHeight={400}
                        height={height}
                        width={width}>
                        {Cell}
                    </FixedSizeGrid>
                )}
            </AutoSizer>
        </div>
    );
};

function Cell({ columnIndex, rowIndex, style, data }) {

    const item = data[rowIndex * 3 + columnIndex];

    console.log("item: " + item.name);
    console.log("style: " + style);

    return (
        <div style={style}>
            <VirtualizedItem key={item.id} item={item} />
        </div>
    );
};

const useStyles = makeStyles(() => ({
    root: {
        margin: 0,
        width: '100%',
        height: '500px'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignContent: 'space-between',
        width: '100%',
        height: '630px'
    }
}));
