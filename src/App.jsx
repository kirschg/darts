import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Editor } from './pages/Editor';
import { Adder } from './pages/Adder';
import './App.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />}/>
          <Route path=':id/Editor' element={<Editor />}/>
          <Route path='Adder' element={<Adder />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
