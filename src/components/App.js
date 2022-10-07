// Components
import MouseParticles from './MouseParticles';
import Header from './header/Header';
import Main from './landing/Main';

// Styles
import '../styles/App.scss';

// Routes
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <MouseParticles />

      <Routes>

        <Route
          path='/'
          element={
            <Main />
          }
        />

        <Route
          path='/proyects'
          element={
            <>
              <Header />
              <Main />
            </>
          }
        />

        <Route
          path='/contact'
          element={
            <>
              <Header />
              <Main />
            </>
          }
        />

        <Route
          path='/about'
          element={
            <>
              <Header />
              <Main />
            </>
          }
        />

      </Routes>

    </div>
  );
}

export default App;
