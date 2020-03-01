import { initialState } from "./sentimentInitialState";
import { cloneDeep } from "lodash";

// Actions
const INIT = "sentiment/INIT";
const END = "sentiment/END";
const UPDATE_FIELD = "sentiment/UPDATE_FIELD";
const FETCH_TWEET = "sentiment/FETCH_TWEET";

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    /*
    {
      type: 'sentiment/INIT'
    }
    */
    case INIT: {
      const newState = cloneDeep(initialState);
      return newState;
    }

    case FETCH_TWEET: {
      console.log("Fetching...");
      return state;
    }

    case END: {
      console.log("END");
      return state;
    }

    /*
   {
     type: 'sentiment/UPDATE_FIELD',
     payload:{ field:"textData", value:"asd" }
   }
   */
    case UPDATE_FIELD: {
      const fieldIdToUpdate = action.payload.field;
      const fieldValueToUpdate = action.payload.value;
      const newState = {
        ...state,
        [fieldIdToUpdate]: fieldValueToUpdate
      };
      return newState;
    }

    default:
      return state;
  }
}

// Action Creators
export function init() {
  return { type: INIT };
}
export function fetchTweet() {
  return { type: FETCH_TWEET };
}
export function updateField(fieldId, value) {
  return { type: UPDATE_FIELD, payload: { field: fieldId, value } };
}
export function end() {
  return { type: END };
}
