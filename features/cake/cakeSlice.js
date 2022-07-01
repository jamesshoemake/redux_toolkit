const createSlice = require("@reduxjs/toolkit").createSlice; // createSlice uses immer un the hood

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    // create slick auto generates action creators with the same names as reducer functions
    ordered: (state) => {
      state.numOfCakes--;
    },
    restock: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
