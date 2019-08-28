import { api, Exchange, HttpMethod, route } from "@msiviero/knit";
import { hostname } from "os";
import { Service } from "../service/service";

@api()
export class Hello {

  constructor(
    private readonly service: Service,
  ) { }

  @route(HttpMethod.GET, "/")
  public async health(exchange: Exchange) {
    exchange.response.code(200).send(`backend-sample-app - ${hostname}`);
  }

  @route(HttpMethod.GET, "/users/:userId")
  public async user(exchange: Exchange) {
    try {
      const user = await this.service.queryOne(exchange.request.params.userId);
      if (user) {
        exchange.response.send(user);
      } else {
        exchange.response.code(404).send();
      }
    } catch (err) {
      exchange.response.code(500).send(err);
    }
  }

  @route(HttpMethod.GET, "/users")
  public async users(exchange: Exchange) {
    try {
      exchange.response.send(await this.service.queryAll());
    } catch (err) {
      exchange.response.code(500).send(err);
    }
  }
}
