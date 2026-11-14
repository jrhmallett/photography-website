import type { Photo } from './photos';

export interface Story {
  slug: string;
  title: string;
  introduction?: string;
  photos: Photo[];
}

// Add real projects here when ready. An empty list keeps Stories off the site.
export const stories: Story[] = [];