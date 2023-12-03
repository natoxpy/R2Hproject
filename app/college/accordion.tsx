"use client";

import { Accordion, Blockquote, Flex, Text } from "@mantine/core";
import { CollegeApplications } from "./applications";

export function AccordionForCollegePage() {
  return (
    <>
      <Accordion defaultValue="College-applications" variant="filled">
        <Accordion.Item key="College-answers" value="College-answers">
          <Accordion.Control>Written response</Accordion.Control>
          <Accordion.Panel>
            <Flex justify="center" align="center">
              <Flex justify="center" align="center" w={600} p={40}>
                <Text>
                  I aspire to pursue a major in software development, aiming to
                  become a software engineer, computer programmer, or computer
                  scientist. Ideally, my long-term goal involves establishing my
                  own venture, recognizing the instability of the current job
                  market. Embracing the prevalent trend in my field, I
                  anticipate engaging in strategic job hopping to continually
                  work on diverse projects, as I thrive on the excitement of
                  exploring new challenges. Looking ahead to my college
                  experience, my primary anticipation centers around connecting
                  with like-minded individuals who share my passion for coding.
                  Rather than waiting for others to catch up, I am eager to find
                  a community where, from day one, we can collaboratively embark
                  on coding endeavors. The prospect of either college being a
                  profound disappointment without such connections or a
                  transformative experience that significantly enhances my
                  skills motivates me to actively seek out a network of
                  individuals who will challenge and inspire me.
                </Text>
              </Flex>
              <Flex direction="column">
                <Flex
                  p={20}
                  m={10}
                  styles={{
                    root: {
                      borderRadius: "5px",
                      backgroundImage: `url("https://media.istockphoto.com/id/1442946345/photo/software-source-code-programming-code-programming-code-on-computer-screen-developer-working.jpg?s=2048x2048&w=is&k=20&c=JEJk2ptfzj59hNZjKM9U3MsbzV9EZl_5h6MFPgxNAIs=")`,
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
                <Flex
                  p={20}
                  m={10}
                  styles={{
                    root: {
                      borderRadius: "5px",
                      backgroundImage: `url("https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_960_720.jpg")`,
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
            </Flex>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item key="College-applications" value="College-applications">
          <Accordion.Control>College applications</Accordion.Control>
          <Accordion.Panel>
            <CollegeApplications />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
