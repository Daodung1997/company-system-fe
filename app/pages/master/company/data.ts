export const HEADER_TABLE = [
  { key: "no", label: "text.stt", sortable: false, minWidth: "60px" },
  { key: "name", label: "company.companyInfo", minWidth: "250px", sortable: true },
  { key: "contact", label: "company.contactInfo", minWidth: "250px" },
  { key: "address", label: "company.headOfficeAddress", minWidth: "300px" },
  { key: "status", label: "text.status", minWidth: "130px" },
  { key: "action", label: "", frozen: true },
];

export const FIELD_VALIDATIONS = {
  name: { transitionKey: "company.name", types: ["require", "max255"], errorKey: "errorName" },
  name_kana: { transitionKey: "company.nameKana", types: ["max255"], errorKey: "errorNameKana" },
  tax_code: { transitionKey: "company.taxCode", types: ["max50"], errorKey: "errorTaxCode" },
  corporate_number: { transitionKey: "company.corporateNumber", types: ["max50"], errorKey: "errorCorporateNumber" },
  legal_representative: { transitionKey: "company.legalRepresentative", types: ["max150"], errorKey: "errorLegalRepresentative" },
  email: { transitionKey: "company.email", types: ["validEmail", "max150"], errorKey: "errorEmail" },
  phone_number: { transitionKey: "company.phone", types: ["max20"], errorKey: "errorPhone" },
  fax: { transitionKey: "company.fax", types: ["max20"], errorKey: "errorFax" },
  postcode: { transitionKey: "company.postcode", types: ["max10"], errorKey: "errorPostcode" },
  address: { transitionKey: "company.address", types: ["max500"], errorKey: "errorAddress" },
  address_registered: { transitionKey: "company.registeredAddress", types: ["max500"], errorKey: "errorAddressRegistered" },
};

export const DEFAULT_FORM = {
  code: "",
  name: "",
  name_kana: "",
  tax_code: "",
  corporate_number: "",
  address_registered: "",
  legal_representative: "",
  postcode: "",
  address: "",
  phone_number: "",
  fax: "",
  email: "",
  note: "",
  status: "ACTIVE",

  // Validation errors
  errorName: "",
  errorNameKana: "",
  errorTaxCode: "",
  errorCorporateNumber: "",
  errorAddressRegistered: "",
  errorLegalRepresentative: "",
  errorPostcode: "",
  errorAddress: "",
  errorPhone: "",
  errorFax: "",
  errorEmail: "",
};
