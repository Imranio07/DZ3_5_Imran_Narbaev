import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { DeleteIcon } from '../components/UI/icons'

const PostsListPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
      .then((response) => response.json())
      .then((json) => setPosts(json))
  }, [])

  return (
    <div className="w-full flex flex-col justify-center gap-3">
      <span className='text-2xl col-span-full'>Список постов</span>

      <div className="w-full flex justify-center items-center flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-full sm:w-3/4 md:w-[1000px] bg-slate-300 px-2 py-1 flex justify-between gap-4 rounded-md">
            <Link to={`/posts/${post.id}/edit`}>{post.title}</Link>
            <button><DeleteIcon /></button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostsListPage
