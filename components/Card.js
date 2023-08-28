import { View, Text, Image } from "react-native";
import getTypeEmoji from "../utils/getTypeEmoji";
import getTypeColor from "../utils/getTypeColor";
import * as Images from "../assets/images";

export default function Card({ name, type, hp, moves, weakness, imgUrl }) {
  const movesList = moves.join(", ");
  const weaknessList = weakness.join(", ");

  return (
    <View
      style={{
        padding: 10,
        gap: 10,
        backgroundColor: getTypeColor(type),
        borderRadius: 20,
        borderColor: "#eeea",
        borderWidth: 2,
        elevation: 50,
        shadowRadius: 40,
        shadowColor: "black",
        shadowOpacity: 0.35,
        shadowOffset: {
          width: 0,
          height: 12,
        },
      }}
    >
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 120,
            height: 40, // "auto
            objectFit: "contain",
          }}
          source={Images[`Pokemon`]}
        />
        <Text style={{ fontSize: 16, fontWeight: 400 }}>❤️ HP: {hp}</Text>
      </View>

      <Image
        style={{
          height: 200,
          width: "auto",
          objectFit: "contain",
          alignSelf: "stretch",
          margin: 40,
          marginBottom: 20,
        }}
        source={Images[`${name}`]}
      /> 

      <Text style={{ fontSize: 28, fontWeight: 700, textAlign: "center" }}>
        {name}
      </Text>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          borderWidth: 4,
          borderColor: getTypeColor(type),
          padding: 8,
          margin: 10,
          borderRadius: 12,
          alignSelf: "center",
          textAlign: "center",
          textAlignVertical: "center",
        }}
      >
        {getTypeEmoji(type)} {type}
      </Text>

      <View
        style={{ borderRadius: 20, backgroundColor: "#7CFF5B", padding: 20 }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Moves: <Text style={{ fontWeight: "normal" }}>{movesList}</Text>
        </Text>
      </View>
      <View
        style={{ borderRadius: 20, backgroundColor: "#FF6464", padding: 20 }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Weakness: <Text style={{ fontWeight: "normal" }}>{weaknessList}</Text>
        </Text>
      </View>
    </View>
  );
}
