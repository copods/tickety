import { Card, Navbar } from '@tickety/app/components/composite'
import { Button } from '@tickety/app/components/ui/button'
import { Text } from '@tickety/app/components/ui/text'
import Head from 'next/head'

export default function Page() {
    return (
        <>
            <Head>
                <title>Component Library Demo</title>
            </Head>
            <Navbar
                title="Tickety Admin"
                rightElement={
                    <Button size="sm" onPress={() => alert('Logged out')}>
                        <Text color="$white" size="xs">Logout</Text>
                    </Button>
                }
            />
            <div style={{ padding: '2rem' }}>
                <Card
                    title="Welcome to Tickety"
                    description="This is a Card component from your shared component library"
                    variant="elevated"
                >
                    <p>This Card component is shared between Next.js and Expo apps!</p>
                </Card>
            </div>
        </>
    )
}

