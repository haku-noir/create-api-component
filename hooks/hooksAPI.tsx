import * as React from 'react';
import { Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';

type IProps = {};

export const XXXAPI: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Action>();

  const state = useSelector<RootState, RootState>(state => state);

  React.useEffect(() => {}, [props, state]);

  return null;
};
