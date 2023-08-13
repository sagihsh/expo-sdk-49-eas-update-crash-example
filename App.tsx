import React, { useCallback, useEffect, useState } from "react";
import { Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

export default function App() {

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
            <Animated.View>
                <Text style={{ padding: 200 }}>
                    Testing
                </Text>
            </Animated.View>
		</GestureHandlerRootView>
	);
}
