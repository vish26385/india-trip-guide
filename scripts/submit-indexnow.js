// const INDEXNOW_KEY = "3580cb866a5e4de0b4ca4ba549190033";
// const SITE_URL = "https://indiatripguide.com";

// const urls = [
//   `${SITE_URL}/`,
//   `${SITE_URL}/destinations`,
//   `${SITE_URL}/itineraries`,
//   `${SITE_URL}/blog`,
//   `${SITE_URL}/about`,
//   `${SITE_URL}/contact`,
// ];

// async function submitIndexNow() {
//   const response = await fetch("https://api.indexnow.org/indexnow", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//     },
//     body: JSON.stringify({
//       host: "indiatripguide.com",
//       key: INDEXNOW_KEY,
//       keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
//       urlList: urls,
//     }),
//   });

//   console.log("Status:", response.status);
//   console.log(await response.text());
// }

// submitIndexNow();

const INDEXNOW_KEY = "3580cb866a5e4de0b4ca4ba549190033";
const SITE_URL = "https://www.indiatripguide.com";
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

function extractUrlsFromSitemap(xml) {
  const urls = [];
  const regex = /<loc>(.*?)<\/loc>/g;

  let match;
  while ((match = regex.exec(xml)) !== null) {
    urls.push(match[1].trim());
  }

  return urls;
}

async function submitIndexNow() {
  try {
    const sitemapResponse = await fetch(SITEMAP_URL);

    if (!sitemapResponse.ok) {
      throw new Error(`Failed to fetch sitemap: ${sitemapResponse.status}`);
    }

    const sitemapXml = await sitemapResponse.text();
    const urls = extractUrlsFromSitemap(sitemapXml);

    if (urls.length === 0) {
      throw new Error("No URLs found in sitemap.xml");
    }

    console.log(`Found ${urls.length} URLs from sitemap.`);

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        host: "www.indiatripguide.com",
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });

    console.log("Status:", response.status);
    console.log(await response.text());
  } catch (error) {
    console.error("IndexNow submission failed:");
    console.error(error.message);
    process.exit(1);
  }
}

submitIndexNow();