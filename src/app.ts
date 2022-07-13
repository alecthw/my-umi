// 运行时配置
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from './app/store';

export const rootContainer = (container: ReactNode[]) => {
  return React.createElement<any>(Provider, { store }, container);
};
