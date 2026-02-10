import React, { useState, useEffect, useCallback } from "react";
import {
    Box,
    Modal,
    ModalBackdrop,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Heading,
    Icon,
    CloseIcon,
    Input,
    InputField,
    InputSlot,
    InputIcon,
    VStack,
    HStack,
    Text,
    Pressable,
} from "@gluestack-ui/themed";
import { Search, MapPin, ChevronRight } from "lucide-react-native";
import { FlatList, Platform } from "react-native";
import { City, POPULAR_CITIES } from "../../mock/cities";
import { searchCities, getCurrentCity } from "../../services/location";

type LocationModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSelectCity: (city: string) => void;
    currentCity: string;
};

export function LocationModal({ isOpen, onClose, onSelectCity, currentCity }: LocationModalProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<City[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [isLoadingLocation, setIsLoadingLocation] = useState(false);

    // Debounce search
    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            if (searchQuery.length > 0) {
                setIsSearching(true);
                const results = await searchCities(searchQuery);
                setSearchResults(results);
                setIsSearching(false);
            } else {
                setSearchResults([]);
            }
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery]);

    const handleUseCurrentLocation = async () => {
        setIsLoadingLocation(true);
        try {
            const city = await getCurrentCity(); // This is mocked for now in services/location.ts
            if (city) {
                onSelectCity(city);
                onClose();
            } else {
                // Handle error, maybe show a toast or alert
                console.log("Could not fetch location");
            }
        } catch (error) {
            console.error("Location error:", error);
        } finally {
            setIsLoadingLocation(false);
        }
    };

    const renderCityItem = ({ item }: { item: City }) => (
        <Pressable
            onPress={() => {
                onSelectCity(item.name);
                onClose();
            }}
            py="$3"
            borderBottomWidth={1}
            borderBottomColor="$borderLight100"
        >
            <HStack justifyContent="space-between" alignItems="center">
                <Text color="$textLight900">{item.name}</Text>
                {currentCity === item.name && (
                    <Icon as={MapPin} size="sm" color="$primary500" />
                )}
            </HStack>
        </Pressable>
    );

    const renderPopularCityItem = ({ item }: { item: City }) => (
        <Pressable
            onPress={() => {
                onSelectCity(item.name);
                onClose();
            }}
            py="$2"
            px="$4"
            mr="$3"
            mb="$3"
            borderWidth={1}
            borderColor="$borderLight200"
            borderRadius="$full"
            bg={currentCity === item.name ? '$primary50' : '$white'}
        >
            <Text
                fontSize="$sm"
                color={currentCity === item.name ? '$primary600' : '$textLight700'}
                fontWeight={currentCity === item.name ? '$bold' : '$normal'}
            >
                {item.name}
            </Text>
        </Pressable>
    );

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}

            size="lg"
        >
            <ModalBackdrop />
            <ModalContent maxHeight="80%">
                <ModalHeader>
                    <Heading size="lg">Select Location</Heading>
                    <ModalCloseButton>
                        <Icon as={CloseIcon} />
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                    <VStack space="xl">
                        {/* Search Input */}
                        <Input>
                            <InputSlot pl="$3">
                                <InputIcon as={Search} />
                            </InputSlot>
                            <InputField
                                placeholder="Search for your city"
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                                autoFocus={Platform.OS === 'web'} // Auto focus only on web for better UX
                            />
                        </Input>

                        {/* Use Current Location */}
                        <Pressable onPress={handleUseCurrentLocation}>
                            <HStack space="md" alignItems="center">
                                <Icon as={MapPin} color="$primary500" />
                                <Text color="$primary500" fontWeight="$bold">
                                    {isLoadingLocation ? "Detecting location..." : "Use Current Location"}
                                </Text>
                            </HStack>
                        </Pressable>

                        {/* Content Area */}
                        {searchQuery.length > 0 ? (
                            <Box>
                                <Text size="sm" color="$textLight500" mb="$2">Search Results</Text>
                                {/* Show loading state if needed, or results */}
                                <FlatList
                                    data={searchResults}
                                    renderItem={renderCityItem}
                                    keyExtractor={(item) => item.id}
                                    ListEmptyComponent={
                                        !isSearching ? <Text color="$textLight400" mt="$4">No cities found</Text> : null
                                    }
                                />
                            </Box>
                        ) : (
                            <Box>
                                <Text size="sm" color="$textLight500" mb="$3">Popular Cities</Text>
                                <HStack flexWrap="wrap">
                                    {POPULAR_CITIES.map((city) => (
                                        <React.Fragment key={city.id}>
                                            {renderPopularCityItem({ item: city })}
                                        </React.Fragment>
                                    ))}
                                </HStack>
                            </Box>
                        )}
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
