import { useState, useCallback } from 'react';
import { createContainer } from 'react-tracked';
import produce from 'immer';

const initialState = {
  todos: [
    { id: 1, title: 'Wash dishes' },
    { id: 2, title: 'Study JS' },
    { id: 3, title: 'Buy ticket' },
  ],
  query: '',
};
 
const useValue = () => useState(initialState);
 
const { Provider, useTrackedState, useUpdate: useSetState } = createContainer(
  useValue,
);

const useSetDraft = () => {
  const setState = useSetState();
  return useCallback(
    draftUpdater => {
      setState(produce(draftUpdater));
    },
    [setState],
  );
};
 
export { Provider, useTrackedState, useSetDraft };
