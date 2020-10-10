import {
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import React from "react";
import { Product } from "types/product";

import garlic from "assets/garlic.png";

export const ProductCard: React.FunctionComponent<{ product: Product }> = ({
  product,
}) => (
  <Card>
    <CardContent className="flex">
      <div className="w-1/12">
        <img src={garlic} />
      </div>
      <div className="w-8/12 px-4 flex flex-col gap-3">
        <div className="text-lg">
          {product.name}
          <span className="text-xs ml-4 text-gray-600">
            {product.unitToDisplay}
          </span>
        </div>
        <span className="text-sm text-gray-600">{product.description}</span>
        <span className="text-sm">
          Price:<span className="text-gray-600 ml-4">€ {product.price}</span>
        </span>
      </div>
      <div className="w-1/4 flex flex-col  items-center gap-12">
        <div className="w-full flex flex-row-reverse">
          <span className="rounded-full bg-green-500 px-2 uppercase text-gray-100 text-4xs">
            {product.taxon.name}
          </span>
        </div>
        <div className="w-full flex flex-row-reverse">
          <Button variant="contained" className="capitalize bg-action">
            Add to cart
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);
