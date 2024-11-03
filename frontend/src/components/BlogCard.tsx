import { Link } from "react-router-dom"

interface BlogCardProps{
    id: string
    authorName: string,
    title: string,
    content: string,
    publishedData: string, 
}

function BlogCard({authorName, title, content, publishedData,id}:BlogCardProps) {
    return (
        <Link to={`/blog/${id}`}>

<div className="border-b border-slate-200 p-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex items-center">
            <div>
              <Avatar name={authorName} /> 
            </div>
            <div className="font-extralight pl-2 text-sm">
            {authorName}
            </div>
            <div className="text-xs text-slate-400 pl-2">
                &#9679;
            </div>
            <div className="pl-2 text-slate-400 font-thin text-sm">
            {publishedData}
            </div>
            
            </div>
            

            <div className="text-xl font-semibold">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0,100) + '...'}
            </div>

            <div className="text-slate-400 font-thin text-sm pt-4">
                {`${Math.ceil(content.length/100)} min read`}
            </div>
        </div>
        </Link>
        
    )
}


export function Avatar({name}: {name: string}){
    return(
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">{name[0].toUpperCase()}</span>
</div>
    )
}


export default BlogCard