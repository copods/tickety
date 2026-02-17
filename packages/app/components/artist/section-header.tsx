import React from "react";
import { Box, HStack, Text } from "../ui";

interface SectionHeaderProps {
    title: string;
}

const DARK = {
    subText: "#9ca3af",
    border: "#374151",
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
    return (
        <HStack alignItems="center" space="md" my="$2">
            <Box flex={1} height={1} bg={DARK.border} />
            <Text
                color={DARK.subText}
                fontSize="$xs"
                fontWeight="$bold"
                letterSpacing={1.5}
                textTransform="uppercase"
            >
                {title}
            </Text>
            <Box flex={1} height={1} bg={DARK.border} />
        </HStack>
    );
};
