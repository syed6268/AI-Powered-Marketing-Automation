'''# hackmidwestbackend/app/openai_service/openai_service.py

import openai
import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

# Set your OpenAI API key from environment variables
openai.api_key = os.getenv("OPENAI_API_KEY")

def get_summary(text):
    """
    Generates a summary of the given text using the OpenAI API.
    
    Args:
        text (str): The text to be summarized.
    
    Returns:
        str: The generated summary of the text.
    """
    try:
        # Use the ChatCompletion endpoint for the gpt-3.5-turbo model
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant that provides concise summaries like what does company do."},
                {"role": "user", "content": f"Please provide a concise summary of the following text:\n{text}"}
            ],
            max_tokens=150,
            temperature=0.7
        )

        # Extract the summary from the response
        summary = response.choices[0].message['content'].strip()
        return summary

    except Exception as e:
        print(f"Error with OpenAI API: {e}")
        return "Could not generate summary"

# Example usage
if __name__ == "__main__":
    text_to_summarize = """
    'home_page': 'This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see ourPrivacy Policy. UNLEASH IMAGINATION SCIENCE Explore our Solutions SPEED 2D similarity search onbillions of ligands in 3D similarity search onbillions of ligands in Dock billions ofligands in Learn More SCALE Learn More 3D conformer-expanded compounds from commercial vendors searchable protein binding sites docking- and MD-ready protein structures RESOURCES GET STARTED', 'about_page': 'This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see ourPrivacy Policy. We’vespentmorethan25yearspioneeringmolecularmodelingsoftwarethatvastlyincreasesthepotentialofyourmoleculardiscoveryprocess. Ourfocusonthefutureisapparentineveryofferingwecreate,bringingaworldofpossibilityintoclearviewwithunprecedenteddegreesofscience,speedandscale. More than 25 years offuture-focused problem solving Headquartered in New Mexico with offices in Boston; Cologne, Germany; and Tokyo, Japan More than 140 Employees OpenEye’s Orion® molecular design platform is the industry’s only Cloud-native solution About OpenEye Scientific We’re dedicated to problem solving to give you more from the solutions we create, building technology trusted the world over by leading businesses, scientists and academia. As a team of scientists at the forefront of our industry, it’s in our nature to develop a transformational relationship with you. Open the door to a new world of untapped potential with OpenEye Scientific. The results that Beacon has achieved with the use of our software solutions have been incredible.'
    """
    result = get_summary(text_to_summarize)
    print(result)
'''

'''import boto3
import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

# Set AWS credentials and region from environment variables
AWS_ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")
AWS_REGION = os.getenv("AWS_REGION")

# Create a Boto3 client for Bedrock
bedrock_client = boto3.client(
    'bedrock',
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    region_name=AWS_REGION
)

def get_summary(text):
    """
    Generates a summary of the given text using AWS Bedrock.

    Args:
        text (str): The text to be summarized.

    Returns:
        str: The generated summary of the text.
    """
    try:
        # Define the payload for the Bedrock model
        payload = {
            "prompt": f"Please provide a concise summary of the following text:\n{text}",
            "maxTokens": 150,
            "temperature": 0.7
        }

        # Call the Bedrock model for text completion
        response = bedrock_client.invoke_model(
            modelId='bedrock-model-id',  # Replace with your Bedrock model ID
            payload=payload
        )

        # Extract the summary from the response
        summary = response['completion'].strip()
        return summary

    except Exception as e:
        print(f"Error with AWS Bedrock API: {e}")
        return "Could not generate summary"

# Example usage
if __name__ == "__main__":
    text_to_summarize = """
    'home_page': 'This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see ourPrivacy Policy. UNLEASH IMAGINATION SCIENCE Explore our Solutions SPEED 2D similarity search onbillions of ligands in 3D similarity search onbillions of ligands in Dock billions ofligands in Learn More SCALE Learn More 3D conformer-expanded compounds from commercial vendors searchable protein binding sites docking- and MD-ready protein structures RESOURCES GET STARTED', 'about_page': 'This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see ourPrivacy Policy. We’vespentmorethan25yearspioneeringmolecularmodelingsoftwarethatvastlyincreasesthepotentialofyourmoleculardiscoveryprocess. Ourfocusonthefutureisapparentineveryofferingwecreate,bringingaworldofpossibilityintoclearviewwithunprecedenteddegreesofscience,speedandscale. More than 25 years offuture-focused problem solving Headquartered in New Mexico with offices in Boston; Cologne, Germany; and Tokyo, Japan More than 140 Employees OpenEye’s Orion® molecular design platform is the industry’s only Cloud-native solution About OpenEye Scientific We’re dedicated to problem solving to give you more from the solutions we create, building technology trusted the world over by leading businesses, scientists and academia. As a team of scientists at the forefront of our industry, it’s in our nature to develop a transformational relationship with you. Open the door to a new world of untapped potential with OpenEye Scientific. The results that Beacon has achieved with the use of our software solutions have been incredible.'"
    """
    result = get_summary(text_to_summarize)
    print(result)'''
