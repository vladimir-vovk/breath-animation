import { SafeAreaProvider } from 'react-native-safe-area-context'

import Breath from './Breath'

export const Main = () => (
  <SafeAreaProvider>
    <Breath />
  </SafeAreaProvider>
)
