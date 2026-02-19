
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Client
 * Client : particulier ou societe commanditaire d'un dossier
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Dossier
 * Dossier : point d'entree de toute intervention electrique
 */
export type Dossier = $Result.DefaultSelection<Prisma.$DossierPayload>
/**
 * Model Chantier
 * Chantier : detail operationnel des travaux d'un dossier
 */
export type Chantier = $Result.DefaultSelection<Prisma.$ChantierPayload>
/**
 * Model Devis
 * Devis commercial lie a un dossier
 */
export type Devis = $Result.DefaultSelection<Prisma.$DevisPayload>
/**
 * Model Diagnostic
 * Diagnostic technique realise sur site
 */
export type Diagnostic = $Result.DefaultSelection<Prisma.$DiagnosticPayload>
/**
 * Model Circuit
 * Circuit electrique d'une installation
 */
export type Circuit = $Result.DefaultSelection<Prisma.$CircuitPayload>
/**
 * Model Protection
 * Protection electrique (disjoncteur, differentiel, fusible)
 */
export type Protection = $Result.DefaultSelection<Prisma.$ProtectionPayload>
/**
 * Model PointControleRgie
 * Point de controle RGIE rattache a un dossier
 */
export type PointControleRgie = $Result.DefaultSelection<Prisma.$PointControleRgiePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatutChantier: {
  A_DEVISER: 'A_DEVISER',
  DEVIS_ENVOYE: 'DEVIS_ENVOYE',
  ACCEPTE: 'ACCEPTE',
  EN_COURS: 'EN_COURS',
  EN_ATTENTE_FOURNISSEUR: 'EN_ATTENTE_FOURNISSEUR',
  EN_ATTENTE_PAIEMENT: 'EN_ATTENTE_PAIEMENT',
  CLOTURE: 'CLOTURE'
};

export type StatutChantier = (typeof StatutChantier)[keyof typeof StatutChantier]


export const EtatElement: {
  PREVU: 'PREVU',
  EN_COURS: 'EN_COURS',
  TERMINE: 'TERMINE',
  NON_CONFORME: 'NON_CONFORME',
  CONFORME: 'CONFORME'
};

export type EtatElement = (typeof EtatElement)[keyof typeof EtatElement]


export const TypeCircuit: {
  ECLAIRAGE: 'ECLAIRAGE',
  PRISES: 'PRISES',
  MIXTE: 'MIXTE',
  FOUR: 'FOUR',
  TAQUE: 'TAQUE',
  MACHINE_LAVER: 'MACHINE_LAVER',
  SECHOIR: 'SECHOIR',
  CHAUFFE_EAU: 'CHAUFFE_EAU',
  POMPE: 'POMPE',
  BORNE_RECHARGE: 'BORNE_RECHARGE',
  TABLEAU: 'TABLEAU',
  AUTRE: 'AUTRE'
};

export type TypeCircuit = (typeof TypeCircuit)[keyof typeof TypeCircuit]


export const TypeInstallation: {
  RESIDENTIEL: 'RESIDENTIEL',
  TERTIAIRE: 'TERTIAIRE',
  INDUSTRIEL: 'INDUSTRIEL'
};

export type TypeInstallation = (typeof TypeInstallation)[keyof typeof TypeInstallation]


export const StatutDevis: {
  BROUILLON: 'BROUILLON',
  ENVOYE: 'ENVOYE',
  ACCEPTE: 'ACCEPTE',
  REFUSE: 'REFUSE',
  EXPIRE: 'EXPIRE'
};

export type StatutDevis = (typeof StatutDevis)[keyof typeof StatutDevis]


export const StatutDiagnostic: {
  EN_ATTENTE: 'EN_ATTENTE',
  EN_COURS: 'EN_COURS',
  TERMINE: 'TERMINE',
  BLOQUANT: 'BLOQUANT'
};

export type StatutDiagnostic = (typeof StatutDiagnostic)[keyof typeof StatutDiagnostic]


export const StatutRgie: {
  CONFORME: 'CONFORME',
  NON_CONFORME: 'NON_CONFORME',
  AVERTISSEMENT: 'AVERTISSEMENT'
};

export type StatutRgie = (typeof StatutRgie)[keyof typeof StatutRgie]


export const TypeProtection: {
  DISJONCTEUR: 'DISJONCTEUR',
  DIFFERENTIEL: 'DIFFERENTIEL',
  FUSIBLE: 'FUSIBLE'
};

export type TypeProtection = (typeof TypeProtection)[keyof typeof TypeProtection]


export const CourbeDisjoncteur: {
  B: 'B',
  C: 'C',
  D: 'D'
};

export type CourbeDisjoncteur = (typeof CourbeDisjoncteur)[keyof typeof CourbeDisjoncteur]


export const TypeDifferentiel: {
  AC: 'AC',
  A: 'A',
  F: 'F',
  B: 'B'
};

export type TypeDifferentiel = (typeof TypeDifferentiel)[keyof typeof TypeDifferentiel]

}

export type StatutChantier = $Enums.StatutChantier

export const StatutChantier: typeof $Enums.StatutChantier

export type EtatElement = $Enums.EtatElement

export const EtatElement: typeof $Enums.EtatElement

export type TypeCircuit = $Enums.TypeCircuit

export const TypeCircuit: typeof $Enums.TypeCircuit

export type TypeInstallation = $Enums.TypeInstallation

export const TypeInstallation: typeof $Enums.TypeInstallation

export type StatutDevis = $Enums.StatutDevis

export const StatutDevis: typeof $Enums.StatutDevis

export type StatutDiagnostic = $Enums.StatutDiagnostic

export const StatutDiagnostic: typeof $Enums.StatutDiagnostic

export type StatutRgie = $Enums.StatutRgie

export const StatutRgie: typeof $Enums.StatutRgie

export type TypeProtection = $Enums.TypeProtection

export const TypeProtection: typeof $Enums.TypeProtection

export type CourbeDisjoncteur = $Enums.CourbeDisjoncteur

export const CourbeDisjoncteur: typeof $Enums.CourbeDisjoncteur

export type TypeDifferentiel = $Enums.TypeDifferentiel

