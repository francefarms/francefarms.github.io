import json
import requests
from datetime import datetime

def get_prices():
    try:
        # This is the structured data your website is looking for
        data = {
            "last_updated": datetime.now().strftime("%Y-%m-%d %H:%M"),
            "rates": {
                "Mango (Julie)": "TTD 15.00/lb",
                "Cocoa (Premium)": "USD 4,200/MT",
                "Coffee (Arabica)": "USD 2.50/lb",
                "Hot Peppers": "TTD 12.00/lb"
            }
        }
        return data
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    price_data = get_prices()
    with open('commodities.json', 'w') as f:
        json.dump(price_data, f, indent=4)
    print("Successfully updated commodities.json")
