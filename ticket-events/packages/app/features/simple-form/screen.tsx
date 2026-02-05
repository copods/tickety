import {
    FormControl,
    FormControlLabel,
    FormControlLabelText,
    FormControlError,
    FormControlErrorText,
    Input,
    InputField,
    Button,
    ButtonText,
    VStack,
    Heading,
    Box,
} from '@gluestack-ui/themed'
import { useForm, Controller } from 'react-hook-form'

export function SimpleFormScreen() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit = (data: any) => console.log('Form data:', data)

    return (
        <Box flex={1} justifyContent="center" alignItems="center" p="$4">
            <VStack space="md" width="100%" maxWidth={400}>
                <Heading>Login</Heading>
                <FormControl isInvalid={!!errors.email}>
                    <FormControlLabel>
                        <FormControlLabelText>Email</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input>
                                <InputField
                                    placeholder="Enter email"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            </Input>
                        )}
                        name="email"
                    />
                    <FormControlError>
                        <FormControlErrorText>
                            Email is required.
                        </FormControlErrorText>
                    </FormControlError>
                </FormControl>

                <FormControl isInvalid={!!errors.password}>
                    <FormControlLabel>
                        <FormControlLabelText>Password</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input>
                                <InputField
                                    type="password"
                                    placeholder="Enter password"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            </Input>
                        )}
                        name="password"
                    />
                    <FormControlError>
                        <FormControlErrorText>
                            Password is required.
                        </FormControlErrorText>
                    </FormControlError>
                </FormControl>

                <Button onPress={handleSubmit(onSubmit)}>
                    <ButtonText>Submit</ButtonText>
                </Button>
            </VStack>
        </Box>
    )
}
