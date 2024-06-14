import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

export const Pagination = () => {
  const {totalPages,page,setpage,loading}=useContext(AppContext)
  
  function handlePageChange(val)
  {
    setpage(page+val)
  }
  return (
    !loading&&<div>
      {
        page!=1&&<button onClick={()=>handlePageChange(-1)}>
          Prev
        </button>
      }
      {
        page!=totalPages&&<button onClick={()=>handlePageChange(1)}>
          Next
        </button>
      }
      Page {" "+page +" of "+ totalPages}
    </div>
  )
}
  