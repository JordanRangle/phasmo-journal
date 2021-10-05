import { Ghost } from './../../ghost-interface';
import { Action, createAction, props } from '@ngrx/store';


export const SELECT_GHOST = 'SELECT_GHOST';

// export class SelectGhost implements Action {
//     readonly type = SELECT_GHOST;
//     // payload = {
//     //     ghost: {}
//     // };

//     constructor(public payload: Ghost) {}
// }

// export type Actions = SelectGhost;

export const selectGhost = createAction(
    '[Ghosts Page] Select Ghost',
    props<{ payload: Ghost }>()
);