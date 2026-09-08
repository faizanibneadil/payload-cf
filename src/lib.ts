/**
 * Build-time stub for drizzle-kit/api.
 *
 * Payload's D1 adapter currently makes drizzle-kit/api statically reachable
 * during Next.js 16/Turbopack builds.
 *
 * The actual Drizzle Kit API is only needed by Payload's migration/schema
 * tooling, not by the Cloudflare request runtime.
 *
 * `payload migrate` runs separately in the Node build environment and does
 * not use this Turbopack alias.
 */

export const generateSQLiteDrizzleJson = () => {
  throw new Error(
    'drizzle-kit/api is not available inside the Cloudflare request bundle. ' +
      'Payload migration/schema tooling must run outside the Next.js bundle.',
  )
}

export const generateSQLiteMigration = () => {
  throw new Error(
    'drizzle-kit/api is not available inside the Cloudflare request bundle. ' +
      'Payload migration/schema tooling must run outside the Next.js bundle.',
  )
}

export const pushSQLiteSchema = () => {
  throw new Error(
    'drizzle-kit/api is not available inside the Cloudflare request bundle. ' +
      'Payload migration/schema tooling must run outside the Next.js bundle.',
  )
}
