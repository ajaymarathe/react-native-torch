import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

export default function ScreenView(props) {
    return (
        <SafeAreaView style={{ flex: 1}}>
             {props.children}
        </SafeAreaView>
    )
}
