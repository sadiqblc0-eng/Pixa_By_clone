import React, {useContext} from 'react';
import PixaContext from '../context/PixaContext';
const Navber = () => {
  const {fetchImgBycategory,setquery} = useContext(PixaContext);
  return (
    <>
      <div className="container text-center my-3">
      <button onClick={()=>fetchImgBycategory("nature")} type="button" className="btn btn-outline-primary mx-3">Nature</button>
<button onClick={()=>fetchImgBycategory("science")} type="button" className="btn btn-outline-warning mx-3">science</button>
<button onClick={()=>fetchImgBycategory("computer")} type="button" className="btn btn-outline-light mx-3">Computer</button>
<button onClick={()=>fetchImgBycategory("buildings")} type="button" className="btn btn-outline-info mx-3">buildings</button>
<button onClick={()=>fetchImgBycategory("sports")} type="button" className="btn btn-outline-warning mx-3">sports</button>
<button onClick={()=>fetchImgBycategory("transportation")} type="button" className="btn btn-outline-info mx-3">transportation</button>
<button onClick={()=>fetchImgBycategory("travel")}type="button" className="btn btn-outline-light mx-3">travel</button>
<button onClick={()=>fetchImgBycategory("food")} type="button" className="btn btn-outline-primary mx-3">Food</button>  
      </div>
      <div className="container" style={{width: "400px"}}>
    <input onChange={(e)=>setquery(e.target.value)} type="text" className="form-control bg-dark text-light"/>
      </div>
    </>
  );
};

export default Navber;