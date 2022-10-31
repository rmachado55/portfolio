import Home from "pages/Home";
import LanguageSelection from "pages/LanguageSelection";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";



export default function AppRouter() {

  const [language, setLanguage] = useState('/portfolio/en')


  return (      
        <Router>
          <Routes>
            <Route path="/portfolio" element={<LanguageSelection language={language} setLanguage={setLanguage}/>}/>
            <Route path={language} index element={<Home />}/>           
          </Routes>          
        </Router>      
    );
  }