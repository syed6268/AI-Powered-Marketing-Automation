from flask import Blueprint, request, jsonify
from flask_cors import CORS
from .scraper.scraper import scrape_data
from .openai_service.openai_service import get_detailed_summary
from .perplexity_service.perplexity import get_perplexity_responses
from .openai_service.WrittenBlog import generate_blog 

main = Blueprint('main', __name__)
CORS(main)

@main.route('/analyze', methods=['POST'])
def analyze():
    # Step 1: Receive and print input data
    data = request.json
    url = data.get('url')
    print(f"URL received: {url}")
    url = str(url)
    print("Request received and URL processed")

    # Step 2: Scrape data from the URL
    try:
        scraped_data = scrape_data(url)

        # Debug: Verify the data type of 'scraped_data'
        print(f"Type of 'scraped_data': {type(scraped_data)}")

        # Debug: Verify the data type of 'scraped_data['home_page']'
        print(f"Type of 'scraped_data['home_page']': {type(scraped_data['home_page'])}")

        # Ensure no slicing happens, just print the full data
        print(f"Full scraped data from home page: {scraped_data['home_page']}")
    except Exception as e:
        print(f"Error during scraping: {e}")
        scraped_data = {'home_page': ''}  # Proceed with empty data if scraping fails

    # Step 3: Get summary from OpenAI
    try:
        print("Sending scraped data to OpenAI summary function...")
        summary = get_detailed_summary(scraped_data)  # Ensure summary function can handle full data
        print(f"Summary generated from OpenAI: {summary}")
    except Exception as e:
        print(f"Error during OpenAI summary generation: {e}")
        summary = "No summary available due to error"
        
    #step 4 get the written blog    
    try:
        print("Generating blog content from summary...")
        blog_content = generate_blog(summary)
       # blog_content=jsonify(blog_content)# Call the generate_blog function with the summary
        print(f"Blog content generated: {blog_content}")
    except Exception as e:
        print(f"Error during blog generation: {e}")
        blog_content = "No blog content available due to error"

    # Step 5: Get responses from Perplexity API
    try:
        print("Sending summary to Perplexity API...")
        responses = get_perplexity_responses(summary)  # Ensure Perplexity API function handles summary
        print(f"Perplexity API responses: {responses}")
    except Exception as e:
        print(f"Error during Perplexity API call: {e}")
        responses = "No responses available due to error"

    # Step 6: Return the results
    print("All steps completed successfully. Returning results.")
    return jsonify({
         #'summary': summary,
         'responses': responses,
         'generate_blog':blog_content
     })
    #return jsonify(responses)  # Directly return the Perplexity response
