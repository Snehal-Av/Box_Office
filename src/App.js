import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'
import Home from './Pages/Home';
// import Contact from './Pages/Contact';
import Starred from './Pages/Starred';
import PageLayOut from './Components/PageLayOut';
import Show from './Pages/Show';

const queryClient = new QueryClient()
function App() {
  return (
    <div>
       <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>

    </div>
  );
}

export default App;
