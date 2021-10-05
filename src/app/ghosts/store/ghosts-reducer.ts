import { Action, createReducer, on } from "@ngrx/store";
import { Ghost } from './../../ghost-interface';
import * as SelectGhostActions from "./ghosts.actions";

// const initialState = {
//     ghost: {},
//     evidence: []
// };

// export function ghostReducer(state: Ghost = initialState, action: SelectGhostActions.SelectGhost) {
//     switch (action.type) {
//         case SelectGhostActions.SELECT_GHOST:
//             return {
//                 ...state,
//                 ghost: action.payload
//             };
//         default:
//             return state;
//     }
// }

export interface State {
    ghost: Ghost;
}

const initialState: State = {
    ghost: {
        id: 0,
        name: "",
        evidence: [],
        description: "",
        visible: false
    }
}

const GhostReducer = createReducer(
    initialState,
    // on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
    on(SelectGhostActions.selectGhost, (state, { payload }) => ({ ghost: payload }))
);

export function reducer(state: State | undefined, action: Action) {
    return GhostReducer(state, action);
}