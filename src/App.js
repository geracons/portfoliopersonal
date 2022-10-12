import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact/'
import Software from './components/Software';
import Hardware from './components/Hardware';


function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> 
      <Route path="about" element={<About />} /> 
      <Route path="contact" element={<Contact />} /> 
      <Route path="code" element={<Software />} /> 
      <Route path="hard" element={<Hardware />} /> 
      
      </Route>
    </Routes>
   
   
   </>
  );
}

export default App;
