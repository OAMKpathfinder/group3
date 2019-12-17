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

var materials =
{
    getAllmaterials: function (callback) {
        //var output = '';
        //var resdb = client.query('select * from buildingtype;', function (err, result) {
        //    for (var i = 0; i < result.rows.length; i++) {
        //        var row = result.rows.item(i)
        //        output += '<tr><td>' + row['id'] + '</td><td>' + row['name'] + '</td><td>' + row['number'] + '</td></tr>';
        //    }
        //});
        
        return client.query(
            'select mat.materialsid, mat.abbreviation, mat.coefficient, mat.materialname from materials mat order by mat.abbreviation ;', callback);
    }
    ,
    getmaterilasByid: function (materialsid, callback) {
        var queryString = 'select * from materials where materialsid=' + materialsid + ';';
        console.log(queryString);
        return client.query(queryString, callback);
    }
    ,
    addmaterials: function (materials, callback) {
        var queryString = "insert into materials (materialname, coefficient  )  values( " +
            "'" + materials.materialname + "'," +
            materials.coefficient + ");";
        console.log(queryString);
        return client.query(
            queryString,
            callback
        );
    },
    deletematerials: function (materialsid, callback) {
        var queryString = "delete from materials where materialsid= " + materialsid;

        return client.query(queryString, callback);
    },
    updatematerials: function (materialsid, materials, callback) {

        var queryString = "update materials set " +
            "materialname='" + materials.materialname + "'" +
            ",coefficient=" + materials.coefficient + 
            " where materialsid=" + materialsid + ";";
        console.log(queryString);

        return client.query(
            queryString,

            callback
        );
    }
};
module.exports = materials;
