import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 440px;
  margin: 20px 0;
  padding: 25px;
  border: 2px solid black;
  position: relative;
  border-radius: 20px;
  background: linear-gradient(135deg, #61b2d8 10%, #f9a4f2 120%);

  @media (max-width: 640px) {
    width: 80%;
    margin-right: 30px;
  }
  @media (max-width: 380px) {
    width: 70%;
  }
  @media (max-width: 260px) {
    width: 50%;
  }
`
const Title = styled.h1`
  color: #222;
  font-size: 1.2rem;
  text-transform: capitalize;
`
const Body = styled.p`
  align-self: flex-start;
  color: white;
  display: inline;
  text-align: left;
  &::first-letter {
    text-transform: capitalize;
  }
`
const Id = styled.div`
  color: #cc66ff;
  position: absolute;
  top: 10px;
  right: 15px;
`
const Post = ({ post }) => {
  return (
    <Card>
      <Id>{post.id}</Id>
      <Title>{post.title ?? 'Loading ...'}</Title>
      <Body>{post.title}</Body>
    </Card>
  )
}

export default Post