'''import boto3
import json
import os
import logging
from dotenv import load_dotenv

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load environment variables from the .env file
load_dotenv()

# Set AWS credentials and region from environment variables
AWS_ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")
AWS_REGION = os.getenv("AWS_REGION")

logger.info(f"Using AWS Region: {AWS_REGION}")

# Create a Boto3 client for Bedrock Runtime
bedrock_runtime = boto3.client(
    service_name='bedrock-runtime',
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    region_name=AWS_REGION
)

def get_summary(text):
    """
    Generates a summary of the given text using AWS Bedrock.

    Args:
        text (str): The text to be summarized.

    Returns:
        str: The generated summary of the text.
    """
    try:
        # Define the payload for the Bedrock model
        payload = {
            "prompt": f"Human: Please provide a concise summary of the following text:\n{text}\n\nAssistant:",
            "max_tokens_to_sample": 300,
            "temperature": 0.7,
            "top_p": 1,
            "stop_sequences": ["Human:"]
        }

        logger.info("Invoking Bedrock model...")
        # Call the Bedrock model for text completion
        response = bedrock_runtime.invoke_model(
            modelId='anthropic.claude-3-sonnet-20240229-v1:0:28k',  # Update this with your specific model ID
            contentType='application/json',
            accept='application/json',
            body=json.dumps(payload)
        )

        logger.info("Successfully received response from Bedrock")
        # Extract the summary from the response
        response_body = json.loads(response['body'].read())
        summary = response_body['completion'].strip()
        return summary

    except Exception as e:
        logger.error(f"Error with AWS Bedrock API: {e}", exc_info=True)
        return "Could not generate summary"

# Example usage
if __name__ == "__main__":
    text_to_summarize = """
    'home_page': 'This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see ourPrivacy Policy. UNLEASH IMAGINATION SCIENCE Explore our Solutions SPEED 2D similarity search onbillions of ligands in 3D similarity search onbillions of ligands in Dock billions ofligands in Learn More SCALE Learn More 3D conformer-expanded compounds from commercial vendors searchable protein binding sites docking- and MD-ready protein structures RESOURCES GET STARTED', 'about_page': 'This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see ourPrivacy Policy. We'vespentmorethan25yearspioneeringmolecularmodelingsoftwarethatvastlyincreasesthepotentialofyourmoleculardiscoveryprocess. Ourfocusonthefutureisapparentineveryofferingwecreate,bringingaworldofpossibilityintoclearviewwithunprecedenteddegreesofscience,speedandscale. More than 25 years offuture-focused problem solving Headquartered in New Mexico with offices in Boston; Cologne, Germany; and Tokyo, Japan More than 140 Employees OpenEye's Orion® molecular design platform is the industry's only Cloud-native solution About OpenEye Scientific We're dedicated to problem solving to give you more from the solutions we create, building technology trusted the world over by leading businesses, scientists and academia. As a team of scientists at the forefront of our industry, it's in our nature to develop a transformational relationship with you. Open the door to a new world of untapped potential with OpenEye Scientific. The results that Beacon has achieved with the use of our software solutions have been incredible.'"
    """
    result = get_summary(text_to_summarize)
    print(result)'''
    # Use the Converse API to send a text message to Claude 3 Haiku.

