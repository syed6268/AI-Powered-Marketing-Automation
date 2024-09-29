

import os
import requests
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

# Set your Perplexity AI API key from environment variables
YOUR_API_KEY = os.getenv("PERPLEXITY_API_KEY")

# Define the API endpoint
url = "https://api.perplexity.ai/chat/completions"

# Function to get responses from Perplexity based on the provided summary
def get_perplexity_responses(summary):
    """
    This function takes a summary string as input and uses it in the Perplexity API request payload.

    Args:
        summary (str): The summary text which will be passed to the Perplexity API.

    Returns:
        dict: JSON response from the Perplexity API.
    """

    # Construct the dynamic user message with the provided summary
    user_message = (
        f"{summary} "
        "Generate a JSON object containing information in six categories related to domain and location provided: "
        "Influencers, Blog Newsletter Recommendations. "
        "For Influencers, provide three real influencer's name, location, and social Instagram handle full link. "
        "Make sure the links work and point to the exact person. "
        "For Blog Newsletter Recommendations, give me three blogs that talk about the same objective, where I can market Grad Stem. "
        "Give their name, URL, and contact information. "
        "Platforms to run ads, give three platforms where I can market Grad Stem so that it reaches the target audience with URLs and a description "
        "about how the platform can help your specific company. "
        "Find three companies that can assist Grad Stem in enhancing its operational efficiency. Grad Stem is looking for service providers that specialize "
        "in helping them operate efficiently. Your recommendations should be mindful of Grad Stem's valuation and its affordability for these services. "
        "Marketing tips tailored to Grad Stem, give me three. Only JSON, no other things."
    )

    # Payload data for the request
    payload = {
        "model": "llama-3.1-sonar-large-128k-online",
        "messages": [
            {
                "role": "system",
                "content": "You are a helpful assistant that generates complete and well-formatted JSON responses. Be precise and concise, ensuring the JSON object is fully valid and complete."
            },
            {
                "role": "user",
                "content": user_message  # Use the dynamic message
            }
        ],
        "max_tokens": 1000,  # Increase token limit to allow a complete response
        "temperature": 0.5,  # Lower the temperature for more focused output
        "top_p": 0.9,
        "return_citations": True,
        "search_domain_filter": ["perplexity.ai"],
        "return_images": False,
        "return_related_questions": False,
        "search_recency_filter": "month",
        "top_k": 0,
        "stream": False,
        "presence_penalty": 0,
        "frequency_penalty": 1
    }

    # Set the request headers
    headers = {
        "Authorization": f"Bearer {YOUR_API_KEY}",
        "Content-Type": "application/json"
    }

    # Make the POST request
    try:
        response = requests.post(url, json=payload, headers=headers)

        # Check for errors and return the response
        if response.status_code == 200:
            response_json = response.json()
            return response_json['choices'][0]['message']['content']  # Return just the content
        else:
            return {"error": f"Error {response.status_code}: {response.text}"}  # Return error details

    except Exception as e:
        return {"error": str(e)}

# Run the script directly
if __name__ == "__main__":
    # Example summary to test the API request
    test_summary = (
        "The domain is education. Valuation is 1000$. The location is USA. "
        "This is my company Grad Stem that helps international students in the USA to find jobs. "
        "It has an AI personalized resume feature that tailors the resume based on the job description."
    )

    # Call the function and print the response
    result = get_perplexity_responses(test_summary)
    print(result)

