import { createStore, createHook, createSubscriber } from 'react-sweet-state';

const AppStore = createStore({
  initialState: {
    theme: 'dark'
  },
  actions: {
    toggleTheme: () => ({ getState, setState }) => (
      setState({
        theme: getState().theme === 'dark' ? 'light' : 'dark'
      })
    )
  }
});

const useAppStore = createHook(AppStore);
const AppStoreSubscriber = createSubscriber(AppStore);

export {
  useAppStore,
  AppStoreSubscriber
};