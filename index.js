const puppeteer = require('puppeteer');
const express = require('express');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const url = 'https://selfstudyhelp.com';

  // Launch a headless browser
  const browser = await puppeteer.launch({'headless':'new'});

  // Create a new page
  const page = await browser.newPage();

  try {
    // Navigate to the specified URL
    await page.goto(url);

    // Get the page content (HTML source code)
    const pageContent = await page.content();

    // Send the HTML source code as the response to the client
    res.send(pageContent);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  } finally {
    // Close the browser
    await browser.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
