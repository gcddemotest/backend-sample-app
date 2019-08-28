import { inject, injectable } from "@msiviero/knit";
import { Pool } from "mysql";

interface User {
  readonly id: string;
  readonly email: string;
  readonly age: number;
}

@injectable()
export class Service {

  constructor(
    @inject("db:connection") public readonly connectionPool: Pool,
  ) { }

  public queryAll(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      this.connectionPool.query("SELECT * FROM user LIMIT 20", (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }

  public queryOne(userId: number): Promise<User | undefined> {
    return new Promise((resolve, reject) => {
      this.connectionPool.query("SELECT * FROM user WHERE id = ?", [userId], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results[0] || undefined);
      });
    });
  }
}
