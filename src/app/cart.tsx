import { Text, Platform, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';

function cartScreen() {
    return (
        <View>
            <Text>Cart Screen blah</Text>
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    )
}

export default cartScreen;