"use client"
import React from 'react'
import { useState } from "react";
// import {useNavigate} from 'react-router-dom';
import {Filmsimg,CharImg} from "./image"
import Datacontext from "./Datacontex";
import charprofile from '@/pages/page/[charprofile]';
// const host = "http://localhost:5000"||"https://backend-spark.onrender.com";
const host = "https://backend-spark.onrender.com";


const Datalist = (props) => {
  // const navigate = useNavigate();

 const getcustomerdata = [];

  const [data,setdata] = useState("");

  //get char

  const getAllchar = async (url) => {
   
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
       
      },
    });
   
    const jsonData = await response.json();
  
    console.log(jsonData.url)
    setdata(jsonData);
   
  };
  const [profile,setprofile] = useState("");
  const [fprofile,filmprofile] = useState("");

  

  const Charprofile = async (url) => {
   console.log("aditya      "+url)
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
       
      },
    });
   
    const jsonData = await response.json();
  
    
    setprofile(jsonData);
   
  };
  const Filmprofile = async (url) => {
   console.log("aditya      "+url)
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
       
      },
    });
   
    const jsonData = await response.json();
  
    
    filmprofile(jsonData);
   
  };

  // const Filmsimg = {
  //   "A New Hope": "https://lumiere-a.akamaihd.net/v1/images/EP4_POS_2_D-RESIZED_f977074a.jpeg",
  //   "The Empire Strikes Back": "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Empire-Strikes-Back-V-Poster_878f7fce.jpeg",
  //   "Return of the Jedi": "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Return-Jedi-VI-Poster_a10501d2.jpeg",
  //   "The Phantom Menace": "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Phantom-Menace-I-Poster_3c1ff9eb.jpeg",
  //   "Attack of the Clones": "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Attack-Clones-II-Poster_53baa2e7.jpeg",
  //   "Revenge of the Sith": "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Revenge-Sith-III-Poster_646108ce.jpeg",
  //   "The Force Awakens": "https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg",
  //   "The Last Jedi": "https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg",
  //   "The Rise of Skywalker": "https://lumiere-a.akamaihd.net/v1/images/the-rise-of-skywalker-films-poster-catalog_c46adc71.jpeg"
  // };





  return (
    <Datacontext.Provider value={{Filmsimg,CharImg,data,getAllchar,profile,Charprofile,fprofile,Filmprofile}}> {props.children}</Datacontext.Provider>
)}

export default Datalist
