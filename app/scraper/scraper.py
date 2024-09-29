from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
import time

def scrape_data(url):
    """
    Scrapes the home page of the given URL using Selenium.
    Args:
        url (str): The base URL of the website to scrape.
    Returns:
        dict: A dictionary with the scraped data from the home page.
    """
    data = {
        'home_page': ''
    }

    try:
        print(f"Starting the scraping process for URL: {url}")

        # Initialize Selenium WebDriver
        options = Options()
        options.add_argument('--headless')  # Run Chrome in headless mode
        options.add_argument('--disable-gpu')
        options.add_argument('--no-sandbox')
        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

        # Scrape the home page
        print(f"Scraping home page: {url}")
        home_page_content = scrape_page(driver, url)
        if home_page_content:
            data['home_page'] = home_page_content
            print(f"Home page content successfully scraped. Length: {len(home_page_content)}")
        else:
            print(f"Failed to scrape home page for URL: {url}")

        driver.quit()

    except Exception as e:
        print(f"Error scraping the website: {e}")

    return data

def scrape_page(driver, url):
    """
    Scrapes the content of a single page using Selenium.
    Args:
        driver (webdriver): Selenium WebDriver instance.
        url (str): The URL of the page to scrape.
    Returns:
        str: The text content of the page.
    """
    try:
        print(f"Loading page: {url}")
        driver.get(url)
        time.sleep(3)  # Wait for the page to fully load
        soup = BeautifulSoup(driver.page_source, 'html.parser')

        # Extract text content from the page, excluding scripts and styles
        content = ' '.join([p.get_text(strip=True) for p in soup.find_all('p')])  # Only extract <p> tags
        print(f"Content scraped from {url}. Length of content: {len(content)}")
        return content if content else ''  # Ensure a string is returned
    except Exception as e:
        print(f"Error scraping page {url}: {e}")
        return ''  # Return an empty string in case of error
