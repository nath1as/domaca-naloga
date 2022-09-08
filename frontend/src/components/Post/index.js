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
  border-radius: 20px;
  background: green;
  position: relative;
  @media (max-width: 599px) {
  }
`
const Title = styled.h1`
  color: yellow;
  font-size: 1.2rem;
  text-transform: capitalize;
`
const Body = styled.p`
  align-self: flex-start;
  color: pink;
  display: inline;
  text-align: left;
  &::first-letter {
    text-transform: capitalize;
  }
`
const Id = styled.div`
  color: pink;
  position: absolute;
  top: 10px;
  right: 15px;
`
const Post = ({ post }) => {
  return (
    <Card>
      <Id>{post.id}</Id>
      <Title>{post.title}</Title>
      <Body>{post.title}</Body>
    </Card>
  )
}

export default Post
