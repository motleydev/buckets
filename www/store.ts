import create from "zustand";
import { client } from "./lib/urql";

export enum DRAGGING_STATE {
  DRAGGING = "DRAGGING",
  NOT_DRAGGING = "NOT_DRAGGING",
}

import { Item, Bucket_Item, Bucket } from "./lib/graphql";

type Maybe<T> = T | null | undefined;
interface GameState {
  draggedItem: Maybe<Partial<Item>>;
  receivingBucket: Maybe<Partial<Bucket>>;
  draggingState: DRAGGING_STATE;
  setDraggingItem: (item: Maybe<Partial<Item>>) => void;
  setReceivingBucket: (bucket: Maybe<Partial<Bucket>>) => void;
  addItem: (item: Maybe<Partial<Item>>) => void;
  addToBucket: () => void;
  removeFromBucket: (bucket_item: Maybe<Partial<Bucket_Item>>) => void;
  removeItem: (item: Maybe<Partial<Item>>) => void;
}

const useStore = create<GameState>()((set, get) => ({
  draggedItem: null,
  receivingBucket: null,
  draggingState: DRAGGING_STATE.NOT_DRAGGING,
  setDraggingItem: (item) => {
    set({
      draggedItem: item,
      draggingState: item
        ? DRAGGING_STATE.DRAGGING
        : DRAGGING_STATE.NOT_DRAGGING,
    });
  },
  setReceivingBucket: (bucket) => {
    set({ receivingBucket: bucket });
  },
  addItem: (item) => {
    //   set({ gameStatus: status });
  },
  addToBucket: async () => {
    await fetch("/api/addBucketItem", {
      method: "POST",
      body: JSON.stringify({
        item_id: get().draggedItem?.id,
        bucket_id: get().receivingBucket?.id,
      }),
    });
  },
  removeFromBucket: (bucket_item) => {
    //   set({ gameStatus: status });
  },
  removeItem: (item) => {
    //   set({ gameStatus: status });
  },
  // setLatestGame: () => {
  //   client
  //     .query<GetLatestGameQuery>(GetLatestGameDocument)
  //     .toPromise()
  //     .then((d) => {
  //       set({ latestGame: d.data?.game[0] });
  //     });
  // },
  // setUserGame: (userGame) => set({ userGame }),
  // setToken: () => {
  //   client
  //     .mutation<SignupMutation, SignupMutationVariables>(SignupDocument)
  //     .toPromise()
  //     .then((d) => {
  //       set({ token: d.data?.signup?.token });
  //       client
  //         .mutation<CreateGameMutation, CreateGameMutationVariables>(
  //           CreateGameDocument,
  //           {
  //             game_id: get().latestGame?.id,
  //           }
  //         )
  //         .toPromise()
  //         .then((d) => {
  //           get().setUserGame(d.data?.insert_user_game_one);
  //         });
  //     })
  //     .catch((e) => console.log(e));
  // },
}));

export { useStore };
