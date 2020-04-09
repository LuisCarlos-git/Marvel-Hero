import produce from 'immer';

const initialState = {
  list: [],
  details: {},
};

export default function add(state = initialState, action) {
  switch (action.type) {
    case '@hero/SEARCH_HERO':
      return produce(state, (draft) => {
        draft.list = action.payload.data;
      });

    case '@hero/DETAILS_HERO': {
      return produce(state, (draft) => {
        const hero = draft.list.find(
          (lists) => lists.id === Number(action.payload.id)
        );
        if (hero) {
          draft.details = hero;
        }
      });
    }

    default:
      return state;
  }
}
