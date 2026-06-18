import json

with open("found_hardcoded.json", "r", encoding="utf-8") as f:
    items = json.load(f)

no_i18n_items = []
for item in items:
    content = item['content']
    if '$t' not in content and 't(' not in content:
        no_i18n_items.append(item)

print(f"Total lines with matches but NO i18n calls: {len(no_i18n_items)}")
for item in no_i18n_items[:50]:
    print(f"  {item['file']}:{item['line']} -> {item['content']}")
