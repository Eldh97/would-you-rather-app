import {RECIEVE_QUESTIONS} from "../actions/questions";
import {ADD_QUESTION} from '../actions/questions'
export default function questions(state = {}, action) {

  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return { ...state, ...action.questions };
      case ADD_QUESTION :
        return {...state, ...action.q}
    default:
      return state;
  }
}

