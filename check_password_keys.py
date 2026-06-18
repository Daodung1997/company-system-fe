import json

for lang in ['vi', 'ja', 'en']:
    path = f"/home/dungdao/Documents/development_ai/company_system/compliance-system-fe/i18n/locales/{lang}.json"
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    # print keys containing 'password'
    res = {}
    def find_sub(d, prefix=""):
        for k, v in d.items():
            if isinstance(v, dict):
                find_sub(v, prefix + k + ".")
            else:
                if 'password' in k or 'pass' in k or 'strength' in k:
                    res[prefix + k] = v
    find_sub(data)
    print(f"--- {lang} ---")
    print(json.dumps(res, ensure_ascii=False, indent=2))
