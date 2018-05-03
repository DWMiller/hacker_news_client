const endPoint = 'https://hacker-news.firebaseio.com/v0';

export const fetchTopStories = async () =>
  await fetch(`${endPoint}/topstories.json`).then(response => response.json());

export const fetchItem = async (itemId = 1) =>
  await fetch(`${endPoint}/item/${itemId}.json`).then(response =>
    response.json()
  );

export const fetchItems = async (itemIds = []) =>
  await Promise.all(itemIds.map(fetchItem));
