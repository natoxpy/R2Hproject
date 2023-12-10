// This page was the last I made, why? I had no clue what to type.
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

            {/* Content */}

            <Flex justify="center" align="center">
              <Flex justify="center" align="center" w={600} p={40}>
                <Text>
                  R2H is a program that gives any student an opportunity to
                  complete their career goals with minimal debt by offering
                  financial support, and also offering other career paths for
                  those that might not be able to or want to do college.
                </Text>
              </Flex>
            </Flex>

            <Flex w={740} justify="center">
              <Flex>3 things you have learned/gotten out of R2H</Flex>
            </Flex>
            <br />
            <Flex w={600} justify="center">
              <Flex
                styles={{
                  root: {
                    flexDirection: "column",
                  },
                }}
              >
                <Flex>
                  {/* Item 1 */}
                  <Flex>
                    <Text
                      styles={{
                        root: {
                          width: "30px",
                        },
                      }}
                    >
                      1.
                    </Text>
                  </Flex>
                  <Flex
                    styles={{
                      root: {
                        flexGrow: 1,
                      },
                    }}
                  >
                    <Text>How to apply for colleges</Text>
                  </Flex>
                </Flex>
                <Flex>
                  {/* Item 2 */}
                  <Flex>
                    <Text
                      styles={{
                        root: {
                          width: "30px",
                        },
                      }}
                    >
                      2.
                    </Text>
                  </Flex>
                  <Flex
                    styles={{
                      root: {
                        flexGrow: 1,
                      },
                    }}
                  >
                    <Text>How to apply for scholarships</Text>
                  </Flex>
                </Flex>
                <Flex>
                  {/* Item 3 */}
                  <Flex>
                    <Text
                      styles={{
                        root: {
                          width: "30px",
                        },
                      }}
                    >
                      3.
                    </Text>
                  </Flex>
                  <Flex
                    styles={{
                      root: {
                        flexGrow: 1,
                      },
                    }}
                  >
                    <Text>I applied to colleges</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            {/*  */}

            <Flex justify="center" align="center">
              <Flex justify="center" align="center" w={600} p={40}>
                <Text>
                  One of the things I really enjoyed about R2H was the coding
                  projects and talking to my instructors.
                </Text>
              </Flex>
            </Flex>

            <Flex justify="center" align="center">
              <Flex justify="center" align="center" w={600} p={40}>
                <Text>
                  I&apos;m looking forward too potentially doing the coding
                  apprenticeship.
                </Text>
              </Flex>
            </Flex>

            <Flex justify="center" align="center">
              <Flex justify="center" align="center" w={600} p={40}>
                <Text>
                  With the information I learned with R2H I will be more
                  informed about colleges.
                </Text>
              </Flex>
            </Flex>
            {/*  */}
          </Flex>
        </Container>
      </AnimateEntry>
    </>
  );
}
