var vm = new Vue({
	el: "#listContainer",
	data: {
		gxyLinkList: []
	},
	mounted() {
		layui.use('layer', function() {
			var layer = layui.layer;
		});
		//
		this.getGxyLinkList();
	},
	methods: {
		getGxyLinkList() {
			axios.get("/gxyundata/getlinkdata", {
					params: {
						linkSearch: '',
						linkAuthor: "",
						order: "",
						page: 1,
						pageSize: 99
					}
				})
				.then(res => {
					this.gxyLinkList = res.data.data;
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
