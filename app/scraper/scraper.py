from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import time

def scrape_data(url):
    """
    Scrapes the home page and about page of the given URL using Selenium.
    Args:
        url (str): The base URL of the website to scrape.
    Returns:
        dict: A dictionary with the scraped data from the home page and about page.
    """
    data = {
        'home_page': '',
        'about_page': 'No About Page Found'  # Default message if no about page is found
    }

    try:
        # Initialize Selenium WebDriver
        options = Options()
        options.add_argument('--headless')  # Run Chrome in headless mode
        options.add_argument('--disable-gpu')
        options.add_argument('--no-sandbox')
        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

        # Scrape the home page
        home_page_content = scrape_page(driver, url)
        if home_page_content:
            data['home_page'] = home_page_content

        # Try to find and scrape the about page
        about_page_url = find_about_page(driver, url)
        if about_page_url:
            about_page_content = scrape_page(driver, about_page_url)
            if about_page_content:
                data['about_page'] = about_page_content

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
        driver.get(url)
        time.sleep(3)  # Wait for the page to fully load
        soup = BeautifulSoup(driver.page_source, 'html.parser')

        # Extract text content from the page, excluding scripts and styles
        content = ' '.join([p.get_text(strip=True) for p in soup.find_all('p')])
        return content
    except Exception as e:
        print(f"Error scraping page {url}: {e}")
        return None

def find_about_page(driver, base_url):
    """
    Finds the URL of the 'About' page by searching for common patterns using Selenium.
    Args:
        driver (webdriver): Selenium WebDriver instance.
        base_url (str): The base URL of the website.
    Returns:
        str: The URL of the 'About' page, or None if not found.
    """
    common_about_paths = ['about', 'about-us', 'aboutus', 'who-we-are', 'our-story']
    try:
        driver.get(base_url)
        time.sleep(3)  # Wait for the page to fully load
        soup = BeautifulSoup(driver.page_source, 'html.parser')

        # Look for anchor tags that may link to the About page
        for a_tag in soup.find_all('a', href=True):
            href = a_tag['href'].lower()
            for path in common_about_paths:
                if path in href:
                    # Construct the full URL
                    return urljoin(base_url, href)
    except Exception as e:
        print(f"Error finding About page: {e}")
    return None


