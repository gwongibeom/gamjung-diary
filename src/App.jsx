import './App.css'
import { useReducer } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Diary from './pages/Diary'
import Home from './pages/Home'
import New from './pages/New'
import Edit from './pages/Edit'
import NotFound from './pages/NotFound'

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: '1내용',
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: '2내용',
  },
]

function reducer(state, action) {
  return state
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
