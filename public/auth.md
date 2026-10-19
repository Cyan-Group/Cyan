# Cyan Printing auth.md — AI Agent Registration & Access Guide

Welcome to **Cyan Printing (مطبعة سيان)**. This document outlines how autonomous AI agents, crawlers, and LLM-driven tools can register, authenticate, and interact with Cyan Printing's services in Kuwait and the Gulf region.

---

## 1. Agent Audience & Purpose

Cyan Printing is a leading printing and packaging manufacturer headquartered in Kuwait, offering:
- Custom carton boxes and rigid luxury packaging
- Branded paper shopping bags
- Insulated hot/cold paper cups
- Custom packaging accessories (wrapping tissue, labels, stickers, ribbons)
- Commercial corporate printing (stationery, folders, invoices, cards)
- Subsidiary operations: **Cyan Advertising** (booths, signage, exhibitions) and **Mansi Line** (card holders, acrylic fabrication, UV printing, DTF apparel).

Automated AI agents are welcome to read catalog information, calculate preliminary quote parameters, check product specifications, and direct customers to order channels on behalf of end users.

---

## 2. Public Access vs. Authenticated Access

- **Public Endpoints**: All service descriptions, catalog data, sitemaps, and quote guidelines are freely accessible. No registration or authentication token is required for standard queries.
- **Agent Identification**: High-volume automated agents can declare their identity by registering via our agent registration endpoint to receive dedicated rate limits and structured service responses.

---

## 3. Discovery Metadata Endpoints

Cyan Printing publishes standard discovery metadata:

- **OAuth Protected Resource Metadata (RFC 9728)**:
  `https://cyanprintkw.com/.well-known/oauth-protected-resource`
- **OAuth Authorization Server Metadata (RFC 8414)**:
  `https://cyanprintkw.com/.well-known/oauth-authorization-server`
- **OpenID Connect Discovery**:
  `https://cyanprintkw.com/.well-known/openid-configuration`
- **RFC 9727 API Catalog**:
  `https://cyanprintkw.com/.well-known/api-catalog`
- **ARD Capability Manifest**:
  `https://cyanprintkw.com/.well-known/ai-catalog.json`
- **MCP Server Card (SEP-1649)**:
  `https://cyanprintkw.com/.well-known/mcp/server-card.json`
- **Agent Skills Discovery Index**:
  `https://cyanprintkw.com/.well-known/agent-skills/index.json`

---

## 4. Agent Registration & Provisioning Endpoints

Agents can register programmatically using the following endpoints:

- **Registration URI**: `POST https://cyanprintkw.com/api/agent/register`
- **Credential Claim URI**: `POST https://cyanprintkw.com/api/agent/claim`

### Supported Registration Methods

1. **Anonymous Registration**:
   - Supported Identity Types: `["anonymous"]`
   - Credential Types: `["api_key"]`
   - Example request:
     ```http
     POST /api/agent/register HTTP/1.1
     Host: cyanprintkw.com
     Content-Type: application/json

     {
       "agent_name": "MyAssistantBot/1.0",
       "contact_email": "agent-operator@example.com"
     }
     ```

2. **Identity Assertion**:
   - Supported Assertion Types: `["urn:ietf:params:oauth:token-type:id-jag", "verified_email"]`
   - Credential Types: `["api_key"]`

---

## 5. Credential Usage

When an access token or API key is issued, agents must pass it in the standard `Authorization` HTTP request header:

```http
Authorization: Bearer <your_access_token>
```

---

## 6. Machine Negotiation & Contact

- **Accept Header Negotiation**: Send `Accept: text/markdown` to receive full markdown representations of any web page.
- **Direct Human Assistance**: For urgent custom production orders in Kuwait, contact Cyan Printing on WhatsApp at [+965 4144 1200](https://wa.me/96541441200) or email `info@cyanprintkw.com`.
