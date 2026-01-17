import { useQuery } from "@tanstack/react-query";


export default function getPosts(){
    return {
        queryKey:['blogs'],
        queryFn:async():Promise<Blog[]>=>{
            const res=await fetch('http://localhost:3001/blogs')
            return res.json();
        },
         refetchOnWindowFocus: true,
          refetchOnMount: true
    }
}

export function  getBlogbyId(id:string){
 return{
    queryKey:['blog',id],
    queryFn:async():Promise<Blog>=>{
        const res=await fetch(`http://localhost:3001/blogs/${id}`);
        return res.json();
    },
  
    refetchOnWindowFocus: true,
     refetchOnMount: true
}
}
export type Category=string[];
export type Blog={
    id:string,
    title:string,
    category:Category,
    description:string,
    date:string,
    coverImage:string,
    content:string,
}