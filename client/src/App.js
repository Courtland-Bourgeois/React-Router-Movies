import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from '../src/Movies/MovieList';
import Movie from '../src/Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" render={props => <MovieList {...props} film={savedList} />} />
      <Route exact path="/movies/:id" render={props => <Movie {...props} film={savedList} />} />
    </div>
  );
};

export default App;
