import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import University from "./pages/University/University";
import Korpusa from "./pages/Korpusa/Korpus";
import Musei from "./pages/Musei/Musei";
import Dendrik from "./pages/Dendrik/Dendrik";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      
      <Router>
      <Header/>
        <Routes>
          <Route path = "/" element={<Main/>}/>
          <Route path = "/University" element={<University/>}/>
          <Route path="/Korpusa" element={<Korpusa/>}/>
          <Route path="/Musei" element={<Musei/>}/>
          <Route path="/Dendrik" element={<Dendrik/>}/>
        </Routes>
        <Footer/>
      </Router>
   
    </div>

  );
}

export default App;