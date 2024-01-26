import './App.css';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Headersection from './components/Headersection';
import Lemonwares from './components/Lemonwares';
import Mynav from './components/Mynav';
import Realstories from './components/Realstories';
import Section2 from './components/Section2';
import Webhosting from './components/Webhosting';
import Websites from './components/Websites';
import Aweesome from './components/Aweesome';
import Myfooter from './components/Myfooter';
import Backtotop from './components/Backtotop';
import Loader from './components/Loader';


function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);
  return (
    <>
      <Loader/>
      <Mynav />
      <Headersection />
      <Webhosting />
      <Section2 />
      <Lemonwares />
      <Realstories />
      <Websites />
      <Aweesome />
      <Myfooter />
      <Backtotop />
    </>
  );
}

export default App;
