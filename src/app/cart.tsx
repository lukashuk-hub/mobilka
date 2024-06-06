import { Text, Platform, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useCart } from '../provider/CartProvider';



function cartScreen() {
    const {items} = useCart;
    
    return (
        <View>
            <Text>Cart Screen blah</Text>
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    )
}

export default cartScreen;

