import os
import re

app_dir = "/home/dungdao/Documents/development_ai/company_system/compliance-system-fe/app"

# Match $t(...) || '...' or t(...) || '...'
# Group 1 captures the i18n call, e.g. $t('key') or t('key', { name: val })
# Group 2 matches the fallback string literal (which can be inside '...', "..." or `...`)
pattern = re.compile(r'((?:\$t|t)\(\s*[\'"][a-zA-Z0-9_\.-]+[\'"](?:,\s*\{[^}]*\})?\s*\))\s*\|\|\s*(?:[\'"].*?[\'"]|`.*?`)')

exclude_dirs = {'.nuxt', '.output', 'node_modules', '.git'}

modified_files = 0
total_replacements = 0

for root, dirs, files in os.walk(app_dir):
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    for file in files:
        if file.endswith(('.vue', '.ts', '.js')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            
            new_content, count = pattern.subn(r'\1', content)
            if count > 0:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                modified_files += 1
                total_replacements += count
                print(f"Cleaned {count} fallbacks in {os.path.relpath(filepath, app_dir)}")

print(f"\nDone. Cleaned {total_replacements} fallbacks in {modified_files} files.")
