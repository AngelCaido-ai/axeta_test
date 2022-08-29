import {store} from "../index";
import {userActionList} from "./userActionList";
import axios from "axios";

const API_URL = 'http://api.openweathermap.org'
const API_KEY = '080e6c06564aff3e6cbca90d31f5e6ca'

export const editUserName = (name) => {
  return dispatch => {
      dispatch({type: userActionList.EDIT_USER_NAME, payload: name})
  }
}

export const editUserLocation = (locationName = "") => {
  return async dispatch => {
    try{
      const req = await axios.get(`${API_URL}/geo/1.0/direct?q=${locationName}&limit=1&appid=${API_KEY}`)

      const response = req.data[0]

      dispatch({
        type: userActionList.EDIT_USER_LOCATION, payload: {
          name: `${response.name}, ${response.state}, ${response.country}`,
          lat: response.lat.toString(),
          lon: response.lon.toString()
        }
      })
    }
    catch (err) {
      console.error(err.message)
    }
  }
}

export const pushToUserExperience = (experienceItem) => {
  return dispatch => {
      const experienceList = JSON.parse(JSON.stringify(store.getState().user.experience))
      const isDuplicate = experienceList.find(item => item.name.toLowerCase() === experienceItem.name.toLowerCase())
      if(!isDuplicate){
        experienceList.push(experienceItem)

        const sortedList = experienceList.sort((a, b) => b.years - a.years);

        dispatch({type: userActionList.CHANGE_USER_EXPERIENCE, payload: sortedList})
      }
    }
}

export const deleteFromUserExperience = (id) => {
  return dispatch => {
    const experienceList = JSON.parse(JSON.stringify(store.getState().user.experience))

    const filteredList = experienceList.filter(item => item.id !== id)

    dispatch({type: userActionList.CHANGE_USER_EXPERIENCE, payload: filteredList})
  }
}

export const editUserExperienceYears = (id, years) => {
  return dispatch => {

    const experienceList = JSON.parse(JSON.stringify(store.getState().user.experience))

    const foundExperienceItem = experienceList.find(item => item.id === id)
    foundExperienceItem.years = years

    const sortedList = experienceList.sort((a, b) => b.years - a.years);

    dispatch({type: userActionList.CHANGE_USER_EXPERIENCE, payload: sortedList})
  }
}

