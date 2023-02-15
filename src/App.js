import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/Home'
import Navbar from './routes/navbar/Navbar'
import SignIn from './routes/sign-in/SignIn'

const Shop = () => {
  return <h1>I am the shop page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App
