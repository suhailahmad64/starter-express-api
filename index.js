const puppeteer = require('puppeteer');


async function fetchData(url) {
  // Launch a headless browser
  const browser = await puppeteer.launch({'headless':'new'});

  // Create a new page
  const page = await browser.newPage();

  try {
    // Navigate to the specified URL
    await page.goto(url);

    // Get the page content (HTML source code)
    const pageContent = await page.content();

    // Display the HTML source code
    console.log(pageContent);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    // Close the browser
    await browser.close();
  }
}

// Example usage
const url = 'https://amazon.com';
fetchData(url);
