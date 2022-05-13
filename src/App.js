import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Home></Home>} />
          <Route path='about' element={<About></About>} />
          <Route path='contact' element={<Contact></Contact>} />
        </Route>
    </Routes>
    </>
  );
}

export default App;
