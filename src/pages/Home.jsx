import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"


const Home = () => {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  })
  
  return (
    <div data-aos="fade-down" className='h-96 flex justify-center items-center'>
      <h2  className='text-center text-2xl my-2 font-bold'>Home page</h2>
    </div>
  );
};

export default Home;
