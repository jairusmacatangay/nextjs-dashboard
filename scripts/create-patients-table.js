const { db } = require('@vercel/postgres');

async function createPatientsTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS patients (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        contact_no VARCHAR(255) NOT NULL,
        email_address VARCHAR(255) NOT NULL,
        birthdate DATE NOT NULL,
        gender VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "patients" table`);

    return createTable;
  } catch (error) {
    console.error('Error creating patients table', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await createPatientsTable(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occured while attempting to create patients table:',
    err,
  );
});
