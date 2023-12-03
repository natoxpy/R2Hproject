import { Container, Text, Flex, Space } from "@mantine/core";
import AnimateEntry from "../animateEntry";
import { AccordionForCollegePage } from "./accordion";

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
