import {Stack, useLocalSearchParams } from 'expo-router'
import {View, Text} from 'react-native'

function ProducDetailsPage() {
    const {id} = useLocalSearchParams()
    return(
        <View>
            <Stack.Screen options={{title: 'Details' + id} } />
            <Text>
                Product Details for id: {id}
            </Text>
        </View>
    )
}

export default ProducDetailsPage