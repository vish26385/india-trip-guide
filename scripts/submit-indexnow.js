const INDEXNOW_KEY = "PASTE_YOUR_KEY_HERE";
const SITE_URL = "https://indiatripguide.com";

const urls = [
  `${SITE_URL}/`,
  `${SITE_URL}/destinations`,
  `${SITE_URL}/itineraries`,
  `${SITE_URL}/blog`,
  `${SITE_URL}/about`,
  `${SITE_URL}/contact`,
];

async function submitIndexNow() {
  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      host: "indiatripguide.com",
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  });

  console.log("Status:", response.status);
  console.log(await response.text());
}

submitIndexNow();