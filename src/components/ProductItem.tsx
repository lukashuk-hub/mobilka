import { Image, Text, View, StyleSheet, Pressable } from 'react-native'
import Colors from '../constants/Colors'
import { Product } from '../types'
import {Link} from 'expo-router'

type ProductItemProp = {
    product: Product
}

const defaultPizzaImage =
    'https://shorturl.at/iRU05'


function ProductItem({ product }: ProductItemProp) {
    return (
        <Link href= {`/menu/${product.id}`} asChild>
            <Pressable style={styles.container}>
                <Image style={styles.image} source={{ uri: product.image || defaultPizzaImage }}
                    resizeMode='contain'
                />
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>
                    ${product.price}
                </Text>
            </Pressable>
        </Link>
    )
}

export default ProductItem


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'normal',
        marginVertical: 16,
        flex: 1
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