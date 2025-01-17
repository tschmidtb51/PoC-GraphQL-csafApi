/**
 * csafServerStage: "roduction" means, that the introspection of GraphQL is deactivated for security reasons
 *  Just use "test", "integration", "engeneering" or something else to have the introspection active
 * 
 * csafIntermediate:  {
 *  connector: "./elasticsearch/connector"
 * }
 * 
 * OR
 * 
 * csafIntermediate:  {
 *  connector: "./mysql/connector"
 * }
 */
module.exports = {
    csafServer: {
        csafDepthLimit: 10,
        csafServerStage: "engeneering",
        logFile: "./csaf_api/logs/server.log"
    },
    csafIntermediate:  {
        connector: "./elasticsearch/connector",
        defaultTLP: "WHITE",
        branchesMaxDepth: 3,
        defaultMaxDocuments: 10,
        logFile: "./logs/intermediate.log"
    },
    csafElasticsearch:  {
        elasticsearchIndex: "csaf_documents",
        requestTimeout: 30000,
        host: `localhost`,
        port: "9200",
        user: "elastic",
        password: "***",
        maxPreQuerySize: 10000,
        logFile: "./logs/elasticsearch.log"
    },
    csafMysql:  {
        requestTimeout: 30000,
        host: "localhost",
        port: "3306",
        user: "csaf",
        password: "***",
        database: "csaf",
        insecureAuth : true
    }
};
