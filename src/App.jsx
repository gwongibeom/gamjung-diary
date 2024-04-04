import './App.css'
import Diary from './pages/Diary'
import Home from './pages/Home'
import New from './pages/New'
import NotFound from './pages/NotFound'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { getEmotionImage } from './util/get-emotion-image'

function App() {
  const nav = useNavigate()

  const onClickButton = () => {
    nav('/new')
  }

  return (
    <>
      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
      </div>
      <div>
        <Link to={'/'}>home</Link>
        <Link to={'/new'}>new</Link>
        <Link to={'/diary'}>diary</Link>
      </div>
      <button onClick={onClickButton}>new로 이동</button>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
