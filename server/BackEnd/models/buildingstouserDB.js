const pg = require('pg');

const config = {
    host: 'azureservergroup3.postgres.database.azure.com',
    // Do not hard code your username and password.
    // Consider using Node environment variables.
    user: 'myadmin@azureservergroup3',
    password: '12Asdfgh',
    database: 'pathfinder',
    port: 5432,
    ssl: true
};

const client = new pg.Client(config);

client.connect();


//var pg = require("pg");
//var conStr = "host = azureservergroup3.postgres.database.azure.com port = 5432 dbname = pathfinder user = myadmin@azureservergroup3 password = 12Asdfgh sslmode = require";
////var conStr = "postgres://postgres:1234@localhost:5432/pathfinder";

////host = pathfinderserver.postgres.database.azure.com port = 5432 dbname = { your_database } user = sa@pathfinderserver password = { your_password } sslmode = require
//var client = new pg.Client(conStr);
//client.connect();

var buildingstouser =
{
    //getAllmaterials: function (callback) {
        
    //    return client.query(
    //        'select * from materials;', callback);
    //}
    //,
    getbuildingstouserByid: function (buildingstouserid, callback) {
        var queryString = 'select * from buildingstouser where buildingstouserid=' + buildingstouserid + ';';
        console.log(queryString);
        return client.query(queryString, callback);
    }
    ,
    addbuildingstouser: function (buildingstouser, callback) {
        var queryString = "insert into buildingstouser (userlistid, buildingtypeid, buildingage, presentvalue, newvalue, createdate  )  values( " +
            buildingstouser.userlistid + "," +
            buildingstouser.buildingtypeid + "," +
            buildingstouser.buildingage + "," +
            buildingstouser.presentvalue + "," +
            buildingstouser.newvalue + ",current_date);";
           
        return client.query(
            queryString,
            callback
        );
    },
    deletebuildingstouser: function (buildingstouserid, callback) {
        var queryString = "delete from buildingstouser where buildingstouserid= " + buildingstouserid;

        return client.query(queryString, callback);
    },
    updatebuildingstouser: function (buildingstouserid, buildingstouser, callback) {

        var queryString = "update buildingstouser set " +
            "buildingage=" + buildingstouser.buildingage + "," +
            "buildingtypeid=" + buildingstouser.buildingtypeid +
            " where buildingstouserid=" + buildingstouserid + ";";
        console.log(queryString);

        return client.query(
            queryString,

            callback
        );
    }
};
module.exports = buildingstouser;
