import React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { keyframes } from "@chakra-ui/react";

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const ConstructionTicker = () => {
  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      w="100%"
      zIndex={50}
      pointerEvents="none"
    >
      <Box maxW="5xl" mx="auto" px={4} pb={4} position="relative">
        <Box
          pointerEvents="auto"
          overflow="hidden"
          borderRadius="2xl"
          borderWidth="1px"
          borderColor="whiteAlpha.200"
          bg="blackAlpha.800"
          backdropFilter="blur(18px)"
          boxShadow="0 0 30px rgba(0,0,0,0.6)"
          position="relative"
        >
          {/* Edge fades */}
          <Box
            pointerEvents="none"
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            w="16"
            bgGradient="linear(to-r, blackAlpha.800, transparent)"
          />
          <Box
            pointerEvents="none"
            position="absolute"
            top={0}
            bottom={0}
            right={0}
            w="16"
            bgGradient="linear(to-l, blackAlpha.800, transparent)"
          />

          {/* Marquee */}
          <Flex
            role="group"
            position="relative"
            whiteSpace="nowrap"
            fontSize={{ base: "sm", sm: "md" }}
            color="gray.100"
          >
            <Flex
              py={2}
              animation={`${marquee} 25s linear infinite`}
              _groupHover={{ animationPlayState: "paused" }}
            >
              {Array.from({ length: 3 }).map((_, i) => (
                <Flex key={i} align="center" gap={3} pr={12}>
                  <Text
                    fontSize="xs"
                    letterSpacing="0.2em"
                    textTransform="uppercase"
                    color="yellow.400"
                  >
                    Warning
                  </Text>

                  <Text fontFamily="'Space Grotesk', system-ui">
                    This is Version 1.0 of my portfolio website. I built this during my
                    first year of learning web development. For the latest version,
                    visit:{" "}
                    <Link
                      href="https://sumatmallick.xyz"
                      isExternal
                      color="cyan.300"
                      textDecoration="underline"
                      fontWeight="medium"
                    >
                      sumatmallick.xyz
                    </Link>{" "}
                    (under construction).
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ConstructionTicker;
