const endPoint = 'https://hacker-news.firebaseio.com/v0';

const config = {
  cache: 'force-cache',
  headers: {
    'cache-control': 'max-age=30',
  },
};

export const fetchStories = async (type = 'top') =>
  await fetch(`${endPoint}/${type}stories.json`, config).then(response =>
    response.clone().json()
  );

export const fetchItem = async (itemId = 1) =>
  await fetch(`${endPoint}/item/${itemId}.json`, config).then(response =>
    response.clone().json()
  );

export const fetchItems = async (itemIds = []) =>
  await Promise.all(itemIds.map(fetchItem));
