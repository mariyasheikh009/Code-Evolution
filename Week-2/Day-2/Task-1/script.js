function runTask() {
  const prices = [120, 250, 300, 450, 600];

  // 1. Filter prices greater than 250
  const filteredPrices = prices.filter(price => price > 250);

  // 2. Apply 10% discount
  const discountedPrices = filteredPrices.map(price => price * 0.9);

  // 3. Log both arrays
  console.log("Original Prices:", prices);
  console.log("Filtered Prices (>250):", filteredPrices);
  console.log("Discounted Prices (10% off):", discountedPrices);
}
