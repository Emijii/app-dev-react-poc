import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import PetsIcon from '@material-ui/icons/Pets';
import AxiosService from './components/api/AxiosService';
import ItemContext from './components/context/ItemContext';
import Home from './components/Home';
import Edit from './components/Edit';
import './App.css';

export default function App() {

  const [items, setItems] = useState([]);
  const [filterName, setFilterName] = useState('');

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

  const deleteItem = (id) => {
    const newList = items.filter((item) => item.id !== id);
    setItems(newList);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      setFilterName(event.target.value);
    }
  }

  return (
    <div>
      <ItemContext.Provider value={{ items, deleteItem, filterName }}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/" edge="start" className={classes.menuButton} color="inherit">
              <PetsIcon />
            </Link>
            <Typography className={classes.title} variant="h6" noWrap>
              POC
          </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput, }}
                onKeyDown={handleSearch} />
            </div>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/edit" component={Edit} />
        </Switch>
      </ItemContext.Provider>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));