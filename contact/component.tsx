// THIS IS NOT MY DODE; DON'T ASK WHAT IT DOES.
"use client";
import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
} from "@mantine/core";
import { useState } from "react";
import { notifications } from "@mantine/notifications";

export function GetInTouchSimple() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");

  let setters = [setName, setEmail, setSubject, setMessage];

  let [errname, setErrName] = useState("");
  let [erremail, setErrEmail] = useState("");
  let [errsubject, setErrSubject] = useState("");
  let [errmessage, setErrMessage] = useState("");

  let errSetters = [setErrName, setErrEmail, setErrSubject, setErrMessage];

  let [sentRequest, setSentRequest] = useState(false);

  const validate = (_: string) => _.trim().length >= 3;

  const allValidations = () => {
    let msg = "Must be at least 3 characters long";
    let r = false;
    let vars = [name, email, subject, message];

    vars.map((v, i) => {
      if (!validate(v)) r = (errSetters[i](msg), true);
    });

    return r;
  };

  const wait = (t: number) => new Promise((r) => setTimeout(() => r(1), t));

  const submit = async () => {
    if (allValidations()) return;

    setSentRequest(true);
    notifications.show({
      color: "blue",
      title: "Sending message",
      message: "waiting to send",
      loading: true,
    });

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    await wait(1500);

    setters.map((set) => set(""));
    notifications.cleanQueue();
    notifications.clean();

    notifications.show({
      color: "green",
      title: "Message sent",
      message: "Your message was received.",
    });
    setSentRequest(false);
  };

  return (
    <form action="/api/form">
      <Title
        order={2}
        size="h1"
        style={{ fontFamily: "Greycliff CF, var(--mantine-font-family)" }}
        fw={900}
        ta="center"
      >
        Get in touch
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          value={name}
          error={errname}
          onChange={(e) => (setName(e.target.value), setErrName(""))}
          variant="filled"
        />
        <TextInput
          label="Email"
          value={email}
          error={erremail}
          onChange={(e) => (setEmail(e.target.value), setErrEmail(""))}
          placeholder="Your email"
          name="email"
          variant="filled"
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        value={subject}
        error={errsubject}
        onChange={(e) => (setSubject(e.target.value), setErrSubject(""))}
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
      />
      <Textarea
        mt="md"
        label="Message"
        value={message}
        error={errmessage}
        onChange={(e) => (setMessage(e.target.value), setErrMessage(""))}
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
      />

      <Group justify="center" mt="xl">
        <Button
          type="submit"
          size="md"
          loading={sentRequest}
          onClick={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          Send message
        </Button>
      </Group>
    </form>
  );
}
