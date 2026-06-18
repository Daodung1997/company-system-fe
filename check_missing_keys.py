import json
import re

# Load JSON locales
locales = {}
for lang in ['vi', 'ja', 'en']:
    with open(f"/home/dungdao/Documents/development_ai/company_system/compliance-system-fe/i18n/locales/{lang}.json", "r", encoding="utf-8") as f:
        locales[lang] = json.load(f)

def get_nested_val(d, key_str):
    keys = key_str.split('.')
    curr = d
    for k in keys:
        if isinstance(curr, dict) and k in curr:
            curr = curr[k]
        else:
            return None
    return curr

# Let's read some lines from found_hardcoded.json and check key existence
with open("found_hardcoded.json", "r", encoding="utf-8") as f:
    items = json.load(f)

# Find all t('...') or $t('...') calls
t_pattern = re.compile(r'(?:\$t|t)\(\s*[\'"]([a-zA-Z0-9_\.-]+)[\'"]')

keys_checked = set()
missing_keys = {lang: [] for lang in locales}

for item in items:
    content = item['content']
    matches = t_pattern.findall(content)
    for key in matches:
        if key not in keys_checked:
            keys_checked.add(key)
            for lang in locales:
                val = get_nested_val(locales[lang], key)
                if val is None:
                    missing_keys[lang].append(key)

print(f"Total unique i18n keys found in code lines: {len(keys_checked)}")
for lang in locales:
    print(f"Missing keys in {lang}.json ({len(missing_keys[lang])}):")
    # Print first 20 missing keys
    for key in missing_keys[lang][:20]:
        print(f"  - {key}")
