// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  CreateBucketDocument,
  CreateBucketMutation,
  CreateItemDocument,
  CreateItemMutation,
  CreateItemMutationVariables,
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
  const { text } = JSON.parse(req.body);
  const bucketResult = await client
    .mutation<CreateItemMutation, CreateItemMutationVariables>(
      CreateItemDocument,
      {
        text,
      }
    )
    .toPromise();
  res.status(200).json({ name: "John Doe" });
}
