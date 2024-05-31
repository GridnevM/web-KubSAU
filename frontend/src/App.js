import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import University from "./pages/University/University";
import Korpusa from "./pages/Korpusa/Korpus";
import Musei from "./pages/Musei/Musei";
import Musei1 from "./pages/Musei/Musei1";
import Musei2 from "./pages/Musei/Musei2";
import Musei3 from "./pages/Musei/Musei3";
import Musei4 from "./pages/Musei/Musei4";
import Musei5 from "./pages/Musei/Musei5";
import Musei6 from "./pages/Musei/Musei6";
import Musei7 from "./pages/Musei/Musei7";
import Musei8 from "./pages/Musei/Musei8";
import Musei9 from "./pages/Musei/Musei9";
import Dendrik from "./pages/Dendrik/Dendrik";
import GlavnyKorpus from './pages/Korpusa/Type_corpus/Glavny';
import ZooinzhenernyKorpus from './pages/Korpusa/Type_corpus/Zooinzhenerny';
import VetKorpus from './pages/Korpusa/Type_corpus/Vet';
import ElektroKorpus from './pages/Korpusa/Type_corpus/Elektro';
import FizKorpus from './pages/Korpusa/Type_corpus/Fiz';
import GidroKorpus from './pages/Korpusa/Type_corpus/Gidro';
import ZashitaRasteniyKorpus from './pages/Korpusa/Type_corpus/Zashita_rasteniy';
import MehanizaciyaKorpus from './pages/Korpusa/Type_corpus/Mehanizaciya';
import EconomKorpus from './pages/Korpusa/Type_corpus/Econom';
import ZaochnoeKorpus from './pages/Korpusa/Type_corpus/Zaochnoe';
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
          <Route path="/Musei1" element={<Musei1/>}/>
          <Route path="/Musei2" element={<Musei2/>}/>
          <Route path="/Musei3" element={<Musei3/>}/>
          <Route path="/Musei4" element={<Musei4/>}/>
          <Route path="/Musei5" element={<Musei5/>}/>
          <Route path="/Musei6" element={<Musei6/>}/>
          <Route path="/Musei7" element={<Musei7/>}/>
          <Route path="/Musei8" element={<Musei8/>}/>
          <Route path="/Musei9" element={<Musei9/>}/>
          <Route path="/Dendrik" element={<Dendrik/>}/>
          <Route path="/Korpusa/Type_corpus/glavny" element={<GlavnyKorpus />} />
          <Route path="/Korpusa/Type_corpus/zooinzhenerny" element={<ZooinzhenernyKorpus />} />
          <Route path="/Korpusa/Type_corpus/vet" element={<VetKorpus />} />
          <Route path="/Korpusa/Type_corpus/elektro" element={<ElektroKorpus />} />
          <Route path="/Korpusa/Type_corpus/fiz" element={<FizKorpus />} />
          <Route path="/Korpusa/Type_corpus/gidro" element={<GidroKorpus />} />
          <Route path="/Korpusa/Type_corpus/zashita_rasteniy" element={<ZashitaRasteniyKorpus />} />
          <Route path="/Korpusa/Type_corpus/mehanizaciya" element={<MehanizaciyaKorpus />} />
          <Route path="/Korpusa/Type_corpus/econom" element={<EconomKorpus />} />
          <Route path="/Korpusa/Type_corpus/zaochnoe" element={<ZaochnoeKorpus />} />
        </Routes>
        <Footer/>
      </Router>
   
    </div>

  );
}

export default App;