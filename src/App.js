import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Starred from './Pages/Starred';
import PageLayOut from './Components/PageLayOut';
import Show from './Pages/Show';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayOut/>}>
            <Route path='/' element={<Home />} />
            <Route path='/starred' element={<Starred />} />
          </Route>
          <Route path='/show/:showId' element={<Show />} />
          <Route path='*' element={<div>Not Found</div>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
