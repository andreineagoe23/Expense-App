import { useEffect, useState } from "react"
import "./view.css"

// components
import ExpenseDetails from "../components/ExpenseDetails.js"

const View = () => {
    const [workouts, setWorkouts] = useState(null)
  
    useEffect(() => {
      const fetchWorkouts = async () => {
        const response = await fetch('http://localhost:4000/api/workouts/')
        const json = await response.json()
  
        if (response.ok) {
          setWorkouts(json)
        }
      }
  
      fetchWorkouts()
    }, [])
  
    return (
      <div className="home-view">
        <div className="workouts">
          {workouts && workouts.map(workout => (
            <ExpenseDetails workout={workout} key={workout._id} />
          ))}
        </div>
      </div>
    )
  }

export default View