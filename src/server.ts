import { app } from "./app";

app.listen({
  host: "0.0.0.0",
  port: 3333
}).then((address) => {
  console.log(`🔥 Server listening at ${address} 🔥`);
}).catch((error) => {
  console.error(error);
  process.exit(1);
});