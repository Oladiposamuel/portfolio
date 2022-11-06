import './App.css';
import Nav from './Navigation/Nav';
import { NavProvider } from './Navigation/context/navContext';
import { ScreenProvider } from './Navigation/context/screenContext';
import Main from './screens/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App" id='homeContainer'>
      <NavProvider>
        <ScreenProvider>
          <BrowserRouter>
            <Routes>
              <Route path='' element={<Main />} />
            </Routes>
          </BrowserRouter>
        </ScreenProvider>
      </NavProvider>
    </div>
  );
}

export default App;



