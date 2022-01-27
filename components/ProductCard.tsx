import Link from "next/link";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import {ProductCardFragment} from "@/saleor/api";

const styles = {
  grid: `grid grid-cols-4 gap-4`,
  product: {
    name: `block text-lg text-gray-900 truncate`,
    category: `block text-sm font-medium text-gray-500`,
    price: `block text-xs font-medium text-gray-900`,
    details: `px-4 py-2 border-t`,
  },
};

export interface ProductCardProps {
  product: ProductCardFragment;
}

export const ProductCard = ({product}: ProductCardProps) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };
  let priceDisplay =
    product.pricing?.priceRange?.start?.gross.localizedAmount || "";
  if (
    product.pricing?.priceRange?.start?.gross.amount !==
    product.pricing?.priceRange?.stop?.gross.amount
  ) {
    priceDisplay = "from " + priceDisplay;
  }
  const imageStyle: React.CSSProperties = {};
  if (!!product.thumbnail?.url) {
    imageStyle.backgroundImage = `url(${product.thumbnail?.url})`;
    imageStyle.backgroundSize = "auto";
    imageStyle.backgroundRepeat = "no-repeat";
    imageStyle.backgroundPosition = "center";
  }
  return (
    <li
      key={product.id}
      className="relative shadow-md hover:shadow-2xl card card-bordered" data-theme="garden"
    >
      <Link href={`/product/${product.slug}`} prefetch={false}>
        <a>
            <figure>
              <div
                className={`${pulsing ? "pulse" : ""} loadable`}
                style={{ width: "300px", background: "#ccc" }}
              >
                <motion.img
                  initial={{ height: "225px", opacity: 0 }}
                  style={{ height: imageLoading ? "6rem" : "auto" }}
                  animate={{
                    height: imageLoading ? "16rem" : "auto",
                    opacity: imageLoading ? 0 : 1
                  }}
                  transition={
                    ({ height: { delay: 0, duration: 0.4 } },
                      { opacity: { delay: 0.5, duration: 0.4 } })
                  }
                  onLoad={imageLoaded}
                  width="100%"
                  src={product.thumbnail?.url}
                  className="rounded-xl"
                />
              </div>
            </figure>
            <div className="card-body bg-white">
              <h2 className="card-title">{product.name}
                <div className="badge mx-2 badge-secondary">NEW</div>
              </h2>
              <div className={styles.product.details}>
                <p className={styles.product.category}>{product.category?.name}</p>
                <p className={styles.product.price}>{priceDisplay}</p>
              </div>
            </div>
        </a>
      </Link>
    </li>
  );
};
