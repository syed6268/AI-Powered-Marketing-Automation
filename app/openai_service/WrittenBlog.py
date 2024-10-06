import openai
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Set the OpenAI API key from the environment variable
openai.api_key = os.getenv("OPENAI_API_KEY")

# Function to generate 3 blog posts using OpenAI's GPT-3.5 Turbo
def generate_blog(summary):
    """
    This function generates 3 blog posts based on the provided summary using OpenAI's GPT-3.5 Turbo.

    Args:
        summary (str): The summary text to be used for generating blog posts.

    Returns:
        str: The generated blog posts content.
    """
    try:
        # Prepare the messages for GPT-3.5 Turbo to generate 3 different blog posts
        messages = [
            {"role": "system", "content": "You are a helpful assistant that writes well-structured blog posts."},
            {"role": "user", "content": (
                f"Using the following summary, generate three separate detailed blog posts. "
                f"Each blog post should have a unique title, introduction, body, and conclusion:\n\n"
                f"Summary: {summary}\n\n"
                f"1. Blog Post 1:\n\n"
                f"2. Blog Post 2:\n\n"
                f"3. Blog Post 3:\n\n"
            )}
        ]

        # Make the API call to OpenAI to generate the blog content
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  # Specify the new GPT model
            messages=messages,
            max_tokens=1500,  # Adjust the token limit based on how long you want each blog post to be
            temperature=0.7,  # Adjust for creativity
        )

        # Extract the generated text from the API response
        blog_content = response.choices[0].message['content'].strip()
        return blog_content  # Return the generated blog content

    except Exception as e:
        print(f"Error generating blog content: {e}")
        return "No blog content available due to an error."
