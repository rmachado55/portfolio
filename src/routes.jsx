import NavigationBar from "components/NavigationBar";
import Home from "pages/Home";
import LanguageSelection from "pages/LanguageSelection";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
      
  const [language, setLanguage] = useState(0)
  
  return (
      <main className='container'>
        <Router>
          <Routes>
            <Route path="/" element={<LanguageSelection language={language} setLanguage={setLanguage}/>}/>
          </Routes>
          
          <NavigationBar/>
          
          <Routes>
            <Route path={`${language}/home`} element={<Home />}/>
          </Routes>
    
          
        </Router>
      </main>
    );
  }