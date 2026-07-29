import "dotenv/config";

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env = {
  port: Number(process.env.PORT ?? 4000),
  corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:5173",
  googleSheetId: required("GOOGLE_SHEET_ID"),
  googleSheetTabName: process.env.GOOGLE_SHEET_TAB_NAME ?? "Sheet1",
  googleServiceAccountEmail: required("GOOGLE_SERVICE_ACCOUNT_EMAIL"),
  googleServiceAccountPrivateKey: required(
    "GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY"
  ).replace(/\\n/g, "\n"),
};
