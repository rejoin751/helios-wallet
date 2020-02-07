!function (r) {
    "use strict";
    function t() {
        this.$body = r("body"),
            this.$chatInput = r(".chat-input"),
            this.$chatList = r(".conversation-list"),
            this.$chatSendBtn = r(".chat-send"),
            this.$chatForm = r("#chat-form")
    }
    t.prototype.save = function () {
        var t = this.$chatInput.val(),
            e = moment().format("h:mm");
        return "" == t ? (this.$chatInput.focus(), !1) : (r('<li class="clearfix odd"><div class="chat-avatar"><img src="assets/images/users/avatar-7.jpg" alt="male"><i>' + e + '</i></div><div class="conversation-text"><div class="ctext-wrap"><i>Shreyu</i><p>' + t + "</p></div></div></li>").appendTo(".conversation-list"), this.$chatInput.focus(), this.$chatList.animate({
            scrollTop: this.$chatList.prop("scrollHeight")
        }
            , 1e3), !0)
    }
        ,
        t.prototype.init = function () {
            var e = this;
            e.$chatInput.keypress(function (t) {
                if (13 == t.which) return e.save(), !1
            }
            ),
                e.$chatForm.on("submit", function (t) {
                    return t.preventDefault(), e.save(), e.$chatForm.removeClass("was-validated"), e.$chatInput.val(""), !1
                }
                )
        }
        ,
        r.ChatApp = new t,
        r.ChatApp.Constructor = t
}

    (window.jQuery),
    function (o) {
        "use strict";
        function t() { }
        t.prototype.initCharts = function () {
            var t = {
                chart: {
                    type: "area",
                    height: 45,
                    width: 90,
                    sparkline: {
                        enabled: !0
                    }
                }
                ,
                series: [{
                    data: [25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]
                }
                ],
                stroke: {
                    width: 2, curve: "smooth"
                }
                ,
                markers: {
                    size: 0
                }
                ,
                colors: ["#727cf5"],
                tooltip: {
                    fixed: {
                        enabled: !(window.Apex = {
                            chart: {
                                parentHeightOffset: 0, toolbar: {
                                    show: !1
                                }
                            }
                            , grid: {
                                padding: {
                                    left: 0, right: 0
                                }
                            }
                            , colors: ["#5369f8", "#43d39e", "#f77e53", "#ffbe0b"], tooltip: {
                                theme: "dark", x: {
                                    show: !1
                                }
                            }
                        }
                        )
                    }
                    ,
                    x: {
                        show: !1
                    }
                    ,
                    y: {
                        title: {
                            formatter: function (t) {
                                return ""
                            }
                        }
                    }
                    ,
                    marker: {
                        show: !1
                    }
                }
                ,
                fill: {
                    type: "gradient",
                    gradient: {
                        type: "vertical", shadeIntensity: 1, inverseColors: !1, opacityFrom: .45, opacityTo: .05, stops: [45, 100]
                    }
                }
            }
                ;
            new ApexCharts(document.querySelector("#today-revenue-chart"), t).render(),
                new ApexCharts(document.querySelector("#today-product-sold-chart"), o.extend({}
                    , t, {
                    colors: ["#f77e53"]
                }
                )).render(),
                new ApexCharts(document.querySelector("#today-new-customer-chart"), o.extend({}
                    , t, {
                    colors: ["#43d39e"]
                }
                )).render(),
                new ApexCharts(document.querySelector("#today-new-visitors-chart"), o.extend({}
                    , t, {
                    colors: ["#ffbe0b"]
                }
                )).render();
            var e = new Date,
                r = {
                    chart: {
                        height: 296, type: "area"
                    }
                    ,
                    dataLabels: {
                        enabled: !1
                    }
                    ,
                    stroke: {
                        curve: "smooth", width: 4
                    }
                    ,
                    series: [{
                        name: "Revenue", data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35]
                    }
                    ],
                    zoom: {
                        enabled: !1
                    }
                    ,
                    legend: {
                        show: !1
                    }
                    ,
                    colors: ["#43d39e"],
                    xaxis: {
                        type: "string",
                        categories: function (t, e) {
                            for (var r = new Date(e, t, 1), o = [], a = 0;
                                r.getMonth() === t && a < 15;
                            ) {
                                var n = new Date(r);
                                o.push(n.getDate() + " " + n.toLocaleString("en-us", {
                                    month: "short"
                                }
                                )),
                                    r.setDate(r.getDate() + 1),
                                    a += 1
                            }
                            return o
                        }
                            (e.getMonth(), e.getFullYear()),
                        tooltip: {
                            enabled: !1
                        }
                        ,
                        axisBorder: {
                            show: !1
                        }
                        ,
                        labels: {}
                    }
                    ,
                    yaxis: {
                        labels: {
                            formatter: function (t) {
                                return t + "k"
                            }
                        }
                    }
                    ,
                    fill: {
                        type: "gradient",
                        gradient: {
                            type: "vertical", shadeIntensity: 1, inverseColors: !1, opacityFrom: .45, opacityTo: .05, stops: [45, 100]
                        }
                    }
                }
                ;
            new ApexCharts(document.querySelector("#revenue-chart"), r).render();
            r = {
                chart: {
                    height: 296,
                    type: "bar",
                    stacked: !0,
                    toolbar: {
                        show: !1
                    }
                }
                ,
                plotOptions: {
                    bar: {
                        horizontal: !1, columnWidth: "45%"
                    }
                }
                ,
                dataLabels: {
                    enabled: !1
                }
                ,
                stroke: {
                    show: !0, width: 2, colors: ["transparent"]
                }
                ,
                series: [{
                    name: "Net Profit", data: [35, 44, 55, 57, 56, 61]
                }
                    ,
                {
                    name: "Revenue", data: [52, 76, 85, 101, 98, 87]
                }
                ],
                xaxis: {
                    categories: ["Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun"],
                    axisBorder: {
                        show: !1
                    }
                }
                ,
                legend: {
                    show: !1
                }
                ,
                grid: {
                    row: {
                        colors: ["transparent", "transparent"], opacity: .2
                    }
                    ,
                    borderColor: "#f3f4f7"
                }
                ,
                tooltip: {
                    y: {
                        formatter: function (t) {
                            return "$ " + t + " thousands"
                        }
                    }
                }
            }
                ;
            new ApexCharts(document.querySelector("#targets-chart"), r).render();
            r = {
                plotOptions: {
                    pie: {
                        donut: {
                            size: "70%"
                        }
                        ,
                        expandOnClick: !1
                    }
                }
                ,
                chart: {
                    height: 298, type: "donut"
                }
                ,
                legend: {
                    show: !0,
                    position: "right",
                    horizontalAlign: "left",
                    itemMargin: {
                        horizontal: 6, vertical: 3
                    }
                }
                ,
                series: [44,
                    55,
                    41,
                    17],
                labels: ["Clothes 44k",
                    "Smartphons 55k",
                    "Electronics 41k",
                    "Other 17k"],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: "bottom"
                        }
                    }
                }
                ],
                tooltip: {
                    y: {
                        formatter: function (t) {
                            return t + "k"
                        }
                    }
                }
            }
                ;
            new ApexCharts(document.querySelector("#sales-by-category-chart"), r).render()
        }
            ,
            t.prototype.init = function () {
                o("#dash-daterange").flatpickr({
                    mode: "range", defaultDate: [moment().subtract(7, "days").format("YYYY-MM-DD"), moment().format("YYYY-MM-DD")]
                }
                ),
                    o("#calendar-widget").flatpickr({
                        inline: !0, shorthandCurrentMonth: !0
                    }
                    ),
                    o.ChatApp.init(),
                    this.initCharts()
            }
            ,
            o.Dashboard = new t,
            o.Dashboard.Constructor = t
    }

        (window.jQuery),
    function () {
        "use strict";
        window.jQuery.Dashboard.init()
    }

   ();