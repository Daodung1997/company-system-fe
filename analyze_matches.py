import json
from collections import Counter

with open("found_hardcoded.json", "r", encoding="utf-8") as f:
    items = json.load(f)

print(f"Total lines with matches: {len(items)}")

files_counter = Counter(item['file'] for item in items)
print("\nTop files with matches:")
for file, count in files_counter.most_common(30):
    print(f"  {file}: {count} lines")
