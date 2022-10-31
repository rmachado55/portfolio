import Home from "pages/Home";
import ShowCertificate from "pages/ShowCertificate";
import LanguageSelection from "pages/LanguageSelection";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useParams} from "react-router-dom";



export default function AppRouter() {

  const [language, setLanguage] = useState('/portfolio/en')
  let { Id } = useParams();

  return (      
        <Router>
          <Routes>
            <Route path="/portfolio" element={<LanguageSelection language={language} setLanguage={setLanguage}/>}/>
            <Route path={language} index element={<Home />}/>            
            <Route path={Id} index element={<ShowCertificate/>}/>
          </Routes>          
        </Router>      
    );
  }