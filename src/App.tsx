import { getCategories, getQuestions } from "./util/api";
import { SetStateAction, useEffect } from "react";
import { useState } from "react";


function App() {

  const [selectedCategory, setSelectedCategory] = useState('Linux')
  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) =>{ setSelectedCategory(e.target.value)}
  console.log(selectedCategory)
  const [questions,setQuestions]=useState([])

  useEffect(() => {
   // getCategories().then(data => {
    //  const categories = data
    //  console.log(categories)
  //  })
    getQuestions(selectedCategory).then(data => {
      const questions = data
      console.log(questions)
    })
  }
    , [selectedCategory])





  return <div>



    <label>Select a quiz category : </label>
    <select name="category" value={selectedCategory} onChange={handleChange}>
      <option value='Linux'>Linux</option>
      <option value='Docker'>Docker</option>
      <option value='SQL' selected>SQL</option>
      <option value='Code'> Code </option>
    </select>
    <button className="border-2 border-black rounded-md ml-10">Start quiz</button>
    <div className="flex flex-col w-1/2 gap-y-16 border-2 border-black rounded-md">
      <div className="flex justify-between">
        <div className="  border-2">Question 1 of 10 </div>
        <div className="  border-2">30''</div>
      </div>
      <p className="text-3xl font-bold underline text-center" >Question tade </p>
      <div >
        <form className="flex justify-around">
          <div><input type="radio" id="html" name="fav_language" value="HTML" />
            <label>HTML</label></div>
          <div><input type="radio" id="html" name="fav_language" value="HTML" />
            <label>HTML</label></div>
          <div><input type="radio" id="html" name="fav_language" value="HTML" />
            <label>HTML</label></div>
          <div><input type="radio" id="html" name="fav_language" value="HTML" />
            <label>HTML</label></div>


        </form>
      </div>
    </div>
  </div>

}

export default App;
