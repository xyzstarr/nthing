/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var fs = require('fs')
var Variables = function () {
    var _vars = {};
    _vars.loopback_app_folder = "C:/Users/Admin/Documents/NetBeansProjects/nthing/"
    _vars.loopback_model_config_file = _vars.loopback_app_folder + "server/model-config.json"
    _vars.generated_models_folder = "D:/work/arc-getting-started/common/core/models/"
    _vars.scripts_folder = _vars.loopback_app_folder + 'homebrewed/core/scripts/'
    _vars.scripts = {}

    fs.readdir(_vars.scripts_folder, function (err, ls_scripts) {
        for (var i_scripts = 0; i_scripts < ls_scripts.length; i_scripts++) {
            if ((ls_scripts[i_scripts].toLowerCase()).indexOf(".js") > 0) {
                var script = ls_scripts[i_scripts].replace(".js", "")
               // console.log(script)
                _vars.scripts[script] = ls_scripts[i_scripts]
                //console.log(_vars)
            }
        }
        //return scripts
    });
    return _vars;
}
var _nth = {}
_nth.variables = Variables();
console.log(_nth.variables.scripts);
//return _nth;        
//module.exports = _nth
//_nth.Variables;