import axios from "axios";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";

export interface Blog{
    "content": string,
    "title": string,
    "id": string,
    "author": {
        "name": string,
    }
}

export const useBlog = ({id}: {id: string})=>{
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('Authtoken')}`
            }
        })
        .then((response)=>{
            
            setBlog(response.data.blog);
            setLoading(false);
        })
        .catch((error)=>{
            console.error(error);
            setLoading(false);
        })
    }, [id])

    return {
        loading, 
        blog
    }

}

export const useBlogs =()=>{
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);


    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('Authtoken')}`
            }
        })
        .then((response)=>{
            setBlogs(response.data.blogs);
            setLoading(false);
        })
        .catch((error)=>{
            console.error(error);
            setLoading(false);
        })
    }, [])

    return {
        loading, 
        blogs
    }
}