import { NextResponse } from "next/server";

const OPENID_CONFIGURATION = {
  issuer: "https://cyanprintkw.com",
  authorization_endpoint: "https://cyanprintkw.com/.well-known/openid-configuration",
  token_endpoint: "https://cyanprintkw.com/api/agent/register",
  jwks_uri: "https://cyanprintkw.com/.well-known/jwks.json",
  response_types_supported: ["code"],
  grant_types_supported: ["authorization_code", "client_credentials"],
  subject_types_supported: ["public"],
  id_token_signing_alg_values_supported: ["RS256"],
  scopes_supported: ["openid", "profile", "read", "public"],
  note: "This is a commercial printing site. All core catalogs and documentation are public.",
};

export function GET() {
  return NextResponse.json(OPENID_CONFIGURATION, {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=86400, must-revalidate",
    },
  });
}
