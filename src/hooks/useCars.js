import { useEffect, useState } from "react"

const useCars = () => {
   const [cars, setCars] = useState([])
   useEffect(() => {
      fetch('/fakedata/car.json')
      .then(res => res.json())
      .then(data => {
         setCars(data)
      })
   }, [])

   return [cars];
}

export default useCars;