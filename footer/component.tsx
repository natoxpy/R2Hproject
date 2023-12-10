// THIS IS NOT MY DODE; DON'T ASK WHAT IT DOES.
"use client";
import { Container, Group, Anchor } from "@mantine/core";
// import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./style.module.css";

const links: { link: string; label: string }[] = [
  // { link: "#", label: "Contact" },
  // { link: "#", label: "Privacy" },
  // { link: "#", label: "Blog" },
  // { link: "#", label: "Careers" },
];

export function FooterSimple() {
  const items = links.map((link) => (
    <Anchor<"a">
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <div>© 2023 Kelvin Moreira. All Rights Reserved.</div>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
