import React from 'react'
import {
    Box,
    Modal,
    ModalBackdrop,
    ModalContent,
    Heading,
    VStack,
    Text,
    Pressable,
    HStack,
    Link as GLink,
    Divider,
} from '@gluestack-ui/themed'
import { User, MessageCircle, FileText, Lock, LogOut, ChevronRight, Calendar, ArrowLeft } from 'lucide-react-native'
import { Link } from 'solito/link'
import { ScrollView, Platform } from 'react-native'

type ProfileSidebarProps = {
    isOpen: boolean
    onClose: () => void
}

const MenuItem = ({ icon: IconComponent, label, href, onPress, color = '$textDark900' }: any) => {
    const content = (
        <HStack alignItems="center" justifyContent="space-between" p="$4" backgroundColor='white' borderRadius="$lg">
            <HStack alignItems="center" space="md">
                <IconComponent size={20} color="#666" />
                <Text color={color} fontSize="$md" fontWeight="$medium">
                    {label}
                </Text>
            </HStack>
            <ChevronRight size={18} color="#ccc" />
        </HStack>
    )

    if (onPress) {
        return <Pressable onPress={onPress}>{content}</Pressable>
    }

    return (
        <Link href={href || '#'}>
            {content}
        </Link>
    )
}

export function ProfileSidebar({ isOpen, onClose }: ProfileSidebarProps) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="full"
        >
            <ModalBackdrop />
            <ModalContent
                backgroundColor='$secondary200'
                h="100%"
                w="100%"
                maxWidth={Platform.OS === 'web' ? 600 : '85%'}
                alignSelf="flex-end" // Align to left
                borderTopRightRadius="$xl"
                borderBottomRightRadius="$xl"
            >
                <Box h="100%" pt="$3">
                    <HStack
                        alignItems="center"
                        space="md"
                        p="$4"
                        borderBottomWidth={1}
                        borderBottomColor="$borderLight200"
                        backgroundColor='white'
                    >
                        <Pressable onPress={onClose}>
                            <ArrowLeft size={22} color="#000" />
                        </Pressable>

                        <Heading size="md">Profile</Heading>
                    </HStack>

                    <ScrollView showsVerticalScrollIndicator={false} >
                        <VStack space="xl" p="$6" pb="$10" height="100%">
                            {/* User Profile Section */}
                            <HStack space="md" alignItems="center" bg="$coolGray50" p="$4" borderRadius="$lg">
                                <Box bg="$coolGray200" p="$3" borderRadius="$full">
                                    <User size={32} color="#888" />
                                </Box>
                                <VStack>
                                    <Text fontWeight="$bold" fontSize="$lg">User</Text>
                                    <Text fontSize="$sm" color="$textLight500">+91 7028046118</Text>
                                </VStack>
                            </HStack>

                            {/* Main Actions */}
                            <VStack space="md" >
                                <MenuItem
                                    icon={Calendar}
                                    label="View all bookings"
                                    href="/bookings"
                                />
                            </VStack>

                            <Divider />

                            {/* Support Section */}
                            <VStack space="sm">
                                <Text fontSize="$xs" fontWeight="$medium" color="black" mb="$1">
                                    Support
                                </Text>
                                <MenuItem
                                    icon={MessageCircle}
                                    label="Chat with us"
                                    onPress={() => console.log('Chat with us')}
                                />
                            </VStack>

                            <Divider />

                            {/* More Section */}
                            <VStack space="lg">
                                <Text fontSize="$xs" fontWeight="$medium" color="black" mb="$1">
                                    More
                                </Text>
                                <MenuItem
                                    icon={FileText}
                                    label="Terms & Conditions"
                                    onPress={() => console.log('Terms')}
                                />
                                <MenuItem
                                    icon={Lock}
                                    label="Privacy Policy"
                                    onPress={() => console.log('Privacy')}
                                />
                                <MenuItem
                                    icon={LogOut}
                                    label="Logout"
                                    color="$red600"
                                    onPress={() => console.log('Logout')}
                                />
                            </VStack>
                        </VStack>
                    </ScrollView>
                </Box>
            </ModalContent>
        </Modal>
    )
}
