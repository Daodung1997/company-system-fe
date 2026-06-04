# Code Convention (Nuxt 4)

> [!NOTE]
> For **Naming Conventions** and **Technical Standards**, refer to [.agent/rules.md](../.agent/rules.md).

## 1. Code Quality & TypeScript

- **Strong Typing**: Use TypeScript interfaces or types for all API payloads, response objects, and complex component props. Avoid `any` whenever possible.
- **Comparison**: Always use `===` instead of `==`.
- **Variables**: Use `const` by default. Use `let` only when the variable needs to be reassigned. `var` is strictly prohibited.
- **Composition API**: Use the `<script setup lang="ts">` syntax.
- **Modularization**: Break down large components into smaller, reusable ones in `app/components/`. Extract complex business logic into composables in `app/composables/`.

## 2. Nuxt 4 Specifics

- **Auto-imports**: Take advantage of Nuxt's auto-importing for components, composables, and utilities to keep script blocks clean.
- **Directory Structure**: Strictly follow the Nuxt 4 `app/` directory convention.
- **Global Styles**: Define global CSS and Tailwind configurations in `app/assets/css/` and reference them in `nuxt.config.ts`.

## 3. Git Convention

- **Commit Message Prefixes**:
  - `feat:` for new features.
  - `fix:` for bug fixes.
  - `docs:` for documentation changes.
  - `style:` for UI/formatting changes (no logic impact).
  - `refactor:` for code improvements that don't add features or fix bugs.
  - `chore:` for updating dependencies or build configurations.
