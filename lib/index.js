Object.defineProperty(exports, "__esModule", {value: true});
var _reactNative = require('react-native');
var SnackBar = {
    LENGTH_LONG: _reactNative.NativeModules.RNSnackbar.LENGTH_LONG,
    LENGTH_SHORT: _reactNative.NativeModules.RNSnackbar.LENGTH_SHORT,
    LENGTH_INDEFINITE: _reactNative.NativeModules.RNSnackbar.LENGTH_INDEFINITE,
    show: function show(options) {
        var action = options.action ? options.action.onPress : function () {
        };
        if (options.action && options.action.color) {
            options.action.color = (0, _reactNative.processColor)(options.action.color);
        }
        if (options.backgroundColor) {
            options.backgroundColor = (0, _reactNative.processColor)(options.backgroundColor);
        }
        _reactNative.NativeModules.RNSnackbar.show(options, action);
    }
};
exports.default = SnackBar;