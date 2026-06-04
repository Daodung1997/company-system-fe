export const HEADER_TABLE = [
  { key: "no", label: "text.stt", sortable: false, minWidth: "60px" },
  { key: "name", label: "department.name", minWidth: "250px", sortable: true },
  { key: "job_titles", label: "department.associatedJobTitles", minWidth: "300px" },
  { key: "status", label: "text.status", minWidth: "130px" },
  { key: "action", label: "", frozen: true },
];

export const FIELD_VALIDATIONS = {
  name: { transitionKey: "department.name", types: ["require", "max255"], errorKey: "errorName" },
};

export const DEFAULT_FORM = {
  code: "",
  name: "",
  note: "",
  status: "ACTIVE",
  job_titles: [] as any[],

  // Validations
  errorName: "",
};
