import React from "react";
import { Item, useGetItemsQuery } from "../lib/graphql";
import { useStore } from "../store";

type Props = {};

export default function Items({}: Props) {
  const [{ data }] = useGetItemsQuery();

  const { draggedItem, receivingBucket, setDraggingItem, addToBucket } =
    useStore((store) => store);

  const handleOnDrag = (e: any, item: Partial<Item>) => {
    setDraggingItem(item);
  };

  const handleOnDrop = (e: any) => {
    if (receivingBucket) {
      addToBucket();
      setDraggingItem(null);
    } else {
      setDraggingItem(null);
    }
  };

  return (
    <div className="bg-purple-100 rounded-lg p-4 grid grid-cols-12">
      {data?.item.map((item, index) => {
        return (
          <div
            draggable="true"
            onDragStart={(e) => {
              handleOnDrag(e, item);
            }}
            onDragEnd={(e) => {
              handleOnDrop(e);
            }}
            className="border-2 border-purple-300 bg-white p-2 rounded-lg h-12"
            key={index}
          >
            {item?.id}
          </div>
        );
      })}
    </div>
  );
}
