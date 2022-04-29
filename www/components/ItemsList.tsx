import React from "react";
import { Item } from "../lib/graphql";
import ItemComp from "./Item";

type Props = {
  items: Partial<Item>[];
};

export default function ItemsList({ items = [] }: Props) {
  return (
    <div className="space-y-4">
      {items?.map((item, index) => (
        <ItemComp item={item} key={index} />
      ))}
    </div>
  );
}
