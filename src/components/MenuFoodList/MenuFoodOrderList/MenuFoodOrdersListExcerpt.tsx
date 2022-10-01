import { ICartItem } from "common/types/cart.type";
import CloseSolid from "components/UI/Icons/CloseSolid";
import MinusSolid from "components/UI/Icons/MinusSolid";
import PlusSolid from "components/UI/Icons/PlusSolid";
import PriceWithSymbol from "components/UI/Templates/PriceWithSymbol";
import React, { useCallback, useEffect, useState } from "react";
import {
  addCountToCartItem,
  removeCartItem,
  substractCountOfCartItem,
  updateCartItemTotalPrice,
} from "store/slices/cartSlice";
import { useAppDispatch } from "store/store";

interface MenuFoodOrdersListExcerptProps {
  data: ICartItem;
}

const MenuFoodOrdersListExcerpt = ({
  data,
}: MenuFoodOrdersListExcerptProps) => {
  const dispatch = useAppDispatch();

  const [foodCount, setFoodCount] = useState(data.count);
  const [totalPrice, setTotalPrice] = useState(data.totalPrice);

  useEffect(() => {
    setTotalPrice(foodCount * data.menuFood.price);
    dispatch(updateCartItemTotalPrice(data));
  }, [data, data.menuFood.price, dispatch, foodCount]);

  const handleAddCount = useCallback(() => {
    setFoodCount(prev => prev + 1);
    dispatch(addCountToCartItem(data));
  }, [data, dispatch]);

  const handleSubtractCount = useCallback(() => {
    if (foodCount === 1) {
      dispatch(removeCartItem(data));
    } else {
      setFoodCount(prev => prev - 1);
      dispatch(substractCountOfCartItem(data));
    }
  }, [data, dispatch, foodCount]);

  return (
    <div className="w-full bg-gray-100 py-2 px-3 rounded-lg">
      <div className="flex items-center justify-between gap-x-1 gap-y-1 flex-wrap">
        <div className="max-w-[80%] flex items-center gap-3">
          <CloseSolid className="w-5 h-5" />

          <div>
            <h1 className="font-semibold text-lg truncate overflow-x-hidden">
              {data.menuFood.name}
            </h1>
            <PriceWithSymbol price={totalPrice} />
          </div>
        </div>

        <div className="flex pl-8 items-center gap-x-5 bg-gray-100 rounded-xl">
          <button
            onClick={handleSubtractCount}
            className="rounded-md bg-gray-100 p-1"
          >
            <MinusSolid className="w-3 h-3 " />
          </button>
          <p>{foodCount}</p>
          <button
            onClick={handleAddCount}
            className="rounded-md bg-gray-100 p-1"
          >
            <PlusSolid className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuFoodOrdersListExcerpt;
