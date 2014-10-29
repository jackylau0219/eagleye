/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: CN
 */
jQuery.extend(jQuery.validator.messages, {
        required: "请填写此字段",
		remote: "请修正该字段",
		email: "请输入正确格式的电子邮件",
		url: "请输入合法的网址",
		date: "请输入合法的日期",
		dateISO: "请输入合法的日期 (ISO).",
		number: "请输入合法的数字",
		digits: "只能输入整数",
		creditcard: "请输入合法的信用卡号",
		equalTo: "请再次输入相同的密码",
		accept: "请输入拥有合法后缀名的字符串",
		maxlength: jQuery.validator.format("请输入长度最多是 {0} 的字符串"),
		minlength: jQuery.validator.format("请输入长度最少是 {0} 的字符串"),
		rangelength: jQuery.validator.format("此字段长度应在{0}和{1}之间"),
		range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
		max: jQuery.validator.format("请输入一个最大为 {0} 的值"),
		min: jQuery.validator.format("请输入一个最小为 {0} 的值"),
		PhoneCN:jQuery.validator.format("请输入正确的电话号码"),
		MobileCN:jQuery.validator.format("请输入正确的手机号码"),
		
		numChineseEnglish:"只能输入中文，英文，数字",
		numEnglish:"只能输入数字,字母,_,-,@,."
});