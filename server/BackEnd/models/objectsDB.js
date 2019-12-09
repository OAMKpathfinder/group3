const pg = require('pg');

const config = {
    host: 'azureservergroup3.postgres.database.azure.com',
   
    user: 'myadmin@azureservergroup3',
    password: '12Asdfgh',
    database: 'pathfinder',
    port: 5432,
    ssl: true
};

const client = new pg.Client(config);

client.connect();




var objectsdbset =
{
    getAllobjects: function (callback) {
        //var output = '';
        //var resdb = client.query('select * from buildingtype;', function (err, result) {
        //    for (var i = 0; i < result.rows.length; i++) {
        //        var row = result.rows.item(i)
        //        output += '<tr><td>' + row['id'] + '</td><td>' + row['name'] + '</td><td>' + row['number'] + '</td></tr>';
        //    }
        //});

        return client.query(
            'select * from objects;', callback);
    }
    ,
    getobjectsByid: function (objectsid, callback) {
        var queryString = 'select * from objects where objectsid=' + objectsid + ';';
        console.log(queryString);
        return client.query(queryString, callback);
    }
    ,
    addobjects: function (objectsobj, callback) {
        var queryString = "insert into objects (objectname, formula  )  values( " +
            "'" + objectsobj.objectname + "'," +
            "'" + objectsobj.formula + "');";
        console.log(queryString);
        return client.query(
            queryString,
            callback
        );
    },
    deleteobjects: function (objectsid, callback) {
        var queryString = "delete from objects where objectsid= " + objectsid;

        return client.query(queryString, callback);
    },
    updateobjects: function (objectsid, objectsobj, callback) {

        var queryString = "update objects set " +
            "objectname='" + objectsobj.objectname + "'" +
            ",formula='" + objectsobj.formula + "'" +
            " where objectsid=" + objectsid + ";";
        console.log(queryString);

        return client.query(
            queryString,

            callback
        );
    }
};
module.exports = objectsdbset;
