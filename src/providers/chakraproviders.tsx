// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

type ChakraProverProps = {
  children: React.ReactNode;
};

export const theme = extendTheme({});
export function ChakraProviders({ children }: ChakraProverProps) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
