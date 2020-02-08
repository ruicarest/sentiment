import { updateField, end } from "../stores/SentimentStore";
import { ofType, ActionsObservable } from "redux-observable";
import { mergeMap, map, mapTo, delay } from "rxjs/operators";

export const runAlgorithmEpic = action$ =>
  action$.pipe(
    ofType("sentiment/INIT"),
    delay(1000),
    mapTo(updateField("loading", false))
  );
