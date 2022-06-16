import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ didChangeText, onSearchTap }) => {
  function onChangeText(text) {
    if (didChangeText instanceof Function) {
      didChangeText(text);
    }
  }

  function onEndEditing() {
    if (onSearchTap instanceof Function) {
      onSearchTap();
    }
  }

  return (
    <View style={style.content}>
      <Feather name="search" style={style.searchIcon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
        style={style.textInput}
        placeholder="Search"
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
      />
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    backgroundColor: "#F0EEEE",
    height: 52,
    borderRadius: 12,
    marginHorizontal: 16,
    flexDirection: "row",
  },
  textInput: {
    fontSize: 15,
    flex: 1,
    marginRight: 12,
  },
  searchIcon: {
    fontSize: 16,
    marginHorizontal: 8,
    alignSelf: "center",
  },
});

export default SearchBar;
