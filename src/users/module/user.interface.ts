export interface User {
  nickname: string;
  githubProfile: string;
  contributionsCount?: number;
  organizations?: Organization[];
  pullRequests?: PullRequest[];
}

interface Organization {
  login: string;
  avatarUrl: string;
  link: string;
}

interface PullRequest {
  title: string;
  issueUrl: string;
  repoName: string;
  body: string;
  createdAt: string;
}
