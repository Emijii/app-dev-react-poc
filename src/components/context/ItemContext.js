import { createContext } from 'react';

const ItemContext = createContext({
    items: [],
    deleteItem: () => { },
    filterName: '',
    filterType: '',
    filterApplication: ''
});

export default ItemContext;