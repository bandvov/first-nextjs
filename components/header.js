import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';
import { MainContext } from '../context/mainContext';

export default function Header() {
  const router = useRouter();
  const { state, send } = useContext(MainContext);

  const fetchData = () => {
    const { searchText } = state.context.filter;
    send({
      type: 'ADD_SEARCH_TEXT',
      searchText,
    });
    router.push({
      pathname: '/search',
      query: state.context.filter,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetchData();
  };

  const changeHandler = (e) => {
    send({
      type: 'ADD_SEARCH_TEXT',
      searchText: e.target.value,
    });
  };

  return (
    <div className={styles.header}>
      <Link href="/">
        <a>
          {' '}
          <h1>CARS</h1>
        </a>
      </Link>
      <Paper
        style={{
          display: 'flex',
          justifyContent: 'stretch',
        }}
        component="form"
      >
        <InputBase
          aria-label="here you can search a car"
          type="text"
          value={state.context.filter.searchText}
          onChange={changeHandler}
          id="searchfield"
          variant="outlined"
        />
        <Button aria-label='search button' type="submit" onClick={submitHandler}>
          <SearchIcon />
        </Button>
      </Paper>
      {router.route === '/car/add' ? (
        ''
      ) : (
        <Link href="/car/add">
          <Button variant="outlined">Add a new car</Button>
        </Link>
      )}
    </div>
  );
}
