import React, {useContext} from 'react';
import PixaContext from '../context/PixaContext';
const Imgase = () => {
  const {imgData} = useContext(PixaContext)
  return (
    <>
  <div className="container my-5">
  <div className="flex">
    {imgData.map((image)=>(
    <div key={image.id}>
   <div className="item">
   <img src={image.largeImageURL} alt="img"/>
   </div>
    </div>
    ))}
  </div>
  </div>
    </>
  );
};

export default Imgase;