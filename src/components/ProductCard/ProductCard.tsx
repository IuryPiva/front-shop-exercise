import React, { useState } from "react";

import {
  Button,
  Card,
  CardContent,
  Tooltip,
  withStyles,
  Zoom,
} from "@material-ui/core";

import { Product } from "types/product";

import garlic from "assets/garlic.png";
import potatoes from "assets/potatoes.png";
import tomatoes from "assets/tomatoes.png";

const images = new Map([
  ["garlic", garlic],
  ["potatoes", potatoes],
  ["tomatoes", tomatoes],
]);

const LightTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: "white",
    color: "green",
    fontSize: 11,
  },
}))(Tooltip);

export const ProductCard: React.FunctionComponent<{
  product: Product;
  action?: "add" | "remove";
  onRemove?: () => any;
  onAdd?: () => any;
}> = ({ product, action, onRemove, onAdd }) => {
  const [openTooltip, setOpenTooltip] = useState(false);

  const handleTooltipClose = () => {
    setOpenTooltip(false);
  };

  const onAddHandler = () => {
    setOpenTooltip(true);

    setTimeout(handleTooltipClose, 1234);
    if (onAdd) onAdd();
  };

  const onRemoveHandler = () => {
    if (onRemove) onRemove();
  };

  return (
    <Card data-testid={`product-card-${product.id}`}>
      <CardContent className="flex">
        <div className="w-2/12">
          <img src={images.get(product.permalink)} alt={product.name} />
        </div>
        <div className="w-8/12 pr-4 flex flex-col gap-3">
          <div className="text-lg">
            {product.name}
            <span className="text-xs mx-4 text-gray-600">
              {product.unitToDisplay}
            </span>
            <span className="text-sm text-gray-600">
              {product.onHand > 0 && `x ${product.onHand}`}
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
          <div className="w-full mt-auto flex flex-row-reverse">
            {action === "add" && (
              <LightTooltip
                TransitionComponent={Zoom}
                placement="left"
                open={openTooltip}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="Added to cart!"
              >
                <Button
                  data-testid={`product-card-add-button-${product.id}`}
                  variant="contained"
                  className="capitalize bg-action text-gray-100"
                  onClick={onAddHandler}
                >
                  Add to cart
                </Button>
              </LightTooltip>
            )}
            {action === "remove" && (
              <Button
                variant="contained"
                className="capitalize bg-remove text-gray-100"
                onClick={onRemoveHandler}
              >
                Remove
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
