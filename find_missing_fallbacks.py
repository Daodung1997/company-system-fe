import json
import re

missing_keys = [
    "dashboard.ageDemographics",
    "dashboard.ageDemographicsDesc",
    "dashboard.genderDemographics",
    "dashboard.genderDemographicsDesc",
    "btn.logout",
    "menu.logout",
    "btn.upload",
    "quickSignSuccess",
    "btn.error",
    "employee.viewError",
    "employee.downloadError",
    "timesheet.msgSaveManualSuccess",
    "text.errorSystem"
]

with open("found_hardcoded.json", "r", encoding="utf-8") as f:
    items = json.load(f)

extracted_missing = {}

for key in missing_keys:
    # Search for this key in the items content
    for item in items:
        content = item['content']
        if key in content:
            # Try to extract the fallback string using regex
            # e.g. t('key') || 'Fallback'
            match = re.search(r'[\'"]' + re.escape(key) + r'[\'"]\s*\)\s*\|\|\s*([\'"`])(.*?)\1', content)
            if match:
                fallback_val = match.group(2)
                extracted_missing[key] = fallback_val
                break
            else:
                # If not matched, try simple search
                # maybe t('key', ...) || 'fallback'
                # Let's extract anything after ||
                parts = content.split('||')
                if len(parts) > 1:
                    fallback_val = parts[1].strip().strip("'\"`;")
                    extracted_missing[key] = fallback_val
                    break

print(json.dumps(extracted_missing, ensure_ascii=False, indent=2))
