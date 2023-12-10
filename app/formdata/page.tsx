// YOU ARE IN THE SERVER!
// this page just gets all the messages 
// from the server and sends it to the frontend. 

import { Container, Text, Flex, Space } from "@mantine/core";
import AnimateEntry from "../animateEntry";
import { TableReviews } from "./table";
import { headers } from "next/headers";
import { getMessages } from "@/db";

export default async function Home() {
  const messages: any = await getMessages();

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
              Form data collected
            </Text>
            <Space h="1rem" />
            <TableReviews data={messages} />
          </Flex>
        </Container>
      </AnimateEntry>
    </>
  );
}
