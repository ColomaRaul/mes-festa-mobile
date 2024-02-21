import React from 'react'
import { Text, View } from 'react-native'
import { SubmenuSkeleton } from '../../components/SubmenuSkeleton'

export const NotificationScreen = () => {
  return (
    <SubmenuSkeleton>
    <View>
        <Text>
            Notification Screen
        </Text>
    </View>
    </SubmenuSkeleton>
  )
}