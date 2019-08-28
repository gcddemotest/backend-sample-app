import { provider } from "@msiviero/knit";
import * as mysql from "mysql";
import { Pool } from "mysql";

@provider<Pool>("db:connection")
export class DbConnectionProvider {
  public provide = () => mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST || "127.0.0.1",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  })
}
