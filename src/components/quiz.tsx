import React, { useState } from 'react'
import './quiz.css'
import './responsive.css'
import { quizQuestionsApi } from '../services/services'
import { SelectiveDataTypes } from '../types/q_type'
import ResultTable from './resultTable'


function Quiz() {


    const [selected, setSelected] = useState<string>('')
    const [current, setCurrent] = useState<number>(0)
    const [result, setResult] = useState<number>(0)
    const [check, setCheck] = useState<boolean[]>([])
    const [quiz, setQuiz] = useState<SelectiveDataTypes[]>([])
    const [ask, setAsk] = useState<boolean>(true)
    const [questions, setQuestions] = useState<number>(5)
    const [level, setLevel] = useState<string>('easy')

    const startQuiz = () => {
        const QuizData = async () => {

            setAsk(false)
            let data: SelectiveDataTypes[] = await quizQuestionsApi(questions, level)
            setQuiz(data)
        }
        QuizData()
    }
    const RestartQuiz = () => {
        setQuiz([])
        setAsk(true)
        setCurrent(0)
        setResult(0)
        setCheck([])
        setQuestions(5)
        setLevel('easy')
    }

    const changeQuestion = () => {
        setCurrent(current + 1)
        setSelected('')
        if (quiz) {
            let checking: boolean = selected === quiz[current].correct_answer
            if (checking) {
                setResult(result + 1)
            }
            if (checking) {
                setCheck([...check, true])
            }
            else {
                setCheck([...check, false])
            }
        }

    }

    if (ask) {
        return (
            <div className="main-quiz3">
                <h1>Fill the below form to start quiz !</h1>
                <hr />
                <div className='askingDiv'>

                    <div>
                        <p className='numberQuestions'>Select number of questions:</p>
                        <select value={questions} onChange={(e) => { setQuestions(Number(e.target.value)) }} className='quantityInput' name="" id="">
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                            <option value={25}>25</option>
                            <option value={30}>30</option>
                        </select>
                        <p className='range'>(From 5 to 30)</p>
                    </div>
                    <div>
                        <p className='numberQuestions'>Select difficulty level:</p>
                        <select value={level} onChange={(e) => { setLevel(e.target.value) }} className='quantityInput' name="" id="">
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Difficult</option>
                        </select>
                    </div>
                    <div className='start_quiz_div'>
                        <button onClick={() => startQuiz()} className='start_quiz_btn'>Start Quiz</button>
                    </div>
                </div>
            </div>
        )
    }
    if (quiz.length === 0) {
        return (
            <div className='main-quiz'>
                <div className="loader"></div>
            </div>
        )
    }
    if (current === quiz.length) {
        let percentage: number = result * 100 / quiz.length
        return (
            <div className='main-quiz2'>
                <div className='mainquiz2_1'>
                    <div className='result_main'>
                        <h1>Score Card</h1>
                        <hr />
                        <h2>Total Questions: &nbsp;{quiz.length}</h2>
                        <h2>Correst Answers: &nbsp;{result}</h2>
                        <h2>Percentage: &nbsp;{percentage.toFixed(2)} %</h2>
                        <h2>Status: &nbsp; {result * 100 / quiz.length >= 40 ? 'Pass' : 'Fail'}</h2>
                    </div>
                    <ResultTable show={false} checking={check} length={quiz.length} />
                </div>
                <hr />
                <div className='re_take_div'>
                    <button className='re_take' onClick={() => RestartQuiz()}>ReTake</button>
                </div>
            </div>
        )
    }

    return (
        <div className='main-quiz'>

            <div className='quizDiv'>
                <div className='questionDiv'>
                    <h2 className='questionHead'>Question #  {current + 1} / {quiz.length} :</h2>
                    <p className='question' dangerouslySetInnerHTML={{ __html: quiz[current].question }} />
                </div>
                <div className='optionsDiv'>
                    {
                        quiz[current].options.map((val, ind) => {
                            return (
                                <div key={ind} onClick={() => { setSelected(val) }} id={selected === val ? 'selected' : ''} className="options" dangerouslySetInnerHTML={{ __html: val }} />
                            )
                        })
                    }
                </div>
                <div className='nextButtonDiv'>
                    <button disabled={selected === '' ? true : false} onClick={() => changeQuestion()} className='nextButton'>{current === quiz.length - 1 ? 'Submit Quiz' : 'Next'}</button>
                </div>
            </div>
            <ResultTable show={true} checking={check} length={quiz.length} />
        </div>
    )
}

export default Quiz
