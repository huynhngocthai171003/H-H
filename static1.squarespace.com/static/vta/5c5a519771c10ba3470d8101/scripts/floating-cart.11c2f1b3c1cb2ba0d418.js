"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [9528], {
        96418: function(e, n, t) {
            t.r(n);
            var a = t(59440),
                o = t(16024);
            n.default = function(e) {
                (0, o.A)().then((function() {
                    var n = (0, a.T)(window, "Y.Squarespace.Singletons.ShoppingCart", null);
                    n && (n.on("item-added", (function(n) {
                        e.classList.remove("hidden")
                    })), n.after("load", (function(n) {
                        n.target.get("totalQuantity") > 0 && e.classList.remove("hidden")
                    })))
                }))
            }
        }
    }
]);