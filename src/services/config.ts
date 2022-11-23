const ConfigService = {
    MatrixUrl: import.meta.env.VITE_MATRIX_SERVER_URL || 'https://matrix.org',
    logLevel: import.meta.env.VITE_LOG_LEVEL || 'silly',
    appStoragePrefix: 'skeleton-store',
    storeName: 'skeleton-store-mx-sync',
    appDataStore: 'skeleton-store-data',
    cryptoStoreName: 'matrix-js-sdk:crypto',
    defaultAvatar: '/assets/default-avatar.png'
}

export default ConfigService;