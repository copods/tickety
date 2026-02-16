import React from "react";
import { Box, HStack, Text, Button, ButtonText } from "../../components/ui";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface StickyFooterProps {
    price: string;
    onBookPress: () => void;
}

const DARK = {
    bg: "#111827", // Or black? Design looks like black or very dark gray
    text: "#ffffff",
    accent: "#10b981", // Greenish
    buttonBg: "#ffffff",
    buttonText: "#000000",
};

export const StickyFooter: React.FC<StickyFooterProps> = ({ price, onBookPress }) => {
    return (
        <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            bg="black"
            borderTopWidth={0}
        >
            <SafeAreaView edges={['bottom']}>
                <HStack
                    px="$5"
                    py="$4"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box>
                        <Text color="#10b981" fontSize="$sm" fontWeight="bold">
                            Mastercard Presale
                        </Text>
                        <HStack alignItems="baseline">
                            <Text color={DARK.text} fontSize="$xl" fontWeight="bold">
                                {price}
                            </Text>
                            <Text color={DARK.text} fontSize="$sm" ml="$1">
                                onwards
                            </Text>
                        </HStack>
                    </Box>

                    <Button
                        bg={DARK.buttonBg}
                        borderRadius="$full"
                        px="$6"
                        onPress={onBookPress}
                        width={160}
                    >
                        <ButtonText color={DARK.buttonText} fontWeight="bold">
                            Book tickets
                        </ButtonText>
                    </Button>
                </HStack>
            </SafeAreaView>
        </Box>
    );
};
