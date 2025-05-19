import { Avatar } from '@/components/client/Avatar';
import React from 'react';

const GITHUB_API = 'https://api.github.com/graphql';

const query = `
  query {
    viewer {
      avatarUrl
    }
  }
`;

async function fetchGitHubProfile() {
  const res = await fetch(GITHUB_API, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
    cache: 'no-store',
  });

  const json = await res.json();
  if (json.errors) throw new Error(`GitHub API error: ${JSON.stringify(json.errors)}`);
  return json.data.viewer;
}

export default async function GithubProfilePicture() {
  const user = await fetchGitHubProfile();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem auto' }}>
      <Avatar size={200} src={user.avatarUrl} />
    </div>
  );
}
