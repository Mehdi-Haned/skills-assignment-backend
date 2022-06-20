import express from "express";
import data from "../data/data"
import bodyParser from "body-parser";
import cors from "cors";
import * as utilities from "../utils/functions";

const app = express(); // creating an Express app
const { PORT = 4000 } = process.env;

app.use(bodyParser.json()).use(cors());

app.get("/", (request, response) => response.send("Hello World!"));

app.get("/api/v1/items", (request, response) => {
  return response.json(data.items)
});

app.get("/api/v1/customers", (request, response) => {
  return response.json(data.customers)
});

app.get("/api/v1/items/:id", (request, response) => {
  if (utilities.isInvalidId(request.params.id)) {
    console.log("Invalid ID");
    return response.status(400).json({ error: "Invalid id." });
  };
  console.log(request.params);
  const id = parseInt(request.params.id);
  const item = data.items.find(i => i.id === id);
  if (!item) {
    console.log("Item not found");
    return response.status(404).json({ error: "Item not found." });
  };
  return response.json(item);
});

app.get("/api/v1/customers/:id", (request, response) => {
  if (utilities.isInvalidId(request.params.id)) {
    console.log("Invalid ID");
    return response.status(400).json({ error: "Invalid id." });
  };
  console.log(request.params);
  const id = parseInt(request.params.id);
  const customer = data.customers.find(c => c.id === id);
  if (!customer) {
    console.log("Customer not found");
    return response.status(404).json({ error: "Customer not found." });
  };
  return response.json(customer);
});


app.listen(PORT, () => {
  console.log(`Hello World, I'm listening on localhost${PORT}`)
});
