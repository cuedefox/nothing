import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={} />
      <Route exact path="/catrgory/:genero" element={} />
      <Route exact path="/item/:id" element={} />
      <Route exact path="/faq" element={} />
      <Route exact path="/cart" element={} />
    </Routes>
    <Footer />
  </BrowserRouter>
}

export default App;
