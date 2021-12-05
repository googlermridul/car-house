import { useEffect, useState } from "react"

const useReviews = () => {
   const [reviews, setReviews] = useState([])
   useEffect(() => {
      fetch('https://immense-hamlet-59638.herokuapp.com/reviews')
      .then(res => res.json())
      .then(data => {
         setReviews(data)
      })
   }, [])

   return [reviews];
}

export default useReviews;