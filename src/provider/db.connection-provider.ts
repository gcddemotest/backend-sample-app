import { injectable } from "@msiviero/knit";
import * as mysql from "mysql";

@injectable()
export class ConnectionProvider {

    public connection() {
        const pool = mysql.createPool({
            connectionLimit: 10,
            host: process.env.DB_HOST || "127.0.0.1",
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        });

        return pool;
    }
}
