
import './App.css'
import Banner from './components/Header/Banner'
import Header from './components/Header/Header'
import Items from './components/Items/Items'
import CookHere from './components/cookArea/CookHere'

function App() {

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
      <Items></Items>
      <CookHere></CookHere>
      </div>
      
    </>
  )
}

export default App
