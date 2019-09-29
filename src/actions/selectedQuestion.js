export const SET_SELECTED_QUESTION = "SET_SELECTED_QUESTION";

export default function setAuthedUser(question) {
    console.log('☄',question);
    
  return {
    type: SET_SELECTED_QUESTION,
    question
  };
}
