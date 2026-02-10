export type City = {
    id: string;
    name: string;
    state: string;
    isPopular: boolean;
};

export const POPULAR_CITIES: City[] = [
    { id: '1', name: 'Gurugram', state: 'Haryana', isPopular: true },
    { id: '2', name: 'New Delhi', state: 'Delhi', isPopular: true },
    { id: '3', name: 'Mumbai', state: 'Maharashtra', isPopular: true },
    { id: '4', name: 'Bengaluru', state: 'Karnataka', isPopular: true },
    { id: '5', name: 'Hyderabad', state: 'Telangana', isPopular: true },
    { id: '6', name: 'Pune', state: 'Maharashtra', isPopular: true },
    { id: '7', name: 'Chennai', state: 'Tamil Nadu', isPopular: true },
    { id: '8', name: 'Kolkata', state: 'West Bengal', isPopular: true },
    { id: '9', name: 'Ahmedabad', state: 'Gujarat', isPopular: true },
    { id: '10', name: 'Jaipur', state: 'Rajasthan', isPopular: true },
];

export const OTHER_CITIES: City[] = [
    { id: '11', name: 'Noida', state: 'Uttar Pradesh', isPopular: false },
    { id: '12', name: 'Chandigarh', state: 'Punjab', isPopular: false },
    { id: '13', name: 'Lucknow', state: 'Uttar Pradesh', isPopular: false },
    { id: '14', name: 'Indore', state: 'Madhya Pradesh', isPopular: false },
    { id: '15', name: 'Kochi', state: 'Kerala', isPopular: false },
    { id: '16', name: 'Goa', state: 'Goa', isPopular: false },
    { id: '17', name: 'Nagpur', state: 'Maharashtra', isPopular: false },
    { id: '18', name: 'Bhopal', state: 'Madhya Pradesh', isPopular: false },
    { id: '19', name: 'Surat', state: 'Gujarat', isPopular: false },
    { id: '20', name: 'Patna', state: 'Bihar', isPopular: false },
];

export const ALL_CITIES = [...POPULAR_CITIES, ...OTHER_CITIES];
