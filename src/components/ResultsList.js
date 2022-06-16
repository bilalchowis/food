import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultDetail from "./ResultDetail";

const ResultsList = ({ title, results, navigation }) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}> {title} </Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("ResultsShow")}>
            <ResultDetail item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    // marginLeft: 16
  },
  title: {
    marginLeft: 12,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default withNavigation(ResultsList);
