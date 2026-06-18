import os
import re
import json

app_dir = "/home/dungdao/Documents/development_ai/company_system/compliance-system-fe/app"

# Regex patterns to match Japanese or Vietnamese diacritics
vi_chars = r'[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ]'
ja_chars = r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]'

pattern_vi = re.compile(vi_chars)
pattern_ja = re.compile(ja_chars)

exclude_dirs = {'.nuxt', '.output', 'node_modules', '.git'}

found_items = []

for root, dirs, files in os.walk(app_dir):
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    for file in files:
        if file.endswith(('.vue', '.ts', '.js')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                lines = f.readlines()
            for idx, line in enumerate(lines, 1):
                clean_line = line.strip()
                # Skip comments
                if clean_line.startswith('//') or clean_line.startswith('/*') or clean_line.startswith('*') or clean_line.startswith('<!--'):
                    continue
                # Check for match
                has_vi = bool(pattern_vi.search(clean_line))
                has_ja = bool(pattern_ja.search(clean_line))
                if has_vi or has_ja:
                    found_items.append({
                        'file': os.path.relpath(filepath, app_dir),
                        'line': idx,
                        'content': clean_line,
                        'has_vi': has_vi,
                        'has_ja': has_ja
                    })

with open("found_hardcoded.json", "w", encoding="utf-8") as f:
    json.dump(found_items, f, ensure_ascii=False, indent=2)

print(f"Saved {len(found_items)} matches to found_hardcoded.json")
