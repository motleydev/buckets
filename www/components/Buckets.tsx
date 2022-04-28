import React from "react";
import { Bucket, useGetBucketSubscription } from "../lib/graphql";
import { DRAGGING_STATE, useStore } from "../store";

type Props = {};

export default function Buckets({}: Props) {
  const [{ data }] = useGetBucketSubscription();
  const { setReceivingBucket, draggingState } = useStore((store) => store);

  const handleOnDragEnter = (e: any, bucket: Partial<Bucket>) => {
    e.preventDefault();
    setReceivingBucket(bucket);
  };

  const handleOnDragLeave = (e: any) => {
    e.preventDefault();
    setReceivingBucket(null);
  };

  return (
    <div className="bg-yellow-100 rounded-lg p-4 space-y-2">
      {data?.bucket.map((bucket, i) => {
        return (
          <div key={i} className="bg bg-yellow-300 rounded-lg p-2 relative">
            {draggingState === DRAGGING_STATE.DRAGGING && (
              <div className="absolute left-0 top-0 w-full h-full rounded-lg p-2 bg-yellow-300">
                <div
                  onDragEnterCapture={(e) => {
                    handleOnDragEnter(e, bucket as Bucket);
                  }}
                  onDragLeaveCapture={(e) => {
                    handleOnDragLeave(e);
                  }}
                  className=" border-2 border-dashed border-yellow-600 px-2 rounded-lg text-center"
                >
                  <p className="inline">Drop Here</p>
                </div>
              </div>
            )}

            {bucket?.items.map((item, itemIndex) => {
              return <div key={itemIndex}>{item.item.id}</div>;
            })}
          </div>
        );
      })}
      <button className="border-2 border-dashed border-yellow-300 rounded-lg p-2 hover:bg-yellow-300 w-full">
        Add Bucket
      </button>
    </div>
  );
}
