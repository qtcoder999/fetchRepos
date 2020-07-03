import React from 'react';
import './App.css';
import { store } from './redux/configure-store';
import { Provider } from "react-redux"
import FetchGitRepos from './containers/fetch-git-containers';

function App() {
  return (
    <div className="App">
      <Provider store={store}>

        <FetchGitRepos />

      </Provider>
    </div>
  );
}

export default App;
