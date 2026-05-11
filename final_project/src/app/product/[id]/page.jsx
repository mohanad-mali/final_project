"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Footer from "@/components/Footer";
import { addToCart } from "@/api/cartApi";
import { addToWishlist } from "@/api/wishlistApi";

import {
  FaHeart,
  FaShareAlt,
  FaShoppingCart,
  FaBolt,
  FaTruck,
  FaUndo,
  FaShieldAlt,
  FaStar,
  FaPlus,
} from "react-icons/fa";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [qty, setQty] = useState(1);
  const [loadingCart, setLoadingCart] = useState(false);
  const [loadingWishlist, setLoadingWishlist] = useState(false);

  async function getProduct() {
    try {
      const res = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`,
      );

      const productData = res.data.data;
      setProduct(productData);
      setMainImage(productData.imageCover);

      const allProducts = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products",
      );

      const filtered = allProducts.data.data
        .filter((item) => item._id !== id)
        .slice(0, 5);

      setRelated(filtered);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAddToCart(productId) {
    try {
      setLoadingCart(true);

      for (let i = 0; i < qty; i++) {
        await addToCart(productId);
      }

      alert("Product added to cart ✅");
    } catch (error) {
      console.log(error);
      alert("Please login first ❌");
    } finally {
      setLoadingCart(false);
    }
  }

  async function handleAddToWishlist(productId) {
    try {
      setLoadingWishlist(true);
      await addToWishlist(productId);
      alert("Product added to wishlist ✅");
    } catch (error) {
      console.log(error);
      alert("Please login first ❌");
    } finally {
      setLoadingWishlist(false);
    }
  }

  useEffect(() => {
    if (id) getProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <>
      <main className="bg-white">
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-sm text-gray-500 mb-8">
            Home / {product.category?.name} /{" "}
            <span className="text-green-600">{product.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <div className="bg-gray-50 rounded-xl border h-[420px] flex items-center justify-center">
                <img src={mainImage} className="max-h-[380px] object-contain" />
              </div>

              <div className="flex gap-3 mt-4">
                {product.images?.slice(0, 4).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setMainImage(img)}
                    className={`w-20 h-20 border rounded ${
                      mainImage === img ? "border-green-600" : ""
                    }`}
                  >
                    <img src={img} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-green-600">{product.category?.name}</p>

              <h1 className="text-3xl font-bold mt-2">{product.title}</h1>

              <div className="flex items-center gap-2 mt-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="text-gray-500 text-sm ml-2">
                  {product.ratingsAverage}
                </span>
              </div>

              <h2 className="text-2xl text-green-600 font-bold mt-5">
                {product.price} EGP
              </h2>

              <p className="text-gray-600 mt-4">{product.description}</p>

              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                  className="w-8 h-8 border rounded"
                >
                  -
                </button>
                <span>{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-8 h-8 border rounded"
                >
                  +
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <button
                  onClick={() => handleAddToCart(product._id)}
                  disabled={loadingCart}
                  className="bg-green-600 text-white py-3 rounded flex items-center justify-center gap-2 disabled:bg-gray-400"
                >
                  <FaShoppingCart /> {loadingCart ? "Adding..." : "Add to Cart"}
                </button>

                <button className="bg-gray-900 text-white py-3 rounded flex items-center justify-center gap-2">
                  <FaBolt /> Buy Now
                </button>
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleAddToWishlist(product._id)}
                  disabled={loadingWishlist}
                  className="flex-1 border py-3 rounded flex items-center justify-center gap-2 disabled:bg-gray-100"
                >
                  <FaHeart /> {loadingWishlist ? "Adding..." : "Wishlist"}
                </button>

                <button className="w-14 border rounded flex items-center justify-center">
                  <FaShareAlt />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8 text-sm">
                <div className="flex items-center gap-2">
                  <FaTruck /> Free Delivery
                </div>
                <div className="flex items-center gap-2">
                  <FaUndo /> Returns
                </div>
                <div className="flex items-center gap-2">
                  <FaShieldAlt /> Secure
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-xl font-bold mb-6">Related Products</h2>

            <div className="grid grid-cols-5 gap-6">
              {related.map((item) => (
                <Link key={item._id} href={`/product/${item._id}`}>
                  <div className="border p-4 rounded hover:shadow cursor-pointer">
                    <img
                      src={item.imageCover}
                      className="h-32 w-full object-contain"
                    />

                    <p className="text-sm mt-2">{item.title}</p>

                    <div className="flex justify-between mt-2">
                      <span className="text-green-600">{item.price} EGP</span>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(item._id);
                        }}
                        className="bg-green-600 text-white w-7 h-7 rounded-full flex items-center justify-center"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
