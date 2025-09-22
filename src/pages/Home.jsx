import { useEffect } from "react";
import axios from "../utils/axios";

const Home = () => {

  const getproduct = async () =>{
    try{
      const response = await axios.get('/products');
      console.log("response",response.data);
    }catch(err){
      console.log("error",err);
    }
  }
  //to carry out side effects in functional components
  useEffect(() => {
    getproduct();
  }, []);   /*[] it stop infinite loop by running only once when component mounts*/

  return (
    <div>
      <h1>Home Page</h1>
    
    </div>
  )


};

export default Home;
