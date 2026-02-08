import React, { useEffect, useRef } from "react";
import { Animated, ViewStyle } from "react-native";
import { Box } from "./box";

interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  style?: ViewStyle;
}

export const Skeleton = ({
  width = "100%",
  height = 20,
  borderRadius = 8,
  style,
}: SkeletonProps) => {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();
    return () => animation.stop();
  }, [opacity]);

  return (
    <Animated.View
      style={[
        {
          width: width as any,
          height: height as any,
          borderRadius: borderRadius as any,
          backgroundColor: "#E5E7EB",
          opacity,
        },
        style,
      ]}
    />
  );
};
