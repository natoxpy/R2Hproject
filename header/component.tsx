// THIS IS NOT MY DODE; DON'T ASK WHAT IT DOES.
"use client";

import { Container, Anchor, Group, Burger, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./style.module.scss";
import "@mantine/core/styles.css";
import { usePathname, useRouter } from "next/navigation";

const userLinks = [
  { link: "/stack", label: "Stack" },
  { link: "/formdata", label: "Form data" },
];

const mainLinks = [
  { link: "/", label: "About me" },
  { link: "/college", label: "College" },
  { link: "/r2h", label: "R2H" },
  { link: "/stem", label: "STEM" },
  { link: "/contactme", label: "Contact me" },
];

export function DoubleHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const pathname = usePathname();
  const router = useRouter();

  const secondaryItems = userLinks.map((item) => (
    <Anchor<"a">
      href={item.link}
      key={item.label}
      data-active={pathname.endsWith(item.link) || undefined}
      onClick={(event) => {
        event.preventDefault();
        router.push(item.link);
      }}
      className={classes.secondaryLink}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <div className="w-20 h-20 bg-emerald-100">
          <span>Kelvin Moreira</span>
        </div>

        <Box className={classes.links} visibleFrom="sm">
          <Group justify="flex-end">{secondaryItems}</Group>
          <Group gap={0} justify="flex-end" className={classes.mainLinks}>
            {mainLinks.map((item, index) => (
              <Anchor<"a">
                href={item.link}
                className={classes.mainLink}
                data-active={pathname.endsWith(item.link) || undefined}
                key={item.label}
                onClick={(event) => {
                  event.preventDefault();
                  router.push(item.link);
                }}
              >
                {item.label}
              </Anchor>
            ))}
          </Group>
        </Box>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          hiddenFrom="sm"
        />
      </Container>
    </header>
  );
}
