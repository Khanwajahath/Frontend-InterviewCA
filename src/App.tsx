 
import { useQuery } from '@tanstack/react-query'
import './App.css'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { Thought } from './components/thought/thought'
import  LeftDiv  from './components/leftDiv/leftDiv'


function App() {

  return (
    <div className=" p-2 bg-black">
       <Header></Header>
       <Thought></Thought>
         <LeftDiv></LeftDiv>
       <Footer></Footer>
    </div>
  )
}
export default App
