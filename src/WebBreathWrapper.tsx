import { version } from 'canvaskit-wasm/package.json'
import { Text } from 'react-native'

import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web'

const WebBreathWrapper = () => (
  <WithSkiaWeb
    opts={{
      locateFile: (file: string) =>
        `https://cdn.jsdelivr.net/npm/canvaskit-wasm@${version}/bin/full/${file}`
    }}
    getComponent={() => import('./Breath')}
    fallback={<Text style={{ textAlign: 'center' }}>Loading Skia...</Text>}
  />
)

export default WebBreathWrapper
