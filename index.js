import makeStore from './src/store';
import startServer from './src/server.js';

export const store = makeStore();
startServer(store);

store.dispatch({
  type: 'SET_ENTRIES',
  erntries: require('./entries.json')
});
store.dispatch({type: 'NEXT'});