import { createContext, useState } from "react";
import  blogURL  from "../blogURL";
export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading,setloading] =useState(true);
    const [posts,setposts]=useState([]);
    const [page,setpage]=useState(1);
    const [totalPages,settotalPages]=useState(null);

    const value={
        loading,
        setloading,
        posts,
        setposts,
        page,
        setpage,
        totalPages,
        settotalPages,
        setValue,
        handlePageChange
    }

    async function setValue(pg,tag,category=null)
    {
        setloading(true);
        
        let url=await `${blogURL}?page=${pg}`
        if(tag!=null)
        {
            url+=`&tag=${tag}`;
        }
        if(category!=null)
        {
            url+=`&category=${category}`;
        }
        try{
            const result=await fetch(url)
            const data=await result.json();
            console.log(data)
            setposts(data.posts);
            setpage(data.page);
            settotalPages(data.totalPages);
        }
        catch(error)
        {
            console.log("Error in fetching data");

            // setpage(1);
        // setposts([]);
        // settotalPages(null);
 //This lines are  commented because                    
 //there is no logic instead                            
 //i prefer to use navigate to page ->("Page not found")//
        }
        
        
 setloading(false)
    }
    function handlePageChange (pageNo){
        setpage(pageNo)
        setValue(pageNo)
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    // return <children value={value} ></children>
}
