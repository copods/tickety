// index app
import { Card } from '@tickety/app/components/composite/card'
import { Box } from '@tickety/app/components/ui/box'
import { Text } from '@tickety/app/components/ui/text'
import { Button, ButtonText } from '@tickety/app/components/ui/button'

export default () => {
  return (
    <Box p="$4" bg="$backgroundLight50" flex={1}>
      <Card
        title="Welcome to Tickety"
        description="This is an example of using the Card component in Expo"
        variant="elevated"
      >
        <Text>Card content goes here. You can add any components inside.</Text>
        <Button mt="$4">
          <ButtonText>Click Me</ButtonText>
        </Button>
      </Card>

      <Card
        title="Outlined Card"
        variant="outlined"
      >
        <Text>This card uses the outlined variant.</Text>
      </Card>

      <Card
        title="Filled Card"
        variant="filled"
      >
        <Text>This card uses the filled variant.</Text>
      </Card>
    </Box>
  )
}
