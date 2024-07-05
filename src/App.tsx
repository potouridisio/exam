import { getCategories, getQuestions } from "./util/api";
import { useEffect } from "react";
function App() {

  
    getCategories()
    getQuestions()
  
  
  
  return <div>

   

    <label>Select a quiz category : </label>
    <select name="category" >
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3' selected>3</option>
      <option value='4'>4</option>
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
