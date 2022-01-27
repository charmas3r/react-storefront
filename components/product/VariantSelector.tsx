import clsx from "clsx";
import Link from "next/link";
import React from "react";

import { ProductDetailsFragment } from "@/saleor/api";

export interface VariantSelectorProps {
  product: ProductDetailsFragment;
  selectedVariantID?: string;
}

export const VariantSelector = ({
  product,
  selectedVariantID,
}: VariantSelectorProps) => {
  const variants = product.variants;
  if (!variants || variants.length === 1) {
    return null;
  }
  return (
    <div className="grid grid-cols-5 gap-3" data-theme="garden">
      {variants.map((variant) => {
        const isSelected = variant?.id === selectedVariantID;
        return (
          <Link
            key={variant?.name}
            href={{
              pathname: "/product/[slug]",
              query: { variant: variant?.id, slug: product.slug },
            }}
            replace
            shallow
          >
            <a
              className={clsx(
                "w-55 flex justify-center rounded-md p-3 font-semibold hover:bg-primary-focus shadow-md",
                isSelected && "border-2 border-primary bg-primary",
                !isSelected && "border-2 border-primary text-slate-400"
              )}
            >
              {variant?.quantityAvailable} in stock
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default VariantSelector;
