import produce from 'immer';

const initialState = {
  list: [],
};

export default function add(state = initialState, action) {
  switch (action.type) {
    case '@hero/SEARCH_HERO':
      return produce(state, (draft) => {
        draft.list = action.payload.data;
      });

    default:
      return state;
  }
}
