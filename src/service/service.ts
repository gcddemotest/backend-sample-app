import { injectable } from "@msiviero/knit";
import { ConnectionProvider } from "../provider/db.connection-provider";

interface User {
  readonly id: string;
  readonly email: string;
  readonly age: number;
}

@injectable()
export class Service {

  constructor(
    private readonly connectionProvider: ConnectionProvider,
  ) { }

  public queryAll(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      this.connectionProvider.connection().query("SELECT * FROM user LIMIT 20", (error, results) => {
        if (error) {
          return reject(error);
        }

        resolve(results);
      });
    });
  }

  public queryOne(userId: number): Promise<User | undefined> {
    return new Promise((resolve, reject) => {
      this.connectionProvider.connection().query("SELECT * FROM user WHERE id = ?", [userId], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results[0] || undefined);
      });
    });
  }
}
