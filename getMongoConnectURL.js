exports.getMongoConnectURL = (url, dbUser, dbPassword, dbName) => {
    return url.replace('<user>', dbUser)
    .replace('<password>', dbPassword)
    .replace('<dbname>', dbName)
}