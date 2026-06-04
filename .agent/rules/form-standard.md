# Form Component Standardization Guidelines (Nuxt 4)

To ensure a premium and consistent user experience, all form fields in this project must use designated base components.

## Core Components Strategy

### 1. Labeling and Layout: `AppInputField.vue`
All input fields should be wrapped in `AppInputField`.
- **Purpose**: Standardizes labels, required markers, error messages, and focus effects.
- **Location**: `app/components/AppInputField.vue`.

### 2. Status and Choices: `AppRadioGroup.vue`
Use for status fields or small sets of mutually exclusive choices.

### 3. Specialized Inputs
- **`AppPhoneInput.vue`**: Formats Japanese phone numbers.
- **`AppPostcodeInput.vue`**: Formats postcodes and integrates with address lookups.

### 4. Selection Components
- **`AppMasterSelect.vue`**: For selecting records from other master modules with search and lazy load.
- **`AppMultiMasterSelect.vue`**: For multiple selections with chip display.

## Best Practices

- **Validation**: Utilize the shared `validateOnField` and `validateOnAllField` from `~/utils/validate`.
- **Styling**: Always use the defined Tailwind color palette (Primary, Surface, etc.) to maintain visual hierarchy.
- **PrimeVue**: Wrap PrimeVue 4 components within these `App` components to provide project-specific behaviors (like error borders).

---

> [!IMPORTANT]
> Consistency is key. Even when using PrimeVue directly, ensure the class names and variants match the established design tokens.
