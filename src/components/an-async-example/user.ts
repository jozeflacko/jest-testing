// user.js
import request from './request';

interface User  {
    name: string;
}

export function getUserName(userID: number) {
  return request('/users/' + userID).then((user: User) => user.name);
}