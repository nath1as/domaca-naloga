import React, { useState, useEffect } from 'react'
import getData from '../../utils/getData.js'
const url = 'https://jsonplaceholder.typicode.com/posts'

const List = () => {
  const [data, setData] = useState([])
  const [posts, setPosts] = useState([])
  const [pagination, setPagination] = useState(10)
  const [page, setPage] = useState(0)

  const [maxTotalPages, setMaxTotalPages] = useState(pagination)
  const [displayPages] = useState([...Array(maxTotalPages).keys()])

  useEffect(() => {
    getData(url).then((data) => {
      setData(data)
    })
  }, [])

  useEffect(() => {
    setPosts(data.slice(page * pagination, page * pagination + pagination))
  }, [data])

  useEffect(() => {
    setMaxTotalPages(data.length / pagination)
  }, [data.length, pagination])

  return (
    <div>
      {posts.map((post) => (
        <div>{post.id}</div>
      ))}
      <div>
        {displayPages.map((pageNumber) => (
          <span>{pageNumber + 1}</span>
        ))}
      </div>
    </div>
  )
}

export default List
