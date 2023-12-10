import { GetDatabase, getMessages } from "@/db";

export const dynamic = "force-dynamic"; // defaults to force-static

// Nothing to see here, just your average API endpoint which got scrapped
export async function GET(req: Request) {
  return Response.json({
    code: 200,
    data: await getMessages(),
  });
}

export async function POST(req: Request) {
  const {
    email,
    message,
    name,
    subject,
  }: {
    name: string;
    email: string;
    subject: string;
    message: string;
  } = await req.json();

  let db = GetDatabase();

  db.all(
    "INSERT INTO messages (name, email, subject, message, date) values (?, ?, ?, ?, ?);",
    [name, email, subject, message, new Date()]
  );

  return Response.json({
    code: 200,
    message: "Thanks for contacting me; I will reach out as soon as possible.",
  });
}
