import React, { useEffect } from "react";
import getPosts from "@/getPosts"
import { useQuery } from "@tanstack/react-query"
import { Key } from "lucide-react";
import RightDiv from "../rightDiv/rightDiv";
import { Skeleton } from "../ui/skeleton";
export default function LeftDiv(){


    const {data,isLoading}=useQuery(getPosts())

    const [isclicked,setIsclicked]=React.useState<boolean>(false);
    const [idtodisplay,setIdtodisplay]=React.useState<string>("0");
    const [showSkeleton, setShowSkeleton] = React.useState<boolean>(true);


    useEffect(() => {
  if (!isLoading) {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);
    return () => clearTimeout(timer);
  } else {
    setShowSkeleton(true);
  }
}, [isLoading]);

    function handleClick(id:string){
        setIsclicked(true);
        setIdtodisplay(id);
        console.log(id); 
    }

if (showSkeleton) {
  return (
    <div className="space-y-4 w-1/4 mt-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="p-4 border rounded-lg">
          <Skeleton className="h-6 w-24 mb-2" />
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      ))}
    </div>
  );
}
    return(
        <div className="flex"> 
        <div className="w-1/4 p-2  h-1/2 rounded-2xl">
            <h4 className="text-2xl">Latest Articles</h4>
            <div>
            {
                data?.map((blog)=>(
                    <div key={blog.id} className="mb-3 p-2 bg-white border-2 rounded-2xl" onClick={()=>handleClick(blog.id)}style={{cursor:"pointer"}}>

                        <b><span className="">{blog.category[0]}</span></b>
                        <p>{blog.title}</p>
                        <p>{blog.description}</p>
                        <span className="bg-amber-300 rounded-2xl p-1">{blog.category[1]===undefined?blog.category[0]:blog.category[1]}</span>
                    </div>
                ))
            }
            </div>
        </div>
        {isclicked?<RightDiv id={idtodisplay}></RightDiv>:<RightDiv id={"1"}></RightDiv>}
        </div>
    )
}