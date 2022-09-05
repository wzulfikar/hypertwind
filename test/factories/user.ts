import { Factory } from 'fishery';

type User = {
  id: string;
  name: string;
  address: {
    city: string;
    state: string;
    country: string;
  };
};

export const userFactory = Factory.define<User>(({ onCreate, sequence }) => {
  onCreate((user) => {
    console.log('TODO: create user in hasura', user);
    return user;
  });

  return {
    id: sequence.toString(),
    name: 'Rosa',
    address: { city: 'Austin', state: 'TX', country: 'USA' },
  };
});
