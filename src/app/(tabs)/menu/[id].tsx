import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import products from "@/assets/data/products";
import defaultPizzaImage from "../../../components/ProductItem";
import Colors from "../../../constants/Colors";
import { useState } from "react";
import Button from '../../../components/Button'
import { useCart } from "@/src/provider/CartProvider";

const sizes = ["S", "M", "L", "XL"];

function ProducDetailsPage() {
  const { id } = useLocalSearchParams();
  const {addItem} = useCart();
  const [selectedSize, setSelectedSize] = useState("M");

  const addToCart = () => {
    addItem(product, selectedSize)
  };

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <Text>Product not found</Text>;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source= {{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />

      <Text style={styles.title}>{product.name}</Text>

      <View>
        <Text>Select size</Text>

        <View style={styles.sizes}>
          {sizes.map((size) => (
            <Pressable
              onPress={() => setSelectedSize(size)}
              style={[
                styles.size,
                {
                  backgroundColor: selectedSize === size ? "#1C1678" : "white",
                },
              ]}
              key={size}
            >
              <Text style=
                {[styles.sizeText, { color: selectedSize === size ? 'white' : Colors.light.darklBlue }]}>{size}</Text>
            </Pressable>
          ))}
        </View>
      </View>
      <Text style={styles.price}>$ {product.price}</Text>
      <Button onPress={addToCart} text="Add to cart" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    height: '100%'
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 'auto'
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  sizes: {
    flexDirection: "row",
    marginVertical: 12,
    justifyContent: "space-around",
  },
  size: {
    backgroundColor: "#1C1678",
    width: 48,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    color: "white",
  },
});

export default ProducDetailsPage;
