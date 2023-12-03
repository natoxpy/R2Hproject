import { Container, Text, Flex, Space } from "@mantine/core";
import { GetInTouchSimple } from "@/contact/component";
import AnimateEntry from "../animateEntry";

export default function Contactme() {
  return (
    <>
    <AnimateEntry>
      <Container
        style={{
          height: "100%",
        }}
      >
        <GetInTouchSimple />
      </Container>
      </AnimateEntry>
    </>
  );
}
