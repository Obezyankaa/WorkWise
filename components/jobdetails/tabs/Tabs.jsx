import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'

const Tabs = ({tabs, activeTab, setActiveTab}) => {
  return (
    <View>
      <FlatList
      data={tabs}
      ></FlatList>
    </View>
  )
}

export default Tabs