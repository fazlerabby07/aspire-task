import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async findAllUsers() {
    try {
      const userListResponse = await fetch(
        'https://24pullrequests.com/users.json',
      );
      const userList = await userListResponse.json();

      return userList;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findOneUser(query: { username: string }) {
    try {
      const { username } = query;

      const userResponse = await fetch(
        `https://24pullrequests.com/users/${username}.json`,
      );
      const user = await userResponse.json();

      return user;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
