import json

for lang in ['vi', 'ja', 'en']:
    with open(f"/home/dungdao/Documents/development_ai/company_system/compliance-system-fe/i18n/locales/{lang}.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    print(f"--- {lang} ---")
    print(json.dumps(data.get('document', {}), ensure_ascii=False, indent=2))
