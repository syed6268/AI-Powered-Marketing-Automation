# import os
# import requests
# from dotenv import load_dotenv

# # Load environment variables from the .env file
# load_dotenv()

# # Set your Perplexity AI API key from environment variables
# YOUR_API_KEY = os.getenv("PERPLEXITY_API_KEY")

# # Define the API endpoint
# url = "https://api.perplexity.ai/chat/completions"

# # Payload data for the request
# payload = {
#     "model": "llama-3.1-sonar-large-128k-online",
#     "messages": [
#         {
#             "role": "system",
#             "content": "You are a helpful assistant that generates complete and well-formatted JSON responses. Be precise and concise, ensuring the JSON object is fully valid and complete."
#         },
#         {
#             "role": "user",
#             "content": (
#             #     "Your task is to generate a JSON object containing influencers' information for the company Grad Stem, which helps international students in the USA find jobs through an AI personalized resume feature tailored to job descriptions. "
#             # "Please create a JSON object that includes three real influencers who have at least 20,000 followers and could effectively promote Grad Stem. For each influencer, include their name, location, and the full Instagram handle link. "
#             # "Ensure that the output is well-formatted, and keep in mind the importance of providing influencers who have a relevant audience and a genuine interest in educational services for international students."
#             "the domain is education. valuation is 1000$ the location is usa. this is my company grad stem that helps international students in usa to find jobs, it has ai personalized resume feature that tailor your resume based on job description"
#             "Generate a JSON object containing information in six categories related to domain and location provided: Influencers, Blog Newsletter Recommendations"
#                 "For Influencers, provide three real influencer's name, location, and social instagram handle full link. make sure the links work and point to the exact person "
#                 "For Blog Newsletter Recommendations, give me three blogs that talks about the same objective, where i can market grad stem. Give there name, URL, and contact information. "
#                 "Platforms to run ads, give three platforms where i can market gradstem so that it reaches the target audience with urls and description about how the platform can help your specific company "
#                 "Your task is to find three companies that can assist Gradstem in enhancing its operational efficiency. Gradstem is looking for service providers that specialize in helping them operate effiicenty. Your recommendations should be mindful of Gradstem's valuation and its affordability for these services."
#                 "Marketing tips, tailored to gradstem, give me three "
#                 "only json no other things"
#             )
#         }
#     ],
#     "max_tokens": 1000,  # Increase token limit to allow a complete response
#     "temperature": 0.5,  # Lower the temperature for more focused output
#     "top_p": 0.9,
#     "return_citations": True,
#     "search_domain_filter": ["perplexity.ai"],
#     "return_images": False,
#     "return_related_questions": False,
#     "search_recency_filter": "month",
#     "top_k": 0,
#     "stream": False,
#     "presence_penalty": 0,
#     "frequency_penalty": 1
# }

# # Set the request headers
# headers = {
#     "Authorization": f"Bearer {YOUR_API_KEY}",
#     "Content-Type": "application/json"
# }

# # Make the POST request
# response = requests.post(url, json=payload, headers=headers)

# # Check for errors and print the response
# if response.status_code == 200:
#     # Print the JSON response or parse it
#     response_json = response.json()
#     print(response_json['choices'][0]['message']['content'])  # Print just the content
# else:
#     print(f"Error {response.status_code}: {response.text}")  # Print error details if the request fails




# import os
# import requests
# from dotenv import load_dotenv

# # Load environment variables from the .env file
# load_dotenv()

# # Set your Perplexity AI API key from environment variables
# YOUR_API_KEY = os.getenv("PERPLEXITY_API_KEY")

# # Define the API endpoint
# url = "https://api.perplexity.ai/chat/completions"

# # Function to get responses from Perplexity based on the provided summary
# def get_perplexit_responses(summary):
#     """
#     This function takes a summary string as input and uses it in the Perplexity API request payload.

#     Args:
#         summary (str): The summary text which will be passed to the Perplexity API.

#     Returns:
#         dict: JSON response from the Perplexity API.
#     """

