import './App.css';
import { useContext, useEffect, useState } from 'react'
import { Blogs } from './components/Blogs';
import { Headers } from './components/Headers';
import { Pagination } from './components/Pagination';
import { AppContext } from './contexts/AppContext';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';

function App() {
  
  const {page,setValue,posts} =useContext(AppContext);
  const [searchParams,setSearchParams]=useSearchParams();
  const location =useLocation()

  useEffect(()=>{
      // const page=parseInt(searchParams.get("page"))?? 1;
      console.log(searchParams)
//?? nullish coalescing operator. 
//returns the value on its left-hand side if that value is not null or undefined. Otherwise, returns the value on its right-hand side.
      var tag=null;
      var category=null
      console.log(location)
      if(location.pathname.includes("tags"))
      {
        tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
      }
      if(location.pathname.includes("categories"))
      {
        category=location.pathname.split("/").at(-1).replaceAll("-"," ");
      }
      
      setValue(page,tag,category)
  },[page])
  return <div>
    <Routes>

      <Route path='/' element={<Blogs/>}/>
      <Route path='/blogs/:blog' element={<Blogs/>}/>
      <Route path='/tags/:tag' element={<Blogs/>}/>
      <Route path='/categories/:category' element={<Blogs/>}/>
    </Routes>
    
  </div>
  
}

export default App;
/*
  <Headers/>
  {posts&&<Blogs/>}             Remove "posts&&" ans see No Post Found in browser
  <Pagination/>
*/