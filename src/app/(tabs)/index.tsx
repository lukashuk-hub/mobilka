import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../../constants/Colors'
import products from '../../../assets/data/products'

const product = products[0];


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>
        ${product.price}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:16,
    backgroundColor: 'white'
  },
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
  }
});
