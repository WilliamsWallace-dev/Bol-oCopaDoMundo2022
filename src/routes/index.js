import {BrowserRouter,Route,Routes} from "react-router-dom";
// import { useContext } from "react";

import Register from "../pages/Register";
import Login from "../pages/Login";
import UserGuess from "../pages/UserGuess";
import UserClassification from "../pages/UserClassification";
import UserCriarBolão from "../pages/UserCriarBolão";
import UserExplorarBolão from "../pages/UserExplorarBolão";
import RegrasDoBolão from "../pages/RegrasDoBolão";
import NotificationsPage from "../pages/NotificationsPage";

import Header from "../components/Header";

// import { BlogContext } from "../context/blog";


const AppCopa = ()=>{

  return(
    <>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/palpites:id" element={<UserGuess/>}/>
          <Route path="/classificação:id" element={<UserClassification/>}/>
          <Route path="/criarbolão:id" element={<UserCriarBolão/>}/>
          <Route path="/explorarbolão:id" element={<UserExplorarBolão/>}/>
          <Route path="/regrasdobolão" element={<RegrasDoBolão/>}/>
          <Route path="/notificações:id" element={<NotificationsPage/>}/>
        </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default AppCopa;