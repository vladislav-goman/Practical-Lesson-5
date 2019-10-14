import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";

const SinglePhoto = ({ navigation }) => {
  const uri = navigation.getParam("uri");
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={{
            width: Dimensions.get('window').width-10,
            height: Dimensions.get('window').width-10,
            marginTop: 20
          }}
          source={{ uri }}
        />
      </View>
    </View>
  );
};

SinglePhoto.navigationOptions = {
  headerTitle: "Picked Photo"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  imageContainer: {
    borderRadius: 8,
    overflow: "hidden"
  }
});

export default SinglePhoto;
