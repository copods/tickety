# Best Practices & Conventions

This document outlines the coding standards, architectural patterns, and best practices for this monorepo. It serves as a guide for creating new components and maintaining consistency across the codebase.

## Project Structure

This project is a Monorepo using **TurboRepo** and **Solito**.

- **`apps/next`**: The Next.js web application.
- **`apps/expo`**: The Expo (React Native) mobile application.
- **`packages/app`**: Shared code, including features, providers, and navigation logic.
    - **`features/`**: Contains the core business logic and screens. This is where most of your code should live.
    - **`provider/`**: Shared providers (e.g., Gluestack UI provider, Navigation provider).
    - **`design/`**: (If applicable) Shared design tokens or typography.

### ⚠️ IMPORTANT
**Do not write business logic directly in `apps/next` or `apps/expo` unless it is platform-specific.**
Always prefer creating features in `packages/app/features` and importing them into the respective apps.

## Naming Conventions

- **Directories**: Use `kebab-case` for folder names (e.g., `simple-form`, `user-profile`).
- **Files**: Use `kebab-case` for file names (e.g., `screen.tsx`, `user-detail.tsx`), unless it is a specific Next.js page convention.
- **Components**: Use `PascalCase` for component names (e.g., `SimpleFormScreen`, `UserProfile`).
- **Functions/Hooks**: Use `camelCase` (e.g., `useUser`, `handleSubmit`).
- **Exports**: Prefer **named exports** over default exports for components to ensure better refactoring support and tree-shaking.

```tsx
// ✅ Correct
export function MyComponent() { ... }

// ❌ Avoid
export default function MyComponent() { ... }
```

## Component & UI Guidelines

We use **Gluestack UI** (`@gluestack-ui/themed`) for all UI components to ensure cross-platform compatibility (Web, iOS, Android).

### Defining Components

1. **Import Structure**: Import components directly from `@gluestack-ui/themed`.
2. **Layout**: Use `VStack`, `HStack`, and `Box` for layout instead of raw `View` or `div`.
3. **Typography**: Use `Heading`, `Text` components.

```tsx
import { Box, VStack, Heading, Text } from '@gluestack-ui/themed'

export function WelcomeScreen() {
    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            <VStack space="md">
                <Heading>Welcome</Heading>
                <Text>This works on Web and Mobile!</Text>
            </VStack>
        </Box>
    )
}
```

## State Management & Forms

- **Local State**: Use `useState` or `useReducer` for component-level state.
- **Forms**: Use **React Hook Form** (`react-hook-form`) with **Gluestack UI** components.

### Form Pattern

Wrap inputs with `Controller` to manage state.

```tsx
import { useForm, Controller } from 'react-hook-form'
import { FormControl, Input, InputField } from '@gluestack-ui/themed'

export function MyForm() {
    const { control, handleSubmit } = useForm()

    return (
        <FormControl>
             <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input>
                        <InputField 
                            onChangeText={onChange} 
                            onBlur={onBlur} 
                            value={value} 
                        />
                    </Input>
                )}
            />
        </FormControl>
    )
}
```

## Navigation

We use **Solito** for cross-platform navigation.

- Use `useLink` or `TextLink/Link` from `solito/link` or `solito/navigation`.
- Avoid using `next/link` or `expo-router` directly in shared packages to maintain compatibility.

## Accessibility

Accessibility is a priority. Gluestack UI handles many ARIA attributes automatically for web, but you should ensuring the following:

- **Forms**: Always wrap inputs in `FormControl` and provide labels (`FormControlLabel`).
- **Interactive Elements**: Ensure buttons and links have descriptive text.
- **Keyboard Navigation**: Ensure all interactive elements are focusable and navigable using the keyboard (Tab, Enter, Space).
- **Validation**: Use `FormControlError` to show accessible error messages.

## Utilities

- Place shared utility functions in `packages/app/utils` (create if missing) or a local `utils` folder within a feature.
- Ensure utilities are **pure functions** where possible.
- Use strict typing for all utility functions.

## Checklist for New Features

1. [ ] Create directory in `packages/app/features/<feature-name>`.
2. [ ] Create `screen.tsx` with named export.
3. [ ] Use Gluestack UI components.
4. [ ] Implement responsive design (use props like `sx={{ base: {}, md: {} }}` if supported or standard props).
5. [ ] Export screen in `packages/app/features/<feature-name>/index.ts` (optional matching pattern).

