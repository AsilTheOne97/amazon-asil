const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HXiphKTMsHuOBWX6bhqXDf2oH1MzXsrSWvgA2gtV9VtcRHW8N38Wwi27wQ5tu6qj7KuTAPy7IzkCzRQSu3QMEHg00bwhCz5xI"
);

//API

//app config
const app = express();

//middlawares

app.use(cors({ origin: true }));
app.use(express.json());

//api routes

app.get("/", (request, response) => response.status(200).send("hello world"));
app.get("/qazi", (request, response) => response.status(200).send("whats up"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recieved boom", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/challenge-1ee93/us-central1/api
