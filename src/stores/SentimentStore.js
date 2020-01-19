import { initialState } from "./sentimentInitialState";
import { cloneDeep } from "lodash";

// Actions
const INIT = "sentiment/INIT";
const UPDATE_FIELD = "sentiment/UPDATE_FIELD";

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
export function updateField(fieldId, value) {
  return { type: UPDATE_FIELD, payload: { field: fieldId, value } };
}
