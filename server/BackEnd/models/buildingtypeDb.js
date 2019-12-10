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

var buildingtype =
{
    getAllbuildingtype: function (callback) {
        //var output = '';
        //var resdb = client.query('select * from buildingtype;', function (err, result) {
        //    for (var i = 0; i < result.rows.length; i++) {
        //        var row = result.rows.item(i)
        //        output += '<tr><td>' + row['id'] + '</td><td>' + row['name'] + '</td><td>' + row['number'] + '</td></tr>';
        //    }
        //});

        return client.query(
            'select * from buildingtype;', callback);
    }
    ,
    getAllbuildingtypeByid: function (buildingtypeid, callback) {
        var queryString = 'select * from buildingtype where buildingtypeid=' + buildingtypeid+';';
        console.log(queryString);
        return client.query(queryString, callback);
    }
    ,
    addbuildingtype: function (buildingtype, callback) {
        var queryString = "insert into buildingtype (typename, formula  )  values( " +
            "'" + buildingtype.typename + "'," +
            "'" + buildingtype.formula + "');";
        console.log(queryString);
        return client.query(
            queryString,
            callback
        );
    },
    deletebuildingtype: function (buildingtypeid, callback) {
        var queryString = "delete from buildingtype where buildingtypeid= " + buildingtypeid;

        return client.query(queryString, callback);
    },
    updatebuildingtype: function (buildingtypeid, buildingtype, callback) {

        var queryString = "update buildingtype set " +
            "typename='" + buildingtype.typename + "'" +
            ",formula='" + buildingtype.formula + "'" +
            " where buildingtypeid=" + buildingtypeid + ";";
        console.log(queryString);

        return client.query(
            queryString,

            callback
        );
    }
};
module.exports = buildingtype;
