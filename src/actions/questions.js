import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from "../utils/_DATA";
import { receiveUsers } from "./users";

export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ANSWER_QUESTION";

export function recieveQuestions() {
  return dispatch => {
    return _getQuestions().then(questions => {
      dispatch({
        type: RECIEVE_QUESTIONS,
        questions: questions
      });
    });
  };
}

export function handleAddQuestion(question) {
  return dispatch => {
    return _saveQuestion(question).then(q => {
      dispatch({
        type: ADD_QUESTION,
        question: q
      });
      dispatch(receiveUsers())
    });
  };
}

export function handleAddAnswer(answer) {
  return dispatch => {
    return _saveQuestionAnswer(answer).then(() => dispatch(receiveUsers()));
  };
}
