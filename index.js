const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;
const fetchUser = require("./features/user/userSlice").fetchUser;

console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Update state", store.getState());
});

store.dispatch(fetchUser());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restock(3));

// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restock(2));

// unsubscribe();
