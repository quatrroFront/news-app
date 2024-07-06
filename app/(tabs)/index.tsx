import React from 'react';
import {
  createClient,
  Provider as UrqlProvider,
  dedupExchange,
  fetchExchange,
} from 'urql';
import { StatusBar } from 'react-native';

import { RootNavigator } from './screens/Root.navigator';

import { SafeAreaProvider } from 'react-native-safe-area-context';

const client = createClient({
  url: 'http://localhost:3000/graphql',
  exchanges: [dedupExchange, fetchExchange],
});

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <UrqlProvider value={client}>
        <StatusBar />
        <RootNavigator />
      </UrqlProvider>
    </SafeAreaProvider>
  );
};

export default App;
