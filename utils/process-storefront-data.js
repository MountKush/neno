import {
  forEach,
  isObjectLike
} from 'lodash'

const transformData = (value, key) => {
  console.log('trasnformData key: ', key)
  console.log('trasnformData value: ', value)
  return [value]
}

export const processStorefrontData = (data) => {
  console.log('???')
  const res = forEach(data, (value, key) => {

  })
  console.log('res: ', res)
}
