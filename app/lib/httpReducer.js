import Immutable from 'immutable';

export default (state, action, entity, cb) => {
  const meta = action.meta || {};

  const { payload } = action;
  const { error, loading, infiniteScroll } = meta;

  return state.withMutations((map) => {
    // Remove error and status from the state
    map.delete('error');
    map.delete('status');

    // Set loading on the state
    map.set('loading', loading || false);

    if (error) {
      // If there was an error, set 'error' to the payload and 'status' to 'error' on the state
      map.set('error', Immutable.fromJS(payload));
      map.set('status', 'error');
    } else if (typeof payload !== 'undefined') {
      const { data, normalized, ...restOfPayload } = payload;

      // If we've made it this far, the request was a success -- set 'status' to 'success' on state
      map.set('status', 'success');

      if (cb) {
        // Offload the rest onto a callback if defined
        cb(map, action);
      } else if (normalized) {
        // Merge the new normalized data with the old data
        const oldItems = (map.get('data') || Immutable.Map()).get('items') || Immutable.Map();
        const newItems = oldItems.mergeDeep(Immutable.fromJS(normalized.entities[entity] || {}));

        let { result } = normalized;

        if (infiniteScroll) {
          const oldResult = ((map.get('data') || Immutable.Map()).get('result') || Immutable.List()).toJS();

          result = oldResult.concat(result);
        }

        // Set 'data' on the state to the normalized data, including the merged items
        map.set('data', Immutable.fromJS({
          result,
          items: newItems,
          ...restOfPayload,
        }));
      } else {
        // If we've made it here, we're not using normalizr -- set 'data' on the state to payload
        map.set('data', Immutable.fromJS(payload));
      }
    }
  });
};
