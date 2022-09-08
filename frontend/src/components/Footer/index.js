import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  padding-top: 20px;
  background: black;
  width: 100%;
  overflow-y: hidden;
`
const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 40px;
  bottom: 10px;
`
const Button = styled.button`
  background: blue;
  background: ${({ active }) => (active ? 'yellow' : 'gray')}};
  font-size: 1rem;
  padding: 0 5px;
  margin: 0 3px;
`
const Number = styled.button`
  padding: 0px 5px;
  margin: 0px 5px;

  border-radius: 5px;
  font-size: 1.1rem;
  background: ${({ active }) => (active ? 'red' : 'gray')}};

  @media (max-width: 599px) {
    display: ${({ fixed }) => (fixed ? 'block' : 'none')}};
    }
  }
`
const Dots = styled.div`
  display: none;

  @media (max-width: 599px) {
    display: block;
    color: white;
    margin-top: 3px;
    padding: 0px 5px;
    margin: 0px 5px;
    margin-top: 5px;

    font-size: 2rem;
    }
  }
`
const Footer = ({ page, setPage, pagination, setPagination, totalPosts }) => {
  const [maxTotalPages, setMaxTotalPages] = useState(pagination)
  const [displayPages, setDisplayPages] = useState([
    ...Array(maxTotalPages).keys(),
  ])

  useEffect(() => {
    setMaxTotalPages(Math.ceil(totalPosts / pagination))
  }, [totalPosts, pagination, page])

  useEffect(() => {
    setDisplayPages([...Array(maxTotalPages).keys()])
    setPage(0)
  }, [maxTotalPages])

  return (
    <Container>
      <Number active={page === 0} onClick={() => setPage(0)} fixed>
        1
      </Number>
      {page > 2 && <Dots>...</Dots>}
      {displayPages.map((pageNumber) => {
        const active = pageNumber === page
        const dots = pageNumber - 2 === page
        const fixed =
          active || pageNumber === page - 1 || pageNumber === page + 1

        if (pageNumber + 1 === maxTotalPages || pageNumber === 0) return null
        return (
          <>
            <Number
              key={pageNumber}
              active={active}
              onClick={() => setPage(pageNumber)}
              fixed={fixed}
            >
              {pageNumber + 1}
            </Number>
            {!!dots && <Dots>...</Dots>}
          </>
        )
      })}
      <Number
        active={page === maxTotalPages - 1}
        onClick={() => setPage(maxTotalPages - 1)}
        fixed
      >
        {maxTotalPages}
      </Number>
      <Select>
        <Button onClick={() => setPagination(5)} active={pagination === 5}>
          5
        </Button>
        <Button onClick={() => setPagination(10)} active={pagination === 10}>
          10
        </Button>
        <Button onClick={() => setPagination(15)} active={pagination === 15}>
          15
        </Button>
      </Select>
    </Container>
  )
}

export default Footer
