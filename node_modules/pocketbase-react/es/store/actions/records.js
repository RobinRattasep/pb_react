import * as ReduxType from '../types';
const setRecords = (key, payload) => ({
  type: ReduxType.SET_RECORDS,
  key,
  payload
});
const addRecord = (key, payload) => ({
  type: ReduxType.ADD_RECORD,
  key,
  payload
});
const addRecords = (key, payload) => ({
  type: ReduxType.ADD_RECORDS,
  key,
  payload
});
const deleteRecord = (key, payload) => ({
  type: ReduxType.DELETE_RECORD,
  key,
  payload
});
const deleteRecords = (key, payload) => ({
  type: ReduxType.DELETE_RECORDS,
  key,
  payload
});
const updateRecord = (key, payload) => ({
  type: ReduxType.UPDATE_RECORD,
  key,
  payload
});
export { setRecords, addRecord, addRecords, deleteRecord, deleteRecords, updateRecord };