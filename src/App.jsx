import React from 'react'
import Card from './Components/Card'
import './App.css'
import NavBar from './Components/NavBar'

const App = () => {
  const buy = () => {
    alert("Product buy karny ky lia pasy need han!")
  }
  return (
    <>
      <div className='py-2 px-3'>

        <NavBar className='py-2' />
        <div className='flex gap-2.5'>
          <Card title={'Car 1'} desc={'Every 2015/2021 new shape own engine 87k millage B2B original demand 1990000/='} fun={buy} img={'https://images.olx.com.pk/thumbnails/585691900-800x600.webp'} />
          <Card title={'Car 2'} desc={'Every 2015/2021 new shape own engine 87k millage B2B original demand 1990000/='} fun={buy} img={'https://images.olx.com.pk/thumbnails/585691897-800x600.webp'} />
          <Card title={'Car 3'} desc={'Every 2015/2021 new shape own engine 87k millage B2B original demand 1990000/='} fun={buy} img={'https://images.olx.com.pk/thumbnails/585691898-800x600.webp'} />
          <Card title={'Car 4'} desc={'Every 2015/2021 new shape own engine 87k millage B2B original demand 1990000/='} fun={buy} img={'https://images.olx.com.pk/thumbnails/585691902-800x600.webp'} />

        </div>

      </div>



    </>
  )
}

export default App