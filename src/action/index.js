
export const ADD = "SET_TECHNOLOGY"
export const DELETE = "DELETE"
export const setTechnology = text => ({ type: ADD, payload: { text: text } });
export const deleteTechnology = text => ({ type: DELETE, payload: { text: text } });
