import React from 'react';
import { View, ActivityIndicator } from "react-native";
import { styles } from "./style"


const LoadingIndicator = () => (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" />
    </View>
  );
  export default LoadingIndicator