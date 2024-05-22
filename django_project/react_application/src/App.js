import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import University from "./pages/University/University";
import Korpusa from "./pages/Korpusa/Korpus";
import Musei from "./pages/Musei/Musei";
import Musei1 from "./pages/Musei/Musei1";
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
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/University" element={<University />} />
          <Route path="/Korpusa" element={<Korpusa />} />
          <Route path="/Musei" element={<Musei />} />
          <Route path="/Musei1" element={<Musei1 />} />
          <Route path="/Dendrik" element={<Dendrik />} />
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
