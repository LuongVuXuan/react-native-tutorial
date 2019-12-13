import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Luong", key: "1" },
    { name: "Huong", key: "2" },
    { name: "Linh", key: "3" },
    { name: "Tien", key: "4" },
    { name: "Kien", key: "5" },
    { name: "C Quynh", key: "6" },
    { name: "C Nhung", key: "7" }
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: "center",
    // justifyContent: "center"
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24
  }
});
