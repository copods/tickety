import { City, ALL_CITIES, POPULAR_CITIES } from '../mock/cities';
import { Platform } from 'react-native';

const MOCK_DELAY = 300; // Simulate network delay

export const searchCities = async (query: string): Promise<City[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (!query.trim()) {
                resolve([]);
                return;
            }
            const normalizedQuery = query.toLowerCase().trim();
            const results = ALL_CITIES.filter(
                (city) =>
                    city.name.toLowerCase().includes(normalizedQuery) ||
                    city.state.toLowerCase().includes(normalizedQuery)
            );
            resolve(results);
        }, MOCK_DELAY);
    });
};

export const getPopularCities = (): City[] => {
    return POPULAR_CITIES;
};

export const getCurrentCity = async (): Promise<string | null> => {
    // Web implementation using navigator.geolocation
    if (Platform.OS === 'web') {
        return new Promise((resolve) => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        // Mock reverse geocoding for now since we can't use a real API key
                        // In a real app, you'd call Google Maps API or OpenStreetMap here
                        // For demo purposes, we'll return a random city from our list or a specific one
                        console.log("Got location", position.coords);
                        resolve("Pune"); // Mocked result
                    },
                    (error) => {
                        console.error("Error getting location", error);
                        resolve(null);
                    }
                );
            } else {
                console.log("Geolocation not available");
                resolve(null);
            }
        });
    }

    // Native implementation mock (since we don't have expo-location installed yet)
    // We'll simulate a success after a delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Pune"); // Mocked result for native
        }, 1000);
    });
};
