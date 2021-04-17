
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Header from './components/Header/Header';
import nelo from './video/nelo.mp4'

function App() {
  return (
    <BrowserRouter>
    
        <Header/>
        <Route exact path="/" component={Home}></Route>
        <Route path="/chart" component={Search}></Route>
        <video  
        autoPlay
        loop
        muted
        style={{
          position:"absolute",
          width:"100%",
          left:"50%",
          
          height:"350%",
          objectFit:"cover",
          transform:"translate(-50%,-50%)",
          zIndex:"-1"
        }}
        >
         <source src={nelo} type="video/mp4"/>
        </video>
    </BrowserRouter>
  );
}

export default App;
