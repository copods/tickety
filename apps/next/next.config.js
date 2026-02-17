/** @type {import('next').NextConfig} */
const { withGluestackUI } = require('@gluestack/ui-next-adapter')
const { withExpo } = require('@expo/next-adapter')
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    'solito',
    'moti',
    'react-native-reanimated',
    'lucide-react-native',
    'expo-linear-gradient',
  ],
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ],
      },
    ];
  },
}

module.exports = withExpo(withGluestackUI(nextConfig))
