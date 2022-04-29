import React from "react";
import { useGetItemsSubscriptionSubscription } from "../lib/graphql";
import ItemsList from "./ItemsList";
import ItemInput from "./ItemInput";

type Props = {};

export default function Items({}: Props) {
  const [{ data }] = useGetItemsSubscriptionSubscription();

  return (
    <div className="bg-purple-100 rounded-lg p-4 space-y-4">
      {data?.item && <ItemsList items={data.item} />}
      <ItemInput />
    </div>
  );
}
