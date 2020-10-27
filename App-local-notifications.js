import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppLoading, Notifications } from 'expo'

import navigationTheme from './app/navigation/navigationTheme'
import AppNavigator from './app/navigation/AppNavigator'
import OfflineNotice from './app/components/OfflineNotice'
import AuthNavigator from './app/navigation/AuthNavigator'
import AuthContext from './app/auth/context'
import authStorage from './app/auth/storage'
import { navigationRef } from './app/navigation/rootNavigation'
import AppButton from './app/components/Button'
import Screen from './app/components/Screen'

export default function App() {
  const showNotification = () => {
    Notifications.scheduleLocalNotificationAsync(
      {
        title: 'Congratulations',
        body: 'Your order was succesfully placed',
      },
      {
        time: new Date().getTime() + 2000,
      },
    )
  }

  return (
    <Screen>
      <AppButton title="Tap mij" onPress={showNotification} />
    </Screen>
  )
}
