---
name: auth-md
description: Agent authentication and registration instructions for Cyan Printing web services and discovery endpoints.
version: 1.0.0
author: Cyan Printing
---

# Auth.md Agent Skill

## What This Skill Does
Guides automated AI agents on registering their identity with Cyan Printing (مطبعة سيان) and discovering OAuth/OIDC protected resource metadata.

## Registration Protocol
- Service root documentation: \`https://cyanprintkw.com/auth.md\`
- Registration Endpoint: \`POST https://cyanprintkw.com/api/agent/register\`
- Supported identity types: \`anonymous\`, \`identity_assertion\`
- Credential types: \`api_key\`

## Discovery Endpoints
- OAuth Authorization Server: \`https://cyanprintkw.com/.well-known/oauth-authorization-server\`
- OAuth Protected Resource Metadata: \`https://cyanprintkw.com/.well-known/oauth-protected-resource\`
- API Catalog: \`https://cyanprintkw.com/.well-known/api-catalog\`
