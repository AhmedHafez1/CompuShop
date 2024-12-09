import { hashSync } from 'bcryptjs';

const users = [
  {
    name: 'Yahia',
    email: 'yahia@ghaza.com',
    password: hashSync('hafez', 10),
    isAdmin: true,
  },
  {
    name: 'Ismail',
    email: 'ismail@ghaza.com',
    password: hashSync('hafez', 10),
    isAdmin: true,
  },
  {
    name: 'A.Hafez',
    email: 'hafez@ghaza.com',
    password: hashSync('hafez', 10),
    isAdmin: false,
  },
  {
    name: 'Omar',
    email: 'omar@ghaza.com',
    password: hashSync('hafez', 10),
    isAdmin: false,
  },
];

export default users;
