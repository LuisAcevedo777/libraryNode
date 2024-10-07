const Stripe = require("stripe");
require("dotenv").config();

const stripe = new Stripe(process.env.SECRET_KEY);

const createSession = async (req, res) => {
  const { amount, quantity } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Producto de ejemplo",
          },
          unit_amount: amount,
        },
        quantity: quantity,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:8000/success",
    cancel_url: "http://localhost:8000/cancel",
  });

  res.json({ id: session.id });
};

module.exports = createSession;
