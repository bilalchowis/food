import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const ResultDetail = ({ item }) => {
  return (
    <View style={styles.data_content}>
      <Image style={styles.image} source={{ uri: item.image_url }} />
      <Text numberOfLines={1} style={styles.name}>
        {item.name}
      </Text>
      <View style={styles.caption_content}>
        <Text style={styles.caption_title}>{item.rating} Stars,</Text>
        <Text style={styles.caption_title}> {item.review_count} Reviews</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  data_content: {
    width: 240,
    height: 200,
    margin: 12,
  },
  caption_content: {
    flexDirection: "row",
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 12,
  },
  caption_title: {
    fontSize: 15,
    color: "grey",
    marginTop: 4,
  },
  image: {
    width: 240,
    height: 140,
    borderRadius: 4,
  },
});

export default ResultDetail;
