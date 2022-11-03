import { Home } from "pages/Home";
import { LanguageSelection } from "pages/LanguageSelection";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";



export default function AppRouter() {

  const [language, setLanguage] = useState('/en')

  return (      
        <Router>
          <Routes>
            <Route path="/" element={<LanguageSelection language={language} setLanguage={setLanguage}/>}/>
            <Route path="/en" index element={<Home />}/>
            <Route path="/pt" index element={<Home />}/>
            <Route path="/es" index element={<Home />}/>           
          </Routes>          
        </Router>      
    );
  }