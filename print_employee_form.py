import json

with open("found_hardcoded.json", "r", encoding="utf-8") as f:
    items = json.load(f)

for item in items:
    if item['file'] == 'components/master/EmployeeForm.vue':
        print(f"Line {item['line']}: {item['content']}")
