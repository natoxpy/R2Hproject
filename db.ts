import sqlite3 from "sqlite3";
import path from "path";

export class Database {
  static instance: Database;
  db: sqlite3.Database;
  constructor() {
    this.db = new sqlite3.Database(path.resolve(process.cwd(), "local.db"));
  }

  static use() {
    return (
      (Database.instance ?? { db: undefined }).db ??
      (Database.instance = new Database()).db
    );
  }
}

export function GetDatabase() {
  return Database.use();
}

// export async function AddMessage({}: {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }) {
//   let db: ReturnType<typeof GetDatabase>;
//   try {
//     db = GetDatabase();
//   } catch (e) {
//     console.log(e, "data base not connected");
//     return new Response(null, {
//       status: 400,
//     });
//   }
// }

export async function getMessages() {
  let db: ReturnType<typeof GetDatabase>;
  try {
    db = GetDatabase();
  } catch (e) {
    console.log(e, "data base not connected");
    return new Response(null, {
      status: 400,
    });
  }

  let all;

  try {
    all = await new Promise((res, rej) =>
      db.all(
        "select name, email, subject, message, date from messages;",
        (a, e) => res(e)
      )
    );
  } catch (e) {
    console.error(e);
    return new Response(null, {
      status: 400,
    });
  }

  return all;
}
