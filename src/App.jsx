
import { useState } from 'react'
import './App.css'
import Banner from './components/Header/Banner'
import Header from './components/Header/Header'
import Items from './components/Items/Items'
import CookHere from './components/cookArea/CookHere'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [cookie , setCookie] =useState([])
  const [preparing , setPreparing] =useState([])

  const handelCookie = (item)=> {
    const isExist = cookie.find(checkItem => checkItem.id===item.id)
    if(!isExist){
      setCookie([...cookie,item]);
    }
    else{
      toast("this recipe selected already")
    }   
  }
  const handelPreparing =(id)=>{
    const newCookie =cookie.filter(item=>item.id!==id)
    setCookie(newCookie)
    // const isExist = preparing.find(checkItem => checkItem.id===id.id)
    // if(!isExist) {
    //   setPreparing([...preparing,item])
    // }

  }

  return (
    <>
     
      {/* <h1 className="text-3xl font-bold underline">Vite + React</h1> */}
      <Header></Header>
      <Banner></Banner>
      <div className='text-center'>
        <h1 className='font-semibold text-4xl text-[#150B2B] mt-20 mb-6'>Our Recipes</h1>
        <p className='font-normal text-[#150B2B99] mb-12 md:px-60'>Our Recipes: A platform offering diverse culinary inspirations, from simple weekday meals to gourmet delights. Explore, create, and share your culinary adventures with an engaged communityZ</p>
      </div>
      <div className='md:flex gap-7'>
      <Items handelCookie={handelCookie}></Items>
      <CookHere handelPreparing={handelPreparing} cookie={cookie} preparing={preparing}></CookHere>
      <ToastContainer/>
      </div>
      
    </>
  )
}

export default App
