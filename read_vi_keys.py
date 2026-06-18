import json

with open("/home/dungdao/Documents/development_ai/company_system/compliance-system-fe/i18n/locales/vi.json", "r", encoding="utf-8") as f:
    vi = json.load(f)

def print_keys(d, prefix=""):
    for k, v in d.items():
        if isinstance(v, dict):
            print_keys(v, prefix + k + ".")
        else:
            # print first 50 keys only
            pass

print("Top level keys in vi.json:")
for k in vi.keys():
    print(f"  {k} ({type(vi[k])})")
