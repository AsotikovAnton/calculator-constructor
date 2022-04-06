import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ModeActionCreators from '../store/action-creators/mode';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ModeActionCreators, dispatch);
}
