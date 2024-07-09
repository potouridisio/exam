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
  const [questions, setQuestions] = useState<Question[]>([])
 
 
 
 const [checkedAnswers, setCheckedAnswers] = useState({
  a: false,
  b: false,
  c: false,
  d: false,
  e: false,
  f: false,
});



useEffect(() => {
 
  getQuestions(selectedCategory).then(data => {

    setQuestions(data)

    console.log(data)
    console.log(questions)
  })
}
  , [selectedCategory])




const handleCheck = (event: { target: { name: any; checked: any; }; }) => {
  const { name, checked } = event.target;
  setCheckedAnswers({
    ...checkedAnswers,
    [name]: checked,
  });
 
  
};


  const handleStarOver = () => {
    setCounter(0)
    setQuizState('running')
    setScore(0)
  }
  const handleNextQuest = () => {
    if (counter !== questions.length - 1) {
     

      if (selectedAnswer === questions[counter].correct_answer) {
        setScore(score + 1)
      }
      setCounter(counter + 1)

    }
    else {

      if (selectedAnswer === questions[counter].correct_answer) {
        setScore(score + 1)
      }
      setCounter(counter + 1)
      setQuizState('finished')
    }
    


  }

  const handleStart = () => {
    setQuizState('running')
    setCounter(0)

  }


  const handleAnswerChange = (event: { target: { value: any; }; }) => {
    setSelectedAnswer(event.target.value);
  }
  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => { setSelectedCategory(e.target.value) }
  console.log(selectedCategory)


 

  return <div>



    <label>Select a quiz category : </label>
    <select name="category" value={selectedCategory} onChange={handleChange}>
      <option value='bash'>Bash</option>
      <option value='Linux'>Linux</option>
      <option value='Docker'>Docker</option>
      <option value='SQL'>SQL</option>
      <option value='Code'> Code </option>
      <option value='DevOps'> DevOps </option>
      <option value='CMS'> CMS </option>
      <option value='uncategorized'> Uncategorized</option>
    </select>
    <button onClick={handleStart} className="border-2 border-black rounded-md ml-10">Start quiz</button>



    <div className={quizState === 'selectCategory' ? 'hidden' : 'flex flex-col  gap-y-16 border-2 border-black rounded-md'}>
      <div className="flex justify-between">
        <div className="  border-2">{(counter > -1) && (counter < 10) ? `Question ${counter + 1} of 10` : ``} </div>
        <div className="  border-2">30''</div>
      </div>
      <p className="text-3xl font-bold underline text-center" >{questions.length > 0 && quizState === 'running' ? questions[counter].question : 'Loading'} </p>
      {quizState==='running'?(questions[counter].multiple_correct_answers==='false'?
      (<div  >

        <form className="flex justify-around">
          <div>
            <input type="radio" id="a" value="answer_a" checked={selectedAnswer === 'answer_a'} onChange={handleAnswerChange} />
            <label>{quizState === 'running' ? questions[counter].answers.answer_a : 'loading'}</label></div>
          <div>
            <input type="radio" id="b" value="answer_b" checked={selectedAnswer === 'answer_b'} onChange={handleAnswerChange} />
            <label>{quizState === 'running' ? questions[counter].answers.answer_b : 'loading'}</label></div>
          <div className={quizState === 'running' ? (questions[counter].answers.answer_c === null ? 'hidden' : '') : ''}>
            <input type="radio" id="c" value="answer_c" checked={selectedAnswer === 'answer_c'} onChange={handleAnswerChange} />
            <label>{quizState === 'running' ? questions[counter].answers.answer_c : 'loading'}</label></div>
          <div className={quizState === 'running' ? (questions[counter].answers.answer_d === null ? 'hidden' : '') : ''}>
            <input type="radio" id="d" value="answer_d" checked={selectedAnswer === 'answer_d'} onChange={handleAnswerChange} />
            <label>{quizState === 'running' ? questions[counter].answers.answer_d : 'loading'}</label></div>
          <div className={quizState === 'running' ? (questions[counter].answers.answer_e === null ? 'hidden' : '') : ''}>
            <input type="radio" id="e" value="answer_e" checked={selectedAnswer === 'answer_e'} onChange={handleAnswerChange} />
            <label>{quizState === 'running' ? questions[counter].answers.answer_e : 'loading'}</label></div>
          <div className={quizState === 'running' ? (questions[counter].answers.answer_f === null ? 'hidden' : '') : ''} >
            <input type="radio" id="f" value="answer_f" checked={selectedAnswer === 'answer_f'} onChange={handleAnswerChange} />
            <label>{quizState === 'running' ? questions[counter].answers.answer_f : 'loading'}</label></div>



        </form>
      </div>):

    (
      <div >
        <div><label><input type='checkbox' name='a' checked={checkedAnswers.a} onChange={handleCheck}/> {questions[counter].answers.answer_a} </label></div>
        <div><label><input type='checkbox' name='b' checked={checkedAnswers.b} onChange={handleCheck}/> {questions[counter].answers.answer_b} </label></div>
        <div className={quizState === 'running' ? (questions[counter].answers.answer_c === null ? 'hidden' : '') : ''}><label><input type='checkbox' name='c' checked={checkedAnswers.c} onChange={handleCheck}/> {questions[counter].answers.answer_c} </label></div>
        <div className={quizState === 'running' ? (questions[counter].answers.answer_d === null ? 'hidden' : '') : ''}><label><input type='checkbox' name='d' checked={checkedAnswers.d} onChange={handleCheck}/> {questions[counter].answers.answer_d} </label></div>
        <div className={quizState === 'running' ? (questions[counter].answers.answer_e === null ? 'hidden' : '') : ''}><label><input type='checkbox' name='e' checked={checkedAnswers.e} onChange={handleCheck}/> {questions[counter].answers.answer_e} </label></div>
        <div className={quizState === 'running' ? (questions[counter].answers.answer_f === null ? 'hidden' : '') : ''}><label><input type='checkbox' name='f' checked={checkedAnswers.f} onChange={handleCheck}/> {questions[counter].answers.answer_f} </label></div>
        
       
        
      </div>)):''}



      <div className="flex justify-between">
        <button className="border-2 border-black rounded-md" onClick={handleStarOver} >Start over</button>
        <button className={quizState === 'running' ? "border-2 border-black rounded-md" : 'hidden'} onClick={handleNextQuest}>{counter === questions.length - 1 ? 'Show results' : 'Next '}</button>

      </div>
    </div>
    <h1 className={score / questions.length * 100 <= 50 ? 'text-3xl font-bold underline text-center bg-red-600' : 'text-3xl font-bold underline text-center bg-green-600'}> {counter === questions.length ? `Your score is ${score / questions.length * 100} %` : ``} </h1>

  </div>
}

export default App;
