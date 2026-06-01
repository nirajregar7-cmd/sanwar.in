---
name: Session store setup
description: How to safely initialize connect-pg-simple with an existing PostgreSQL session table
---

## Rule
Never use `createTableIfMissing: true` in connect-pg-simple when the session table or its index (`IDX_session_expire`) may already exist. The library runs `CREATE INDEX` without `IF NOT EXISTS`, causing an error on every session operation.

**Why:** connect-pg-simple v10 calls `_rawEnsureSessionStoreTable` which does `CREATE TABLE IF NOT EXISTS` but `CREATE INDEX` without `IF NOT EXISTS`. If the index exists, every session read/write throws an unhandled error that propagates as 500.

**How to apply:** Use `createTableIfMissing: false` and run safe manual SQL before store creation:
```ts
await pool.query(`CREATE TABLE IF NOT EXISTS "session" (...)`);
await pool.query(`CREATE INDEX IF NOT EXISTS "IDX_session_expire" ON "session" ("expire")`);
const sessionStore = new PostgresSessionStore({ pool, createTableIfMissing: false, ... });
```
The `setupAuth` function must be async to await the table creation.
