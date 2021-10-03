const redux=require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const reduxLogger = require("redux-logger");
const applyMiddleware = redux.applyMiddleware;


const logger = reduxLogger.createLogger();

const BUY_CAKE='BUY_CAKE';
const BUY_ICECREAM='BUY_ICECREAM';

// ***********************Action************************ //

function buycake() {
    return{
        type: BUY_CAKE
    }
}

function buyicecream() {
    return{
        type: BUY_ICECREAM
    }
}



const initialCakeState={
    numOfCakes: 10,
}

const initialIcecreamState={
    numOfIcecreams: 20,
}

// *******************************Reducer****************************** //

const cakeReducer = (state=initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes: state.numOfCakes - 1,
            }
        default:
            return state
    }
}

const icecreamReducer = (state=initialIcecreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return{
                ...state,
                numOfIcecreams: state.numOfIcecreams - 1,
            }
        default: 
        return state
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
})

const store = createStore(rootReducer, applyMiddleware(logger));
console.log(store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(buycake());
store.dispatch(buyicecream());
store.dispatch(buyicecream());
store.dispatch(buyicecream());

unsubscribe();