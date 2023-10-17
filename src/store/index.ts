import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const generateCombineReducer = (api) => combineReducers({
  [api.reducerPath]: api.reducer
})

export const setupStore = (api) =>
  configureStore({
    reducer: generateCombineReducer(api),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([api.middleware ]),
  });

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
