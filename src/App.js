import logo from './logo.svg';
import './App.css';
import AddStudents from './components/AddStudents';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewStudents from './components/ViewStudents';

function App() {
  return (
    <div>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddStudents/>}/>
      <Route path='/view' element={<ViewStudents/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
