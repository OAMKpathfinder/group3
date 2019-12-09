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

var buildingstouserdetail =
{
    executestr: function (queryString, callback) {
                return client.query(
            queryString, callback);
    }
    ,
    getbuildingFormula: function (buildingstouserid, callback) {
        var queryString = 'select bds.buildingstouserid as bdsid, btp.abbreviation, btp.formula from buildingstouser bds  ' +
            ' inner join buildingtype btp on btp.buildingtypeid = bds.buildingtypeid ' +
            'where bds.buildingstouserid = ' + buildingstouserid + ';';
        
        return client.query(
            queryString, callback);
    }
    ,
    getobjectsFormula: function (buildingstouserid, callback) {
        var queryString = 'Select obj.abbreviation, obj.formula, bdts.buildingstouserdetailid as bdsid ,bdts.presentvalue, bdts.newvalue '+
        ' from buildingstouserdetail bdts inner join objects obj ' +

        'on obj.objectsid = bdts.objectsid '+
            'where bdts.buildingstouserid = ' + buildingstouserid + '  order by bdts.buildingstouserdetailid;';
        return client.query(
            queryString, callback);
    }
    ,
    getbuildingstouserdetailByid: function (buildingstouserdetailid, callback) {
        var queryString = 'select * from buildingstouserdetail where buildingstouserdetailid=' + buildingstouserdetailid + ';';
        console.log(queryString);
        return client.query(queryString, callback);
    }
    ,
    addbuildingstouserdetail: function (buildingstouserdetail, callback) {
        var queryString = "insert into buildingstouserdetail (buildingstouserid, objectsid, materialsid, numberofobjects, objectarea, newmaterialsid )  values( " +
            buildingstouserdetail.buildingstouserid + "," +
            buildingstouserdetail.objectsid + "," +
            buildingstouserdetail.materialsid + "," +
            buildingstouserdetail.numberofobjects + "," +
            buildingstouserdetail.objectarea + "," +
            buildingstouserdetail.newmaterialsid +");";

        return client.query(
            queryString,
            callback
        );
    },
    deletebuildingstouserdetail: function (buildingstouserdetailid, callback) {
        var queryString = "delete from buildingstouserdetail where buildingstouserdetailid= " + buildingstouserdetailid;

        return client.query(queryString, callback);
    },
    updatebuildingstouserdetail: function (buildingstouserdetailid, buildingstouserdetail, callback) {

        var queryString = "update buildingstouserdetail set " +
            "objectsid=" + buildingstouser.objectsid + "," +
            "materialsid=" + buildingstouser.materialsid + "," +
            "numberofobjects=" + buildingstouser.numberofobjects + "," +
            "objectarea=" + buildingstouser.objectarea + "," +
            "newmaterialsid=" + buildingstouser.newmaterialsid + 
            " where buildingstouserdetailid=" + buildingstouserdetailid + ";";
        console.log(queryString);

        return client.query(
            queryString,

            callback
        );
    }
};
module.exports = buildingstouserdetail;
