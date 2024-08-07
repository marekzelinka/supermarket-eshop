import useSWR from 'swr'

export function useProducts() {
  const products = useSWR(
    `${import.meta.env.VITE_API_BASE_URL}/supermarket.json`,
  )

  return products
}

export function useProduct(id) {
  const product = useSWR(
    `${import.meta.env.VITE_API_BASE_URL}/productinfo/id${id}.json`,
  )

  return product
}
