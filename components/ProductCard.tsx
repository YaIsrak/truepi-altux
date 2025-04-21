import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PRODUCTS_QUERYResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import ProductDialogContent from "./ProductDialogContent";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import CustomBtn from "./ui/custom-btn";
import { FaCartShopping } from "react-icons/fa6";

export default function ProductCard({
  product,
}: {
  product: PRODUCTS_QUERYResult[0];
}) {
  return (
    <motion.div
      className="bg-white/20 rounded-xl border border-gray-300 p-6"
      initial={{ opacity: 0, y: 100 }} // Start off-screen and invisible
      whileInView={{ opacity: 1, y: 0 }} // Trigger animation every time in view
      viewport={{ amount: 0.5 }} // Animation triggers when 50% of the card is in view
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
    >
      <div className="relative">
        <Image
          src={product.image ? urlFor(product.image).url() : ""}
          alt="Product"
          className="group-hover:scale-105 transition-all duration-150 ease-in-out w-[300px] h-[350px] mx-auto"
          width={300}
          height={300}
          placeholder="blur"
          blurDataURL={product.image ? urlFor(product.image).blur(20).url() : ""}
        />
      </div>

      <div className="mt-6">
        <h2
          className="text-2xl font-bold"
          style={{ color: product.color?.hex || "#000" }}
        >
          {product.title}
        </h2>
        <div className="flex gap-2">
          <p className="text-lg line-through text-muted-foreground">
            ${product.given_price}
          </p>
          <p className="text-2xl font-bold">${product.price}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-8">
        <Dialog>
          <DialogTrigger asChild>
            <button className="capitalize relative group border-2 border-primary hover:text-white hover:border-none rounded-full p-3 text-sm lg:text-base font-medium w-full overflow-hidden">
              <span className="relative z-10">Buy now</span>
              <span className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-125 group-hover:skew-x-[-45deg] transition-all duration-500"></span>
            </button>
          </DialogTrigger>
          <DialogContent>
            <ProductDialogContent product={product} />
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  );
}
