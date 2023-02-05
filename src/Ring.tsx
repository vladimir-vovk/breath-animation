import { Circle, Group, mix, polar2Canvas, useComputedValue, vec } from '@shopify/react-native-skia'
import type { SkiaValue } from '@shopify/react-native-skia'
import { ReactElement } from 'react'
import { useWindowDimensions } from 'react-native'

type Props = {
  index?: number
  total: number
  color: string
  progress: SkiaValue<number>
  opacity: number
}

export const Ring = ({ index = 0, total, color, progress, opacity }: Props): ReactElement => {
  const { width, height } = useWindowDimensions()
  const radius = width < height ? width / 4 : height / 4
  const center = vec(width / 2, height / 2)
  const theta = ((2 * Math.PI) / total) * index

  const transform = useComputedValue(() => {
    const { x, y } = polar2Canvas({ theta, radius: progress.current * radius }, { x: 0, y: 0 })
    const scale = mix(progress.current, 0.3, 1)
    const transform = [{ translateX: x }, { translateY: y }, { scale }]
    return transform
  }, [progress])

  return (
    <Group origin={center} transform={transform}>
      <Circle opacity={opacity} c={center} r={radius} color={color} />
    </Group>
  )
}
