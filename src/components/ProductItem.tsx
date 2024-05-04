import { Image, Text, View, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
import { Product } from '../types'

type ProductItemProp = {
    product: Product
}

const defaultPizzaImage =
    'https://shorturl.at/iRU05'


function ProductItem({ product }: ProductItemProp) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: product.image || defaultPizzaImage }}
                resizeMode='contain'
            />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>
                ${product.price}
            </Text>
        </View>
    )
}

export default ProductItem


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'normal',
        marginVertical: 16
    },
    image: {
        width: '100%',
        aspectRatio: 1
    },
    price: {
        color: Colors.light.darklBlue,
        fontWeight: 'bold',
        fontSize: 17
    },
    container: {
        padding: 16,
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 6,
        maxWidth: '50%'
    }
})