import React, { useState, useContext } from 'react'
import { DiaryStateContext } from '../App'
import Header from '../components/Header'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList'

const getMonthyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime()

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    0,
    0,
    0
  ).getTime()

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  )
}

const Home = () => {
  const data = useContext(DiaryStateContext)
  const [pivotDate, setPivotDate] = useState(new Date())

  const MonthyData = getMonthyData(pivotDate, data)

  const onIncraseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
  }

  const onDecraseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
  }

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={'<'} onClick={onDecraseMonth} />}
        rightChild={<Button text={'>'} onClick={onIncraseMonth} />}
      />
      <DiaryList data={MonthyData} />
    </div>
  )
}

export default Home
