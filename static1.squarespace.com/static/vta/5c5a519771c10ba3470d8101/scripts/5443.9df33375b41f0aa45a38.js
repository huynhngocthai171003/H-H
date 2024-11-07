(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [5443], {
        55666: function(e, r, t) {
            var n = t(8156),
                a = t(19872),
                o = {};
            for (var i in n) n.hasOwnProperty(i) && (o[n[i]] = i);
            var l = e.exports = {
                to: {}
            };

            function u(e, r, t) {
                return Math.min(Math.max(r, e), t)
            }

            function s(e) {
                var r = e.toString(16).toUpperCase();
                return r.length < 2 ? "0" + r : r
            }
            l.get = function(e) {
                var r, t;
                switch (e.substring(0, 3).toLowerCase()) {
                    case "hsl":
                        r = l.get.hsl(e), t = "hsl";
                        break;
                    case "hwb":
                        r = l.get.hwb(e), t = "hwb";
                        break;
                    default:
                        r = l.get.rgb(e), t = "rgb"
                }
                return r ? {
                    model: t,
                    value: r
                } : null
            }, l.get.rgb = function(e) {
                if (!e) return null;
                var r, t, a, o = [0, 0, 0, 1];
                if (r = e.match(/^#([a-fA-F0-9]{3})$/))
                    for (r = r[1], t = 0; t < 3; t++) o[t] = parseInt(r[t] + r[t], 16);
                else if (r = e.match(/^#([a-fA-F0-9]{6})$/))
                    for (r = r[1], t = 0; t < 3; t++) {
                        var i = 2 * t;
                        o[t] = parseInt(r.slice(i, i + 2), 16)
                    } else if (r = e.match(/^(rgba?)\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?\d*\.?\d+)\s*)?\)$/)) {
                        if ((a = r[5]) && "rgb" === r[1] || !a && "rgba" === r[1]) return null;
                        for (t = 0; t < 3; t++) o[t] = parseInt(r[t + 2], 0);
                        a && (o[3] = parseFloat(a))
                    } else {
                        if (!(r = e.match(/^(rgba?)\(\s*([+-]?\d*\.?\d+)\%\s*,\s*([+-]?\d*\.?\d+)\%\s*,\s*([+-]?\d*\.?\d+)\%\s*(?:,\s*([+-]?\d*\.?\d+)\s*)?\)$/))) return (r = e.match(/(\D+)/)) ? "transparent" === r[1] ? [0, 0, 0, 0] : (o = n[r[1]]) ? (o[3] = 1, o) : null : null;
                        if ((a = r[5]) && "rgb" === r[1] || !a && "rgba" === r[1]) return null;
                        for (t = 0; t < 3; t++) o[t] = Math.round(2.55 * parseFloat(r[t + 2]));
                        a && (o[3] = parseFloat(a))
                    }
                for (t = 0; t < o.length; t++) o[t] = u(o[t], 0, 255);
                return o[3] = u(o[3], 0, 1), o
            }, l.get.hsl = function(e) {
                if (!e) return null;
                var r = e.match(/^(hsla?)\(\s*([+-]?\d*\.?\d+)(?:deg)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)\s*)?\)$/);
                if (r) {
                    var t = r[5];
                    if (t && "hsl" === r[1] || !t && "hsla" === r[1]) return null;
                    var n = t ? parseFloat(t) : 1;
                    return [(parseFloat(r[2]) % 360 + 360) % 360, u(parseFloat(r[3]), 0, 100), u(parseFloat(r[4]), 0, 100), u(n, 0, 1)]
                }
                return null
            }, l.get.hwb = function(e) {
                if (!e) return null;
                var r = e.match(/^hwb\(\s*([+-]?\d*\.?\d+)(?:deg)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)\s*)?\)$/);
                if (r) {
                    var t = parseFloat(r[4]);
                    return [(parseFloat(r[1]) % 360 + 360) % 360, u(parseFloat(r[2]), 0, 100), u(parseFloat(r[3]), 0, 100), u(isNaN(t) ? 1 : t, 0, 1)]
                }
                return null
            }, l.to.hex = function(e) {
                return "#" + s(e[0]) + s(e[1]) + s(e[2])
            }, l.to.rgb = function() {
                var e = a(arguments);
                return e.length < 4 || 1 === e[3] ? "rgb(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ")" : "rgba(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ", " + e[3] + ")"
            }, l.to.rgb.percent = function() {
                var e = a(arguments),
                    r = Math.round(e[0] / 255 * 100),
                    t = Math.round(e[1] / 255 * 100),
                    n = Math.round(e[2] / 255 * 100);
                return e.length < 4 || 1 === e[3] ? "rgb(" + r + "%, " + t + "%, " + n + "%)" : "rgba(" + r + "%, " + t + "%, " + n + "%, " + e[3] + ")"
            }, l.to.hsl = function() {
                var e = a(arguments);
                return e.length < 4 || 1 === e[3] ? "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)" : "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + e[3] + ")"
            }, l.to.hwb = function() {
                var e = a(arguments),
                    r = "";
                return e.length >= 4 && 1 !== e[3] && (r = ", " + e[3]), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + r + ")"
            }, l.to.keyword = function(e) {
                return o[e.slice(0, 3)]
            }
        },
        37225: function(e, r, t) {
            "use strict";
            var n = t(77482),
                a = ["red", "green", "blue"];
            e.exports = function() {
                for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                var o = [],
                    i = 1 / r.length;
                r = r.map((function(e) {
                    return o.push(e.weight || i), "string" == typeof e ? n(e) : e
                }));
                var l = {};
                return a.forEach((function(e) {
                    l[e] = Math.round(r.reduce((function(r, t, n) {
                        return r + t[e] * o[n]
                    }), 0))
                })), l.alpha = r.reduce((function(e, r, t) {
                    return e + r.alpha * o[t]
                }), 0), l
            }
        },
        43705: function(e) {
            "use strict";
            e.exports = {
                rgb: ["red", "green", "blue", "alpha"],
                hsl: ["hue", "saturation", "lightness", "alpha"],
                hsv: ["hue", "saturation", "value", "alpha"]
            }
        },
        9169: function(e, r, t) {
            "use strict";
            var n = t(10734),
                a = t(43705);
            e.exports = {
                hsvToHsl: function(e, r, t) {
                    return n.hsv.hsl(e, r, t).reduce((function(e, r, t) {
                        return e[a.hsl[t]] = r, e
                    }), {})
                }
            }
        },
        82807: function(e, r, t) {
            "use strict";
            var n = t(77482);
            e.exports = function(e, r) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "rgb";
                if ("string" != typeof e) throw new TypeError(e + " is not a valid string");
                return "string" != typeof r && (r = "transparent"), e = e.trim(), n(e, t) || n(r, t)
            }
        },
        96426: function(e, r, t) {
            "use strict";
            e.exports = {
                averageColors: t(37225),
                isDark: t(83100),
                isLight: t(11394),
                parseColor: t(77482),
                parseGradient: t(49237),
                getColor: t(82807),
                readDominantColor: t(92945),
                stackColors: t(49114),
                stringifyColor: t(18444),
                isHex: t(71763).qv,
                isHsl: t(71763).mo,
                convert: t(9169)
            }
        },
        83100: function(e, r, t) {
            "use strict";
            var n = t(77482);
            e.exports = function(e) {
                return "string" == typeof e && (e = n(e)), (299 * e.red + 587 * e.green + 114 * e.blue) / 1e3 < 166.4
            }
        },
        11394: function(e, r, t) {
            "use strict";
            var n = t(83100);
            e.exports = function(e) {
                return !n(e)
            }
        },
        57936: function(e, r, t) {
            "use strict";
            var n = t(58195);
            e.exports = new n("@sqs/utils/palette", "green")
        },
        77482: function(e, r, t) {
            "use strict";
            var n = t(55666),
                a = t(10734),
                o = t(43705),
                i = t(57936);
            e.exports = function(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rgb",
                    t = arguments.length > 2 ? arguments[2] : void 0;
                if (!Object.keys(o).includes(r)) return i.error("Invalid color model: " + r), null;
                var l = n.get(e);
                if (!l) return null;
                var u = l.model,
                    s = l.value,
                    c = s;
                if (u !== r) {
                    var h = a[u][r];
                    c = (!0 === t ? h.raw(s) : h(s)).concat(s.slice(3))
                }
                return c.reduce((function(e, t, n) {
                    return e[o[r][n]] = t, e
                }), {})
            }
        },
        49237: function(e, r, t) {
            "use strict";
            var n = t(24994)(t(85715)),
                a = t(8156),
                o = Object.keys(a),
                i = /\)$/,
                l = /(?:,\s*|\()(?!\s*\d)/,
                u = /\s(?=[.\w|%]+$)/,
                s = /(linear(-gradient)?|radial)/;
            e.exports = function(e) {
                var r = (e = e.replace(i, "").split(l))[0].match(s);
                if (!r) return null;
                var t = r[0],
                    a = e[0].indexOf("repeating") > -1,
                    c = e.slice(2).map((function(e) {
                        var r = e.split(u),
                            t = (0, n.default)(r, 2),
                            a = t[0],
                            o = t[1];
                        return a && o ? {
                            color: a,
                            stop: o
                        } : null
                    })).filter((function(e) {
                        return e
                    }));
                if (0 === c.length) return null;
                var h = e[1].split(u),
                    f = (0, n.default)(h, 2),
                    d = f[0],
                    g = f[1];
                return (d.search(/\d/) > -1 || o.indexOf(d) > -1) && c.unshift({
                    color: d,
                    stop: g
                }), {
                    type: t,
                    repeating: a,
                    colorStops: c
                }
            }
        },
        92945: function(e) {
            "use strict";
            e.exports = function(e) {
                var r = e.img,
                    t = e.gradient,
                    n = function() {
                        var e = document.createElement("canvas");
                        return e.width = 1, e.height = 1, e
                    }();
                r ? function(e, r) {
                    e.getContext("2d").drawImage(r, 0, 0, e.width, e.height)
                }(n, r) : t && function(e, r) {
                    var t = e.getContext("2d").createLinearGradient(0, 0, 0, e.height);
                    r.forEach((function(e) {
                            var r = e.color,
                                n = e.stop;
                            t.addColorStop(n, r)
                        })),
                        function(e, r) {
                            var t = e.getContext("2d");
                            t.fillStyle = r, t.fillRect(0, 0, e.width, e.height)
                        }(e, t)
                }(n, t);
                var a = function(e) {
                    try {
                        return e.getContext("2d").getImageData(0, 0, e.width, e.height).data
                    } catch (e) {
                        return null
                    }
                }(n);
                return function(e) {
                    e.getContext("2d").clearRect(0, 0, e.width, e.height)
                }(n), a ? {
                    red: a[0],
                    green: a[1],
                    blue: a[2],
                    alpha: a[3] / 255
                } : null
            }
        },
        49114: function(e, r, t) {
            "use strict";
            var n = t(82807),
                a = ["red", "green", "blue"];
            e.exports = function e() {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transparent",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "transparent";
                "string" == typeof r && (r = n(r)), "string" == typeof t && (t = n(t));
                var o = 1 - (1 - r.alpha) * (1 - t.alpha),
                    i = {
                        alpha: o
                    };
                o < .001 ? (a.forEach((function(e) {
                    i[e] = 0
                })), i.alpha = 0) : a.forEach((function(e) {
                    i[e] = Math.round(r[e] * r.alpha + t[e] * (1 - r.alpha))
                }));
                for (var l = arguments.length, u = new Array(l > 2 ? l - 2 : 0), s = 2; s < l; s++) u[s - 2] = arguments[s];
                return u && u.length > 0 ? e.apply(void 0, [i].concat(u)) : i
            }
        },
        18444: function(e, r, t) {
            "use strict";
            var n = t(10734),
                a = t(55666),
                o = t(43705),
                i = t(57936),
                l = function(e) {
                    var r = function(e) {
                        return Object.keys(o).find((function(r) {
                            return o[r].every((function(r) {
                                return e.hasOwnProperty(r)
                            }))
                        }))
                    }(e);
                    return {
                        array: o[r].map((function(r) {
                            return e[r]
                        })),
                        model: r
                    }
                };
            e.exports = function(e, r) {
                if (e.alpha = "number" == typeof e.alpha ? e.alpha : 1, "hex" === r) return function(e) {
                    if (1 !== e.alpha) return i.error("Color must have alpha of 1 when stringifying to hex"), null;
                    var r = (e = l(e)).array;
                    return "rgb" !== e.model && (r = (0, n[e.model].rgb)(e.array)), a.to.hex(r)
                }(e);
                if (e = l(e), r = r || e.model, !e.model) return i.error("Could not determine color model."), null;
                if ("function" != typeof a.to[r]) return i.error("No color-string support for model " + r), null;
                if (r === e.model) return a.to[e.model](e.array);
                var t = (0, n[e.model][r])(e.array).concat(e.array.slice(3));
                return a.to[r](t)
            }
        },
        71763: function(e, r) {
            "use strict";
            r.mo = r.qv = void 0;
            r.qv = function(e) {
                return e && e.charAt && "#" === e.charAt(0)
            };
            r.mo = function(e) {
                return e && e.substring && "hsl" === e.substring(0, 3)
            }
        },
        58195: function(e, r, t) {
            "use strict";
            var n = t(24994);
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.default = void 0;
            var a = n(t(41132)),
                o = n(t(34579)),
                i = n(t(17383)),
                l = "undefined" != typeof __DEV__ && __DEV__;

            function u() {}

            function s(e, r) {
                if (r && "function" == typeof console[e]) {
                    for (var t, n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) a[o - 2] = arguments[o];
                    return (t = console[e]).bind.apply(t, [console].concat(a))
                }
                return u
            }
            var c = (0, o.default)((function e(r) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l;
                    (0, i.default)(this, e), this.start = s.apply(void 0, ["groupCollapsed", n, r].concat((0, a.default)(t))), this.end = s("groupEnd", n)
                })),
                h = (0, o.default)((function e(r, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l;
                    (0, i.default)(this, e);
                    var o = "%c[".concat(r, "] %c"),
                        u = ["color: ".concat(t, "; font-weight: 300;"), "color: #000; font-weight: 400;"],
                        h = [n, o].concat(u);
                    this.error = s.apply(void 0, ["error"].concat((0, a.default)(h))), this.info = s.apply(void 0, ["info"].concat((0, a.default)(h))), this.log = s.apply(void 0, ["log"].concat((0, a.default)(h))), this.warn = s.apply(void 0, ["warn"].concat((0, a.default)(h))), this.group = function(e) {
                        return new c("".concat(o).concat(e), u, n)
                    }
                }));
            r.default = h, e.exports = r.default
        },
        14213: function(e, r, t) {
            "use strict";
            var n = t(24994);
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.toLuma = r.toHsl = r.toHex = r.spin = r.lighten = r.isColor = r.hue = r.hsl = r.getColorModel = r.darken = void 0;
            var a = n(t(6535)),
                o = t(71267);
            r.hsl = function(e, r, t) {
                return (0, a.default)({
                    h: e,
                    s: r,
                    l: t
                }).toHexString()
            };
            r.hue = function(e) {
                return (0, a.default)(e).toHsl().h
            };
            r.spin = function(e, r) {
                return (0, a.default)(e).spin(r).toHexString()
            };
            r.toLuma = function(e) {
                var r = (0, a.default)(e).toRgb();
                return r.r / 255 * .2126 + r.g / 255 * .7152 + r.b / 255 * .0722
            };
            r.toHex = function(e) {
                return (0, a.default)(e).toHexString()
            };
            r.toHsl = function(e) {
                return (0, a.default)(e).toHslString()
            };
            r.isColor = function(e) {
                return (0, a.default)(e).isValid()
            };
            r.lighten = function(e, r) {
                return (0, a.default)(e).lighten(r).toHexString()
            };
            r.darken = function(e, r) {
                return (0, a.default)(e).darken(r).toHexString()
            };
            r.getColorModel = function(e) {
                var r, t = (0, a.default)(e).getFormat();
                return null !== (r = o.ColorModel[t]) && void 0 !== r ? r : null
            }
        },
        71267: function(e, r, t) {
            "use strict";
            var n = t(24994);
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.SystemColorId = r.SYSTEM_COLOR_CONFIG_MAP = r.SYSTEM_COLOR_AS_ORDERED_ARRAY = r.SELECTOR_COLOR_AS_ORDERED_ARRAY = r.SEED_COLOR_ID = r.PaletteIdentifiers = r.HEX_WHITE = r.HEX_SALMON = r.HEX_BLACK = r.DEFAULT_LUMA_THRESHOLD_PERCENTAGE = r.ColorModel = void 0;
            var a = n(t(43693));

            function o(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function i(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? o(Object(t), !0).forEach((function(r) {
                        (0, a.default)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            r.HEX_BLACK = "#000000";
            r.HEX_WHITE = "#FFFFFF";
            r.HEX_SALMON = "#FFAABB";
            r.DEFAULT_LUMA_THRESHOLD_PERCENTAGE = .34;
            var l = function(e) {
                return e.white = "white", e.black = "black", e.accent = "accent", e.lightAccent = "lightAccent", e.darkAccent = "darkAccent", e.safeLightAccent = "safeLightAccent", e.safeDarkAccent = "safeDarkAccent", e.safeInverseAccent = "safeInverseAccent", e.safeInverseLightAccent = "safeInverseLightAccent", e.safeInverseDarkAccent = "safeInverseDarkAccent", e
            }({});
            r.SystemColorId = l;
            var u = function(e) {
                return e.hex = "hex", e.hsl = "hsl", e.rgb = "rgb", e
            }({});
            r.ColorModel = u;
            var s = Object.freeze({
                white: {
                    hideInSelector: !0,
                    id: l.white,
                    name: "White",
                    order: 0,
                    readonly: !1,
                    userVisible: !0
                },
                black: {
                    hideInSelector: !0,
                    id: l.black,
                    name: "Black",
                    order: 1,
                    readonly: !1,
                    userVisible: !0
                },
                safeLightAccent: {
                    hideInSelector: !1,
                    id: l.safeLightAccent,
                    name: "Safe™ Light",
                    order: 2,
                    readonly: !0,
                    userVisible: !1
                },
                safeDarkAccent: {
                    hideInSelector: !1,
                    id: l.safeDarkAccent,
                    name: "Safe™ Dark",
                    order: 3,
                    readonly: !0,
                    userVisible: !1
                },
                safeInverseAccent: {
                    hideInSelector: !1,
                    id: l.safeInverseAccent,
                    name: "Safe™ Inverse",
                    order: 4,
                    readonly: !0,
                    userVisible: !1
                },
                safeInverseLightAccent: {
                    hideInSelector: !1,
                    id: l.safeInverseLightAccent,
                    name: "Safe™ Inverse Light",
                    order: 5,
                    readonly: !0,
                    userVisible: !1
                },
                safeInverseDarkAccent: {
                    hideInSelector: !1,
                    id: l.safeInverseDarkAccent,
                    name: "Safe™ Inverse Dark",
                    order: 6,
                    readonly: !0,
                    userVisible: !1
                },
                accent: {
                    hideInSelector: !1,
                    generatorSeed: !0,
                    id: l.accent,
                    name: "Accent",
                    order: 7,
                    readonly: !1,
                    userVisible: !0
                },
                lightAccent: {
                    hideInSelector: !1,
                    id: l.lightAccent,
                    name: "Light",
                    order: 8,
                    readonly: !1,
                    userVisible: !0
                },
                darkAccent: {
                    hideInSelector: !1,
                    id: l.darkAccent,
                    name: "Dark",
                    order: 9,
                    readonly: !1,
                    userVisible: !0
                }
            });
            r.SYSTEM_COLOR_CONFIG_MAP = s;
            var c = Object.values(s).sort((function(e, r) {
                return e.order - r.order
            }));
            r.SYSTEM_COLOR_AS_ORDERED_ARRAY = c;
            var h = c.map((function(e) {
                var r = !e.hideInSelector && e.userVisible;
                return i(i({}, e), {}, {
                    userVisible: r
                })
            }));
            r.SELECTOR_COLOR_AS_ORDERED_ARRAY = h;
            var f = c.find((function(e) {
                return e.generatorSeed
            })).id;
            r.SEED_COLOR_ID = f;
            var d = function(e) {
                return e.Accent_EBFC72 = "#EBFC72", e.Accent_E8E1FD = "#E8E1FD", e.Accent_FBE19F = "#FBE19F", e.Accent_A4CA9A = "#A4CA9A", e.Accent_E36B37 = "#E36B37", e.Accent_F598FF = "#F598FF", e.Accent_DFE777 = "#DFE777", e.Accent_EFB071 = "#EFB071", e.Accent_C2BFCB = "#C2BFCB", e.Accent_E55937 = "#E55937", e.Accent_7BB5B2 = "#7BB5B2", e.Accent_F2B8B4 = "#F2B8B4", e.Accent_EAEC78 = "#EAEC78", e.Accent_9CE5C7 = "#9CE5C7", e.Accent_E9A843 = "#E9A843", e.Accent_A74D4A = "#A74D4A", e.Accent_DCDCDC = "#DCDCDC", e.Accent_D4967D = "#D4967D", e.Accent_A8A6A1 = "#A8A6A1", e.Accent_9C8B7E = "#9C8B7E", e.Accent_C79288 = "#C79288", e.Accent_E1CCBE = "#E1CCBE", e.Accent_C8A47E = "#C8A47E", e.Accent_A3826C = "#A3826C", e.Accent_253551 = "#253551", e.Accent_8EB6DC = "#8EB6DC", e.Accent_F48847 = "#F48847", e.Accent_F08E80 = "#F08E80", e.Accent_F1A638 = "#F1A638", e.Accent_FC221C = "#FC221C", e.Accent_FF5E1A = "#FF5E1A", e.Accent_209D50 = "#209D50", e.Accent_FFC700 = "#FFC700", e.Accent_0303AB = "#0303AB", e.Accent_7877E6 = "#7877E6", e.Accent_8DD9BF = "#8DD9BF", e.Accent_D9D9D9 = "#D9D9D9", e.Accent_BDB2C3 = "#BDB2C3", e.Accent_B9A590 = "#B9A590", e.Accent_D9B783 = "#D9B783", e.Accent_D0CDC8 = "#D0CDC8", e.Accent_C2C8CC = "#C2C8CC", e.Accent_ECF250 = "#ECF250", e.Accent_F5F374 = "#F5F374", e.Accent_CDB2E2 = "#CDB2E2", e.Accent_536C7C = "#536C7C", e.Accent_AE9DEF = "#AE9DEF", e.Accent_7FE8FF = "#7FE8FF", e.Accent_DA5B37 = "#DA5B37", e.Accent_FF6123 = "#FF6123", e.Accent_9C9C9C = "#9C9C9C", e.Accent_BFBFBF = "#BFBFBF", e.Accent_FEABDA = "#FEABDA", e.Accent_DFEFFF = "#DFEFFF", e.Accent_CFFF81 = "#CFFF81", e.Accent_AEDF1A = "#AEDF1A", e
            }({});
            r.PaletteIdentifiers = d
        },
        95443: function(e, r, t) {
            "use strict";
            var n = t(24994);
            r.JW = C;
            var a = n(t(73738)),
                o = n(t(43693)),
                i = n(t(85715)),
                l = n(t(38970)),
                u = t(71267),
                s = n(t(58195)),
                c = t(96426),
                h = t(14213);

            function f(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function d(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? f(Object(t), !0).forEach((function(r) {
                        (0, o.default)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }

            function g(e) {
                for (var r = [], t = 0, n = Object.entries(null != e ? e : {}); t < n.length; t++) {
                    var a = (0, i.default)(n[t], 2),
                        o = a[0],
                        l = a[1],
                        s = u.SystemColorId[o],
                        c = k(l);
                    s && c && r.push({
                        id: s,
                        value: c
                    })
                }
                return r
            }

            function b(e) {
                return Object.keys(e).sort().map((function(r) {
                    return "".concat(r, ":").concat(e[r])
                })).join("-")
            }

            function p() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(e, r) {
                    var t = r.id,
                        n = r.value;
                    return e[t] || (e[t] = C(n)), e
                }), {})
            }

            function v() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.SYSTEM_COLOR_AS_ORDERED_ARRAY,
                    t = (0, l.default)(e, "id");
                return r.reduce((function(e, r) {
                    var n = r.id,
                        a = t[n];
                    return a && e.push(a), e
                }), [])
            }

            function m(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.SYSTEM_COLOR_AS_ORDERED_ARRAY,
                    t = v(null == e ? void 0 : e.colors, r).filter((function(e) {
                        var r = e.id;
                        return u.SYSTEM_COLOR_CONFIG_MAP[r].userVisible
                    }));
                return d(d({}, null != e ? e : {}), {}, {
                    colors: t
                })
            }
            var y = new s.default("@sqs/utils/palette", "orange");

            function _(e, r) {
                var t, n, a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return (null == e ? void 0 : e.values.hue) === (null == r ? void 0 : r.values.hue) && (null == e ? void 0 : e.values.saturation) === (null == r ? void 0 : r.values.saturation) && (null == e ? void 0 : e.values.lightness) === (null == r ? void 0 : r.values.lightness) && (null !== (t = null == e ? void 0 : e.values.alpha) && void 0 !== t ? t : 1) === (null !== (n = null == r ? void 0 : r.values.alpha) && void 0 !== n ? n : 1) && (!a || (null == e ? void 0 : e.userFormat) === (null == r ? void 0 : r.userFormat))
            }
            var A = function(e, r, t) {
                return Boolean("number" == typeof e && isFinite(e) && e >= r && e <= t)
            };

            function M(e) {
                var r;
                return Boolean(e && u.ColorModel[e.userFormat] && e.values && A(e.values.hue, 0, 360) && A(e.values.saturation, 0, 100) && A(e.values.lightness, 0, 100) && A(null !== (r = e.values.alpha) && void 0 !== r ? r : 1, 0, 1))
            }
            var w = function(e) {
                return Math.round(100 * e) / 100
            };

            function k(e) {
                var r;
                if (null == e) return null;
                if ("object" === (0, a.default)(e)) return M(e) ? e : null;
                var t = (0, c.parseColor)(e, u.ColorModel.hsl, !0);
                return t ? {
                    userFormat: null !== (r = (0, h.getColorModel)(e)) && void 0 !== r ? r : u.ColorModel.hsl,
                    values: d({
                        hue: w(t.hue),
                        saturation: w(t.saturation),
                        lightness: w(t.lightness)
                    }, 1 !== t.alpha ? {
                        alpha: w(t.alpha)
                    } : {})
                } : null
            }

            function x(e) {
                return e.colors.map((function(e) {
                    return d(d({}, e), {}, {
                        value: k(e.value)
                    })
                }))
            }

            function C(e) {
                var r;
                return e && "object" === (0, a.default)(e) ? M(e) && null !== (r = (0, c.stringifyColor)(d({}, e.values), e.userFormat)) && void 0 !== r ? r : null : null != e ? e : null
            }

            function F(e) {
                return e.colors.map((function(e) {
                    return d(d({}, e), {}, {
                        value: C(e.value)
                    })
                }))
            }

            function E(e, r) {
                var t;
                return null !== (t = null == e ? void 0 : e.colors.find((function(e) {
                    return e.id === r
                }))) && void 0 !== t ? t : null
            }

            function O(e, r) {
                var t;
                if (null == r) return null;
                var n = "string" == typeof r ? k(r) : r;
                return null !== (t = null == e ? void 0 : e.colors.find((function(e) {
                    return _(e.value, n, !0)
                }))) && void 0 !== t ? t : null
            }

            function S(e, r) {
                var t = E(e, r);
                return C(null == t ? void 0 : t.value)
            }

            function D(e) {
                var r;
                return null !== (r = S(e, u.SEED_COLOR_ID)) && void 0 !== r ? r : u.HEX_SALMON
            }
        },
        15659: function(e, r, t) {
            var n = t(51031),
                a = {};
            for (var o in n) n.hasOwnProperty(o) && (a[n[o]] = o);
            var i = e.exports = {
                rgb: {
                    channels: 3,
                    labels: "rgb"
                },
                hsl: {
                    channels: 3,
                    labels: "hsl"
                },
                hsv: {
                    channels: 3,
                    labels: "hsv"
                },
                hwb: {
                    channels: 3,
                    labels: "hwb"
                },
                cmyk: {
                    channels: 4,
                    labels: "cmyk"
                },
                xyz: {
                    channels: 3,
                    labels: "xyz"
                },
                lab: {
                    channels: 3,
                    labels: "lab"
                },
                lch: {
                    channels: 3,
                    labels: "lch"
                },
                hex: {
                    channels: 1,
                    labels: ["hex"]
                },
                keyword: {
                    channels: 1,
                    labels: ["keyword"]
                },
                ansi16: {
                    channels: 1,
                    labels: ["ansi16"]
                },
                ansi256: {
                    channels: 1,
                    labels: ["ansi256"]
                },
                hcg: {
                    channels: 3,
                    labels: ["h", "c", "g"]
                },
                apple: {
                    channels: 3,
                    labels: ["r16", "g16", "b16"]
                },
                gray: {
                    channels: 1,
                    labels: ["gray"]
                }
            };
            for (var l in i)
                if (i.hasOwnProperty(l)) {
                    if (!("channels" in i[l])) throw new Error("missing channels property: " + l);
                    if (!("labels" in i[l])) throw new Error("missing channel labels property: " + l);
                    if (i[l].labels.length !== i[l].channels) throw new Error("channel and label counts mismatch: " + l);
                    var u = i[l].channels,
                        s = i[l].labels;
                    delete i[l].channels, delete i[l].labels, Object.defineProperty(i[l], "channels", {
                        value: u
                    }), Object.defineProperty(i[l], "labels", {
                        value: s
                    })
                }
            i.rgb.hsl = function(e) {
                var r, t, n = e[0] / 255,
                    a = e[1] / 255,
                    o = e[2] / 255,
                    i = Math.min(n, a, o),
                    l = Math.max(n, a, o),
                    u = l - i;
                return l === i ? r = 0 : n === l ? r = (a - o) / u : a === l ? r = 2 + (o - n) / u : o === l && (r = 4 + (n - a) / u), (r = Math.min(60 * r, 360)) < 0 && (r += 360), t = (i + l) / 2, [r, 100 * (l === i ? 0 : t <= .5 ? u / (l + i) : u / (2 - l - i)), 100 * t]
            }, i.rgb.hsv = function(e) {
                var r, t, n, a, o, i = e[0] / 255,
                    l = e[1] / 255,
                    u = e[2] / 255,
                    s = Math.max(i, l, u),
                    c = s - Math.min(i, l, u),
                    h = function(e) {
                        return (s - e) / 6 / c + .5
                    };
                return 0 === c ? a = o = 0 : (o = c / s, r = h(i), t = h(l), n = h(u), i === s ? a = n - t : l === s ? a = 1 / 3 + r - n : u === s && (a = 2 / 3 + t - r), a < 0 ? a += 1 : a > 1 && (a -= 1)), [360 * a, 100 * o, 100 * s]
            }, i.rgb.hwb = function(e) {
                var r = e[0],
                    t = e[1],
                    n = e[2];
                return [i.rgb.hsl(e)[0], 100 * (1 / 255 * Math.min(r, Math.min(t, n))), 100 * (n = 1 - 1 / 255 * Math.max(r, Math.max(t, n)))]
            }, i.rgb.cmyk = function(e) {
                var r, t = e[0] / 255,
                    n = e[1] / 255,
                    a = e[2] / 255;
                return [100 * ((1 - t - (r = Math.min(1 - t, 1 - n, 1 - a))) / (1 - r) || 0), 100 * ((1 - n - r) / (1 - r) || 0), 100 * ((1 - a - r) / (1 - r) || 0), 100 * r]
            }, i.rgb.keyword = function(e) {
                var r = a[e];
                if (r) return r;
                var t, o, i, l = 1 / 0;
                for (var u in n)
                    if (n.hasOwnProperty(u)) {
                        var s = n[u],
                            c = (o = e, i = s, Math.pow(o[0] - i[0], 2) + Math.pow(o[1] - i[1], 2) + Math.pow(o[2] - i[2], 2));
                        c < l && (l = c, t = u)
                    }
                return t
            }, i.keyword.rgb = function(e) {
                return n[e]
            }, i.rgb.xyz = function(e) {
                var r = e[0] / 255,
                    t = e[1] / 255,
                    n = e[2] / 255;
                return [100 * (.4124 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92) + .3576 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * r + .7152 * t + .0722 * n), 100 * (.0193 * r + .1192 * t + .9505 * n)]
            }, i.rgb.lab = function(e) {
                var r = i.rgb.xyz(e),
                    t = r[0],
                    n = r[1],
                    a = r[2];
                return n /= 100, a /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
            }, i.hsl.rgb = function(e) {
                var r, t, n, a, o, i = e[0] / 360,
                    l = e[1] / 100,
                    u = e[2] / 100;
                if (0 === l) return [o = 255 * u, o, o];
                r = 2 * u - (t = u < .5 ? u * (1 + l) : u + l - u * l), a = [0, 0, 0];
                for (var s = 0; s < 3; s++)(n = i + 1 / 3 * -(s - 1)) < 0 && n++, n > 1 && n--, o = 6 * n < 1 ? r + 6 * (t - r) * n : 2 * n < 1 ? t : 3 * n < 2 ? r + (t - r) * (2 / 3 - n) * 6 : r, a[s] = 255 * o;
                return a
            }, i.hsl.hsv = function(e) {
                var r = e[0],
                    t = e[1] / 100,
                    n = e[2] / 100,
                    a = t,
                    o = Math.max(n, .01);
                return t *= (n *= 2) <= 1 ? n : 2 - n, a *= o <= 1 ? o : 2 - o, [r, 100 * (0 === n ? 2 * a / (o + a) : 2 * t / (n + t)), 100 * ((n + t) / 2)]
            }, i.hsv.rgb = function(e) {
                var r = e[0] / 60,
                    t = e[1] / 100,
                    n = e[2] / 100,
                    a = Math.floor(r) % 6,
                    o = r - Math.floor(r),
                    i = 255 * n * (1 - t),
                    l = 255 * n * (1 - t * o),
                    u = 255 * n * (1 - t * (1 - o));
                switch (n *= 255, a) {
                    case 0:
                        return [n, u, i];
                    case 1:
                        return [l, n, i];
                    case 2:
                        return [i, n, u];
                    case 3:
                        return [i, l, n];
                    case 4:
                        return [u, i, n];
                    case 5:
                        return [n, i, l]
                }
            }, i.hsv.hsl = function(e) {
                var r, t, n, a = e[0],
                    o = e[1] / 100,
                    i = e[2] / 100,
                    l = Math.max(i, .01);
                return n = (2 - o) * i, t = o * l, [a, 100 * (t = (t /= (r = (2 - o) * l) <= 1 ? r : 2 - r) || 0), 100 * (n /= 2)]
            }, i.hwb.rgb = function(e) {
                var r, t, n, a, o, i, l, u = e[0] / 360,
                    s = e[1] / 100,
                    c = e[2] / 100,
                    h = s + c;
                switch (h > 1 && (s /= h, c /= h), n = 6 * u - (r = Math.floor(6 * u)), 1 & r && (n = 1 - n), a = s + n * ((t = 1 - c) - s), r) {
                    default:
                        case 6:
                        case 0:
                        o = t,
                    i = a,
                    l = s;
                    break;
                    case 1:
                            o = a,
                        i = t,
                        l = s;
                        break;
                    case 2:
                            o = s,
                        i = t,
                        l = a;
                        break;
                    case 3:
                            o = s,
                        i = a,
                        l = t;
                        break;
                    case 4:
                            o = a,
                        i = s,
                        l = t;
                        break;
                    case 5:
                            o = t,
                        i = s,
                        l = a
                }
                return [255 * o, 255 * i, 255 * l]
            }, i.cmyk.rgb = function(e) {
                var r = e[0] / 100,
                    t = e[1] / 100,
                    n = e[2] / 100,
                    a = e[3] / 100;
                return [255 * (1 - Math.min(1, r * (1 - a) + a)), 255 * (1 - Math.min(1, t * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))]
            }, i.xyz.rgb = function(e) {
                var r, t, n, a = e[0] / 100,
                    o = e[1] / 100,
                    i = e[2] / 100;
                return t = -.9689 * a + 1.8758 * o + .0415 * i, n = .0557 * a + -.204 * o + 1.057 * i, r = (r = 3.2406 * a + -1.5372 * o + -.4986 * i) > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, t = t > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, [255 * (r = Math.min(Math.max(0, r), 1)), 255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
            }, i.xyz.lab = function(e) {
                var r = e[0],
                    t = e[1],
                    n = e[2];
                return t /= 100, n /= 108.883, r = (r /= 95.047) > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, [116 * (t = t > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116) - 16, 500 * (r - t), 200 * (t - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
            }, i.lab.xyz = function(e) {
                var r, t, n, a = e[0];
                r = e[1] / 500 + (t = (a + 16) / 116), n = t - e[2] / 200;
                var o = Math.pow(t, 3),
                    i = Math.pow(r, 3),
                    l = Math.pow(n, 3);
                return t = o > .008856 ? o : (t - 16 / 116) / 7.787, r = i > .008856 ? i : (r - 16 / 116) / 7.787, n = l > .008856 ? l : (n - 16 / 116) / 7.787, [r *= 95.047, t *= 100, n *= 108.883]
            }, i.lab.lch = function(e) {
                var r, t = e[0],
                    n = e[1],
                    a = e[2];
                return (r = 360 * Math.atan2(a, n) / 2 / Math.PI) < 0 && (r += 360), [t, Math.sqrt(n * n + a * a), r]
            }, i.lch.lab = function(e) {
                var r, t = e[0],
                    n = e[1];
                return r = e[2] / 360 * 2 * Math.PI, [t, n * Math.cos(r), n * Math.sin(r)]
            }, i.rgb.ansi16 = function(e) {
                var r = e[0],
                    t = e[1],
                    n = e[2],
                    a = 1 in arguments ? arguments[1] : i.rgb.hsv(e)[2];
                if (0 === (a = Math.round(a / 50))) return 30;
                var o = 30 + (Math.round(n / 255) << 2 | Math.round(t / 255) << 1 | Math.round(r / 255));
                return 2 === a && (o += 60), o
            }, i.hsv.ansi16 = function(e) {
                return i.rgb.ansi16(i.hsv.rgb(e), e[2])
            }, i.rgb.ansi256 = function(e) {
                var r = e[0],
                    t = e[1],
                    n = e[2];
                return r === t && t === n ? r < 8 ? 16 : r > 248 ? 231 : Math.round((r - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(t / 255 * 5) + Math.round(n / 255 * 5)
            }, i.ansi16.rgb = function(e) {
                var r = e % 10;
                if (0 === r || 7 === r) return e > 50 && (r += 3.5), [r = r / 10.5 * 255, r, r];
                var t = .5 * (1 + ~~(e > 50));
                return [(1 & r) * t * 255, (r >> 1 & 1) * t * 255, (r >> 2 & 1) * t * 255]
            }, i.ansi256.rgb = function(e) {
                if (e >= 232) {
                    var r = 10 * (e - 232) + 8;
                    return [r, r, r]
                }
                var t;
                return e -= 16, [Math.floor(e / 36) / 5 * 255, Math.floor((t = e % 36) / 6) / 5 * 255, t % 6 / 5 * 255]
            }, i.rgb.hex = function(e) {
                var r = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
                return "000000".substring(r.length) + r
            }, i.hex.rgb = function(e) {
                var r = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                if (!r) return [0, 0, 0];
                var t = r[0];
                3 === r[0].length && (t = t.split("").map((function(e) {
                    return e + e
                })).join(""));
                var n = parseInt(t, 16);
                return [n >> 16 & 255, n >> 8 & 255, 255 & n]
            }, i.rgb.hcg = function(e) {
                var r, t = e[0] / 255,
                    n = e[1] / 255,
                    a = e[2] / 255,
                    o = Math.max(Math.max(t, n), a),
                    i = Math.min(Math.min(t, n), a),
                    l = o - i;
                return r = l <= 0 ? 0 : o === t ? (n - a) / l % 6 : o === n ? 2 + (a - t) / l : 4 + (t - n) / l + 4, r /= 6, [360 * (r %= 1), 100 * l, 100 * (l < 1 ? i / (1 - l) : 0)]
            }, i.hsl.hcg = function(e) {
                var r = e[1] / 100,
                    t = e[2] / 100,
                    n = 1,
                    a = 0;
                return (n = t < .5 ? 2 * r * t : 2 * r * (1 - t)) < 1 && (a = (t - .5 * n) / (1 - n)), [e[0], 100 * n, 100 * a]
            }, i.hsv.hcg = function(e) {
                var r = e[1] / 100,
                    t = e[2] / 100,
                    n = r * t,
                    a = 0;
                return n < 1 && (a = (t - n) / (1 - n)), [e[0], 100 * n, 100 * a]
            }, i.hcg.rgb = function(e) {
                var r = e[0] / 360,
                    t = e[1] / 100,
                    n = e[2] / 100;
                if (0 === t) return [255 * n, 255 * n, 255 * n];
                var a, o = [0, 0, 0],
                    i = r % 1 * 6,
                    l = i % 1,
                    u = 1 - l;
                switch (Math.floor(i)) {
                    case 0:
                        o[0] = 1, o[1] = l, o[2] = 0;
                        break;
                    case 1:
                        o[0] = u, o[1] = 1, o[2] = 0;
                        break;
                    case 2:
                        o[0] = 0, o[1] = 1, o[2] = l;
                        break;
                    case 3:
                        o[0] = 0, o[1] = u, o[2] = 1;
                        break;
                    case 4:
                        o[0] = l, o[1] = 0, o[2] = 1;
                        break;
                    default:
                        o[0] = 1, o[1] = 0, o[2] = u
                }
                return a = (1 - t) * n, [255 * (t * o[0] + a), 255 * (t * o[1] + a), 255 * (t * o[2] + a)]
            }, i.hcg.hsv = function(e) {
                var r = e[1] / 100,
                    t = r + e[2] / 100 * (1 - r),
                    n = 0;
                return t > 0 && (n = r / t), [e[0], 100 * n, 100 * t]
            }, i.hcg.hsl = function(e) {
                var r = e[1] / 100,
                    t = e[2] / 100 * (1 - r) + .5 * r,
                    n = 0;
                return t > 0 && t < .5 ? n = r / (2 * t) : t >= .5 && t < 1 && (n = r / (2 * (1 - t))), [e[0], 100 * n, 100 * t]
            }, i.hcg.hwb = function(e) {
                var r = e[1] / 100,
                    t = r + e[2] / 100 * (1 - r);
                return [e[0], 100 * (t - r), 100 * (1 - t)]
            }, i.hwb.hcg = function(e) {
                var r = e[1] / 100,
                    t = 1 - e[2] / 100,
                    n = t - r,
                    a = 0;
                return n < 1 && (a = (t - n) / (1 - n)), [e[0], 100 * n, 100 * a]
            }, i.apple.rgb = function(e) {
                return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255]
            }, i.rgb.apple = function(e) {
                return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535]
            }, i.gray.rgb = function(e) {
                return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255]
            }, i.gray.hsl = i.gray.hsv = function(e) {
                return [0, 0, e[0]]
            }, i.gray.hwb = function(e) {
                return [0, 100, e[0]]
            }, i.gray.cmyk = function(e) {
                return [0, 0, 0, e[0]]
            }, i.gray.lab = function(e) {
                return [e[0], 0, 0]
            }, i.gray.hex = function(e) {
                var r = 255 & Math.round(e[0] / 100 * 255),
                    t = ((r << 16) + (r << 8) + r).toString(16).toUpperCase();
                return "000000".substring(t.length) + t
            }, i.rgb.gray = function(e) {
                return [(e[0] + e[1] + e[2]) / 3 / 255 * 100]
            }
        },
        10734: function(e, r, t) {
            var n = t(15659),
                a = t(8507),
                o = {};
            Object.keys(n).forEach((function(e) {
                o[e] = {}, Object.defineProperty(o[e], "channels", {
                    value: n[e].channels
                }), Object.defineProperty(o[e], "labels", {
                    value: n[e].labels
                });
                var r = a(e);
                Object.keys(r).forEach((function(t) {
                    var n = r[t];
                    o[e][t] = function(e) {
                        var r = function(r) {
                            if (null == r) return r;
                            arguments.length > 1 && (r = Array.prototype.slice.call(arguments));
                            var t = e(r);
                            if ("object" == typeof t)
                                for (var n = t.length, a = 0; a < n; a++) t[a] = Math.round(t[a]);
                            return t
                        };
                        return "conversion" in e && (r.conversion = e.conversion), r
                    }(n), o[e][t].raw = function(e) {
                        var r = function(r) {
                            return null == r ? r : (arguments.length > 1 && (r = Array.prototype.slice.call(arguments)), e(r))
                        };
                        return "conversion" in e && (r.conversion = e.conversion), r
                    }(n)
                }))
            })), e.exports = o
        },
        51031: function(e) {
            "use strict";
            e.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        },
        8507: function(e, r, t) {
            var n = t(15659);

            function a(e) {
                var r = function() {
                        for (var e = {}, r = Object.keys(n), t = r.length, a = 0; a < t; a++) e[r[a]] = {
                            distance: -1,
                            parent: null
                        };
                        return e
                    }(),
                    t = [e];
                for (r[e].distance = 0; t.length;)
                    for (var a = t.pop(), o = Object.keys(n[a]), i = o.length, l = 0; l < i; l++) {
                        var u = o[l],
                            s = r[u]; - 1 === s.distance && (s.distance = r[a].distance + 1, s.parent = a, t.unshift(u))
                    }
                return r
            }

            function o(e, r) {
                return function(t) {
                    return r(e(t))
                }
            }

            function i(e, r) {
                for (var t = [r[e].parent, e], a = n[r[e].parent][e], i = r[e].parent; r[i].parent;) t.unshift(r[i].parent), a = o(n[r[i].parent][i], a), i = r[i].parent;
                return a.conversion = t, a
            }
            e.exports = function(e) {
                for (var r = a(e), t = {}, n = Object.keys(r), o = n.length, l = 0; l < o; l++) {
                    var u = n[l];
                    null !== r[u].parent && (t[u] = i(u, r))
                }
                return t
            }
        },
        8156: function(e) {
            "use strict";
            e.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        },
        63945: function(e) {
            e.exports = function(e, r, t, n) {
                for (var a = -1, o = null == e ? 0 : e.length; ++a < o;) {
                    var i = e[a];
                    r(n, i, t(i), e)
                }
                return n
            }
        },
        62429: function(e, r, t) {
            var n = t(80909);
            e.exports = function(e, r, t, a) {
                return n(e, (function(e, n, o) {
                    r(a, e, t(e), o)
                })), a
            }
        },
        80909: function(e, r, t) {
            var n = t(30641),
                a = t(38329)(n);
            e.exports = a
        },
        86649: function(e, r, t) {
            var n = t(83221)();
            e.exports = n
        },
        30641: function(e, r, t) {
            var n = t(86649),
                a = t(95950);
            e.exports = function(e, r) {
                return e && n(e, r, a)
            }
        },
        42e3: function(e, r, t) {
            var n = t(63945),
                a = t(62429),
                o = t(15389),
                i = t(56449);
            e.exports = function(e, r) {
                return function(t, l) {
                    var u = i(t) ? n : a,
                        s = r ? r() : {};
                    return u(t, e, o(l, 2), s)
                }
            }
        },
        38329: function(e, r, t) {
            var n = t(64894);
            e.exports = function(e, r) {
                return function(t, a) {
                    if (null == t) return t;
                    if (!n(t)) return e(t, a);
                    for (var o = t.length, i = r ? o : -1, l = Object(t);
                        (r ? i-- : ++i < o) && !1 !== a(l[i], i, l););
                    return t
                }
            }
        },
        83221: function(e) {
            e.exports = function(e) {
                return function(r, t, n) {
                    for (var a = -1, o = Object(r), i = n(r), l = i.length; l--;) {
                        var u = i[e ? l : ++a];
                        if (!1 === t(o[u], u, o)) break
                    }
                    return r
                }
            }
        },
        38970: function(e, r, t) {
            var n = t(43360),
                a = t(42e3)((function(e, r, t) {
                    n(e, t, r)
                }));
            e.exports = a
        },
        19872: function(e, r, t) {
            "use strict";
            var n = t(83496),
                a = Array.prototype.concat,
                o = Array.prototype.slice,
                i = e.exports = function(e) {
                    for (var r = [], t = 0, i = e.length; t < i; t++) {
                        var l = e[t];
                        n(l) ? r = a.call(r, o.call(l)) : r.push(l)
                    }
                    return r
                };
            i.wrap = function(e) {
                return function() {
                    return e(i(arguments))
                }
            }
        },
        83496: function(e) {
            e.exports = function(e) {
                return !(!e || "string" == typeof e) && (e instanceof Array || Array.isArray(e) || e.length >= 0 && (e.splice instanceof Function || Object.getOwnPropertyDescriptor(e, e.length - 1) && "String" !== e.constructor.name))
            }
        },
        92987: function(e) {
            e.exports = function(e) {
                if (Array.isArray(e)) return e
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        34579: function(e) {
            function r(e, r) {
                for (var t = 0; t < r.length; t++) {
                    var n = r[t];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            e.exports = function(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        81156: function(e) {
            e.exports = function(e, r) {
                var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != t) {
                    var n, a, o = [],
                        i = !0,
                        l = !1;
                    try {
                        for (t = t.call(e); !(i = (n = t.next()).done) && (o.push(n.value), !r || o.length !== r); i = !0);
                    } catch (e) {
                        l = !0, a = e
                    } finally {
                        try {
                            i || null == t.return || t.return()
                        } finally {
                            if (l) throw a
                        }
                    }
                    return o
                }
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        47752: function(e) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        85715: function(e, r, t) {
            var n = t(92987),
                a = t(81156),
                o = t(17122),
                i = t(47752);
            e.exports = function(e, r) {
                return n(e) || a(e, r) || o(e, r) || i()
            }, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        6535: function(e) {
            e.exports = function() {
                "use strict";

                function e(r) {
                    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, e(r)
                }
                var r = /^\s+/,
                    t = /\s+$/;

                function n(e, r) {
                    if (r = r || {}, (e = e || "") instanceof n) return e;
                    if (!(this instanceof n)) return new n(e, r);
                    var t = a(e);
                    this._originalInput = e, this._r = t.r, this._g = t.g, this._b = t.b, this._a = t.a, this._roundA = Math.round(100 * this._a) / 100, this._format = r.format || t.format, this._gradientType = r.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = t.ok
                }

                function a(r) {
                    var t = {
                            r: 0,
                            g: 0,
                            b: 0
                        },
                        n = 1,
                        a = null,
                        i = null,
                        u = null,
                        c = !1,
                        h = !1;
                    return "string" == typeof r && (r = V(r)), "object" == e(r) && (z(r.r) && z(r.g) && z(r.b) ? (t = o(r.r, r.g, r.b), c = !0, h = "%" === String(r.r).substr(-1) ? "prgb" : "rgb") : z(r.h) && z(r.s) && z(r.v) ? (a = I(r.s), i = I(r.v), t = s(r.h, a, i), c = !0, h = "hsv") : z(r.h) && z(r.s) && z(r.l) && (a = I(r.s), u = I(r.l), t = l(r.h, a, u), c = !0, h = "hsl"), r.hasOwnProperty("a") && (n = r.a)), n = E(n), {
                        ok: c,
                        format: r.format || h,
                        r: Math.min(255, Math.max(t.r, 0)),
                        g: Math.min(255, Math.max(t.g, 0)),
                        b: Math.min(255, Math.max(t.b, 0)),
                        a: n
                    }
                }

                function o(e, r, t) {
                    return {
                        r: 255 * O(e, 255),
                        g: 255 * O(r, 255),
                        b: 255 * O(t, 255)
                    }
                }

                function i(e, r, t) {
                    e = O(e, 255), r = O(r, 255), t = O(t, 255);
                    var n, a, o = Math.max(e, r, t),
                        i = Math.min(e, r, t),
                        l = (o + i) / 2;
                    if (o == i) n = a = 0;
                    else {
                        var u = o - i;
                        switch (a = l > .5 ? u / (2 - o - i) : u / (o + i), o) {
                            case e:
                                n = (r - t) / u + (r < t ? 6 : 0);
                                break;
                            case r:
                                n = (t - e) / u + 2;
                                break;
                            case t:
                                n = (e - r) / u + 4
                        }
                        n /= 6
                    }
                    return {
                        h: n,
                        s: a,
                        l
                    }
                }

                function l(e, r, t) {
                    var n, a, o;

                    function i(e, r, t) {
                        return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + 6 * (r - e) * t : t < .5 ? r : t < 2 / 3 ? e + (r - e) * (2 / 3 - t) * 6 : e
                    }
                    if (e = O(e, 360), r = O(r, 100), t = O(t, 100), 0 === r) n = a = o = t;
                    else {
                        var l = t < .5 ? t * (1 + r) : t + r - t * r,
                            u = 2 * t - l;
                        n = i(u, l, e + 1 / 3), a = i(u, l, e), o = i(u, l, e - 1 / 3)
                    }
                    return {
                        r: 255 * n,
                        g: 255 * a,
                        b: 255 * o
                    }
                }

                function u(e, r, t) {
                    e = O(e, 255), r = O(r, 255), t = O(t, 255);
                    var n, a, o = Math.max(e, r, t),
                        i = Math.min(e, r, t),
                        l = o,
                        u = o - i;
                    if (a = 0 === o ? 0 : u / o, o == i) n = 0;
                    else {
                        switch (o) {
                            case e:
                                n = (r - t) / u + (r < t ? 6 : 0);
                                break;
                            case r:
                                n = (t - e) / u + 2;
                                break;
                            case t:
                                n = (e - r) / u + 4
                        }
                        n /= 6
                    }
                    return {
                        h: n,
                        s: a,
                        v: l
                    }
                }

                function s(e, r, t) {
                    e = 6 * O(e, 360), r = O(r, 100), t = O(t, 100);
                    var n = Math.floor(e),
                        a = e - n,
                        o = t * (1 - r),
                        i = t * (1 - a * r),
                        l = t * (1 - (1 - a) * r),
                        u = n % 6;
                    return {
                        r: 255 * [t, i, o, o, l, t][u],
                        g: 255 * [l, t, t, i, o, o][u],
                        b: 255 * [o, o, l, t, t, i][u]
                    }
                }

                function c(e, r, t, n) {
                    var a = [j(Math.round(e).toString(16)), j(Math.round(r).toString(16)), j(Math.round(t).toString(16))];
                    return n && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("")
                }

                function h(e, r, t, n, a) {
                    var o = [j(Math.round(e).toString(16)), j(Math.round(r).toString(16)), j(Math.round(t).toString(16)), j(H(n))];
                    return a && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) && o[3].charAt(0) == o[3].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("")
                }

                function f(e, r, t, n) {
                    return [j(H(n)), j(Math.round(e).toString(16)), j(Math.round(r).toString(16)), j(Math.round(t).toString(16))].join("")
                }

                function d(e, r) {
                    r = 0 === r ? 0 : r || 10;
                    var t = n(e).toHsl();
                    return t.s -= r / 100, t.s = S(t.s), n(t)
                }

                function g(e, r) {
                    r = 0 === r ? 0 : r || 10;
                    var t = n(e).toHsl();
                    return t.s += r / 100, t.s = S(t.s), n(t)
                }

                function b(e) {
                    return n(e).desaturate(100)
                }

                function p(e, r) {
                    r = 0 === r ? 0 : r || 10;
                    var t = n(e).toHsl();
                    return t.l += r / 100, t.l = S(t.l), n(t)
                }

                function v(e, r) {
                    r = 0 === r ? 0 : r || 10;
                    var t = n(e).toRgb();
                    return t.r = Math.max(0, Math.min(255, t.r - Math.round(-r / 100 * 255))), t.g = Math.max(0, Math.min(255, t.g - Math.round(-r / 100 * 255))), t.b = Math.max(0, Math.min(255, t.b - Math.round(-r / 100 * 255))), n(t)
                }

                function m(e, r) {
                    r = 0 === r ? 0 : r || 10;
                    var t = n(e).toHsl();
                    return t.l -= r / 100, t.l = S(t.l), n(t)
                }

                function y(e, r) {
                    var t = n(e).toHsl(),
                        a = (t.h + r) % 360;
                    return t.h = a < 0 ? 360 + a : a, n(t)
                }

                function _(e) {
                    var r = n(e).toHsl();
                    return r.h = (r.h + 180) % 360, n(r)
                }

                function A(e, r) {
                    if (isNaN(r) || r <= 0) throw new Error("Argument to polyad must be a positive number");
                    for (var t = n(e).toHsl(), a = [n(e)], o = 360 / r, i = 1; i < r; i++) a.push(n({
                        h: (t.h + i * o) % 360,
                        s: t.s,
                        l: t.l
                    }));
                    return a
                }

                function M(e) {
                    var r = n(e).toHsl(),
                        t = r.h;
                    return [n(e), n({
                        h: (t + 72) % 360,
                        s: r.s,
                        l: r.l
                    }), n({
                        h: (t + 216) % 360,
                        s: r.s,
                        l: r.l
                    })]
                }

                function w(e, r, t) {
                    r = r || 6, t = t || 30;
                    var a = n(e).toHsl(),
                        o = 360 / t,
                        i = [n(e)];
                    for (a.h = (a.h - (o * r >> 1) + 720) % 360; --r;) a.h = (a.h + o) % 360, i.push(n(a));
                    return i
                }

                function k(e, r) {
                    r = r || 6;
                    for (var t = n(e).toHsv(), a = t.h, o = t.s, i = t.v, l = [], u = 1 / r; r--;) l.push(n({
                        h: a,
                        s: o,
                        v: i
                    })), i = (i + u) % 1;
                    return l
                }
                n.prototype = {
                    isDark: function() {
                        return this.getBrightness() < 128
                    },
                    isLight: function() {
                        return !this.isDark()
                    },
                    isValid: function() {
                        return this._ok
                    },
                    getOriginalInput: function() {
                        return this._originalInput
                    },
                    getFormat: function() {
                        return this._format
                    },
                    getAlpha: function() {
                        return this._a
                    },
                    getBrightness: function() {
                        var e = this.toRgb();
                        return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
                    },
                    getLuminance: function() {
                        var e, r, t, n = this.toRgb();
                        return e = n.r / 255, r = n.g / 255, t = n.b / 255, .2126 * (e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)) + .7152 * (r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)) + .0722 * (t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4))
                    },
                    setAlpha: function(e) {
                        return this._a = E(e), this._roundA = Math.round(100 * this._a) / 100, this
                    },
                    toHsv: function() {
                        var e = u(this._r, this._g, this._b);
                        return {
                            h: 360 * e.h,
                            s: e.s,
                            v: e.v,
                            a: this._a
                        }
                    },
                    toHsvString: function() {
                        var e = u(this._r, this._g, this._b),
                            r = Math.round(360 * e.h),
                            t = Math.round(100 * e.s),
                            n = Math.round(100 * e.v);
                        return 1 == this._a ? "hsv(" + r + ", " + t + "%, " + n + "%)" : "hsva(" + r + ", " + t + "%, " + n + "%, " + this._roundA + ")"
                    },
                    toHsl: function() {
                        var e = i(this._r, this._g, this._b);
                        return {
                            h: 360 * e.h,
                            s: e.s,
                            l: e.l,
                            a: this._a
                        }
                    },
                    toHslString: function() {
                        var e = i(this._r, this._g, this._b),
                            r = Math.round(360 * e.h),
                            t = Math.round(100 * e.s),
                            n = Math.round(100 * e.l);
                        return 1 == this._a ? "hsl(" + r + ", " + t + "%, " + n + "%)" : "hsla(" + r + ", " + t + "%, " + n + "%, " + this._roundA + ")"
                    },
                    toHex: function(e) {
                        return c(this._r, this._g, this._b, e)
                    },
                    toHexString: function(e) {
                        return "#" + this.toHex(e)
                    },
                    toHex8: function(e) {
                        return h(this._r, this._g, this._b, this._a, e)
                    },
                    toHex8String: function(e) {
                        return "#" + this.toHex8(e)
                    },
                    toRgb: function() {
                        return {
                            r: Math.round(this._r),
                            g: Math.round(this._g),
                            b: Math.round(this._b),
                            a: this._a
                        }
                    },
                    toRgbString: function() {
                        return 1 == this._a ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")"
                    },
                    toPercentageRgb: function() {
                        return {
                            r: Math.round(100 * O(this._r, 255)) + "%",
                            g: Math.round(100 * O(this._g, 255)) + "%",
                            b: Math.round(100 * O(this._b, 255)) + "%",
                            a: this._a
                        }
                    },
                    toPercentageRgbString: function() {
                        return 1 == this._a ? "rgb(" + Math.round(100 * O(this._r, 255)) + "%, " + Math.round(100 * O(this._g, 255)) + "%, " + Math.round(100 * O(this._b, 255)) + "%)" : "rgba(" + Math.round(100 * O(this._r, 255)) + "%, " + Math.round(100 * O(this._g, 255)) + "%, " + Math.round(100 * O(this._b, 255)) + "%, " + this._roundA + ")"
                    },
                    toName: function() {
                        return 0 === this._a ? "transparent" : !(this._a < 1) && (C[c(this._r, this._g, this._b, !0)] || !1)
                    },
                    toFilter: function(e) {
                        var r = "#" + f(this._r, this._g, this._b, this._a),
                            t = r,
                            a = this._gradientType ? "GradientType = 1, " : "";
                        if (e) {
                            var o = n(e);
                            t = "#" + f(o._r, o._g, o._b, o._a)
                        }
                        return "progid:DXImageTransform.Microsoft.gradient(" + a + "startColorstr=" + r + ",endColorstr=" + t + ")"
                    },
                    toString: function(e) {
                        var r = !!e;
                        e = e || this._format;
                        var t = !1,
                            n = this._a < 1 && this._a >= 0;
                        return r || !n || "hex" !== e && "hex6" !== e && "hex3" !== e && "hex4" !== e && "hex8" !== e && "name" !== e ? ("rgb" === e && (t = this.toRgbString()), "prgb" === e && (t = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (t = this.toHexString()), "hex3" === e && (t = this.toHexString(!0)), "hex4" === e && (t = this.toHex8String(!0)), "hex8" === e && (t = this.toHex8String()), "name" === e && (t = this.toName()), "hsl" === e && (t = this.toHslString()), "hsv" === e && (t = this.toHsvString()), t || this.toHexString()) : "name" === e && 0 === this._a ? this.toName() : this.toRgbString()
                    },
                    clone: function() {
                        return n(this.toString())
                    },
                    _applyModification: function(e, r) {
                        var t = e.apply(null, [this].concat([].slice.call(r)));
                        return this._r = t._r, this._g = t._g, this._b = t._b, this.setAlpha(t._a), this
                    },
                    lighten: function() {
                        return this._applyModification(p, arguments)
                    },
                    brighten: function() {
                        return this._applyModification(v, arguments)
                    },
                    darken: function() {
                        return this._applyModification(m, arguments)
                    },
                    desaturate: function() {
                        return this._applyModification(d, arguments)
                    },
                    saturate: function() {
                        return this._applyModification(g, arguments)
                    },
                    greyscale: function() {
                        return this._applyModification(b, arguments)
                    },
                    spin: function() {
                        return this._applyModification(y, arguments)
                    },
                    _applyCombination: function(e, r) {
                        return e.apply(null, [this].concat([].slice.call(r)))
                    },
                    analogous: function() {
                        return this._applyCombination(w, arguments)
                    },
                    complement: function() {
                        return this._applyCombination(_, arguments)
                    },
                    monochromatic: function() {
                        return this._applyCombination(k, arguments)
                    },
                    splitcomplement: function() {
                        return this._applyCombination(M, arguments)
                    },
                    triad: function() {
                        return this._applyCombination(A, [3])
                    },
                    tetrad: function() {
                        return this._applyCombination(A, [4])
                    }
                }, n.fromRatio = function(r, t) {
                    if ("object" == e(r)) {
                        var a = {};
                        for (var o in r) r.hasOwnProperty(o) && (a[o] = "a" === o ? r[o] : I(r[o]));
                        r = a
                    }
                    return n(r, t)
                }, n.equals = function(e, r) {
                    return !(!e || !r) && n(e).toRgbString() == n(r).toRgbString()
                }, n.random = function() {
                    return n.fromRatio({
                        r: Math.random(),
                        g: Math.random(),
                        b: Math.random()
                    })
                }, n.mix = function(e, r, t) {
                    t = 0 === t ? 0 : t || 50;
                    var a = n(e).toRgb(),
                        o = n(r).toRgb(),
                        i = t / 100;
                    return n({
                        r: (o.r - a.r) * i + a.r,
                        g: (o.g - a.g) * i + a.g,
                        b: (o.b - a.b) * i + a.b,
                        a: (o.a - a.a) * i + a.a
                    })
                }, n.readability = function(e, r) {
                    var t = n(e),
                        a = n(r);
                    return (Math.max(t.getLuminance(), a.getLuminance()) + .05) / (Math.min(t.getLuminance(), a.getLuminance()) + .05)
                }, n.isReadable = function(e, r, t) {
                    var a, o, i = n.readability(e, r);
                    switch (o = !1, (a = Y(t)).level + a.size) {
                        case "AAsmall":
                        case "AAAlarge":
                            o = i >= 4.5;
                            break;
                        case "AAlarge":
                            o = i >= 3;
                            break;
                        case "AAAsmall":
                            o = i >= 7
                    }
                    return o
                }, n.mostReadable = function(e, r, t) {
                    var a, o, i, l, u = null,
                        s = 0;
                    o = (t = t || {}).includeFallbackColors, i = t.level, l = t.size;
                    for (var c = 0; c < r.length; c++)(a = n.readability(e, r[c])) > s && (s = a, u = n(r[c]));
                    return n.isReadable(e, u, {
                        level: i,
                        size: l
                    }) || !o ? u : (t.includeFallbackColors = !1, n.mostReadable(e, ["#fff", "#000"], t))
                };
                var x = n.names = {
                        aliceblue: "f0f8ff",
                        antiquewhite: "faebd7",
                        aqua: "0ff",
                        aquamarine: "7fffd4",
                        azure: "f0ffff",
                        beige: "f5f5dc",
                        bisque: "ffe4c4",
                        black: "000",
                        blanchedalmond: "ffebcd",
                        blue: "00f",
                        blueviolet: "8a2be2",
                        brown: "a52a2a",
                        burlywood: "deb887",
                        burntsienna: "ea7e5d",
                        cadetblue: "5f9ea0",
                        chartreuse: "7fff00",
                        chocolate: "d2691e",
                        coral: "ff7f50",
                        cornflowerblue: "6495ed",
                        cornsilk: "fff8dc",
                        crimson: "dc143c",
                        cyan: "0ff",
                        darkblue: "00008b",
                        darkcyan: "008b8b",
                        darkgoldenrod: "b8860b",
                        darkgray: "a9a9a9",
                        darkgreen: "006400",
                        darkgrey: "a9a9a9",
                        darkkhaki: "bdb76b",
                        darkmagenta: "8b008b",
                        darkolivegreen: "556b2f",
                        darkorange: "ff8c00",
                        darkorchid: "9932cc",
                        darkred: "8b0000",
                        darksalmon: "e9967a",
                        darkseagreen: "8fbc8f",
                        darkslateblue: "483d8b",
                        darkslategray: "2f4f4f",
                        darkslategrey: "2f4f4f",
                        darkturquoise: "00ced1",
                        darkviolet: "9400d3",
                        deeppink: "ff1493",
                        deepskyblue: "00bfff",
                        dimgray: "696969",
                        dimgrey: "696969",
                        dodgerblue: "1e90ff",
                        firebrick: "b22222",
                        floralwhite: "fffaf0",
                        forestgreen: "228b22",
                        fuchsia: "f0f",
                        gainsboro: "dcdcdc",
                        ghostwhite: "f8f8ff",
                        gold: "ffd700",
                        goldenrod: "daa520",
                        gray: "808080",
                        green: "008000",
                        greenyellow: "adff2f",
                        grey: "808080",
                        honeydew: "f0fff0",
                        hotpink: "ff69b4",
                        indianred: "cd5c5c",
                        indigo: "4b0082",
                        ivory: "fffff0",
                        khaki: "f0e68c",
                        lavender: "e6e6fa",
                        lavenderblush: "fff0f5",
                        lawngreen: "7cfc00",
                        lemonchiffon: "fffacd",
                        lightblue: "add8e6",
                        lightcoral: "f08080",
                        lightcyan: "e0ffff",
                        lightgoldenrodyellow: "fafad2",
                        lightgray: "d3d3d3",
                        lightgreen: "90ee90",
                        lightgrey: "d3d3d3",
                        lightpink: "ffb6c1",
                        lightsalmon: "ffa07a",
                        lightseagreen: "20b2aa",
                        lightskyblue: "87cefa",
                        lightslategray: "789",
                        lightslategrey: "789",
                        lightsteelblue: "b0c4de",
                        lightyellow: "ffffe0",
                        lime: "0f0",
                        limegreen: "32cd32",
                        linen: "faf0e6",
                        magenta: "f0f",
                        maroon: "800000",
                        mediumaquamarine: "66cdaa",
                        mediumblue: "0000cd",
                        mediumorchid: "ba55d3",
                        mediumpurple: "9370db",
                        mediumseagreen: "3cb371",
                        mediumslateblue: "7b68ee",
                        mediumspringgreen: "00fa9a",
                        mediumturquoise: "48d1cc",
                        mediumvioletred: "c71585",
                        midnightblue: "191970",
                        mintcream: "f5fffa",
                        mistyrose: "ffe4e1",
                        moccasin: "ffe4b5",
                        navajowhite: "ffdead",
                        navy: "000080",
                        oldlace: "fdf5e6",
                        olive: "808000",
                        olivedrab: "6b8e23",
                        orange: "ffa500",
                        orangered: "ff4500",
                        orchid: "da70d6",
                        palegoldenrod: "eee8aa",
                        palegreen: "98fb98",
                        paleturquoise: "afeeee",
                        palevioletred: "db7093",
                        papayawhip: "ffefd5",
                        peachpuff: "ffdab9",
                        peru: "cd853f",
                        pink: "ffc0cb",
                        plum: "dda0dd",
                        powderblue: "b0e0e6",
                        purple: "800080",
                        rebeccapurple: "663399",
                        red: "f00",
                        rosybrown: "bc8f8f",
                        royalblue: "4169e1",
                        saddlebrown: "8b4513",
                        salmon: "fa8072",
                        sandybrown: "f4a460",
                        seagreen: "2e8b57",
                        seashell: "fff5ee",
                        sienna: "a0522d",
                        silver: "c0c0c0",
                        skyblue: "87ceeb",
                        slateblue: "6a5acd",
                        slategray: "708090",
                        slategrey: "708090",
                        snow: "fffafa",
                        springgreen: "00ff7f",
                        steelblue: "4682b4",
                        tan: "d2b48c",
                        teal: "008080",
                        thistle: "d8bfd8",
                        tomato: "ff6347",
                        turquoise: "40e0d0",
                        violet: "ee82ee",
                        wheat: "f5deb3",
                        white: "fff",
                        whitesmoke: "f5f5f5",
                        yellow: "ff0",
                        yellowgreen: "9acd32"
                    },
                    C = n.hexNames = F(x);

                function F(e) {
                    var r = {};
                    for (var t in e) e.hasOwnProperty(t) && (r[e[t]] = t);
                    return r
                }

                function E(e) {
                    return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
                }

                function O(e, r) {
                    R(e) && (e = "100%");
                    var t = B(e);
                    return e = Math.min(r, Math.max(0, parseFloat(e))), t && (e = parseInt(e * r, 10) / 100), Math.abs(e - r) < 1e-6 ? 1 : e % r / parseFloat(r)
                }

                function S(e) {
                    return Math.min(1, Math.max(0, e))
                }

                function D(e) {
                    return parseInt(e, 16)
                }

                function R(e) {
                    return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
                }

                function B(e) {
                    return "string" == typeof e && -1 != e.indexOf("%")
                }

                function j(e) {
                    return 1 == e.length ? "0" + e : "" + e
                }

                function I(e) {
                    return e <= 1 && (e = 100 * e + "%"), e
                }

                function H(e) {
                    return Math.round(255 * parseFloat(e)).toString(16)
                }

                function L(e) {
                    return D(e) / 255
                }
                var P, q, T, N = (q = "[\\s|\\(]+(" + (P = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + P + ")[,|\\s]+(" + P + ")\\s*\\)?", T = "[\\s|\\(]+(" + P + ")[,|\\s]+(" + P + ")[,|\\s]+(" + P + ")[,|\\s]+(" + P + ")\\s*\\)?", {
                    CSS_UNIT: new RegExp(P),
                    rgb: new RegExp("rgb" + q),
                    rgba: new RegExp("rgba" + T),
                    hsl: new RegExp("hsl" + q),
                    hsla: new RegExp("hsla" + T),
                    hsv: new RegExp("hsv" + q),
                    hsva: new RegExp("hsva" + T),
                    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                });

                function z(e) {
                    return !!N.CSS_UNIT.exec(e)
                }

                function V(e) {
                    e = e.replace(r, "").replace(t, "").toLowerCase();
                    var n, a = !1;
                    if (x[e]) e = x[e], a = !0;
                    else if ("transparent" == e) return {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0,
                        format: "name"
                    };
                    return (n = N.rgb.exec(e)) ? {
                        r: n[1],
                        g: n[2],
                        b: n[3]
                    } : (n = N.rgba.exec(e)) ? {
                        r: n[1],
                        g: n[2],
                        b: n[3],
                        a: n[4]
                    } : (n = N.hsl.exec(e)) ? {
                        h: n[1],
                        s: n[2],
                        l: n[3]
                    } : (n = N.hsla.exec(e)) ? {
                        h: n[1],
                        s: n[2],
                        l: n[3],
                        a: n[4]
                    } : (n = N.hsv.exec(e)) ? {
                        h: n[1],
                        s: n[2],
                        v: n[3]
                    } : (n = N.hsva.exec(e)) ? {
                        h: n[1],
                        s: n[2],
                        v: n[3],
                        a: n[4]
                    } : (n = N.hex8.exec(e)) ? {
                        r: D(n[1]),
                        g: D(n[2]),
                        b: D(n[3]),
                        a: L(n[4]),
                        format: a ? "name" : "hex8"
                    } : (n = N.hex6.exec(e)) ? {
                        r: D(n[1]),
                        g: D(n[2]),
                        b: D(n[3]),
                        format: a ? "name" : "hex"
                    } : (n = N.hex4.exec(e)) ? {
                        r: D(n[1] + "" + n[1]),
                        g: D(n[2] + "" + n[2]),
                        b: D(n[3] + "" + n[3]),
                        a: L(n[4] + "" + n[4]),
                        format: a ? "name" : "hex8"
                    } : !!(n = N.hex3.exec(e)) && {
                        r: D(n[1] + "" + n[1]),
                        g: D(n[2] + "" + n[2]),
                        b: D(n[3] + "" + n[3]),
                        format: a ? "name" : "hex"
                    }
                }

                function Y(e) {
                    var r, t;
                    return "AA" !== (r = ((e = e || {
                        level: "AA",
                        size: "small"
                    }).level || "AA").toUpperCase()) && "AAA" !== r && (r = "AA"), "small" !== (t = (e.size || "small").toLowerCase()) && "large" !== t && (t = "small"), {
                        level: r,
                        size: t
                    }
                }
                return n
            }()
        }
    }
]);