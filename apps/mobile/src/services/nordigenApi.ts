import { emptySplitApi as api } from './emptyApi';

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    retrieveAccountMetadata: build.query<
      RetrieveAccountMetadataApiResponse,
      RetrieveAccountMetadataApiArg
    >({
      query: (queryArg) => ({ url: `/api/v2/accounts/${queryArg.id}/` }),
    }),
    retrieveAccountBalances: build.query<
      RetrieveAccountBalancesApiResponse,
      RetrieveAccountBalancesApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/accounts/${queryArg.id}/balances/`,
      }),
    }),
    retrieveAccountDetails: build.query<
      RetrieveAccountDetailsApiResponse,
      RetrieveAccountDetailsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/accounts/${queryArg.id}/details/`,
      }),
    }),
    retrieveAccountTransactions: build.query<
      RetrieveAccountTransactionsApiResponse,
      RetrieveAccountTransactionsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/accounts/${queryArg.id}/transactions/`,
        params: {
          date_from: queryArg.dateFrom,
          date_to: queryArg.dateTo,
        },
      }),
    }),
    retrieveAllEuAsForAnEndUser: build.query<
      RetrieveAllEuAsForAnEndUserApiResponse,
      RetrieveAllEuAsForAnEndUserApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/agreements/enduser/`,
        params: {
          limit: queryArg.limit,
          offset: queryArg.offset,
        },
      }),
    }),
    createEua: build.mutation<CreateEuaApiResponse, CreateEuaApiArg>({
      query: (queryArg) => ({
        url: `/api/v2/agreements/enduser/`,
        method: 'POST',
        body: queryArg.endUserAgreementRequest,
      }),
    }),
    retrieveEuaById: build.query<
      RetrieveEuaByIdApiResponse,
      RetrieveEuaByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/agreements/enduser/${queryArg.id}/`,
      }),
    }),
    deleteEuaById: build.mutation<
      DeleteEuaByIdApiResponse,
      DeleteEuaByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/agreements/enduser/${queryArg.id}/`,
        method: 'DELETE',
      }),
    }),
    acceptEua: build.mutation<AcceptEuaApiResponse, AcceptEuaApiArg>({
      query: (queryArg) => ({
        url: `/api/v2/agreements/enduser/${queryArg.id}/accept/`,
        method: 'PUT',
        body: queryArg.enduserAcceptanceDetailsRequest,
      }),
    }),
    retrieveAllSupportedInstitutionsInAGivenCountry: build.query<
      RetrieveAllSupportedInstitutionsInAGivenCountryApiResponse,
      RetrieveAllSupportedInstitutionsInAGivenCountryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/institutions/`,
        params: {
          access_scopes_supported: queryArg.accessScopesSupported,
          account_selection_supported: queryArg.accountSelectionSupported,
          business_accounts_supported: queryArg.businessAccountsSupported,
          card_accounts_supported: queryArg.cardAccountsSupported,
          corporate_accounts_supported: queryArg.corporateAccountsSupported,
          country: queryArg.country,
          payment_submission_supported: queryArg.paymentSubmissionSupported,
          payments_enabled: queryArg.paymentsEnabled,
          pending_transactions_supported: queryArg.pendingTransactionsSupported,
          private_accounts_supported: queryArg.privateAccountsSupported,
          read_debtor_account_supported: queryArg.readDebtorAccountSupported,
          read_refund_account_supported: queryArg.readRefundAccountSupported,
          ssn_verification_supported: queryArg.ssnVerificationSupported,
        },
      }),
    }),
    retrieveInstitution: build.query<
      RetrieveInstitutionApiResponse,
      RetrieveInstitutionApiArg
    >({
      query: (queryArg) => ({ url: `/api/v2/institutions/${queryArg.id}/` }),
    }),
    retrieveAllRequisitions: build.query<
      RetrieveAllRequisitionsApiResponse,
      RetrieveAllRequisitionsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/requisitions/`,
        params: {
          limit: queryArg.limit,
          offset: queryArg.offset,
        },
      }),
    }),
    createRequisition: build.mutation<
      CreateRequisitionApiResponse,
      CreateRequisitionApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/requisitions/`,
        method: 'POST',
        body: queryArg.requisitionRequest,
      }),
    }),
    requisitionById: build.query<
      RequisitionByIdApiResponse,
      RequisitionByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/v2/requisitions/${queryArg.id}/` }),
    }),
    deleteRequisitionById: build.mutation<
      DeleteRequisitionByIdApiResponse,
      DeleteRequisitionByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/requisitions/${queryArg.id}/`,
        method: 'DELETE',
      }),
    }),
    postApiV2TokenNew: build.mutation<
      PostApiV2TokenNewApiResponse,
      PostApiV2TokenNewApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/token/new/`,
        method: 'POST',
        body: queryArg.jwtObtainPairRequest,
      }),
    }),
    getANewAccessToken: build.mutation<
      GetANewAccessTokenApiResponse,
      GetANewAccessTokenApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/token/refresh/`,
        method: 'POST',
        body: queryArg.jwtRefreshRequest,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as nordigenApi };
export type RetrieveAccountMetadataApiResponse =
  /** status 200 Sample account metadata */ AccountRead;
export type RetrieveAccountMetadataApiArg = {
  id: string;
};
export type RetrieveAccountBalancesApiResponse =
  /** status 200 Sample account balances */ AccountBalance;
export type RetrieveAccountBalancesApiArg = {
  id: string;
};
export type RetrieveAccountDetailsApiResponse =
  /** status 200 Sample account details */ AccountDetail;
export type RetrieveAccountDetailsApiArg = {
  id: string;
};
export type RetrieveAccountTransactionsApiResponse =
  /** status 200 Sample account transactions */ AccountTransactions;
export type RetrieveAccountTransactionsApiArg = {
  dateFrom?: string;
  dateTo?: string;
  id: string;
};
export type RetrieveAllEuAsForAnEndUserApiResponse =
  /** status 200 Retrieve all end user agreements */ PaginatedEndUserAgreementListRead;
export type RetrieveAllEuAsForAnEndUserApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial zero-based index from which to return the results. */
  offset?: number;
};
export type CreateEuaApiResponse =
  /** status 201 Create enduser agreement */ EndUserAgreementRead;
export type CreateEuaApiArg = {
  endUserAgreementRequest: EndUserAgreementRequest;
};
export type RetrieveEuaByIdApiResponse =
  /** status 200 Retrieve end user agreement by ID */ EndUserAgreementRead;
export type RetrieveEuaByIdApiArg = {
  /** A UUID string identifying this end user agreement. */
  id: string;
};
export type DeleteEuaByIdApiResponse =
  /** status 200  */ SuccessfulDeleteResponse;
export type DeleteEuaByIdApiArg = {
  /** A UUID string identifying this end user agreement. */
  id: string;
};
export type AcceptEuaApiResponse =
  /** status 200 Accept end user agreement */ EndUserAgreementRead;
export type AcceptEuaApiArg = {
  /** A UUID string identifying this end user agreement. */
  id: string;
  enduserAcceptanceDetailsRequest: EnduserAcceptanceDetailsRequest;
};
export type RetrieveAllSupportedInstitutionsInAGivenCountryApiResponse =
  /** status 200 list of supported Institutions in the country */ Integration[];
export type RetrieveAllSupportedInstitutionsInAGivenCountryApiArg = {
  /** Boolean value, indicating if access scopes are supported */
  accessScopesSupported?: string;
  /** Boolean value, indicating if account selection is supported */
  accountSelectionSupported?: string;
  /** Boolean value, indicating if business accounts are supported */
  businessAccountsSupported?: string;
  /** Boolean value, indicating if card accounts are supported */
  cardAccountsSupported?: string;
  /** Boolean value, indicating if corporate accounts are supported */
  corporateAccountsSupported?: string;
  /** ISO 3166 two-character country code */
  country?: string;
  /** Boolean value, indicating if payment submission is supported */
  paymentSubmissionSupported?: string;
  /** Boolean value, indicating if payments are supported */
  paymentsEnabled?: string;
  /** Boolean value, indicating if pending transactions are supported */
  pendingTransactionsSupported?: string;
  /** Boolean value, indicating if private accounts are supported */
  privateAccountsSupported?: string;
  /** Boolean value, indicating if debtor account can be read before submitting payment */
  readDebtorAccountSupported?: string;
  /** Boolean value, indicating if read refund account is supported */
  readRefundAccountSupported?: string;
  /** Boolean value, indicating if ssn verification is supported */
  ssnVerificationSupported?: string;
};
export type RetrieveInstitutionApiResponse =
  /** status 200 Retrieve institution by id */ IntegrationRetrieve;
export type RetrieveInstitutionApiArg = {
  id: string;
};
export type RetrieveAllRequisitionsApiResponse =
  /** status 200 Retrieve all requisitions */ PaginatedRequisitionListRead;
export type RetrieveAllRequisitionsApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial zero-based index from which to return the results. */
  offset?: number;
};
export type CreateRequisitionApiResponse =
  /** status 201 Requisition has been successfully created */ SpectacularRequisitionRead;
export type CreateRequisitionApiArg = {
  requisitionRequest: RequisitionRequest;
};
export type RequisitionByIdApiResponse =
  /** status 200 Get requisition by ID */ RequisitionRead;
export type RequisitionByIdApiArg = {
  /** A UUID string identifying this requisition. */
  id: string;
};
export type DeleteRequisitionByIdApiResponse =
  /** status 200  */ SuccessfulDeleteResponse;
export type DeleteRequisitionByIdApiArg = {
  /** A UUID string identifying this requisition. */
  id: string;
};
export type PostApiV2TokenNewApiResponse =
  /** status 200 Obtain JWT response. */ SpectacularJwtObtainRead;
export type PostApiV2TokenNewApiArg = {
  jwtObtainPairRequest: JwtObtainPairRequest;
};
export type GetANewAccessTokenApiResponse =
  /** status 200 Refresh access token. */ SpectacularJwtRefreshRead;
export type GetANewAccessTokenApiArg = {
  jwtRefreshRequest: JwtRefreshRequest;
};
export type Account = {};
export type AccountRead = {
  /** The ID of this Account, used to refer to this account in other API calls. */
  id?: string;
  /** The date & time at which the account object was created. */
  created?: string;
  /** The date & time at which the account object was last accessed. */
  last_accessed?: string;
  /** The Account IBAN */
  iban?: string;
  /** The Account BBAN */
  bban?: string;
  /** The processing status of this account. */
  status?: string;
  /** The ASPSP associated with this account. */
  institution_id?: string;
  /** The name of the account owner. */
  owner_name?: string;
};
export type ErrorResponse = {
  summary: string;
  detail: string;
  type?: string;
  status_code: number;
};
export type BalanceAmountSchema = {
  /** amount */
  amount: string;
  /** currency */
  currency: string;
};
export type BalanceSchema = {
  /** balanceAmount */
  balanceAmount: BalanceAmountSchema;
  /** balanceType */
  balanceType: string;
  /** creditLimitIncluded */
  creditLimitIncluded?: boolean;
  /** lastChangeDateTime */
  lastChangeDateTime?: string;
  /** referenceDate */
  referenceDate?: string;
  /** lastCommittedTransaction */
  lastCommittedTransaction?: string;
};
export type AccountBalance = {
  balances?: BalanceSchema[];
};
export type OwnerAddressStructuredSchema = {
  /** streetName */
  streetName?: string;
  /** buildingNumber */
  buildingNumber?: string;
  /** townName */
  townName?: string;
  /** postCode */
  postCode?: string;
  /** country */
  country?: string;
};
export type DetailSchema = {
  /** resourceId */
  resourceId?: string;
  /** iban */
  iban?: string;
  /** bban */
  bban?: string;
  /** SortCodeAccountNumber returned by some UK banks (6 digit Sort Code and 8 digit Account Number) */
  scan?: string;
  /** msisdn */
  msisdn?: string;
  /** currency */
  currency?: string;
  /** ownerName */
  ownerName?: string;
  /** name */
  name?: string;
  /** displayName */
  displayName?: string;
  /** product */
  product?: string;
  /** cashAccountType */
  cashAccountType?: string;
  /** status */
  status?: string;
  /** bic */
  bic?: string;
  /** linkedAccounts */
  linkedAccounts?: string;
  /** maskedPan */
  maskedPan?: string;
  /** usage */
  usage?: string;
  /** details */
  details?: string;
  /** ownerAddressUnstructured */
  ownerAddressUnstructured?: string[];
  /** ownerAddressStructured */
  ownerAddressStructured?: OwnerAddressStructuredSchema;
};
export type AccountDetail = {
  /** account */
  account: DetailSchema;
};
export type TransactionAmountSchema = {
  /** amount */
  amount: string;
  /** currency */
  currency: string;
};
export type CurrencyExchangeSchema = {
  /** sourceCurrency */
  sourceCurrency?: string;
  /** exchangeRate */
  exchangeRate?: string;
  /** unitCurrency */
  unitCurrency?: string;
  /** targetCurrency */
  targetCurrency?: string;
  /** quotationDate */
  quotationDate?: string;
  /** contractIdentification */
  contractIdentification?: string;
};
export type AccountSchema = {
  /** iban */
  iban?: string;
  /** bban */
  bban?: string;
  /** pan */
  pan?: string;
  /** maskedPan */
  maskedPan?: string;
  /** msisdn */
  msisdn?: string;
  /** currency */
  currency?: string;
};
export type TransactionSchema = {
  /** transactionId */
  transactionId?: string;
  /** entryReference */
  entryReference?: string;
  /** endToEndId */
  endToEndId?: string;
  /** mandateId */
  mandateId?: string;
  /** checkId */
  checkId?: string;
  /** creditorId */
  creditorId?: string;
  /** bookingDate */
  bookingDate?: string;
  /** valueDate */
  valueDate?: string;
  /** bookingDateTime */
  bookingDateTime?: string;
  /** valueDateTime */
  valueDateTime?: string;
  /** transactionAmount */
  transactionAmount: TransactionAmountSchema;
  currencyExchange?: CurrencyExchangeSchema[];
  /** creditorName */
  creditorName?: string;
  /** creditorAccount */
  creditorAccount?: AccountSchema;
  /** ultimateCreditor */
  ultimateCreditor?: string;
  /** debtorName */
  debtorName?: string;
  /** debtorAccount */
  debtorAccount?: AccountSchema;
  /** ultimateDebtor */
  ultimateDebtor?: string;
  /** remittanceInformationUnstructured */
  remittanceInformationUnstructured?: string;
  /** remittanceInformationUnstructuredArray */
  remittanceInformationUnstructuredArray?: string[];
  /** remittanceInformationStructured */
  remittanceInformationStructured?: string;
  /** remittanceInformationStructuredArray */
  remittanceInformationStructuredArray?: string[];
  /** additionalInformation */
  additionalInformation?: string;
  /** purposeCode */
  purposeCode?: string;
  /** bankTransactionCode */
  bankTransactionCode?: string;
  /** proprietaryBankTransactionCode */
  proprietaryBankTransactionCode?: string;
  /** internalTransactionId */
  internalTransactionId?: string;
};
export type BankTransaction = {
  booked: TransactionSchema[];
  pending?: TransactionSchema[];
};
export type AccountTransactions = {
  /** transactions */
  transactions: BankTransaction;
};
export type EndUserAgreement = {
  /** an Institution ID for this EUA */
  institution_id: string;
  /** Maximum number of days of transaction data to retrieve. */
  max_historical_days?: number;
  /** Number of days from acceptance that the access can be used. */
  access_valid_for_days?: number;
  /** Array containing one or several values of ['balances', 'details', 'transactions'] */
  access_scope?: any[];
};
export type EndUserAgreementRead = {
  /** The ID of this End User Agreement, used to refer to this end user agreement in other API calls. */
  id?: string;
  /** The date & time at which the end user agreement was created. */
  created?: string;
  /** an Institution ID for this EUA */
  institution_id: string;
  /** Maximum number of days of transaction data to retrieve. */
  max_historical_days?: number;
  /** Number of days from acceptance that the access can be used. */
  access_valid_for_days?: number;
  /** Array containing one or several values of ['balances', 'details', 'transactions'] */
  access_scope?: any[];
  /** The date & time at which the end user accepted the agreement. */
  accepted?: string | null;
};
export type PaginatedEndUserAgreementList = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: EndUserAgreement[];
};
export type PaginatedEndUserAgreementListRead = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: EndUserAgreementRead[];
};
export type EndUserAgreementRequest = {
  /** an Institution ID for this EUA */
  institution_id: string;
  /** Maximum number of days of transaction data to retrieve. */
  max_historical_days?: number;
  /** Number of days from acceptance that the access can be used. */
  access_valid_for_days?: number;
  /** Array containing one or several values of ['balances', 'details', 'transactions'] */
  access_scope?: any[];
};
export type SuccessfulDeleteResponse = {
  summary: string;
  detail: string;
};
export type EnduserAcceptanceDetailsRequest = {
  user_agent: string;
  ip_address: string;
};
export type Integration = {
  id: string;
  name: string;
  bic?: string;
  transaction_total_days?: string;
  max_access_valid_for_days?: string;
  countries: string[];
  logo: string;
};
export type IntegrationRetrieve = {
  id: string;
  name: string;
  bic?: string;
  transaction_total_days?: string;
  max_access_valid_for_days?: string;
  countries: string[];
  logo: string;
  supported_payments: {
    [key: string]: any;
  };
  supported_features: any[];
  identification_codes: any[];
};
export type Requisition = {
  /** redirect URL to your application after end-user authorization with ASPSP */
  redirect: string | null;
  /** an Institution ID for this Requisition */
  institution_id: string;
  /** EUA associated with this requisition */
  agreement?: string;
  /** additional ID to identify the end user */
  reference?: string;
  /** A two-letter country code (ISO 639-1) */
  user_language?: string;
  /** optional SSN field to verify ownership of the account */
  ssn?: string;
  /** option to enable account selection view for the end user */
  account_selection?: boolean;
  /** enable redirect back to the client after account list received */
  redirect_immediate?: boolean;
};
export type StatusEnum =
  | 'CR'
  | 'ID'
  | 'LN'
  | 'RJ'
  | 'ER'
  | 'SU'
  | 'EX'
  | 'GC'
  | 'UA'
  | 'GA'
  | 'SA';
export type RequisitionRead = {
  id?: string;
  /** The date & time at which the requisition was created. */
  created?: string | null;
  /** redirect URL to your application after end-user authorization with ASPSP */
  redirect: string | null;
  /** status of this requisition */
  status?: StatusEnum;
  /** an Institution ID for this Requisition */
  institution_id: string;
  /** EUA associated with this requisition */
  agreement?: string;
  /** additional ID to identify the end user */
  reference?: string;
  /** array of account IDs retrieved within a scope of this requisition */
  accounts?: string[];
  /** A two-letter country code (ISO 639-1) */
  user_language?: string;
  /** link to initiate authorization with Institution */
  link?: string;
  /** optional SSN field to verify ownership of the account */
  ssn?: string;
  /** option to enable account selection view for the end user */
  account_selection?: boolean;
  /** enable redirect back to the client after account list received */
  redirect_immediate?: boolean;
};
export type PaginatedRequisitionList = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Requisition[];
};
export type PaginatedRequisitionListRead = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: RequisitionRead[];
};
export type SpectacularRequisition = {
  /** redirect URL to your application after end-user authorization with ASPSP */
  redirect: string | null;
  /** an Institution ID for this Requisition */
  institution_id: string;
  /** EUA associated with this requisition */
  agreement?: string;
  /** additional ID to identify the end user */
  reference?: string;
  /** A two-letter country code (ISO 639-1) */
  user_language?: string;
  /** optional SSN field to verify ownership of the account */
  ssn?: string;
  /** option to enable account selection view for the end user */
  account_selection?: boolean;
  /** enable redirect back to the client after account list received */
  redirect_immediate?: boolean;
};
export type SpectacularRequisitionRead = {
  id?: string;
  /** The date & time at which the requisition was created. */
  created?: string | null;
  /** redirect URL to your application after end-user authorization with ASPSP */
  redirect: string | null;
  /** status of this requisition */
  status?: StatusEnum;
  /** an Institution ID for this Requisition */
  institution_id: string;
  /** EUA associated with this requisition */
  agreement?: string;
  /** additional ID to identify the end user */
  reference?: string;
  /** array of account IDs retrieved within a scope of this requisition */
  accounts?: any[];
  /** A two-letter country code (ISO 639-1) */
  user_language?: string;
  /** link to initiate authorization with Institution */
  link?: string;
  /** optional SSN field to verify ownership of the account */
  ssn?: string;
  /** option to enable account selection view for the end user */
  account_selection?: boolean;
  /** enable redirect back to the client after account list received */
  redirect_immediate?: boolean;
};
export type RequisitionRequest = {
  /** redirect URL to your application after end-user authorization with ASPSP */
  redirect: string | null;
  /** an Institution ID for this Requisition */
  institution_id: string;
  /** EUA associated with this requisition */
  agreement?: string;
  /** additional ID to identify the end user */
  reference?: string;
  /** A two-letter country code (ISO 639-1) */
  user_language?: string;
  /** optional SSN field to verify ownership of the account */
  ssn?: string;
  /** option to enable account selection view for the end user */
  account_selection?: boolean;
  /** enable redirect back to the client after account list received */
  redirect_immediate?: boolean;
};
export type SpectacularJwtObtain = {};
export type SpectacularJwtObtainRead = {
  /** Your access token */
  access?: string;
  /** Access token expires in seconds */
  access_expires?: number;
  /** Your refresh token */
  refresh?: string;
  /** Refresh token expires in seconds */
  refresh_expires?: number;
};
export type JwtObtainPairRequest = {
  /** Secret id from /user-secrets/ */
  secret_id: string;
  /** Secret key from /user-secrets/ */
  secret_key: string;
};
export type SpectacularJwtRefresh = {};
export type SpectacularJwtRefreshRead = {
  /** Your access token */
  access?: string;
  /** Access token expires in seconds */
  access_expires?: number;
};
export type JwtRefreshRequest = {
  refresh: string;
};
export const {
  useRetrieveAccountMetadataQuery,
  useRetrieveAccountBalancesQuery,
  useRetrieveAccountDetailsQuery,
  useRetrieveAccountTransactionsQuery,
  useRetrieveAllEuAsForAnEndUserQuery,
  useCreateEuaMutation,
  useRetrieveEuaByIdQuery,
  useDeleteEuaByIdMutation,
  useAcceptEuaMutation,
  useRetrieveAllSupportedInstitutionsInAGivenCountryQuery,
  useRetrieveInstitutionQuery,
  useRetrieveAllRequisitionsQuery,
  useCreateRequisitionMutation,
  useRequisitionByIdQuery,
  useDeleteRequisitionByIdMutation,
  usePostApiV2TokenNewMutation,
  useGetANewAccessTokenMutation,
} = injectedRtkApi;
