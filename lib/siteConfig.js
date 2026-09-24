const configuredUrl = process.env.APP_URL || "http://localhost:3000";

export const siteUrl = configuredUrl.replace(/\/$/, "");
