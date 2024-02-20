import React from 'react'
import { Text, View } from 'react-native'
import { SubmenuSkeleton } from '../../components/SubMenuHome'

export const TransactionScreen = () => {
  return (
    <SubmenuSkeleton>
      <View>
        <Text>Transaction Screen</Text>
      </View>
    </SubmenuSkeleton>
  )
}
