import {
  Box,
  VStack,
  HStack,
  Text,
  Pressable,
  Image,
} from "@gluestack-ui/themed";
import { Link } from "solito/link";
import { Platform, useWindowDimensions } from "react-native";
import { useEffect, useState } from "react";
import {
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react-native";

const BG = "#1a1a1a";
const LINK_COLOR = "#ffffff";
const SUB_TEXT = "#9ca3af";
const DIVIDER_COLOR = "#333333";
const ICON_COLOR = "#ffffff";

const NAV_LINKS = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Contact Us", href: "/contact" },
  { label: "List your events", href: "/list-events" },
];

const SOCIAL_LINKS = [
  { icon: MessageCircle, href: "https://whatsapp.com", label: "WhatsApp" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "X" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export function Footer() {
  const { width } = useWindowDimensions();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsMobile(width < 900);
  }, [width]);

  const isWeb = Platform.OS === "web";

  if (!mounted && isWeb) {
    return <Box h={280} bg={BG} />;
  }

  return (
    <footer>
      <Box bg={BG} w="100%">
        <VStack
          maxWidth={1480}
          mx="auto"
          w="100%"
          px={isMobile ? "$5" : "$10"}
          pt={isMobile ? "$8" : "$10"}
          pb={isMobile ? "$6" : "$8"}
        >
          {/* Top Section */}
          {isMobile ? (
            <VStack space="xl">
              {/* Logo */}
              <VStack space="xs">
                <Text
                  fontWeight="$extrabold"
                  fontSize="$3xl"
                  color={LINK_COLOR}
                  lineHeight="$xs"
                >
                  district
                </Text>
                <Text
                  fontSize="$2xs"
                  fontWeight="$bold"
                  color={LINK_COLOR}
                  letterSpacing="$lg"
                >
                  BY ZOMATO
                </Text>
              </VStack>

              {/* Nav links */}
              <VStack space="lg">
                {NAV_LINKS.map((link) => (
                  <Link key={link.label} href={link.href}>
                    <Text fontSize="$sm" color={LINK_COLOR}>
                      {link.label}
                    </Text>
                  </Link>
                ))}
              </VStack>

              {/* QR Code */}
              <VStack space="sm" alignItems="flex-start">
                <Box
                  w={100}
                  h={100}
                  bg="$white"
                  borderRadius={8}
                  overflow="hidden"
                >
                  <Image
                    source={{
                      uri: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://district.zomato.com",
                    }}
                    alt="Scan to download"
                    w="100%"
                    h="100%"
                  />
                </Box>
                <Text fontSize="$sm" color={LINK_COLOR}>
                  Scan to download the app
                </Text>
              </VStack>
            </VStack>
          ) : (
            // Desktop: 3-column row
            <HStack justifyContent="space-between" alignItems="center" py="$8">
              {/* Left: Logo */}
              <VStack space="xs">
                <Text
                  fontWeight="$extrabold"
                  fontSize="$4xl"
                  color={LINK_COLOR}
                  sx={{
                    _web: {
                      letterSpacing: "-1px",
                    },
                  }}
                >
                  Tickety
                </Text>
              </VStack>

              {/* Center: Nav links */}
              <HStack space="2xl" alignItems="center">
                {NAV_LINKS.map((link) => (
                  <Link key={link.label} href={link.href}>
                    <Text
                      fontSize="$sm"
                      color={LINK_COLOR}
                      sx={{
                        _web: {
                          transition: "opacity 0.15s ease",
                          ":hover": {
                            opacity: 0.7,
                          },
                        },
                      }}
                    >
                      {link.label}
                    </Text>
                  </Link>
                ))}
              </HStack>

              {/* Right: QR Code */}
              <VStack space="sm" alignItems="center">
                <Box
                  w={120}
                  h={120}
                  bg="$white"
                  borderRadius={8}
                  overflow="hidden"
                >
                  <Image
                    source={{
                      uri: "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=https://district.zomato.com",
                    }}
                    alt="Scan to download"
                    w="100%"
                    h="100%"
                  />
                </Box>
                <Text fontSize="$sm" color={LINK_COLOR}>
                  Scan to download the app
                </Text>
              </VStack>
            </HStack>
          )}

          {/* Divider */}
          <Box h={1} bg={DIVIDER_COLOR} my={isMobile ? "$6" : "$2"} />

          {/* Bottom Section */}
          <HStack
            justifyContent="space-between"
            alignItems={isMobile ? "flex-start" : "center"}
            flexDirection={isMobile ? "column" : "row"}
            gap={isMobile ? "$4" : undefined}
            py="$4"
          >
            {/* Legal text */}
            <Text
              fontSize="$xs"
              color={SUB_TEXT}
              lineHeight="$md"
              sx={{
                _web: {
                  maxWidth: isMobile ? "100%" : "65%",
                },
              }}
            >
              By accessing this page, you confirm that you have read,
              understood, and agreed to our Terms of Service, Cookie Policy,
              Privacy Policy, and Content Guidelines. All rights reserved.
            </Text>

            {/* Social Icons */}
            <HStack space="lg" alignItems="center">
              {SOCIAL_LINKS.map((social) => (
                <Link key={social.label} href={social.href}>
                  <Pressable
                    sx={{
                      _web: {
                        transition: "opacity 0.15s ease",
                        ":hover": { opacity: 0.7 },
                      },
                    }}
                  >
                    <social.icon size={22} color={ICON_COLOR} />
                  </Pressable>
                </Link>
              ))}
            </HStack>
          </HStack>
        </VStack>
      </Box>
    </footer>
  );
}
