import json

with open("found_hardcoded.json", "r", encoding="utf-8") as f:
    items = json.load(f)

for item in items:
    if item['file'] == 'pages/document/index.vue' and '$t' not in item['content'] and 't(' not in item['content']:
        print(f"Line {item['line']}: {item['content']}")
