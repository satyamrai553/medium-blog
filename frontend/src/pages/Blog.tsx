import {useBlog} from '../hooks/index'
import {useParams} from 'react-router-dom'

function Blog() {
  const {id} = useParams();
  const {loading, blog} = useBlog({
    id: id || "",
  });
  if(loading){
    return <div className="text-2xl flex justify-center items-center h-screen">Loading...</div>
}
  return (
    <h1>{blog.title}</h1>
  )
}

export default Blog