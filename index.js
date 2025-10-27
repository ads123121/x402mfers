const express = require("express");
const app = express();

app.use(express.json());

app.post("/mint", (req, res) => {
  // Это просто пример статического ответа с ценой 1 USDC
  res.status(402).json({
    price: "1000000",
    payTo: "0xТвойTreasuryAddress",
    network: "base"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
