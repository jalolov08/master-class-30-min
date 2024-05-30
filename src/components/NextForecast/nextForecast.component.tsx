import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { Forecast } from "../../types/response.type";

type NextForecastProps = {
  forecast: Forecast | undefined;
};

const NextForecast = ({ forecast }: NextForecastProps) => {
  const nextDaysForecast = forecast?.forecastday.slice(1);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Next Forecast</Text>

      <ScrollView>
        {nextDaysForecast?.map((forecastDay, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.dateText}>{forecastDay.date}</Text>
            <Image
              source={{ uri: `http:${forecastDay.day.condition.icon}` }}
              width={30}
              height={30}
            />
            <Text style={styles.tempText}>
              {forecastDay.day.maxtemp_c}°C /{forecastDay.day.mintemp_c}°C
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default NextForecast;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00102666",
    padding: 12,
    borderRadius: 20,
    marginTop: 20,
    height: "auto",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  dayContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  tempText: {
    fontSize: 14,
    color: "#fff",
  },
});
