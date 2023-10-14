import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import {League} from './components/leaque/leaque'
import { Login } from './components/login/login';
import { Social } from './components/social button/social';
import { Notification } from './components/notification/notification';
import { Techcard } from './components/technologies card/tech';
import { CongratsCard } from './components/congratscard';
import {Menu} from './components/menu/menu'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Feedbackmain } from './components/feedback/Feedbackmain';
import { FeedBack1 } from './components/feedback/Feedback1';
import {Hooks} from './components/hook/hooks'
import {Fruit} from './components/fruits/fruitscounter';
import {SDate} from './components/date/setdate'
import {Jsondata} from './components/json/jsondata'
import {Product} from './components/page/product'
import { Navbar } from './components/nav/navbar';
import {Home} from './components/home/home'
import {About} from './components/about/about';
import { Certification } from './components/certification/certification';
import { Contact } from './components/contact/contact';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={[<Navbar/>,<Home/>,<About/>,<Certification/>,<Contact/>]}></Route>
      <Route path='/Home' element={[<Navbar/>,<Home/>]}></Route>
      <Route path='/About' element={[<Navbar/>,<About/>]}></Route>
      <Route path='/Certification' element={[<Navbar/>,<Certification/>]}></Route>
      <Route path='/Contact' element={[<Navbar/>,<Contact/>]}></Route>  
      <Route path='/Project' element={<Menu/>}></Route>
      <Route path='/League' element={[<Menu/>,<League/>]}></Route>
      <Route path='/Login' element={[<Menu/>,<Login/>]}></Route>
      <Route path='/Social' element={[<Menu/>,<Social/>]}></Route>
      <Route path='/Notification' element={[<Menu/>,<Notification/>]}></Route>
      <Route path='/Techcard' element={[<Menu/>,<Techcard/>]}></Route>
      <Route path='/CongratsCard' element={[<Menu/>,<CongratsCard/>]}></Route>
      <Route path='/feedbackmain'element={[<Menu/>,<Feedbackmain/>]}></Route>
      <Route path='/feedback1'element={[<Menu/>,<FeedBack1/>]}></Route>
      <Route path='/Hook'element={[<Menu/>,<Hooks/>]}></Route>
      <Route path='/Fruit'element={[<Menu/>,<Fruit/>]}></Route>
      <Route path='/Date' element={[<Menu/>,<SDate/>]}></Route>
      <Route path='/Json' element={[<Menu/>,<Jsondata/>]}></Route>
      <Route path='/Product/:id' element={[<Menu/>,<Product/>]}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
