import { createContext } from 'react';

const ItemContext = createContext({
    items: [],
    deleteItem: () => { }
});

export default ItemContext;