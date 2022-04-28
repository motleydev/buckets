// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  CreateBucketDocument,
  CreateBucketMutation,
  InsertBucketItemMutation,
  InsertBucketItemMutationVariables,
} from "../../lib/graphql";
import client from "./_client";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const bucketResult = await client
    .mutation<CreateBucketMutation>(CreateBucketDocument)
    .toPromise();
  res.status(200).json({ name: "John Doe" });
}
