export const ADD_RECORD = 'ADD_RECORD'
export const UPDATE_RECORD = 'UPDATE_RECORD'
export const DELETE_RECORD = 'DELETE_RECORD'

export const addRecord = (data) => {
  return {
    type: ADD_RECORD, 
    payload: data,
  }
}

export const updateRecord = (data) => {
  return {
    type: UPDATE_RECORD, 
    payload: data,
  }
}

export const deleteRecord = (dataId) => {
  return {
    type: DELETE_RECORD, 
    payload: dataId,
  }
}