$().ready(function() {
	$("#tapMenuButton").click(function() {
		if ($("#tapSidebar").css("right") == "-200px") {
			$("#tapSidebar").animate({ right: "0px" });
			$("#tapHeader").animate({ right: "200px" });
			$("#tapSidebar").show()
		}
		else if ($("#tapSidebar").css("right") == "0px") {
			$("#tapSidebar").animate({ right: "-200px" });
			$("#tapHeader").animate({ right: "0px" }, function () {
				$("#tapSidebar").hide();
			});
		}
	});
}); 