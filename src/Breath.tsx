import {
  BlurMask,
  Canvas,
  Easing,
  Fill,
  Group,
  mix,
  useComputedValue,
  useLoop
} from '@shopify/react-native-skia'
import { ReactElement } from 'react'
import { StyleSheet } from 'react-native'
import { useWindowCenter } from 'src/utils'

import { Ring } from './Ring'

const styles = StyleSheet.create({
  canvas: {
    flex: 1
  }
})

type Props = {
  numberOfRings?: number
  color1?: string
  color2?: string
  blur?: number
  opacity?: number
}

export const Breath = ({
  numberOfRings = 6,
  color1 = '#A0C3D2',
  color2 = '#9DF1DF',
  blur = 40,
  opacity = 0.3
}: Props): ReactElement => {
  const center = useWindowCenter()

  const progress = useLoop({
    duration: 3000,
    easing: Easing.inOut(Easing.ease)
  })

  const transform = useComputedValue(() => {
    return [{ rotate: mix(progress.current, 1.5 * Math.PI, 0) }]
  }, [progress])

  return (
    <Canvas style={styles.canvas}>
      <Fill color="black" />
      <Group origin={center} transform={transform}>
        <BlurMask style="solid" blur={blur} />
        {Array.from({ length: numberOfRings }).map((_, i) => (
          <Ring
            index={i}
            total={numberOfRings}
            key={i}
            color={i % 2 ? color1 : color2}
            progress={progress}
            opacity={opacity}
          />
        ))}
      </Group>
    </Canvas>
  )
}

export default Breath
