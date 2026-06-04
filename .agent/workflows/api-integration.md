# Workflow: Integrate New API (Nuxt 4 / TypeScript)

Standard process for integrating a new API:

1.  **Update `app/apis/`**:
    - Use the `Service` instance from `~/utils/api`.
    - Define TypeScript interfaces for the request and response data.
    - Export functions in `PascalCase` or `UPPER_SNAKE_CASE`. (e.g., `fetchUserData`).

2.  **Update `app/composables/`**:
    - Create a wrapper function that receives `payload`, `successCallback`, and `errorCallback`.
    - Provide a clean interface for components to interact with.

3.  **Error Handling**:
    - Errors are partially handled by the interceptors in `app/utils/api.ts` (logout on 401, showing toast on general errors).
    - Local error handling can be done in the `errorCallback`.

## Example: CRUD for "Product" Resource

### Step 1: Create API file (`app/apis/product.ts`)

```typescript
import Api from "~/utils/api";

const rootPath = "/owner/product";

export interface ProductPayload {
  id?: number;
  data?: any;
  query?: string;
  successCallback?: (response: any) => void;
  errorCallback?: (error: any) => void;
}

export const fetchProducts = (payload: ProductPayload) => {
  return Api.get(`${rootPath}?${payload.query || ""}`)
    .then(payload.successCallback)
    .catch(payload.errorCallback);
};

export const createProduct = (payload: ProductPayload) => {
  return Api.post(`${rootPath}/create`, payload.data)
    .then(payload.successCallback)
    .catch(payload.errorCallback);
};
```

### Step 2: Create Wrapper Composable (`app/composables/useProduct.ts`)

```typescript
import { fetchProducts, createProduct, ProductPayload } from "~/apis/product";

export function useProduct() {
  const getProducts = (payload: ProductPayload) => {
    return fetchProducts(payload);
  };

  const addProduct = (payload: ProductPayload) => {
    return createProduct(payload);
  };

  return {
    getProducts,
    addProduct,
  };
}
```

### Step 3: Use in Component (`app/pages/products/index.vue`)

```vue
<script setup lang="ts">
const { getProducts } = useProduct();
const products = ref([]);

const loadData = () => {
  getProducts({
    query: "page=1&limit=10",
    successCallback: (res) => {
      products.value = res.data.data;
    }
  });
};

onMounted(loadData);
</script>
```
