import { NextResponse } from "next/server";

const OAUTH_AUTHORIZATION_SERVER = {
  issuer: "https://cyanprintkw.com",
  authorization_endpoint: "https://cyanprintkw.com/.well-known/oauth-authorization-server",
  token_endpoint: "https://cyanprintkw.com/api/agent/register",
  jwks_uri: "https://cyanprintkw.com/.well-known/jwks.json",
  response_types_supported: ["code", "token"],
  grant_types_supported: ["authorization_code", "client_credentials"],
  subject_types_supported: ["public"],
  id_token_signing_alg_values_supported: ["RS256"],
  scopes_supported: ["openid", "profile", "read", "public"],
  token_endpoint_auth_methods_supported: ["none", "client_secret_post"],
  agent_auth: {
    skill: "https://cyanprintkw.com/.well-known/agent-skills/auth-md/SKILL.md",
    register_uri: "https://cyanprintkw.com/api/agent/register",
    identity_types_supported: ["anonymous", "identity_assertion"],
    anonymous: {
      credential_types_supported: ["api_key"],
    },
    identity_assertion: {
      assertion_types_supported: [
        "urn:ietf:params:oauth:token-type:id-jag",
        "verified_email",
      ],
      credential_types_supported: ["api_key"],
    },
    claim_uri: "https://cyanprintkw.com/api/agent/claim",
  },
  note: "Cyan Printing provides public commercial printing and packaging information. No authorization required for public endpoints.",
};

export function GET() {
  return NextResponse.json(OAUTH_AUTHORIZATION_SERVER, {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=86400, must-revalidate",
    },
  });
}
