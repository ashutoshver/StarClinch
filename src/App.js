import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Shortlist from './component/Shortlist';
import Terms from "./component/Terms/Terms";
import Footer from "./component/Footer/Footer";
import Card from './component/Cards/Card';
import Loading from './component/Cards/Loading';



function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Navbar />
      <Shortlist />
      {loading ? <Loading/> : <Card />}
      <Terms />
      <Footer />
    </>
  )
}

export default App;
