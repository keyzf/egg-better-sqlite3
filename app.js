'use strict';
const Database = require('better-sqlite3');

module.exports = app => {
  app.addSingleton('betterSqlite3', createSqlite3);
};

function createSqlite3(config, app) {
  app.logger.info(`sqlite3 config: ${config}`);
  const client = new Database(config.file, {
    verbose: console.log,
    fileMustExist: true,
  });
  app.logger.info('sqlite3 connected!');
  return client;
}
