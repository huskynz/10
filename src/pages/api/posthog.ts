// src/posthog.ts
import { PostHog } from 'posthog-node';

let posthogClient: PostHog | null = null;

export default function PostHogClient(): PostHog {
  if (!posthogClient) {
    posthogClient = new PostHog('phc_Y4kGHU5J5btw0tP4ya10FbKXKQdm9RB1LeB6Df4KW0Q', {
      host: 'https://eu.i.posthog.com',
    });
  }
  return posthogClient;
}