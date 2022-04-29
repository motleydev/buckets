// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  InsertBucketItemDocument,
  InsertBucketItemMutation,
  InsertBucketItemMutationVariables,
} from "../../lib/graphql";
import client from "./_client";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { item_id, bucket_id } = JSON.parse(req.body);

  try {
    const addToBucketResponse = await client
      .mutation<InsertBucketItemMutation, InsertBucketItemMutationVariables>(
        InsertBucketItemDocument,
        {
          item_id,
          bucket_id,
        }
      )
      .toPromise();

    if (addToBucketResponse.error) {
      console.log(addToBucketResponse.error);
    }
  } catch (e) {
    console.log(e);
  }

  res.status(200).json({ message: "ok" });
}
