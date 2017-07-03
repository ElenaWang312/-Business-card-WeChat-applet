module.exports = {
	// 将参数对象转化成query的形式
	objToQuery: function (obj) {
		var result = '';
		for (var i in obj) {
			// i是属性名称，obj[i]是属性值
			result += '&' + i + '=' + obj[i];
		}
		// ?a=b&c=d
		return '?' + result.slice(1)
	}
}