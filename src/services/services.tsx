import { AllDataTypes, SelectiveDataTypes } from '../types/q_type'

const shufflingArray = (array: any[]) => {
    return array.sort((a, b) => 0.5 - Math.random());
}


export const quizQuestionsApi = async(questions:number,level:string):Promise<SelectiveDataTypes[]> => {
    let fetchedData = await fetch(`https://opentdb.com/api.php?amount=${questions}&difficulty=${level}&type=multiple`);
    let { results } = await fetchedData.json()
    let mainData: SelectiveDataTypes[] = results.map((val: AllDataTypes) => {
        return {
            correct_answer: val.correct_answer,
            question: val.question,
            options: shufflingArray([...val.incorrect_answers, val.correct_answer])
        }
    })
    return mainData;
}
