import React from "react";
import { useGetBucketSubscription } from "../lib/graphql";
import { useStore } from "../store";

import BucketList from "./BucketList";

type Props = {};

export default function Buckets({}: Props) {
  const [{ data }] = useGetBucketSubscription();

  const handleCreateBucket = async () => {
    await fetch("/api/createBucket");
  };

  return (
    <div className="bg-yellow-100 rounded-lg p-4 space-y-2">
      {data?.bucket && <BucketList buckets={data.bucket} />}
      <button
        onClick={handleCreateBucket}
        className="border-2 border-dashed border-yellow-300 rounded-lg p-2 hover:bg-yellow-300 w-full"
      >
        Add Bucket
      </button>
    </div>
  );
}
