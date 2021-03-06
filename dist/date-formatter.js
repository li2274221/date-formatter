'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var dateFormatter = function dateFormatter(date, format) {
	var o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds(),
		'q+': Math.floor((date.getMonth() + 3) / 3),
		'S': date.getMilliseconds()
	};

	if (/(y+)/.test(format)) {
		//RegExp.$1表示匹配到的第一个结果(y表示年)
		format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp('(' + k + ')').test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
		}
	}
	return format;
};

exports.default = dateFormatter;
//# sourceMappingURL=date-formatter.js.map