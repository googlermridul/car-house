import { useEffect, useState } from "react"

const useCars = () => {
   const [cars, setCars] = useState([])
   useEffect(() => {
      fetch('https://immense-hamlet-59638.herokuapp.com/cars')
      .then(res => res.json())
      .then(data => {
         setCars(data)
      })
   }, [])

   return [cars];
}

export default useCars;