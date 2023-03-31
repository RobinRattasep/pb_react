import * as React from 'react';
import { createContext, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/store';
import { ClientProvider } from './client';
import { ContentProvider } from './content';
import { AuthProvider } from './auth';
import { StorageService } from '../service/Storage';
export const PocketbaseContext = createContext(null);
export const Pocketbase = props => {
  const [client, setClient] = React.useState(null);
  const [initialCollections, setInitialCollections] = React.useState();
  useEffect(() => {
    const client = new PocketBase(props.serverURL);
    client.authStore.onChange(async () => {
      await StorageService.set(StorageService.Constants.COOKIE, client.authStore.exportToCookie());
      setInitialCollections([]);
      setInitialCollections(props.initialCollections);
    });
    StorageService.get(StorageService.Constants.COOKIE).then(cookie => {
      if (cookie) {
        client.authStore.loadFromCookie(cookie);
        setInitialCollections([]);
        setInitialCollections(props.initialCollections);
      }
      setClient(client);
    });
  }, [props.serverURL]);
  return client ? /*#__PURE__*/React.createElement(ClientProvider, {
    client: client
  }, /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(PersistGate, {
    persistor: persistor
  }, /*#__PURE__*/React.createElement(AuthProvider, {
    webRedirectUrl: props.webRedirectUrl,
    mobileRedirectUrl: props.mobileRedirectUrl,
    openURL: props.openURL
  }, /*#__PURE__*/React.createElement(ContentProvider, {
    collections: initialCollections
  }, props.children))))) : null;
};