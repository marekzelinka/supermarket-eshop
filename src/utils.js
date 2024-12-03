export async function swrFetcher(url) {
  const response = await fetch(url);

  return await response.json();
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatCurrency(value) {
  return currencyFormatter.format(value);
}
