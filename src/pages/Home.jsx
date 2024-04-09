import React, { useState } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList'

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date())

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={'<'} />}
        rightChild={<Button text={'>'} />}
      />
      <DiaryList />
    </div>
  )
}

export default Home
