import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import ModifiedDate from './components/TodaysDate.js';
import Navigation from './components/Navigation.js';
import SiteTime from './components/Times.js';
import {useState} from 'react';
//import {BaselineDirectionsRunfa} from 'react-icons/md';

function App() {

  const [exerciseToEdit,setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <header className='App-h'>
          
            <h1>Exercise Log</h1>
            <p><h2>Full MERN Stack.Click Create Exercise to add an exercise.</h2></p>
          </header>
          <Navigation/>
          
          <main>
          <Route path="/" exact>
            <HomePage  setExerciseToEdit={setExerciseToEdit}/>
          </Route>
          <Route path="/create-exercise">
            <CreateExercisePage />
          </Route>
          <Route path="/edit-exercise">
            <EditExercisePage exerciseToEdit={exerciseToEdit}/>
          </Route>
          </main>
          </div>
          <footer>
          <p>Last Modified on <ModifiedDate/> at <SiteTime/>.</p>
           <p>&copy; 2025 Full Mern.</p>
      </footer>
        
      </Router>
    </div>
  );
}

export default App;