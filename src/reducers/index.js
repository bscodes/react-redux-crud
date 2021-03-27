import {
  ADD_RECORD, 
  UPDATE_RECORD,
  DELETE_RECORD
} from '../actions/index'
import { records } from '../states/index'

let reducer = (state = records, action) => {
  let newRecords;
  switch (action.type) {
    case ADD_RECORD: 
      newRecords = [...state];
      newRecords.push(action.payload);
      return newRecords;

    case UPDATE_RECORD: 
      break;
    case DELETE_RECORD:
      newRecords = [...state];
      newRecords = newRecords.filter(item => item.id !== action.payload);
      return newRecords;
  }
  return state;
}

export default reducer