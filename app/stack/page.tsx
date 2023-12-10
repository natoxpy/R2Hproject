// Just the stack, overall nothing to see here.
"use client";
import {
  Container,
  Text,
  Flex,
  Space,
  Image,
  Paper,
  Stack,
  SimpleGrid,
  Anchor,
} from "@mantine/core";
import AnimateEntry from "../animateEntry";

type StackItem = {
  name: string;
  purpose: string;
  image: string;
  link: string;
};

const TechStack: Array<StackItem> = [
  {
    name: "NodeJS",
    link: "https://nodejs.org/",
    purpose: "JavaScript runtime for server-side development",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",
  },
  {
    name: "Typescript",
    link: "https://www.typescriptlang.org/",
    purpose: "Superset of JavaScript for static typing and improved tooling",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
  },
  {
    name: "MantineUI",
    link: "https://ui.mantine.dev/",
    purpose: "React component library for building modern web applications",
    image:
      "https://seeklogo.com/images/M/mantine-logo-235E19C978-seeklogo.com.png",
  },
  {
    name: "NextJS",
    link: "https://nextjs.org/",
    purpose: "React framework for building static and dynamic web applications",
    image:
      "https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png",
  },
  {
    name: "SQLite",
    link: "https://www.sqlite.org/index.html",
    purpose:
      "Self-contained, serverless, and zero-configuration SQL database engine",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/2048px-Sqlite-square-icon.svg.png",
  },
  {
    name: "Postcss",
    link: "https://postcss.org/",
    purpose: "CSS post-processor for transforming and optimizing styles",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/PostCSS_Logo.svg/1200px-PostCSS_Logo.svg.png",
  },
  {
    name: "Tailwind",
    link: "https://tailwindcss.com/",
    purpose: "Utility-first CSS framework for building responsive designs",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
  },
  {
    name: "Sass",
    link: "https://sass-lang.com/",
    purpose: "CSS extension language with features like variables and nesting",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png",
  },
  {
    name: "Framer motion",
    link: "https://www.framer.com/motion/",
    purpose: "Animation library for React applications",
    image:
      "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png",
  },
  {
    name: "MomentJS",
    link: "https://momentjs.com/",
    purpose:
      "JavaScript library for parsing, validating, manipulating, and formatting dates",
    image: "https://cdn.worldvectorlogo.com/logos/momentjs.svg",
  },
];

export default function Home() {
  const Item = (item: StackItem) => {
    return (
      <Paper
        shadow="xs"
        p="xl"
        w={500}
        styles={{
          root: {
            background: "hsl(225, 7%, 13%)",
          },
        }}
      >
        <Flex align="center" justify="center">
          <Flex
            p={20}
            m={10}
            styles={{
              root: {
                borderRadius: "5px",
                backgroundImage: `url("${item.image}")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              },
            }}
            justify="center"
            align="center"
            w={200}
            h={100}
          ></Flex>
          <Stack align="center">
            <Anchor<"a"> href={item.link} target="_blank">
              <Text
                ta="center"
                size="xl"
                styles={{
                  root: {
                    fontWeight: "700",
                  },
                }}
              >
                {item.name}
              </Text>
            </Anchor>

            <Text ta="center">{item.purpose}</Text>
          </Stack>
        </Flex>
      </Paper>
    );
  };

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
              The Tech Stack
            </Text>
            <Space h="2rem" />
          </Flex>
        </Container>
        <Flex justify="center">
          <SimpleGrid cols={2}>{TechStack.map((i) => Item(i))}</SimpleGrid>
        </Flex>
      </AnimateEntry>
    </>
  );
}
