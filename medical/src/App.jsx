import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./Pages/Home"
import Appointments from './Pages/Appointments';
import ProfileSection from './Pages/ProfileSection';
import Heart2 from './components/Heart2';
import Heart6 from './components/Heart6';
import Heart5 from './components/Heart5';
import Heart4 from './components/Heart4';
import Heart3 from './components/Heart3';
import HeartDiseasesPage from './components/HeartDiseasesPage';
import Footer from './components/Footer'
import Header from './components/Header'
import Locationcomp from './components/Locationcomp';
import Blogpage from './components/Blogpage';
import BlogIframe from './components/BlogIframe';



function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/blogs" element={<BlogIframe />} /> */}
      <Route path="/Location" element={<Locationcomp />} />
      <Route path="/Appointments" element={<Appointments />} />
      <Route path="/ProfileSection" element={<ProfileSection />}/>
      <Route path="/Heart2" element={<Heart2 />} />
      <Route path="/Heart3" element={<Heart3 />} />
      <Route path="/Heart4" element={<Heart4 />} />
      <Route path="/Heart5" element={<Heart5 />} />

      <Route path='/HeartDiseasesPage' element={<HeartDiseasesPage/>}  />
      <Route path="/Heart6" element={<Heart6 />} />
    </Routes>
    <Footer/>
    </BrowserRouter>

  );
}

export default App;
