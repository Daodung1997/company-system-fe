import os
import re

app_dir = "/home/dungdao/Documents/development_ai/company_system/compliance-system-fe/app"

# Match any translation call followed by || and a string (single, double quote, or backtick)
pattern = re.compile(r'((?:\$t|t)\(\s*[\'"][a-zA-Z0-9_\.-]+[\'"](?:,\s*\{[^}]*\})?\s*\))\s*\|\|\s*(["\'`].*?["\'`])')

exclude_dirs = {'.nuxt', '.output', 'node_modules', '.git'}

matches_found = []

for root, dirs, files in os.walk(app_dir):
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    for file in files:
        if file.endswith(('.vue', '.ts', '.js')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            for match in pattern.finditer(content):
                matches_found.append({
                    'file': os.path.relpath(filepath, app_dir),
                    'full_match': match.group(0),
                    't_call': match.group(1),
                    'fallback': match.group(2)
                })

print(f"Found {len(matches_found)} fallback expressions.")
for m in matches_found[:30]:
    print(f"  {m['file']}: {m['full_match']} -> keep: {m['t_call']}")
