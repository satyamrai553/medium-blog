export default function BlogSkeleton() {
    return (

        <div className="border-b border-slate-200 p-4 w-screen max-w-screen-md cursor-pointer">
            <div role="status" className="max-w-xl animate-pulse">
                <div className="flex items-center">
                    <div>
                        <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                    </div>
                    <div className="font-extralight pl-2 text-sm">

                    </div>
                    <div className="text-xs text-slate-400 pl-2">
                        &#9679;
                    </div>
                    <div className="pl-2 text-slate-400 font-thin text-sm">

                    </div>
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>

                <div className="text-xl font-semibold">
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                </div>
                <div className="text-md font-thin">
                    <div className="h-2 bg-gray-200 rounded-full  "></div>
                    <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
                </div>

                <div className="text-slate-400 font-thin text-sm pt-4">

                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>


    )
}