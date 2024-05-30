import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Header = ({location}:{location:string | undefined}) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Feather name="map-pin" color="#fff" size={28} />
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 32,
  },
  location: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
    marginLeft: 12,
  },
});
