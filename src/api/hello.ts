import { api, Exchange, HttpMethod, route } from "@msiviero/knit";
import { Service } from "../service/service";

@api()
export class Hello {

  constructor(
    private readonly service: Service,
  ) { }

  @route(HttpMethod.GET, "/users/:userId")
  public async user(exchange: Exchange) {
    const user = await this.service.queryOne(exchange.request.params.userId);
    if (user) {
      exchange.response.send(user);
    } else {
      exchange.response.code(404).send();
    }
  }

  @route(HttpMethod.GET, "/users")
  public async users(exchange: Exchange) {
    exchange.response.send(await this.service.queryAll());
  }
}
