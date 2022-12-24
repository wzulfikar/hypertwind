import { proxy, useSnapshot } from "valtio";

import { resetState } from "@/helper/resetState";

type MaybeUser = { id: string; name: string } | undefined;

const initialValues = {
  time: 0,
  count: 0,
  user: undefined as MaybeUser,
  isFetching: false,
  incCount() {
    this.count++;
  },
  incTime() {
    this.time++;
  },
  async fetchUser() {
    this.isFetching = true;

    const randomId = Math.floor(Math.random() * 10) + 1; // Random int between 1 to 10
    return fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`)
      .then((res) => res.json())
      .then((json) => {
        this.user = json;
      })
      .finally(() => {
        this.isFetching = false;
      });
  },
  reset() {
    resetState(this, initialValues);
  },
};

export const state = proxy(initialValues);

export const useSnap = () => useSnapshot(state);
