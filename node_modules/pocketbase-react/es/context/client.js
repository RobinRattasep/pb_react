import * as React from 'react';
import { createContext } from 'react';
export const ClientContext = createContext(null);
export const ClientProvider = props => {
  return /*#__PURE__*/React.createElement(ClientContext.Provider, {
    value: props.client
  }, props.children);
};