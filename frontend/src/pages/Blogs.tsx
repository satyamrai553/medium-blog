import BlogCard from "../components/BlogCard"
import Appbar from "../components/Appbar"
import { useBlogs } from "../hooks"
function Blogs() {
    const {loading, blogs} = useBlogs()

    if(loading){
        return <div className="text-2xl flex justify-center items-center h-screen">Loading...</div>
    }
    return (
        <>
        <Appbar/>
        <div className="flex justify-center">
            <div className="max-w-xl">
                {blogs.map( blog =>
                    <BlogCard authorName={blog.author.name || "Anonymous"} title={blog.title} content={blog.content} publishedData="2nd Nov 2024"  id={blog.id}/>
                )}
                
                
            </div>
            
        </div>
        </>
        

    )
}

export default Blogs