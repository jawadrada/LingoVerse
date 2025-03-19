import os
from openai import OpenAI
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=api_key)

@csrf_exempt
def translate_text(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)

            prompt = data.get("prompt")
            input_language = data.get("input_language")
            target_language = data.get("target_language")

            system_prompt = (
                f"You are a translation service specializing in Lebanese Arabic ↔ English translations. "
                f"Translate from {input_language} to {target_language}. "
                f"Output only the translated input. Do not include explanations or additional text."
            )

            completion = client.chat.completions.create(
                model="gpt-4o",
                messages=[
                {
                    "role": "system",
                    "content": system_prompt
                },
                
                {
                    "role": "user",
                    "content": prompt
                },
                ]
            )
            translated_text = completion.choices[0].message.content

            return JsonResponse({"response": translated_text, "input_language": input_language, "target_language": target_language}, status=200)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
        
    else:
        return JsonResponse({"error": "Method not allowed"}, status=405)


#JsonResponse class in Django is used to send JSON-formatted responses back to the client
    # arguments
        # paramter 1: dictornary
        # paramter 2: status code (optional)

# Example request body
# {
#     "prompt" : "instructions on what the model should do",
#     "input_language" : "Ex: English",
#     "target_language" : "Ex: Lebanese arabic"
# }