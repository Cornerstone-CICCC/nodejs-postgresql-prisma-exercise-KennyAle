import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient()

const fetchAllProducts = async () => {
    return await prisma.product.findMany()
}

const fetchProductById = async (id: number) => {
    return await prisma.product.findUnique({ where: { id } })
}

const createProduct = async (data: Omit<Product, 'id'>) => {
    return await prisma.product.create({ data })
}

const editProductById = async (id: number, data: Partial<Product>) => {
    const foundProduct = await fetchProductById(id)
    if (!foundProduct) return null
    const newUpdate = {
        productName: data.productName ?? foundProduct.productName,
        price: data.price ?? foundProduct.price
    }
    return await prisma.product.update({
        where: { id },
        data: newUpdate
    })
}

const removeProductById = async (id: number) => {
    return await prisma.product.delete({ where: { id } })
}

export default {
    fetchAllProducts,
    fetchProductById,
    createProduct,
    editProductById,
    removeProductById
}


