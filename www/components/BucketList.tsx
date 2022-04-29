import React from "react";
import { GetBucketSubscription } from "../lib/graphql";
import BucketComp from "./Bucket";

type Props = {
  buckets: GetBucketSubscription["bucket"];
};

export default function BucketList({ buckets = [] }: Props) {
  return (
    <>
      {buckets.map((bucket, i) => {
        return <BucketComp key={i} bucket={bucket} />;
      })}
    </>
  );
}
