var vm = new Vue({
	el: "#listContainer",
	data: {
		linkList: []
	},
	mounted() {
		layui.use('layer', function() {
			var layer = layui.layer;
		});
		//
		this.getLinkList();
	},
	methods: {
		getLinkList() {
			axios.get("/gxyundata/getRegUserList", {
					params: {
						userName: "",
						page: 0,
						pageSize: 600
					}
				})
				.then(res => {
					if (res.data.code === 200 && res.data.success === true) {
						this.linkList = res.data.data;
					}
				})
				.catch(error => {
					console.log(error);
				});
		},
		// 格式化时间
		formatTime(time) {
			return timestampToTime(time);
		}
	},
});
