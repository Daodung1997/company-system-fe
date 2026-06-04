# Functional Flows (Sequence Diagrams) - Nuxt 4

This document describes the system's main functional flows using Sequence Diagrams. All Master screens follow these common patterns.

## 1. Add Flow

```puml
@startuml
participant "User" as User
participant "Page Screen" as UI
participant "Utils/Validate" as Val
participant "Composables/API" as API
participant "api.ts (Axios)" as Srv
participant "API Server" as Backend

User -> UI: Enter data and Click "Save"
UI -> Val: Call validateOnAllField(form)
alt Invalid data (Client-side)
    Val --[#red]> UI: Return validation errors
    UI -->> User: Display error messages
else Valid data
    UI -> UI: Set isLoading = true
    UI -> API: Call create...({ data, successCallback, errorCallback })
    API -> Srv: Call axios.post(url, data)
    Srv -> Backend: Send data
    alt API Success (200/201)
        Backend --[#green]> Srv: Return Success
        Srv -->> API: Return result
        API -> UI: Execute successCallback
        UI -> UI: Display Toast Success
        UI -> UI: navigateTo("/.../list")
    else API Failure (4xx/5xx)
        Backend --[#red]> Srv: Return Error
        note over Srv: Interceptor handles common errors
        Srv -->> API: Reject Promise
        API -> UI: Execute errorCallback
        UI -> UI: Set isLoading = false
    end
end
@enduml
```

## 2. Edit Flow

```puml
@startuml
participant "User" as User
participant "Page Screen" as UI
participant "Composables/API" as API
participant "API Server" as Backend

note over UI: onMounted()
UI -> API: Call get...ById(id)
API -> Backend: GET /api/.../{id}
alt Fetch Success
    Backend --[#green]> API: Return detail
    API -->> UI: Populate reactive form
    UI -->> User: Display data
else Fetch Failure
    Backend --[#red]> API: Return Error
    API -> UI: errorCallback
end
@enduml
```

## 3. Centralized Error Handling (`app/utils/api.ts`)

All API calls flow through the Axios instance with interceptors for session and error management.

```puml
@startuml
participant "Composables/API" as API
participant "api.ts (Interceptor)" as Srv
participant "API Server" as Backend
participant "Global Store/UI" as UI

API -> Srv: Request
Srv -> Backend: Send Request
Backend --[#red]> Srv: Response Error (401, 422, 500)

alt Error 401 (Unauthorized)
    Srv -> UI: Clear Cookies & Redirect to /login
else Error 422 (Validation)
    Srv -->> API: Return validation messages
else Error 500
    Srv -> UI: Display Toast (System Error)
end

Srv -->> API: Reject(error)
@enduml
```
