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
           messages = [
    {
        "role": "system", 
        "content": "You are an experienced digital marketing specialist with a strong focus on influencer marketing in the education sector. You have been connecting brands with the right influencers for over a decade, particularly in the context of promoting services that aid international students in the USA."
    },
    {
        "role": "user", 
        "content": (
            "Your task is to generate a JSON object containing influencers' information for the company Grad Stem, which helps international students in the USA find jobs through an AI personalized resume feature tailored to job descriptions. "
            "Please create a JSON object that includes three real influencers who have at least 20,000 followers and could effectively promote Grad Stem. For each influencer, include their name, location, and the full Instagram handle link. "
            "Ensure that the output is well-formatted, and keep in mind the importance of providing influencers who have a relevant audience and a genuine interest in educational services for international students."
        )
    }
]
,
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
import boto3
import os
import json
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

# Set the model ID for Claude v2.1
model_id = "anthropic.claude-v2:1"  # Using Claude v2.1

def get_detailed_summary(text):
    """
    Generates a detailed summary of the given text using AWS Bedrock.

    Args:
        text (str): The text to be summarized.

    Returns:
        str: The generated detailed summary of the text.
    """
    try:
        # Construct the prompt to generate a detailed summary
        prompt = f"""
        Human: Please provide a comprehensive and detailed summary of the following text. The summary should cover all the key points and provide an overview that is easy to understand.

        Text: {text}

        Assistant:"""

        # Define the payload for the Bedrock model
        payload = {
            "prompt": prompt.strip(),  # Ensure no extra newlines or spaces at the start
            "max_tokens_to_sample": 600,  # Set higher max tokens for detailed summary
            "temperature": 0.7,
            "top_p": 1,
            "stop_sequences": ["Human:"]
        }

        # Call the Bedrock model for text summarization
        response = bedrock_client.invoke_model(
            modelId=model_id,
            contentType='application/json',
            accept='application/json',
            body=json.dumps(payload)
        )

        # Extract the summary from the response
        response_body = json.loads(response['body'].read())
        detailed_summary = response_body['completion'].strip()
        return detailed_summary

    except ClientError as e:
        print(f"ClientError with AWS Bedrock API: {e}")
        return "Could not generate summary"
    except Exception as e:
        print(f"Error with AWS Bedrock API: {e}")
        return "Could not generate summary"

