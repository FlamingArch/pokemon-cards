import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Card from "./components/Card";
import Pokemon from "./assets/pokemonDetails.json";
import * as Images from "./assets/images";

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView>
        <Image
          style={{
            width: "auto",
            height: 300,
            objectFit: "contain",
            alignSelf: "stretch",
            margin: 40,
            marginBottom: 20,
          }}
          source={Images[`Ash`]}
        />
        <View style={styles.container}>
          {Pokemon.map((pokemon) => (
            <Card key={pokemon.id} {...pokemon} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    paddingTop: Platform.OS === "android" ? 48 : 24,
    flex: 1,
    backgroundColor: "#fff000",
  },
  container: {
    flex: 1,
    padding: 40,
    gap: 40,
  },
});
