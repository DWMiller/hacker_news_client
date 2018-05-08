const endPoint = 'https://hacker-news.firebaseio.com/v0';

export const fetchStories = async (type = 'top') =>
  await fetch(`${endPoint}/${type}stories.json`).then(response =>
    response.clone().json()
  );

export const fetchItem = async (itemId = 1) =>
  await fetch(`${endPoint}/item/${itemId}.json`).then(response =>
    response.clone().json()
  );

export const fetchItems = async (itemIds = []) =>
  await Promise.all(itemIds.map(fetchItem));
