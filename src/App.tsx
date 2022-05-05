import { Routes, Route, Link } from "react-router-dom";
import styles from './App.module.css';
import CountryDetails from "./pages/CountryDetails";
import PageNotFound from "./pages/PageNotFound";
import DataEntry from "./pages/DataEntryForm";
import CountryInfo from "./pages/CountryInfo";

function App() {
  return (
    <div>
      <Link className={styles.header} to="/">
        Country Weather App
      </Link>
      <div className={styles.appContainer}>
        <Routes>
          <Route path="/" element={<DataEntry />} />
          <Route path="countryInfo" element={<CountryInfo />}/>
          <Route path="countryDetails" element={<CountryDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;