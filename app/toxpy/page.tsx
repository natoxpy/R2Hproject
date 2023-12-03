"use client";
import { Container, Text, Flex, Space } from "@mantine/core";
import AnimateEntry from "../animateEntry";

export default function Home() {
  return (
    <>
      <AnimateEntry>
        <Container>
          <Flex direction={"column"}>
            <Text
              style={{
                fontSize: "2.5rem",
              }}
              fw={700}
            >
              Hello Visitor!
            </Text>
            <Space h="1rem" />
            <Text>Unfinished page</Text>
          </Flex>
        </Container>
      </AnimateEntry>
    </>
  );
}
