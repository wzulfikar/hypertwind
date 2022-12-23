import { Result, Ok, ok, defineErrors } from "@/helper/result"
import { useCallback, useState } from 'react';

type User = {
  id: number;
  name: string;
  username: string;
}
const error = defineErrors({
  UNKNOWN: 'unknown error'
})
type UserResult = Result<Ok<{ user: User }>, ReturnType<typeof error>>

const _fetchUser = (userId: string): Promise<UserResult> => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(json => ok({ user: json }))
    .catch(err => error('UNKNOWN', err.message))
}

export const useFetchUser = () => {
  const [user, setUser] = useState<User | undefined>()
  const fetchUser = useCallback((userId: string) => {
    _fetchUser(userId).then(result => {
      if (result.ok) {
        setUser(result.user)
      } else {
        console.log("error:", result.error)
        alert("error: " + result.error.message)
      }
    })
  }, [])

  return [user, fetchUser] as const
}
