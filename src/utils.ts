import { SkPoint, vec } from '@shopify/react-native-skia'
import { useWindowDimensions } from 'react-native'

export const useWindowCenter = (): SkPoint => {
  const { width, height } = useWindowDimensions()
  const center = vec(width / 2, height / 2)
  return center
}
