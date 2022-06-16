import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  let id = navigation.getParam("id");
  const [result, setResult] = useState(null);

  async function getResult() {
    let response = await yelp.get(`${id}`);
    setResult(response.data);
  }

  useEffect(() => {
    getResult();
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.content}>
      <Text>Results Show Screen</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginVertical: 12,
    width: 240,
    height: 160,
  },
});

export default ResultsShowScreen;
