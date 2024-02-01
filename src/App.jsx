import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationCard from './components/LocationCard'
import ResidentCard from './components/ResidentCard'

function App() {
const locationId = getRandomNumber(126)
const [inputValue, setInputValue] = useState( locationId)
const url = `https://rickandmortyapi.com/api/location/${inputValue}`
const [location, getLocation, hasError] = useFetch(url)

useEffect(() => {
  
 getLocation()
}, [inputValue])

const inputLocation = useRef()

const handleSubmit = e => {
e.preventDefault()
setInputValue(inputLocation.current.value)
}

  return (
    <div>
       <div>
      <h1 className="app__title"><img src='https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/07/rick-and-morty-season-7.jpg' alt='Rick And Morty Logo'>
      </img></h1>
      <div>

      <form onSubmit={handleSubmit} className="app__form">
        <input ref={inputLocation} type="text" className="app__input" placeholder='Choose your portal 1-126'/>
        <button type="submit" className="app__button">
          Search
        </button>
      </form>
      </div>
      </div>
      {
        hasError
         ?<h2> Hey! you must provide an id from 1 to 126 </h2>
         : (
          <>
      <div className='card__container'>
      <LocationCard
      location = {location}
      />
        </div>  
      <div className='resident__container'>
        {
          location?.residents.map(url =>(
            <ResidentCard
            key = {url}
            url ={url}
            />
            
          ))
        }
      </div>
          </>
         )
      }
    </div>
  )
}

export default App