# Example usage
if __name__ == "__main__":
    text_to_summarize = """
    'home_page': "Learn more about BlueScope, a global steel manufacturer committed to delivering sustainable and innovative solutions for our customers and communities. Explore BlueScope's commitment to sustainability, encompassing environmental responsibility, social engagement, and economic prosperity in our operations. Discover BlueScope's world-class steel products and solutions, known for their durability, strength, and versatility across various industries and applications. Explore BlueScope's trusted product range, encompassing a diverse portfolio of brands known for their quality and performance in the steel industry. BlueScope's investor hub for financial information, company reports, and investment resources. Navigate your investment with a global leader in the steel sector with confidence. At BlueScope, the way we work is as important as the work we do. We have a number of priority areas that we focus on within our ethics and governance framework. You can find some of our policies provided here. We create and inspire smart solutions in steel, to strengthen our communities for the future. We create and inspire smart solutions in steel,\xa0to strengthen our communities for the future. We create and inspire smart solutions in steel,\xa0to strengthen our communities for the future. We create and inspire smart solutions in steel,\xa0to strengthen our communities for the future. We make and supply steel for some of the most beautiful, essential and enduring buildings and structures in the world. Guided by Our Purpose & Our Bond, and Our Strategy, we collaborate with each other and our partners to build a sustainable global BlueScope business. We’re a global steel company operating in local communities in 15 countries. Our people are working across operations in Australia, New Zealand, Asia and North America, take a look at our businesses. Access all investor resources in our Investor Centre Financial results FY2024 Results Presentation Watch the webcast Annual reports FY2024 Full Year Report View all reports > Investors Menu Our commitment to creating and inspiring smart solutions in steel means our brands are chosen for a variety\xa0of applications\xa0and utilised in our homes, schools, hospitals, and commercial buildings. Hear fromour people At BlueScope, we’re part of the world’s drive for a sustainable future and contribute through our innovative steel products, high-performing operations and our experienced workforce. Take a look at our stories below to feel the BlueScope difference. BlueScopenews... View all the news from BlueScope 19 September 2024  17 September 2024  17 September 2024 Latest update on achieving our Sustainability Outcomes. 03 September 2024  BlueScope is a registered trademark of BlueScope Steel Limited.", 'about_page': "Learn more about BlueScope, a global steel manufacturer committed to delivering sustainable and innovative solutions for our customers and communities. Explore BlueScope's commitment to sustainability, encompassing environmental responsibility, social engagement, and economic prosperity in our operations. Discover BlueScope's world-class steel products and solutions, known for their durability, strength, and versatility across various industries and applications. Explore BlueScope's trusted product range, encompassing a diverse portfolio of brands known for their quality and performance in the steel industry. BlueScope's investor hub for financial information, company reports, and investment resources. Navigate your investment with a global leader in the steel sector with confidence. At BlueScope, the way we work is as important as the work we do. We have a number of priority areas that we focus on within our ethics and governance framework. You can find some of our policies provided here. Whowe are  BlueScope makes and supplies steel for some of the most beautiful, essential and enduring buildings and structures in the world.  Creatingstrength We love what we do. We’re passionate about working with the strength and versatility of steel that makes it one of the most amazing and useful materials in the world. We’re proud that our customers choose our steel to create incredible things every day that matter to all of us - the buildings we call home, cars we drive, our hospitals, and the electronics and equipment we use and rely on every day. We’re inspired by innovation, from the expertise that has made our brands a recognised name, to the robotics that drive efficiency in how we bring steel products to life. And we feel constantly energised by our collaborations with our partners, industry networks and business communities. Our people areour strength Our team of over 16,500 people at 160+ sites are our strength. Across the globe, we care about the health, safety and wellbeing of our employees and each other. We create a positive, inclusive and collaborative culture where everyone is welcome, respected and heard. And our people care about their contribution, creating strength through what matters most to our customers, our local communities and environment in which we live and operate. It is these many actions, big and small, taken with care, that define sustainability at BlueScope and the essence of what we do. We are committed to being a responsible leader of innovative and enduring steel materials, products and technologies that anticipates the world’s changing needs, helping create the future we all want. We have some big goals to fulfill our sustainability vision and Our Purpose. Our products are respected in our markets. We’re one of the leading manufacturers of painted and coated steel products. And we’re leaders in the design, fabrication and installation of sustainable, custom-engineered structures from relief housing to massive warehouses. “We create and inspire smart solutions in steel, to strengthen our communities for the future.” This is Our Purpose, at the heart of what we do. BlueScope Steel was born on Monday 15 July 2002, when we publicly listed on the Australian Stock Exchange (ASX). But our beginnings go back much further. The way we started continues to be a positive legacy for how we go about things today. In every country we operate, it has and always will be our connection with local grass roots that has given us strong resilient foundations. Relationships with our ‘neighbours’ creates strong local communities and sharing local knowledge across our business helps us build a better global BlueScope. And we’ve been building on this local-global approach for decades. Our Australian heritage started back in 1915, under the banner of BHP. Over the years we have continued to grow through partnerships and acquisitions with companies highly regarded by their local communities, bringing in businesses in Asia from 1965, in New Zealand from 1992, and in the US from 1996. Learn how we set strong foundations forour business Learn about our three strategic pillars that shape how to turn Our Purpose into reality. Our governance framework is built on the guiding principles in Our Bond \u202fand\u202f Code of Conduct. BlueScope is a registered trademark of BlueScope Steel Limited. """
    result = get_detailed_summary(text_to_summarize)
    print(type(result))
    print(result)

