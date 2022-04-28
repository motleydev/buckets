// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
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
  // const userResult = await client
  //     .mutation<InsertBucketItemMutation, InsertBucketItemMutationVariables>(CreateUser, {
  //       item_id: 1,
  //       bucket_id: 1
  //     })
  //     .toPromise();
  res.status(200).json({ name: "John Doe" });
}
