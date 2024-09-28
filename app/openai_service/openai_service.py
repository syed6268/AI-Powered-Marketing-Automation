# hackmidwestbackend/app/openai_service/openai_service.py

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
                {"role": "system", "content": "You are a helpful assistant that provides concise summaries."},
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
