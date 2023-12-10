// This page was made when the project was already 1 day late, 
// basically after I heard that I should organize it a bit better. 
// Sorry for the mess in the other pages. 
"use client";
import { Container, Text, Flex, Space } from "@mantine/core";
import AnimateEntry from "../animateEntry";

function ItemContentOption({
  index,
  content,
}: {
  index: number;
  content: string;
}) {
  return (
    <>
      <Flex>
        <Flex>
          <Text
            styles={{
              root: {
                width: "30px",
              },
            }}
          >
            {index}.
          </Text>
        </Flex>
        <Flex
          styles={{
            root: {
              flexGrow: 1,
            },
          }}
        >
          <Text>{content}</Text>
        </Flex>
      </Flex>
    </>
  );
}

function ItemContent({ lines }: { lines: Array<string> }) {
  return (
    <>
      <Flex
        styles={{
          root: {
            flexGrow: 1,
            flexDirection: "column",
          },
        }}
      >
        {lines.map((line, idx) => (
          <ItemContentOption key={idx} content={line} index={idx + 1} />
        ))}
      </Flex>
    </>
  );
}

function StemListItem({
  name,
  lines,
  image,
}: {
  lines: Array<string>;
  name: string;
  image: string;
}) {
  return (
    <>
      <Flex>
        <Flex
          justify="center"
          align="center"
          styles={{
            root: {
              flexDirection: "column",
            },
          }}
          w={600}
          p={40}
        >
          <Flex>
            <Text
              style={{
                fontSize: "1.5rem",
              }}
              fw={700}
            >
              {name}
            </Text>
          </Flex>

          <ItemContent lines={lines} />
        </Flex>

        <Flex
          p={20}
          m={10}
          styles={{
            root: {
              borderRadius: "5px",
              backgroundImage: `url("${image}")`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            },
          }}
          justify="center"
          align="center"
          w={500}
          h={300}
        ></Flex>
      </Flex>
    </>
  );
}

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
              Stem
            </Text>

            <Flex>
              <Flex justify="center" align="center" w={600} p={40}>
                <Text>
                  I&apos;m am already a computer programmer, obtaining skills
                  related to it and within the realms of data analysis, machine
                  learning, networking, cybersecurity. I say I want to major in
                  computer science, but I really do not wish to focus on
                  anything, there is nothing within that major that interest me
                  to the point where I would like to focus on it.
                </Text>
              </Flex>

              <Flex
                p={20}
                m={10}
                styles={{
                  root: {
                    borderRadius: "5px",
                    backgroundImage: `url("https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg")`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  },
                }}
                justify="center"
                align="center"
                w={500}
                h={300}
              ></Flex>
            </Flex>

            <StemListItem
              name="Web development"
              lines={[
                "This will likely fall under a computer science, or software engineer major.",
                "You can have roles such as frontend developer, Backend developer, and full stack developer (me).",
                "The average salary for a web developer is $80,730 according to the Bureau of labor statistics.",
                "The Bureau of labor statistics expects for web development to grow 16% by 2032 (average of 3% per year).",
              ]}
              image="https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg"
            />
            <StemListItem
              name="Game development"
              lines={[
                "This will likely fall under a computer science, or software engineer major.",
                "You can have roles such as developer, game developer, and game designer.",
                "The average salary for a junior game developer is $67,000 to $80,000.",
                "The Bureau of labor statistics expects for game development to grow by 8% by 2032.",
              ]}
              image="https://assets-global.website-files.com/5b651f8b5fc94c4e27470a81/622227fd2ce3cc0455a88166_blog-gamedev-fullsize.png"
            />
          </Flex>
        </Container>
      </AnimateEntry>
    </>
  );
}
