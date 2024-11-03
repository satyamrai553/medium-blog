import { BlogPage } from '../components/BlogPage';
import BlogSkeleton from '../components/BlogSkeleton';
import {useBlog} from '../hooks/index'
import {useParams} from 'react-router-dom'

function Blog() {
  const { id } = useParams<{ id: string }>();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <BlogSkeleton />
      </div>
    );
  }

  return (
    <div>
      {blog ? <BlogPage blog={blog} /> : <div>No blog found</div>}
    </div>
  );
}

export default Blog;