import React, { useState } from "react";
import {
  StyleSheet,
  View,
  CameraRoll,
  Button,
  Alert,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";

import * as Permissions from "expo-permissions";

const verifyPermissions = async () => {
  const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (result.status !== "granted") {
    Alert.alert(
      "No Permission!",
      "You need to grant permission to use this app!",
      [{ text: "Okay" }]
    );
    return false;
  } else return true;
};

const Gallery = ({ navigation }) => {
  const _handleButtonPress = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      console.log("no");
    } else {
      CameraRoll.getPhotos({
        first: 20,
        assetType: "All"
      })
        .then(r => {
          setPhotosArray(r.edges);
        })
        .catch(err => {
          throw new Error(err);
        });
    }
  };

  const [photosArray, setPhotosArray] = useState([]);

  if (photosArray.length === 0)
    return (
      <View style={styles.container}>
        <Button
          color="#8a2be2"
          style={{ marginVertical: 40 }}
          title="Load images"
          onPress={_handleButtonPress}
        />
      </View>
    );

  return (
    <View style={styles.container}>
      <ScrollView>
        {photosArray.map((picture, index) => {
          return (
            <View key={picture.node.timestamp} style={styles.imageContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate({
                    routeName: "SinglePhoto",
                    params: { uri: picture.node.image.uri }
                  })
                }
              >
                <Image
                  style={{
                    width: 300,
                    height: 300,
                    marginTop: index === 0 ? 0 : 20
                  }}
                  source={{ uri: picture.node.image.uri }}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

Gallery.navigationOptions = {
  headerTitle: "Galerry"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20
  },
  imageContainer: {
    borderRadius: 8,
    overflow: "hidden"
  }
});

export default Gallery;
