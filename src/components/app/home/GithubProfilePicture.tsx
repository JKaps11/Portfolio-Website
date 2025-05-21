// Copyright (c) 2025 Joshua Kaplan – Licensed under MIT
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
    <Avatar
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '10px solid #fff',
        // boxShadow: '0 0 20px rgba(255, 255, 255, 0.6)',
        borderRadius: '50%',
        width: '25rem',
        height: '25rem',
        maxWidth: '25rem',
        maxHeight: '25rem',
        minHeight: '5rem',
        minWidth: '5rem',
        overflow: 'hidden',
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
        transform: 'scale(1.02)',
        transition: 'all 0.3s ease',
      }}
      src={user.avatarUrl}
    />
  );
}
