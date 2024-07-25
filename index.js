const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const appyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = '"BUY_CAKE';
const BUY_ICECREAMS = "BUY_ICECREAMS";

const buyCake = () => {
  return { type: BUY_CAKE, info: "First redux action" };
};

const buyIceCreams = () => {
  return { type: BUY_ICECREAMS, info: "First redux action" };
};

const cakeInitialState = {
  numOfCakes: 10,
};

const iceCreameInitialState = {
  numOfIceCreams: 20,
};

const CakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const IceCreameReducer = (state = iceCreameInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAMS:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  cake: CakeReducer,
  iceCreame: IceCreameReducer,
});

const store = createStore(rootReducer, appyMiddleware(logger));

console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());

unsubscribe();
