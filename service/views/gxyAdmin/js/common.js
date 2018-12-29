// 时间格式化
function timestampToTime(timestamp) {
	var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	Y = date.getFullYear() + '-';
	M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	D = change(date.getDate()) + ' ';
	h = change(date.getHours()) + ':';
	m = change(date.getMinutes()) + ':';
	s = change(date.getSeconds());
	return Y + M + D + h + m + s;
}

function change(t) {
	if (t < 10) {
		return "0" + t;
	} else {
		return t;
	}
}
