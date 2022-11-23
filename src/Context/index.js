import {useState,createContext,useEffect } from "react";
import api from "../services/api"

import db from "../services/apifb"
import { collection, getDocs } from "firebase/firestore"; 

const CopaContext = createContext({});

function CopaProvidor ({children}) {


  const [userOn,setUserOn] = useState("");

  const [search,setSearch] = useState("");

  const [classificacao,setClassificacao] = useState("");

  const [users,setUsers] = useState([]);

  const [boloes,setBoloes] = useState([]);

  const [jogos,setJogos] = useState([]);


  // useEffect(()=>{
  //   api.get("http://localhost:4000/users")
  //   .then((response)=>{
  //     setUsers(response.data);
  //   })
  //   .catch((error)=>{console.log(error);})
  // },[userOn])


  // useEffect(()=>{
  //   api.get("http://localhost:4000/boloes")
  //   .then((response)=>{
 
  //     setBoloes(response.data)
  //   })
  //   .catch((error)=>{console.log(error)})
  // },[userOn])


  // useEffect(()=>{
  //   api.get("http://localhost:4000/jogos")
  //   .then((response)=>{
  //     setJogos(response.data)
  //   })
  //   .catch((error)=>{console.log(error)})
  // },[])




//firebase



useEffect(()=>{
  getDocs(collection(db, "users"))
  .then((response)=>{
    let usersFb = [];
    response.forEach((doc)=>{
      usersFb = [...usersFb,doc.data()]
    })
    setUsers(usersFb);
  })
  .catch((error)=>{console.log(error);})
},[userOn])

useEffect(()=>{
  getDocs(collection(db, "boloes"))
  .then((response)=>{
    let boloesFb = [];
    response.forEach((doc)=>{
      boloesFb = [...boloesFb,doc.data()]
    })
    console.log(boloesFb)
    setBoloes(boloesFb);
  })
  .catch((error)=>{console.log(error);})
},[userOn])

useEffect(()=>{
  getDocs(collection(db, "jogos"))
  .then((response)=>{
    let jogosFb = [];
    response.forEach((doc)=>{
      jogosFb = [...jogosFb,doc.data()]
    })
    setJogos(jogosFb[0].partidas);
  })
  .catch((error)=>{console.log(error);})
},[userOn])











  

  return (
    <>
    <CopaContext.Provider value={{users,setUsers,userOn,setUserOn,boloes,setBoloes,search,setSearch,classificacao,setClassificacao,jogos,setJogos}}>
    {children}
    </CopaContext.Provider>
    </>
  )

}

export {CopaContext,CopaProvidor};