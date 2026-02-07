import { Box } from '@gluestack-ui/themed'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { NavBar } from '../navbar'

export function HomeScreen() {
  return (
    <>
      <NavBar />
      <Box sx={{ p: '$4' }}>
        <TextLink href="/user/fernando">Regular Link</TextLink>
        <MotiLink href="/user/fernando"></MotiLink>
      </Box>
    </>
  )
}
