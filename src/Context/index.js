import {useState,createContext,useEffect } from "react";
import api from "../services/api"


const CopaContext = createContext({});

function CopaProvidor ({children}) {

  let vetAux = [];


  const [users,setUsers] = useState([]);
  useEffect(()=>{
    api.get("http://localhost:4000/users")
    .then((response)=>{
      setUsers(response.data);
    })
    .catch((error)=>{console.log(error);})
  },[])

  const [userOn,setUserOn] = useState("");

  const [search,setSearch] = useState("");

  const [boloes,setBoloes] = useState([]);
  useEffect(()=>{
    api.get("http://localhost:4000/boloes")
    .then((response)=>{
      setBoloes(response.data)
    })
    .catch((error)=>{console.log(error)})
  },[])




  // const [categories,setCategories] = useState([]);

  // const [search,setSearch] = useState("");

  // const [posts,setPosts] = useState([]);
  // useEffect(()=>{
  //   api.get("http://localhost:4000/posts")
  //   .then((response)=>{
  //     setPosts(response.data)
  //   })
  //   .catch((error)=>{console.log(error)})
  // },[])

  // useEffect(()=>{
  //   api.get("http://localhost:4000/categories")
  //   .then((response)=>{
  //     setCategories(response.data)
  //   })
  //   .catch((error)=>{console.log(error)})
  // },[])

  

  return (
    <>
    <CopaContext.Provider value={{users,setUsers,userOn,setUserOn,boloes,setBoloes,search,setSearch}}>
    {children}
    </CopaContext.Provider>
    </>
  )

}

export {CopaContext,CopaProvidor};