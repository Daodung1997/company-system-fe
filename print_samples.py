import json

with open("extracted_strings.json", "r", encoding="utf-8") as f:
    items = json.load(f)

plain = [item for item in items if item['type'] == 'plain_literal']
fallback = [item for item in items if item['type'] == 'fallback']

print(f"Plain literals: {len(plain)}")
print(f"Fallbacks: {len(fallback)}")

print("\nSample plain literals:")
for item in plain[:30]:
    print(f"  {item['file']}: {item['text']} (raw: {item['raw_match']})")

print("\nSample fallbacks:")
for item in fallback[:30]:
    print(f"  {item['file']}: {item['key']} -> {item['text']} (raw: {item['raw_match']})")
