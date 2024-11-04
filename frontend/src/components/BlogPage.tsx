
import {Blog} from "../hooks"

export function BlogPage({blog}: {blog: Blog}){
    return(
        <div>
            <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-10 max-w-screen-xl">
            <div className="col-span-8 pr-6">
                <div className="text-5xl font-extrabold">
                    {blog.title}
                </div>
                <div className="text-slate-500 pt-2">
                    Published on 5th of Nov
                </div>
                <div className="text-2xl font-thin pt-2">
                    {blog.content}
                </div>
            </div>
            <div className="col-span-4  border-l border-black px-4">
            <h2 className="text-xl ">
                Author
            </h2>
            <h3 className="text-2xl font-bold mt-4">
                {blog.author.name || "Anonymous"}
            </h3>
            <p className="mt-4 text-md font-thin text-gray-500">
                Random catch phrase about the author's ability to grab the user's attention
            </p>
            </div>
            
        </div>
            </div>
        </div>
    )
}