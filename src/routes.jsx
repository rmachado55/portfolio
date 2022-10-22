import NavigationBar from "components/NavigationBar";
import Home from "pages/Home";
import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
      
  const [language, setLanguage] = useState(0)
  
  return (
      <main className='container'>
        <Router>
          <NavigationBar language={language} setLanguage={setLanguage} />
          <Routes>
            <Route path='/' index element={<Home language={language} setLanguage={setLanguage} />}/>' 
    
          </Routes>
        </Router>
      </main>
    );
  }