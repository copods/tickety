import React from "react";
import { Box } from "@gluestack-ui/themed";
import { ScrollView } from "react-native";
import { Navbar } from "../components/composite/navbar";
import { Footer } from "../components/composite/footer";

type PageLayoutProps = {
  children: React.ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <Box
      flex={1}
      bg="$white"
      sx={{
        _web: {
          height: "100vh",
          overflow: "hidden",
        },
      }}
    >
      <Navbar />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={true}
      >
        {children}
        <Footer />
      </ScrollView>
    </Box>
  );
}
