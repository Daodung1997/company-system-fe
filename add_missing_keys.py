import json

missing_translations = {
    "vi": {
        "dashboard.ageDemographics": "Phân bố Độ tuổi Nhân sự",
        "dashboard.ageDemographicsDesc": "Tỷ lệ nhân viên theo nhóm tuổi trong doanh nghiệp",
        "dashboard.genderDemographics": "Cơ cấu Giới tính Nhân sự",
        "dashboard.genderDemographicsDesc": "Tỷ lệ giới tính nam, nữ trong doanh nghiệp",
        "btn.logout": "Đăng xuất",
        "menu.logout": "Đăng xuất",
        "btn.upload": "Tải ảnh lên",
        "quickSignSuccess": "Ký hợp đồng thành công",
        "btn.error": "Lỗi",
        "employee.viewError": "Không thể xem tài liệu.",
        "employee.downloadError": "Không thể tải tài liệu.",
        "timesheet.msgSaveManualSuccess": "Lưu chấm công thành công",
        "text.errorSystem": "Có lỗi xảy ra"
    },
    "ja": {
        "dashboard.ageDemographics": "従業員年齢構成",
        "dashboard.ageDemographicsDesc": "企業内の年齢グループ別の従業員比率",
        "dashboard.genderDemographics": "従業員男女比率",
        "dashboard.genderDemographicsDesc": "企業内の男女従業員の比率",
        "btn.logout": "ログアウト",
        "menu.logout": "ログアウト",
        "btn.upload": "画像をアップロード",
        "quickSignSuccess": "契約書の署名に成功しました。",
        "btn.error": "エラー",
        "employee.viewError": "ドキュメントを表示できません。",
        "employee.downloadError": "ドキュメントをダウンロードできません。",
        "timesheet.msgSaveManualSuccess": "打刻の保存に成功しました",
        "text.errorSystem": "エラーが発生しました"
    },
    "en": {
        "dashboard.ageDemographics": "Employee Age Demographics",
        "dashboard.ageDemographicsDesc": "Ratio of employees by age group in the company",
        "dashboard.genderDemographics": "Employee Gender Demographics",
        "dashboard.genderDemographicsDesc": "Ratio of male and female employees in the company",
        "btn.logout": "Logout",
        "menu.logout": "Logout",
        "btn.upload": "Upload Image",
        "quickSignSuccess": "Contract signed successfully.",
        "btn.error": "Error",
        "employee.viewError": "Unable to view the document.",
        "employee.downloadError": "Unable to download the document.",
        "timesheet.msgSaveManualSuccess": "Timesheet saved successfully",
        "text.errorSystem": "An error occurred"
    }
}

def set_nested_val(d, key_str, val):
    keys = key_str.split('.')
    curr = d
    for k in keys[:-1]:
        if k not in curr:
            curr[k] = {}
        curr = curr[k]
    curr[keys[-1]] = val

for lang in ['vi', 'ja', 'en']:
    path = f"/home/dungdao/Documents/development_ai/company_system/compliance-system-fe/i18n/locales/{lang}.json"
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    for key, val in missing_translations[lang].items():
        set_nested_val(data, key, val)
        
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

print("Added missing keys to locale files successfully.")
