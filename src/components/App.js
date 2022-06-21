// Components
import Header from './header/Header';
import Main from './landing/Main';

// Styles
import '../styles/App.scss';

// Routes
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Header />

      <Routes>

        <Route
          path='/'
          element={
            <Main />
          }
        />

        <Route
          path='/about'
          element={
            <Main />
          }
        />

        <Route
          path='/proyects'
          element={
            <Main />
          }
        />

        <Route
          path='/contact'
          element={
            <Main />
          }
        />

      </Routes>

    </div>
  );
}

export default App;
