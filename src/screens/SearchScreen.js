import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const [fetch, results, errorMessage] = useResults();

  function filterResultsByPrice(price) {
    return results.filter((result) => {
      return result.price === price;
    });
  }

  return (
    <View style={style.content}>
      <View style={style.searchBar}>
        <SearchBar didChangeText={setText} onSearchTap={() => fetch(text)} />
      </View>
      {errorMessage ? <Text>errorMessage</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$$")}
          navigation={navigation}
        />
        <ResultsList
          title="Bit Pricer"
          results={filterResultsByPrice("$$")}
          navigation={navigation}
        />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$")}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    backgroundColor: "white",
    flex: 1,
  },
  searchBar: {
    marginVertical: 12,
  },
});

export default SearchScreen;
