import _extends from "@babel/runtime/helpers/esm/extends";
import * as ReduxType from '../types';
function appendRecord(record, records) {
  return [...records, record];
}
function appendRecords(recordsToAppend, records) {
  return [...records, ...recordsToAppend];
}
function updateRecord(record, records) {
  return records.map(r => {
    if (r.id === record.id) {
      return record;
    }
    return r;
  });
}
function deleteRecord(record, records) {
  return records.filter(r => r.id !== record.id);
}
function deleteRecords(recordsToDelete, records) {
  return records.filter(r => !recordsToDelete.includes(r));
}
export const records = (state = {}, action) => {
  var _state$action$key;
  const list = (_state$action$key = state[action.key]) != null ? _state$action$key : [];
  switch (action.type) {
    case ReduxType.SET_RECORDS:
      if (Array.isArray(action.payload)) {
        return _extends({}, state, {
          [action.key]: action.payload
        });
      }
    case ReduxType.ADD_RECORD:
      return _extends({}, state, {
        [action.key]: appendRecord(action.payload, list)
      });
    case ReduxType.ADD_RECORDS:
      return _extends({}, state, {
        [action.key]: appendRecords(action.payload, list)
      });
    case ReduxType.DELETE_RECORD:
      return _extends({}, state, {
        [action.key]: deleteRecord(action.payload, list)
      });
    case ReduxType.DELETE_RECORDS:
      return _extends({}, state, {
        [action.key]: deleteRecords(action.payload, list)
      });
    case ReduxType.UPDATE_RECORD:
      return _extends({}, state, {
        [action.key]: updateRecord(action.payload, list)
      });
    default:
      return state;
  }
};