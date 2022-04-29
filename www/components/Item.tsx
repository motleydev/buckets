import React from "react";
import { Item } from "../lib/graphql";
import { useStore } from "../store";

type Props = {
  item: Partial<Item>;
};

export default function ItemComp({ item }: Props) {
  const { setDraggingItem } = useStore((store) => store);

  const handleOnDrag = (e: any, item: Partial<Item> | null) => {
    setDraggingItem(item);
  };

  return (
    <div
      draggable="true"
      onDragStart={(e) => {
        handleOnDrag(e, item);
      }}
      onDragEnd={(e) => {
        handleOnDrag(e, null);
      }}
      className="border-2 border-purple-300 hover:bg-white p-2 rounded-lg"
    >
      <p>{item?.text || item.id}</p>
    </div>
  );
}
