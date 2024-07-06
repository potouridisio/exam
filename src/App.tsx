import { getCategories, getQuestions } from "./util/api";
import { SetStateAction, useEffect } from "react";
import { useState } from "react";
import type { Question } from "./interfaces/category";

function App() {
  const [quizState, setQuizState] = useState('selectCategory')
  const [selectedCategory, setSelectedCategory] = useState('---')
  const [selectedAnswer, setSelectedAnswer] = useState('')

  const handleAnswerChange = (event: { target: { value: any; }; }) => {
    setSelectedAnswer(event.target.value);}
    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => { setSelectedCategory(e.target.value) }
    console.log(selectedCategory)
    const [questions, setQuestions] = useState<Question[]>([])

    useEffect(() => {
      // getCategories().then(data => {
      //  const categories = data
      //  console.log(categories)
      //  })
      getQuestions(selectedCategory).then(data => {

        setQuestions(data)

        console.log(data)
        console.log(questions)
      })
    }
      , [selectedCategory])

console.log(selectedAnswer)



    return <div>



      <label>Select a quiz category : </label>
      <select name="category" value={selectedCategory} onChange={handleChange}>
        <option value='---'>---</option>
        <option value='Linux'>Linux</option>
        <option value='Docker'>Docker</option>
        <option value='SQL'>SQL</option>
        <option value='Code'> Code </option>
      </select>
      <button onClick={() => { setQuizState('running') }} className="border-2 border-black rounded-md ml-10">Start quiz</button>
      <div className="flex flex-col w-1/2 gap-y-16 border-2 border-black rounded-md">
        <div className="flex justify-between">
          <div className="  border-2">Question 1 of 10 </div>
          <div className="  border-2">30''</div>
        </div>
        <p className="text-3xl font-bold underline text-center" >{questions.length > 0 && quizState === 'running' ? questions[0].question : 'Loading'} </p>
        <div >
          <form className="flex justify-around">
            <div>
              <input type="radio" id="a" value="answer_a" checked={selectedAnswer==='answer_a'} onChange={handleAnswerChange} />
              <label>{quizState === 'running' ? questions[0].answers.answer_a : 'loading'}</label></div>
            <div>
              <input type="radio" id="b" value="answer_b" checked={selectedAnswer==='answer_b'} onChange={handleAnswerChange} />
              <label>{quizState === 'running' ? questions[0].answers.answer_b : 'loading'}</label></div>
            <div>
              <input type="radio" id="c" value="answer_c" checked={selectedAnswer==='answer_c'} onChange={handleAnswerChange}/>
              <label>{quizState === 'running' ? questions[0].answers.answer_c : 'loading'}</label></div>
            <div>
              <input type="radio" id="d" value="answer_d" checked={selectedAnswer==='answer_d'} onChange={handleAnswerChange}/>
              <label>{quizState === 'running' ? questions[0].answers.answer_d : 'loading'}</label></div>
            <div>
              <input type="radio" id="e" value="answer_e" checked={selectedAnswer==='answer_e'} onChange={handleAnswerChange}/>
              <label>{quizState === 'running' ? questions[0].answers.answer_e : 'loading'}</label></div>
            <div >
              <input type="radio" id="f" value="answer_f" checked={selectedAnswer==='answer_f'} onChange={handleAnswerChange} />
              <label>{quizState === 'running' ? questions[0].answers.answer_f : 'loading'}</label></div>



          </form>
        </div>
      </div>
    </div>

  }

  export default App;
