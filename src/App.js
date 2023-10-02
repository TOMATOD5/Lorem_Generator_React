import data from "./data"
import { useState } from "react"


const App = () => {
  const [count, setCount] = useState(0)


  const submitForm = (e) => {
    e.preventDefault()
    const amount = parseInt(count)
    console.log(typeof(amount))
  }




  return (
    <section>
      <h1>Lorem ipsum generátor</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="paragraphs">Odstavce:</label>
        <input type="number" id="paragraphs" onChange={ (e) => {setCount(e.target.value)} }/><br />
        <input type="submit" value="Vygenerovat"/>
      </form>
    </section>
  )
}


export default App