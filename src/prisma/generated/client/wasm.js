
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.14.0
 * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
 */
Prisma.prismaVersion = {
  client: "5.14.0",
  engine: "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password'
};

exports.Prisma.BrokerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  phone: 'phone',
  email: 'email',
  image: 'image',
  status: 'status'
};

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  street: 'street',
  district: 'district',
  city: 'city',
  state: 'state',
  number: 'number',
  status: 'status'
};

exports.Prisma.ImmobileScalarFieldEnum = {
  id: 'id',
  id_broker: 'id_broker',
  title: 'title',
  description: 'description',
  address_id: 'address_id',
  price: 'price',
  additional: 'additional',
  size: 'size',
  bathroom: 'bathroom',
  vehicle_vacany: 'vehicle_vacany',
  bedrooms: 'bedrooms',
  recreation_area: 'recreation_area',
  pools: 'pools',
  id_category: 'id_category',
  id_type: 'id_type',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.TypeScalarFieldEnum = {
  id: 'id',
  description: 'description',
  status: 'status'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  description: 'description',
  status: 'status'
};

exports.Prisma.ImagesScalarFieldEnum = {
  id: 'id',
  id_immobile: 'id_immobile',
  url: 'url'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  Admin: 'Admin',
  Broker: 'Broker',
  Address: 'Address',
  Immobile: 'Immobile',
  Type: 'Type',
  Category: 'Category',
  Images: 'Images'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\dev\\Documents\\housesafe-api\\src\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.14.0",
  "engineVersion": "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  previewFeatures = [\"driverAdapters\"]\n  output          = \"./generated/client\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Admin {\n  id       Int    @id @default(autoincrement())\n  name     String\n  email    String @unique\n  password String\n}\n\nmodel Broker {\n  id       Int        @id @default(autoincrement())\n  name     String\n  phone    String\n  email    String\n  image    String\n  status   String     @default(dbgenerated(\"'N'\")) @db.Char()\n  Immobile Immobile[]\n}\n\nmodel Address {\n  id       Int    @id @default(autoincrement())\n  street   String\n  district String\n  city     String\n  state    String\n  number   Int\n  status   String @default(dbgenerated(\"'N'\")) @db.Char()\n\n  Immobile Immobile?\n}\n\nmodel Immobile {\n  id              Int      @id @default(autoincrement())\n  id_broker       Int\n  title           String\n  description     String\n  address_id      Int      @unique\n  price           Decimal  @db.Decimal(12, 3)\n  additional      String   @db.VarChar(255)\n  size            Float\n  bathroom        Int\n  vehicle_vacany  Int\n  bedrooms        Int\n  recreation_area Int\n  pools           Int\n  id_category     Int\n  id_type         Int\n  status          String   @default(dbgenerated(\"'D'\")) @db.Char()\n  created_at      DateTime @default(now())\n  updated_at      DateTime @default(now())\n  address         Address  @relation(fields: [address_id], references: [id])\n  broker          Broker   @relation(fields: [id_broker], references: [id])\n  category        Category @relation(fields: [id_category], references: [id])\n  type            Type     @relation(fields: [id_type], references: [id])\n  Images          Images[]\n}\n\nmodel Type {\n  id          Int        @id @default(autoincrement())\n  description String\n  Immobile    Immobile[]\n  status      String     @default(dbgenerated(\"'N'\")) @db.Char()\n}\n\nmodel Category {\n  id          Int        @id @default(autoincrement())\n  description String\n  Immobile    Immobile[]\n  status      String     @default(dbgenerated(\"'N'\")) @db.Char()\n}\n\nmodel Images {\n  id Int @id @default(autoincrement())\n\n  id_immobile Int\n  url         String\n  immobile    Immobile @relation(fields: [id_immobile], references: [id])\n}\n",
  "inlineSchemaHash": "0165967fc39168708368c20053adaddc6b7def4790db2ea52a258982923525ad",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Admin\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"Broker\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"image\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"Immobile\",\"kind\":\"object\",\"type\":\"Immobile\",\"relationName\":\"BrokerToImmobile\"}],\"dbName\":null},\"Address\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"street\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"district\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"city\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"state\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"number\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"Immobile\",\"kind\":\"object\",\"type\":\"Immobile\",\"relationName\":\"AddressToImmobile\"}],\"dbName\":null},\"Immobile\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"id_broker\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"address_id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"additional\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"size\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"bathroom\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"vehicle_vacany\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"bedrooms\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"recreation_area\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"pools\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"id_category\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"id_type\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"address\",\"kind\":\"object\",\"type\":\"Address\",\"relationName\":\"AddressToImmobile\"},{\"name\":\"broker\",\"kind\":\"object\",\"type\":\"Broker\",\"relationName\":\"BrokerToImmobile\"},{\"name\":\"category\",\"kind\":\"object\",\"type\":\"Category\",\"relationName\":\"CategoryToImmobile\"},{\"name\":\"type\",\"kind\":\"object\",\"type\":\"Type\",\"relationName\":\"ImmobileToType\"},{\"name\":\"Images\",\"kind\":\"object\",\"type\":\"Images\",\"relationName\":\"ImagesToImmobile\"}],\"dbName\":null},\"Type\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"Immobile\",\"kind\":\"object\",\"type\":\"Immobile\",\"relationName\":\"ImmobileToType\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"Category\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"Immobile\",\"kind\":\"object\",\"type\":\"Immobile\",\"relationName\":\"CategoryToImmobile\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"Images\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"id_immobile\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"immobile\",\"kind\":\"object\",\"type\":\"Immobile\",\"relationName\":\"ImagesToImmobile\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    return (await import('#wasm-engine-loader')).default
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

