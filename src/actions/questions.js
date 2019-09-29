import { _getQuestions } from "../utils/_DATA";
export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";

export default function recieveQuestions() {
  return dispatch => {
    return _getQuestions().then(questions => {
      dispatch({
        type: RECIEVE_QUESTIONS,
        questions: questions
      });
    });
  };
}
