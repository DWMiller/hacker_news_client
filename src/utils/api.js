const endPoint = "https://hacker-news.firebaseio.com/v0";

const CACHE_TIMEOUT = 1000 * 60 * 10 // 10 minutes
const itemCache = {};

export const fetchStories = async (type = "top") =>
  await fetch(`${endPoint}/${type}stories.json`).then(response =>
    response.clone().json()
  );

export const fetchItem = async (itemId = 1) => {
  if (itemCache.hasOwnProperty(itemId)) {
    const now = new Date().getTime();
    const then = itemCache[itemId].time;
    if (now < then + CACHE_TIMEOUT) {
      return itemCache[itemId].data;
    }
  }

  return await fetch(`${endPoint}/item/${itemId}.json`).then(async response => {
    const data = await response.clone().json();

    itemCache[itemId] = {
      data,
      time: new Date().getTime()
    };

    return data;
  });
};

export const fetchItems = async (itemIds = []) =>
  await Promise.all(itemIds.map(fetchItem));
