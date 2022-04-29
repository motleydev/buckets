import React from "react";
import { Bucket } from "../lib/graphql";
import BucketComp from "./Bucket";

type Props = {
  buckets: Partial<Bucket>[];
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
