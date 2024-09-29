# hackmidwestbackend/app/routes.py
from flask import Blueprint, request, jsonify
from .scraper.scraper import scrape_data
from .openai_service.openai_service import get_detailed_summary
from .perplexity_service.perplexity import get_perplexity_responses

main = Blueprint('main', __name__)

@main.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    url = data.get('url')
    
    # Step 1: Scrape data from the URL
    scraped_data = scrape_data(url)
    """_summary_

    Returns:
        _type_: _description_
    """    
    # Step 2: Get summary from OpenAI
    summary = get_detailed_summary(scrape_data)
    #summary = "jjj"
    
    # Step 3: Get responses from Perplexity API
    responses = get_perplexity_responses(summary)
    
    return jsonify({
        'summary': summary,
        'responses': responses,
        'scraped_data': scraped_data
    })
