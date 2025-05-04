import * as dotenv from 'dotenv';
import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config();

export const ormConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  schema: process.env.DATABASE_SCHEMA,
  extra: {
    socketPath: process.env.DATABASE_SOCKET_PATH || undefined,
    ...(process.env.DATABASE_SSL_MODE
      ? { ssl: { rejectUnauthorized: process.env.DATABASE_SSL_MODE } }
      : {}),
  },
  entities: [join(__dirname, '../entities/**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, './migrations/*{.ts,.js}')],
  synchronize: false,
  logging: ['warn', 'error'],
  uuidExtension: 'pgcrypto',
};

const dataSource = new DataSource(ormConfig);
export default dataSource;
