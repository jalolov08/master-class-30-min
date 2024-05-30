import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { Forecastday } from "../../types/response.type";

type TodayProps = {
  day: Forecastday | undefined;
};

const Today = ({ day }: TodayProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today</Text>
      <ScrollView horizontal>
        {day?.hour.map((hourlyData, index) => {
          const hour = new Date(hourlyData.time).getHours();
          const formattedHour = hour < 10 ? `0${hour}:00` : `${hour}:00`;

          return (
            <View key={index} style={styles.hourContainer}>
              <Text style={styles.tempText}>{hourlyData.temp_c}°C</Text>
              <Image
                source={{ uri: `http:${hourlyData.condition.icon}` }}
                width={50}
                height={50}
              />
              <Text style={styles.hourText}>{formattedHour}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Today;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00102666",
    height: 220,
    padding: 12,
    borderRadius: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  hourContainer: {
    width: 100,
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  hourText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 30,
  },
  tempText: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 10,
  },
});
