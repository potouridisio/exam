import { getCategories, getQuestions } from "./util/api";
import { SetStateAction, useEffect } from "react";
import { useState } from "react";
import type { Question } from "./interfaces/category";

function App() {
  const [quizState, setQuizState] = useState('selectCategory')
  const [selectedCategory, setSelectedCategory] = useState('Linux')
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [counter, setCounter] = useState(-1)
  const [score, setScore] = useState(0)
 


  const handleStarOver = () => {
    setCounter(0)
    setQuizState('running')
  }
  const handleNextQuest = () => {
    if (counter !== 9) {

      if (selectedAnswer === questions[counter].correct_answer) {
        setScore(score + 10)
      }
      setCounter(counter + 1)
   
    }
    else {
      setCounter(counter+1)
      setQuizState('finished')
    }

 
  }

  const handleStart= () =>{
    setQuizState('running')
    setCounter(0) 
   
    }


  const handleAnswerChange = (event: { target: { value: any; }; }) => {
    setSelectedAnswer(event.target.value);
  }
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
  console.log(counter)
  console.log(score)
console.log(questions)


  return <div>



    <label>Select a quiz category : </label>
    <select name="category" value={selectedCategory} onChange={handleChange}>
      <option value='---'>---</option>
      <option value='Linux'>Linux</option>
      <option value='Docker'>Docker</option>
      <option value='SQL'>SQL</option>
      <option value='Code'> Code </option>
    </select>
    <button onClick={handleStart} className="border-2 border-black rounded-md ml-10">Start quiz</button>



    <div className={quizState==='selectCategory'?'hidden':'flex flex-col  gap-y-16 border-2 border-black rounded-md'}>
      <div className="flex justify-between">
        <div className="  border-2">{(counter > -1) && (counter < 10) ? `Question ${counter + 1} of 10` : ``} </div>
        <div className="  border-2">30''</div>
      </div>
      <p className="text-3xl font-bold underline text-center" >{questions.length > 0 && quizState === 'running' ? questions[counter].question : 'Loading'} </p>
      <div  >
        <form className="flex justify-around">
          <div>
            <input type="radio" id="a" value="answer_a" checked={selectedAnswer === 'answer_a'} onChange={handleAnswerChange} />
            <label>{quizState === 'running' ? questions[counter].answers.answer_a : 'loading'}</label></div>
          <div>
            <input type="radio" id="b" value="answer_b" checked={selectedAnswer === 'answer_b'} onChange={handleAnswerChange} />
            <label>{quizState === 'running' ? questions[counter].answers.answer_b : 'loading'}</label></div>
          <div className={quizState==='running'?(questions[counter].answers.answer_c===null?'hidden':''):''}>
            <input type="radio" id="c" value="answer_c" checked={selectedAnswer === 'answer_c'} onChange={handleAnswerChange} />
            <label>{quizState === 'running' ? questions[counter].answers.answer_c : 'loading'}</label></div>
          <div className={quizState==='running'?(questions[counter].answers.answer_d===null?'hidden':''):''}>
            <input type="radio" id="d" value="answer_d" checked={selectedAnswer === 'answer_d'} onChange={handleAnswerChange} />
            <label>{quizState === 'running' ? questions[counter].answers.answer_d : 'loading'}</label></div>
          <div className={quizState==='running'?(questions[counter].answers.answer_e===null?'hidden':''):''}>
            <input type="radio" id="e" value="answer_e" checked={selectedAnswer === 'answer_e'} onChange={handleAnswerChange} />
            <label>{quizState === 'running' ? questions[counter].answers.answer_e : 'loading'}</label></div>
          <div className={quizState==='running'?(questions[counter].answers.answer_f===null?'hidden':''):''} >
            <input type="radio" id="f" value="answer_f" checked={selectedAnswer === 'answer_f'} onChange={handleAnswerChange} />
            <label>{quizState === 'running' ? questions[counter].answers.answer_f : 'loading'}</label></div>



        </form>
      </div>
      <div className="flex justify-between">
        <button className="border-2 border-black rounded-md" onClick={handleStarOver} >Start over</button>
        <button className="border-2 border-black rounded-md" onClick={handleNextQuest}>{counter === 9 ? 'Show results' : 'Next '}</button>

      </div>
    </div>
    <h1> {counter === 10 ? `Your score is ${score} %` : ``} </h1>

  </div>
}

export default App;
