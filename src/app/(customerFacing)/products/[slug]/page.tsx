import { notFound } from "next/navigation"
import { getAllProducts, getProductBySlug as getDbProductBySlug } from "@/app/admin/_actions/product"
import { transformDbProduct } from "@/config/products"
import ProductPageClient from "./_components/ProductPageClient"

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const [dbProduct, allDbProducts] = await Promise.all([
    getDbProductBySlug(params.slug),
    getAllProducts()
  ])

  if (!dbProduct) {
    notFound()
  }

  const product = transformDbProduct(dbProduct)
  const relatedProducts = allDbProducts
    .filter(p => p.id !== dbProduct.id)
    .slice(0, 3)
    .map(transformDbProduct)

  return (
    <ProductPageClient product={product} relatedProducts={relatedProducts} />
  )
}
