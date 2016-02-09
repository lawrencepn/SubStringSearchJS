/**
 * Created by lawrencenyakiso on 2016/02/08.
 */
exports.substring_search = function (strings, text) {

    var subStringArray = strings.reverse();
    var subStringArrayLength = subStringArray.length;
    var cleanString = text.replace(/\s/g, "").trim(); // remove spaces
    var searchReg = /[^\u0020-\u007F]/g;
    if (subStringArrayLength < 100) {
        for (var x = subStringArrayLength - 1; x >= 0; x--) {
            var match = subStringArray[x].search(searchReg)
            if (match !== -1 || subStringArray[x].length == 0) {
                return undefined;
            }

        }
        return doSearch()
    } else {
        return undefined;
    }

    function doSearch() {
        var res = {};
        for (var x = subStringArrayLength - 1; x >= 0; x--) {
            var newString = cleanString;
            var newStringLength = cleanString.length;
            var currentSubStringLength = subStringArray[x].length;
            var occurrence = 0;
            while (newStringLength >= currentSubStringLength) {
                var inSubString = newString.search(subStringArray[x])
                if (inSubString !== -1) {
                    res[subStringArray[x]] = ++occurrence;
                    var sliceOff = inSubString + subStringArray[x].length;
                    newString = newString.slice(sliceOff);
                    newStringLength = newString.length;
                } else {
                    if (!res[subStringArray[x]]) {
                        res[subStringArray[x]] = 0;
                    }
                    newStringLength = -1;
                }
            }

        }
        return res;
    }


}