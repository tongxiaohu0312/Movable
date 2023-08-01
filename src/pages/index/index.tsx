import { Button, View } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default function Index() {
  return (
    <View>
      <Button onClick={() => {Taro.navigateTo({url: '/pages/TodoPage/TodoPage'})}}>Go TodoPage</Button>
    </View>
  )
}
