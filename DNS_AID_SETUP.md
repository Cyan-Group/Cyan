# DNS for AI Discovery (DNS-AID) Configuration Guide for cyanprintkw.com

This guide provides instructions and the exact records to publish DNS-based agent discovery records for **Cyan Printing** (`cyanprintkw.com`) per the [DNS-AID IETF Draft](https://datatracker.ietf.org/doc/draft-mozleywilliams-dnsop-dnsaid/) and [RFC 9460](https://www.rfc-editor.org/rfc/rfc9460).

---

## 1. Required DNS Records

Add the following records under your domain's DNS provider (e.g. Cloudflare, AWS Route53, Namecheap, etc.):

### A. Index Entrypoint Record (`_index._agents`)
*Allows autonomous agents to discover primary HTTP/HTTPS services.*
- **Type**: `SVCB` (or `HTTPS`)
- **Name**: `_index._agents.cyanprintkw.com`
- **Priority**: `1`
- **Target**: `cyanprintkw.com.`
- **Value / Parameters**: `alpn="h2,h3" port=443 mandatory=alpn,port`
- **TTL**: `3600` (or Auto)

### B. Agent-to-Agent (A2A) Record (`_a2a._agents`)
*Allows direct multi-agent coordination and MCP discovery.*
- **Type**: `SVCB` (or `HTTPS`)
- **Name**: `_a2a._agents.cyanprintkw.com`
- **Priority**: `1`
- **Target**: `cyanprintkw.com.`
- **Value / Parameters**: `alpn="a2a" port=443 mandatory=alpn,port`
- **TTL**: `3600` (or Auto)

### C. ARD Capability Catalog Pointer (`_catalog._agents`)
*Allows agents to discover the ARD manifest directly via DNS.*
- **Type**: `TXT`
- **Name**: `_catalog._agents.cyanprintkw.com`
- **Content / Value**: `"url=https://cyanprintkw.com/.well-known/ai-catalog.json"`
- **TTL**: `3600` (or Auto)

---

## 2. Standard BIND Zone File Format

If you manage your DNS via BIND, NSD, PowerDNS, or importable zone files:

```dns
; DNS-AID Records for Cyan Printing
_index._agents.cyanprintkw.com.   3600 IN SVCB  1 cyanprintkw.com. alpn="h2,h3" port=443 mandatory=alpn,port
_a2a._agents.cyanprintkw.com.     3600 IN SVCB  1 cyanprintkw.com. alpn="a2a" port=443 mandatory=alpn,port
_catalog._agents.cyanprintkw.com. 3600 IN TXT   "url=https://cyanprintkw.com/.well-known/ai-catalog.json"
```

---

## 3. Cloudflare DNS Dashboard Instructions

If `cyanprintkw.com` uses Cloudflare:

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and select `cyanprintkw.com`.
2. Go to **DNS** -> **Records**.
3. **Add Record 1 (Index entrypoint)**:
   - **Type**: `HTTPS` (or `SVCB`)
   - **Name**: `_index._agents`
   - **Target**: `cyanprintkw.com`
   - **Priority**: `1`
   - **Value**: `alpn="h2,h3" port=443`
4. **Add Record 2 (A2A entrypoint)**:
   - **Type**: `HTTPS` (or `SVCB`)
   - **Name**: `_a2a._agents`
   - **Target**: `cyanprintkw.com`
   - **Priority**: `1`
   - **Value**: `alpn="a2a" port=443`
5. **Add Record 3 (Catalog pointer)**:
   - **Type**: `TXT`
   - **Name**: `_catalog._agents`
   - **Content**: `url=https://cyanprintkw.com/.well-known/ai-catalog.json`
6. Click **Save** on each record.

---

## 4. Enable DNSSEC

The DNS-AID standard requires signing the discovery zone with DNSSEC so validating resolvers return authenticated data:
1. In the Cloudflare Dashboard, navigate to **DNS** -> **Settings**.
2. Scroll to **DNSSEC** and click **Enable DNSSEC**.
3. Copy the DS record details provided by Cloudflare into your domain registrar (where you purchased `cyanprintkw.com`).

---

## 5. Verification Commands

To verify that resolvers can locate your DNS-AID records via DNS-over-HTTPS:

```bash
# Verify _index._agents SVCB record
curl -s -H "accept: application/dns-json" "https://cloudflare-dns.com/dns-query?name=_index._agents.cyanprintkw.com&type=SVCB"

# Verify _a2a._agents SVCB record
curl -s -H "accept: application/dns-json" "https://cloudflare-dns.com/dns-query?name=_a2a._agents.cyanprintkw.com&type=SVCB"

# Verify _catalog._agents TXT record
curl -s -H "accept: application/dns-json" "https://cloudflare-dns.com/dns-query?name=_catalog._agents.cyanprintkw.com&type=TXT"
```
