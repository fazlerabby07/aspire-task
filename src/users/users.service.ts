import { Injectable } from '@nestjs/common';
import { User } from './module/user.interface';
import fetch from 'node-fetch';

@Injectable()
export class UsersService {
  async findAllUsers(): Promise<User[]> {
    try {
      const userListResponse = await fetch(
        'https://24pullrequests.com/users.json',
      );
      const userList = await userListResponse.json();

      const users = userList.map((user) => {
        return {
          nickname: user.nickname,
          githubProfile: user.github_profile,
        };
      });

      return users;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findOneUser(query: { username: string }): Promise<User> {
    try {
      const { username } = query;

      const userResponse = await fetch(
        `https://24pullrequests.com/users/${username}.json`,
      );
      const user = await userResponse.json();

      const userInfo = {
        nickname: user.nickname,
        githubProfile: user.github_profile,
        contributionsCount: user.contributions_count,
        organizations: user.organisations,
        pullRequests: user.pull_requests,
      };

      return userInfo;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
