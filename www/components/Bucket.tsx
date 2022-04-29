import React from "react";
import { DRAGGING_STATE, useStore } from "../store";
import { Bucket, GetBucketSubscription } from "../lib/graphql";

type Props = {
  bucket: GetBucketSubscription["bucket"][number];
};

export default function BucketComp({ bucket }: Props) {
  const {
    setReceivingBucket,
    draggingState,
    receivingBucket,
    addToBucket,
    setDraggingItem,
  } = useStore((store) => store);

  const handleOnDragEnter = (e: any, bucket: Partial<Bucket>) => {
    e.preventDefault();
    setReceivingBucket(bucket);
  };

  const handleOnDragLeave = (e: any) => {
    e.preventDefault();
    setReceivingBucket(null);
  };

  const handleOnDrop = (e: any) => {
    e.preventDefault();
    if (receivingBucket) {
      addToBucket();
      setDraggingItem(null);
    } else {
      console.log("test");
      setDraggingItem(null);
    }
  };

  return (
    <div className=" bg-yellow-300 rounded-lg  relative flex gap-2 p-3">
      {draggingState === DRAGGING_STATE.DRAGGING && (
        <div className="absolute left-0 top-0 right-0 bottom-0 rounded-lg p-2 bg-yellow-300">
          <div
            onDragEnterCapture={(e) => {
              handleOnDragEnter(e, bucket as Bucket);
            }}
            onDropCapture={handleOnDrop}
            onDragOver={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
            onDragLeaveCapture={handleOnDragLeave}
            className=" border-2 border-dashed border-yellow-600 px-2 rounded-lg text-center"
          >
            <p className="inline">Drop Here</p>
          </div>
        </div>
      )}
      {bucket?.items?.length === 0 && (
        <div className="border-2 border-dashed border-yellow-500 px-2 rounded-lg">
          <p className="text-yellow-500">Add an item</p>
        </div>
      )}
      {bucket?.items?.map((item, itemIndex) => {
        return (
          <div className="bg-yellow-500 p-2 rounded-lg" key={itemIndex}>
            {item.item.text}
          </div>
        );
      })}
    </div>
  );
}
