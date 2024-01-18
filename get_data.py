import requests
from datetime import datetime
import json

def retrieve_all_messages(channelId):

    # initalize variables
    TOB_ITEMS = ("Scythe of vitur (uncharged)", "Avernic defender hilt", "Justiciar legguards", "Justiciar chestguard", "Justiciar faceguard", "Amulet of souls", "Sanguine ornament kit",
                 "Sanguinesti staff (uncharged)", "Sanguine dust", "Sanguine justiciar kit"," Holy ornament kit", "Plank")
    COX_ITEMS = ("Twisted bow", "Elder maul", "Anguish prayer scroll", "Torment prayer scroll", "Dinh's bulwark", "Dragon hunter crossbow", "Kodai insignia", "Ancestral hat", 
                 "Ancestral robe top", "Ancestral robe bottom", "Twisted buckler")
    tob_messages = []
    cox_messages = []

    limit = 100
    before = None
    headers = {
        'authorization': 'NDczMjM2MTE1NjU1MjI5NDUw.GloDSq.8zCZZfMfgAx3EV6FMGKAMMAp0ah_eBaGNSzyqM'
    }

    # continue add to the messages array until no more messages can be fetched
    while True: 

        url = f'https://discord.com/api/v9/channels/{channelId}/messages?limit={limit}'

        # modify url if we have a valid "before" value
        if before:
            url += f'&before={before}'
        
        # initiate requests to api and add collect messages
        r = requests.get(url, headers=headers)
        messages_json = json.loads(r.text)
        for m in messages_json:
            # write all cox / tob items to different files
            item = m["embeds"][0]["author"]["name"]
            if (item in TOB_ITEMS):
                tob_messages.append(m)
           
            if (item in COX_ITEMS):
              
                cox_messages.append(m)
 
        # stop retrieving messages if there are no more left to retrieve
        if len(messages_json) < limit:
            break

        # set the before parameter to the ID of the last message retrieved
        before = messages_json[-1]['id']

    # Write messages respective files
    with open('tob', 'w', encoding='iso-8859-1') as f:
        json.dump(tob_messages, f)
    with open('cox', 'w', encoding='iso-8859-1') as f:
        json.dump(cox_messages, f)

retrieve_all_messages('1050107141891051581')
"""
with open('messages', 'r') as file:
    file_contents = file.read()
messages = file_contents

with open('cox', 'r') as file:
    content = file.read()
    print(content)
"""