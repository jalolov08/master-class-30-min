import { View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./home.style";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header/header.component";
import useGet from "../hooks/useGet";
import { API_KEY } from "../../config";
import { Response } from "../types/response.type";
import Params from "../components/Params/params.component";
import Today from "../components/Today/today.component";
import NextForecast from "../components/NextForecast/nextForecast.component";
export default function HomeScreen() {
  const { data, loading, error } = useGet(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=London&days=4&aqi=yes&alerts=no`
  );
  const [weather, setWeather] = useState<Response>();
  useEffect(() => {
    if (data) {
      setWeather(data);
    }
  }, [data]);

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={["#08244F", "#134CB5", "#0B42AB"]}
        style={styles.background}
      >
        <Header location={weather?.location.name} />
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#fff"
            style={{ alignSelf: "center" }}
          />
        ) : (
          <>
            <View>
              <Image
                source={{ uri: `http:${weather?.current.condition.icon}` }}
                style={styles.image}
              />
              <Text style={styles.tempText}>{weather?.current.temp_c}º</Text>
            </View>
            <Params
              wind={weather?.current.wind_mph}
              humidity={weather?.current.humidity}
              cloud={weather?.current.cloud}
            />
            <Today day={weather?.forecast.forecastday[0]} />
            <NextForecast forecast={weather?.forecast} />
          </>
        )}
      </LinearGradient>
    </ScrollView>
  );
}
