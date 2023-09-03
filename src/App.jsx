import { useContext, useState } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import { MyContext } from "./MyContext";
import "./App.css";

import Academics from "./component/Academics/Academics";
import Curriculum from "./component/Academics/Curriculum";
import AdmissionsCounseling from "./component/AdmissionsCounseling/AdmissionsCounseling";
import NewsPage from "./component/NewsPage/NewsPage";
import FAQ from "./component/FAQ/FAQ";
import UnderGraduate from "./component/UnderGraduate/UnderGraduate";

import Header from './component/Header/Header';
import Home from './component/Home/Home';
import SearchList from './component/SearchList/SearchList';
import SearchMenu from './component/Menu/SearchMenu';
import Admissions from "./component/AdmissionsCounseling/Admissions";
import Graduate from "./component/UnderGraduate/Graduate";
import Footer from "./component/Footer/Footer";

function App() {
  const [isClickMenu, setClickMenu] = useState(false);
  console.log("App: ", isClickMenu)
  
  return (
    <div className="App" style={{ overflowY: isClickMenu ? "hidden" : "auto" }}>
      <MyContext.Provider value={{ isClickMenu, setClickMenu }}>
        <Header />
      </MyContext.Provider>
      
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daotao/dai-hoc" element={<Academics />} />

          <Route path="/daotao/cao-dang" element={<Curriculum />} />
          <Route path="/timkiem" element={<SearchList />} />
          <Route path="/baiviet" element={<NewsPage />} />
          <Route path="/tuyensinh/faq" element={<FAQ />} />
          <Route path="/tuyensinh" element={<Admissions />} />
          <Route path="/tuyensinh/dai-hoc" element={<UnderGraduate />} />
          <Route path="/tuyensinh/sau-dai-hoc" element={<Graduate />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
