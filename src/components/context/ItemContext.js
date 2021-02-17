import { createContext } from 'react';

const ItemContext = createContext({
    items: [],
    deleteItem: () => { },
    filterName: ''
});

export default ItemContext;