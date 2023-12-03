"use client";
import { Container, Text, Flex, Space, Anchor } from "@mantine/core";
import AnimateEntry from "../animateEntry";

export default function Home() {
  return (
    <>
      <AnimateEntry>
        <Container>
          <Flex direction={"column"}>
            <Anchor<"a"> href="https://www.roadtohire.org/">
              <Flex justify="center" align="center">
                <Flex
                  // p={20}
                  // m={10}
                  styles={{
                    root: {
                      borderRadius: "5px",
                      backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/611c116093b02a663e4c85b2/bc613804-9bde-495a-a83e-60f450e64112/Road+to+Hire+Logo+%282%29.png")`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    },
                  }}
                  justify="center"
                  align="center"
                  w={500}
                  h={200}
                ></Flex>
              </Flex>
            </Anchor>
          </Flex>
        </Container>
      </AnimateEntry>
    </>
  );
}
