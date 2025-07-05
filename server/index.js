import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true }, // ✅ الحل الصحيح
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("[Stripe Error]", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(4242, () => {
  console.log("🚀 Server running on http://localhost:4242");
});
