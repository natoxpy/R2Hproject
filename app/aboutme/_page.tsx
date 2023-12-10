"use client";

/**
 * This page is getting imported by ../page.ts
 * 
 * # WELCOME MY FELLOW DEVELOPER, TO HELL. 
 * 
 * yeah I made this thing thinking I wasn't going to have too much
 * now I can't be bother with factoring everything, 
 * Especially for a project I will never see again.
 * Well, just know it works, don't touch anything, 
 * and good luck navigating this hells. 😊
 */
import { Container, Text, Flex, Space, Divider, Paper } from "@mantine/core";
import AnimateEntry from "../animateEntry";

export default function Contactme() {
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
              About me
            </Text>
            <Space h="1rem" />
            {/* Introduction */}
            <Flex>
              <Flex justify="center" align="center" w={600} p={40}>
                <Text>
                  Hi, my name is Kelvin Moreira i&apos;m 17yrs, and i&apos;m a
                  software developer specialize in FullStack development.{" "}
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
            {/* Country of origin */}
            <Flex>
              <Flex justify="center" align="center" w={600} p={40}>
                <Text>
                  I was born in El Salvador. I lived there for 9 years before I
                  came to the United States in late 2015. I first came to Iowa,
                  but in 2017, I moved to Charlotte.
                </Text>
              </Flex>
              <Flex
                p={20}
                m={10}
                styles={{
                  root: {
                    borderRadius: "5px",
                    backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag-map_of_El_Salvador.png/640px-Flag-map_of_El_Salvador.png")`,
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
            {/* HOBBIES */}
            <Divider />
            <Flex justify="center" align="center">
              <Flex justify="center" align="center" w={600} p={40}>
                <Text>
                  Most people know me for being very talkative. They would
                  likely never guess that I was born with a speech impediment.
                  When I was a little kid, I was diagnosed and received
                  treatment and therapy to be able to talk as I grew up. This
                  means that there was a chance I could have been mute now.
                </Text>
              </Flex>
            </Flex>
            <Divider />
            <Flex>
              <Flex justify="center" align="center" w={600} p={40}>
                <Text>
                  For a while, my only hobby was watching anime. I enjoyed
                  reading the stories or just watching the shows. The day I came
                  to the U.S., I began watching Pokemon and Dragon Ball and
                  became a fan of them.
                </Text>
              </Flex>
              <Flex
                p={20}
                m={10}
                styles={{
                  root: {
                    borderRadius: "5px",
                    backgroundImage: `url("https://www.shutterstock.com/image-vector/enchanting-anime-landscape-mistcovered-mountain-600nw-2301778699.jpg")`,
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
            {/* Central non imaged beff main hobby */}
            <Flex justify="center" align="center">
              <Flex justify="center" align="center" w={600} p={40}>
                <Text>But that you would not be my primary hobby for long</Text>
              </Flex>
            </Flex>
            <Flex>
              <Flex justify="center" align="center" w={600} p={40}>
                <Text>
                  When I was 13 years old, I purchased my first computer. Pretty
                  soon, I would realize that technology and I did not get along
                  very well. My first computer was something to laugh at, but
                  it&apos;s one I still hold dear to this day.
                </Text>
              </Flex>
              <Flex
                p={20}
                m={10}
                styles={{
                  root: {
                    borderRadius: "5px",
                    backgroundImage: `url("./old_laptop.png")`,
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
            {/* Central non imaged beff main hobby */}
            <Flex justify="center" align="center">
              <Flex justify="center" align="center" w={600} p={40}>
                <Text>
                  As frustrated as I felt by the poor performance of this
                  computer at the time, it was also the machine where I learned
                  my first lines of code. This was where it all began.
                </Text>
              </Flex>
            </Flex>
            <Flex justify="center">
              <Flex justify="center" align="center" w={600} p={40}>
                <Text>
                  I started wanting to build a website, without any purpose or
                  reason, just blindly wanting to do something for fun. As you
                  all can probably understand, it&apos;s not such a simple task.
                  Learning HTML for the first time was a challenge because I had
                  no idea what I was doing or trying to do.
                </Text>
              </Flex>
            </Flex>
            <Flex justify="center">
              <Paper
                shadow="xs"
                p="xl"
                styles={{
                  root: {
                    background: "hsl(225, 7%, 15%)",
                    borderRadius: "10px",
                  },
                }}
              >
                <Flex
                  p={20}
                  m={10}
                  styles={{
                    root: {
                      borderRadius: "5px",
                      backgroundImage: `url("/mypath.png")`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    },
                  }}
                  justify="center"
                  align="center"
                  w={700}
                  h={450}
                ></Flex>
              </Paper>
            </Flex>
            <Flex justify="center" align="center">
              <Flex justify="center" align="center" w={600} p={40}>
                <Text>
                  This blind motivation took me very far in my first few years
                  of coding. From the day I wrote my first line of code until
                  today, the longest break I have taken—times when I did not
                  write a single line of code—has been about 2 months. In my 5
                  years of coding, a 2-month break was the longest, and before
                  that, the second longest was 3 weeks.
                </Text>
              </Flex>
            </Flex>
            <Flex justify="center" align="center">
              <Flex justify="center" align="center" w={600} p={40}>
                <Text>
                  Doing this for so long, hundreds of thousands of hours deep
                  into this, coding has been my main hobby for years. It likely
                  won&apos;t stop anytime soon. I went from coding on a trashy
                  old laptop to a two-monitor setup with a gaming PC and my
                  recently purchased 80GB of RAM.
                </Text>
              </Flex>
            </Flex>
            <Flex>
              <Flex justify="center" align="center" w={600} p={40}>
                <Text>
                  Another part of my software hobby is also building computer,
                  and configuring servers, I own 2 home servers and have another
                  2 server on the cloud, one of which is hosting this website.
                </Text>
              </Flex>
              <Flex
                p={20}
                m={10}
                styles={{
                  root: {
                    borderRadius: "5px",
                    backgroundImage: `url("https://media.istockphoto.com/id/918951042/photo/super-computer-server-racks-in-datacenter-3d-illustration.jpg?s=2048x2048&w=is&k=20&c=LzvLXdHbBobiU1DwsnkFRuQVilgeLoQaaHtoJuQnOSU=")`,
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
        </Container>
      </AnimateEntry>
    </>
  );
}
