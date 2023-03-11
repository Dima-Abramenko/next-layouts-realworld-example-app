// TODO: Complete getTagFromFeedPath helper function
export const getTagFromFeedPath = (path: string | null): string | null => {
  if (path === null) {
    return null;
  }

  const [, prefix, tag] = path.split('/');

  if (prefix !== 'feed' || !tag) {
    return null;
  }

  if (tag === 'personal') {
    return null;
  }

  return tag;
};
