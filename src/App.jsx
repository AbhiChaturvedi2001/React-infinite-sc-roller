import React,{useState} from 'react'
import Header from './Components/Header'
import Home from './Components/Home'

const App = () => {
  const [searchImage, setSearchImage] = useState("")
  return (
  <>
    <Header searchImage={searchImage} setSearchImage={setSearchImage} />
    <Home searchImage={searchImage} />
  </>
  )
}

export default App