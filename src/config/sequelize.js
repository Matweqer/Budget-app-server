export const dbConfig = {
  username: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || 'Dilda123',
  database: process.env.PGDATABASE || 'budget',
  host: process.env.PGHOST || 'localhost',
  port: parseInt(process.env.PGPORT || 5432, 10),
  dialect: 'postgres',
  logging: false,
};

