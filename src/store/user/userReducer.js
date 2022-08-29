import produce from "immer";
import {userActionList} from "./userActionList";

const initialState = {
  name: 'John Smith',
  location: {
    name: 'Portland, Oregon, US',
    lat: "45.5202471",
    lon: "-122.674194",
  },
  experience: [
    {id: 1, name: 'PHP', years: "6"},
    {id: 3, name: 'JavaScript', years: "4.5"},
    {id: 2, name: 'Ruby', years: "2"},
  ]
}

export const userReducer = (state = initialState, action) => {
  return produce(state, newState => {
      if(action.type === userActionList.EDIT_USER_NAME) {
        newState.name = action.payload
      }
      else if(action.type === userActionList.EDIT_USER_LOCATION){
        newState.location = action.payload
      }
      else if(action.type === userActionList.CHANGE_USER_EXPERIENCE){
        newState.experience = action.payload
      }
  })
}