export const TypeDifferentiel: typeof $Enums.TypeDifferentiel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clients
 * const clients = await prisma.client.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dossier`: Exposes CRUD operations for the **Dossier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dossiers
    * const dossiers = await prisma.dossier.findMany()
    * ```
    */
  get dossier(): Prisma.DossierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chantier`: Exposes CRUD operations for the **Chantier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chantiers
    * const chantiers = await prisma.chantier.findMany()
    * ```
    */
  get chantier(): Prisma.ChantierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.devis`: Exposes CRUD operations for the **Devis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devis
    * const devis = await prisma.devis.findMany()
    * ```
    */
  get devis(): Prisma.DevisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnostic`: Exposes CRUD operations for the **Diagnostic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagnostics
    * const diagnostics = await prisma.diagnostic.findMany()
    * ```
    */
  get diagnostic(): Prisma.DiagnosticDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.circuit`: Exposes CRUD operations for the **Circuit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Circuits
    * const circuits = await prisma.circuit.findMany()
    * ```
    */
  get circuit(): Prisma.CircuitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.protection`: Exposes CRUD operations for the **Protection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Protections
    * const protections = await prisma.protection.findMany()
    * ```
    */
  get protection(): Prisma.ProtectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pointControleRgie`: Exposes CRUD operations for the **PointControleRgie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PointControleRgies
    * const pointControleRgies = await prisma.pointControleRgie.findMany()
    * ```
    */
  get pointControleRgie(): Prisma.PointControleRgieDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Client: 'Client',
    Dossier: 'Dossier',
    Chantier: 'Chantier',
    Devis: 'Devis',
    Diagnostic: 'Diagnostic',
    Circuit: 'Circuit',
    Protection: 'Protection',
    PointControleRgie: 'PointControleRgie'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "client" | "dossier" | "chantier" | "devis" | "diagnostic" | "circuit" | "protection" | "pointControleRgie"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Dossier: {
        payload: Prisma.$DossierPayload<ExtArgs>
        fields: Prisma.DossierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DossierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DossierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload>
          }
          findFirst: {
            args: Prisma.DossierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DossierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload>
          }
          findMany: {
            args: Prisma.DossierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload>[]
          }
          create: {
            args: Prisma.DossierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload>
          }
          createMany: {
            args: Prisma.DossierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DossierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload>[]
          }
          delete: {
            args: Prisma.DossierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload>
          }
          update: {
            args: Prisma.DossierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload>
          }
          deleteMany: {
            args: Prisma.DossierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DossierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DossierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload>[]
          }
          upsert: {
            args: Prisma.DossierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DossierPayload>
          }
          aggregate: {
            args: Prisma.DossierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDossier>
          }
          groupBy: {
            args: Prisma.DossierGroupByArgs<ExtArgs>
            result: $Utils.Optional<DossierGroupByOutputType>[]
          }
          count: {
            args: Prisma.DossierCountArgs<ExtArgs>
            result: $Utils.Optional<DossierCountAggregateOutputType> | number
          }
        }
      }
      Chantier: {
        payload: Prisma.$ChantierPayload<ExtArgs>
        fields: Prisma.ChantierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChantierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChantierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChantierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChantierPayload>
          }
          findFirst: {
            args: Prisma.ChantierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChantierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChantierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChantierPayload>
          }
          findMany: {
            args: Prisma.ChantierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChantierPayload>[]
          }
          create: {
            args: Prisma.ChantierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChantierPayload>
          }
          createMany: {
            args: Prisma.ChantierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChantierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChantierPayload>[]
          }
          delete: {
            args: Prisma.ChantierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChantierPayload>
          }
          update: {
            args: Prisma.ChantierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChantierPayload>
          }
          deleteMany: {
            args: Prisma.ChantierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChantierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChantierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChantierPayload>[]
          }
          upsert: {
            args: Prisma.ChantierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChantierPayload>
          }
          aggregate: {
            args: Prisma.ChantierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChantier>
          }
          groupBy: {
            args: Prisma.ChantierGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChantierGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChantierCountArgs<ExtArgs>
            result: $Utils.Optional<ChantierCountAggregateOutputType> | number
          }
        }
      }
      Devis: {
        payload: Prisma.$DevisPayload<ExtArgs>
        fields: Prisma.DevisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DevisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DevisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload>
          }
          findFirst: {
            args: Prisma.DevisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DevisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload>
          }
          findMany: {
            args: Prisma.DevisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload>[]
          }
          create: {
            args: Prisma.DevisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload>
          }
          createMany: {
            args: Prisma.DevisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DevisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload>[]
          }
          delete: {
            args: Prisma.DevisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload>
          }
          update: {
            args: Prisma.DevisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload>
          }
          deleteMany: {
            args: Prisma.DevisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DevisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DevisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload>[]
          }
          upsert: {
            args: Prisma.DevisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisPayload>
          }
          aggregate: {
            args: Prisma.DevisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevis>
          }
          groupBy: {
            args: Prisma.DevisGroupByArgs<ExtArgs>
            result: $Utils.Optional<DevisGroupByOutputType>[]
          }
          count: {
            args: Prisma.DevisCountArgs<ExtArgs>
            result: $Utils.Optional<DevisCountAggregateOutputType> | number
          }
        }
      }
      Diagnostic: {
        payload: Prisma.$DiagnosticPayload<ExtArgs>
        fields: Prisma.DiagnosticFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnosticFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnosticFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>
          }
          findFirst: {
            args: Prisma.DiagnosticFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnosticFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>
          }
          findMany: {
            args: Prisma.DiagnosticFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>[]
          }
          create: {
            args: Prisma.DiagnosticCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>
          }
          createMany: {
            args: Prisma.DiagnosticCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiagnosticCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>[]
          }
          delete: {
            args: Prisma.DiagnosticDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>
          }
          update: {
            args: Prisma.DiagnosticUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>
          }
          deleteMany: {
            args: Prisma.DiagnosticDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnosticUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiagnosticUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>[]
          }
          upsert: {
            args: Prisma.DiagnosticUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticPayload>
          }
          aggregate: {
            args: Prisma.DiagnosticAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnostic>
          }
          groupBy: {
            args: Prisma.DiagnosticGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiagnosticCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticCountAggregateOutputType> | number
          }
        }
      }
      Circuit: {
        payload: Prisma.$CircuitPayload<ExtArgs>
        fields: Prisma.CircuitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CircuitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CircuitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload>
          }
          findFirst: {
            args: Prisma.CircuitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CircuitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload>
          }
          findMany: {
            args: Prisma.CircuitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload>[]
          }
          create: {
            args: Prisma.CircuitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload>
          }
          createMany: {
            args: Prisma.CircuitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CircuitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload>[]
          }
          delete: {
            args: Prisma.CircuitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload>
          }
          update: {
            args: Prisma.CircuitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload>
          }
          deleteMany: {
            args: Prisma.CircuitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CircuitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CircuitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload>[]
          }
          upsert: {
            args: Prisma.CircuitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CircuitPayload>
          }
          aggregate: {
            args: Prisma.CircuitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCircuit>
          }
          groupBy: {
            args: Prisma.CircuitGroupByArgs<ExtArgs>
            result: $Utils.Optional<CircuitGroupByOutputType>[]
          }
          count: {
            args: Prisma.CircuitCountArgs<ExtArgs>
            result: $Utils.Optional<CircuitCountAggregateOutputType> | number
          }
        }
      }
      Protection: {
        payload: Prisma.$ProtectionPayload<ExtArgs>
        fields: Prisma.ProtectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProtectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProtectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload>
          }
          findFirst: {
            args: Prisma.ProtectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProtectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload>
          }
          findMany: {
            args: Prisma.ProtectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload>[]
          }
          create: {
            args: Prisma.ProtectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload>
          }
          createMany: {
            args: Prisma.ProtectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProtectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload>[]
          }
          delete: {
            args: Prisma.ProtectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload>
          }
          update: {
            args: Prisma.ProtectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload>
          }
          deleteMany: {
            args: Prisma.ProtectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProtectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProtectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload>[]
          }
          upsert: {
            args: Prisma.ProtectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtectionPayload>
          }
          aggregate: {
            args: Prisma.ProtectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProtection>
          }
          groupBy: {
            args: Prisma.ProtectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProtectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProtectionCountArgs<ExtArgs>
            result: $Utils.Optional<ProtectionCountAggregateOutputType> | number
          }
        }
      }
      PointControleRgie: {
        payload: Prisma.$PointControleRgiePayload<ExtArgs>
        fields: Prisma.PointControleRgieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointControleRgieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointControleRgiePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointControleRgieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointControleRgiePayload>
          }
          findFirst: {
            args: Prisma.PointControleRgieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointControleRgiePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointControleRgieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointControleRgiePayload>
          }
          findMany: {
            args: Prisma.PointControleRgieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointControleRgiePayload>[]
          }
          create: {
            args: Prisma.PointControleRgieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointControleRgiePayload>
          }
          createMany: {
            args: Prisma.PointControleRgieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointControleRgieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointControleRgiePayload>[]
          }
          delete: {
            args: Prisma.PointControleRgieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointControleRgiePayload>
          }
          update: {
            args: Prisma.PointControleRgieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointControleRgiePayload>
          }
          deleteMany: {
            args: Prisma.PointControleRgieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointControleRgieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PointControleRgieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointControleRgiePayload>[]
          }
          upsert: {
            args: Prisma.PointControleRgieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointControleRgiePayload>
          }
          aggregate: {
            args: Prisma.PointControleRgieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePointControleRgie>
          }
          groupBy: {
            args: Prisma.PointControleRgieGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointControleRgieGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointControleRgieCountArgs<ExtArgs>
            result: $Utils.Optional<PointControleRgieCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    client?: ClientOmit
    dossier?: DossierOmit
    chantier?: ChantierOmit
    devis?: DevisOmit
    diagnostic?: DiagnosticOmit
    circuit?: CircuitOmit
    protection?: ProtectionOmit
    pointControleRgie?: PointControleRgieOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    dossiers: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossiers?: boolean | ClientCountOutputTypeCountDossiersArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountDossiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DossierWhereInput
  }


  /**
   * Count Type DossierCountOutputType
   */

  export type DossierCountOutputType = {
    devis: number
    diagnostics: number
    circuits: number
    pointsControle: number
  }

  export type DossierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devis?: boolean | DossierCountOutputTypeCountDevisArgs
    diagnostics?: boolean | DossierCountOutputTypeCountDiagnosticsArgs
    circuits?: boolean | DossierCountOutputTypeCountCircuitsArgs
    pointsControle?: boolean | DossierCountOutputTypeCountPointsControleArgs
  }

  // Custom InputTypes
  /**
   * DossierCountOutputType without action
   */
  export type DossierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DossierCountOutputType
     */
    select?: DossierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DossierCountOutputType without action
   */
  export type DossierCountOutputTypeCountDevisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevisWhereInput
  }

  /**
   * DossierCountOutputType without action
   */
  export type DossierCountOutputTypeCountDiagnosticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticWhereInput
  }

  /**
   * DossierCountOutputType without action
   */
  export type DossierCountOutputTypeCountCircuitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircuitWhereInput
  }

  /**
   * DossierCountOutputType without action
   */
  export type DossierCountOutputTypeCountPointsControleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointControleRgieWhereInput
  }


  /**
   * Count Type CircuitCountOutputType
   */

  export type CircuitCountOutputType = {
    protections: number
  }

  export type CircuitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    protections?: boolean | CircuitCountOutputTypeCountProtectionsArgs
  }

  // Custom InputTypes
  /**
   * CircuitCountOutputType without action
   */
  export type CircuitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CircuitCountOutputType
     */
    select?: CircuitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CircuitCountOutputType without action
   */
  export type CircuitCountOutputTypeCountProtectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProtectionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    email: string | null
    telephone: string | null
    adresse: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    email: string | null
    telephone: string | null
    adresse: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    email: number
    telephone: number
    adresse: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    adresse?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    adresse?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    adresse?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    nom: string
    prenom: string | null
    email: string | null
    telephone: string | null
    adresse: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    adresse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossiers?: boolean | Client$dossiersArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    adresse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    adresse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    adresse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "email" | "telephone" | "adresse" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossiers?: boolean | Client$dossiersArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      dossiers: Prisma.$DossierPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      prenom: string | null
      email: string | null
      telephone: string | null
      adresse: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dossiers<T extends Client$dossiersArgs<ExtArgs> = {}>(args?: Subset<T, Client$dossiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly nom: FieldRef<"Client", 'String'>
    readonly prenom: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly telephone: FieldRef<"Client", 'String'>
    readonly adresse: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.dossiers
   */
  export type Client$dossiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
    where?: DossierWhereInput
    orderBy?: DossierOrderByWithRelationInput | DossierOrderByWithRelationInput[]
    cursor?: DossierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DossierScalarFieldEnum | DossierScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Dossier
   */

  export type AggregateDossier = {
    _count: DossierCountAggregateOutputType | null
    _min: DossierMinAggregateOutputType | null
    _max: DossierMaxAggregateOutputType | null
  }

  export type DossierMinAggregateOutputType = {
    id: string | null
    reference: string | null
    titre: string | null
    typeInstallation: $Enums.TypeInstallation | null
    statut: $Enums.StatutChantier | null
    description: string | null
    adresseChantier: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: string | null
  }

  export type DossierMaxAggregateOutputType = {
    id: string | null
    reference: string | null
    titre: string | null
    typeInstallation: $Enums.TypeInstallation | null
    statut: $Enums.StatutChantier | null
    description: string | null
    adresseChantier: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: string | null
  }

  export type DossierCountAggregateOutputType = {
    id: number
    reference: number
    titre: number
    typeInstallation: number
    statut: number
    description: number
    adresseChantier: number
    createdAt: number
    updatedAt: number
    clientId: number
    _all: number
  }


  export type DossierMinAggregateInputType = {
    id?: true
    reference?: true
    titre?: true
    typeInstallation?: true
    statut?: true
    description?: true
    adresseChantier?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type DossierMaxAggregateInputType = {
    id?: true
    reference?: true
    titre?: true
    typeInstallation?: true
    statut?: true
    description?: true
    adresseChantier?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type DossierCountAggregateInputType = {
    id?: true
    reference?: true
    titre?: true
    typeInstallation?: true
    statut?: true
    description?: true
    adresseChantier?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    _all?: true
  }

  export type DossierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dossier to aggregate.
     */
    where?: DossierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dossiers to fetch.
     */
    orderBy?: DossierOrderByWithRelationInput | DossierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DossierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dossiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dossiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dossiers
    **/
    _count?: true | DossierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DossierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DossierMaxAggregateInputType
  }

  export type GetDossierAggregateType<T extends DossierAggregateArgs> = {
        [P in keyof T & keyof AggregateDossier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDossier[P]>
      : GetScalarType<T[P], AggregateDossier[P]>
  }




  export type DossierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DossierWhereInput
    orderBy?: DossierOrderByWithAggregationInput | DossierOrderByWithAggregationInput[]
    by: DossierScalarFieldEnum[] | DossierScalarFieldEnum
    having?: DossierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DossierCountAggregateInputType | true
    _min?: DossierMinAggregateInputType
    _max?: DossierMaxAggregateInputType
  }

  export type DossierGroupByOutputType = {
    id: string
    reference: string
    titre: string
    typeInstallation: $Enums.TypeInstallation
    statut: $Enums.StatutChantier
    description: string | null
    adresseChantier: string | null
    createdAt: Date
    updatedAt: Date
    clientId: string
    _count: DossierCountAggregateOutputType | null
    _min: DossierMinAggregateOutputType | null
    _max: DossierMaxAggregateOutputType | null
  }

  type GetDossierGroupByPayload<T extends DossierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DossierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DossierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DossierGroupByOutputType[P]>
            : GetScalarType<T[P], DossierGroupByOutputType[P]>
        }
      >
    >


  export type DossierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    titre?: boolean
    typeInstallation?: boolean
    statut?: boolean
    description?: boolean
    adresseChantier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    chantier?: boolean | Dossier$chantierArgs<ExtArgs>
    devis?: boolean | Dossier$devisArgs<ExtArgs>
    diagnostics?: boolean | Dossier$diagnosticsArgs<ExtArgs>
    circuits?: boolean | Dossier$circuitsArgs<ExtArgs>
    pointsControle?: boolean | Dossier$pointsControleArgs<ExtArgs>
    _count?: boolean | DossierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dossier"]>

  export type DossierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    titre?: boolean
    typeInstallation?: boolean
    statut?: boolean
    description?: boolean
    adresseChantier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dossier"]>

  export type DossierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    titre?: boolean
    typeInstallation?: boolean
    statut?: boolean
    description?: boolean
    adresseChantier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dossier"]>

  export type DossierSelectScalar = {
    id?: boolean
    reference?: boolean
    titre?: boolean
    typeInstallation?: boolean
    statut?: boolean
    description?: boolean
    adresseChantier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
  }

  export type DossierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reference" | "titre" | "typeInstallation" | "statut" | "description" | "adresseChantier" | "createdAt" | "updatedAt" | "clientId", ExtArgs["result"]["dossier"]>
  export type DossierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    chantier?: boolean | Dossier$chantierArgs<ExtArgs>
    devis?: boolean | Dossier$devisArgs<ExtArgs>
    diagnostics?: boolean | Dossier$diagnosticsArgs<ExtArgs>
    circuits?: boolean | Dossier$circuitsArgs<ExtArgs>
    pointsControle?: boolean | Dossier$pointsControleArgs<ExtArgs>
    _count?: boolean | DossierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DossierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type DossierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $DossierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dossier"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      chantier: Prisma.$ChantierPayload<ExtArgs> | null
      devis: Prisma.$DevisPayload<ExtArgs>[]
      diagnostics: Prisma.$DiagnosticPayload<ExtArgs>[]
      circuits: Prisma.$CircuitPayload<ExtArgs>[]
      pointsControle: Prisma.$PointControleRgiePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reference: string
      titre: string
      typeInstallation: $Enums.TypeInstallation
      statut: $Enums.StatutChantier
      description: string | null
      adresseChantier: string | null
      createdAt: Date
      updatedAt: Date
      clientId: string
    }, ExtArgs["result"]["dossier"]>
    composites: {}
  }

  type DossierGetPayload<S extends boolean | null | undefined | DossierDefaultArgs> = $Result.GetResult<Prisma.$DossierPayload, S>

  type DossierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DossierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DossierCountAggregateInputType | true
    }

  export interface DossierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dossier'], meta: { name: 'Dossier' } }
    /**
     * Find zero or one Dossier that matches the filter.
     * @param {DossierFindUniqueArgs} args - Arguments to find a Dossier
     * @example
     * // Get one Dossier
     * const dossier = await prisma.dossier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DossierFindUniqueArgs>(args: SelectSubset<T, DossierFindUniqueArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dossier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DossierFindUniqueOrThrowArgs} args - Arguments to find a Dossier
     * @example
     * // Get one Dossier
     * const dossier = await prisma.dossier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DossierFindUniqueOrThrowArgs>(args: SelectSubset<T, DossierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dossier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierFindFirstArgs} args - Arguments to find a Dossier
     * @example
     * // Get one Dossier
     * const dossier = await prisma.dossier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DossierFindFirstArgs>(args?: SelectSubset<T, DossierFindFirstArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dossier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierFindFirstOrThrowArgs} args - Arguments to find a Dossier
     * @example
     * // Get one Dossier
     * const dossier = await prisma.dossier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DossierFindFirstOrThrowArgs>(args?: SelectSubset<T, DossierFindFirstOrThrowArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dossiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dossiers
     * const dossiers = await prisma.dossier.findMany()
     * 
     * // Get first 10 Dossiers
     * const dossiers = await prisma.dossier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dossierWithIdOnly = await prisma.dossier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DossierFindManyArgs>(args?: SelectSubset<T, DossierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dossier.
     * @param {DossierCreateArgs} args - Arguments to create a Dossier.
     * @example
     * // Create one Dossier
     * const Dossier = await prisma.dossier.create({
     *   data: {
     *     // ... data to create a Dossier
     *   }
     * })
     * 
     */
    create<T extends DossierCreateArgs>(args: SelectSubset<T, DossierCreateArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dossiers.
     * @param {DossierCreateManyArgs} args - Arguments to create many Dossiers.
     * @example
     * // Create many Dossiers
     * const dossier = await prisma.dossier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DossierCreateManyArgs>(args?: SelectSubset<T, DossierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dossiers and returns the data saved in the database.
     * @param {DossierCreateManyAndReturnArgs} args - Arguments to create many Dossiers.
     * @example
     * // Create many Dossiers
     * const dossier = await prisma.dossier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dossiers and only return the `id`
     * const dossierWithIdOnly = await prisma.dossier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DossierCreateManyAndReturnArgs>(args?: SelectSubset<T, DossierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dossier.
     * @param {DossierDeleteArgs} args - Arguments to delete one Dossier.
     * @example
     * // Delete one Dossier
     * const Dossier = await prisma.dossier.delete({
     *   where: {
     *     // ... filter to delete one Dossier
     *   }
     * })
     * 
     */
    delete<T extends DossierDeleteArgs>(args: SelectSubset<T, DossierDeleteArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dossier.
     * @param {DossierUpdateArgs} args - Arguments to update one Dossier.
     * @example
     * // Update one Dossier
     * const dossier = await prisma.dossier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DossierUpdateArgs>(args: SelectSubset<T, DossierUpdateArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dossiers.
     * @param {DossierDeleteManyArgs} args - Arguments to filter Dossiers to delete.
     * @example
     * // Delete a few Dossiers
     * const { count } = await prisma.dossier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DossierDeleteManyArgs>(args?: SelectSubset<T, DossierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dossiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dossiers
     * const dossier = await prisma.dossier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DossierUpdateManyArgs>(args: SelectSubset<T, DossierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dossiers and returns the data updated in the database.
     * @param {DossierUpdateManyAndReturnArgs} args - Arguments to update many Dossiers.
     * @example
     * // Update many Dossiers
     * const dossier = await prisma.dossier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dossiers and only return the `id`
     * const dossierWithIdOnly = await prisma.dossier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DossierUpdateManyAndReturnArgs>(args: SelectSubset<T, DossierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dossier.
     * @param {DossierUpsertArgs} args - Arguments to update or create a Dossier.
     * @example
     * // Update or create a Dossier
     * const dossier = await prisma.dossier.upsert({
     *   create: {
     *     // ... data to create a Dossier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dossier we want to update
     *   }
     * })
     */
    upsert<T extends DossierUpsertArgs>(args: SelectSubset<T, DossierUpsertArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dossiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierCountArgs} args - Arguments to filter Dossiers to count.
     * @example
     * // Count the number of Dossiers
     * const count = await prisma.dossier.count({
     *   where: {
     *     // ... the filter for the Dossiers we want to count
     *   }
     * })
    **/
    count<T extends DossierCountArgs>(
      args?: Subset<T, DossierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DossierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dossier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DossierAggregateArgs>(args: Subset<T, DossierAggregateArgs>): Prisma.PrismaPromise<GetDossierAggregateType<T>>

    /**
     * Group by Dossier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DossierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DossierGroupByArgs['orderBy'] }
        : { orderBy?: DossierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DossierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDossierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dossier model
   */
  readonly fields: DossierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dossier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DossierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chantier<T extends Dossier$chantierArgs<ExtArgs> = {}>(args?: Subset<T, Dossier$chantierArgs<ExtArgs>>): Prisma__ChantierClient<$Result.GetResult<Prisma.$ChantierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    devis<T extends Dossier$devisArgs<ExtArgs> = {}>(args?: Subset<T, Dossier$devisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    diagnostics<T extends Dossier$diagnosticsArgs<ExtArgs> = {}>(args?: Subset<T, Dossier$diagnosticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    circuits<T extends Dossier$circuitsArgs<ExtArgs> = {}>(args?: Subset<T, Dossier$circuitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pointsControle<T extends Dossier$pointsControleArgs<ExtArgs> = {}>(args?: Subset<T, Dossier$pointsControleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointControleRgiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dossier model
   */
  interface DossierFieldRefs {
    readonly id: FieldRef<"Dossier", 'String'>
    readonly reference: FieldRef<"Dossier", 'String'>
    readonly titre: FieldRef<"Dossier", 'String'>
    readonly typeInstallation: FieldRef<"Dossier", 'TypeInstallation'>
    readonly statut: FieldRef<"Dossier", 'StatutChantier'>
    readonly description: FieldRef<"Dossier", 'String'>
    readonly adresseChantier: FieldRef<"Dossier", 'String'>
    readonly createdAt: FieldRef<"Dossier", 'DateTime'>
    readonly updatedAt: FieldRef<"Dossier", 'DateTime'>
    readonly clientId: FieldRef<"Dossier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dossier findUnique
   */
  export type DossierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
    /**
     * Filter, which Dossier to fetch.
     */
    where: DossierWhereUniqueInput
  }

  /**
   * Dossier findUniqueOrThrow
   */
  export type DossierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
    /**
     * Filter, which Dossier to fetch.
     */
    where: DossierWhereUniqueInput
  }

  /**
   * Dossier findFirst
   */
  export type DossierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
    /**
     * Filter, which Dossier to fetch.
     */
    where?: DossierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dossiers to fetch.
     */
    orderBy?: DossierOrderByWithRelationInput | DossierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dossiers.
     */
    cursor?: DossierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dossiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dossiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dossiers.
     */
    distinct?: DossierScalarFieldEnum | DossierScalarFieldEnum[]
  }

  /**
   * Dossier findFirstOrThrow
   */
  export type DossierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
    /**
     * Filter, which Dossier to fetch.
     */
    where?: DossierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dossiers to fetch.
     */
    orderBy?: DossierOrderByWithRelationInput | DossierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dossiers.
     */
    cursor?: DossierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dossiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dossiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dossiers.
     */
    distinct?: DossierScalarFieldEnum | DossierScalarFieldEnum[]
  }

  /**
   * Dossier findMany
   */
  export type DossierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
    /**
     * Filter, which Dossiers to fetch.
     */
    where?: DossierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dossiers to fetch.
     */
    orderBy?: DossierOrderByWithRelationInput | DossierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dossiers.
     */
    cursor?: DossierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dossiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dossiers.
     */
    skip?: number
    distinct?: DossierScalarFieldEnum | DossierScalarFieldEnum[]
  }

  /**
   * Dossier create
   */
  export type DossierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
    /**
     * The data needed to create a Dossier.
     */
    data: XOR<DossierCreateInput, DossierUncheckedCreateInput>
  }

  /**
   * Dossier createMany
   */
  export type DossierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dossiers.
     */
    data: DossierCreateManyInput | DossierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dossier createManyAndReturn
   */
  export type DossierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * The data used to create many Dossiers.
     */
    data: DossierCreateManyInput | DossierCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dossier update
   */
  export type DossierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
    /**
     * The data needed to update a Dossier.
     */
    data: XOR<DossierUpdateInput, DossierUncheckedUpdateInput>
    /**
     * Choose, which Dossier to update.
     */
    where: DossierWhereUniqueInput
  }

  /**
   * Dossier updateMany
   */
  export type DossierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dossiers.
     */
    data: XOR<DossierUpdateManyMutationInput, DossierUncheckedUpdateManyInput>
    /**
     * Filter which Dossiers to update
     */
    where?: DossierWhereInput
    /**
     * Limit how many Dossiers to update.
     */
    limit?: number
  }

  /**
   * Dossier updateManyAndReturn
   */
  export type DossierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * The data used to update Dossiers.
     */
    data: XOR<DossierUpdateManyMutationInput, DossierUncheckedUpdateManyInput>
    /**
     * Filter which Dossiers to update
     */
    where?: DossierWhereInput
    /**
     * Limit how many Dossiers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dossier upsert
   */
  export type DossierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
    /**
     * The filter to search for the Dossier to update in case it exists.
     */
    where: DossierWhereUniqueInput
    /**
     * In case the Dossier found by the `where` argument doesn't exist, create a new Dossier with this data.
     */
    create: XOR<DossierCreateInput, DossierUncheckedCreateInput>
    /**
     * In case the Dossier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DossierUpdateInput, DossierUncheckedUpdateInput>
  }

  /**
   * Dossier delete
   */
  export type DossierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
    /**
     * Filter which Dossier to delete.
     */
    where: DossierWhereUniqueInput
  }

  /**
   * Dossier deleteMany
   */
  export type DossierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dossiers to delete
     */
    where?: DossierWhereInput
    /**
     * Limit how many Dossiers to delete.
     */
    limit?: number
  }

  /**
   * Dossier.chantier
   */
  export type Dossier$chantierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chantier
     */
    select?: ChantierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chantier
     */
    omit?: ChantierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChantierInclude<ExtArgs> | null
    where?: ChantierWhereInput
  }

  /**
   * Dossier.devis
   */
  export type Dossier$devisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
    where?: DevisWhereInput
    orderBy?: DevisOrderByWithRelationInput | DevisOrderByWithRelationInput[]
    cursor?: DevisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DevisScalarFieldEnum | DevisScalarFieldEnum[]
  }

  /**
   * Dossier.diagnostics
   */
  export type Dossier$diagnosticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    where?: DiagnosticWhereInput
    orderBy?: DiagnosticOrderByWithRelationInput | DiagnosticOrderByWithRelationInput[]
    cursor?: DiagnosticWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticScalarFieldEnum | DiagnosticScalarFieldEnum[]
  }

  /**
   * Dossier.circuits
   */
  export type Dossier$circuitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    where?: CircuitWhereInput
    orderBy?: CircuitOrderByWithRelationInput | CircuitOrderByWithRelationInput[]
    cursor?: CircuitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CircuitScalarFieldEnum | CircuitScalarFieldEnum[]
  }

  /**
   * Dossier.pointsControle
   */
  export type Dossier$pointsControleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointControleRgie
     */
    select?: PointControleRgieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointControleRgie
     */
    omit?: PointControleRgieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointControleRgieInclude<ExtArgs> | null
    where?: PointControleRgieWhereInput
    orderBy?: PointControleRgieOrderByWithRelationInput | PointControleRgieOrderByWithRelationInput[]
    cursor?: PointControleRgieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointControleRgieScalarFieldEnum | PointControleRgieScalarFieldEnum[]
  }

  /**
   * Dossier without action
   */
  export type DossierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dossier
     */
    select?: DossierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dossier
     */
    omit?: DossierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DossierInclude<ExtArgs> | null
  }


  /**
   * Model Chantier
   */

  export type AggregateChantier = {
    _count: ChantierCountAggregateOutputType | null
    _min: ChantierMinAggregateOutputType | null
    _max: ChantierMaxAggregateOutputType | null
  }

  export type ChantierMinAggregateOutputType = {
    id: string | null
    etat: $Enums.EtatElement | null
    dateDebut: Date | null
    dateFin: Date | null
    responsable: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    dossierId: string | null
  }

  export type ChantierMaxAggregateOutputType = {
    id: string | null
    etat: $Enums.EtatElement | null
    dateDebut: Date | null
    dateFin: Date | null
    responsable: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    dossierId: string | null
  }

  export type ChantierCountAggregateOutputType = {
    id: number
    etat: number
    dateDebut: number
    dateFin: number
    responsable: number
    notes: number
    createdAt: number
    updatedAt: number
    dossierId: number
    _all: number
  }


  export type ChantierMinAggregateInputType = {
    id?: true
    etat?: true
    dateDebut?: true
    dateFin?: true
    responsable?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    dossierId?: true
  }

  export type ChantierMaxAggregateInputType = {
    id?: true
    etat?: true
    dateDebut?: true
    dateFin?: true
    responsable?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    dossierId?: true
  }

  export type ChantierCountAggregateInputType = {
    id?: true
    etat?: true
    dateDebut?: true
    dateFin?: true
    responsable?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    dossierId?: true
    _all?: true
  }

  export type ChantierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chantier to aggregate.
     */
    where?: ChantierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chantiers to fetch.
     */
    orderBy?: ChantierOrderByWithRelationInput | ChantierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChantierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chantiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chantiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chantiers
    **/
    _count?: true | ChantierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChantierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChantierMaxAggregateInputType
  }

  export type GetChantierAggregateType<T extends ChantierAggregateArgs> = {
        [P in keyof T & keyof AggregateChantier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChantier[P]>
      : GetScalarType<T[P], AggregateChantier[P]>
  }




  export type ChantierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChantierWhereInput
    orderBy?: ChantierOrderByWithAggregationInput | ChantierOrderByWithAggregationInput[]
    by: ChantierScalarFieldEnum[] | ChantierScalarFieldEnum
    having?: ChantierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChantierCountAggregateInputType | true
    _min?: ChantierMinAggregateInputType
    _max?: ChantierMaxAggregateInputType
  }

  export type ChantierGroupByOutputType = {
    id: string
    etat: $Enums.EtatElement
    dateDebut: Date | null
    dateFin: Date | null
    responsable: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    dossierId: string
    _count: ChantierCountAggregateOutputType | null
    _min: ChantierMinAggregateOutputType | null
    _max: ChantierMaxAggregateOutputType | null
  }

  type GetChantierGroupByPayload<T extends ChantierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChantierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChantierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChantierGroupByOutputType[P]>
            : GetScalarType<T[P], ChantierGroupByOutputType[P]>
        }
      >
    >


  export type ChantierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    etat?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    responsable?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossierId?: boolean
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chantier"]>

  export type ChantierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    etat?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    responsable?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossierId?: boolean
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chantier"]>

  export type ChantierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    etat?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    responsable?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossierId?: boolean
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chantier"]>

  export type ChantierSelectScalar = {
    id?: boolean
    etat?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    responsable?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossierId?: boolean
  }

  export type ChantierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "etat" | "dateDebut" | "dateFin" | "responsable" | "notes" | "createdAt" | "updatedAt" | "dossierId", ExtArgs["result"]["chantier"]>
  export type ChantierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }
  export type ChantierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }
  export type ChantierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }

  export type $ChantierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chantier"
    objects: {
      dossier: Prisma.$DossierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      etat: $Enums.EtatElement
      dateDebut: Date | null
      dateFin: Date | null
      responsable: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
      dossierId: string
    }, ExtArgs["result"]["chantier"]>
    composites: {}
  }

  type ChantierGetPayload<S extends boolean | null | undefined | ChantierDefaultArgs> = $Result.GetResult<Prisma.$ChantierPayload, S>

  type ChantierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChantierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChantierCountAggregateInputType | true
    }

  export interface ChantierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chantier'], meta: { name: 'Chantier' } }
    /**
     * Find zero or one Chantier that matches the filter.
     * @param {ChantierFindUniqueArgs} args - Arguments to find a Chantier
     * @example
     * // Get one Chantier
     * const chantier = await prisma.chantier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChantierFindUniqueArgs>(args: SelectSubset<T, ChantierFindUniqueArgs<ExtArgs>>): Prisma__ChantierClient<$Result.GetResult<Prisma.$ChantierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chantier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChantierFindUniqueOrThrowArgs} args - Arguments to find a Chantier
     * @example
     * // Get one Chantier
     * const chantier = await prisma.chantier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChantierFindUniqueOrThrowArgs>(args: SelectSubset<T, ChantierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChantierClient<$Result.GetResult<Prisma.$ChantierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chantier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChantierFindFirstArgs} args - Arguments to find a Chantier
     * @example
     * // Get one Chantier
     * const chantier = await prisma.chantier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChantierFindFirstArgs>(args?: SelectSubset<T, ChantierFindFirstArgs<ExtArgs>>): Prisma__ChantierClient<$Result.GetResult<Prisma.$ChantierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chantier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChantierFindFirstOrThrowArgs} args - Arguments to find a Chantier
     * @example
     * // Get one Chantier
     * const chantier = await prisma.chantier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChantierFindFirstOrThrowArgs>(args?: SelectSubset<T, ChantierFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChantierClient<$Result.GetResult<Prisma.$ChantierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chantiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChantierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chantiers
     * const chantiers = await prisma.chantier.findMany()
     * 
     * // Get first 10 Chantiers
     * const chantiers = await prisma.chantier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chantierWithIdOnly = await prisma.chantier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChantierFindManyArgs>(args?: SelectSubset<T, ChantierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChantierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chantier.
     * @param {ChantierCreateArgs} args - Arguments to create a Chantier.
     * @example
     * // Create one Chantier
     * const Chantier = await prisma.chantier.create({
     *   data: {
     *     // ... data to create a Chantier
     *   }
     * })
     * 
     */
    create<T extends ChantierCreateArgs>(args: SelectSubset<T, ChantierCreateArgs<ExtArgs>>): Prisma__ChantierClient<$Result.GetResult<Prisma.$ChantierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chantiers.
     * @param {ChantierCreateManyArgs} args - Arguments to create many Chantiers.
     * @example
     * // Create many Chantiers
     * const chantier = await prisma.chantier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChantierCreateManyArgs>(args?: SelectSubset<T, ChantierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chantiers and returns the data saved in the database.
     * @param {ChantierCreateManyAndReturnArgs} args - Arguments to create many Chantiers.
     * @example
     * // Create many Chantiers
     * const chantier = await prisma.chantier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chantiers and only return the `id`
     * const chantierWithIdOnly = await prisma.chantier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChantierCreateManyAndReturnArgs>(args?: SelectSubset<T, ChantierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChantierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chantier.
     * @param {ChantierDeleteArgs} args - Arguments to delete one Chantier.
     * @example
     * // Delete one Chantier
     * const Chantier = await prisma.chantier.delete({
     *   where: {
     *     // ... filter to delete one Chantier
     *   }
     * })
     * 
     */
    delete<T extends ChantierDeleteArgs>(args: SelectSubset<T, ChantierDeleteArgs<ExtArgs>>): Prisma__ChantierClient<$Result.GetResult<Prisma.$ChantierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chantier.
     * @param {ChantierUpdateArgs} args - Arguments to update one Chantier.
     * @example
     * // Update one Chantier
     * const chantier = await prisma.chantier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChantierUpdateArgs>(args: SelectSubset<T, ChantierUpdateArgs<ExtArgs>>): Prisma__ChantierClient<$Result.GetResult<Prisma.$ChantierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chantiers.
     * @param {ChantierDeleteManyArgs} args - Arguments to filter Chantiers to delete.
     * @example
     * // Delete a few Chantiers
     * const { count } = await prisma.chantier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChantierDeleteManyArgs>(args?: SelectSubset<T, ChantierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chantiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChantierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chantiers
     * const chantier = await prisma.chantier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChantierUpdateManyArgs>(args: SelectSubset<T, ChantierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chantiers and returns the data updated in the database.
     * @param {ChantierUpdateManyAndReturnArgs} args - Arguments to update many Chantiers.
     * @example
     * // Update many Chantiers
     * const chantier = await prisma.chantier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chantiers and only return the `id`
     * const chantierWithIdOnly = await prisma.chantier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChantierUpdateManyAndReturnArgs>(args: SelectSubset<T, ChantierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChantierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chantier.
     * @param {ChantierUpsertArgs} args - Arguments to update or create a Chantier.
     * @example
     * // Update or create a Chantier
     * const chantier = await prisma.chantier.upsert({
     *   create: {
     *     // ... data to create a Chantier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chantier we want to update
     *   }
     * })
     */
    upsert<T extends ChantierUpsertArgs>(args: SelectSubset<T, ChantierUpsertArgs<ExtArgs>>): Prisma__ChantierClient<$Result.GetResult<Prisma.$ChantierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chantiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChantierCountArgs} args - Arguments to filter Chantiers to count.
     * @example
     * // Count the number of Chantiers
     * const count = await prisma.chantier.count({
     *   where: {
     *     // ... the filter for the Chantiers we want to count
     *   }
     * })
    **/
    count<T extends ChantierCountArgs>(
      args?: Subset<T, ChantierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChantierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chantier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChantierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChantierAggregateArgs>(args: Subset<T, ChantierAggregateArgs>): Prisma.PrismaPromise<GetChantierAggregateType<T>>

    /**
     * Group by Chantier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChantierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChantierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChantierGroupByArgs['orderBy'] }
        : { orderBy?: ChantierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChantierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChantierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chantier model
   */
  readonly fields: ChantierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chantier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChantierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dossier<T extends DossierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DossierDefaultArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chantier model
   */
  interface ChantierFieldRefs {
    readonly id: FieldRef<"Chantier", 'String'>
    readonly etat: FieldRef<"Chantier", 'EtatElement'>
    readonly dateDebut: FieldRef<"Chantier", 'DateTime'>
    readonly dateFin: FieldRef<"Chantier", 'DateTime'>
    readonly responsable: FieldRef<"Chantier", 'String'>
    readonly notes: FieldRef<"Chantier", 'String'>
    readonly createdAt: FieldRef<"Chantier", 'DateTime'>
    readonly updatedAt: FieldRef<"Chantier", 'DateTime'>
    readonly dossierId: FieldRef<"Chantier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chantier findUnique
   */
  export type ChantierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chantier
     */
    select?: ChantierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chantier
     */
    omit?: ChantierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChantierInclude<ExtArgs> | null
    /**
     * Filter, which Chantier to fetch.
     */
    where: ChantierWhereUniqueInput
  }

  /**
   * Chantier findUniqueOrThrow
   */
  export type ChantierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chantier
     */
    select?: ChantierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chantier
     */
    omit?: ChantierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChantierInclude<ExtArgs> | null
    /**
     * Filter, which Chantier to fetch.
     */
    where: ChantierWhereUniqueInput
  }

  /**
   * Chantier findFirst
   */
  export type ChantierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chantier
     */
    select?: ChantierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chantier
     */
    omit?: ChantierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChantierInclude<ExtArgs> | null
    /**
     * Filter, which Chantier to fetch.
     */
    where?: ChantierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chantiers to fetch.
     */
    orderBy?: ChantierOrderByWithRelationInput | ChantierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chantiers.
     */
    cursor?: ChantierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chantiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chantiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chantiers.
     */
    distinct?: ChantierScalarFieldEnum | ChantierScalarFieldEnum[]
  }

  /**
   * Chantier findFirstOrThrow
   */
  export type ChantierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chantier
     */
    select?: ChantierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chantier
     */
    omit?: ChantierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChantierInclude<ExtArgs> | null
    /**
     * Filter, which Chantier to fetch.
     */
    where?: ChantierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chantiers to fetch.
     */
    orderBy?: ChantierOrderByWithRelationInput | ChantierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chantiers.
     */
    cursor?: ChantierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chantiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chantiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chantiers.
     */
    distinct?: ChantierScalarFieldEnum | ChantierScalarFieldEnum[]
  }

  /**
   * Chantier findMany
   */
  export type ChantierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chantier
     */
    select?: ChantierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chantier
     */
    omit?: ChantierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChantierInclude<ExtArgs> | null
    /**
     * Filter, which Chantiers to fetch.
     */
    where?: ChantierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chantiers to fetch.
     */
    orderBy?: ChantierOrderByWithRelationInput | ChantierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chantiers.
     */
    cursor?: ChantierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chantiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chantiers.
     */
    skip?: number
    distinct?: ChantierScalarFieldEnum | ChantierScalarFieldEnum[]
  }

  /**
   * Chantier create
   */
  export type ChantierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chantier
     */
    select?: ChantierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chantier
     */
    omit?: ChantierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChantierInclude<ExtArgs> | null
    /**
     * The data needed to create a Chantier.
     */
    data: XOR<ChantierCreateInput, ChantierUncheckedCreateInput>
  }

  /**
   * Chantier createMany
   */
  export type ChantierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chantiers.
     */
    data: ChantierCreateManyInput | ChantierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chantier createManyAndReturn
   */
  export type ChantierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chantier
     */
    select?: ChantierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chantier
     */
    omit?: ChantierOmit<ExtArgs> | null
    /**
     * The data used to create many Chantiers.
     */
    data: ChantierCreateManyInput | ChantierCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChantierIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chantier update
   */
  export type ChantierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chantier
     */
    select?: ChantierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chantier
     */
    omit?: ChantierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChantierInclude<ExtArgs> | null
    /**
     * The data needed to update a Chantier.
     */
    data: XOR<ChantierUpdateInput, ChantierUncheckedUpdateInput>
    /**
     * Choose, which Chantier to update.
     */
    where: ChantierWhereUniqueInput
  }

  /**
   * Chantier updateMany
   */
  export type ChantierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chantiers.
     */
    data: XOR<ChantierUpdateManyMutationInput, ChantierUncheckedUpdateManyInput>
    /**
     * Filter which Chantiers to update
     */
    where?: ChantierWhereInput
    /**
     * Limit how many Chantiers to update.
     */
    limit?: number
  }

  /**
   * Chantier updateManyAndReturn
   */
  export type ChantierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chantier
     */
    select?: ChantierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chantier
     */
    omit?: ChantierOmit<ExtArgs> | null
    /**
     * The data used to update Chantiers.
     */
    data: XOR<ChantierUpdateManyMutationInput, ChantierUncheckedUpdateManyInput>
    /**
     * Filter which Chantiers to update
     */
    where?: ChantierWhereInput
    /**
     * Limit how many Chantiers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChantierIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chantier upsert
   */
  export type ChantierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chantier
     */
    select?: ChantierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chantier
     */
    omit?: ChantierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChantierInclude<ExtArgs> | null
    /**
     * The filter to search for the Chantier to update in case it exists.
     */
    where: ChantierWhereUniqueInput
    /**
     * In case the Chantier found by the `where` argument doesn't exist, create a new Chantier with this data.
     */
    create: XOR<ChantierCreateInput, ChantierUncheckedCreateInput>
    /**
     * In case the Chantier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChantierUpdateInput, ChantierUncheckedUpdateInput>
  }

  /**
   * Chantier delete
   */
  export type ChantierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chantier
     */
    select?: ChantierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chantier
     */
    omit?: ChantierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChantierInclude<ExtArgs> | null
    /**
     * Filter which Chantier to delete.
     */
    where: ChantierWhereUniqueInput
  }

  /**
   * Chantier deleteMany
   */
  export type ChantierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chantiers to delete
     */
    where?: ChantierWhereInput
    /**
     * Limit how many Chantiers to delete.
     */
    limit?: number
  }

  /**
   * Chantier without action
   */
  export type ChantierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chantier
     */
    select?: ChantierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chantier
     */
    omit?: ChantierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChantierInclude<ExtArgs> | null
  }


  /**
   * Model Devis
   */

  export type AggregateDevis = {
    _count: DevisCountAggregateOutputType | null
    _avg: DevisAvgAggregateOutputType | null
    _sum: DevisSumAggregateOutputType | null
    _min: DevisMinAggregateOutputType | null
    _max: DevisMaxAggregateOutputType | null
  }

  export type DevisAvgAggregateOutputType = {
    montantHT: Decimal | null
    tva: Decimal | null
    montantTTC: Decimal | null
  }

  export type DevisSumAggregateOutputType = {
    montantHT: Decimal | null
    tva: Decimal | null
    montantTTC: Decimal | null
  }

  export type DevisMinAggregateOutputType = {
    id: string | null
    numero: string | null
    statut: $Enums.StatutDevis | null
    montantHT: Decimal | null
    tva: Decimal | null
    montantTTC: Decimal | null
    dateEmission: Date | null
    dateExpiration: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    dossierId: string | null
  }

  export type DevisMaxAggregateOutputType = {
    id: string | null
    numero: string | null
    statut: $Enums.StatutDevis | null
    montantHT: Decimal | null
    tva: Decimal | null
    montantTTC: Decimal | null
    dateEmission: Date | null
    dateExpiration: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    dossierId: string | null
  }

  export type DevisCountAggregateOutputType = {
    id: number
    numero: number
    statut: number
    montantHT: number
    tva: number
    montantTTC: number
    dateEmission: number
    dateExpiration: number
    notes: number
    createdAt: number
    updatedAt: number
    dossierId: number
    _all: number
  }


  export type DevisAvgAggregateInputType = {
    montantHT?: true
    tva?: true
    montantTTC?: true
  }

  export type DevisSumAggregateInputType = {
    montantHT?: true
    tva?: true
    montantTTC?: true
  }

  export type DevisMinAggregateInputType = {
    id?: true
    numero?: true
    statut?: true
    montantHT?: true
    tva?: true
    montantTTC?: true
    dateEmission?: true
    dateExpiration?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    dossierId?: true
  }

  export type DevisMaxAggregateInputType = {
    id?: true
    numero?: true
    statut?: true
    montantHT?: true
    tva?: true
    montantTTC?: true
    dateEmission?: true
    dateExpiration?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    dossierId?: true
  }

  export type DevisCountAggregateInputType = {
    id?: true
    numero?: true
    statut?: true
    montantHT?: true
    tva?: true
    montantTTC?: true
    dateEmission?: true
    dateExpiration?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    dossierId?: true
    _all?: true
  }

  export type DevisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devis to aggregate.
     */
    where?: DevisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devis to fetch.
     */
    orderBy?: DevisOrderByWithRelationInput | DevisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DevisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devis
    **/
    _count?: true | DevisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DevisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DevisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DevisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DevisMaxAggregateInputType
  }

  export type GetDevisAggregateType<T extends DevisAggregateArgs> = {
        [P in keyof T & keyof AggregateDevis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevis[P]>
      : GetScalarType<T[P], AggregateDevis[P]>
  }




  export type DevisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevisWhereInput
    orderBy?: DevisOrderByWithAggregationInput | DevisOrderByWithAggregationInput[]
    by: DevisScalarFieldEnum[] | DevisScalarFieldEnum
    having?: DevisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DevisCountAggregateInputType | true
    _avg?: DevisAvgAggregateInputType
    _sum?: DevisSumAggregateInputType
    _min?: DevisMinAggregateInputType
    _max?: DevisMaxAggregateInputType
  }

  export type DevisGroupByOutputType = {
    id: string
    numero: string
    statut: $Enums.StatutDevis
    montantHT: Decimal
    tva: Decimal
    montantTTC: Decimal
    dateEmission: Date | null
    dateExpiration: Date | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    dossierId: string
    _count: DevisCountAggregateOutputType | null
    _avg: DevisAvgAggregateOutputType | null
    _sum: DevisSumAggregateOutputType | null
    _min: DevisMinAggregateOutputType | null
    _max: DevisMaxAggregateOutputType | null
  }

  type GetDevisGroupByPayload<T extends DevisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DevisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DevisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DevisGroupByOutputType[P]>
            : GetScalarType<T[P], DevisGroupByOutputType[P]>
        }
      >
    >


  export type DevisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    statut?: boolean
    montantHT?: boolean
    tva?: boolean
    montantTTC?: boolean
    dateEmission?: boolean
    dateExpiration?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossierId?: boolean
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["devis"]>

  export type DevisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    statut?: boolean
    montantHT?: boolean
    tva?: boolean
    montantTTC?: boolean
    dateEmission?: boolean
    dateExpiration?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossierId?: boolean
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["devis"]>

  export type DevisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    statut?: boolean
    montantHT?: boolean
    tva?: boolean
    montantTTC?: boolean
    dateEmission?: boolean
    dateExpiration?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossierId?: boolean
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["devis"]>

  export type DevisSelectScalar = {
    id?: boolean
    numero?: boolean
    statut?: boolean
    montantHT?: boolean
    tva?: boolean
    montantTTC?: boolean
    dateEmission?: boolean
    dateExpiration?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossierId?: boolean
  }

  export type DevisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "statut" | "montantHT" | "tva" | "montantTTC" | "dateEmission" | "dateExpiration" | "notes" | "createdAt" | "updatedAt" | "dossierId", ExtArgs["result"]["devis"]>
  export type DevisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }
  export type DevisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }
  export type DevisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }

  export type $DevisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Devis"
    objects: {
      dossier: Prisma.$DossierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numero: string
      statut: $Enums.StatutDevis
      montantHT: Prisma.Decimal
      tva: Prisma.Decimal
      montantTTC: Prisma.Decimal
      dateEmission: Date | null
      dateExpiration: Date | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
      dossierId: string
    }, ExtArgs["result"]["devis"]>
    composites: {}
  }

  type DevisGetPayload<S extends boolean | null | undefined | DevisDefaultArgs> = $Result.GetResult<Prisma.$DevisPayload, S>

  type DevisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DevisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DevisCountAggregateInputType | true
    }

  export interface DevisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Devis'], meta: { name: 'Devis' } }
    /**
     * Find zero or one Devis that matches the filter.
     * @param {DevisFindUniqueArgs} args - Arguments to find a Devis
     * @example
     * // Get one Devis
     * const devis = await prisma.devis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DevisFindUniqueArgs>(args: SelectSubset<T, DevisFindUniqueArgs<ExtArgs>>): Prisma__DevisClient<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Devis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DevisFindUniqueOrThrowArgs} args - Arguments to find a Devis
     * @example
     * // Get one Devis
     * const devis = await prisma.devis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DevisFindUniqueOrThrowArgs>(args: SelectSubset<T, DevisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DevisClient<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisFindFirstArgs} args - Arguments to find a Devis
     * @example
     * // Get one Devis
     * const devis = await prisma.devis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DevisFindFirstArgs>(args?: SelectSubset<T, DevisFindFirstArgs<ExtArgs>>): Prisma__DevisClient<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisFindFirstOrThrowArgs} args - Arguments to find a Devis
     * @example
     * // Get one Devis
     * const devis = await prisma.devis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DevisFindFirstOrThrowArgs>(args?: SelectSubset<T, DevisFindFirstOrThrowArgs<ExtArgs>>): Prisma__DevisClient<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devis
     * const devis = await prisma.devis.findMany()
     * 
     * // Get first 10 Devis
     * const devis = await prisma.devis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const devisWithIdOnly = await prisma.devis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DevisFindManyArgs>(args?: SelectSubset<T, DevisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Devis.
     * @param {DevisCreateArgs} args - Arguments to create a Devis.
     * @example
     * // Create one Devis
     * const Devis = await prisma.devis.create({
     *   data: {
     *     // ... data to create a Devis
     *   }
     * })
     * 
     */
    create<T extends DevisCreateArgs>(args: SelectSubset<T, DevisCreateArgs<ExtArgs>>): Prisma__DevisClient<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devis.
     * @param {DevisCreateManyArgs} args - Arguments to create many Devis.
     * @example
     * // Create many Devis
     * const devis = await prisma.devis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DevisCreateManyArgs>(args?: SelectSubset<T, DevisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devis and returns the data saved in the database.
     * @param {DevisCreateManyAndReturnArgs} args - Arguments to create many Devis.
     * @example
     * // Create many Devis
     * const devis = await prisma.devis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devis and only return the `id`
     * const devisWithIdOnly = await prisma.devis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DevisCreateManyAndReturnArgs>(args?: SelectSubset<T, DevisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Devis.
     * @param {DevisDeleteArgs} args - Arguments to delete one Devis.
     * @example
     * // Delete one Devis
     * const Devis = await prisma.devis.delete({
     *   where: {
     *     // ... filter to delete one Devis
     *   }
     * })
     * 
     */
    delete<T extends DevisDeleteArgs>(args: SelectSubset<T, DevisDeleteArgs<ExtArgs>>): Prisma__DevisClient<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Devis.
     * @param {DevisUpdateArgs} args - Arguments to update one Devis.
     * @example
     * // Update one Devis
     * const devis = await prisma.devis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DevisUpdateArgs>(args: SelectSubset<T, DevisUpdateArgs<ExtArgs>>): Prisma__DevisClient<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devis.
     * @param {DevisDeleteManyArgs} args - Arguments to filter Devis to delete.
     * @example
     * // Delete a few Devis
     * const { count } = await prisma.devis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DevisDeleteManyArgs>(args?: SelectSubset<T, DevisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devis
     * const devis = await prisma.devis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DevisUpdateManyArgs>(args: SelectSubset<T, DevisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devis and returns the data updated in the database.
     * @param {DevisUpdateManyAndReturnArgs} args - Arguments to update many Devis.
     * @example
     * // Update many Devis
     * const devis = await prisma.devis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devis and only return the `id`
     * const devisWithIdOnly = await prisma.devis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DevisUpdateManyAndReturnArgs>(args: SelectSubset<T, DevisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Devis.
     * @param {DevisUpsertArgs} args - Arguments to update or create a Devis.
     * @example
     * // Update or create a Devis
     * const devis = await prisma.devis.upsert({
     *   create: {
     *     // ... data to create a Devis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Devis we want to update
     *   }
     * })
     */
    upsert<T extends DevisUpsertArgs>(args: SelectSubset<T, DevisUpsertArgs<ExtArgs>>): Prisma__DevisClient<$Result.GetResult<Prisma.$DevisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisCountArgs} args - Arguments to filter Devis to count.
     * @example
     * // Count the number of Devis
     * const count = await prisma.devis.count({
     *   where: {
     *     // ... the filter for the Devis we want to count
     *   }
     * })
    **/
    count<T extends DevisCountArgs>(
      args?: Subset<T, DevisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DevisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Devis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DevisAggregateArgs>(args: Subset<T, DevisAggregateArgs>): Prisma.PrismaPromise<GetDevisAggregateType<T>>

    /**
     * Group by Devis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DevisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DevisGroupByArgs['orderBy'] }
        : { orderBy?: DevisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DevisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Devis model
   */
  readonly fields: DevisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Devis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DevisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dossier<T extends DossierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DossierDefaultArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Devis model
   */
  interface DevisFieldRefs {
    readonly id: FieldRef<"Devis", 'String'>
    readonly numero: FieldRef<"Devis", 'String'>
    readonly statut: FieldRef<"Devis", 'StatutDevis'>
    readonly montantHT: FieldRef<"Devis", 'Decimal'>
    readonly tva: FieldRef<"Devis", 'Decimal'>
    readonly montantTTC: FieldRef<"Devis", 'Decimal'>
    readonly dateEmission: FieldRef<"Devis", 'DateTime'>
    readonly dateExpiration: FieldRef<"Devis", 'DateTime'>
    readonly notes: FieldRef<"Devis", 'String'>
    readonly createdAt: FieldRef<"Devis", 'DateTime'>
    readonly updatedAt: FieldRef<"Devis", 'DateTime'>
    readonly dossierId: FieldRef<"Devis", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Devis findUnique
   */
  export type DevisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
    /**
     * Filter, which Devis to fetch.
     */
    where: DevisWhereUniqueInput
  }

  /**
   * Devis findUniqueOrThrow
   */
  export type DevisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
    /**
     * Filter, which Devis to fetch.
     */
    where: DevisWhereUniqueInput
  }

  /**
   * Devis findFirst
   */
  export type DevisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
    /**
     * Filter, which Devis to fetch.
     */
    where?: DevisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devis to fetch.
     */
    orderBy?: DevisOrderByWithRelationInput | DevisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devis.
     */
    cursor?: DevisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devis.
     */
    distinct?: DevisScalarFieldEnum | DevisScalarFieldEnum[]
  }

  /**
   * Devis findFirstOrThrow
   */
  export type DevisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
    /**
     * Filter, which Devis to fetch.
     */
    where?: DevisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devis to fetch.
     */
    orderBy?: DevisOrderByWithRelationInput | DevisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devis.
     */
    cursor?: DevisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devis.
     */
    distinct?: DevisScalarFieldEnum | DevisScalarFieldEnum[]
  }

  /**
   * Devis findMany
   */
  export type DevisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
    /**
     * Filter, which Devis to fetch.
     */
    where?: DevisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devis to fetch.
     */
    orderBy?: DevisOrderByWithRelationInput | DevisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devis.
     */
    cursor?: DevisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devis.
     */
    skip?: number
    distinct?: DevisScalarFieldEnum | DevisScalarFieldEnum[]
  }

  /**
   * Devis create
   */
  export type DevisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
    /**
     * The data needed to create a Devis.
     */
    data: XOR<DevisCreateInput, DevisUncheckedCreateInput>
  }

  /**
   * Devis createMany
   */
  export type DevisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devis.
     */
    data: DevisCreateManyInput | DevisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Devis createManyAndReturn
   */
  export type DevisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * The data used to create many Devis.
     */
    data: DevisCreateManyInput | DevisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Devis update
   */
  export type DevisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
    /**
     * The data needed to update a Devis.
     */
    data: XOR<DevisUpdateInput, DevisUncheckedUpdateInput>
    /**
     * Choose, which Devis to update.
     */
    where: DevisWhereUniqueInput
  }

  /**
   * Devis updateMany
   */
  export type DevisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devis.
     */
    data: XOR<DevisUpdateManyMutationInput, DevisUncheckedUpdateManyInput>
    /**
     * Filter which Devis to update
     */
    where?: DevisWhereInput
    /**
     * Limit how many Devis to update.
     */
    limit?: number
  }

  /**
   * Devis updateManyAndReturn
   */
  export type DevisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * The data used to update Devis.
     */
    data: XOR<DevisUpdateManyMutationInput, DevisUncheckedUpdateManyInput>
    /**
     * Filter which Devis to update
     */
    where?: DevisWhereInput
    /**
     * Limit how many Devis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Devis upsert
   */
  export type DevisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
    /**
     * The filter to search for the Devis to update in case it exists.
     */
    where: DevisWhereUniqueInput
    /**
     * In case the Devis found by the `where` argument doesn't exist, create a new Devis with this data.
     */
    create: XOR<DevisCreateInput, DevisUncheckedCreateInput>
    /**
     * In case the Devis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DevisUpdateInput, DevisUncheckedUpdateInput>
  }

  /**
   * Devis delete
   */
  export type DevisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
    /**
     * Filter which Devis to delete.
     */
    where: DevisWhereUniqueInput
  }

  /**
   * Devis deleteMany
   */
  export type DevisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devis to delete
     */
    where?: DevisWhereInput
    /**
     * Limit how many Devis to delete.
     */
    limit?: number
  }

  /**
   * Devis without action
   */
  export type DevisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devis
     */
    select?: DevisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devis
     */
    omit?: DevisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisInclude<ExtArgs> | null
  }


  /**
   * Model Diagnostic
   */

  export type AggregateDiagnostic = {
    _count: DiagnosticCountAggregateOutputType | null
    _min: DiagnosticMinAggregateOutputType | null
    _max: DiagnosticMaxAggregateOutputType | null
  }

  export type DiagnosticMinAggregateOutputType = {
    id: string | null
    statut: $Enums.StatutDiagnostic | null
    observations: string | null
    conclusions: string | null
    realiseAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    dossierId: string | null
  }

  export type DiagnosticMaxAggregateOutputType = {
    id: string | null
    statut: $Enums.StatutDiagnostic | null
    observations: string | null
    conclusions: string | null
    realiseAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    dossierId: string | null
  }

  export type DiagnosticCountAggregateOutputType = {
    id: number
    statut: number
    observations: number
    conclusions: number
    realiseAt: number
    createdAt: number
    updatedAt: number
    dossierId: number
    _all: number
  }


  export type DiagnosticMinAggregateInputType = {
    id?: true
    statut?: true
    observations?: true
    conclusions?: true
    realiseAt?: true
    createdAt?: true
    updatedAt?: true
    dossierId?: true
  }

  export type DiagnosticMaxAggregateInputType = {
    id?: true
    statut?: true
    observations?: true
    conclusions?: true
    realiseAt?: true
    createdAt?: true
    updatedAt?: true
    dossierId?: true
  }

  export type DiagnosticCountAggregateInputType = {
    id?: true
    statut?: true
    observations?: true
    conclusions?: true
    realiseAt?: true
    createdAt?: true
    updatedAt?: true
    dossierId?: true
    _all?: true
  }

  export type DiagnosticAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnostic to aggregate.
     */
    where?: DiagnosticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnostics to fetch.
     */
    orderBy?: DiagnosticOrderByWithRelationInput | DiagnosticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnosticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnostics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diagnostics
    **/
    _count?: true | DiagnosticCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosticMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosticMaxAggregateInputType
  }

  export type GetDiagnosticAggregateType<T extends DiagnosticAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnostic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnostic[P]>
      : GetScalarType<T[P], AggregateDiagnostic[P]>
  }




  export type DiagnosticGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticWhereInput
    orderBy?: DiagnosticOrderByWithAggregationInput | DiagnosticOrderByWithAggregationInput[]
    by: DiagnosticScalarFieldEnum[] | DiagnosticScalarFieldEnum
    having?: DiagnosticScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosticCountAggregateInputType | true
    _min?: DiagnosticMinAggregateInputType
    _max?: DiagnosticMaxAggregateInputType
  }

  export type DiagnosticGroupByOutputType = {
    id: string
    statut: $Enums.StatutDiagnostic
    observations: string | null
    conclusions: string | null
    realiseAt: Date | null
    createdAt: Date
    updatedAt: Date
    dossierId: string
    _count: DiagnosticCountAggregateOutputType | null
    _min: DiagnosticMinAggregateOutputType | null
    _max: DiagnosticMaxAggregateOutputType | null
  }

  type GetDiagnosticGroupByPayload<T extends DiagnosticGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosticGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosticGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosticGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosticGroupByOutputType[P]>
        }
      >
    >


  export type DiagnosticSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statut?: boolean
    observations?: boolean
    conclusions?: boolean
    realiseAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossierId?: boolean
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnostic"]>

  export type DiagnosticSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statut?: boolean
    observations?: boolean
    conclusions?: boolean
    realiseAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossierId?: boolean
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnostic"]>

  export type DiagnosticSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statut?: boolean
    observations?: boolean
    conclusions?: boolean
    realiseAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossierId?: boolean
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnostic"]>

  export type DiagnosticSelectScalar = {
    id?: boolean
    statut?: boolean
    observations?: boolean
    conclusions?: boolean
    realiseAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossierId?: boolean
  }

  export type DiagnosticOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "statut" | "observations" | "conclusions" | "realiseAt" | "createdAt" | "updatedAt" | "dossierId", ExtArgs["result"]["diagnostic"]>
  export type DiagnosticInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }
  export type DiagnosticIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }
  export type DiagnosticIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }

  export type $DiagnosticPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Diagnostic"
    objects: {
      dossier: Prisma.$DossierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      statut: $Enums.StatutDiagnostic
      observations: string | null
      conclusions: string | null
      realiseAt: Date | null
      createdAt: Date
      updatedAt: Date
      dossierId: string
    }, ExtArgs["result"]["diagnostic"]>
    composites: {}
  }

  type DiagnosticGetPayload<S extends boolean | null | undefined | DiagnosticDefaultArgs> = $Result.GetResult<Prisma.$DiagnosticPayload, S>

  type DiagnosticCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiagnosticFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosticCountAggregateInputType | true
    }

  export interface DiagnosticDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Diagnostic'], meta: { name: 'Diagnostic' } }
    /**
     * Find zero or one Diagnostic that matches the filter.
     * @param {DiagnosticFindUniqueArgs} args - Arguments to find a Diagnostic
     * @example
     * // Get one Diagnostic
     * const diagnostic = await prisma.diagnostic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosticFindUniqueArgs>(args: SelectSubset<T, DiagnosticFindUniqueArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diagnostic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnosticFindUniqueOrThrowArgs} args - Arguments to find a Diagnostic
     * @example
     * // Get one Diagnostic
     * const diagnostic = await prisma.diagnostic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosticFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnosticFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnostic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticFindFirstArgs} args - Arguments to find a Diagnostic
     * @example
     * // Get one Diagnostic
     * const diagnostic = await prisma.diagnostic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosticFindFirstArgs>(args?: SelectSubset<T, DiagnosticFindFirstArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnostic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticFindFirstOrThrowArgs} args - Arguments to find a Diagnostic
     * @example
     * // Get one Diagnostic
     * const diagnostic = await prisma.diagnostic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosticFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnosticFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diagnostics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagnostics
     * const diagnostics = await prisma.diagnostic.findMany()
     * 
     * // Get first 10 Diagnostics
     * const diagnostics = await prisma.diagnostic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diagnosticWithIdOnly = await prisma.diagnostic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiagnosticFindManyArgs>(args?: SelectSubset<T, DiagnosticFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diagnostic.
     * @param {DiagnosticCreateArgs} args - Arguments to create a Diagnostic.
     * @example
     * // Create one Diagnostic
     * const Diagnostic = await prisma.diagnostic.create({
     *   data: {
     *     // ... data to create a Diagnostic
     *   }
     * })
     * 
     */
    create<T extends DiagnosticCreateArgs>(args: SelectSubset<T, DiagnosticCreateArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diagnostics.
     * @param {DiagnosticCreateManyArgs} args - Arguments to create many Diagnostics.
     * @example
     * // Create many Diagnostics
     * const diagnostic = await prisma.diagnostic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnosticCreateManyArgs>(args?: SelectSubset<T, DiagnosticCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diagnostics and returns the data saved in the database.
     * @param {DiagnosticCreateManyAndReturnArgs} args - Arguments to create many Diagnostics.
     * @example
     * // Create many Diagnostics
     * const diagnostic = await prisma.diagnostic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diagnostics and only return the `id`
     * const diagnosticWithIdOnly = await prisma.diagnostic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiagnosticCreateManyAndReturnArgs>(args?: SelectSubset<T, DiagnosticCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diagnostic.
     * @param {DiagnosticDeleteArgs} args - Arguments to delete one Diagnostic.
     * @example
     * // Delete one Diagnostic
     * const Diagnostic = await prisma.diagnostic.delete({
     *   where: {
     *     // ... filter to delete one Diagnostic
     *   }
     * })
     * 
     */
    delete<T extends DiagnosticDeleteArgs>(args: SelectSubset<T, DiagnosticDeleteArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diagnostic.
     * @param {DiagnosticUpdateArgs} args - Arguments to update one Diagnostic.
     * @example
     * // Update one Diagnostic
     * const diagnostic = await prisma.diagnostic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnosticUpdateArgs>(args: SelectSubset<T, DiagnosticUpdateArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diagnostics.
     * @param {DiagnosticDeleteManyArgs} args - Arguments to filter Diagnostics to delete.
     * @example
     * // Delete a few Diagnostics
     * const { count } = await prisma.diagnostic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnosticDeleteManyArgs>(args?: SelectSubset<T, DiagnosticDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnostics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagnostics
     * const diagnostic = await prisma.diagnostic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnosticUpdateManyArgs>(args: SelectSubset<T, DiagnosticUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnostics and returns the data updated in the database.
     * @param {DiagnosticUpdateManyAndReturnArgs} args - Arguments to update many Diagnostics.
     * @example
     * // Update many Diagnostics
     * const diagnostic = await prisma.diagnostic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diagnostics and only return the `id`
     * const diagnosticWithIdOnly = await prisma.diagnostic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiagnosticUpdateManyAndReturnArgs>(args: SelectSubset<T, DiagnosticUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diagnostic.
     * @param {DiagnosticUpsertArgs} args - Arguments to update or create a Diagnostic.
     * @example
     * // Update or create a Diagnostic
     * const diagnostic = await prisma.diagnostic.upsert({
     *   create: {
     *     // ... data to create a Diagnostic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagnostic we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosticUpsertArgs>(args: SelectSubset<T, DiagnosticUpsertArgs<ExtArgs>>): Prisma__DiagnosticClient<$Result.GetResult<Prisma.$DiagnosticPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diagnostics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticCountArgs} args - Arguments to filter Diagnostics to count.
     * @example
     * // Count the number of Diagnostics
     * const count = await prisma.diagnostic.count({
     *   where: {
     *     // ... the filter for the Diagnostics we want to count
     *   }
     * })
    **/
    count<T extends DiagnosticCountArgs>(
      args?: Subset<T, DiagnosticCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosticCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diagnostic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiagnosticAggregateArgs>(args: Subset<T, DiagnosticAggregateArgs>): Prisma.PrismaPromise<GetDiagnosticAggregateType<T>>

    /**
     * Group by Diagnostic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiagnosticGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnosticGroupByArgs['orderBy'] }
        : { orderBy?: DiagnosticGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiagnosticGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosticGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Diagnostic model
   */
  readonly fields: DiagnosticFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Diagnostic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnosticClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dossier<T extends DossierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DossierDefaultArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Diagnostic model
   */
  interface DiagnosticFieldRefs {
    readonly id: FieldRef<"Diagnostic", 'String'>
    readonly statut: FieldRef<"Diagnostic", 'StatutDiagnostic'>
    readonly observations: FieldRef<"Diagnostic", 'String'>
    readonly conclusions: FieldRef<"Diagnostic", 'String'>
    readonly realiseAt: FieldRef<"Diagnostic", 'DateTime'>
    readonly createdAt: FieldRef<"Diagnostic", 'DateTime'>
    readonly updatedAt: FieldRef<"Diagnostic", 'DateTime'>
    readonly dossierId: FieldRef<"Diagnostic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Diagnostic findUnique
   */
  export type DiagnosticFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostic to fetch.
     */
    where: DiagnosticWhereUniqueInput
  }

  /**
   * Diagnostic findUniqueOrThrow
   */
  export type DiagnosticFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostic to fetch.
     */
    where: DiagnosticWhereUniqueInput
  }

  /**
   * Diagnostic findFirst
   */
  export type DiagnosticFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostic to fetch.
     */
    where?: DiagnosticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnostics to fetch.
     */
    orderBy?: DiagnosticOrderByWithRelationInput | DiagnosticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnostics.
     */
    cursor?: DiagnosticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnostics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnostics.
     */
    distinct?: DiagnosticScalarFieldEnum | DiagnosticScalarFieldEnum[]
  }

  /**
   * Diagnostic findFirstOrThrow
   */
  export type DiagnosticFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostic to fetch.
     */
    where?: DiagnosticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnostics to fetch.
     */
    orderBy?: DiagnosticOrderByWithRelationInput | DiagnosticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnostics.
     */
    cursor?: DiagnosticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnostics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnostics.
     */
    distinct?: DiagnosticScalarFieldEnum | DiagnosticScalarFieldEnum[]
  }

  /**
   * Diagnostic findMany
   */
  export type DiagnosticFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostics to fetch.
     */
    where?: DiagnosticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnostics to fetch.
     */
    orderBy?: DiagnosticOrderByWithRelationInput | DiagnosticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diagnostics.
     */
    cursor?: DiagnosticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnostics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnostics.
     */
    skip?: number
    distinct?: DiagnosticScalarFieldEnum | DiagnosticScalarFieldEnum[]
  }

  /**
   * Diagnostic create
   */
  export type DiagnosticCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * The data needed to create a Diagnostic.
     */
    data: XOR<DiagnosticCreateInput, DiagnosticUncheckedCreateInput>
  }

  /**
   * Diagnostic createMany
   */
  export type DiagnosticCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diagnostics.
     */
    data: DiagnosticCreateManyInput | DiagnosticCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Diagnostic createManyAndReturn
   */
  export type DiagnosticCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * The data used to create many Diagnostics.
     */
    data: DiagnosticCreateManyInput | DiagnosticCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Diagnostic update
   */
  export type DiagnosticUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * The data needed to update a Diagnostic.
     */
    data: XOR<DiagnosticUpdateInput, DiagnosticUncheckedUpdateInput>
    /**
     * Choose, which Diagnostic to update.
     */
    where: DiagnosticWhereUniqueInput
  }

  /**
   * Diagnostic updateMany
   */
  export type DiagnosticUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diagnostics.
     */
    data: XOR<DiagnosticUpdateManyMutationInput, DiagnosticUncheckedUpdateManyInput>
    /**
     * Filter which Diagnostics to update
     */
    where?: DiagnosticWhereInput
    /**
     * Limit how many Diagnostics to update.
     */
    limit?: number
  }

  /**
   * Diagnostic updateManyAndReturn
   */
  export type DiagnosticUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * The data used to update Diagnostics.
     */
    data: XOR<DiagnosticUpdateManyMutationInput, DiagnosticUncheckedUpdateManyInput>
    /**
     * Filter which Diagnostics to update
     */
    where?: DiagnosticWhereInput
    /**
     * Limit how many Diagnostics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Diagnostic upsert
   */
  export type DiagnosticUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * The filter to search for the Diagnostic to update in case it exists.
     */
    where: DiagnosticWhereUniqueInput
    /**
     * In case the Diagnostic found by the `where` argument doesn't exist, create a new Diagnostic with this data.
     */
    create: XOR<DiagnosticCreateInput, DiagnosticUncheckedCreateInput>
    /**
     * In case the Diagnostic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnosticUpdateInput, DiagnosticUncheckedUpdateInput>
  }

  /**
   * Diagnostic delete
   */
  export type DiagnosticDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
    /**
     * Filter which Diagnostic to delete.
     */
    where: DiagnosticWhereUniqueInput
  }

  /**
   * Diagnostic deleteMany
   */
  export type DiagnosticDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnostics to delete
     */
    where?: DiagnosticWhereInput
    /**
     * Limit how many Diagnostics to delete.
     */
    limit?: number
  }

  /**
   * Diagnostic without action
   */
  export type DiagnosticDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostic
     */
    select?: DiagnosticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostic
     */
    omit?: DiagnosticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticInclude<ExtArgs> | null
  }


  /**
   * Model Circuit
   */

  export type AggregateCircuit = {
    _count: CircuitCountAggregateOutputType | null
    _avg: CircuitAvgAggregateOutputType | null
    _sum: CircuitSumAggregateOutputType | null
    _min: CircuitMinAggregateOutputType | null
    _max: CircuitMaxAggregateOutputType | null
  }

  export type CircuitAvgAggregateOutputType = {
    amperage: number | null
  }

  export type CircuitSumAggregateOutputType = {
    amperage: number | null
  }

  export type CircuitMinAggregateOutputType = {
    id: string | null
    nom: string | null
    type: $Enums.TypeCircuit | null
    etat: $Enums.EtatElement | null
    amperage: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    dossierId: string | null
  }

  export type CircuitMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    type: $Enums.TypeCircuit | null
    etat: $Enums.EtatElement | null
    amperage: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    dossierId: string | null
  }

  export type CircuitCountAggregateOutputType = {
    id: number
    nom: number
    type: number
    etat: number
    amperage: number
    notes: number
    createdAt: number
    updatedAt: number
    dossierId: number
    _all: number
  }


  export type CircuitAvgAggregateInputType = {
    amperage?: true
  }

  export type CircuitSumAggregateInputType = {
    amperage?: true
  }

  export type CircuitMinAggregateInputType = {
    id?: true
    nom?: true
    type?: true
    etat?: true
    amperage?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    dossierId?: true
  }

  export type CircuitMaxAggregateInputType = {
    id?: true
    nom?: true
    type?: true
    etat?: true
    amperage?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    dossierId?: true
  }

  export type CircuitCountAggregateInputType = {
    id?: true
    nom?: true
    type?: true
    etat?: true
    amperage?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    dossierId?: true
    _all?: true
  }

  export type CircuitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Circuit to aggregate.
     */
    where?: CircuitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circuits to fetch.
     */
    orderBy?: CircuitOrderByWithRelationInput | CircuitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CircuitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circuits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circuits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Circuits
    **/
    _count?: true | CircuitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CircuitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CircuitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CircuitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CircuitMaxAggregateInputType
  }

  export type GetCircuitAggregateType<T extends CircuitAggregateArgs> = {
        [P in keyof T & keyof AggregateCircuit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCircuit[P]>
      : GetScalarType<T[P], AggregateCircuit[P]>
  }




  export type CircuitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircuitWhereInput
    orderBy?: CircuitOrderByWithAggregationInput | CircuitOrderByWithAggregationInput[]
    by: CircuitScalarFieldEnum[] | CircuitScalarFieldEnum
    having?: CircuitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CircuitCountAggregateInputType | true
    _avg?: CircuitAvgAggregateInputType
    _sum?: CircuitSumAggregateInputType
    _min?: CircuitMinAggregateInputType
    _max?: CircuitMaxAggregateInputType
  }

  export type CircuitGroupByOutputType = {
    id: string
    nom: string
    type: $Enums.TypeCircuit
    etat: $Enums.EtatElement
    amperage: number | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    dossierId: string
    _count: CircuitCountAggregateOutputType | null
    _avg: CircuitAvgAggregateOutputType | null
    _sum: CircuitSumAggregateOutputType | null
    _min: CircuitMinAggregateOutputType | null
    _max: CircuitMaxAggregateOutputType | null
  }

  type GetCircuitGroupByPayload<T extends CircuitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CircuitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CircuitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CircuitGroupByOutputType[P]>
            : GetScalarType<T[P], CircuitGroupByOutputType[P]>
        }
      >
    >


  export type CircuitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    type?: boolean
    etat?: boolean
    amperage?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossierId?: boolean
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
    protections?: boolean | Circuit$protectionsArgs<ExtArgs>
    _count?: boolean | CircuitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circuit"]>

  export type CircuitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    type?: boolean
    etat?: boolean
    amperage?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossierId?: boolean
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circuit"]>

  export type CircuitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    type?: boolean
    etat?: boolean
    amperage?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossierId?: boolean
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circuit"]>

  export type CircuitSelectScalar = {
    id?: boolean
    nom?: boolean
    type?: boolean
    etat?: boolean
    amperage?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossierId?: boolean
  }

  export type CircuitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "type" | "etat" | "amperage" | "notes" | "createdAt" | "updatedAt" | "dossierId", ExtArgs["result"]["circuit"]>
  export type CircuitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
    protections?: boolean | Circuit$protectionsArgs<ExtArgs>
    _count?: boolean | CircuitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CircuitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }
  export type CircuitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }

  export type $CircuitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Circuit"
    objects: {
      dossier: Prisma.$DossierPayload<ExtArgs>
      protections: Prisma.$ProtectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      type: $Enums.TypeCircuit
      etat: $Enums.EtatElement
      amperage: number | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
      dossierId: string
    }, ExtArgs["result"]["circuit"]>
    composites: {}
  }

  type CircuitGetPayload<S extends boolean | null | undefined | CircuitDefaultArgs> = $Result.GetResult<Prisma.$CircuitPayload, S>

  type CircuitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CircuitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CircuitCountAggregateInputType | true
    }

  export interface CircuitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Circuit'], meta: { name: 'Circuit' } }
    /**
     * Find zero or one Circuit that matches the filter.
     * @param {CircuitFindUniqueArgs} args - Arguments to find a Circuit
     * @example
     * // Get one Circuit
     * const circuit = await prisma.circuit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CircuitFindUniqueArgs>(args: SelectSubset<T, CircuitFindUniqueArgs<ExtArgs>>): Prisma__CircuitClient<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Circuit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CircuitFindUniqueOrThrowArgs} args - Arguments to find a Circuit
     * @example
     * // Get one Circuit
     * const circuit = await prisma.circuit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CircuitFindUniqueOrThrowArgs>(args: SelectSubset<T, CircuitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CircuitClient<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Circuit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircuitFindFirstArgs} args - Arguments to find a Circuit
     * @example
     * // Get one Circuit
     * const circuit = await prisma.circuit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CircuitFindFirstArgs>(args?: SelectSubset<T, CircuitFindFirstArgs<ExtArgs>>): Prisma__CircuitClient<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Circuit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircuitFindFirstOrThrowArgs} args - Arguments to find a Circuit
     * @example
     * // Get one Circuit
     * const circuit = await prisma.circuit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CircuitFindFirstOrThrowArgs>(args?: SelectSubset<T, CircuitFindFirstOrThrowArgs<ExtArgs>>): Prisma__CircuitClient<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Circuits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircuitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Circuits
     * const circuits = await prisma.circuit.findMany()
     * 
     * // Get first 10 Circuits
     * const circuits = await prisma.circuit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const circuitWithIdOnly = await prisma.circuit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CircuitFindManyArgs>(args?: SelectSubset<T, CircuitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Circuit.
     * @param {CircuitCreateArgs} args - Arguments to create a Circuit.
     * @example
     * // Create one Circuit
     * const Circuit = await prisma.circuit.create({
     *   data: {
     *     // ... data to create a Circuit
     *   }
     * })
     * 
     */
    create<T extends CircuitCreateArgs>(args: SelectSubset<T, CircuitCreateArgs<ExtArgs>>): Prisma__CircuitClient<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Circuits.
     * @param {CircuitCreateManyArgs} args - Arguments to create many Circuits.
     * @example
     * // Create many Circuits
     * const circuit = await prisma.circuit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CircuitCreateManyArgs>(args?: SelectSubset<T, CircuitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Circuits and returns the data saved in the database.
     * @param {CircuitCreateManyAndReturnArgs} args - Arguments to create many Circuits.
     * @example
     * // Create many Circuits
     * const circuit = await prisma.circuit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Circuits and only return the `id`
     * const circuitWithIdOnly = await prisma.circuit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CircuitCreateManyAndReturnArgs>(args?: SelectSubset<T, CircuitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Circuit.
     * @param {CircuitDeleteArgs} args - Arguments to delete one Circuit.
     * @example
     * // Delete one Circuit
     * const Circuit = await prisma.circuit.delete({
     *   where: {
     *     // ... filter to delete one Circuit
     *   }
     * })
     * 
     */
    delete<T extends CircuitDeleteArgs>(args: SelectSubset<T, CircuitDeleteArgs<ExtArgs>>): Prisma__CircuitClient<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Circuit.
     * @param {CircuitUpdateArgs} args - Arguments to update one Circuit.
     * @example
     * // Update one Circuit
     * const circuit = await prisma.circuit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CircuitUpdateArgs>(args: SelectSubset<T, CircuitUpdateArgs<ExtArgs>>): Prisma__CircuitClient<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Circuits.
     * @param {CircuitDeleteManyArgs} args - Arguments to filter Circuits to delete.
     * @example
     * // Delete a few Circuits
     * const { count } = await prisma.circuit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CircuitDeleteManyArgs>(args?: SelectSubset<T, CircuitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circuits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircuitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Circuits
     * const circuit = await prisma.circuit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CircuitUpdateManyArgs>(args: SelectSubset<T, CircuitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circuits and returns the data updated in the database.
     * @param {CircuitUpdateManyAndReturnArgs} args - Arguments to update many Circuits.
     * @example
     * // Update many Circuits
     * const circuit = await prisma.circuit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Circuits and only return the `id`
     * const circuitWithIdOnly = await prisma.circuit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CircuitUpdateManyAndReturnArgs>(args: SelectSubset<T, CircuitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Circuit.
     * @param {CircuitUpsertArgs} args - Arguments to update or create a Circuit.
     * @example
     * // Update or create a Circuit
     * const circuit = await prisma.circuit.upsert({
     *   create: {
     *     // ... data to create a Circuit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Circuit we want to update
     *   }
     * })
     */
    upsert<T extends CircuitUpsertArgs>(args: SelectSubset<T, CircuitUpsertArgs<ExtArgs>>): Prisma__CircuitClient<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Circuits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircuitCountArgs} args - Arguments to filter Circuits to count.
     * @example
     * // Count the number of Circuits
     * const count = await prisma.circuit.count({
     *   where: {
     *     // ... the filter for the Circuits we want to count
     *   }
     * })
    **/
    count<T extends CircuitCountArgs>(
      args?: Subset<T, CircuitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CircuitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Circuit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircuitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CircuitAggregateArgs>(args: Subset<T, CircuitAggregateArgs>): Prisma.PrismaPromise<GetCircuitAggregateType<T>>

    /**
     * Group by Circuit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircuitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CircuitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CircuitGroupByArgs['orderBy'] }
        : { orderBy?: CircuitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CircuitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCircuitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Circuit model
   */
  readonly fields: CircuitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Circuit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CircuitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dossier<T extends DossierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DossierDefaultArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    protections<T extends Circuit$protectionsArgs<ExtArgs> = {}>(args?: Subset<T, Circuit$protectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Circuit model
   */
  interface CircuitFieldRefs {
    readonly id: FieldRef<"Circuit", 'String'>
    readonly nom: FieldRef<"Circuit", 'String'>
    readonly type: FieldRef<"Circuit", 'TypeCircuit'>
    readonly etat: FieldRef<"Circuit", 'EtatElement'>
    readonly amperage: FieldRef<"Circuit", 'Int'>
    readonly notes: FieldRef<"Circuit", 'String'>
    readonly createdAt: FieldRef<"Circuit", 'DateTime'>
    readonly updatedAt: FieldRef<"Circuit", 'DateTime'>
    readonly dossierId: FieldRef<"Circuit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Circuit findUnique
   */
  export type CircuitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    /**
     * Filter, which Circuit to fetch.
     */
    where: CircuitWhereUniqueInput
  }

  /**
   * Circuit findUniqueOrThrow
   */
  export type CircuitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    /**
     * Filter, which Circuit to fetch.
     */
    where: CircuitWhereUniqueInput
  }

  /**
   * Circuit findFirst
   */
  export type CircuitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    /**
     * Filter, which Circuit to fetch.
     */
    where?: CircuitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circuits to fetch.
     */
    orderBy?: CircuitOrderByWithRelationInput | CircuitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Circuits.
     */
    cursor?: CircuitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circuits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circuits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Circuits.
     */
    distinct?: CircuitScalarFieldEnum | CircuitScalarFieldEnum[]
  }

  /**
   * Circuit findFirstOrThrow
   */
  export type CircuitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    /**
     * Filter, which Circuit to fetch.
     */
    where?: CircuitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circuits to fetch.
     */
    orderBy?: CircuitOrderByWithRelationInput | CircuitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Circuits.
     */
    cursor?: CircuitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circuits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circuits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Circuits.
     */
    distinct?: CircuitScalarFieldEnum | CircuitScalarFieldEnum[]
  }

  /**
   * Circuit findMany
   */
  export type CircuitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    /**
     * Filter, which Circuits to fetch.
     */
    where?: CircuitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circuits to fetch.
     */
    orderBy?: CircuitOrderByWithRelationInput | CircuitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Circuits.
     */
    cursor?: CircuitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circuits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circuits.
     */
    skip?: number
    distinct?: CircuitScalarFieldEnum | CircuitScalarFieldEnum[]
  }

  /**
   * Circuit create
   */
  export type CircuitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    /**
     * The data needed to create a Circuit.
     */
    data: XOR<CircuitCreateInput, CircuitUncheckedCreateInput>
  }

  /**
   * Circuit createMany
   */
  export type CircuitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Circuits.
     */
    data: CircuitCreateManyInput | CircuitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Circuit createManyAndReturn
   */
  export type CircuitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * The data used to create many Circuits.
     */
    data: CircuitCreateManyInput | CircuitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Circuit update
   */
  export type CircuitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    /**
     * The data needed to update a Circuit.
     */
    data: XOR<CircuitUpdateInput, CircuitUncheckedUpdateInput>
    /**
     * Choose, which Circuit to update.
     */
    where: CircuitWhereUniqueInput
  }

  /**
   * Circuit updateMany
   */
  export type CircuitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Circuits.
     */
    data: XOR<CircuitUpdateManyMutationInput, CircuitUncheckedUpdateManyInput>
    /**
     * Filter which Circuits to update
     */
    where?: CircuitWhereInput
    /**
     * Limit how many Circuits to update.
     */
    limit?: number
  }

  /**
   * Circuit updateManyAndReturn
   */
  export type CircuitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * The data used to update Circuits.
     */
    data: XOR<CircuitUpdateManyMutationInput, CircuitUncheckedUpdateManyInput>
    /**
     * Filter which Circuits to update
     */
    where?: CircuitWhereInput
    /**
     * Limit how many Circuits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Circuit upsert
   */
  export type CircuitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    /**
     * The filter to search for the Circuit to update in case it exists.
     */
    where: CircuitWhereUniqueInput
    /**
     * In case the Circuit found by the `where` argument doesn't exist, create a new Circuit with this data.
     */
    create: XOR<CircuitCreateInput, CircuitUncheckedCreateInput>
    /**
     * In case the Circuit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CircuitUpdateInput, CircuitUncheckedUpdateInput>
  }

  /**
   * Circuit delete
   */
  export type CircuitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
    /**
     * Filter which Circuit to delete.
     */
    where: CircuitWhereUniqueInput
  }

  /**
   * Circuit deleteMany
   */
  export type CircuitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Circuits to delete
     */
    where?: CircuitWhereInput
    /**
     * Limit how many Circuits to delete.
     */
    limit?: number
  }

  /**
   * Circuit.protections
   */
  export type Circuit$protectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    where?: ProtectionWhereInput
    orderBy?: ProtectionOrderByWithRelationInput | ProtectionOrderByWithRelationInput[]
    cursor?: ProtectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProtectionScalarFieldEnum | ProtectionScalarFieldEnum[]
  }

  /**
   * Circuit without action
   */
  export type CircuitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circuit
     */
    select?: CircuitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circuit
     */
    omit?: CircuitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircuitInclude<ExtArgs> | null
  }


  /**
   * Model Protection
   */

  export type AggregateProtection = {
    _count: ProtectionCountAggregateOutputType | null
    _avg: ProtectionAvgAggregateOutputType | null
    _sum: ProtectionSumAggregateOutputType | null
    _min: ProtectionMinAggregateOutputType | null
    _max: ProtectionMaxAggregateOutputType | null
  }

  export type ProtectionAvgAggregateOutputType = {
    calibre: number | null
    sensibilite: number | null
  }

  export type ProtectionSumAggregateOutputType = {
    calibre: number | null
    sensibilite: number | null
  }

  export type ProtectionMinAggregateOutputType = {
    id: string | null
    type: $Enums.TypeProtection | null
    calibre: number | null
    courbe: $Enums.CourbeDisjoncteur | null
    typeDiff: $Enums.TypeDifferentiel | null
    sensibilite: number | null
    marque: string | null
    reference: string | null
    createdAt: Date | null
    updatedAt: Date | null
    circuitId: string | null
  }

  export type ProtectionMaxAggregateOutputType = {
    id: string | null
    type: $Enums.TypeProtection | null
    calibre: number | null
    courbe: $Enums.CourbeDisjoncteur | null
    typeDiff: $Enums.TypeDifferentiel | null
    sensibilite: number | null
    marque: string | null
    reference: string | null
    createdAt: Date | null
    updatedAt: Date | null
    circuitId: string | null
  }

  export type ProtectionCountAggregateOutputType = {
    id: number
    type: number
    calibre: number
    courbe: number
    typeDiff: number
    sensibilite: number
    marque: number
    reference: number
    createdAt: number
    updatedAt: number
    circuitId: number
    _all: number
  }


  export type ProtectionAvgAggregateInputType = {
    calibre?: true
    sensibilite?: true
  }

  export type ProtectionSumAggregateInputType = {
    calibre?: true
    sensibilite?: true
  }

  export type ProtectionMinAggregateInputType = {
    id?: true
    type?: true
    calibre?: true
    courbe?: true
    typeDiff?: true
    sensibilite?: true
    marque?: true
    reference?: true
    createdAt?: true
    updatedAt?: true
    circuitId?: true
  }

  export type ProtectionMaxAggregateInputType = {
    id?: true
    type?: true
    calibre?: true
    courbe?: true
    typeDiff?: true
    sensibilite?: true
    marque?: true
    reference?: true
    createdAt?: true
    updatedAt?: true
    circuitId?: true
  }

  export type ProtectionCountAggregateInputType = {
    id?: true
    type?: true
    calibre?: true
    courbe?: true
    typeDiff?: true
    sensibilite?: true
    marque?: true
    reference?: true
    createdAt?: true
    updatedAt?: true
    circuitId?: true
    _all?: true
  }

  export type ProtectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Protection to aggregate.
     */
    where?: ProtectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Protections to fetch.
     */
    orderBy?: ProtectionOrderByWithRelationInput | ProtectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProtectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Protections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Protections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Protections
    **/
    _count?: true | ProtectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProtectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProtectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProtectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProtectionMaxAggregateInputType
  }

  export type GetProtectionAggregateType<T extends ProtectionAggregateArgs> = {
        [P in keyof T & keyof AggregateProtection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProtection[P]>
      : GetScalarType<T[P], AggregateProtection[P]>
  }




  export type ProtectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProtectionWhereInput
    orderBy?: ProtectionOrderByWithAggregationInput | ProtectionOrderByWithAggregationInput[]
    by: ProtectionScalarFieldEnum[] | ProtectionScalarFieldEnum
    having?: ProtectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProtectionCountAggregateInputType | true
    _avg?: ProtectionAvgAggregateInputType
    _sum?: ProtectionSumAggregateInputType
    _min?: ProtectionMinAggregateInputType
    _max?: ProtectionMaxAggregateInputType
  }

  export type ProtectionGroupByOutputType = {
    id: string
    type: $Enums.TypeProtection
    calibre: number
    courbe: $Enums.CourbeDisjoncteur | null
    typeDiff: $Enums.TypeDifferentiel | null
    sensibilite: number | null
    marque: string | null
    reference: string | null
    createdAt: Date
    updatedAt: Date
    circuitId: string
    _count: ProtectionCountAggregateOutputType | null
    _avg: ProtectionAvgAggregateOutputType | null
    _sum: ProtectionSumAggregateOutputType | null
    _min: ProtectionMinAggregateOutputType | null
    _max: ProtectionMaxAggregateOutputType | null
  }

  type GetProtectionGroupByPayload<T extends ProtectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProtectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProtectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProtectionGroupByOutputType[P]>
            : GetScalarType<T[P], ProtectionGroupByOutputType[P]>
        }
      >
    >


  export type ProtectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    calibre?: boolean
    courbe?: boolean
    typeDiff?: boolean
    sensibilite?: boolean
    marque?: boolean
    reference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    circuitId?: boolean
    circuit?: boolean | CircuitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["protection"]>

  export type ProtectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    calibre?: boolean
    courbe?: boolean
    typeDiff?: boolean
    sensibilite?: boolean
    marque?: boolean
    reference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    circuitId?: boolean
    circuit?: boolean | CircuitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["protection"]>

  export type ProtectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    calibre?: boolean
    courbe?: boolean
    typeDiff?: boolean
    sensibilite?: boolean
    marque?: boolean
    reference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    circuitId?: boolean
    circuit?: boolean | CircuitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["protection"]>

  export type ProtectionSelectScalar = {
    id?: boolean
    type?: boolean
    calibre?: boolean
    courbe?: boolean
    typeDiff?: boolean
    sensibilite?: boolean
    marque?: boolean
    reference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    circuitId?: boolean
  }

  export type ProtectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "calibre" | "courbe" | "typeDiff" | "sensibilite" | "marque" | "reference" | "createdAt" | "updatedAt" | "circuitId", ExtArgs["result"]["protection"]>
  export type ProtectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    circuit?: boolean | CircuitDefaultArgs<ExtArgs>
  }
  export type ProtectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    circuit?: boolean | CircuitDefaultArgs<ExtArgs>
  }
  export type ProtectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    circuit?: boolean | CircuitDefaultArgs<ExtArgs>
  }

  export type $ProtectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Protection"
    objects: {
      circuit: Prisma.$CircuitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.TypeProtection
      calibre: number
      courbe: $Enums.CourbeDisjoncteur | null
      typeDiff: $Enums.TypeDifferentiel | null
      sensibilite: number | null
      marque: string | null
      reference: string | null
      createdAt: Date
      updatedAt: Date
      circuitId: string
    }, ExtArgs["result"]["protection"]>
    composites: {}
  }

  type ProtectionGetPayload<S extends boolean | null | undefined | ProtectionDefaultArgs> = $Result.GetResult<Prisma.$ProtectionPayload, S>

  type ProtectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProtectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProtectionCountAggregateInputType | true
    }

  export interface ProtectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Protection'], meta: { name: 'Protection' } }
    /**
     * Find zero or one Protection that matches the filter.
     * @param {ProtectionFindUniqueArgs} args - Arguments to find a Protection
     * @example
     * // Get one Protection
     * const protection = await prisma.protection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProtectionFindUniqueArgs>(args: SelectSubset<T, ProtectionFindUniqueArgs<ExtArgs>>): Prisma__ProtectionClient<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Protection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProtectionFindUniqueOrThrowArgs} args - Arguments to find a Protection
     * @example
     * // Get one Protection
     * const protection = await prisma.protection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProtectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProtectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProtectionClient<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Protection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionFindFirstArgs} args - Arguments to find a Protection
     * @example
     * // Get one Protection
     * const protection = await prisma.protection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProtectionFindFirstArgs>(args?: SelectSubset<T, ProtectionFindFirstArgs<ExtArgs>>): Prisma__ProtectionClient<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Protection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionFindFirstOrThrowArgs} args - Arguments to find a Protection
     * @example
     * // Get one Protection
     * const protection = await prisma.protection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProtectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProtectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProtectionClient<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Protections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Protections
     * const protections = await prisma.protection.findMany()
     * 
     * // Get first 10 Protections
     * const protections = await prisma.protection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const protectionWithIdOnly = await prisma.protection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProtectionFindManyArgs>(args?: SelectSubset<T, ProtectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Protection.
     * @param {ProtectionCreateArgs} args - Arguments to create a Protection.
     * @example
     * // Create one Protection
     * const Protection = await prisma.protection.create({
     *   data: {
     *     // ... data to create a Protection
     *   }
     * })
     * 
     */
    create<T extends ProtectionCreateArgs>(args: SelectSubset<T, ProtectionCreateArgs<ExtArgs>>): Prisma__ProtectionClient<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Protections.
     * @param {ProtectionCreateManyArgs} args - Arguments to create many Protections.
     * @example
     * // Create many Protections
     * const protection = await prisma.protection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProtectionCreateManyArgs>(args?: SelectSubset<T, ProtectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Protections and returns the data saved in the database.
     * @param {ProtectionCreateManyAndReturnArgs} args - Arguments to create many Protections.
     * @example
     * // Create many Protections
     * const protection = await prisma.protection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Protections and only return the `id`
     * const protectionWithIdOnly = await prisma.protection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProtectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProtectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Protection.
     * @param {ProtectionDeleteArgs} args - Arguments to delete one Protection.
     * @example
     * // Delete one Protection
     * const Protection = await prisma.protection.delete({
     *   where: {
     *     // ... filter to delete one Protection
     *   }
     * })
     * 
     */
    delete<T extends ProtectionDeleteArgs>(args: SelectSubset<T, ProtectionDeleteArgs<ExtArgs>>): Prisma__ProtectionClient<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Protection.
     * @param {ProtectionUpdateArgs} args - Arguments to update one Protection.
     * @example
     * // Update one Protection
     * const protection = await prisma.protection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProtectionUpdateArgs>(args: SelectSubset<T, ProtectionUpdateArgs<ExtArgs>>): Prisma__ProtectionClient<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Protections.
     * @param {ProtectionDeleteManyArgs} args - Arguments to filter Protections to delete.
     * @example
     * // Delete a few Protections
     * const { count } = await prisma.protection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProtectionDeleteManyArgs>(args?: SelectSubset<T, ProtectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Protections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Protections
     * const protection = await prisma.protection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProtectionUpdateManyArgs>(args: SelectSubset<T, ProtectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Protections and returns the data updated in the database.
     * @param {ProtectionUpdateManyAndReturnArgs} args - Arguments to update many Protections.
     * @example
     * // Update many Protections
     * const protection = await prisma.protection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Protections and only return the `id`
     * const protectionWithIdOnly = await prisma.protection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProtectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProtectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Protection.
     * @param {ProtectionUpsertArgs} args - Arguments to update or create a Protection.
     * @example
     * // Update or create a Protection
     * const protection = await prisma.protection.upsert({
     *   create: {
     *     // ... data to create a Protection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Protection we want to update
     *   }
     * })
     */
    upsert<T extends ProtectionUpsertArgs>(args: SelectSubset<T, ProtectionUpsertArgs<ExtArgs>>): Prisma__ProtectionClient<$Result.GetResult<Prisma.$ProtectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Protections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionCountArgs} args - Arguments to filter Protections to count.
     * @example
     * // Count the number of Protections
     * const count = await prisma.protection.count({
     *   where: {
     *     // ... the filter for the Protections we want to count
     *   }
     * })
    **/
    count<T extends ProtectionCountArgs>(
      args?: Subset<T, ProtectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProtectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Protection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProtectionAggregateArgs>(args: Subset<T, ProtectionAggregateArgs>): Prisma.PrismaPromise<GetProtectionAggregateType<T>>

    /**
     * Group by Protection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProtectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProtectionGroupByArgs['orderBy'] }
        : { orderBy?: ProtectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProtectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProtectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Protection model
   */
  readonly fields: ProtectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Protection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProtectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    circuit<T extends CircuitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CircuitDefaultArgs<ExtArgs>>): Prisma__CircuitClient<$Result.GetResult<Prisma.$CircuitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Protection model
   */
  interface ProtectionFieldRefs {
    readonly id: FieldRef<"Protection", 'String'>
    readonly type: FieldRef<"Protection", 'TypeProtection'>
    readonly calibre: FieldRef<"Protection", 'Int'>
    readonly courbe: FieldRef<"Protection", 'CourbeDisjoncteur'>
    readonly typeDiff: FieldRef<"Protection", 'TypeDifferentiel'>
    readonly sensibilite: FieldRef<"Protection", 'Int'>
    readonly marque: FieldRef<"Protection", 'String'>
    readonly reference: FieldRef<"Protection", 'String'>
    readonly createdAt: FieldRef<"Protection", 'DateTime'>
    readonly updatedAt: FieldRef<"Protection", 'DateTime'>
    readonly circuitId: FieldRef<"Protection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Protection findUnique
   */
  export type ProtectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    /**
     * Filter, which Protection to fetch.
     */
    where: ProtectionWhereUniqueInput
  }

  /**
   * Protection findUniqueOrThrow
   */
  export type ProtectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    /**
     * Filter, which Protection to fetch.
     */
    where: ProtectionWhereUniqueInput
  }

  /**
   * Protection findFirst
   */
  export type ProtectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    /**
     * Filter, which Protection to fetch.
     */
    where?: ProtectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Protections to fetch.
     */
    orderBy?: ProtectionOrderByWithRelationInput | ProtectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Protections.
     */
    cursor?: ProtectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Protections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Protections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Protections.
     */
    distinct?: ProtectionScalarFieldEnum | ProtectionScalarFieldEnum[]
  }

  /**
   * Protection findFirstOrThrow
   */
  export type ProtectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    /**
     * Filter, which Protection to fetch.
     */
    where?: ProtectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Protections to fetch.
     */
    orderBy?: ProtectionOrderByWithRelationInput | ProtectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Protections.
     */
    cursor?: ProtectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Protections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Protections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Protections.
     */
    distinct?: ProtectionScalarFieldEnum | ProtectionScalarFieldEnum[]
  }

  /**
   * Protection findMany
   */
  export type ProtectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    /**
     * Filter, which Protections to fetch.
     */
    where?: ProtectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Protections to fetch.
     */
    orderBy?: ProtectionOrderByWithRelationInput | ProtectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Protections.
     */
    cursor?: ProtectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Protections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Protections.
     */
    skip?: number
    distinct?: ProtectionScalarFieldEnum | ProtectionScalarFieldEnum[]
  }

  /**
   * Protection create
   */
  export type ProtectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Protection.
     */
    data: XOR<ProtectionCreateInput, ProtectionUncheckedCreateInput>
  }

  /**
   * Protection createMany
   */
  export type ProtectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Protections.
     */
    data: ProtectionCreateManyInput | ProtectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Protection createManyAndReturn
   */
  export type ProtectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * The data used to create many Protections.
     */
    data: ProtectionCreateManyInput | ProtectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Protection update
   */
  export type ProtectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Protection.
     */
    data: XOR<ProtectionUpdateInput, ProtectionUncheckedUpdateInput>
    /**
     * Choose, which Protection to update.
     */
    where: ProtectionWhereUniqueInput
  }

  /**
   * Protection updateMany
   */
  export type ProtectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Protections.
     */
    data: XOR<ProtectionUpdateManyMutationInput, ProtectionUncheckedUpdateManyInput>
    /**
     * Filter which Protections to update
     */
    where?: ProtectionWhereInput
    /**
     * Limit how many Protections to update.
     */
    limit?: number
  }

  /**
   * Protection updateManyAndReturn
   */
  export type ProtectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * The data used to update Protections.
     */
    data: XOR<ProtectionUpdateManyMutationInput, ProtectionUncheckedUpdateManyInput>
    /**
     * Filter which Protections to update
     */
    where?: ProtectionWhereInput
    /**
     * Limit how many Protections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Protection upsert
   */
  export type ProtectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Protection to update in case it exists.
     */
    where: ProtectionWhereUniqueInput
    /**
     * In case the Protection found by the `where` argument doesn't exist, create a new Protection with this data.
     */
    create: XOR<ProtectionCreateInput, ProtectionUncheckedCreateInput>
    /**
     * In case the Protection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProtectionUpdateInput, ProtectionUncheckedUpdateInput>
  }

  /**
   * Protection delete
   */
  export type ProtectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
    /**
     * Filter which Protection to delete.
     */
    where: ProtectionWhereUniqueInput
  }

  /**
   * Protection deleteMany
   */
  export type ProtectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Protections to delete
     */
    where?: ProtectionWhereInput
    /**
     * Limit how many Protections to delete.
     */
    limit?: number
  }

  /**
   * Protection without action
   */
  export type ProtectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Protection
     */
    select?: ProtectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Protection
     */
    omit?: ProtectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtectionInclude<ExtArgs> | null
  }


  /**
   * Model PointControleRgie
   */

  export type AggregatePointControleRgie = {
    _count: PointControleRgieCountAggregateOutputType | null
    _min: PointControleRgieMinAggregateOutputType | null
    _max: PointControleRgieMaxAggregateOutputType | null
  }

  export type PointControleRgieMinAggregateOutputType = {
    id: string | null
    articleRgie: string | null
    libelle: string | null
    statut: $Enums.StatutRgie | null
    observation: string | null
    createdAt: Date | null
    updatedAt: Date | null
    dossierId: string | null
  }

  export type PointControleRgieMaxAggregateOutputType = {
    id: string | null
    articleRgie: string | null
    libelle: string | null
    statut: $Enums.StatutRgie | null
    observation: string | null
    createdAt: Date | null
    updatedAt: Date | null
    dossierId: string | null
  }

  export type PointControleRgieCountAggregateOutputType = {
    id: number
    articleRgie: number
    libelle: number
    statut: number
    observation: number
    createdAt: number
    updatedAt: number
    dossierId: number
    _all: number
  }


  export type PointControleRgieMinAggregateInputType = {
    id?: true
    articleRgie?: true
    libelle?: true
    statut?: true
    observation?: true
    createdAt?: true
    updatedAt?: true
    dossierId?: true
  }

  export type PointControleRgieMaxAggregateInputType = {
    id?: true
    articleRgie?: true
    libelle?: true
    statut?: true
    observation?: true
    createdAt?: true
    updatedAt?: true
    dossierId?: true
  }

  export type PointControleRgieCountAggregateInputType = {
    id?: true
    articleRgie?: true
    libelle?: true
    statut?: true
    observation?: true
    createdAt?: true
    updatedAt?: true
    dossierId?: true
    _all?: true
  }

  export type PointControleRgieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointControleRgie to aggregate.
     */
    where?: PointControleRgieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointControleRgies to fetch.
     */
    orderBy?: PointControleRgieOrderByWithRelationInput | PointControleRgieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointControleRgieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointControleRgies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointControleRgies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PointControleRgies
    **/
    _count?: true | PointControleRgieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointControleRgieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointControleRgieMaxAggregateInputType
  }

  export type GetPointControleRgieAggregateType<T extends PointControleRgieAggregateArgs> = {
        [P in keyof T & keyof AggregatePointControleRgie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePointControleRgie[P]>
      : GetScalarType<T[P], AggregatePointControleRgie[P]>
  }




  export type PointControleRgieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointControleRgieWhereInput
    orderBy?: PointControleRgieOrderByWithAggregationInput | PointControleRgieOrderByWithAggregationInput[]
    by: PointControleRgieScalarFieldEnum[] | PointControleRgieScalarFieldEnum
    having?: PointControleRgieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointControleRgieCountAggregateInputType | true
    _min?: PointControleRgieMinAggregateInputType
    _max?: PointControleRgieMaxAggregateInputType
  }

  export type PointControleRgieGroupByOutputType = {
    id: string
    articleRgie: string
    libelle: string
    statut: $Enums.StatutRgie
    observation: string | null
    createdAt: Date
    updatedAt: Date
    dossierId: string
    _count: PointControleRgieCountAggregateOutputType | null
    _min: PointControleRgieMinAggregateOutputType | null
    _max: PointControleRgieMaxAggregateOutputType | null
  }

  type GetPointControleRgieGroupByPayload<T extends PointControleRgieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointControleRgieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointControleRgieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointControleRgieGroupByOutputType[P]>
            : GetScalarType<T[P], PointControleRgieGroupByOutputType[P]>
        }
      >
    >


  export type PointControleRgieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleRgie?: boolean
    libelle?: boolean
    statut?: boolean
    observation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossierId?: boolean
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointControleRgie"]>

  export type PointControleRgieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleRgie?: boolean
    libelle?: boolean
    statut?: boolean
    observation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossierId?: boolean
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointControleRgie"]>

  export type PointControleRgieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleRgie?: boolean
    libelle?: boolean
    statut?: boolean
    observation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossierId?: boolean
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointControleRgie"]>

  export type PointControleRgieSelectScalar = {
    id?: boolean
    articleRgie?: boolean
    libelle?: boolean
    statut?: boolean
    observation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dossierId?: boolean
  }

  export type PointControleRgieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "articleRgie" | "libelle" | "statut" | "observation" | "createdAt" | "updatedAt" | "dossierId", ExtArgs["result"]["pointControleRgie"]>
  export type PointControleRgieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }
  export type PointControleRgieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }
  export type PointControleRgieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dossier?: boolean | DossierDefaultArgs<ExtArgs>
  }

  export type $PointControleRgiePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PointControleRgie"
    objects: {
      dossier: Prisma.$DossierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      articleRgie: string
      libelle: string
      statut: $Enums.StatutRgie
      observation: string | null
      createdAt: Date
      updatedAt: Date
      dossierId: string
    }, ExtArgs["result"]["pointControleRgie"]>
    composites: {}
  }

  type PointControleRgieGetPayload<S extends boolean | null | undefined | PointControleRgieDefaultArgs> = $Result.GetResult<Prisma.$PointControleRgiePayload, S>

  type PointControleRgieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointControleRgieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointControleRgieCountAggregateInputType | true
    }

  export interface PointControleRgieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PointControleRgie'], meta: { name: 'PointControleRgie' } }
    /**
     * Find zero or one PointControleRgie that matches the filter.
     * @param {PointControleRgieFindUniqueArgs} args - Arguments to find a PointControleRgie
     * @example
     * // Get one PointControleRgie
     * const pointControleRgie = await prisma.pointControleRgie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointControleRgieFindUniqueArgs>(args: SelectSubset<T, PointControleRgieFindUniqueArgs<ExtArgs>>): Prisma__PointControleRgieClient<$Result.GetResult<Prisma.$PointControleRgiePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PointControleRgie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointControleRgieFindUniqueOrThrowArgs} args - Arguments to find a PointControleRgie
     * @example
     * // Get one PointControleRgie
     * const pointControleRgie = await prisma.pointControleRgie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointControleRgieFindUniqueOrThrowArgs>(args: SelectSubset<T, PointControleRgieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointControleRgieClient<$Result.GetResult<Prisma.$PointControleRgiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointControleRgie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointControleRgieFindFirstArgs} args - Arguments to find a PointControleRgie
     * @example
     * // Get one PointControleRgie
     * const pointControleRgie = await prisma.pointControleRgie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointControleRgieFindFirstArgs>(args?: SelectSubset<T, PointControleRgieFindFirstArgs<ExtArgs>>): Prisma__PointControleRgieClient<$Result.GetResult<Prisma.$PointControleRgiePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointControleRgie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointControleRgieFindFirstOrThrowArgs} args - Arguments to find a PointControleRgie
     * @example
     * // Get one PointControleRgie
     * const pointControleRgie = await prisma.pointControleRgie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointControleRgieFindFirstOrThrowArgs>(args?: SelectSubset<T, PointControleRgieFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointControleRgieClient<$Result.GetResult<Prisma.$PointControleRgiePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PointControleRgies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointControleRgieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PointControleRgies
     * const pointControleRgies = await prisma.pointControleRgie.findMany()
     * 
     * // Get first 10 PointControleRgies
     * const pointControleRgies = await prisma.pointControleRgie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointControleRgieWithIdOnly = await prisma.pointControleRgie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointControleRgieFindManyArgs>(args?: SelectSubset<T, PointControleRgieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointControleRgiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PointControleRgie.
     * @param {PointControleRgieCreateArgs} args - Arguments to create a PointControleRgie.
     * @example
     * // Create one PointControleRgie
     * const PointControleRgie = await prisma.pointControleRgie.create({
     *   data: {
     *     // ... data to create a PointControleRgie
     *   }
     * })
     * 
     */
    create<T extends PointControleRgieCreateArgs>(args: SelectSubset<T, PointControleRgieCreateArgs<ExtArgs>>): Prisma__PointControleRgieClient<$Result.GetResult<Prisma.$PointControleRgiePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PointControleRgies.
     * @param {PointControleRgieCreateManyArgs} args - Arguments to create many PointControleRgies.
     * @example
     * // Create many PointControleRgies
     * const pointControleRgie = await prisma.pointControleRgie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointControleRgieCreateManyArgs>(args?: SelectSubset<T, PointControleRgieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PointControleRgies and returns the data saved in the database.
     * @param {PointControleRgieCreateManyAndReturnArgs} args - Arguments to create many PointControleRgies.
     * @example
     * // Create many PointControleRgies
     * const pointControleRgie = await prisma.pointControleRgie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PointControleRgies and only return the `id`
     * const pointControleRgieWithIdOnly = await prisma.pointControleRgie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointControleRgieCreateManyAndReturnArgs>(args?: SelectSubset<T, PointControleRgieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointControleRgiePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PointControleRgie.
     * @param {PointControleRgieDeleteArgs} args - Arguments to delete one PointControleRgie.
     * @example
     * // Delete one PointControleRgie
     * const PointControleRgie = await prisma.pointControleRgie.delete({
     *   where: {
     *     // ... filter to delete one PointControleRgie
     *   }
     * })
     * 
     */
    delete<T extends PointControleRgieDeleteArgs>(args: SelectSubset<T, PointControleRgieDeleteArgs<ExtArgs>>): Prisma__PointControleRgieClient<$Result.GetResult<Prisma.$PointControleRgiePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PointControleRgie.
     * @param {PointControleRgieUpdateArgs} args - Arguments to update one PointControleRgie.
     * @example
     * // Update one PointControleRgie
     * const pointControleRgie = await prisma.pointControleRgie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointControleRgieUpdateArgs>(args: SelectSubset<T, PointControleRgieUpdateArgs<ExtArgs>>): Prisma__PointControleRgieClient<$Result.GetResult<Prisma.$PointControleRgiePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PointControleRgies.
     * @param {PointControleRgieDeleteManyArgs} args - Arguments to filter PointControleRgies to delete.
     * @example
     * // Delete a few PointControleRgies
     * const { count } = await prisma.pointControleRgie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointControleRgieDeleteManyArgs>(args?: SelectSubset<T, PointControleRgieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointControleRgies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointControleRgieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PointControleRgies
     * const pointControleRgie = await prisma.pointControleRgie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointControleRgieUpdateManyArgs>(args: SelectSubset<T, PointControleRgieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointControleRgies and returns the data updated in the database.
     * @param {PointControleRgieUpdateManyAndReturnArgs} args - Arguments to update many PointControleRgies.
     * @example
     * // Update many PointControleRgies
     * const pointControleRgie = await prisma.pointControleRgie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PointControleRgies and only return the `id`
     * const pointControleRgieWithIdOnly = await prisma.pointControleRgie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PointControleRgieUpdateManyAndReturnArgs>(args: SelectSubset<T, PointControleRgieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointControleRgiePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PointControleRgie.
     * @param {PointControleRgieUpsertArgs} args - Arguments to update or create a PointControleRgie.
     * @example
     * // Update or create a PointControleRgie
     * const pointControleRgie = await prisma.pointControleRgie.upsert({
     *   create: {
     *     // ... data to create a PointControleRgie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PointControleRgie we want to update
     *   }
     * })
     */
    upsert<T extends PointControleRgieUpsertArgs>(args: SelectSubset<T, PointControleRgieUpsertArgs<ExtArgs>>): Prisma__PointControleRgieClient<$Result.GetResult<Prisma.$PointControleRgiePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PointControleRgies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointControleRgieCountArgs} args - Arguments to filter PointControleRgies to count.
     * @example
     * // Count the number of PointControleRgies
     * const count = await prisma.pointControleRgie.count({
     *   where: {
     *     // ... the filter for the PointControleRgies we want to count
     *   }
     * })
    **/
    count<T extends PointControleRgieCountArgs>(
      args?: Subset<T, PointControleRgieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointControleRgieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PointControleRgie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointControleRgieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PointControleRgieAggregateArgs>(args: Subset<T, PointControleRgieAggregateArgs>): Prisma.PrismaPromise<GetPointControleRgieAggregateType<T>>

    /**
     * Group by PointControleRgie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointControleRgieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PointControleRgieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointControleRgieGroupByArgs['orderBy'] }
        : { orderBy?: PointControleRgieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PointControleRgieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointControleRgieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PointControleRgie model
   */
  readonly fields: PointControleRgieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PointControleRgie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointControleRgieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dossier<T extends DossierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DossierDefaultArgs<ExtArgs>>): Prisma__DossierClient<$Result.GetResult<Prisma.$DossierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PointControleRgie model
   */
  interface PointControleRgieFieldRefs {
    readonly id: FieldRef<"PointControleRgie", 'String'>
    readonly articleRgie: FieldRef<"PointControleRgie", 'String'>
    readonly libelle: FieldRef<"PointControleRgie", 'String'>
    readonly statut: FieldRef<"PointControleRgie", 'StatutRgie'>
    readonly observation: FieldRef<"PointControleRgie", 'String'>
    readonly createdAt: FieldRef<"PointControleRgie", 'DateTime'>
    readonly updatedAt: FieldRef<"PointControleRgie", 'DateTime'>
    readonly dossierId: FieldRef<"PointControleRgie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PointControleRgie findUnique
   */
  export type PointControleRgieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointControleRgie
     */
    select?: PointControleRgieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointControleRgie
     */
    omit?: PointControleRgieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointControleRgieInclude<ExtArgs> | null
    /**
     * Filter, which PointControleRgie to fetch.
     */
    where: PointControleRgieWhereUniqueInput
  }

  /**
   * PointControleRgie findUniqueOrThrow
   */
  export type PointControleRgieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointControleRgie
     */
    select?: PointControleRgieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointControleRgie
     */
    omit?: PointControleRgieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointControleRgieInclude<ExtArgs> | null
    /**
     * Filter, which PointControleRgie to fetch.
     */
    where: PointControleRgieWhereUniqueInput
  }

  /**
   * PointControleRgie findFirst
   */
  export type PointControleRgieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointControleRgie
     */
    select?: PointControleRgieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointControleRgie
     */
    omit?: PointControleRgieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointControleRgieInclude<ExtArgs> | null
    /**
     * Filter, which PointControleRgie to fetch.
     */
    where?: PointControleRgieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointControleRgies to fetch.
     */
    orderBy?: PointControleRgieOrderByWithRelationInput | PointControleRgieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointControleRgies.
     */
    cursor?: PointControleRgieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointControleRgies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointControleRgies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointControleRgies.
     */
    distinct?: PointControleRgieScalarFieldEnum | PointControleRgieScalarFieldEnum[]
  }

  /**
   * PointControleRgie findFirstOrThrow
   */
  export type PointControleRgieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointControleRgie
     */
    select?: PointControleRgieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointControleRgie
     */
    omit?: PointControleRgieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointControleRgieInclude<ExtArgs> | null
    /**
     * Filter, which PointControleRgie to fetch.
     */
    where?: PointControleRgieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointControleRgies to fetch.
     */
    orderBy?: PointControleRgieOrderByWithRelationInput | PointControleRgieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointControleRgies.
     */
    cursor?: PointControleRgieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointControleRgies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointControleRgies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointControleRgies.
     */
    distinct?: PointControleRgieScalarFieldEnum | PointControleRgieScalarFieldEnum[]
  }

  /**
   * PointControleRgie findMany
   */
  export type PointControleRgieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointControleRgie
     */
    select?: PointControleRgieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointControleRgie
     */
    omit?: PointControleRgieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointControleRgieInclude<ExtArgs> | null
    /**
     * Filter, which PointControleRgies to fetch.
     */
    where?: PointControleRgieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointControleRgies to fetch.
     */
    orderBy?: PointControleRgieOrderByWithRelationInput | PointControleRgieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PointControleRgies.
     */
    cursor?: PointControleRgieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointControleRgies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointControleRgies.
     */
    skip?: number
    distinct?: PointControleRgieScalarFieldEnum | PointControleRgieScalarFieldEnum[]
  }

  /**
   * PointControleRgie create
   */
  export type PointControleRgieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointControleRgie
     */
    select?: PointControleRgieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointControleRgie
     */
    omit?: PointControleRgieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointControleRgieInclude<ExtArgs> | null
    /**
     * The data needed to create a PointControleRgie.
     */
    data: XOR<PointControleRgieCreateInput, PointControleRgieUncheckedCreateInput>
  }

  /**
   * PointControleRgie createMany
   */
  export type PointControleRgieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PointControleRgies.
     */
    data: PointControleRgieCreateManyInput | PointControleRgieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PointControleRgie createManyAndReturn
   */
  export type PointControleRgieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointControleRgie
     */
    select?: PointControleRgieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PointControleRgie
     */
    omit?: PointControleRgieOmit<ExtArgs> | null
    /**
     * The data used to create many PointControleRgies.
     */
    data: PointControleRgieCreateManyInput | PointControleRgieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointControleRgieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PointControleRgie update
   */
  export type PointControleRgieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointControleRgie
     */
    select?: PointControleRgieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointControleRgie
     */
    omit?: PointControleRgieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointControleRgieInclude<ExtArgs> | null
    /**
     * The data needed to update a PointControleRgie.
     */
    data: XOR<PointControleRgieUpdateInput, PointControleRgieUncheckedUpdateInput>
    /**
     * Choose, which PointControleRgie to update.
     */
    where: PointControleRgieWhereUniqueInput
  }

  /**
   * PointControleRgie updateMany
   */
  export type PointControleRgieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PointControleRgies.
     */
    data: XOR<PointControleRgieUpdateManyMutationInput, PointControleRgieUncheckedUpdateManyInput>
    /**
     * Filter which PointControleRgies to update
     */
    where?: PointControleRgieWhereInput
    /**
     * Limit how many PointControleRgies to update.
     */
    limit?: number
  }

  /**
   * PointControleRgie updateManyAndReturn
   */
  export type PointControleRgieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointControleRgie
     */
    select?: PointControleRgieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PointControleRgie
     */
    omit?: PointControleRgieOmit<ExtArgs> | null
    /**
     * The data used to update PointControleRgies.
     */
    data: XOR<PointControleRgieUpdateManyMutationInput, PointControleRgieUncheckedUpdateManyInput>
    /**
     * Filter which PointControleRgies to update
     */
    where?: PointControleRgieWhereInput
    /**
     * Limit how many PointControleRgies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointControleRgieIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PointControleRgie upsert
   */
  export type PointControleRgieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointControleRgie
     */
    select?: PointControleRgieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointControleRgie
     */
    omit?: PointControleRgieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointControleRgieInclude<ExtArgs> | null
    /**
     * The filter to search for the PointControleRgie to update in case it exists.
     */
    where: PointControleRgieWhereUniqueInput
    /**
     * In case the PointControleRgie found by the `where` argument doesn't exist, create a new PointControleRgie with this data.
     */
    create: XOR<PointControleRgieCreateInput, PointControleRgieUncheckedCreateInput>
    /**
     * In case the PointControleRgie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointControleRgieUpdateInput, PointControleRgieUncheckedUpdateInput>
  }

  /**
   * PointControleRgie delete
   */
  export type PointControleRgieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointControleRgie
     */
    select?: PointControleRgieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointControleRgie
     */
    omit?: PointControleRgieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointControleRgieInclude<ExtArgs> | null
    /**
     * Filter which PointControleRgie to delete.
     */
    where: PointControleRgieWhereUniqueInput
  }

  /**
   * PointControleRgie deleteMany
   */
  export type PointControleRgieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointControleRgies to delete
     */
    where?: PointControleRgieWhereInput
    /**
     * Limit how many PointControleRgies to delete.
     */
    limit?: number
  }

  /**
   * PointControleRgie without action
   */
  export type PointControleRgieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointControleRgie
     */
    select?: PointControleRgieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointControleRgie
     */
    omit?: PointControleRgieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointControleRgieInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClientScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    telephone: 'telephone',
    adresse: 'adresse',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const DossierScalarFieldEnum: {
    id: 'id',
    reference: 'reference',
    titre: 'titre',
    typeInstallation: 'typeInstallation',
    statut: 'statut',
    description: 'description',
    adresseChantier: 'adresseChantier',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clientId: 'clientId'
  };

  export type DossierScalarFieldEnum = (typeof DossierScalarFieldEnum)[keyof typeof DossierScalarFieldEnum]


  export const ChantierScalarFieldEnum: {
    id: 'id',
    etat: 'etat',
    dateDebut: 'dateDebut',
    dateFin: 'dateFin',
    responsable: 'responsable',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    dossierId: 'dossierId'
  };

  export type ChantierScalarFieldEnum = (typeof ChantierScalarFieldEnum)[keyof typeof ChantierScalarFieldEnum]


  export const DevisScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    statut: 'statut',
    montantHT: 'montantHT',
    tva: 'tva',
    montantTTC: 'montantTTC',
    dateEmission: 'dateEmission',
    dateExpiration: 'dateExpiration',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    dossierId: 'dossierId'
  };

  export type DevisScalarFieldEnum = (typeof DevisScalarFieldEnum)[keyof typeof DevisScalarFieldEnum]


  export const DiagnosticScalarFieldEnum: {
    id: 'id',
    statut: 'statut',
    observations: 'observations',
    conclusions: 'conclusions',
    realiseAt: 'realiseAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    dossierId: 'dossierId'
  };

  export type DiagnosticScalarFieldEnum = (typeof DiagnosticScalarFieldEnum)[keyof typeof DiagnosticScalarFieldEnum]


  export const CircuitScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    type: 'type',
    etat: 'etat',
    amperage: 'amperage',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    dossierId: 'dossierId'
  };

  export type CircuitScalarFieldEnum = (typeof CircuitScalarFieldEnum)[keyof typeof CircuitScalarFieldEnum]


  export const ProtectionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    calibre: 'calibre',
    courbe: 'courbe',
    typeDiff: 'typeDiff',
    sensibilite: 'sensibilite',
    marque: 'marque',
    reference: 'reference',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    circuitId: 'circuitId'
  };

  export type ProtectionScalarFieldEnum = (typeof ProtectionScalarFieldEnum)[keyof typeof ProtectionScalarFieldEnum]


  export const PointControleRgieScalarFieldEnum: {
    id: 'id',
    articleRgie: 'articleRgie',
    libelle: 'libelle',
    statut: 'statut',
    observation: 'observation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    dossierId: 'dossierId'
  };

  export type PointControleRgieScalarFieldEnum = (typeof PointControleRgieScalarFieldEnum)[keyof typeof PointControleRgieScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TypeInstallation'
   */
  export type EnumTypeInstallationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeInstallation'>
    


  /**
   * Reference to a field of type 'TypeInstallation[]'
   */
  export type ListEnumTypeInstallationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeInstallation[]'>
    


  /**
   * Reference to a field of type 'StatutChantier'
   */
  export type EnumStatutChantierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutChantier'>
    


  /**
   * Reference to a field of type 'StatutChantier[]'
   */
  export type ListEnumStatutChantierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutChantier[]'>
    


  /**
   * Reference to a field of type 'EtatElement'
   */
  export type EnumEtatElementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EtatElement'>
    


  /**
   * Reference to a field of type 'EtatElement[]'
   */
  export type ListEnumEtatElementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EtatElement[]'>
    


  /**
   * Reference to a field of type 'StatutDevis'
   */
  export type EnumStatutDevisFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDevis'>
    


  /**
   * Reference to a field of type 'StatutDevis[]'
   */
  export type ListEnumStatutDevisFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDevis[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'StatutDiagnostic'
   */
  export type EnumStatutDiagnosticFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDiagnostic'>
    


  /**
   * Reference to a field of type 'StatutDiagnostic[]'
   */
  export type ListEnumStatutDiagnosticFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDiagnostic[]'>
    


  /**
   * Reference to a field of type 'TypeCircuit'
   */
  export type EnumTypeCircuitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeCircuit'>
    


  /**
   * Reference to a field of type 'TypeCircuit[]'
   */
  export type ListEnumTypeCircuitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeCircuit[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TypeProtection'
   */
  export type EnumTypeProtectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeProtection'>
    


  /**
   * Reference to a field of type 'TypeProtection[]'
   */
  export type ListEnumTypeProtectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeProtection[]'>
    


  /**
   * Reference to a field of type 'CourbeDisjoncteur'
   */
  export type EnumCourbeDisjoncteurFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourbeDisjoncteur'>
    


  /**
   * Reference to a field of type 'CourbeDisjoncteur[]'
   */
  export type ListEnumCourbeDisjoncteurFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourbeDisjoncteur[]'>
    


  /**
   * Reference to a field of type 'TypeDifferentiel'
   */
  export type EnumTypeDifferentielFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeDifferentiel'>
    


  /**
   * Reference to a field of type 'TypeDifferentiel[]'
   */
  export type ListEnumTypeDifferentielFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeDifferentiel[]'>
    


  /**
   * Reference to a field of type 'StatutRgie'
   */
  export type EnumStatutRgieFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutRgie'>
    


  /**
   * Reference to a field of type 'StatutRgie[]'
   */
  export type ListEnumStatutRgieFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutRgie[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    nom?: StringFilter<"Client"> | string
    prenom?: StringNullableFilter<"Client"> | string | null
    email?: StringNullableFilter<"Client"> | string | null
    telephone?: StringNullableFilter<"Client"> | string | null
    adresse?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    dossiers?: DossierListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    adresse?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossiers?: DossierOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    nom?: StringFilter<"Client"> | string
    prenom?: StringNullableFilter<"Client"> | string | null
    telephone?: StringNullableFilter<"Client"> | string | null
    adresse?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    dossiers?: DossierListRelationFilter
  }, "id" | "email">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    adresse?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    nom?: StringWithAggregatesFilter<"Client"> | string
    prenom?: StringNullableWithAggregatesFilter<"Client"> | string | null
    email?: StringNullableWithAggregatesFilter<"Client"> | string | null
    telephone?: StringNullableWithAggregatesFilter<"Client"> | string | null
    adresse?: StringNullableWithAggregatesFilter<"Client"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type DossierWhereInput = {
    AND?: DossierWhereInput | DossierWhereInput[]
    OR?: DossierWhereInput[]
    NOT?: DossierWhereInput | DossierWhereInput[]
    id?: StringFilter<"Dossier"> | string
    reference?: StringFilter<"Dossier"> | string
    titre?: StringFilter<"Dossier"> | string
    typeInstallation?: EnumTypeInstallationFilter<"Dossier"> | $Enums.TypeInstallation
    statut?: EnumStatutChantierFilter<"Dossier"> | $Enums.StatutChantier
    description?: StringNullableFilter<"Dossier"> | string | null
    adresseChantier?: StringNullableFilter<"Dossier"> | string | null
    createdAt?: DateTimeFilter<"Dossier"> | Date | string
    updatedAt?: DateTimeFilter<"Dossier"> | Date | string
    clientId?: StringFilter<"Dossier"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    chantier?: XOR<ChantierNullableScalarRelationFilter, ChantierWhereInput> | null
    devis?: DevisListRelationFilter
    diagnostics?: DiagnosticListRelationFilter
    circuits?: CircuitListRelationFilter
    pointsControle?: PointControleRgieListRelationFilter
  }

  export type DossierOrderByWithRelationInput = {
    id?: SortOrder
    reference?: SortOrder
    titre?: SortOrder
    typeInstallation?: SortOrder
    statut?: SortOrder
    description?: SortOrderInput | SortOrder
    adresseChantier?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    client?: ClientOrderByWithRelationInput
    chantier?: ChantierOrderByWithRelationInput
    devis?: DevisOrderByRelationAggregateInput
    diagnostics?: DiagnosticOrderByRelationAggregateInput
    circuits?: CircuitOrderByRelationAggregateInput
    pointsControle?: PointControleRgieOrderByRelationAggregateInput
  }

  export type DossierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    AND?: DossierWhereInput | DossierWhereInput[]
    OR?: DossierWhereInput[]
    NOT?: DossierWhereInput | DossierWhereInput[]
    titre?: StringFilter<"Dossier"> | string
    typeInstallation?: EnumTypeInstallationFilter<"Dossier"> | $Enums.TypeInstallation
    statut?: EnumStatutChantierFilter<"Dossier"> | $Enums.StatutChantier
    description?: StringNullableFilter<"Dossier"> | string | null
    adresseChantier?: StringNullableFilter<"Dossier"> | string | null
    createdAt?: DateTimeFilter<"Dossier"> | Date | string
    updatedAt?: DateTimeFilter<"Dossier"> | Date | string
    clientId?: StringFilter<"Dossier"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    chantier?: XOR<ChantierNullableScalarRelationFilter, ChantierWhereInput> | null
    devis?: DevisListRelationFilter
    diagnostics?: DiagnosticListRelationFilter
    circuits?: CircuitListRelationFilter
    pointsControle?: PointControleRgieListRelationFilter
  }, "id" | "reference">

  export type DossierOrderByWithAggregationInput = {
    id?: SortOrder
    reference?: SortOrder
    titre?: SortOrder
    typeInstallation?: SortOrder
    statut?: SortOrder
    description?: SortOrderInput | SortOrder
    adresseChantier?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    _count?: DossierCountOrderByAggregateInput
    _max?: DossierMaxOrderByAggregateInput
    _min?: DossierMinOrderByAggregateInput
  }

  export type DossierScalarWhereWithAggregatesInput = {
    AND?: DossierScalarWhereWithAggregatesInput | DossierScalarWhereWithAggregatesInput[]
    OR?: DossierScalarWhereWithAggregatesInput[]
    NOT?: DossierScalarWhereWithAggregatesInput | DossierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dossier"> | string
    reference?: StringWithAggregatesFilter<"Dossier"> | string
    titre?: StringWithAggregatesFilter<"Dossier"> | string
    typeInstallation?: EnumTypeInstallationWithAggregatesFilter<"Dossier"> | $Enums.TypeInstallation
    statut?: EnumStatutChantierWithAggregatesFilter<"Dossier"> | $Enums.StatutChantier
    description?: StringNullableWithAggregatesFilter<"Dossier"> | string | null
    adresseChantier?: StringNullableWithAggregatesFilter<"Dossier"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Dossier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dossier"> | Date | string
    clientId?: StringWithAggregatesFilter<"Dossier"> | string
  }

  export type ChantierWhereInput = {
    AND?: ChantierWhereInput | ChantierWhereInput[]
    OR?: ChantierWhereInput[]
    NOT?: ChantierWhereInput | ChantierWhereInput[]
    id?: StringFilter<"Chantier"> | string
    etat?: EnumEtatElementFilter<"Chantier"> | $Enums.EtatElement
    dateDebut?: DateTimeNullableFilter<"Chantier"> | Date | string | null
    dateFin?: DateTimeNullableFilter<"Chantier"> | Date | string | null
    responsable?: StringNullableFilter<"Chantier"> | string | null
    notes?: StringNullableFilter<"Chantier"> | string | null
    createdAt?: DateTimeFilter<"Chantier"> | Date | string
    updatedAt?: DateTimeFilter<"Chantier"> | Date | string
    dossierId?: StringFilter<"Chantier"> | string
    dossier?: XOR<DossierScalarRelationFilter, DossierWhereInput>
  }

  export type ChantierOrderByWithRelationInput = {
    id?: SortOrder
    etat?: SortOrder
    dateDebut?: SortOrderInput | SortOrder
    dateFin?: SortOrderInput | SortOrder
    responsable?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
    dossier?: DossierOrderByWithRelationInput
  }

  export type ChantierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dossierId?: string
    AND?: ChantierWhereInput | ChantierWhereInput[]
    OR?: ChantierWhereInput[]
    NOT?: ChantierWhereInput | ChantierWhereInput[]
    etat?: EnumEtatElementFilter<"Chantier"> | $Enums.EtatElement
    dateDebut?: DateTimeNullableFilter<"Chantier"> | Date | string | null
    dateFin?: DateTimeNullableFilter<"Chantier"> | Date | string | null
    responsable?: StringNullableFilter<"Chantier"> | string | null
    notes?: StringNullableFilter<"Chantier"> | string | null
    createdAt?: DateTimeFilter<"Chantier"> | Date | string
    updatedAt?: DateTimeFilter<"Chantier"> | Date | string
    dossier?: XOR<DossierScalarRelationFilter, DossierWhereInput>
  }, "id" | "dossierId">

  export type ChantierOrderByWithAggregationInput = {
    id?: SortOrder
    etat?: SortOrder
    dateDebut?: SortOrderInput | SortOrder
    dateFin?: SortOrderInput | SortOrder
    responsable?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
    _count?: ChantierCountOrderByAggregateInput
    _max?: ChantierMaxOrderByAggregateInput
    _min?: ChantierMinOrderByAggregateInput
  }

  export type ChantierScalarWhereWithAggregatesInput = {
    AND?: ChantierScalarWhereWithAggregatesInput | ChantierScalarWhereWithAggregatesInput[]
    OR?: ChantierScalarWhereWithAggregatesInput[]
    NOT?: ChantierScalarWhereWithAggregatesInput | ChantierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chantier"> | string
    etat?: EnumEtatElementWithAggregatesFilter<"Chantier"> | $Enums.EtatElement
    dateDebut?: DateTimeNullableWithAggregatesFilter<"Chantier"> | Date | string | null
    dateFin?: DateTimeNullableWithAggregatesFilter<"Chantier"> | Date | string | null
    responsable?: StringNullableWithAggregatesFilter<"Chantier"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Chantier"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Chantier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chantier"> | Date | string
    dossierId?: StringWithAggregatesFilter<"Chantier"> | string
  }

  export type DevisWhereInput = {
    AND?: DevisWhereInput | DevisWhereInput[]
    OR?: DevisWhereInput[]
    NOT?: DevisWhereInput | DevisWhereInput[]
    id?: StringFilter<"Devis"> | string
    numero?: StringFilter<"Devis"> | string
    statut?: EnumStatutDevisFilter<"Devis"> | $Enums.StatutDevis
    montantHT?: DecimalFilter<"Devis"> | Decimal | DecimalJsLike | number | string
    tva?: DecimalFilter<"Devis"> | Decimal | DecimalJsLike | number | string
    montantTTC?: DecimalFilter<"Devis"> | Decimal | DecimalJsLike | number | string
    dateEmission?: DateTimeNullableFilter<"Devis"> | Date | string | null
    dateExpiration?: DateTimeNullableFilter<"Devis"> | Date | string | null
    notes?: StringNullableFilter<"Devis"> | string | null
    createdAt?: DateTimeFilter<"Devis"> | Date | string
    updatedAt?: DateTimeFilter<"Devis"> | Date | string
    dossierId?: StringFilter<"Devis"> | string
    dossier?: XOR<DossierScalarRelationFilter, DossierWhereInput>
  }

  export type DevisOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    statut?: SortOrder
    montantHT?: SortOrder
    tva?: SortOrder
    montantTTC?: SortOrder
    dateEmission?: SortOrderInput | SortOrder
    dateExpiration?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
    dossier?: DossierOrderByWithRelationInput
  }

  export type DevisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    numero?: string
    AND?: DevisWhereInput | DevisWhereInput[]
    OR?: DevisWhereInput[]
    NOT?: DevisWhereInput | DevisWhereInput[]
    statut?: EnumStatutDevisFilter<"Devis"> | $Enums.StatutDevis
    montantHT?: DecimalFilter<"Devis"> | Decimal | DecimalJsLike | number | string
    tva?: DecimalFilter<"Devis"> | Decimal | DecimalJsLike | number | string
    montantTTC?: DecimalFilter<"Devis"> | Decimal | DecimalJsLike | number | string
    dateEmission?: DateTimeNullableFilter<"Devis"> | Date | string | null
    dateExpiration?: DateTimeNullableFilter<"Devis"> | Date | string | null
    notes?: StringNullableFilter<"Devis"> | string | null
    createdAt?: DateTimeFilter<"Devis"> | Date | string
    updatedAt?: DateTimeFilter<"Devis"> | Date | string
    dossierId?: StringFilter<"Devis"> | string
    dossier?: XOR<DossierScalarRelationFilter, DossierWhereInput>
  }, "id" | "numero">

  export type DevisOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    statut?: SortOrder
    montantHT?: SortOrder
    tva?: SortOrder
    montantTTC?: SortOrder
    dateEmission?: SortOrderInput | SortOrder
    dateExpiration?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
    _count?: DevisCountOrderByAggregateInput
    _avg?: DevisAvgOrderByAggregateInput
    _max?: DevisMaxOrderByAggregateInput
    _min?: DevisMinOrderByAggregateInput
    _sum?: DevisSumOrderByAggregateInput
  }

  export type DevisScalarWhereWithAggregatesInput = {
    AND?: DevisScalarWhereWithAggregatesInput | DevisScalarWhereWithAggregatesInput[]
    OR?: DevisScalarWhereWithAggregatesInput[]
    NOT?: DevisScalarWhereWithAggregatesInput | DevisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Devis"> | string
    numero?: StringWithAggregatesFilter<"Devis"> | string
    statut?: EnumStatutDevisWithAggregatesFilter<"Devis"> | $Enums.StatutDevis
    montantHT?: DecimalWithAggregatesFilter<"Devis"> | Decimal | DecimalJsLike | number | string
    tva?: DecimalWithAggregatesFilter<"Devis"> | Decimal | DecimalJsLike | number | string
    montantTTC?: DecimalWithAggregatesFilter<"Devis"> | Decimal | DecimalJsLike | number | string
    dateEmission?: DateTimeNullableWithAggregatesFilter<"Devis"> | Date | string | null
    dateExpiration?: DateTimeNullableWithAggregatesFilter<"Devis"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Devis"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Devis"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Devis"> | Date | string
    dossierId?: StringWithAggregatesFilter<"Devis"> | string
  }

  export type DiagnosticWhereInput = {
    AND?: DiagnosticWhereInput | DiagnosticWhereInput[]
    OR?: DiagnosticWhereInput[]
    NOT?: DiagnosticWhereInput | DiagnosticWhereInput[]
    id?: StringFilter<"Diagnostic"> | string
    statut?: EnumStatutDiagnosticFilter<"Diagnostic"> | $Enums.StatutDiagnostic
    observations?: StringNullableFilter<"Diagnostic"> | string | null
    conclusions?: StringNullableFilter<"Diagnostic"> | string | null
    realiseAt?: DateTimeNullableFilter<"Diagnostic"> | Date | string | null
    createdAt?: DateTimeFilter<"Diagnostic"> | Date | string
    updatedAt?: DateTimeFilter<"Diagnostic"> | Date | string
    dossierId?: StringFilter<"Diagnostic"> | string
    dossier?: XOR<DossierScalarRelationFilter, DossierWhereInput>
  }

  export type DiagnosticOrderByWithRelationInput = {
    id?: SortOrder
    statut?: SortOrder
    observations?: SortOrderInput | SortOrder
    conclusions?: SortOrderInput | SortOrder
    realiseAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
    dossier?: DossierOrderByWithRelationInput
  }

  export type DiagnosticWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DiagnosticWhereInput | DiagnosticWhereInput[]
    OR?: DiagnosticWhereInput[]
    NOT?: DiagnosticWhereInput | DiagnosticWhereInput[]
    statut?: EnumStatutDiagnosticFilter<"Diagnostic"> | $Enums.StatutDiagnostic
    observations?: StringNullableFilter<"Diagnostic"> | string | null
    conclusions?: StringNullableFilter<"Diagnostic"> | string | null
    realiseAt?: DateTimeNullableFilter<"Diagnostic"> | Date | string | null
    createdAt?: DateTimeFilter<"Diagnostic"> | Date | string
    updatedAt?: DateTimeFilter<"Diagnostic"> | Date | string
    dossierId?: StringFilter<"Diagnostic"> | string
    dossier?: XOR<DossierScalarRelationFilter, DossierWhereInput>
  }, "id">

  export type DiagnosticOrderByWithAggregationInput = {
    id?: SortOrder
    statut?: SortOrder
    observations?: SortOrderInput | SortOrder
    conclusions?: SortOrderInput | SortOrder
    realiseAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
    _count?: DiagnosticCountOrderByAggregateInput
    _max?: DiagnosticMaxOrderByAggregateInput
    _min?: DiagnosticMinOrderByAggregateInput
  }

  export type DiagnosticScalarWhereWithAggregatesInput = {
    AND?: DiagnosticScalarWhereWithAggregatesInput | DiagnosticScalarWhereWithAggregatesInput[]
    OR?: DiagnosticScalarWhereWithAggregatesInput[]
    NOT?: DiagnosticScalarWhereWithAggregatesInput | DiagnosticScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Diagnostic"> | string
    statut?: EnumStatutDiagnosticWithAggregatesFilter<"Diagnostic"> | $Enums.StatutDiagnostic
    observations?: StringNullableWithAggregatesFilter<"Diagnostic"> | string | null
    conclusions?: StringNullableWithAggregatesFilter<"Diagnostic"> | string | null
    realiseAt?: DateTimeNullableWithAggregatesFilter<"Diagnostic"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Diagnostic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Diagnostic"> | Date | string
    dossierId?: StringWithAggregatesFilter<"Diagnostic"> | string
  }

  export type CircuitWhereInput = {
    AND?: CircuitWhereInput | CircuitWhereInput[]
    OR?: CircuitWhereInput[]
    NOT?: CircuitWhereInput | CircuitWhereInput[]
    id?: StringFilter<"Circuit"> | string
    nom?: StringFilter<"Circuit"> | string
    type?: EnumTypeCircuitFilter<"Circuit"> | $Enums.TypeCircuit
    etat?: EnumEtatElementFilter<"Circuit"> | $Enums.EtatElement
    amperage?: IntNullableFilter<"Circuit"> | number | null
    notes?: StringNullableFilter<"Circuit"> | string | null
    createdAt?: DateTimeFilter<"Circuit"> | Date | string
    updatedAt?: DateTimeFilter<"Circuit"> | Date | string
    dossierId?: StringFilter<"Circuit"> | string
    dossier?: XOR<DossierScalarRelationFilter, DossierWhereInput>
    protections?: ProtectionListRelationFilter
  }

  export type CircuitOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    type?: SortOrder
    etat?: SortOrder
    amperage?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
    dossier?: DossierOrderByWithRelationInput
    protections?: ProtectionOrderByRelationAggregateInput
  }

  export type CircuitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CircuitWhereInput | CircuitWhereInput[]
    OR?: CircuitWhereInput[]
    NOT?: CircuitWhereInput | CircuitWhereInput[]
    nom?: StringFilter<"Circuit"> | string
    type?: EnumTypeCircuitFilter<"Circuit"> | $Enums.TypeCircuit
    etat?: EnumEtatElementFilter<"Circuit"> | $Enums.EtatElement
    amperage?: IntNullableFilter<"Circuit"> | number | null
    notes?: StringNullableFilter<"Circuit"> | string | null
    createdAt?: DateTimeFilter<"Circuit"> | Date | string
    updatedAt?: DateTimeFilter<"Circuit"> | Date | string
    dossierId?: StringFilter<"Circuit"> | string
    dossier?: XOR<DossierScalarRelationFilter, DossierWhereInput>
    protections?: ProtectionListRelationFilter
  }, "id">

  export type CircuitOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    type?: SortOrder
    etat?: SortOrder
    amperage?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
    _count?: CircuitCountOrderByAggregateInput
    _avg?: CircuitAvgOrderByAggregateInput
    _max?: CircuitMaxOrderByAggregateInput
    _min?: CircuitMinOrderByAggregateInput
    _sum?: CircuitSumOrderByAggregateInput
  }

  export type CircuitScalarWhereWithAggregatesInput = {
    AND?: CircuitScalarWhereWithAggregatesInput | CircuitScalarWhereWithAggregatesInput[]
    OR?: CircuitScalarWhereWithAggregatesInput[]
    NOT?: CircuitScalarWhereWithAggregatesInput | CircuitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Circuit"> | string
    nom?: StringWithAggregatesFilter<"Circuit"> | string
    type?: EnumTypeCircuitWithAggregatesFilter<"Circuit"> | $Enums.TypeCircuit
    etat?: EnumEtatElementWithAggregatesFilter<"Circuit"> | $Enums.EtatElement
    amperage?: IntNullableWithAggregatesFilter<"Circuit"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Circuit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Circuit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Circuit"> | Date | string
    dossierId?: StringWithAggregatesFilter<"Circuit"> | string
  }

  export type ProtectionWhereInput = {
    AND?: ProtectionWhereInput | ProtectionWhereInput[]
    OR?: ProtectionWhereInput[]
    NOT?: ProtectionWhereInput | ProtectionWhereInput[]
    id?: StringFilter<"Protection"> | string
    type?: EnumTypeProtectionFilter<"Protection"> | $Enums.TypeProtection
    calibre?: IntFilter<"Protection"> | number
    courbe?: EnumCourbeDisjoncteurNullableFilter<"Protection"> | $Enums.CourbeDisjoncteur | null
    typeDiff?: EnumTypeDifferentielNullableFilter<"Protection"> | $Enums.TypeDifferentiel | null
    sensibilite?: IntNullableFilter<"Protection"> | number | null
    marque?: StringNullableFilter<"Protection"> | string | null
    reference?: StringNullableFilter<"Protection"> | string | null
    createdAt?: DateTimeFilter<"Protection"> | Date | string
    updatedAt?: DateTimeFilter<"Protection"> | Date | string
    circuitId?: StringFilter<"Protection"> | string
    circuit?: XOR<CircuitScalarRelationFilter, CircuitWhereInput>
  }

  export type ProtectionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    calibre?: SortOrder
    courbe?: SortOrderInput | SortOrder
    typeDiff?: SortOrderInput | SortOrder
    sensibilite?: SortOrderInput | SortOrder
    marque?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    circuitId?: SortOrder
    circuit?: CircuitOrderByWithRelationInput
  }

  export type ProtectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProtectionWhereInput | ProtectionWhereInput[]
    OR?: ProtectionWhereInput[]
    NOT?: ProtectionWhereInput | ProtectionWhereInput[]
    type?: EnumTypeProtectionFilter<"Protection"> | $Enums.TypeProtection
    calibre?: IntFilter<"Protection"> | number
    courbe?: EnumCourbeDisjoncteurNullableFilter<"Protection"> | $Enums.CourbeDisjoncteur | null
    typeDiff?: EnumTypeDifferentielNullableFilter<"Protection"> | $Enums.TypeDifferentiel | null
    sensibilite?: IntNullableFilter<"Protection"> | number | null
    marque?: StringNullableFilter<"Protection"> | string | null
    reference?: StringNullableFilter<"Protection"> | string | null
    createdAt?: DateTimeFilter<"Protection"> | Date | string
    updatedAt?: DateTimeFilter<"Protection"> | Date | string
    circuitId?: StringFilter<"Protection"> | string
    circuit?: XOR<CircuitScalarRelationFilter, CircuitWhereInput>
  }, "id">

  export type ProtectionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    calibre?: SortOrder
    courbe?: SortOrderInput | SortOrder
    typeDiff?: SortOrderInput | SortOrder
    sensibilite?: SortOrderInput | SortOrder
    marque?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    circuitId?: SortOrder
    _count?: ProtectionCountOrderByAggregateInput
    _avg?: ProtectionAvgOrderByAggregateInput
    _max?: ProtectionMaxOrderByAggregateInput
    _min?: ProtectionMinOrderByAggregateInput
    _sum?: ProtectionSumOrderByAggregateInput
  }

  export type ProtectionScalarWhereWithAggregatesInput = {
    AND?: ProtectionScalarWhereWithAggregatesInput | ProtectionScalarWhereWithAggregatesInput[]
    OR?: ProtectionScalarWhereWithAggregatesInput[]
    NOT?: ProtectionScalarWhereWithAggregatesInput | ProtectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Protection"> | string
    type?: EnumTypeProtectionWithAggregatesFilter<"Protection"> | $Enums.TypeProtection
    calibre?: IntWithAggregatesFilter<"Protection"> | number
    courbe?: EnumCourbeDisjoncteurNullableWithAggregatesFilter<"Protection"> | $Enums.CourbeDisjoncteur | null
    typeDiff?: EnumTypeDifferentielNullableWithAggregatesFilter<"Protection"> | $Enums.TypeDifferentiel | null
    sensibilite?: IntNullableWithAggregatesFilter<"Protection"> | number | null
    marque?: StringNullableWithAggregatesFilter<"Protection"> | string | null
    reference?: StringNullableWithAggregatesFilter<"Protection"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Protection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Protection"> | Date | string
    circuitId?: StringWithAggregatesFilter<"Protection"> | string
  }

  export type PointControleRgieWhereInput = {
    AND?: PointControleRgieWhereInput | PointControleRgieWhereInput[]
    OR?: PointControleRgieWhereInput[]
    NOT?: PointControleRgieWhereInput | PointControleRgieWhereInput[]
    id?: StringFilter<"PointControleRgie"> | string
    articleRgie?: StringFilter<"PointControleRgie"> | string
    libelle?: StringFilter<"PointControleRgie"> | string
    statut?: EnumStatutRgieFilter<"PointControleRgie"> | $Enums.StatutRgie
    observation?: StringNullableFilter<"PointControleRgie"> | string | null
    createdAt?: DateTimeFilter<"PointControleRgie"> | Date | string
    updatedAt?: DateTimeFilter<"PointControleRgie"> | Date | string
    dossierId?: StringFilter<"PointControleRgie"> | string
    dossier?: XOR<DossierScalarRelationFilter, DossierWhereInput>
  }

  export type PointControleRgieOrderByWithRelationInput = {
    id?: SortOrder
    articleRgie?: SortOrder
    libelle?: SortOrder
    statut?: SortOrder
    observation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
    dossier?: DossierOrderByWithRelationInput
  }

  export type PointControleRgieWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PointControleRgieWhereInput | PointControleRgieWhereInput[]
    OR?: PointControleRgieWhereInput[]
    NOT?: PointControleRgieWhereInput | PointControleRgieWhereInput[]
    articleRgie?: StringFilter<"PointControleRgie"> | string
    libelle?: StringFilter<"PointControleRgie"> | string
    statut?: EnumStatutRgieFilter<"PointControleRgie"> | $Enums.StatutRgie
    observation?: StringNullableFilter<"PointControleRgie"> | string | null
    createdAt?: DateTimeFilter<"PointControleRgie"> | Date | string
    updatedAt?: DateTimeFilter<"PointControleRgie"> | Date | string
    dossierId?: StringFilter<"PointControleRgie"> | string
    dossier?: XOR<DossierScalarRelationFilter, DossierWhereInput>
  }, "id">

  export type PointControleRgieOrderByWithAggregationInput = {
    id?: SortOrder
    articleRgie?: SortOrder
    libelle?: SortOrder
    statut?: SortOrder
    observation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
    _count?: PointControleRgieCountOrderByAggregateInput
    _max?: PointControleRgieMaxOrderByAggregateInput
    _min?: PointControleRgieMinOrderByAggregateInput
  }

  export type PointControleRgieScalarWhereWithAggregatesInput = {
    AND?: PointControleRgieScalarWhereWithAggregatesInput | PointControleRgieScalarWhereWithAggregatesInput[]
    OR?: PointControleRgieScalarWhereWithAggregatesInput[]
    NOT?: PointControleRgieScalarWhereWithAggregatesInput | PointControleRgieScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PointControleRgie"> | string
    articleRgie?: StringWithAggregatesFilter<"PointControleRgie"> | string
    libelle?: StringWithAggregatesFilter<"PointControleRgie"> | string
    statut?: EnumStatutRgieWithAggregatesFilter<"PointControleRgie"> | $Enums.StatutRgie
    observation?: StringNullableWithAggregatesFilter<"PointControleRgie"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PointControleRgie"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PointControleRgie"> | Date | string
    dossierId?: StringWithAggregatesFilter<"PointControleRgie"> | string
  }

  export type ClientCreateInput = {
    id?: string
    nom: string
    prenom?: string | null
    email?: string | null
    telephone?: string | null
    adresse?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dossiers?: DossierCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    nom: string
    prenom?: string | null
    email?: string | null
    telephone?: string | null
    adresse?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dossiers?: DossierUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossiers?: DossierUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossiers?: DossierUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    nom: string
    prenom?: string | null
    email?: string | null
    telephone?: string | null
    adresse?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DossierCreateInput = {
    id?: string
    reference: string
    titre: string
    typeInstallation: $Enums.TypeInstallation
    statut?: $Enums.StatutChantier
    description?: string | null
    adresseChantier?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutDossiersInput
    chantier?: ChantierCreateNestedOneWithoutDossierInput
    devis?: DevisCreateNestedManyWithoutDossierInput
    diagnostics?: DiagnosticCreateNestedManyWithoutDossierInput
    circuits?: CircuitCreateNestedManyWithoutDossierInput
    pointsControle?: PointControleRgieCreateNestedManyWithoutDossierInput
  }

  export type DossierUncheckedCreateInput = {
    id?: string
    reference: string
    titre: string
    typeInstallation: $Enums.TypeInstallation
    statut?: $Enums.StatutChantier
    description?: string | null
    adresseChantier?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    chantier?: ChantierUncheckedCreateNestedOneWithoutDossierInput
    devis?: DevisUncheckedCreateNestedManyWithoutDossierInput
    diagnostics?: DiagnosticUncheckedCreateNestedManyWithoutDossierInput
    circuits?: CircuitUncheckedCreateNestedManyWithoutDossierInput
    pointsControle?: PointControleRgieUncheckedCreateNestedManyWithoutDossierInput
  }

  export type DossierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    typeInstallation?: EnumTypeInstallationFieldUpdateOperationsInput | $Enums.TypeInstallation
    statut?: EnumStatutChantierFieldUpdateOperationsInput | $Enums.StatutChantier
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresseChantier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutDossiersNestedInput
    chantier?: ChantierUpdateOneWithoutDossierNestedInput
    devis?: DevisUpdateManyWithoutDossierNestedInput
    diagnostics?: DiagnosticUpdateManyWithoutDossierNestedInput
    circuits?: CircuitUpdateManyWithoutDossierNestedInput
    pointsControle?: PointControleRgieUpdateManyWithoutDossierNestedInput
  }

  export type DossierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    typeInstallation?: EnumTypeInstallationFieldUpdateOperationsInput | $Enums.TypeInstallation
    statut?: EnumStatutChantierFieldUpdateOperationsInput | $Enums.StatutChantier
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresseChantier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    chantier?: ChantierUncheckedUpdateOneWithoutDossierNestedInput
    devis?: DevisUncheckedUpdateManyWithoutDossierNestedInput
    diagnostics?: DiagnosticUncheckedUpdateManyWithoutDossierNestedInput
    circuits?: CircuitUncheckedUpdateManyWithoutDossierNestedInput
    pointsControle?: PointControleRgieUncheckedUpdateManyWithoutDossierNestedInput
  }

  export type DossierCreateManyInput = {
    id?: string
    reference: string
    titre: string
    typeInstallation: $Enums.TypeInstallation
    statut?: $Enums.StatutChantier
    description?: string | null
    adresseChantier?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
  }

  export type DossierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    typeInstallation?: EnumTypeInstallationFieldUpdateOperationsInput | $Enums.TypeInstallation
    statut?: EnumStatutChantierFieldUpdateOperationsInput | $Enums.StatutChantier
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresseChantier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DossierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    typeInstallation?: EnumTypeInstallationFieldUpdateOperationsInput | $Enums.TypeInstallation
    statut?: EnumStatutChantierFieldUpdateOperationsInput | $Enums.StatutChantier
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresseChantier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type ChantierCreateInput = {
    id?: string
    etat?: $Enums.EtatElement
    dateDebut?: Date | string | null
    dateFin?: Date | string | null
    responsable?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dossier: DossierCreateNestedOneWithoutChantierInput
  }

  export type ChantierUncheckedCreateInput = {
    id?: string
    etat?: $Enums.EtatElement
    dateDebut?: Date | string | null
    dateFin?: Date | string | null
    responsable?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dossierId: string
  }

  export type ChantierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    etat?: EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement
    dateDebut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responsable?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossier?: DossierUpdateOneRequiredWithoutChantierNestedInput
  }

  export type ChantierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    etat?: EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement
    dateDebut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responsable?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossierId?: StringFieldUpdateOperationsInput | string
  }

  export type ChantierCreateManyInput = {
    id?: string
    etat?: $Enums.EtatElement
    dateDebut?: Date | string | null
    dateFin?: Date | string | null
    responsable?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dossierId: string
  }

  export type ChantierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    etat?: EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement
    dateDebut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responsable?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChantierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    etat?: EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement
    dateDebut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responsable?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossierId?: StringFieldUpdateOperationsInput | string
  }

  export type DevisCreateInput = {
    id?: string
    numero: string
    statut?: $Enums.StatutDevis
    montantHT: Decimal | DecimalJsLike | number | string
    tva?: Decimal | DecimalJsLike | number | string
    montantTTC: Decimal | DecimalJsLike | number | string
    dateEmission?: Date | string | null
    dateExpiration?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dossier: DossierCreateNestedOneWithoutDevisInput
  }

  export type DevisUncheckedCreateInput = {
    id?: string
    numero: string
    statut?: $Enums.StatutDevis
    montantHT: Decimal | DecimalJsLike | number | string
    tva?: Decimal | DecimalJsLike | number | string
    montantTTC: Decimal | DecimalJsLike | number | string
    dateEmission?: Date | string | null
    dateExpiration?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dossierId: string
  }

  export type DevisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDevisFieldUpdateOperationsInput | $Enums.StatutDevis
    montantHT?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montantTTC?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateEmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossier?: DossierUpdateOneRequiredWithoutDevisNestedInput
  }

  export type DevisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDevisFieldUpdateOperationsInput | $Enums.StatutDevis
    montantHT?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montantTTC?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateEmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossierId?: StringFieldUpdateOperationsInput | string
  }

  export type DevisCreateManyInput = {
    id?: string
    numero: string
    statut?: $Enums.StatutDevis
    montantHT: Decimal | DecimalJsLike | number | string
    tva?: Decimal | DecimalJsLike | number | string
    montantTTC: Decimal | DecimalJsLike | number | string
    dateEmission?: Date | string | null
    dateExpiration?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dossierId: string
  }

  export type DevisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDevisFieldUpdateOperationsInput | $Enums.StatutDevis
    montantHT?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montantTTC?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateEmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDevisFieldUpdateOperationsInput | $Enums.StatutDevis
    montantHT?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montantTTC?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateEmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossierId?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosticCreateInput = {
    id?: string
    statut?: $Enums.StatutDiagnostic
    observations?: string | null
    conclusions?: string | null
    realiseAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dossier: DossierCreateNestedOneWithoutDiagnosticsInput
  }

  export type DiagnosticUncheckedCreateInput = {
    id?: string
    statut?: $Enums.StatutDiagnostic
    observations?: string | null
    conclusions?: string | null
    realiseAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dossierId: string
  }

  export type DiagnosticUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDiagnosticFieldUpdateOperationsInput | $Enums.StatutDiagnostic
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    conclusions?: NullableStringFieldUpdateOperationsInput | string | null
    realiseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossier?: DossierUpdateOneRequiredWithoutDiagnosticsNestedInput
  }

  export type DiagnosticUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDiagnosticFieldUpdateOperationsInput | $Enums.StatutDiagnostic
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    conclusions?: NullableStringFieldUpdateOperationsInput | string | null
    realiseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossierId?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosticCreateManyInput = {
    id?: string
    statut?: $Enums.StatutDiagnostic
    observations?: string | null
    conclusions?: string | null
    realiseAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dossierId: string
  }

  export type DiagnosticUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDiagnosticFieldUpdateOperationsInput | $Enums.StatutDiagnostic
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    conclusions?: NullableStringFieldUpdateOperationsInput | string | null
    realiseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDiagnosticFieldUpdateOperationsInput | $Enums.StatutDiagnostic
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    conclusions?: NullableStringFieldUpdateOperationsInput | string | null
    realiseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossierId?: StringFieldUpdateOperationsInput | string
  }

  export type CircuitCreateInput = {
    id?: string
    nom: string
    type: $Enums.TypeCircuit
    etat?: $Enums.EtatElement
    amperage?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dossier: DossierCreateNestedOneWithoutCircuitsInput
    protections?: ProtectionCreateNestedManyWithoutCircuitInput
  }

  export type CircuitUncheckedCreateInput = {
    id?: string
    nom: string
    type: $Enums.TypeCircuit
    etat?: $Enums.EtatElement
    amperage?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dossierId: string
    protections?: ProtectionUncheckedCreateNestedManyWithoutCircuitInput
  }

  export type CircuitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeCircuitFieldUpdateOperationsInput | $Enums.TypeCircuit
    etat?: EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement
    amperage?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossier?: DossierUpdateOneRequiredWithoutCircuitsNestedInput
    protections?: ProtectionUpdateManyWithoutCircuitNestedInput
  }

  export type CircuitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeCircuitFieldUpdateOperationsInput | $Enums.TypeCircuit
    etat?: EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement
    amperage?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossierId?: StringFieldUpdateOperationsInput | string
    protections?: ProtectionUncheckedUpdateManyWithoutCircuitNestedInput
  }

  export type CircuitCreateManyInput = {
    id?: string
    nom: string
    type: $Enums.TypeCircuit
    etat?: $Enums.EtatElement
    amperage?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dossierId: string
  }

  export type CircuitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeCircuitFieldUpdateOperationsInput | $Enums.TypeCircuit
    etat?: EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement
    amperage?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircuitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeCircuitFieldUpdateOperationsInput | $Enums.TypeCircuit
    etat?: EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement
    amperage?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossierId?: StringFieldUpdateOperationsInput | string
  }

  export type ProtectionCreateInput = {
    id?: string
    type: $Enums.TypeProtection
    calibre: number
    courbe?: $Enums.CourbeDisjoncteur | null
    typeDiff?: $Enums.TypeDifferentiel | null
    sensibilite?: number | null
    marque?: string | null
    reference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    circuit: CircuitCreateNestedOneWithoutProtectionsInput
  }

  export type ProtectionUncheckedCreateInput = {
    id?: string
    type: $Enums.TypeProtection
    calibre: number
    courbe?: $Enums.CourbeDisjoncteur | null
    typeDiff?: $Enums.TypeDifferentiel | null
    sensibilite?: number | null
    marque?: string | null
    reference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    circuitId: string
  }

  export type ProtectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeProtectionFieldUpdateOperationsInput | $Enums.TypeProtection
    calibre?: IntFieldUpdateOperationsInput | number
    courbe?: NullableEnumCourbeDisjoncteurFieldUpdateOperationsInput | $Enums.CourbeDisjoncteur | null
    typeDiff?: NullableEnumTypeDifferentielFieldUpdateOperationsInput | $Enums.TypeDifferentiel | null
    sensibilite?: NullableIntFieldUpdateOperationsInput | number | null
    marque?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    circuit?: CircuitUpdateOneRequiredWithoutProtectionsNestedInput
  }

  export type ProtectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeProtectionFieldUpdateOperationsInput | $Enums.TypeProtection
    calibre?: IntFieldUpdateOperationsInput | number
    courbe?: NullableEnumCourbeDisjoncteurFieldUpdateOperationsInput | $Enums.CourbeDisjoncteur | null
    typeDiff?: NullableEnumTypeDifferentielFieldUpdateOperationsInput | $Enums.TypeDifferentiel | null
    sensibilite?: NullableIntFieldUpdateOperationsInput | number | null
    marque?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    circuitId?: StringFieldUpdateOperationsInput | string
  }

  export type ProtectionCreateManyInput = {
    id?: string
    type: $Enums.TypeProtection
    calibre: number
    courbe?: $Enums.CourbeDisjoncteur | null
    typeDiff?: $Enums.TypeDifferentiel | null
    sensibilite?: number | null
    marque?: string | null
    reference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    circuitId: string
  }

  export type ProtectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeProtectionFieldUpdateOperationsInput | $Enums.TypeProtection
    calibre?: IntFieldUpdateOperationsInput | number
    courbe?: NullableEnumCourbeDisjoncteurFieldUpdateOperationsInput | $Enums.CourbeDisjoncteur | null
    typeDiff?: NullableEnumTypeDifferentielFieldUpdateOperationsInput | $Enums.TypeDifferentiel | null
    sensibilite?: NullableIntFieldUpdateOperationsInput | number | null
    marque?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProtectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeProtectionFieldUpdateOperationsInput | $Enums.TypeProtection
    calibre?: IntFieldUpdateOperationsInput | number
    courbe?: NullableEnumCourbeDisjoncteurFieldUpdateOperationsInput | $Enums.CourbeDisjoncteur | null
    typeDiff?: NullableEnumTypeDifferentielFieldUpdateOperationsInput | $Enums.TypeDifferentiel | null
    sensibilite?: NullableIntFieldUpdateOperationsInput | number | null
    marque?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    circuitId?: StringFieldUpdateOperationsInput | string
  }

  export type PointControleRgieCreateInput = {
    id?: string
    articleRgie: string
    libelle: string
    statut: $Enums.StatutRgie
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dossier: DossierCreateNestedOneWithoutPointsControleInput
  }

  export type PointControleRgieUncheckedCreateInput = {
    id?: string
    articleRgie: string
    libelle: string
    statut: $Enums.StatutRgie
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dossierId: string
  }

  export type PointControleRgieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleRgie?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutRgieFieldUpdateOperationsInput | $Enums.StatutRgie
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossier?: DossierUpdateOneRequiredWithoutPointsControleNestedInput
  }

  export type PointControleRgieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleRgie?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutRgieFieldUpdateOperationsInput | $Enums.StatutRgie
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossierId?: StringFieldUpdateOperationsInput | string
  }

  export type PointControleRgieCreateManyInput = {
    id?: string
    articleRgie: string
    libelle: string
    statut: $Enums.StatutRgie
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dossierId: string
  }

  export type PointControleRgieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleRgie?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutRgieFieldUpdateOperationsInput | $Enums.StatutRgie
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointControleRgieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleRgie?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutRgieFieldUpdateOperationsInput | $Enums.StatutRgie
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossierId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DossierListRelationFilter = {
    every?: DossierWhereInput
    some?: DossierWhereInput
    none?: DossierWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DossierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTypeInstallationFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeInstallation | EnumTypeInstallationFieldRefInput<$PrismaModel>
    in?: $Enums.TypeInstallation[] | ListEnumTypeInstallationFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeInstallation[] | ListEnumTypeInstallationFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeInstallationFilter<$PrismaModel> | $Enums.TypeInstallation
  }

  export type EnumStatutChantierFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutChantier | EnumStatutChantierFieldRefInput<$PrismaModel>
    in?: $Enums.StatutChantier[] | ListEnumStatutChantierFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutChantier[] | ListEnumStatutChantierFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutChantierFilter<$PrismaModel> | $Enums.StatutChantier
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type ChantierNullableScalarRelationFilter = {
    is?: ChantierWhereInput | null
    isNot?: ChantierWhereInput | null
  }

  export type DevisListRelationFilter = {
    every?: DevisWhereInput
    some?: DevisWhereInput
    none?: DevisWhereInput
  }

  export type DiagnosticListRelationFilter = {
    every?: DiagnosticWhereInput
    some?: DiagnosticWhereInput
    none?: DiagnosticWhereInput
  }

  export type CircuitListRelationFilter = {
    every?: CircuitWhereInput
    some?: CircuitWhereInput
    none?: CircuitWhereInput
  }

  export type PointControleRgieListRelationFilter = {
    every?: PointControleRgieWhereInput
    some?: PointControleRgieWhereInput
    none?: PointControleRgieWhereInput
  }

  export type DevisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiagnosticOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CircuitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PointControleRgieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DossierCountOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    titre?: SortOrder
    typeInstallation?: SortOrder
    statut?: SortOrder
    description?: SortOrder
    adresseChantier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type DossierMaxOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    titre?: SortOrder
    typeInstallation?: SortOrder
    statut?: SortOrder
    description?: SortOrder
    adresseChantier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type DossierMinOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    titre?: SortOrder
    typeInstallation?: SortOrder
    statut?: SortOrder
    description?: SortOrder
    adresseChantier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type EnumTypeInstallationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeInstallation | EnumTypeInstallationFieldRefInput<$PrismaModel>
    in?: $Enums.TypeInstallation[] | ListEnumTypeInstallationFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeInstallation[] | ListEnumTypeInstallationFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeInstallationWithAggregatesFilter<$PrismaModel> | $Enums.TypeInstallation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeInstallationFilter<$PrismaModel>
    _max?: NestedEnumTypeInstallationFilter<$PrismaModel>
  }

  export type EnumStatutChantierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutChantier | EnumStatutChantierFieldRefInput<$PrismaModel>
    in?: $Enums.StatutChantier[] | ListEnumStatutChantierFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutChantier[] | ListEnumStatutChantierFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutChantierWithAggregatesFilter<$PrismaModel> | $Enums.StatutChantier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutChantierFilter<$PrismaModel>
    _max?: NestedEnumStatutChantierFilter<$PrismaModel>
  }

  export type EnumEtatElementFilter<$PrismaModel = never> = {
    equals?: $Enums.EtatElement | EnumEtatElementFieldRefInput<$PrismaModel>
    in?: $Enums.EtatElement[] | ListEnumEtatElementFieldRefInput<$PrismaModel>
    notIn?: $Enums.EtatElement[] | ListEnumEtatElementFieldRefInput<$PrismaModel>
    not?: NestedEnumEtatElementFilter<$PrismaModel> | $Enums.EtatElement
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DossierScalarRelationFilter = {
    is?: DossierWhereInput
    isNot?: DossierWhereInput
  }

  export type ChantierCountOrderByAggregateInput = {
    id?: SortOrder
    etat?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    responsable?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
  }

  export type ChantierMaxOrderByAggregateInput = {
    id?: SortOrder
    etat?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    responsable?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
  }

  export type ChantierMinOrderByAggregateInput = {
    id?: SortOrder
    etat?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    responsable?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
  }

  export type EnumEtatElementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EtatElement | EnumEtatElementFieldRefInput<$PrismaModel>
    in?: $Enums.EtatElement[] | ListEnumEtatElementFieldRefInput<$PrismaModel>
    notIn?: $Enums.EtatElement[] | ListEnumEtatElementFieldRefInput<$PrismaModel>
    not?: NestedEnumEtatElementWithAggregatesFilter<$PrismaModel> | $Enums.EtatElement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEtatElementFilter<$PrismaModel>
    _max?: NestedEnumEtatElementFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStatutDevisFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDevis | EnumStatutDevisFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDevis[] | ListEnumStatutDevisFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDevis[] | ListEnumStatutDevisFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDevisFilter<$PrismaModel> | $Enums.StatutDevis
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DevisCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    statut?: SortOrder
    montantHT?: SortOrder
    tva?: SortOrder
    montantTTC?: SortOrder
    dateEmission?: SortOrder
    dateExpiration?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
  }

  export type DevisAvgOrderByAggregateInput = {
    montantHT?: SortOrder
    tva?: SortOrder
    montantTTC?: SortOrder
  }

  export type DevisMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    statut?: SortOrder
    montantHT?: SortOrder
    tva?: SortOrder
    montantTTC?: SortOrder
    dateEmission?: SortOrder
    dateExpiration?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
  }

  export type DevisMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    statut?: SortOrder
    montantHT?: SortOrder
    tva?: SortOrder
    montantTTC?: SortOrder
    dateEmission?: SortOrder
    dateExpiration?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
  }

  export type DevisSumOrderByAggregateInput = {
    montantHT?: SortOrder
    tva?: SortOrder
    montantTTC?: SortOrder
  }

  export type EnumStatutDevisWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDevis | EnumStatutDevisFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDevis[] | ListEnumStatutDevisFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDevis[] | ListEnumStatutDevisFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDevisWithAggregatesFilter<$PrismaModel> | $Enums.StatutDevis
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutDevisFilter<$PrismaModel>
    _max?: NestedEnumStatutDevisFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumStatutDiagnosticFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDiagnostic | EnumStatutDiagnosticFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDiagnostic[] | ListEnumStatutDiagnosticFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDiagnostic[] | ListEnumStatutDiagnosticFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDiagnosticFilter<$PrismaModel> | $Enums.StatutDiagnostic
  }

  export type DiagnosticCountOrderByAggregateInput = {
    id?: SortOrder
    statut?: SortOrder
    observations?: SortOrder
    conclusions?: SortOrder
    realiseAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
  }

  export type DiagnosticMaxOrderByAggregateInput = {
    id?: SortOrder
    statut?: SortOrder
    observations?: SortOrder
    conclusions?: SortOrder
    realiseAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
  }

  export type DiagnosticMinOrderByAggregateInput = {
    id?: SortOrder
    statut?: SortOrder
    observations?: SortOrder
    conclusions?: SortOrder
    realiseAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
  }

  export type EnumStatutDiagnosticWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDiagnostic | EnumStatutDiagnosticFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDiagnostic[] | ListEnumStatutDiagnosticFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDiagnostic[] | ListEnumStatutDiagnosticFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDiagnosticWithAggregatesFilter<$PrismaModel> | $Enums.StatutDiagnostic
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutDiagnosticFilter<$PrismaModel>
    _max?: NestedEnumStatutDiagnosticFilter<$PrismaModel>
  }

  export type EnumTypeCircuitFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeCircuit | EnumTypeCircuitFieldRefInput<$PrismaModel>
    in?: $Enums.TypeCircuit[] | ListEnumTypeCircuitFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeCircuit[] | ListEnumTypeCircuitFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeCircuitFilter<$PrismaModel> | $Enums.TypeCircuit
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProtectionListRelationFilter = {
    every?: ProtectionWhereInput
    some?: ProtectionWhereInput
    none?: ProtectionWhereInput
  }

  export type ProtectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CircuitCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    type?: SortOrder
    etat?: SortOrder
    amperage?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
  }

  export type CircuitAvgOrderByAggregateInput = {
    amperage?: SortOrder
  }

  export type CircuitMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    type?: SortOrder
    etat?: SortOrder
    amperage?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
  }

  export type CircuitMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    type?: SortOrder
    etat?: SortOrder
    amperage?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
  }

  export type CircuitSumOrderByAggregateInput = {
    amperage?: SortOrder
  }

  export type EnumTypeCircuitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeCircuit | EnumTypeCircuitFieldRefInput<$PrismaModel>
    in?: $Enums.TypeCircuit[] | ListEnumTypeCircuitFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeCircuit[] | ListEnumTypeCircuitFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeCircuitWithAggregatesFilter<$PrismaModel> | $Enums.TypeCircuit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeCircuitFilter<$PrismaModel>
    _max?: NestedEnumTypeCircuitFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumTypeProtectionFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeProtection | EnumTypeProtectionFieldRefInput<$PrismaModel>
    in?: $Enums.TypeProtection[] | ListEnumTypeProtectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeProtection[] | ListEnumTypeProtectionFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeProtectionFilter<$PrismaModel> | $Enums.TypeProtection
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumCourbeDisjoncteurNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CourbeDisjoncteur | EnumCourbeDisjoncteurFieldRefInput<$PrismaModel> | null
    in?: $Enums.CourbeDisjoncteur[] | ListEnumCourbeDisjoncteurFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CourbeDisjoncteur[] | ListEnumCourbeDisjoncteurFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCourbeDisjoncteurNullableFilter<$PrismaModel> | $Enums.CourbeDisjoncteur | null
  }

  export type EnumTypeDifferentielNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeDifferentiel | EnumTypeDifferentielFieldRefInput<$PrismaModel> | null
    in?: $Enums.TypeDifferentiel[] | ListEnumTypeDifferentielFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TypeDifferentiel[] | ListEnumTypeDifferentielFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTypeDifferentielNullableFilter<$PrismaModel> | $Enums.TypeDifferentiel | null
  }

  export type CircuitScalarRelationFilter = {
    is?: CircuitWhereInput
    isNot?: CircuitWhereInput
  }

  export type ProtectionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    calibre?: SortOrder
    courbe?: SortOrder
    typeDiff?: SortOrder
    sensibilite?: SortOrder
    marque?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    circuitId?: SortOrder
  }

  export type ProtectionAvgOrderByAggregateInput = {
    calibre?: SortOrder
    sensibilite?: SortOrder
  }

  export type ProtectionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    calibre?: SortOrder
    courbe?: SortOrder
    typeDiff?: SortOrder
    sensibilite?: SortOrder
    marque?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    circuitId?: SortOrder
  }

  export type ProtectionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    calibre?: SortOrder
    courbe?: SortOrder
    typeDiff?: SortOrder
    sensibilite?: SortOrder
    marque?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    circuitId?: SortOrder
  }

  export type ProtectionSumOrderByAggregateInput = {
    calibre?: SortOrder
    sensibilite?: SortOrder
  }

  export type EnumTypeProtectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeProtection | EnumTypeProtectionFieldRefInput<$PrismaModel>
    in?: $Enums.TypeProtection[] | ListEnumTypeProtectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeProtection[] | ListEnumTypeProtectionFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeProtectionWithAggregatesFilter<$PrismaModel> | $Enums.TypeProtection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeProtectionFilter<$PrismaModel>
    _max?: NestedEnumTypeProtectionFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumCourbeDisjoncteurNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourbeDisjoncteur | EnumCourbeDisjoncteurFieldRefInput<$PrismaModel> | null
    in?: $Enums.CourbeDisjoncteur[] | ListEnumCourbeDisjoncteurFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CourbeDisjoncteur[] | ListEnumCourbeDisjoncteurFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCourbeDisjoncteurNullableWithAggregatesFilter<$PrismaModel> | $Enums.CourbeDisjoncteur | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCourbeDisjoncteurNullableFilter<$PrismaModel>
    _max?: NestedEnumCourbeDisjoncteurNullableFilter<$PrismaModel>
  }

  export type EnumTypeDifferentielNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeDifferentiel | EnumTypeDifferentielFieldRefInput<$PrismaModel> | null
    in?: $Enums.TypeDifferentiel[] | ListEnumTypeDifferentielFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TypeDifferentiel[] | ListEnumTypeDifferentielFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTypeDifferentielNullableWithAggregatesFilter<$PrismaModel> | $Enums.TypeDifferentiel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTypeDifferentielNullableFilter<$PrismaModel>
    _max?: NestedEnumTypeDifferentielNullableFilter<$PrismaModel>
  }

  export type EnumStatutRgieFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutRgie | EnumStatutRgieFieldRefInput<$PrismaModel>
    in?: $Enums.StatutRgie[] | ListEnumStatutRgieFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutRgie[] | ListEnumStatutRgieFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutRgieFilter<$PrismaModel> | $Enums.StatutRgie
  }

  export type PointControleRgieCountOrderByAggregateInput = {
    id?: SortOrder
    articleRgie?: SortOrder
    libelle?: SortOrder
    statut?: SortOrder
    observation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
  }

  export type PointControleRgieMaxOrderByAggregateInput = {
    id?: SortOrder
    articleRgie?: SortOrder
    libelle?: SortOrder
    statut?: SortOrder
    observation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
  }

  export type PointControleRgieMinOrderByAggregateInput = {
    id?: SortOrder
    articleRgie?: SortOrder
    libelle?: SortOrder
    statut?: SortOrder
    observation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dossierId?: SortOrder
  }

  export type EnumStatutRgieWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutRgie | EnumStatutRgieFieldRefInput<$PrismaModel>
    in?: $Enums.StatutRgie[] | ListEnumStatutRgieFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutRgie[] | ListEnumStatutRgieFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutRgieWithAggregatesFilter<$PrismaModel> | $Enums.StatutRgie
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutRgieFilter<$PrismaModel>
    _max?: NestedEnumStatutRgieFilter<$PrismaModel>
  }

  export type DossierCreateNestedManyWithoutClientInput = {
    create?: XOR<DossierCreateWithoutClientInput, DossierUncheckedCreateWithoutClientInput> | DossierCreateWithoutClientInput[] | DossierUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DossierCreateOrConnectWithoutClientInput | DossierCreateOrConnectWithoutClientInput[]
    createMany?: DossierCreateManyClientInputEnvelope
    connect?: DossierWhereUniqueInput | DossierWhereUniqueInput[]
  }

  export type DossierUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<DossierCreateWithoutClientInput, DossierUncheckedCreateWithoutClientInput> | DossierCreateWithoutClientInput[] | DossierUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DossierCreateOrConnectWithoutClientInput | DossierCreateOrConnectWithoutClientInput[]
    createMany?: DossierCreateManyClientInputEnvelope
    connect?: DossierWhereUniqueInput | DossierWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DossierUpdateManyWithoutClientNestedInput = {
    create?: XOR<DossierCreateWithoutClientInput, DossierUncheckedCreateWithoutClientInput> | DossierCreateWithoutClientInput[] | DossierUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DossierCreateOrConnectWithoutClientInput | DossierCreateOrConnectWithoutClientInput[]
    upsert?: DossierUpsertWithWhereUniqueWithoutClientInput | DossierUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DossierCreateManyClientInputEnvelope
    set?: DossierWhereUniqueInput | DossierWhereUniqueInput[]
    disconnect?: DossierWhereUniqueInput | DossierWhereUniqueInput[]
    delete?: DossierWhereUniqueInput | DossierWhereUniqueInput[]
    connect?: DossierWhereUniqueInput | DossierWhereUniqueInput[]
    update?: DossierUpdateWithWhereUniqueWithoutClientInput | DossierUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DossierUpdateManyWithWhereWithoutClientInput | DossierUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DossierScalarWhereInput | DossierScalarWhereInput[]
  }

  export type DossierUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<DossierCreateWithoutClientInput, DossierUncheckedCreateWithoutClientInput> | DossierCreateWithoutClientInput[] | DossierUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DossierCreateOrConnectWithoutClientInput | DossierCreateOrConnectWithoutClientInput[]
    upsert?: DossierUpsertWithWhereUniqueWithoutClientInput | DossierUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DossierCreateManyClientInputEnvelope
    set?: DossierWhereUniqueInput | DossierWhereUniqueInput[]
    disconnect?: DossierWhereUniqueInput | DossierWhereUniqueInput[]
    delete?: DossierWhereUniqueInput | DossierWhereUniqueInput[]
    connect?: DossierWhereUniqueInput | DossierWhereUniqueInput[]
    update?: DossierUpdateWithWhereUniqueWithoutClientInput | DossierUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DossierUpdateManyWithWhereWithoutClientInput | DossierUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DossierScalarWhereInput | DossierScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutDossiersInput = {
    create?: XOR<ClientCreateWithoutDossiersInput, ClientUncheckedCreateWithoutDossiersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDossiersInput
    connect?: ClientWhereUniqueInput
  }

  export type ChantierCreateNestedOneWithoutDossierInput = {
    create?: XOR<ChantierCreateWithoutDossierInput, ChantierUncheckedCreateWithoutDossierInput>
    connectOrCreate?: ChantierCreateOrConnectWithoutDossierInput
    connect?: ChantierWhereUniqueInput
  }

  export type DevisCreateNestedManyWithoutDossierInput = {
    create?: XOR<DevisCreateWithoutDossierInput, DevisUncheckedCreateWithoutDossierInput> | DevisCreateWithoutDossierInput[] | DevisUncheckedCreateWithoutDossierInput[]
    connectOrCreate?: DevisCreateOrConnectWithoutDossierInput | DevisCreateOrConnectWithoutDossierInput[]
    createMany?: DevisCreateManyDossierInputEnvelope
    connect?: DevisWhereUniqueInput | DevisWhereUniqueInput[]
  }

  export type DiagnosticCreateNestedManyWithoutDossierInput = {
    create?: XOR<DiagnosticCreateWithoutDossierInput, DiagnosticUncheckedCreateWithoutDossierInput> | DiagnosticCreateWithoutDossierInput[] | DiagnosticUncheckedCreateWithoutDossierInput[]
    connectOrCreate?: DiagnosticCreateOrConnectWithoutDossierInput | DiagnosticCreateOrConnectWithoutDossierInput[]
    createMany?: DiagnosticCreateManyDossierInputEnvelope
    connect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
  }

  export type CircuitCreateNestedManyWithoutDossierInput = {
    create?: XOR<CircuitCreateWithoutDossierInput, CircuitUncheckedCreateWithoutDossierInput> | CircuitCreateWithoutDossierInput[] | CircuitUncheckedCreateWithoutDossierInput[]
    connectOrCreate?: CircuitCreateOrConnectWithoutDossierInput | CircuitCreateOrConnectWithoutDossierInput[]
    createMany?: CircuitCreateManyDossierInputEnvelope
    connect?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
  }

  export type PointControleRgieCreateNestedManyWithoutDossierInput = {
    create?: XOR<PointControleRgieCreateWithoutDossierInput, PointControleRgieUncheckedCreateWithoutDossierInput> | PointControleRgieCreateWithoutDossierInput[] | PointControleRgieUncheckedCreateWithoutDossierInput[]
    connectOrCreate?: PointControleRgieCreateOrConnectWithoutDossierInput | PointControleRgieCreateOrConnectWithoutDossierInput[]
    createMany?: PointControleRgieCreateManyDossierInputEnvelope
    connect?: PointControleRgieWhereUniqueInput | PointControleRgieWhereUniqueInput[]
  }

  export type ChantierUncheckedCreateNestedOneWithoutDossierInput = {
    create?: XOR<ChantierCreateWithoutDossierInput, ChantierUncheckedCreateWithoutDossierInput>
    connectOrCreate?: ChantierCreateOrConnectWithoutDossierInput
    connect?: ChantierWhereUniqueInput
  }

  export type DevisUncheckedCreateNestedManyWithoutDossierInput = {
    create?: XOR<DevisCreateWithoutDossierInput, DevisUncheckedCreateWithoutDossierInput> | DevisCreateWithoutDossierInput[] | DevisUncheckedCreateWithoutDossierInput[]
    connectOrCreate?: DevisCreateOrConnectWithoutDossierInput | DevisCreateOrConnectWithoutDossierInput[]
    createMany?: DevisCreateManyDossierInputEnvelope
    connect?: DevisWhereUniqueInput | DevisWhereUniqueInput[]
  }

  export type DiagnosticUncheckedCreateNestedManyWithoutDossierInput = {
    create?: XOR<DiagnosticCreateWithoutDossierInput, DiagnosticUncheckedCreateWithoutDossierInput> | DiagnosticCreateWithoutDossierInput[] | DiagnosticUncheckedCreateWithoutDossierInput[]
    connectOrCreate?: DiagnosticCreateOrConnectWithoutDossierInput | DiagnosticCreateOrConnectWithoutDossierInput[]
    createMany?: DiagnosticCreateManyDossierInputEnvelope
    connect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
  }

  export type CircuitUncheckedCreateNestedManyWithoutDossierInput = {
    create?: XOR<CircuitCreateWithoutDossierInput, CircuitUncheckedCreateWithoutDossierInput> | CircuitCreateWithoutDossierInput[] | CircuitUncheckedCreateWithoutDossierInput[]
    connectOrCreate?: CircuitCreateOrConnectWithoutDossierInput | CircuitCreateOrConnectWithoutDossierInput[]
    createMany?: CircuitCreateManyDossierInputEnvelope
    connect?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
  }

  export type PointControleRgieUncheckedCreateNestedManyWithoutDossierInput = {
    create?: XOR<PointControleRgieCreateWithoutDossierInput, PointControleRgieUncheckedCreateWithoutDossierInput> | PointControleRgieCreateWithoutDossierInput[] | PointControleRgieUncheckedCreateWithoutDossierInput[]
    connectOrCreate?: PointControleRgieCreateOrConnectWithoutDossierInput | PointControleRgieCreateOrConnectWithoutDossierInput[]
    createMany?: PointControleRgieCreateManyDossierInputEnvelope
    connect?: PointControleRgieWhereUniqueInput | PointControleRgieWhereUniqueInput[]
  }

  export type EnumTypeInstallationFieldUpdateOperationsInput = {
    set?: $Enums.TypeInstallation
  }

  export type EnumStatutChantierFieldUpdateOperationsInput = {
    set?: $Enums.StatutChantier
  }

  export type ClientUpdateOneRequiredWithoutDossiersNestedInput = {
    create?: XOR<ClientCreateWithoutDossiersInput, ClientUncheckedCreateWithoutDossiersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDossiersInput
    upsert?: ClientUpsertWithoutDossiersInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutDossiersInput, ClientUpdateWithoutDossiersInput>, ClientUncheckedUpdateWithoutDossiersInput>
  }

  export type ChantierUpdateOneWithoutDossierNestedInput = {
    create?: XOR<ChantierCreateWithoutDossierInput, ChantierUncheckedCreateWithoutDossierInput>
    connectOrCreate?: ChantierCreateOrConnectWithoutDossierInput
    upsert?: ChantierUpsertWithoutDossierInput
    disconnect?: ChantierWhereInput | boolean
    delete?: ChantierWhereInput | boolean
    connect?: ChantierWhereUniqueInput
    update?: XOR<XOR<ChantierUpdateToOneWithWhereWithoutDossierInput, ChantierUpdateWithoutDossierInput>, ChantierUncheckedUpdateWithoutDossierInput>
  }

  export type DevisUpdateManyWithoutDossierNestedInput = {
    create?: XOR<DevisCreateWithoutDossierInput, DevisUncheckedCreateWithoutDossierInput> | DevisCreateWithoutDossierInput[] | DevisUncheckedCreateWithoutDossierInput[]
    connectOrCreate?: DevisCreateOrConnectWithoutDossierInput | DevisCreateOrConnectWithoutDossierInput[]
    upsert?: DevisUpsertWithWhereUniqueWithoutDossierInput | DevisUpsertWithWhereUniqueWithoutDossierInput[]
    createMany?: DevisCreateManyDossierInputEnvelope
    set?: DevisWhereUniqueInput | DevisWhereUniqueInput[]
    disconnect?: DevisWhereUniqueInput | DevisWhereUniqueInput[]
    delete?: DevisWhereUniqueInput | DevisWhereUniqueInput[]
    connect?: DevisWhereUniqueInput | DevisWhereUniqueInput[]
    update?: DevisUpdateWithWhereUniqueWithoutDossierInput | DevisUpdateWithWhereUniqueWithoutDossierInput[]
    updateMany?: DevisUpdateManyWithWhereWithoutDossierInput | DevisUpdateManyWithWhereWithoutDossierInput[]
    deleteMany?: DevisScalarWhereInput | DevisScalarWhereInput[]
  }

  export type DiagnosticUpdateManyWithoutDossierNestedInput = {
    create?: XOR<DiagnosticCreateWithoutDossierInput, DiagnosticUncheckedCreateWithoutDossierInput> | DiagnosticCreateWithoutDossierInput[] | DiagnosticUncheckedCreateWithoutDossierInput[]
    connectOrCreate?: DiagnosticCreateOrConnectWithoutDossierInput | DiagnosticCreateOrConnectWithoutDossierInput[]
    upsert?: DiagnosticUpsertWithWhereUniqueWithoutDossierInput | DiagnosticUpsertWithWhereUniqueWithoutDossierInput[]
    createMany?: DiagnosticCreateManyDossierInputEnvelope
    set?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    disconnect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    delete?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    connect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    update?: DiagnosticUpdateWithWhereUniqueWithoutDossierInput | DiagnosticUpdateWithWhereUniqueWithoutDossierInput[]
    updateMany?: DiagnosticUpdateManyWithWhereWithoutDossierInput | DiagnosticUpdateManyWithWhereWithoutDossierInput[]
    deleteMany?: DiagnosticScalarWhereInput | DiagnosticScalarWhereInput[]
  }

  export type CircuitUpdateManyWithoutDossierNestedInput = {
    create?: XOR<CircuitCreateWithoutDossierInput, CircuitUncheckedCreateWithoutDossierInput> | CircuitCreateWithoutDossierInput[] | CircuitUncheckedCreateWithoutDossierInput[]
    connectOrCreate?: CircuitCreateOrConnectWithoutDossierInput | CircuitCreateOrConnectWithoutDossierInput[]
    upsert?: CircuitUpsertWithWhereUniqueWithoutDossierInput | CircuitUpsertWithWhereUniqueWithoutDossierInput[]
    createMany?: CircuitCreateManyDossierInputEnvelope
    set?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    disconnect?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    delete?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    connect?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    update?: CircuitUpdateWithWhereUniqueWithoutDossierInput | CircuitUpdateWithWhereUniqueWithoutDossierInput[]
    updateMany?: CircuitUpdateManyWithWhereWithoutDossierInput | CircuitUpdateManyWithWhereWithoutDossierInput[]
    deleteMany?: CircuitScalarWhereInput | CircuitScalarWhereInput[]
  }

  export type PointControleRgieUpdateManyWithoutDossierNestedInput = {
    create?: XOR<PointControleRgieCreateWithoutDossierInput, PointControleRgieUncheckedCreateWithoutDossierInput> | PointControleRgieCreateWithoutDossierInput[] | PointControleRgieUncheckedCreateWithoutDossierInput[]
    connectOrCreate?: PointControleRgieCreateOrConnectWithoutDossierInput | PointControleRgieCreateOrConnectWithoutDossierInput[]
    upsert?: PointControleRgieUpsertWithWhereUniqueWithoutDossierInput | PointControleRgieUpsertWithWhereUniqueWithoutDossierInput[]
    createMany?: PointControleRgieCreateManyDossierInputEnvelope
    set?: PointControleRgieWhereUniqueInput | PointControleRgieWhereUniqueInput[]
    disconnect?: PointControleRgieWhereUniqueInput | PointControleRgieWhereUniqueInput[]
    delete?: PointControleRgieWhereUniqueInput | PointControleRgieWhereUniqueInput[]
    connect?: PointControleRgieWhereUniqueInput | PointControleRgieWhereUniqueInput[]
    update?: PointControleRgieUpdateWithWhereUniqueWithoutDossierInput | PointControleRgieUpdateWithWhereUniqueWithoutDossierInput[]
    updateMany?: PointControleRgieUpdateManyWithWhereWithoutDossierInput | PointControleRgieUpdateManyWithWhereWithoutDossierInput[]
    deleteMany?: PointControleRgieScalarWhereInput | PointControleRgieScalarWhereInput[]
  }

  export type ChantierUncheckedUpdateOneWithoutDossierNestedInput = {
    create?: XOR<ChantierCreateWithoutDossierInput, ChantierUncheckedCreateWithoutDossierInput>
    connectOrCreate?: ChantierCreateOrConnectWithoutDossierInput
    upsert?: ChantierUpsertWithoutDossierInput
    disconnect?: ChantierWhereInput | boolean
    delete?: ChantierWhereInput | boolean
    connect?: ChantierWhereUniqueInput
    update?: XOR<XOR<ChantierUpdateToOneWithWhereWithoutDossierInput, ChantierUpdateWithoutDossierInput>, ChantierUncheckedUpdateWithoutDossierInput>
  }

  export type DevisUncheckedUpdateManyWithoutDossierNestedInput = {
    create?: XOR<DevisCreateWithoutDossierInput, DevisUncheckedCreateWithoutDossierInput> | DevisCreateWithoutDossierInput[] | DevisUncheckedCreateWithoutDossierInput[]
    connectOrCreate?: DevisCreateOrConnectWithoutDossierInput | DevisCreateOrConnectWithoutDossierInput[]
    upsert?: DevisUpsertWithWhereUniqueWithoutDossierInput | DevisUpsertWithWhereUniqueWithoutDossierInput[]
    createMany?: DevisCreateManyDossierInputEnvelope
    set?: DevisWhereUniqueInput | DevisWhereUniqueInput[]
    disconnect?: DevisWhereUniqueInput | DevisWhereUniqueInput[]
    delete?: DevisWhereUniqueInput | DevisWhereUniqueInput[]
    connect?: DevisWhereUniqueInput | DevisWhereUniqueInput[]
    update?: DevisUpdateWithWhereUniqueWithoutDossierInput | DevisUpdateWithWhereUniqueWithoutDossierInput[]
    updateMany?: DevisUpdateManyWithWhereWithoutDossierInput | DevisUpdateManyWithWhereWithoutDossierInput[]
    deleteMany?: DevisScalarWhereInput | DevisScalarWhereInput[]
  }

  export type DiagnosticUncheckedUpdateManyWithoutDossierNestedInput = {
    create?: XOR<DiagnosticCreateWithoutDossierInput, DiagnosticUncheckedCreateWithoutDossierInput> | DiagnosticCreateWithoutDossierInput[] | DiagnosticUncheckedCreateWithoutDossierInput[]
    connectOrCreate?: DiagnosticCreateOrConnectWithoutDossierInput | DiagnosticCreateOrConnectWithoutDossierInput[]
    upsert?: DiagnosticUpsertWithWhereUniqueWithoutDossierInput | DiagnosticUpsertWithWhereUniqueWithoutDossierInput[]
    createMany?: DiagnosticCreateManyDossierInputEnvelope
    set?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    disconnect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    delete?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    connect?: DiagnosticWhereUniqueInput | DiagnosticWhereUniqueInput[]
    update?: DiagnosticUpdateWithWhereUniqueWithoutDossierInput | DiagnosticUpdateWithWhereUniqueWithoutDossierInput[]
    updateMany?: DiagnosticUpdateManyWithWhereWithoutDossierInput | DiagnosticUpdateManyWithWhereWithoutDossierInput[]
    deleteMany?: DiagnosticScalarWhereInput | DiagnosticScalarWhereInput[]
  }

  export type CircuitUncheckedUpdateManyWithoutDossierNestedInput = {
    create?: XOR<CircuitCreateWithoutDossierInput, CircuitUncheckedCreateWithoutDossierInput> | CircuitCreateWithoutDossierInput[] | CircuitUncheckedCreateWithoutDossierInput[]
    connectOrCreate?: CircuitCreateOrConnectWithoutDossierInput | CircuitCreateOrConnectWithoutDossierInput[]
    upsert?: CircuitUpsertWithWhereUniqueWithoutDossierInput | CircuitUpsertWithWhereUniqueWithoutDossierInput[]
    createMany?: CircuitCreateManyDossierInputEnvelope
    set?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    disconnect?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    delete?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    connect?: CircuitWhereUniqueInput | CircuitWhereUniqueInput[]
    update?: CircuitUpdateWithWhereUniqueWithoutDossierInput | CircuitUpdateWithWhereUniqueWithoutDossierInput[]
    updateMany?: CircuitUpdateManyWithWhereWithoutDossierInput | CircuitUpdateManyWithWhereWithoutDossierInput[]
    deleteMany?: CircuitScalarWhereInput | CircuitScalarWhereInput[]
  }

  export type PointControleRgieUncheckedUpdateManyWithoutDossierNestedInput = {
    create?: XOR<PointControleRgieCreateWithoutDossierInput, PointControleRgieUncheckedCreateWithoutDossierInput> | PointControleRgieCreateWithoutDossierInput[] | PointControleRgieUncheckedCreateWithoutDossierInput[]
    connectOrCreate?: PointControleRgieCreateOrConnectWithoutDossierInput | PointControleRgieCreateOrConnectWithoutDossierInput[]
    upsert?: PointControleRgieUpsertWithWhereUniqueWithoutDossierInput | PointControleRgieUpsertWithWhereUniqueWithoutDossierInput[]
    createMany?: PointControleRgieCreateManyDossierInputEnvelope
    set?: PointControleRgieWhereUniqueInput | PointControleRgieWhereUniqueInput[]
    disconnect?: PointControleRgieWhereUniqueInput | PointControleRgieWhereUniqueInput[]
    delete?: PointControleRgieWhereUniqueInput | PointControleRgieWhereUniqueInput[]
    connect?: PointControleRgieWhereUniqueInput | PointControleRgieWhereUniqueInput[]
    update?: PointControleRgieUpdateWithWhereUniqueWithoutDossierInput | PointControleRgieUpdateWithWhereUniqueWithoutDossierInput[]
    updateMany?: PointControleRgieUpdateManyWithWhereWithoutDossierInput | PointControleRgieUpdateManyWithWhereWithoutDossierInput[]
    deleteMany?: PointControleRgieScalarWhereInput | PointControleRgieScalarWhereInput[]
  }

  export type DossierCreateNestedOneWithoutChantierInput = {
    create?: XOR<DossierCreateWithoutChantierInput, DossierUncheckedCreateWithoutChantierInput>
    connectOrCreate?: DossierCreateOrConnectWithoutChantierInput
    connect?: DossierWhereUniqueInput
  }

  export type EnumEtatElementFieldUpdateOperationsInput = {
    set?: $Enums.EtatElement
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DossierUpdateOneRequiredWithoutChantierNestedInput = {
    create?: XOR<DossierCreateWithoutChantierInput, DossierUncheckedCreateWithoutChantierInput>
    connectOrCreate?: DossierCreateOrConnectWithoutChantierInput
    upsert?: DossierUpsertWithoutChantierInput
    connect?: DossierWhereUniqueInput
    update?: XOR<XOR<DossierUpdateToOneWithWhereWithoutChantierInput, DossierUpdateWithoutChantierInput>, DossierUncheckedUpdateWithoutChantierInput>
  }

  export type DossierCreateNestedOneWithoutDevisInput = {
    create?: XOR<DossierCreateWithoutDevisInput, DossierUncheckedCreateWithoutDevisInput>
    connectOrCreate?: DossierCreateOrConnectWithoutDevisInput
    connect?: DossierWhereUniqueInput
  }

  export type EnumStatutDevisFieldUpdateOperationsInput = {
    set?: $Enums.StatutDevis
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DossierUpdateOneRequiredWithoutDevisNestedInput = {
    create?: XOR<DossierCreateWithoutDevisInput, DossierUncheckedCreateWithoutDevisInput>
    connectOrCreate?: DossierCreateOrConnectWithoutDevisInput
    upsert?: DossierUpsertWithoutDevisInput
    connect?: DossierWhereUniqueInput
    update?: XOR<XOR<DossierUpdateToOneWithWhereWithoutDevisInput, DossierUpdateWithoutDevisInput>, DossierUncheckedUpdateWithoutDevisInput>
  }

  export type DossierCreateNestedOneWithoutDiagnosticsInput = {
    create?: XOR<DossierCreateWithoutDiagnosticsInput, DossierUncheckedCreateWithoutDiagnosticsInput>
    connectOrCreate?: DossierCreateOrConnectWithoutDiagnosticsInput
    connect?: DossierWhereUniqueInput
  }

  export type EnumStatutDiagnosticFieldUpdateOperationsInput = {
    set?: $Enums.StatutDiagnostic
  }

  export type DossierUpdateOneRequiredWithoutDiagnosticsNestedInput = {
    create?: XOR<DossierCreateWithoutDiagnosticsInput, DossierUncheckedCreateWithoutDiagnosticsInput>
    connectOrCreate?: DossierCreateOrConnectWithoutDiagnosticsInput
    upsert?: DossierUpsertWithoutDiagnosticsInput
    connect?: DossierWhereUniqueInput
    update?: XOR<XOR<DossierUpdateToOneWithWhereWithoutDiagnosticsInput, DossierUpdateWithoutDiagnosticsInput>, DossierUncheckedUpdateWithoutDiagnosticsInput>
  }

  export type DossierCreateNestedOneWithoutCircuitsInput = {
    create?: XOR<DossierCreateWithoutCircuitsInput, DossierUncheckedCreateWithoutCircuitsInput>
    connectOrCreate?: DossierCreateOrConnectWithoutCircuitsInput
    connect?: DossierWhereUniqueInput
  }

  export type ProtectionCreateNestedManyWithoutCircuitInput = {
    create?: XOR<ProtectionCreateWithoutCircuitInput, ProtectionUncheckedCreateWithoutCircuitInput> | ProtectionCreateWithoutCircuitInput[] | ProtectionUncheckedCreateWithoutCircuitInput[]
    connectOrCreate?: ProtectionCreateOrConnectWithoutCircuitInput | ProtectionCreateOrConnectWithoutCircuitInput[]
    createMany?: ProtectionCreateManyCircuitInputEnvelope
    connect?: ProtectionWhereUniqueInput | ProtectionWhereUniqueInput[]
  }

  export type ProtectionUncheckedCreateNestedManyWithoutCircuitInput = {
    create?: XOR<ProtectionCreateWithoutCircuitInput, ProtectionUncheckedCreateWithoutCircuitInput> | ProtectionCreateWithoutCircuitInput[] | ProtectionUncheckedCreateWithoutCircuitInput[]
    connectOrCreate?: ProtectionCreateOrConnectWithoutCircuitInput | ProtectionCreateOrConnectWithoutCircuitInput[]
    createMany?: ProtectionCreateManyCircuitInputEnvelope
    connect?: ProtectionWhereUniqueInput | ProtectionWhereUniqueInput[]
  }

  export type EnumTypeCircuitFieldUpdateOperationsInput = {
    set?: $Enums.TypeCircuit
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DossierUpdateOneRequiredWithoutCircuitsNestedInput = {
    create?: XOR<DossierCreateWithoutCircuitsInput, DossierUncheckedCreateWithoutCircuitsInput>
    connectOrCreate?: DossierCreateOrConnectWithoutCircuitsInput
    upsert?: DossierUpsertWithoutCircuitsInput
    connect?: DossierWhereUniqueInput
    update?: XOR<XOR<DossierUpdateToOneWithWhereWithoutCircuitsInput, DossierUpdateWithoutCircuitsInput>, DossierUncheckedUpdateWithoutCircuitsInput>
  }

  export type ProtectionUpdateManyWithoutCircuitNestedInput = {
    create?: XOR<ProtectionCreateWithoutCircuitInput, ProtectionUncheckedCreateWithoutCircuitInput> | ProtectionCreateWithoutCircuitInput[] | ProtectionUncheckedCreateWithoutCircuitInput[]
    connectOrCreate?: ProtectionCreateOrConnectWithoutCircuitInput | ProtectionCreateOrConnectWithoutCircuitInput[]
    upsert?: ProtectionUpsertWithWhereUniqueWithoutCircuitInput | ProtectionUpsertWithWhereUniqueWithoutCircuitInput[]
    createMany?: ProtectionCreateManyCircuitInputEnvelope
    set?: ProtectionWhereUniqueInput | ProtectionWhereUniqueInput[]
    disconnect?: ProtectionWhereUniqueInput | ProtectionWhereUniqueInput[]
    delete?: ProtectionWhereUniqueInput | ProtectionWhereUniqueInput[]
    connect?: ProtectionWhereUniqueInput | ProtectionWhereUniqueInput[]
    update?: ProtectionUpdateWithWhereUniqueWithoutCircuitInput | ProtectionUpdateWithWhereUniqueWithoutCircuitInput[]
    updateMany?: ProtectionUpdateManyWithWhereWithoutCircuitInput | ProtectionUpdateManyWithWhereWithoutCircuitInput[]
    deleteMany?: ProtectionScalarWhereInput | ProtectionScalarWhereInput[]
  }

  export type ProtectionUncheckedUpdateManyWithoutCircuitNestedInput = {
    create?: XOR<ProtectionCreateWithoutCircuitInput, ProtectionUncheckedCreateWithoutCircuitInput> | ProtectionCreateWithoutCircuitInput[] | ProtectionUncheckedCreateWithoutCircuitInput[]
    connectOrCreate?: ProtectionCreateOrConnectWithoutCircuitInput | ProtectionCreateOrConnectWithoutCircuitInput[]
    upsert?: ProtectionUpsertWithWhereUniqueWithoutCircuitInput | ProtectionUpsertWithWhereUniqueWithoutCircuitInput[]
    createMany?: ProtectionCreateManyCircuitInputEnvelope
    set?: ProtectionWhereUniqueInput | ProtectionWhereUniqueInput[]
    disconnect?: ProtectionWhereUniqueInput | ProtectionWhereUniqueInput[]
    delete?: ProtectionWhereUniqueInput | ProtectionWhereUniqueInput[]
    connect?: ProtectionWhereUniqueInput | ProtectionWhereUniqueInput[]
    update?: ProtectionUpdateWithWhereUniqueWithoutCircuitInput | ProtectionUpdateWithWhereUniqueWithoutCircuitInput[]
    updateMany?: ProtectionUpdateManyWithWhereWithoutCircuitInput | ProtectionUpdateManyWithWhereWithoutCircuitInput[]
    deleteMany?: ProtectionScalarWhereInput | ProtectionScalarWhereInput[]
  }

  export type CircuitCreateNestedOneWithoutProtectionsInput = {
    create?: XOR<CircuitCreateWithoutProtectionsInput, CircuitUncheckedCreateWithoutProtectionsInput>
    connectOrCreate?: CircuitCreateOrConnectWithoutProtectionsInput
    connect?: CircuitWhereUniqueInput
  }

  export type EnumTypeProtectionFieldUpdateOperationsInput = {
    set?: $Enums.TypeProtection
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumCourbeDisjoncteurFieldUpdateOperationsInput = {
    set?: $Enums.CourbeDisjoncteur | null
  }

  export type NullableEnumTypeDifferentielFieldUpdateOperationsInput = {
    set?: $Enums.TypeDifferentiel | null
  }

  export type CircuitUpdateOneRequiredWithoutProtectionsNestedInput = {
    create?: XOR<CircuitCreateWithoutProtectionsInput, CircuitUncheckedCreateWithoutProtectionsInput>
    connectOrCreate?: CircuitCreateOrConnectWithoutProtectionsInput
    upsert?: CircuitUpsertWithoutProtectionsInput
    connect?: CircuitWhereUniqueInput
    update?: XOR<XOR<CircuitUpdateToOneWithWhereWithoutProtectionsInput, CircuitUpdateWithoutProtectionsInput>, CircuitUncheckedUpdateWithoutProtectionsInput>
  }

  export type DossierCreateNestedOneWithoutPointsControleInput = {
    create?: XOR<DossierCreateWithoutPointsControleInput, DossierUncheckedCreateWithoutPointsControleInput>
    connectOrCreate?: DossierCreateOrConnectWithoutPointsControleInput
    connect?: DossierWhereUniqueInput
  }

  export type EnumStatutRgieFieldUpdateOperationsInput = {
    set?: $Enums.StatutRgie
  }

  export type DossierUpdateOneRequiredWithoutPointsControleNestedInput = {
    create?: XOR<DossierCreateWithoutPointsControleInput, DossierUncheckedCreateWithoutPointsControleInput>
    connectOrCreate?: DossierCreateOrConnectWithoutPointsControleInput
    upsert?: DossierUpsertWithoutPointsControleInput
    connect?: DossierWhereUniqueInput
    update?: XOR<XOR<DossierUpdateToOneWithWhereWithoutPointsControleInput, DossierUpdateWithoutPointsControleInput>, DossierUncheckedUpdateWithoutPointsControleInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTypeInstallationFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeInstallation | EnumTypeInstallationFieldRefInput<$PrismaModel>
    in?: $Enums.TypeInstallation[] | ListEnumTypeInstallationFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeInstallation[] | ListEnumTypeInstallationFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeInstallationFilter<$PrismaModel> | $Enums.TypeInstallation
  }

  export type NestedEnumStatutChantierFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutChantier | EnumStatutChantierFieldRefInput<$PrismaModel>
    in?: $Enums.StatutChantier[] | ListEnumStatutChantierFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutChantier[] | ListEnumStatutChantierFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutChantierFilter<$PrismaModel> | $Enums.StatutChantier
  }

  export type NestedEnumTypeInstallationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeInstallation | EnumTypeInstallationFieldRefInput<$PrismaModel>
    in?: $Enums.TypeInstallation[] | ListEnumTypeInstallationFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeInstallation[] | ListEnumTypeInstallationFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeInstallationWithAggregatesFilter<$PrismaModel> | $Enums.TypeInstallation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeInstallationFilter<$PrismaModel>
    _max?: NestedEnumTypeInstallationFilter<$PrismaModel>
  }

  export type NestedEnumStatutChantierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutChantier | EnumStatutChantierFieldRefInput<$PrismaModel>
    in?: $Enums.StatutChantier[] | ListEnumStatutChantierFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutChantier[] | ListEnumStatutChantierFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutChantierWithAggregatesFilter<$PrismaModel> | $Enums.StatutChantier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutChantierFilter<$PrismaModel>
    _max?: NestedEnumStatutChantierFilter<$PrismaModel>
  }

  export type NestedEnumEtatElementFilter<$PrismaModel = never> = {
    equals?: $Enums.EtatElement | EnumEtatElementFieldRefInput<$PrismaModel>
    in?: $Enums.EtatElement[] | ListEnumEtatElementFieldRefInput<$PrismaModel>
    notIn?: $Enums.EtatElement[] | ListEnumEtatElementFieldRefInput<$PrismaModel>
    not?: NestedEnumEtatElementFilter<$PrismaModel> | $Enums.EtatElement
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumEtatElementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EtatElement | EnumEtatElementFieldRefInput<$PrismaModel>
    in?: $Enums.EtatElement[] | ListEnumEtatElementFieldRefInput<$PrismaModel>
    notIn?: $Enums.EtatElement[] | ListEnumEtatElementFieldRefInput<$PrismaModel>
    not?: NestedEnumEtatElementWithAggregatesFilter<$PrismaModel> | $Enums.EtatElement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEtatElementFilter<$PrismaModel>
    _max?: NestedEnumEtatElementFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatutDevisFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDevis | EnumStatutDevisFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDevis[] | ListEnumStatutDevisFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDevis[] | ListEnumStatutDevisFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDevisFilter<$PrismaModel> | $Enums.StatutDevis
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumStatutDevisWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDevis | EnumStatutDevisFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDevis[] | ListEnumStatutDevisFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDevis[] | ListEnumStatutDevisFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDevisWithAggregatesFilter<$PrismaModel> | $Enums.StatutDevis
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutDevisFilter<$PrismaModel>
    _max?: NestedEnumStatutDevisFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumStatutDiagnosticFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDiagnostic | EnumStatutDiagnosticFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDiagnostic[] | ListEnumStatutDiagnosticFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDiagnostic[] | ListEnumStatutDiagnosticFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDiagnosticFilter<$PrismaModel> | $Enums.StatutDiagnostic
  }

  export type NestedEnumStatutDiagnosticWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDiagnostic | EnumStatutDiagnosticFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDiagnostic[] | ListEnumStatutDiagnosticFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDiagnostic[] | ListEnumStatutDiagnosticFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDiagnosticWithAggregatesFilter<$PrismaModel> | $Enums.StatutDiagnostic
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutDiagnosticFilter<$PrismaModel>
    _max?: NestedEnumStatutDiagnosticFilter<$PrismaModel>
  }

  export type NestedEnumTypeCircuitFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeCircuit | EnumTypeCircuitFieldRefInput<$PrismaModel>
    in?: $Enums.TypeCircuit[] | ListEnumTypeCircuitFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeCircuit[] | ListEnumTypeCircuitFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeCircuitFilter<$PrismaModel> | $Enums.TypeCircuit
  }

  export type NestedEnumTypeCircuitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeCircuit | EnumTypeCircuitFieldRefInput<$PrismaModel>
    in?: $Enums.TypeCircuit[] | ListEnumTypeCircuitFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeCircuit[] | ListEnumTypeCircuitFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeCircuitWithAggregatesFilter<$PrismaModel> | $Enums.TypeCircuit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeCircuitFilter<$PrismaModel>
    _max?: NestedEnumTypeCircuitFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTypeProtectionFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeProtection | EnumTypeProtectionFieldRefInput<$PrismaModel>
    in?: $Enums.TypeProtection[] | ListEnumTypeProtectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeProtection[] | ListEnumTypeProtectionFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeProtectionFilter<$PrismaModel> | $Enums.TypeProtection
  }

  export type NestedEnumCourbeDisjoncteurNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CourbeDisjoncteur | EnumCourbeDisjoncteurFieldRefInput<$PrismaModel> | null
    in?: $Enums.CourbeDisjoncteur[] | ListEnumCourbeDisjoncteurFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CourbeDisjoncteur[] | ListEnumCourbeDisjoncteurFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCourbeDisjoncteurNullableFilter<$PrismaModel> | $Enums.CourbeDisjoncteur | null
  }

  export type NestedEnumTypeDifferentielNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeDifferentiel | EnumTypeDifferentielFieldRefInput<$PrismaModel> | null
    in?: $Enums.TypeDifferentiel[] | ListEnumTypeDifferentielFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TypeDifferentiel[] | ListEnumTypeDifferentielFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTypeDifferentielNullableFilter<$PrismaModel> | $Enums.TypeDifferentiel | null
  }

  export type NestedEnumTypeProtectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeProtection | EnumTypeProtectionFieldRefInput<$PrismaModel>
    in?: $Enums.TypeProtection[] | ListEnumTypeProtectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeProtection[] | ListEnumTypeProtectionFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeProtectionWithAggregatesFilter<$PrismaModel> | $Enums.TypeProtection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeProtectionFilter<$PrismaModel>
    _max?: NestedEnumTypeProtectionFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumCourbeDisjoncteurNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourbeDisjoncteur | EnumCourbeDisjoncteurFieldRefInput<$PrismaModel> | null
    in?: $Enums.CourbeDisjoncteur[] | ListEnumCourbeDisjoncteurFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CourbeDisjoncteur[] | ListEnumCourbeDisjoncteurFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCourbeDisjoncteurNullableWithAggregatesFilter<$PrismaModel> | $Enums.CourbeDisjoncteur | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCourbeDisjoncteurNullableFilter<$PrismaModel>
    _max?: NestedEnumCourbeDisjoncteurNullableFilter<$PrismaModel>
  }

  export type NestedEnumTypeDifferentielNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeDifferentiel | EnumTypeDifferentielFieldRefInput<$PrismaModel> | null
    in?: $Enums.TypeDifferentiel[] | ListEnumTypeDifferentielFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TypeDifferentiel[] | ListEnumTypeDifferentielFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTypeDifferentielNullableWithAggregatesFilter<$PrismaModel> | $Enums.TypeDifferentiel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTypeDifferentielNullableFilter<$PrismaModel>
    _max?: NestedEnumTypeDifferentielNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatutRgieFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutRgie | EnumStatutRgieFieldRefInput<$PrismaModel>
    in?: $Enums.StatutRgie[] | ListEnumStatutRgieFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutRgie[] | ListEnumStatutRgieFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutRgieFilter<$PrismaModel> | $Enums.StatutRgie
  }

  export type NestedEnumStatutRgieWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutRgie | EnumStatutRgieFieldRefInput<$PrismaModel>
    in?: $Enums.StatutRgie[] | ListEnumStatutRgieFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutRgie[] | ListEnumStatutRgieFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutRgieWithAggregatesFilter<$PrismaModel> | $Enums.StatutRgie
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutRgieFilter<$PrismaModel>
    _max?: NestedEnumStatutRgieFilter<$PrismaModel>
  }

  export type DossierCreateWithoutClientInput = {
    id?: string
    reference: string
    titre: string
    typeInstallation: $Enums.TypeInstallation
    statut?: $Enums.StatutChantier
    description?: string | null
    adresseChantier?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chantier?: ChantierCreateNestedOneWithoutDossierInput
    devis?: DevisCreateNestedManyWithoutDossierInput
    diagnostics?: DiagnosticCreateNestedManyWithoutDossierInput
    circuits?: CircuitCreateNestedManyWithoutDossierInput
    pointsControle?: PointControleRgieCreateNestedManyWithoutDossierInput
  }

  export type DossierUncheckedCreateWithoutClientInput = {
    id?: string
    reference: string
    titre: string
    typeInstallation: $Enums.TypeInstallation
    statut?: $Enums.StatutChantier
    description?: string | null
    adresseChantier?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chantier?: ChantierUncheckedCreateNestedOneWithoutDossierInput
    devis?: DevisUncheckedCreateNestedManyWithoutDossierInput
    diagnostics?: DiagnosticUncheckedCreateNestedManyWithoutDossierInput
    circuits?: CircuitUncheckedCreateNestedManyWithoutDossierInput
    pointsControle?: PointControleRgieUncheckedCreateNestedManyWithoutDossierInput
  }

  export type DossierCreateOrConnectWithoutClientInput = {
    where: DossierWhereUniqueInput
    create: XOR<DossierCreateWithoutClientInput, DossierUncheckedCreateWithoutClientInput>
  }

  export type DossierCreateManyClientInputEnvelope = {
    data: DossierCreateManyClientInput | DossierCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type DossierUpsertWithWhereUniqueWithoutClientInput = {
    where: DossierWhereUniqueInput
    update: XOR<DossierUpdateWithoutClientInput, DossierUncheckedUpdateWithoutClientInput>
    create: XOR<DossierCreateWithoutClientInput, DossierUncheckedCreateWithoutClientInput>
  }

  export type DossierUpdateWithWhereUniqueWithoutClientInput = {
    where: DossierWhereUniqueInput
    data: XOR<DossierUpdateWithoutClientInput, DossierUncheckedUpdateWithoutClientInput>
  }

  export type DossierUpdateManyWithWhereWithoutClientInput = {
    where: DossierScalarWhereInput
    data: XOR<DossierUpdateManyMutationInput, DossierUncheckedUpdateManyWithoutClientInput>
  }

  export type DossierScalarWhereInput = {
    AND?: DossierScalarWhereInput | DossierScalarWhereInput[]
    OR?: DossierScalarWhereInput[]
    NOT?: DossierScalarWhereInput | DossierScalarWhereInput[]
    id?: StringFilter<"Dossier"> | string
    reference?: StringFilter<"Dossier"> | string
    titre?: StringFilter<"Dossier"> | string
    typeInstallation?: EnumTypeInstallationFilter<"Dossier"> | $Enums.TypeInstallation
    statut?: EnumStatutChantierFilter<"Dossier"> | $Enums.StatutChantier
    description?: StringNullableFilter<"Dossier"> | string | null
    adresseChantier?: StringNullableFilter<"Dossier"> | string | null
    createdAt?: DateTimeFilter<"Dossier"> | Date | string
    updatedAt?: DateTimeFilter<"Dossier"> | Date | string
    clientId?: StringFilter<"Dossier"> | string
  }

  export type ClientCreateWithoutDossiersInput = {
    id?: string
    nom: string
    prenom?: string | null
    email?: string | null
    telephone?: string | null
    adresse?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUncheckedCreateWithoutDossiersInput = {
    id?: string
    nom: string
    prenom?: string | null
    email?: string | null
    telephone?: string | null
    adresse?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutDossiersInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutDossiersInput, ClientUncheckedCreateWithoutDossiersInput>
  }

  export type ChantierCreateWithoutDossierInput = {
    id?: string
    etat?: $Enums.EtatElement
    dateDebut?: Date | string | null
    dateFin?: Date | string | null
    responsable?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChantierUncheckedCreateWithoutDossierInput = {
    id?: string
    etat?: $Enums.EtatElement
    dateDebut?: Date | string | null
    dateFin?: Date | string | null
    responsable?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChantierCreateOrConnectWithoutDossierInput = {
    where: ChantierWhereUniqueInput
    create: XOR<ChantierCreateWithoutDossierInput, ChantierUncheckedCreateWithoutDossierInput>
  }

  export type DevisCreateWithoutDossierInput = {
    id?: string
    numero: string
    statut?: $Enums.StatutDevis
    montantHT: Decimal | DecimalJsLike | number | string
    tva?: Decimal | DecimalJsLike | number | string
    montantTTC: Decimal | DecimalJsLike | number | string
    dateEmission?: Date | string | null
    dateExpiration?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DevisUncheckedCreateWithoutDossierInput = {
    id?: string
    numero: string
    statut?: $Enums.StatutDevis
    montantHT: Decimal | DecimalJsLike | number | string
    tva?: Decimal | DecimalJsLike | number | string
    montantTTC: Decimal | DecimalJsLike | number | string
    dateEmission?: Date | string | null
    dateExpiration?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DevisCreateOrConnectWithoutDossierInput = {
    where: DevisWhereUniqueInput
    create: XOR<DevisCreateWithoutDossierInput, DevisUncheckedCreateWithoutDossierInput>
  }

  export type DevisCreateManyDossierInputEnvelope = {
    data: DevisCreateManyDossierInput | DevisCreateManyDossierInput[]
    skipDuplicates?: boolean
  }

  export type DiagnosticCreateWithoutDossierInput = {
    id?: string
    statut?: $Enums.StatutDiagnostic
    observations?: string | null
    conclusions?: string | null
    realiseAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiagnosticUncheckedCreateWithoutDossierInput = {
    id?: string
    statut?: $Enums.StatutDiagnostic
    observations?: string | null
    conclusions?: string | null
    realiseAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiagnosticCreateOrConnectWithoutDossierInput = {
    where: DiagnosticWhereUniqueInput
    create: XOR<DiagnosticCreateWithoutDossierInput, DiagnosticUncheckedCreateWithoutDossierInput>
  }

  export type DiagnosticCreateManyDossierInputEnvelope = {
    data: DiagnosticCreateManyDossierInput | DiagnosticCreateManyDossierInput[]
    skipDuplicates?: boolean
  }

  export type CircuitCreateWithoutDossierInput = {
    id?: string
    nom: string
    type: $Enums.TypeCircuit
    etat?: $Enums.EtatElement
    amperage?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    protections?: ProtectionCreateNestedManyWithoutCircuitInput
  }

  export type CircuitUncheckedCreateWithoutDossierInput = {
    id?: string
    nom: string
    type: $Enums.TypeCircuit
    etat?: $Enums.EtatElement
    amperage?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    protections?: ProtectionUncheckedCreateNestedManyWithoutCircuitInput
  }

  export type CircuitCreateOrConnectWithoutDossierInput = {
    where: CircuitWhereUniqueInput
    create: XOR<CircuitCreateWithoutDossierInput, CircuitUncheckedCreateWithoutDossierInput>
  }

  export type CircuitCreateManyDossierInputEnvelope = {
    data: CircuitCreateManyDossierInput | CircuitCreateManyDossierInput[]
    skipDuplicates?: boolean
  }

  export type PointControleRgieCreateWithoutDossierInput = {
    id?: string
    articleRgie: string
    libelle: string
    statut: $Enums.StatutRgie
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PointControleRgieUncheckedCreateWithoutDossierInput = {
    id?: string
    articleRgie: string
    libelle: string
    statut: $Enums.StatutRgie
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PointControleRgieCreateOrConnectWithoutDossierInput = {
    where: PointControleRgieWhereUniqueInput
    create: XOR<PointControleRgieCreateWithoutDossierInput, PointControleRgieUncheckedCreateWithoutDossierInput>
  }

  export type PointControleRgieCreateManyDossierInputEnvelope = {
    data: PointControleRgieCreateManyDossierInput | PointControleRgieCreateManyDossierInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutDossiersInput = {
    update: XOR<ClientUpdateWithoutDossiersInput, ClientUncheckedUpdateWithoutDossiersInput>
    create: XOR<ClientCreateWithoutDossiersInput, ClientUncheckedCreateWithoutDossiersInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutDossiersInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutDossiersInput, ClientUncheckedUpdateWithoutDossiersInput>
  }

  export type ClientUpdateWithoutDossiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateWithoutDossiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChantierUpsertWithoutDossierInput = {
    update: XOR<ChantierUpdateWithoutDossierInput, ChantierUncheckedUpdateWithoutDossierInput>
    create: XOR<ChantierCreateWithoutDossierInput, ChantierUncheckedCreateWithoutDossierInput>
    where?: ChantierWhereInput
  }

  export type ChantierUpdateToOneWithWhereWithoutDossierInput = {
    where?: ChantierWhereInput
    data: XOR<ChantierUpdateWithoutDossierInput, ChantierUncheckedUpdateWithoutDossierInput>
  }

  export type ChantierUpdateWithoutDossierInput = {
    id?: StringFieldUpdateOperationsInput | string
    etat?: EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement
    dateDebut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responsable?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChantierUncheckedUpdateWithoutDossierInput = {
    id?: StringFieldUpdateOperationsInput | string
    etat?: EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement
    dateDebut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responsable?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevisUpsertWithWhereUniqueWithoutDossierInput = {
    where: DevisWhereUniqueInput
    update: XOR<DevisUpdateWithoutDossierInput, DevisUncheckedUpdateWithoutDossierInput>
    create: XOR<DevisCreateWithoutDossierInput, DevisUncheckedCreateWithoutDossierInput>
  }

  export type DevisUpdateWithWhereUniqueWithoutDossierInput = {
    where: DevisWhereUniqueInput
    data: XOR<DevisUpdateWithoutDossierInput, DevisUncheckedUpdateWithoutDossierInput>
  }

  export type DevisUpdateManyWithWhereWithoutDossierInput = {
    where: DevisScalarWhereInput
    data: XOR<DevisUpdateManyMutationInput, DevisUncheckedUpdateManyWithoutDossierInput>
  }

  export type DevisScalarWhereInput = {
    AND?: DevisScalarWhereInput | DevisScalarWhereInput[]
    OR?: DevisScalarWhereInput[]
    NOT?: DevisScalarWhereInput | DevisScalarWhereInput[]
    id?: StringFilter<"Devis"> | string
    numero?: StringFilter<"Devis"> | string
    statut?: EnumStatutDevisFilter<"Devis"> | $Enums.StatutDevis
    montantHT?: DecimalFilter<"Devis"> | Decimal | DecimalJsLike | number | string
    tva?: DecimalFilter<"Devis"> | Decimal | DecimalJsLike | number | string
    montantTTC?: DecimalFilter<"Devis"> | Decimal | DecimalJsLike | number | string
    dateEmission?: DateTimeNullableFilter<"Devis"> | Date | string | null
    dateExpiration?: DateTimeNullableFilter<"Devis"> | Date | string | null
    notes?: StringNullableFilter<"Devis"> | string | null
    createdAt?: DateTimeFilter<"Devis"> | Date | string
    updatedAt?: DateTimeFilter<"Devis"> | Date | string
    dossierId?: StringFilter<"Devis"> | string
  }

  export type DiagnosticUpsertWithWhereUniqueWithoutDossierInput = {
    where: DiagnosticWhereUniqueInput
    update: XOR<DiagnosticUpdateWithoutDossierInput, DiagnosticUncheckedUpdateWithoutDossierInput>
    create: XOR<DiagnosticCreateWithoutDossierInput, DiagnosticUncheckedCreateWithoutDossierInput>
  }

  export type DiagnosticUpdateWithWhereUniqueWithoutDossierInput = {
    where: DiagnosticWhereUniqueInput
    data: XOR<DiagnosticUpdateWithoutDossierInput, DiagnosticUncheckedUpdateWithoutDossierInput>
  }

  export type DiagnosticUpdateManyWithWhereWithoutDossierInput = {
    where: DiagnosticScalarWhereInput
    data: XOR<DiagnosticUpdateManyMutationInput, DiagnosticUncheckedUpdateManyWithoutDossierInput>
  }

  export type DiagnosticScalarWhereInput = {
    AND?: DiagnosticScalarWhereInput | DiagnosticScalarWhereInput[]
    OR?: DiagnosticScalarWhereInput[]
    NOT?: DiagnosticScalarWhereInput | DiagnosticScalarWhereInput[]
    id?: StringFilter<"Diagnostic"> | string
    statut?: EnumStatutDiagnosticFilter<"Diagnostic"> | $Enums.StatutDiagnostic
    observations?: StringNullableFilter<"Diagnostic"> | string | null
    conclusions?: StringNullableFilter<"Diagnostic"> | string | null
    realiseAt?: DateTimeNullableFilter<"Diagnostic"> | Date | string | null
    createdAt?: DateTimeFilter<"Diagnostic"> | Date | string
    updatedAt?: DateTimeFilter<"Diagnostic"> | Date | string
    dossierId?: StringFilter<"Diagnostic"> | string
  }

  export type CircuitUpsertWithWhereUniqueWithoutDossierInput = {
    where: CircuitWhereUniqueInput
    update: XOR<CircuitUpdateWithoutDossierInput, CircuitUncheckedUpdateWithoutDossierInput>
    create: XOR<CircuitCreateWithoutDossierInput, CircuitUncheckedCreateWithoutDossierInput>
  }

  export type CircuitUpdateWithWhereUniqueWithoutDossierInput = {
    where: CircuitWhereUniqueInput
    data: XOR<CircuitUpdateWithoutDossierInput, CircuitUncheckedUpdateWithoutDossierInput>
  }

  export type CircuitUpdateManyWithWhereWithoutDossierInput = {
    where: CircuitScalarWhereInput
    data: XOR<CircuitUpdateManyMutationInput, CircuitUncheckedUpdateManyWithoutDossierInput>
  }

  export type CircuitScalarWhereInput = {
    AND?: CircuitScalarWhereInput | CircuitScalarWhereInput[]
    OR?: CircuitScalarWhereInput[]
    NOT?: CircuitScalarWhereInput | CircuitScalarWhereInput[]
    id?: StringFilter<"Circuit"> | string
    nom?: StringFilter<"Circuit"> | string
    type?: EnumTypeCircuitFilter<"Circuit"> | $Enums.TypeCircuit
    etat?: EnumEtatElementFilter<"Circuit"> | $Enums.EtatElement
    amperage?: IntNullableFilter<"Circuit"> | number | null
    notes?: StringNullableFilter<"Circuit"> | string | null
    createdAt?: DateTimeFilter<"Circuit"> | Date | string
    updatedAt?: DateTimeFilter<"Circuit"> | Date | string
    dossierId?: StringFilter<"Circuit"> | string
  }

  export type PointControleRgieUpsertWithWhereUniqueWithoutDossierInput = {
    where: PointControleRgieWhereUniqueInput
    update: XOR<PointControleRgieUpdateWithoutDossierInput, PointControleRgieUncheckedUpdateWithoutDossierInput>
    create: XOR<PointControleRgieCreateWithoutDossierInput, PointControleRgieUncheckedCreateWithoutDossierInput>
  }

  export type PointControleRgieUpdateWithWhereUniqueWithoutDossierInput = {
    where: PointControleRgieWhereUniqueInput
    data: XOR<PointControleRgieUpdateWithoutDossierInput, PointControleRgieUncheckedUpdateWithoutDossierInput>
  }

  export type PointControleRgieUpdateManyWithWhereWithoutDossierInput = {
    where: PointControleRgieScalarWhereInput
    data: XOR<PointControleRgieUpdateManyMutationInput, PointControleRgieUncheckedUpdateManyWithoutDossierInput>
  }

  export type PointControleRgieScalarWhereInput = {
    AND?: PointControleRgieScalarWhereInput | PointControleRgieScalarWhereInput[]
    OR?: PointControleRgieScalarWhereInput[]
    NOT?: PointControleRgieScalarWhereInput | PointControleRgieScalarWhereInput[]
    id?: StringFilter<"PointControleRgie"> | string
    articleRgie?: StringFilter<"PointControleRgie"> | string
    libelle?: StringFilter<"PointControleRgie"> | string
    statut?: EnumStatutRgieFilter<"PointControleRgie"> | $Enums.StatutRgie
    observation?: StringNullableFilter<"PointControleRgie"> | string | null
    createdAt?: DateTimeFilter<"PointControleRgie"> | Date | string
    updatedAt?: DateTimeFilter<"PointControleRgie"> | Date | string
    dossierId?: StringFilter<"PointControleRgie"> | string
  }

  export type DossierCreateWithoutChantierInput = {
    id?: string
    reference: string
    titre: string
    typeInstallation: $Enums.TypeInstallation
    statut?: $Enums.StatutChantier
    description?: string | null
    adresseChantier?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutDossiersInput
    devis?: DevisCreateNestedManyWithoutDossierInput
    diagnostics?: DiagnosticCreateNestedManyWithoutDossierInput
    circuits?: CircuitCreateNestedManyWithoutDossierInput
    pointsControle?: PointControleRgieCreateNestedManyWithoutDossierInput
  }

  export type DossierUncheckedCreateWithoutChantierInput = {
    id?: string
    reference: string
    titre: string
    typeInstallation: $Enums.TypeInstallation
    statut?: $Enums.StatutChantier
    description?: string | null
    adresseChantier?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    devis?: DevisUncheckedCreateNestedManyWithoutDossierInput
    diagnostics?: DiagnosticUncheckedCreateNestedManyWithoutDossierInput
    circuits?: CircuitUncheckedCreateNestedManyWithoutDossierInput
    pointsControle?: PointControleRgieUncheckedCreateNestedManyWithoutDossierInput
  }

  export type DossierCreateOrConnectWithoutChantierInput = {
    where: DossierWhereUniqueInput
    create: XOR<DossierCreateWithoutChantierInput, DossierUncheckedCreateWithoutChantierInput>
  }

  export type DossierUpsertWithoutChantierInput = {
    update: XOR<DossierUpdateWithoutChantierInput, DossierUncheckedUpdateWithoutChantierInput>
    create: XOR<DossierCreateWithoutChantierInput, DossierUncheckedCreateWithoutChantierInput>
    where?: DossierWhereInput
  }

  export type DossierUpdateToOneWithWhereWithoutChantierInput = {
    where?: DossierWhereInput
    data: XOR<DossierUpdateWithoutChantierInput, DossierUncheckedUpdateWithoutChantierInput>
  }

  export type DossierUpdateWithoutChantierInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    typeInstallation?: EnumTypeInstallationFieldUpdateOperationsInput | $Enums.TypeInstallation
    statut?: EnumStatutChantierFieldUpdateOperationsInput | $Enums.StatutChantier
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresseChantier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutDossiersNestedInput
    devis?: DevisUpdateManyWithoutDossierNestedInput
    diagnostics?: DiagnosticUpdateManyWithoutDossierNestedInput
    circuits?: CircuitUpdateManyWithoutDossierNestedInput
    pointsControle?: PointControleRgieUpdateManyWithoutDossierNestedInput
  }

  export type DossierUncheckedUpdateWithoutChantierInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    typeInstallation?: EnumTypeInstallationFieldUpdateOperationsInput | $Enums.TypeInstallation
    statut?: EnumStatutChantierFieldUpdateOperationsInput | $Enums.StatutChantier
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresseChantier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    devis?: DevisUncheckedUpdateManyWithoutDossierNestedInput
    diagnostics?: DiagnosticUncheckedUpdateManyWithoutDossierNestedInput
    circuits?: CircuitUncheckedUpdateManyWithoutDossierNestedInput
    pointsControle?: PointControleRgieUncheckedUpdateManyWithoutDossierNestedInput
  }

  export type DossierCreateWithoutDevisInput = {
    id?: string
    reference: string
    titre: string
    typeInstallation: $Enums.TypeInstallation
    statut?: $Enums.StatutChantier
    description?: string | null
    adresseChantier?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutDossiersInput
    chantier?: ChantierCreateNestedOneWithoutDossierInput
    diagnostics?: DiagnosticCreateNestedManyWithoutDossierInput
    circuits?: CircuitCreateNestedManyWithoutDossierInput
    pointsControle?: PointControleRgieCreateNestedManyWithoutDossierInput
  }

  export type DossierUncheckedCreateWithoutDevisInput = {
    id?: string
    reference: string
    titre: string
    typeInstallation: $Enums.TypeInstallation
    statut?: $Enums.StatutChantier
    description?: string | null
    adresseChantier?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    chantier?: ChantierUncheckedCreateNestedOneWithoutDossierInput
    diagnostics?: DiagnosticUncheckedCreateNestedManyWithoutDossierInput
    circuits?: CircuitUncheckedCreateNestedManyWithoutDossierInput
    pointsControle?: PointControleRgieUncheckedCreateNestedManyWithoutDossierInput
  }

  export type DossierCreateOrConnectWithoutDevisInput = {
    where: DossierWhereUniqueInput
    create: XOR<DossierCreateWithoutDevisInput, DossierUncheckedCreateWithoutDevisInput>
  }

  export type DossierUpsertWithoutDevisInput = {
    update: XOR<DossierUpdateWithoutDevisInput, DossierUncheckedUpdateWithoutDevisInput>
    create: XOR<DossierCreateWithoutDevisInput, DossierUncheckedCreateWithoutDevisInput>
    where?: DossierWhereInput
  }

  export type DossierUpdateToOneWithWhereWithoutDevisInput = {
    where?: DossierWhereInput
    data: XOR<DossierUpdateWithoutDevisInput, DossierUncheckedUpdateWithoutDevisInput>
  }

  export type DossierUpdateWithoutDevisInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    typeInstallation?: EnumTypeInstallationFieldUpdateOperationsInput | $Enums.TypeInstallation
    statut?: EnumStatutChantierFieldUpdateOperationsInput | $Enums.StatutChantier
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresseChantier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutDossiersNestedInput
    chantier?: ChantierUpdateOneWithoutDossierNestedInput
    diagnostics?: DiagnosticUpdateManyWithoutDossierNestedInput
    circuits?: CircuitUpdateManyWithoutDossierNestedInput
    pointsControle?: PointControleRgieUpdateManyWithoutDossierNestedInput
  }

  export type DossierUncheckedUpdateWithoutDevisInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    typeInstallation?: EnumTypeInstallationFieldUpdateOperationsInput | $Enums.TypeInstallation
    statut?: EnumStatutChantierFieldUpdateOperationsInput | $Enums.StatutChantier
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresseChantier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    chantier?: ChantierUncheckedUpdateOneWithoutDossierNestedInput
    diagnostics?: DiagnosticUncheckedUpdateManyWithoutDossierNestedInput
    circuits?: CircuitUncheckedUpdateManyWithoutDossierNestedInput
    pointsControle?: PointControleRgieUncheckedUpdateManyWithoutDossierNestedInput
  }

  export type DossierCreateWithoutDiagnosticsInput = {
    id?: string
    reference: string
    titre: string
    typeInstallation: $Enums.TypeInstallation
    statut?: $Enums.StatutChantier
    description?: string | null
    adresseChantier?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutDossiersInput
    chantier?: ChantierCreateNestedOneWithoutDossierInput
    devis?: DevisCreateNestedManyWithoutDossierInput
    circuits?: CircuitCreateNestedManyWithoutDossierInput
    pointsControle?: PointControleRgieCreateNestedManyWithoutDossierInput
  }

  export type DossierUncheckedCreateWithoutDiagnosticsInput = {
    id?: string
    reference: string
    titre: string
    typeInstallation: $Enums.TypeInstallation
    statut?: $Enums.StatutChantier
    description?: string | null
    adresseChantier?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    chantier?: ChantierUncheckedCreateNestedOneWithoutDossierInput
    devis?: DevisUncheckedCreateNestedManyWithoutDossierInput
    circuits?: CircuitUncheckedCreateNestedManyWithoutDossierInput
    pointsControle?: PointControleRgieUncheckedCreateNestedManyWithoutDossierInput
  }

  export type DossierCreateOrConnectWithoutDiagnosticsInput = {
    where: DossierWhereUniqueInput
    create: XOR<DossierCreateWithoutDiagnosticsInput, DossierUncheckedCreateWithoutDiagnosticsInput>
  }

  export type DossierUpsertWithoutDiagnosticsInput = {
    update: XOR<DossierUpdateWithoutDiagnosticsInput, DossierUncheckedUpdateWithoutDiagnosticsInput>
    create: XOR<DossierCreateWithoutDiagnosticsInput, DossierUncheckedCreateWithoutDiagnosticsInput>
    where?: DossierWhereInput
  }

  export type DossierUpdateToOneWithWhereWithoutDiagnosticsInput = {
    where?: DossierWhereInput
    data: XOR<DossierUpdateWithoutDiagnosticsInput, DossierUncheckedUpdateWithoutDiagnosticsInput>
  }

  export type DossierUpdateWithoutDiagnosticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    typeInstallation?: EnumTypeInstallationFieldUpdateOperationsInput | $Enums.TypeInstallation
    statut?: EnumStatutChantierFieldUpdateOperationsInput | $Enums.StatutChantier
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresseChantier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutDossiersNestedInput
    chantier?: ChantierUpdateOneWithoutDossierNestedInput
    devis?: DevisUpdateManyWithoutDossierNestedInput
    circuits?: CircuitUpdateManyWithoutDossierNestedInput
    pointsControle?: PointControleRgieUpdateManyWithoutDossierNestedInput
  }

  export type DossierUncheckedUpdateWithoutDiagnosticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    typeInstallation?: EnumTypeInstallationFieldUpdateOperationsInput | $Enums.TypeInstallation
    statut?: EnumStatutChantierFieldUpdateOperationsInput | $Enums.StatutChantier
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresseChantier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    chantier?: ChantierUncheckedUpdateOneWithoutDossierNestedInput
    devis?: DevisUncheckedUpdateManyWithoutDossierNestedInput
    circuits?: CircuitUncheckedUpdateManyWithoutDossierNestedInput
    pointsControle?: PointControleRgieUncheckedUpdateManyWithoutDossierNestedInput
  }

  export type DossierCreateWithoutCircuitsInput = {
    id?: string
    reference: string
    titre: string
    typeInstallation: $Enums.TypeInstallation
    statut?: $Enums.StatutChantier
    description?: string | null
    adresseChantier?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutDossiersInput
    chantier?: ChantierCreateNestedOneWithoutDossierInput
    devis?: DevisCreateNestedManyWithoutDossierInput
    diagnostics?: DiagnosticCreateNestedManyWithoutDossierInput
    pointsControle?: PointControleRgieCreateNestedManyWithoutDossierInput
  }

  export type DossierUncheckedCreateWithoutCircuitsInput = {
    id?: string
    reference: string
    titre: string
    typeInstallation: $Enums.TypeInstallation
    statut?: $Enums.StatutChantier
    description?: string | null
    adresseChantier?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    chantier?: ChantierUncheckedCreateNestedOneWithoutDossierInput
    devis?: DevisUncheckedCreateNestedManyWithoutDossierInput
    diagnostics?: DiagnosticUncheckedCreateNestedManyWithoutDossierInput
    pointsControle?: PointControleRgieUncheckedCreateNestedManyWithoutDossierInput
  }

  export type DossierCreateOrConnectWithoutCircuitsInput = {
    where: DossierWhereUniqueInput
    create: XOR<DossierCreateWithoutCircuitsInput, DossierUncheckedCreateWithoutCircuitsInput>
  }

  export type ProtectionCreateWithoutCircuitInput = {
    id?: string
    type: $Enums.TypeProtection
    calibre: number
    courbe?: $Enums.CourbeDisjoncteur | null
    typeDiff?: $Enums.TypeDifferentiel | null
    sensibilite?: number | null
    marque?: string | null
    reference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProtectionUncheckedCreateWithoutCircuitInput = {
    id?: string
    type: $Enums.TypeProtection
    calibre: number
    courbe?: $Enums.CourbeDisjoncteur | null
    typeDiff?: $Enums.TypeDifferentiel | null
    sensibilite?: number | null
    marque?: string | null
    reference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProtectionCreateOrConnectWithoutCircuitInput = {
    where: ProtectionWhereUniqueInput
    create: XOR<ProtectionCreateWithoutCircuitInput, ProtectionUncheckedCreateWithoutCircuitInput>
  }

  export type ProtectionCreateManyCircuitInputEnvelope = {
    data: ProtectionCreateManyCircuitInput | ProtectionCreateManyCircuitInput[]
    skipDuplicates?: boolean
  }

  export type DossierUpsertWithoutCircuitsInput = {
    update: XOR<DossierUpdateWithoutCircuitsInput, DossierUncheckedUpdateWithoutCircuitsInput>
    create: XOR<DossierCreateWithoutCircuitsInput, DossierUncheckedCreateWithoutCircuitsInput>
    where?: DossierWhereInput
  }

  export type DossierUpdateToOneWithWhereWithoutCircuitsInput = {
    where?: DossierWhereInput
    data: XOR<DossierUpdateWithoutCircuitsInput, DossierUncheckedUpdateWithoutCircuitsInput>
  }

  export type DossierUpdateWithoutCircuitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    typeInstallation?: EnumTypeInstallationFieldUpdateOperationsInput | $Enums.TypeInstallation
    statut?: EnumStatutChantierFieldUpdateOperationsInput | $Enums.StatutChantier
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresseChantier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutDossiersNestedInput
    chantier?: ChantierUpdateOneWithoutDossierNestedInput
    devis?: DevisUpdateManyWithoutDossierNestedInput
    diagnostics?: DiagnosticUpdateManyWithoutDossierNestedInput
    pointsControle?: PointControleRgieUpdateManyWithoutDossierNestedInput
  }

  export type DossierUncheckedUpdateWithoutCircuitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    typeInstallation?: EnumTypeInstallationFieldUpdateOperationsInput | $Enums.TypeInstallation
    statut?: EnumStatutChantierFieldUpdateOperationsInput | $Enums.StatutChantier
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresseChantier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    chantier?: ChantierUncheckedUpdateOneWithoutDossierNestedInput
    devis?: DevisUncheckedUpdateManyWithoutDossierNestedInput
    diagnostics?: DiagnosticUncheckedUpdateManyWithoutDossierNestedInput
    pointsControle?: PointControleRgieUncheckedUpdateManyWithoutDossierNestedInput
  }

  export type ProtectionUpsertWithWhereUniqueWithoutCircuitInput = {
    where: ProtectionWhereUniqueInput
    update: XOR<ProtectionUpdateWithoutCircuitInput, ProtectionUncheckedUpdateWithoutCircuitInput>
    create: XOR<ProtectionCreateWithoutCircuitInput, ProtectionUncheckedCreateWithoutCircuitInput>
  }

  export type ProtectionUpdateWithWhereUniqueWithoutCircuitInput = {
    where: ProtectionWhereUniqueInput
    data: XOR<ProtectionUpdateWithoutCircuitInput, ProtectionUncheckedUpdateWithoutCircuitInput>
  }

  export type ProtectionUpdateManyWithWhereWithoutCircuitInput = {
    where: ProtectionScalarWhereInput
    data: XOR<ProtectionUpdateManyMutationInput, ProtectionUncheckedUpdateManyWithoutCircuitInput>
  }

  export type ProtectionScalarWhereInput = {
    AND?: ProtectionScalarWhereInput | ProtectionScalarWhereInput[]
    OR?: ProtectionScalarWhereInput[]
    NOT?: ProtectionScalarWhereInput | ProtectionScalarWhereInput[]
    id?: StringFilter<"Protection"> | string
    type?: EnumTypeProtectionFilter<"Protection"> | $Enums.TypeProtection
    calibre?: IntFilter<"Protection"> | number
    courbe?: EnumCourbeDisjoncteurNullableFilter<"Protection"> | $Enums.CourbeDisjoncteur | null
    typeDiff?: EnumTypeDifferentielNullableFilter<"Protection"> | $Enums.TypeDifferentiel | null
    sensibilite?: IntNullableFilter<"Protection"> | number | null
    marque?: StringNullableFilter<"Protection"> | string | null
    reference?: StringNullableFilter<"Protection"> | string | null
    createdAt?: DateTimeFilter<"Protection"> | Date | string
    updatedAt?: DateTimeFilter<"Protection"> | Date | string
    circuitId?: StringFilter<"Protection"> | string
  }

  export type CircuitCreateWithoutProtectionsInput = {
    id?: string
    nom: string
    type: $Enums.TypeCircuit
    etat?: $Enums.EtatElement
    amperage?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dossier: DossierCreateNestedOneWithoutCircuitsInput
  }

  export type CircuitUncheckedCreateWithoutProtectionsInput = {
    id?: string
    nom: string
    type: $Enums.TypeCircuit
    etat?: $Enums.EtatElement
    amperage?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dossierId: string
  }

  export type CircuitCreateOrConnectWithoutProtectionsInput = {
    where: CircuitWhereUniqueInput
    create: XOR<CircuitCreateWithoutProtectionsInput, CircuitUncheckedCreateWithoutProtectionsInput>
  }

  export type CircuitUpsertWithoutProtectionsInput = {
    update: XOR<CircuitUpdateWithoutProtectionsInput, CircuitUncheckedUpdateWithoutProtectionsInput>
    create: XOR<CircuitCreateWithoutProtectionsInput, CircuitUncheckedCreateWithoutProtectionsInput>
    where?: CircuitWhereInput
  }

  export type CircuitUpdateToOneWithWhereWithoutProtectionsInput = {
    where?: CircuitWhereInput
    data: XOR<CircuitUpdateWithoutProtectionsInput, CircuitUncheckedUpdateWithoutProtectionsInput>
  }

  export type CircuitUpdateWithoutProtectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeCircuitFieldUpdateOperationsInput | $Enums.TypeCircuit
    etat?: EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement
    amperage?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossier?: DossierUpdateOneRequiredWithoutCircuitsNestedInput
  }

  export type CircuitUncheckedUpdateWithoutProtectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeCircuitFieldUpdateOperationsInput | $Enums.TypeCircuit
    etat?: EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement
    amperage?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dossierId?: StringFieldUpdateOperationsInput | string
  }

  export type DossierCreateWithoutPointsControleInput = {
    id?: string
    reference: string
    titre: string
    typeInstallation: $Enums.TypeInstallation
    statut?: $Enums.StatutChantier
    description?: string | null
    adresseChantier?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutDossiersInput
    chantier?: ChantierCreateNestedOneWithoutDossierInput
    devis?: DevisCreateNestedManyWithoutDossierInput
    diagnostics?: DiagnosticCreateNestedManyWithoutDossierInput
    circuits?: CircuitCreateNestedManyWithoutDossierInput
  }

  export type DossierUncheckedCreateWithoutPointsControleInput = {
    id?: string
    reference: string
    titre: string
    typeInstallation: $Enums.TypeInstallation
    statut?: $Enums.StatutChantier
    description?: string | null
    adresseChantier?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    chantier?: ChantierUncheckedCreateNestedOneWithoutDossierInput
    devis?: DevisUncheckedCreateNestedManyWithoutDossierInput
    diagnostics?: DiagnosticUncheckedCreateNestedManyWithoutDossierInput
    circuits?: CircuitUncheckedCreateNestedManyWithoutDossierInput
  }

  export type DossierCreateOrConnectWithoutPointsControleInput = {
    where: DossierWhereUniqueInput
    create: XOR<DossierCreateWithoutPointsControleInput, DossierUncheckedCreateWithoutPointsControleInput>
  }

  export type DossierUpsertWithoutPointsControleInput = {
    update: XOR<DossierUpdateWithoutPointsControleInput, DossierUncheckedUpdateWithoutPointsControleInput>
    create: XOR<DossierCreateWithoutPointsControleInput, DossierUncheckedCreateWithoutPointsControleInput>
    where?: DossierWhereInput
  }

  export type DossierUpdateToOneWithWhereWithoutPointsControleInput = {
    where?: DossierWhereInput
    data: XOR<DossierUpdateWithoutPointsControleInput, DossierUncheckedUpdateWithoutPointsControleInput>
  }

  export type DossierUpdateWithoutPointsControleInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    typeInstallation?: EnumTypeInstallationFieldUpdateOperationsInput | $Enums.TypeInstallation
    statut?: EnumStatutChantierFieldUpdateOperationsInput | $Enums.StatutChantier
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresseChantier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutDossiersNestedInput
    chantier?: ChantierUpdateOneWithoutDossierNestedInput
    devis?: DevisUpdateManyWithoutDossierNestedInput
    diagnostics?: DiagnosticUpdateManyWithoutDossierNestedInput
    circuits?: CircuitUpdateManyWithoutDossierNestedInput
  }

  export type DossierUncheckedUpdateWithoutPointsControleInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    typeInstallation?: EnumTypeInstallationFieldUpdateOperationsInput | $Enums.TypeInstallation
    statut?: EnumStatutChantierFieldUpdateOperationsInput | $Enums.StatutChantier
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresseChantier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    chantier?: ChantierUncheckedUpdateOneWithoutDossierNestedInput
    devis?: DevisUncheckedUpdateManyWithoutDossierNestedInput
    diagnostics?: DiagnosticUncheckedUpdateManyWithoutDossierNestedInput
    circuits?: CircuitUncheckedUpdateManyWithoutDossierNestedInput
  }

  export type DossierCreateManyClientInput = {
    id?: string
    reference: string
    titre: string
    typeInstallation: $Enums.TypeInstallation
    statut?: $Enums.StatutChantier
    description?: string | null
    adresseChantier?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DossierUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    typeInstallation?: EnumTypeInstallationFieldUpdateOperationsInput | $Enums.TypeInstallation
    statut?: EnumStatutChantierFieldUpdateOperationsInput | $Enums.StatutChantier
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresseChantier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chantier?: ChantierUpdateOneWithoutDossierNestedInput
    devis?: DevisUpdateManyWithoutDossierNestedInput
    diagnostics?: DiagnosticUpdateManyWithoutDossierNestedInput
    circuits?: CircuitUpdateManyWithoutDossierNestedInput
    pointsControle?: PointControleRgieUpdateManyWithoutDossierNestedInput
  }

  export type DossierUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    typeInstallation?: EnumTypeInstallationFieldUpdateOperationsInput | $Enums.TypeInstallation
    statut?: EnumStatutChantierFieldUpdateOperationsInput | $Enums.StatutChantier
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresseChantier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chantier?: ChantierUncheckedUpdateOneWithoutDossierNestedInput
    devis?: DevisUncheckedUpdateManyWithoutDossierNestedInput
    diagnostics?: DiagnosticUncheckedUpdateManyWithoutDossierNestedInput
    circuits?: CircuitUncheckedUpdateManyWithoutDossierNestedInput
    pointsControle?: PointControleRgieUncheckedUpdateManyWithoutDossierNestedInput
  }

  export type DossierUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    typeInstallation?: EnumTypeInstallationFieldUpdateOperationsInput | $Enums.TypeInstallation
    statut?: EnumStatutChantierFieldUpdateOperationsInput | $Enums.StatutChantier
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresseChantier?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevisCreateManyDossierInput = {
    id?: string
    numero: string
    statut?: $Enums.StatutDevis
    montantHT: Decimal | DecimalJsLike | number | string
    tva?: Decimal | DecimalJsLike | number | string
    montantTTC: Decimal | DecimalJsLike | number | string
    dateEmission?: Date | string | null
    dateExpiration?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiagnosticCreateManyDossierInput = {
    id?: string
    statut?: $Enums.StatutDiagnostic
    observations?: string | null
    conclusions?: string | null
    realiseAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CircuitCreateManyDossierInput = {
    id?: string
    nom: string
    type: $Enums.TypeCircuit
    etat?: $Enums.EtatElement
    amperage?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PointControleRgieCreateManyDossierInput = {
    id?: string
    articleRgie: string
    libelle: string
    statut: $Enums.StatutRgie
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DevisUpdateWithoutDossierInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDevisFieldUpdateOperationsInput | $Enums.StatutDevis
    montantHT?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montantTTC?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateEmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevisUncheckedUpdateWithoutDossierInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDevisFieldUpdateOperationsInput | $Enums.StatutDevis
    montantHT?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montantTTC?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateEmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevisUncheckedUpdateManyWithoutDossierInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDevisFieldUpdateOperationsInput | $Enums.StatutDevis
    montantHT?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tva?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    montantTTC?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dateEmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticUpdateWithoutDossierInput = {
    id?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDiagnosticFieldUpdateOperationsInput | $Enums.StatutDiagnostic
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    conclusions?: NullableStringFieldUpdateOperationsInput | string | null
    realiseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticUncheckedUpdateWithoutDossierInput = {
    id?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDiagnosticFieldUpdateOperationsInput | $Enums.StatutDiagnostic
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    conclusions?: NullableStringFieldUpdateOperationsInput | string | null
    realiseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticUncheckedUpdateManyWithoutDossierInput = {
    id?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDiagnosticFieldUpdateOperationsInput | $Enums.StatutDiagnostic
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    conclusions?: NullableStringFieldUpdateOperationsInput | string | null
    realiseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CircuitUpdateWithoutDossierInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeCircuitFieldUpdateOperationsInput | $Enums.TypeCircuit
    etat?: EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement
    amperage?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    protections?: ProtectionUpdateManyWithoutCircuitNestedInput
  }

  export type CircuitUncheckedUpdateWithoutDossierInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeCircuitFieldUpdateOperationsInput | $Enums.TypeCircuit
    etat?: EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement
    amperage?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    protections?: ProtectionUncheckedUpdateManyWithoutCircuitNestedInput
  }

  export type CircuitUncheckedUpdateManyWithoutDossierInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeCircuitFieldUpdateOperationsInput | $Enums.TypeCircuit
    etat?: EnumEtatElementFieldUpdateOperationsInput | $Enums.EtatElement
    amperage?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointControleRgieUpdateWithoutDossierInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleRgie?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutRgieFieldUpdateOperationsInput | $Enums.StatutRgie
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointControleRgieUncheckedUpdateWithoutDossierInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleRgie?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutRgieFieldUpdateOperationsInput | $Enums.StatutRgie
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointControleRgieUncheckedUpdateManyWithoutDossierInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleRgie?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutRgieFieldUpdateOperationsInput | $Enums.StatutRgie
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProtectionCreateManyCircuitInput = {
    id?: string
    type: $Enums.TypeProtection
    calibre: number
    courbe?: $Enums.CourbeDisjoncteur | null
    typeDiff?: $Enums.TypeDifferentiel | null
    sensibilite?: number | null
    marque?: string | null
    reference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProtectionUpdateWithoutCircuitInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeProtectionFieldUpdateOperationsInput | $Enums.TypeProtection
    calibre?: IntFieldUpdateOperationsInput | number
    courbe?: NullableEnumCourbeDisjoncteurFieldUpdateOperationsInput | $Enums.CourbeDisjoncteur | null
    typeDiff?: NullableEnumTypeDifferentielFieldUpdateOperationsInput | $Enums.TypeDifferentiel | null
    sensibilite?: NullableIntFieldUpdateOperationsInput | number | null
    marque?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProtectionUncheckedUpdateWithoutCircuitInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeProtectionFieldUpdateOperationsInput | $Enums.TypeProtection
    calibre?: IntFieldUpdateOperationsInput | number
    courbe?: NullableEnumCourbeDisjoncteurFieldUpdateOperationsInput | $Enums.CourbeDisjoncteur | null
    typeDiff?: NullableEnumTypeDifferentielFieldUpdateOperationsInput | $Enums.TypeDifferentiel | null
    sensibilite?: NullableIntFieldUpdateOperationsInput | number | null
    marque?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProtectionUncheckedUpdateManyWithoutCircuitInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeProtectionFieldUpdateOperationsInput | $Enums.TypeProtection
    calibre?: IntFieldUpdateOperationsInput | number
    courbe?: NullableEnumCourbeDisjoncteurFieldUpdateOperationsInput | $Enums.CourbeDisjoncteur | null
    typeDiff?: NullableEnumTypeDifferentielFieldUpdateOperationsInput | $Enums.TypeDifferentiel | null
    sensibilite?: NullableIntFieldUpdateOperationsInput | number | null
    marque?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}