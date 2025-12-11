import React, {useEffect, useState} from 'react';
import PixaContext from './PixaContext';
const PixaState = (props) => {
  const [imgData, setImgData] = useState([]);
  const [query, setquery] = useState("Paris");
 const api_key = "53634753-9c8e51759bbebd782602cb7f3";
  useEffect(()=>{
  const fetchData = async ()=>{
    const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`);
    const data = await api.json();
    setImgData(data.hits);
  //  alert(`JSON.stringify(data${data.hits})`);
  }
  fetchData();
  },[query]);
  //yellow+flowers
  const fetchImgBycategory = async (cat)=>{
    const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page = 100`);
    const data = await api.json();
    setImgData(data.hits);
  //  alert(`JSON.stringify(data${data.hits})`);
  }
  return (
    <>
     <PixaContext.Provider value={{imgData,fetchImgBycategory,setquery,}}>
       {props.children}
     </PixaContext.Provider>
    </>
  );
};


export default PixaState;