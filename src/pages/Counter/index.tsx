import Counter from './Counter';

import { store } from '@/app/store';
import counterReducer from './counterSlice';

store.injectReducer('counter', counterReducer);

export default Counter;
