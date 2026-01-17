import { Button } from "../ui/button"
import React, { useState } from "react";
import { BlogForm } from "../UserArticleform/articleForm";

export function Header(){
    const [isformopen,setIsformopen]=React.useState<boolean>(false);
    const [categories, setCategories] = useState<string[]>([]);
 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Selected categories:', categories);
  };

  const handleToggle = (category: string) => {
    setCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

    function popUpForm(){
        setIsformopen(true);
        alert("Form to add article will pop up")
    }
   function handleCancel(e){
    if(e.target.innerHTML==="Create Blog" ){
    
     setTimeout(()=>setIsformopen(false),2000)
    }
   }
 
    return(
        <div className="flex justify-between mt-1 mx-1 items-center bg-purple-600 p-2 rounded ">
            <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-backpack-fill text-white" viewBox="0 0 16 16">
                <path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3z"/>
                 <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6 6 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6 6 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"/>
                </svg>
                <h3 className="text-3xl text-white font-bold">CAMonk</h3>
            </div>
            <div className="flex justify-between gap-4 text-white" style={{cursor:"pointer"}}>
                <div className="hbtn">Tools</div>
                <div className="hbtn">Practice</div>
                <div className="hbtn">Events</div>
                <div className="hbtn">Points</div>
                <div className="hbtn">Job Board</div>
            </div>
       
            <Button onClick={popUpForm}>
                Add Blog
            </Button>
          {
            (isformopen && 
            <div className="fixed inset-0 overflow-scroll" onClick={handleCancel} >
                   <BlogForm></BlogForm>
            </div>) 
         }
        </div>
    )
}