import { useQuery } from "@tanstack/react-query";
import { getBlogbyId } from "@/getPosts";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
 import { Skeleton } from "../ui/skeleton";
 import React from "react";
import { useEffect } from "react";

export default function RightDiv({id}:{id:string}){
    const [showSkeleton, setShowSkeleton] = React.useState<boolean>(true);
    const {data,isLoading}=useQuery(getBlogbyId(id))

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

    console.log(data);   
    if(showSkeleton){
        return (
<div className="mt-6 w-3/4">
  <div className="flex flex-col space-y-3 mt-3">
    <Skeleton className="h-[200px] w-full rounded-xl" />

    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  </div>
</div>

    )
    }


   function getCurrDate(id: string): string {
       const date = data?.date;
       if (!date) return "No date available";
      return new Date(date).toLocaleDateString('en-GB');
    }
       
    return(
        <div className="w-3/4 bg-amber-700 h-screen rounded-t-3xl mt-9">
            <img src={data?.coverImage} alt="Blog cover image" className="w-full h-full object-cover rounded-t-3xl"/>
            <div className="bg-gray-100 p-3 rounded-b-3xl">
                <h4 className="text-7xl font-bold font-mono">{data?.title}</h4>
                <div className="bg-blue-300 rounded-3xl flex justify-between p-2">
                    <div className="w-1/3 border-r-2 border-black">
                        {
                            data?.category.map(cat=>(<h4 className="font-bold">{cat}</h4>))
                        }
                    </div>
                    <div className="w-1/3 border-r-2 border-black ms-1">
                        <h4>READ TIME</h4>
                        <h4><b>5 MIN</b></h4>
                    </div>
                    <div className="w-1/3 ms-1">
                        <h4>DATE</h4>
                        <h4><b>{getCurrDate(id).split('/').join('-')}</b></h4>
                    </div>
                </div>
                <div className="flex-col space-y-4 p-3">
                    {data?.content.split('\n\n').map((para)=><p>{para}</p>)}
                </div>
            </div>
        </div>
    )
}