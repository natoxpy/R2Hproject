import { Container, Text, Flex, Space } from "@mantine/core";
import AnimateEntry from "../animateEntry";
import { AccordionForCollegePage } from "./accordion";

// Here you might have a bit more luck, I actually was forced into making 
// this a bit more well structure because of the nature of the design.
// But still, nothing to see here, all the fun happens else where. 
export default async function Contactme() {
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
              College
            </Text>
            <Space h="1rem" />

            <AccordionForCollegePage />
          </Flex>
        </Container>
      </AnimateEntry>
    </>
  );
}
