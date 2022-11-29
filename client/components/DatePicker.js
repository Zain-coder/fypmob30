import React, { useState } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import DatePicker from "expo-datepicker";
import { Entypo } from "@expo/vector-icons";
export default function App() {
  const [date, setDate] = useState(new Date().toString());

  return (
    <View style={styles.container}>
      <DatePicker
        date={date}
        onChange={(date) => setDate(date)}
        icon={<Entypo name="chevron-right" size={40} color="#689CA3" />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});