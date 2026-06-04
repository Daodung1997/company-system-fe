export const JAPAN_REGIONS = [
  { id: 1, name: "北海道", kana: "ホッカイドウ" },
  { id: 2, name: "東北", kana: "トウホク" },
  { id: 3, name: "関東", kana: "カントウ" },
  { id: 4, name: "中部", kana: "チュウブ" },
  { id: 5, name: "近畿", kana: "キンキ" },
  { id: 6, name: "中国", kana: "チュウゴク" },
  { id: 7, name: "四国", kana: "シコク" },
  { id: 8, name: "九州", kana: "キュウシュウ" },
];

export const JAPAN_PREFECTURES: Record<string, string[]> = {
  北海道: ["北海道"],
  東北: ["青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"],
  関東: ["茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県"],
  中部: ["新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県"],
  近畿: ["三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県"],
  中国: ["鳥取県", "島根県", "岡山県", "広島県", "山口県"],
  四国: ["徳島県", "香川県", "愛媛県", "高知県"],
  九州: ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"],
};

export const prefFindByRegion = (regionName: string) => {
  const prefectures = JAPAN_PREFECTURES[regionName] || [];
  return prefectures.map((name, index) => ({ name, id: `${regionName}_${index}` }));
};

export const regionFindByPref = (prefName: string) => {
  for (const [region, prefs] of Object.entries(JAPAN_PREFECTURES)) {
    if (prefs.includes(prefName)) {
      return JAPAN_REGIONS.find((r) => r.name === region);
    }
  }
  return null;
};

export const remakePostcode = (value: string) => {
  if (!value) return "";
  const digits = value.replace(/\D/g, "");
  if (digits.length === 7) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }
  return digits;
};

export const mapField = (list: any[], field: string) => {
  if (!Array.isArray(list)) return [];
  return list.map((item) => item[field]);
};

export const sortJapanese = (list: any[], key: string, ascending = true) => {
  if (!Array.isArray(list)) return [];
  return [...list].sort((a, b) => {
    const valA = a[key] || "";
    const valB = b[key] || "";
    return ascending ? valA.localeCompare(valB, "ja") : valB.localeCompare(valA, "ja");
  });
};
