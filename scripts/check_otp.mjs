#!/usr/bin/env node
import { db } from '../server/db.js';
import { passwordResetOtps } from '../shared/schema.js';
import { eq } from 'drizzle-orm';

async function main() {
  const email = process.argv[2];
  if (!email) {
    console.error('Usage: node scripts/check_otp.mjs <email>');
    process.exit(1);
  }

  const rows = await db.select().from(passwordResetOtps).where(eq(passwordResetOtps.email, email)).orderBy(passwordResetOtps.createdAt);
  if (rows.length === 0) {
    console.log('No OTP records found for', email);
    process.exit(0);
  }

  console.log('Found OTP records:');
  for (const r of rows) {
    console.log(r);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
