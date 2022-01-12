import { createServer, Model } from "miragejs";

export function makeMirageServer() {
  return createServer({
    models: {
      transaction: Model,
    },
    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: "ifood",
            value: "1000",
            category: "alimentação",
            type: "withdraw",
            createdAt: new Date(),
          },
        ],
      });
    },
    routes() {
      this.namespace = "api";

      this.get("/transactions", () => {
        return this.schema.all("transaction");
      });

      this.post("/transactions", (schema, req) => {
        return schema.create("transaction", JSON.parse(req.requestBody));
      });
    },
  });
}
