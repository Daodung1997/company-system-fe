import json

for lang in ['vi', 'ja', 'en']:
    path = f"/home/dungdao/Documents/development_ai/company_system/compliance-system-fe/i18n/locales/{lang}.json"
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    print(f"{lang}: pagination.total = {data.get('pagination', {}).get('total')}")
