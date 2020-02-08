import { updateField, end } from "../stores/SentimentStore";
import { ofType, ActionsObservable } from "redux-observable";
import { mergeMap, map, mapTo, delay } from "rxjs/operators";

export const runAlgorithmEpic = action$ =>
  action$.pipe(
    ofType("sentiment/INIT"),
    delay(5000),
    mapTo({ type: "sentiment/END" })
    //mergeMap(action => updateField("loading", false))
  );
