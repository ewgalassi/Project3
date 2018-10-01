const metascraper = require('metascraper')([
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-title')(),
]);
const got = require('got');

const getMetadata = url => {
  const targetUrl = url;
  ; (async () => {
    const { body: html, url } = await got(targetUrl);
    const metadata = await metascraper({ html, url });
    console.log(metadata);
  })()
};

getMetadata("https://techcrunch.com/video-article/the-izotope-spire-wants-to-make-recording-easier-for-aspiring-artist")

module.exports = getMetadata;
