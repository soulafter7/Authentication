// Update with your config settings.

module.exports = {
  development: {
    client: 'mssql',
    connection: {
        database: 'authentication',
        user: 'revo',
        password: 'P@ssw0rd',
        host: '192.168.4.157',
        port: 1433,
    },
    migrations: {
        directory: __dirname + '/migrations',
    }
    // },
    // seeds: {
    //     directory: __dirname + '/db/seeds',
    // },
}

};
