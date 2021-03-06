import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Typography, Box, Button,
} from '@material-ui/core';
import query from 'query-string';
import { makeStyles } from '@material-ui/core/styles';
import './Homepage.css';
import TranslateIcon from '@material-ui/icons/Translate';
import clsx from 'clsx';
import LeaderBoard from './LeaderBoard';

const useStyles = makeStyles({
  mainDiv: {
    position: 'relative',
    left: '10%',
    backgroundColor: '#5a6ad4',
    width: '80%',
    height: '500px',
    border: '1px solid gray',
    borderRadius: '5px',
    textAlign: 'center',
    boxShadow: '3px 3px 3px 6px lightgrey',
  },
  rightDiv: {
    position: 'relative',
    top: '5%',
    height: '450px',
    display: 'inline',
    width: '67%',
    float: 'right',
    marginRight: '10px',
    border: '2px solid gray',
    backgroundColor: 'white',
    boxShadow: '3px 3px 1px 1px black',
  },
  leftDiv: {
    position: 'relative',
    top: '5%',
    height: '450px',
    display: 'inline',
    width: '30%',
    float: 'left',
    border: '2px solid gray',
    marginLeft: '10px',
    backgroundColor: 'white',
    boxShadow: '3px 3px 1px 1px black',
  },
  container: {
    textAlign: 'center',
  },
  header: {
    borderBottom: '1px solid gray',
  },
  discord: {
    position: 'relative',
  },
});

const Homepage = ({ user, setNav }) => {
  const classes = useStyles();
  const { newuser } = query.parse(window.location.search);
  useEffect(() => setNav(true), []);
  let greeting;
  if (user.id) {
    greeting = `Welcome, ${user.name_user}`;
  }
  return (
    <div className={clsx(classes.container)}>
      <Typography variant="h2">
        {greeting}
        { newuser && (
        <Button id="google_translate_element"><TranslateIcon /></Button>
        )}
      </Typography>
      <div className={clsx(classes.mainDiv)}>
        <iframe
          title="heer"
          src="https://e.widgetbot.io/channels/791403283356975145/795335835682603018"
          width="350"
          height="500"
          className={clsx(classes.leftDiv)}
          allowtransparency="true"
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        />
        <Box borderLeft={1} />
        <LeaderBoard user={user} />
      </div>
    </div>
  );
};

Homepage.propTypes = {
  user: PropTypes.shape({
    name_user: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  setNav: PropTypes.func.isRequired,
};

export default Homepage;