#     # Construct the dynamic user message with the provided summary
#     user_message = (
#         f"{summary} "
#         "Generate a JSON object containing information in six categories related to domain and location provided: "
#         "Influencers, Blog Newsletter Recommendations. "
#         "For Influencers, provide three real influencer's name, location, and social Instagram handle full link. "
#         "Make sure the links work and point to the exact person. "
#         "For Blog Newsletter Recommendations, give me three blogs that talk about the same objective, where I can market Grad Stem. "
#         "Give their name, URL, and contact information. "
#         "Platforms to run ads, give three platforms where I can market Grad Stem so that it reaches the target audience with URLs and a description "
#         "about how the platform can help your specific company. "
#         "Find three companies that can assist Grad Stem in enhancing its operational efficiency. Grad Stem is looking for service providers that specialize "
#         "in helping them operate efficiently. Your recommendations should be mindful of Grad Stem's valuation and its affordability for these services. "
#         "Marketing tips tailored to Grad Stem, give me three. Only JSON, no other things."
#     )

#     # Payload data for the request
#     payload = {
#         "model": "llama-3.1-sonar-large-128k-online",
#         "messages": [
#             {
#                 "role": "system",
#                 "content": "You are a helpful assistant that generates complete and well-formatted JSON responses. Be precise and concise, ensuring the JSON object is fully valid and complete."
#             },
#             {
#                 "role": "user",
#                 "content": user_message  # Use the dynamic message
#             }
#         ],
#         "max_tokens": 1000,  # Increase token limit to allow a complete response
#         "temperature": 0.5,  # Lower the temperature for more focused output
#         "top_p": 0.9,
#         "return_citations": True,
#         "search_domain_filter": ["perplexity.ai"],
#         "return_images": False,
#         "return_related_questions": False,
#         "search_recency_filter": "month",
#         "top_k": 0,
#         "stream": False,
#         "presence_penalty": 0,
#         "frequency_penalty": 1
#     }

#     # Set the request headers
#     headers = {
#         "Authorization": f"Bearer {YOUR_API_KEY}",
#         "Content-Type": "application/json"
#     }

#     # Make the POST request
#     try:
#         response = requests.post(url, json=payload, headers=headers)

#         # Check for errors and return the response
#         if response.status_code == 200:
#             response_json = response.json()
#             return response_json['choices'][0]['message']['content']  # Return just the content
#         else:
#             return {"error": f"Error {response.status_code}: {response.text}"}  # Return error details

#     except Exception as e:
#         return {"error": str(e)}

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
        "For Influencers, provide three real influencer's name, location, and social Instagram handle full link. the keys should be name, location, social  "
        "Make sure the links work and point to the exact person. "
        "For Blog Newsletter Recommendations, give me three blogs that talk about the same objective, where I can market Grad Stem. "
        "Give their name, URL, and contact information. the keys should be name, url, contact "
        "Platforms to run ads, give three platforms where I can market Grad Stem so that it reaches the target audience with URLs and a description "
        "about how the platform can help your specific company.the keys should be name, url, description "
        "Find three companies that can assist Grad Stem in enhancing its operational efficiency. Grad Stem is looking for service providers that specialize "
        "in helping them operate efficiently. Your recommendations should be mindful of Grad Stem's valuation and its affordability for these services. "
        "Marketing tips tailored to Grad Stem, give me three. Only JSON, no other things."
        '''{
  "Influencers": [
    {
      "name": "",
      "location": "",
      "social": ""
    },
    {
      "name": "",
      "location": "",
      "social": ""
    },
    {
      "name": "",
      "location": "",
      "social": ""
    }
  ],
  "Blogs": [
    {
      "name": "",
      "url": "",
      "contact": ""
    },
    {
      "name": "",
      "url": "",
      "contact": ""
    },
    {
      "name": "",
      "url": "",
      "contact": ""
    }
  ],
  "Platformads": [
    {
      "name": "",
      "url": "",
      "description": ""
    },
    {
      "name": "",
      "url": "",
      "description": ""
    },
    {
      "name": "",
      "url": "",
      "description": ""
    }
  ],
  "Operationalsupport": [
    {
      "name": "",
      "url": "",
      "description": ""
    },
    {
      "name": "",
      "url": "",
      "description": ""
    },
    {
      "name": "",
      "url": "",
      "description": ""
    }
  ],
  "Marketingtips": [
    {
      "tip": "",
      "description": ""
    },
    {
      "tip": "",
      "description": ""
    },
    {
      "tip": "",
      "description": ""
    }
  ]
}
'''
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