'''import boto3
from botocore.exceptions import ClientError

# Create a Bedrock Runtime client in the AWS Region you want to use.
client = boto3.client("bedrock-runtime", region_name="us-east-1")

# Set the model ID, e.g., Titan Text Premier.
model_id = "anthropic.claude-3-haiku-20240307-v1:0"

# Start a conversation with the user message.
user_message = """Your task is to take the unstructured text provided and convert it into a well-organized table format using JSON.

Here's the text:
<text>
Silvermist Hollow, a charming village, was home to an extraordinary group of individuals. Among them was Dr. Liam Patel, a 45-year-old Yale-taught neurosurgeon who revolutionized surgical techniques at the regional medical center. Olivia Chen, at 28, was an innovative architect from UC Berkeley who transformed the village's landscape with her sustainable and breathtaking designs. The local theater was graced by the enchanting symphonies of Ethan Kovacs, a 72-year-old Juilliard-trained musician and composer. Isabella Torres, a self-taught chef with a passion for locally sourced ingredients, created a culinary sensation with her farm-to-table restaurant, which became a must-visit destination for food lovers. These remarkable individuals, each with their distinct talents, contributed to the vibrant tapestry of life in Silvermist Hollow.
</text>

To execute this task, identify the main entities, attributes, or categories mentioned in the text and use them as keys in the JSON object. Then, extract the relevant information from the text and populate the corresponding values in the JSON object. Ensure that the data is accurately represented and properly formatted within the JSON structure. The resulting JSON table should provide a clear, structured overview of the information presented in the original text."""
conversation = [
    {
        "role": "user",
        "content": [{"text": user_message}],
    }
]

try:
    # Send the message to the model, using a basic inference configuration.
    response = client.converse(
        modelId="anthropic.claude-3-haiku-20240307-v1:0",
        messages=conversation,
        inferenceConfig={"maxTokens":4096,"temperature":0},
        additionalModelRequestFields={"top_k":250}
    )

    # Extract and print the response text.
    response_text = response["output"]["message"]["content"][0]["text"]
    print(response_text)

except (ClientError, Exception) as e:
    print(f"ERROR: Can't invoke '{model_id}'. Reason: {e}")
    exit(1)
'''
import boto3
import os
from dotenv import load_dotenv
from botocore.exceptions import ClientError

# Load environment variables from the .env file
load_dotenv()

# Set AWS credentials and region from environment variables
AWS_ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")
AWS_REGION = os.getenv("AWS_REGION", "us-east-1")  # Default to us-east-1 if not specified

# Create a Bedrock Runtime client in the specified AWS region
bedrock_client = boto3.client(
    "bedrock-runtime",
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    region_name=AWS_REGION
)

# Set the model ID, e.g., for Claude 3 Haiku model
model_id = "anthropic.claude-3-haiku-20240307-v1:0"  # Replace with your Bedrock model ID

def get_summary_from_bedrock(text):
    """
    Generates a summary of the given text using AWS Bedrock.

    Args:
        text (str): The text to be summarized.

    Returns:
        str: The generated summary of the text.
    """
    try:
        # Construct the user message
        user_message = f"""Your task is to take the unstructured text provided and convert it into a well-organized table format using JSON.

        Here's the text:
        <text>
        {text}
        </text>

        To execute this task, identify the main entities, attributes, or categories mentioned in the text and use them as keys in the JSON object. Then, extract the relevant information from the text and populate the corresponding values in the JSON object. Ensure that the data is accurately represented and properly formatted within the JSON structure. The resulting JSON table should provide a clear, structured overview of the information presented in the original text."""

        # Prepare the conversation payload
        conversation = [
            {
                "role": "user",
                "content": [{"text": user_message}],
            }
        ]

        # Send the message to the model, using a basic inference configuration
        response = bedrock_client.converse(
            modelId=model_id,
            messages=conversation,
            inferenceConfig={"maxTokens": 4096, "temperature": 0},
            additionalModelRequestFields={"top_k": 250}
        )

        # Extract and return the response text
        response_text = response["output"]["message"]["content"][0]["text"]
        return response_text

    except (ClientError, Exception) as e:
        print(f"Error with AWS Bedrock API: {e}")
        return "Could not generate summary"

# Example usage
if __name__ == "__main__":
    text_to_summarize = """
    Silvermist Hollow, a charming village, was home to an extraordinary group of individuals. Among them was Dr. Liam Patel, a 45-year-old Yale-taught neurosurgeon who revolutionized surgical techniques at the regional medical center. Olivia Chen, at 28, was an innovative architect from UC Berkeley who transformed the village's landscape with her sustainable and breathtaking designs. The local theater was graced by the enchanting symphonies of Ethan Kovacs, a 72-year-old Juilliard-trained musician and composer. Isabella Torres, a self-taught chef with a passion for locally sourced ingredients, created a culinary sensation with her farm-to-table restaurant, which became a must-visit destination for food lovers. These remarkable individuals, each with their distinct talents, contributed to the vibrant tapestry of life in Silvermist Hollow.
    """
    result = get_summary_from_bedrock(text_to_summarize)
    print(result)
