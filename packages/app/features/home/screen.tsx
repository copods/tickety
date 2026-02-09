import { Box } from '@gluestack-ui/themed'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'

export function HomeScreen() {
  return (
    <>
      <Box sx={{ p: '$4' }}>
        <TextLink href="/user/fernando">Regular Link</TextLink>
        <MotiLink href="/user/fernando"></MotiLink>
      </Box>
    </>
  )
}
