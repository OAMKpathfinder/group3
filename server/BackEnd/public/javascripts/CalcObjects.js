
var helperFuncs = {

    createBuildFunc: function (mainFormula, mainobj, bdsid, callback) {
        var FormulaStr = mainFormula;
        var hFormula = "";
        var chatpos = "";
        var fFacts = "";
        var tmpFact = "";
        var mainFact = mainobj;
        var FuncStr = "CREATE OR REPLACE FUNCTION public.calcbuild_" + bdsid + "( " +
            "    detailid1 integer) " +
            "RETURNS INTEGER " +
            "LANGUAGE 'plpgsql' " +
            "COST 100 " +
            "VOLATILE " +
            "AS $BODY$ " +
            "DECLARE \n";
        FuncStr = FuncStr + "retval INTEGER:=0;\n";
        FuncStr = FuncStr + "detailid INTEGER:=" + bdsid + ";\n";
        //FuncStr = FuncStr + "K000 NUMERIC = getobjectvalue(detailid, 'K000');\n ";
        for (var i = 0; i < FormulaStr.length; i++) {
            chatpos = FormulaStr.charAt(i);
            if (chatpos == "@") {
                tmpFact = FormulaStr.substring(i, i + 5);
                if (fFacts.indexOf(tmpFact) < 0) {
                    if (tmpFact.substring(1, 2) == "B") {
                        fFacts = fFacts + tmpFact.substring(1, 5) + " NUMERIC :=0; \n";
                    }
                    else if (tmpFact.substring(1, 2) == "T") {
                        fFacts = fFacts + tmpFact.substring(1, 5) + " NUMERIC =coalesce(getobjectvalue(detailid, " + "'" + tmpFact + "'" + "),0); \n";
                        fFacts = fFacts + 'K' + tmpFact.substring(2, 5) + " NUMERIC =coalesce(getobjectvalue(detailid, " + "'K"  + tmpFact.substring(2, 5) + "'" + "),0); \n";
                    }
                    else {
                        fFacts = fFacts + tmpFact.substring(1, 5) + " NUMERIC =coalesce(getobjectvalue(detailid, " + "'" + tmpFact + "'" + "),0); \n";

                    }
                }

            }
        }
        FuncStr = FuncStr + fFacts + "\n";
        FuncStr = FuncStr + "BEGIN\n";
        FuncStr = FuncStr + FormulaStr + "\n";
        FuncStr = FuncStr + "UPDATE buildingstouser SET  presentvalue=" + mainFact + " WHERE buildingstouserid=detailid;\n";
        FuncStr = FuncStr + mainFact + "=0;\n";
        hFormula = FormulaStr.replace(/@T/g, '@K');
        FuncStr = FuncStr + hFormula + "\n";
        FuncStr = FuncStr + "UPDATE buildingstouser SET  newvalue=" + mainFact + " WHERE buildingstouserid=detailid;\n";
        FuncStr = FuncStr + "RETURN retval;\n";
        FuncStr = FuncStr + "END; $BODY$;\n";
        //alert(FuncStr);
        FuncStr = FuncStr.replace(/@/g, '');

        return callback(FuncStr);
    }
    ,
    createFunc: function (mainFormula, mainobj, bdsid, callback) {
        var FormulaStr = mainFormula;
        var hFormula = "";
        var chatpos = "";
        var fFacts = "";
        var tmpFact = "";
        var mainFact = mainobj;
        var FuncStr = "CREATE OR REPLACE FUNCTION public.calcobjects_" + bdsid + "( " +
            "    detailid1 integer) " +
            "RETURNS INTEGER " +
            "LANGUAGE 'plpgsql' " +
            "COST 100 " +
            "VOLATILE " +
            "AS $BODY$ " +
            "DECLARE \n";
        FuncStr = FuncStr + "retval INTEGER:=0;\n";
        FuncStr = FuncStr + "detailid INTEGER:=" + bdsid + ";\n";
        FuncStr = FuncStr + "H000 NUMERIC = getobjectvalue(detailid, 'H000');\n ";
        //var FormulaStr = "IF @B000 > 50 THEN \n" +
        //    "    @T001 = @A001 * @N001 * @M000*@M000;\n" +
        //    "Else\n" +
        //    "    @T001 = @A001 * @N001 * @M000 * 2;\n" +
        //    "END IF;\n";
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
                        fFacts = fFacts + tmpFact.substring(1, 5) + " NUMERIC =coalesce(getobjectvalue(detailid, " + "'" + tmpFact + "'" + "),0); \n";

                    }
                }

            }
        }
        FuncStr = FuncStr + fFacts + "\n";
        FuncStr = FuncStr + "BEGIN\n";
        FuncStr = FuncStr + FormulaStr + "\n";
        FuncStr = FuncStr + "UPDATE buildingstouserdetail SET  presentvalue=" + mainFact + " WHERE buildingstouserdetailid=detailid;\n";
        FuncStr = FuncStr + mainFact + "=0;\n";
        hFormula = FormulaStr.replace(/@M000/g, '@H000');
        FuncStr = FuncStr + hFormula + "\n";
        FuncStr = FuncStr + "UPDATE buildingstouserdetail SET  newvalue=" + mainFact + " WHERE buildingstouserdetailid=detailid;\n";
        FuncStr = FuncStr + "RETURN retval;\n";
        FuncStr = FuncStr + "END; $BODY$;\n";
        //alert(FuncStr);
        FuncStr = FuncStr.replace(/@/g, '');

        return callback(FuncStr);
    }
};
module.exports = helperFuncs;
