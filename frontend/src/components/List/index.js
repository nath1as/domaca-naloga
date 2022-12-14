import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
import Post from '../Post'
import getData from '../../utils/getData.js'

const url = 'https://jsonplaceholder.typicode.com/posts'
const defaultPagination = 10
const defaultPages = [...Array(defaultPagination).keys()]

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 100vw;
`
const List = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const [page, setPage] = useState(0)
  const [pagination, setPagination] = useState(defaultPagination)
  const [posts, setPosts] = useState(defaultPages)

  useEffect(() => {
    getData(url).then((data) => {
      setData(data)
    })
  }, [])

  useEffect(() => {
    setPosts(data.slice(page * pagination, page * pagination + pagination))
  }, [data, pagination, page])

  return (
    <Layout>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
      <Footer
        page={page}
        setPage={setPage}
        pagination={pagination}
        setPagination={setPagination}
        totalPosts={data[0]?.title ? data.length : null}
      />
    </Layout>
  )
}

export default List
