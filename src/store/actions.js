export function add(data) {
  return {
    type: '@hero/SEARCH_HERO',
    payload: { data },
  };
}
export function details(id) {
  return {
    type: '@hero/DETAILS_HERO',
    payload: { id },
  };
}
