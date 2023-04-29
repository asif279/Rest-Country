import "./app.css";
import { Routes, Route } from "react-router-dom";
import AllCountries from "./components/AllCountries/AllCountries";
import CountryInfo from "./components/CountryInfo/CountryInfo";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <>

    <div className="navb">
    <h2 className="co">Country Nation</h2>
      <ul className="ll">
        <li>Country</li>
        <li>List Country</li>
        <li>About Country</li>
      </ul>
    </div>
    

      <div className="container">
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<CountryInfo />} />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
