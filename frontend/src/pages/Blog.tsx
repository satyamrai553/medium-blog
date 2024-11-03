import { BlogPage } from '../components/BlogPage';
import BlogSkeleton from '../components/BlogSkeleton';
import {useBlog} from '../hooks/index'
import {useParams} from 'react-router-dom'

function Blog() {

  const {id} = useParams();
  const {loading, blog} = useBlog({
    id: id || "",
  });
  if(loading){
    return <div className="flex justify-center items-center h-screen">
      <BlogSkeleton/>
    </div>
}
  return (
    <div>
      <BlogPage blog={blog} />
    </div>
  )
}

export default Blog