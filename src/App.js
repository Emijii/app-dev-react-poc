import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, InputBase, IconButton, Tooltip } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import PetsIcon from '@material-ui/icons/Pets';
import AddIcon from '@material-ui/icons/Add';
import AxiosService from './components/api/AxiosService';
import ItemContext from './components/context/ItemContext';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Upsert from './components/Upsert';
import VirtualizedList from './components/VirtualizedList';
import './App.css';

export default function App() {

  const [items, setItems] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterApplication, setFilterApplication] = useState('');

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
      setFilterType(event.target.value);
      setFilterApplication(event.target.value);
    }
  }

  return (
    <div>
      <ItemContext.Provider value={{ items, deleteItem, filterName, filterType, filterApplication }}>
        <AppBar position="static">
          <Toolbar>
            <Tooltip title="Home" placement="bottom">
              <IconButton component={Link} to="/" edge="start" className={classes.menuButton}>
                <PetsIcon />
              </IconButton>
            </Tooltip>
            <Typography className={classes.title} variant="h6" noWrap>
              POC
            </Typography>
            <Tooltip title="New" placement="bottom">
              <IconButton component={Link} to={{
                pathname: '/upsert',
                state: {
                  name: '',
                  image: 'https://via.placeholder.com/150',
                  type: 'Cairn',
                  application: 'Hunting',
                  legendTitle: '',
                  fileName: '',
                  imageStatus: 'Active'
                }
              }} className={classes.menuButton}>
                <AddIcon />
              </IconButton>
            </Tooltip>
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
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/upsert" component={Upsert} />
          <Route path="/virtualizedlist" component={VirtualizedList} />
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
    color: 'white'
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