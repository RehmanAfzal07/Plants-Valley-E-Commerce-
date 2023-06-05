import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const LockScreen = ({ isLocked, onPress }) => {
  const toggleLock = () => {
    onPress(!isLocked);
  };

  return (
    <TouchableOpacity onPress={toggleLock} style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          name={isLocked ? "lock" : "unlock-alt"}
          size={40}
          style={isLocked ? styles.lockedIcon : styles.unlockedIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

export default LockScreen;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  lockedIcon: {
    color: "red",
  },
  unlockedIcon: {
    color: "green",
  },
});
