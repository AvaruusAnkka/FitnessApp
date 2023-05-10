import * as React from "react";
import { StyleSheet, Image, View } from "react-native";

export default function Header() {
  {
    return (
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          style={{
            width: 150,
            height: 90,
            marginTop: 35,
            left: 125,
            alignSelf: "baseline",
            backgroundColor: 'transparent'
          }}
          source={require("../assets/logo.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: "15%",
    backgroundColor: "transparent",
  },
});
