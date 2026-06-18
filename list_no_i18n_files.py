import json
from collections import Counter

with open("found_hardcoded.json", "r", encoding="utf-8") as f:
    items = json.load(f)

no_i18n_files = [item['file'] for item in items if '$t' not in item['content'] and 't(' not in item['content']]
c = Counter(no_i18n_files)

print(f"Total files with NO i18n calls: {len(c)}")
for file, count in c.most_common():
    print(f"  {file}: {count} lines")
