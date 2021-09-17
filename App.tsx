import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Image
          style={{
            width: 50,
            height: 50,
            margin: 16,
          }}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <Text style={styles.text}>Element 3</Text>
        <Text style={styles.text}>Element 1</Text>
        <Text style={styles.text}>Element 4</Text>
        <Text style={styles.text}>Element 2</Text>
        <Text style={styles.text}>Element 5</Text>
      </View>
      <Button
        onPress={() => {}}
        title="Touch me"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    justifyContent: "space-between",
  },
  text: {
    color: "blue",
  },
});
