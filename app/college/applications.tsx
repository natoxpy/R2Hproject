// This page actually makes sense, somewhat. 
import { Badge, Flex, Paper, Stack } from "@mantine/core";
import { College } from "./progress";

export function CollegeApplications() {
  const colleges = [
    {
      name: "Catawba College",
      logo: "https://www.catawba.edu/media/catawba-college/site-assets/images/logos/logo.png",
      major: "Computer Science",
    },
    {
      name: "Winthrop",
      logo: "https://content.sportslogos.net/logos/35/913/full/winthrop_eagles_logo_wordmark_2020_sportslogosnet-7805.png",
      major: "Computer Science",
    },
    {
      name: "Guilford",
      logo: "https://encoura.org/wp-content/uploads/2021/02/guilford.png",
      major: "Computer Science",
    },
  ];

  return (
    <>
      <Stack>
        {colleges.map((college) => (
          <Paper
            key={college.name}
            shadow="xs"
            p="xl"
            styles={{
              root: {
                background: "hsl(225, 7%, 13%)",
              },
            }}
          >
            <div>
              <Flex justify="space-between" px={30} align="center">
                <Badge color="blue" size="lg">
                  Safety
                </Badge>
                <Badge color="blue" size="lg">
                  {college.major}
                </Badge>
              </Flex>
              <Flex>
                <Flex
                  justify="space-between"
                  p={30}
                  direction="column"
                  align="center"
                >
                  <Flex>
                    <College active={3} />
                  </Flex>
                </Flex>
                <Flex
                  p={20}
                  m={10}
                  styles={{
                    root: {
                      borderRadius: "5px",
                      backgroundImage: `url("${college.logo}")`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    },
                  }}
                  justify="center"
                  align="center"
                  w={500}
                ></Flex>
              </Flex>
            </div>
          </Paper>
        ))}
      </Stack>
    </>
  );
}
