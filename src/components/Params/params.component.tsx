import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
type ParamsProp = {
  wind: number | undefined;
  humidity: number | undefined;
  cloud: number | undefined;
};
const Params = ({ wind, humidity, cloud }: ParamsProp) => {
  return (
    <View style={styles.container}>
      <View style={styles.paramCont}>
        <Feather name="wind" color="#fff" size={25} />
        <Text style={styles.paramText}>{wind}mp/h</Text>
      </View>
      <View style={styles.paramCont}>
        <Feather name="droplet" color="#fff" size={25} />
        <Text style={styles.paramText}>{humidity}%</Text>
      </View>
      <View style={styles.paramCont}>
        <Feather name="cloud" color="#fff" size={25} />
        <Text style={styles.paramText}>{cloud}%</Text>
      </View>
    </View>
  );
};

export default Params;

const styles = StyleSheet.create({
  container: {
    height: 47,
    backgroundColor: "#00102666",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  paramCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  paramText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 8,
  },
});
