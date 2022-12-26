import { useEffect } from "react";

import { styles } from "@storybook-util";

import { HStack } from "@/ui/layout/HStack";

import { state, useSnap } from "./state";

export const Time = () => {
  const snap = useSnap();

  useEffect(() => {
    const i = setInterval(() => state.incTime(), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <HStack className="grid-cols-3">
      <div>Time:</div>
      <div>{snap.time}s</div>
    </HStack>
  );
};

export const Count = () => {
  const snap = useSnap();
  return (
    <HStack className="grid-cols-3">
      <div>Count:</div>
      <div>{snap.count}</div>
      <div>
        <button className={styles.button} onClick={() => state.incCount()}>
          Increment
        </button>
      </div>
    </HStack>
  );
};

export const User = () => {
  const snap = useSnap();
  return (
    <HStack className="grid-cols-3">
      <div>User:</div>
      <div>
        {snap.user ? `#${snap.user.id} ${snap.user.name}` : "(no user)"}
      </div>
      <div>
        <button className={styles.button} onClick={() => state.fetchUser()}>
          {snap.isFetching ? "Fetching.." : "Fetch user"}
        </button>
      </div>
    </HStack>
  );
};
