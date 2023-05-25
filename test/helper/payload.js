const { faker } = require('@faker-js/faker');
import { gender, activity } from '../../config/common';

export const User = {
  name: faker.name.firstName(),
  email: faker.internet.email(),
  gender: gender,
  status: activity,
};

export const Post = {
  user_id: null,
  title: faker.name.firstName(),
  body: faker.lorem.paragraph(),
};

export const DataChange = {
  gender: gender,
  status: activity,
};
