import os
import re
import json

app_dir = "/home/dungdao/Documents/development_ai/company_system/compliance-system-fe/app"

vi_chars = r'[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ]'
ja_chars = r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]'

pattern_vi = re.compile(vi_chars)
pattern_ja = re.compile(ja_chars)

# Let's match t('key') || 'text' or $t('key') || 'text'
t_or_pattern = re.compile(r'(?:\$t|t)\(\s*[\'"]([a-zA-Z0-9_\.-]+)[\'"]\s*\)\s*\|\|\s*[\'"]([^\'"]+)[\'"]')
# Let's also match plain strings in templates, e.g. placeholder="...", label="..." or text between tags
# We can find all string literals in files
string_literal_pattern = re.compile(r'[\'"]([^\'"]*?[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]+?[^\'"]*?)[\'"]')

exclude_dirs = {'.nuxt', '.output', 'node_modules', '.git'}

extracted = []

for root, dirs, files in os.walk(app_dir):
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    for file in files:
        if file.endswith(('.vue', '.ts', '.js')):
            filepath = os.path.join(root, file)
            relpath = os.path.relpath(filepath, app_dir)
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            
            # Find t('key') || 'fallback'
            for match in t_or_pattern.finditer(content):
                key, fallback = match.groups()
                # Clean key/fallback
                if pattern_vi.search(fallback) or pattern_ja.search(fallback):
                    extracted.append({
                        'file': relpath,
                        'type': 'fallback',
                        'key': key,
                        'text': fallback,
                        'raw_match': match.group(0)
                    })
            
            # Find plain hardcoded strings (excluding the ones already caught by t_or_pattern above)
            for match in string_literal_pattern.finditer(content):
                text = match.group(1)
                # Skip if it's part of t_or_pattern
                # To be simple, check if this text is already in the list for this file
                already = False
                for item in extracted:
                    if item['file'] == relpath and item['text'] == text:
                        already = True
                        break
                if not already:
                    extracted.append({
                        'file': relpath,
                        'type': 'plain_literal',
                        'text': text,
                        'raw_match': match.group(0)
                    })

print(f"Extracted {len(extracted)} potential strings.")
with open("extracted_strings.json", "w", encoding="utf-8") as f:
    json.dump(extracted, f, ensure_ascii=False, indent=2)
