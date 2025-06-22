export default async function handler(req, res) {
  const sampleData = [
    {
      type: "Top Gainer",
      coin: "XRP/USDT",
      entryPrice: "0.5500",
      entryPercent: "+0.8%",
      targetPrice: "0.5775",
      targetPercent: "+5%",
      stoplossPrice: "0.5300",
      slPercent: "-3.6%"
    },
    {
      type: "Intraday Signal",
      coin: "ARB/USDT",
      entryPrice: "0.8400",
      entryPercent: "+1.2%",
      targetPrice: "0.8820",
      targetPercent: "+5%",
      stoplossPrice: "0.8120",
      slPercent: "-3.3%"
    },
    {
      type: "Pre-Pump Signal",
      coin: "INJ/USDT",
      entryPrice: "21.00",
      entryPercent: "+0.4%",
      targetPrice: "22.05",
      targetPercent: "+5%",
      stoplossPrice: "20.30",
      slPercent: "-3.3%"
    }
  ];

  res.status(200).json(sampleData);
}
