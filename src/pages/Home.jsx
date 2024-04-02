import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const [params, setParams] = useSearchParams()
  console.log(params.get('test'))
  return <div>Home</div>
}

export default Home
