var express = require('express');
//var router = express.Router();
var bdDataset = require('../../models/buildingstouserdetailDB');

function createProcToclac(buildingstouserdetailid) {
    var declarePart = "";
    var bodyPart = "";
    var FormulaStr = "IF @B000 > 50 THEN \n" +
        "    @T001 = @A001 * @N001 * @M000*@M000;\n" +
        "Else\n" +
        "    @T001 = @A001 * @N001 * @M000 * 2;\n" +
        "END IF;\n";
    var dbRes = bdDataset.getobjectsFormula(buildingstouserdetailid);
    forEach(dbRes.rows, (row) => {
        var objAbbr = row.abbreviation;
        var objFormula = row.formula;
        FormulaStr = creatBodyOfFunc(objFormula, objAbbr);
         

    });
}

function creatBodyOfFunc(FormulaStr, mainFact) {
    var hFormula = "";
    var chatpos = "";
    var fFacts = "";
    var tmpFact = "";
    //var mainFact = "@T001";
    var FuncStr = "CREATE OR REPLACE FUNCTION public.calcobjects( " +
        "    detailid integer) " +
        "RETURNS INTEGER " +
        "LANGUAGE 'plpgsql' " +
        "COST 100 " +
        "VOLATILE " +
        "AS $BODY$ " +
        "DECLARE \n";

   
    //alert(FormulaStr.length);
    for (var i = 0; i < FormulaStr.length; i++) {
        chatpos = FormulaStr.charAt(i);
        if (chatpos == "@") {
            tmpFact = FormulaStr.substring(i, i + 5);

            if (fFacts.indexOf(tmpFact) < 0) {
                if (tmpFact.substring(1, 2) == "T") {
                    fFacts = fFacts + tmpFact.substring(1, 5) + " NUMERIC :=0; \n";
                }
                else {
                    fFacts = fFacts + tmpFact.substring(1, 5) + " NUMERIC =getobjectvalue(detailid, " + "'" + tmpFact + "'" + "); \n";

                }
            }

        }
    }
    FuncStr = FuncStr + fFacts + "\n";
    FuncStr = FuncStr + "BEGIN\n";
    FuncStr = FuncStr + FormulaStr + "\n";
    FuncStr = FuncStr + "UPDATE buildingstouserdetail SET  presentvalue=T001 WHERE buildingstouserdetailid=detailid;\n";
    FuncStr = FuncStr + mainFact + "=0;\n";
    hFormula = FormulaStr.replace(/@M000/g, '@H000');
    FuncStr = FuncStr + hFormula + "\n";
    FuncStr = FuncStr + "UPDATE buildingstouserdetail SET  newvalue=T001 WHERE buildingstouserdetailid=detailid;\n";
    FuncStr = FuncStr + "RETURN retval;\n";
    FuncStr = FuncStr + "END; $BODY$;\n";
    //alert(FuncStr);
    return FuncStr;
}
