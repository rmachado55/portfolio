import BarraNavegacao from "components/BarraNavegacao";
import Home from "pages/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
    return (
      <main className='container'>
        <Router>
          <BarraNavegacao />
          <Routes>
            <Route path='/' index element={<Home />}/>' 
    
          </Routes>
        </Router>
      </main>
    );
  }