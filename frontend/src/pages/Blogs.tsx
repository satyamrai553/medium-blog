import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks"
import BlogSkeleton from "../components/BlogSkeleton"
function Blogs() {
    const {loading, blogs} = useBlogs()

    if(loading){
        return <div className="flex justify-center items-center h-screen flex-col m-10 ">
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            
        </div>
    }
    return (
        <>
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