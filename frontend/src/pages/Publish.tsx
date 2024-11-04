import { BACKEND_URL } from "../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Publish (){
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    return (
        <div>
        <div className="flex justify-center mt-6">
            
            <div className="min-w-[500px] ">
          <input onChange={(e)=>{
            setTitle(e.target.value)
          }} type="text" className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-3xl focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none mb-3" placeholder="Title"/>

          <textarea onChange={(e)=>{
            setContent(e.target.value)
          }} className="py-3 px-4 block w-full border border-gray-500 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none h-36 text-xl" placeholder="Blog content..."></textarea>
          <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none mt-2" onClick={async ()=>{
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                title,
                content,
            },{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("Authtoken")}`,
                },
            })
            navigate(`/blog/${response.data.id}`)
          }}>Publish post</button>



    </div>
    </div>
        </div>
       
    
    )
}