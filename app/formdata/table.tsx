"use client";
import {
  Table,
  Progress,
  Anchor,
  Text,
  Group,
  Box,
  Button,
  Flex,
  Tooltip,
} from "@mantine/core";
import classes from "./table.module.css";
import moment from "moment";

type MessageType = {
  name: string;
  email: string;
  subject: string;
  message: string;
  date: Date;
};

export async function TableReviews({ data }: { data: Array<MessageType> }) {
  const rows = data.map((row) => {
    return (
      <Table.Tr key={row.name}>
        <Table.Td>{row.name}</Table.Td>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {row.email}
          </Anchor>
        </Table.Td>
        <Table.Td>{row.subject}</Table.Td>
        <Table.Td>
          <Flex>
            <Box w={200}>
              <Tooltip
                label={row.message}
                color="dark"
                styles={{
                  tooltip: {
                    color: "white",
                  },
                }}
              >
                <Text truncate="end">{row.message}</Text>
              </Tooltip>
            </Box>
          </Flex>
        </Table.Td>
        <Table.Td>
          <Tooltip
            label={moment(row.date).format("MMMM Do YYYY, h:mm:ss a")}
            color="dark"
            styles={{
              tooltip: {
                color: "white",
              },
            }}
          >
            <Text>{moment(row.date).fromNow()}</Text>
          </Tooltip>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Subject</Table.Th>
            <Table.Th>Message</Table.Th>
            <Table.Th>Date</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
