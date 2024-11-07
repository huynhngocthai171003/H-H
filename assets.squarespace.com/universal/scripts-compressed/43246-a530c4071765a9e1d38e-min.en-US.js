"use strict";
(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [43246], {
        332563: (te, P, i) => {
            Object.defineProperty(P, "__esModule", {
                value: !0
            }), P.getPluralHash = P.getTranslateHash = void 0;
            var u = i(763268),
                C = u.__importDefault(i(625392)),
                Z = u.__importDefault(i(412139)),
                Y = ["one", "other"],
                L = function(b) {
                    return b.replace(/\n/g, "\\n")
                },
                k = function(b, O, p) {
                    return b + "value:".concat(L(O)) + (p ? "notes:".concat(L(p)) : "")
                };

            function E(b, O, p) {
                var I = p != null ? p : "";
                return k(O, b, I)
            }

            function G(b, O, p) {
                var I = p != null ? p : "",
                    $ = Object.keys(b).map(function(R) {
                        return Y.includes(R) ? "".concat(R, ":").concat(b[R]) : ""
                    }).join("");
                return k(O, $, I)
            }
            var Q = (0, C.default)(function(b, O, p) {
                    return (0, Z.default)(E(b, O, p))
                }, E),
                J = (0, C.default)(function(b, O, p) {
                    return (0, Z.default)(G(b, O, p))
                }, G),
                D = function(b, O) {
                    return Q(b, O.project, O.notes)
                };
            P.getTranslateHash = D;
            var X = function(b, O) {
                return J(b, O.project, O.notes)
            };
            P.getPluralHash = X
        },
        87818: (te, P, i) => {
            var u;
            u = {
                value: !0
            }, P.Ju = P.H5 = void 0;
            var C = i(332563);
            Object.defineProperty(P, "H5", {
                enumerable: !0,
                get: function() {
                    return C.getTranslateHash
                }
            }), Object.defineProperty(P, "Ju", {
                enumerable: !0,
                get: function() {
                    return C.getPluralHash
                }
            })
        },
        943246: (te, P, i) => {
            i.r(P), i.d(P, {
                I18nContext: () => C,
                useFormatters: () => le,
                useFormattingLocale: () => Je,
                useI18nHelpers: () => me,
                useLoadTranslations: () => q,
                usePluralWithTranslationLoader: () => Pe,
                useTranslateWithTranslationLoader: () => Se,
                useTranslationLocale: () => ve,
                withI18n: () => Fr
            });
            var u = i(174161),
                C = (0, u.createContext)(null),
                Z = i(392338),
                Y = i(346797),
                L = i.n(Y);

            function k(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? k(Object(r), !0).forEach(function(n) {
                        L()(e, n, r[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                    })
                }
                return e
            }
            var G = {
                group: !0,
                round: "half-up"
            };

            function Q(e) {
                var t = (0, u.useCallback)(function(s, l, c) {
                        var o = E(E({}, G), c);
                        return isNaN(s) ? String(NaN) : e.Numbers.formatCurrency(s, l, o)
                    }, [e]),
                    r = (0, u.useCallback)(function(s, l, c) {
                        var o = E(E({}, G), c);
                        return e.Numbers.formatCurrencyToParts(s, l, o)
                    }, [e]),
                    n = (0, u.useCallback)(function(s) {
                        return e.Numbers.getCurrencyFractions(s)
                    }, [e]),
                    a = (0, u.useCallback)(function(s, l) {
                        return e.Numbers.getCurrencySymbol(s, l)
                    }, [e]);
                return {
                    formatCurrency: t,
                    formatCurrencyToParts: r,
                    getCurrencySymbol: a,
                    getCurrencyFractions: n
                }
            }
            var J = Q,
                D = function(t) {
                    var r, n = (r = Intl) === null || r === void 0 || (r = r.DateTimeFormat()) === null || r === void 0 || (r = r.resolvedOptions()) === null || r === void 0 ? void 0 : r.timeZone;
                    return t instanceof Date || typeof t == "number" ? {
                        date: t,
                        zoneId: n
                    } : t.zoneId ? t : {
                        date: t.date,
                        zoneId: n
                    }
                },
                X = function(t) {
                    var r = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
                    return r[t.dayOfWeek() - 1]
                },
                b = function(t, r, n) {
                    var a = t.Calendars.formatDate(r, {
                        time: "short"
                    });
                    return t.Calendars.formatDateWrapper(n, a, {
                        atTime: !1,
                        width: "full"
                    })
                };

            function O(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? O(Object(r), !0).forEach(function(n) {
                        L()(e, n, r[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                    })
                }
                return e
            }
            var I = {
                    date: "medium"
                },
                $ = {
                    ca: "gregory",
                    time: "yMMMhm",
                    date: "yMMMd"
                };

            function R(e) {
                var t = (0, u.useCallback)(function(l) {
                        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : I,
                            o = D(l);
                        return e.Calendars.formatDate(o, c)
                    }, [e]),
                    r = (0, u.useCallback)(function(l, c, o) {
                        var v = D(l),
                            d = D(c);
                        return e.Calendars.formatDateInterval(v, d, p(p({}, $), o))
                    }, [e]),
                    n = (0, u.useCallback)(function(l, c, o) {
                        var v = D(l),
                            d = D(c),
                            g = e.Calendars.toGregorianDate(v),
                            m = e.Calendars.toGregorianDate(d),
                            f = g.differenceSigned(m);
                        if ([f.week, f.month, f.year].some(function(y) {
                                return y
                            })) return t(c, p(p({}, I), {}, {
                            context: o == null ? void 0 : o.context
                        }));
                        if (f.day <= -2) {
                            var h = -1,
                                j = e.Calendars.formatRelativeTimeField(h, X(m), {
                                    context: o == null ? void 0 : o.context
                                });
                            return b(e, m, j)
                        }
                        if (f.day >= 2) {
                            var T = t(d, {
                                skeleton: "EEEE",
                                context: o == null ? void 0 : o.context
                            });
                            return b(e, m, T)
                        }
                        var N = e.Calendars.formatRelativeTime(v, d, {
                            field: "day",
                            context: o == null ? void 0 : o.context
                        });
                        return b(e, m, N)
                    }, [e, t]),
                    a = (0, u.useCallback)(function(l) {
                        return e.Calendars.timeZoneInfo(l)
                    }, [e]),
                    s = (0, u.useCallback)(function(l, c) {
                        return e.Calendars.timeZoneFromUTC(l, c)
                    }, [e]);
                return {
                    formatDate: t,
                    formatDateInterval: r,
                    formatRelativeTime: n,
                    getTimeZoneInfo: a,
                    getTimeZoneInfoFromUTC: s
                }
            }
            var Ee = R,
                De = i(647451),
                Ae = i(625392),
                _ = i.n(Ae),
                Fe = i(900270),
                Ie = function(t) {
                    var r = t.loader;
                    return new De.CLDRFramework({
                        loader: r,
                        config: Fe.config
                    })
                },
                ne = _()(Ie, function(e) {
                    var t = e.loader;
                    return t
                }),
                A = "Missing I18nContext value. <I18nContext.Provider /> Must be present higher up the component tree for your React root",
                we = "useTranslate() requires a translations dictionary",
                Me = ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"],
                ke = ["CU", "IR", "KP", "SD", "SY"],
                Ge = {
                    ar: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
                    be: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F",
                    bg: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438",
                    ca: "Catal\xE0",
                    cs: "\u010Ce\u0161tina",
                    da: "Dansk",
                    de: "Deutsch",
                    el: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",
                    en: "English",
                    es: "Espa\xF1ol",
                    et: "Eesti",
                    fi: "Suomi",
                    fr: "Fran\xE7ais",
                    hi: "\u0939\u093F\u0928\u094D\u0926\u0940",
                    hr: "Hrvatski",
                    hu: "Magyar",
                    is: "\xCDslenska",
                    it: "Italiano",
                    iw: "\u05E2\u05D1\u05E8\u05D9\u05EA",
                    ja: "\u65E5\u672C\u8A9E",
                    ko: "\uD55C\uAD6D\uC5B4",
                    lt: "Lietuvi\u0173",
                    lv: "Latvie\u0161u",
                    mk: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438",
                    nl: "Nederlands",
                    no: "Norsk",
                    pl: "Polski",
                    pt: "Portugu\xEAs (Brasil)",
                    ro: "Rom\xE2n\u0103",
                    ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
                    sh: "Srpskohrvatski",
                    sr: "\u0421\u0440\u043F\u0441\u043A\u0438",
                    sk: "Sloven\u010Dina",
                    sl: "Sloven\u0161\u010Dina",
                    sq: "Shqip",
                    sv: "Svenska",
                    th: "\u0E44\u0E17\u0E22",
                    tr: "T\xFCrk\xE7e",
                    uk: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
                    zh: "\u4E2D\u6587"
                };

            function Re() {
                var e = (0, u.useContext)(C);
                if (e === null) throw new Error(A);
                var t = e.cldrLoader,
                    r = e.formattingLocale,
                    n = ne({
                        loader: t
                    });
                return (0, u.useMemo)(function() {
                    return n.get(r)
                }, [n, r])
            }
            var xe = Re;

            function Ue(e) {
                var t = (0, u.useCallback)(function(r, n) {
                    return e.General.formatList(r, n)
                }, [e]);
                return {
                    formatList: t
                }
            }
            var He = Ue;

            function ae(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? ae(Object(r), !0).forEach(function(n) {
                        L()(e, n, r[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ae(Object(r)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                    })
                }
                return e
            }
            var Ke = {
                group: !0,
                round: "half-up",
                errors: ["nan"]
            };

            function We(e) {
                var t = (0, u.useCallback)(function(n, a) {
                        return e.Numbers.formatDecimal(n, oe(oe({}, Ke), a))
                    }, [e]),
                    r = (0, u.useCallback)(function() {
                        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "latn",
                            a = e.General.bundle(),
                            s = e.Schema.Numbers.numberSystem.get(n);
                        if (!s) throw new Error("[@sqs/i18n-react]: missing number system: ".concat(n));
                        return {
                            symbols: s.symbols.mapping(a),
                            pattern: s.decimalFormats.standard.get(a)
                        }
                    }, [e]);
                return {
                    formatDecimal: t,
                    getNumberSystemMetadata: r
                }
            }
            var Ve = We;

            function ue(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function se(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? ue(Object(r), !0).forEach(function(n) {
                        L()(e, n, r[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ue(Object(r)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                    })
                }
                return e
            }
            var Be = {
                group: !0,
                round: "half-up",
                length: "long"
            };

            function ze(e) {
                var t = (0, u.useCallback)(function(n, a) {
                        return e.Units.formatQuantity(n, se(se({}, Be), a))
                    }, [e]),
                    r = (0, u.useCallback)(function() {
                        return e.Units.availableUnits()
                    }, [e]);
                return {
                    formatQuantity: t,
                    getAvailableUnits: r
                }
            }
            var Ze = ze;

            function ie(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? ie(Object(r), !0).forEach(function(n) {
                        L()(e, n, r[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ie(Object(r)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                    })
                }
                return e
            }

            function Ye() {
                var e = xe(),
                    t = J(e),
                    r = Ee(e),
                    n = He(e),
                    a = Ze(e),
                    s = Ve(e);
                return x(x(x(x(x({}, t), r), n), a), s)
            }
            var le = Ye,
                Qe = function() {
                    var t = (0, u.useContext)(C);
                    if (t === null) throw new Error(A);
                    return t.formattingLocale
                },
                Je = Qe,
                Xe = i(375798),
                K = i.n(Xe),
                $e = i(825704);

            function _e() {
                var e = (0, u.useContext)(C);
                if (e === null) throw new Error(A);
                var t = e.cldrLoader,
                    r = e.translationLocale,
                    n = ne({
                        loader: t
                    });
                return (0, u.useMemo)(function() {
                    return n.get(r)
                }, [n, r])
            }
            var ce = _e,
                qe = function() {
                    var t = (0, u.useContext)(C);
                    if (t === null) throw new Error(A);
                    return t.translationLocale
                },
                ve = qe,
                er = {
                    context: "standalone"
                },
                rr = {
                    context: "standalone"
                },
                fe = {
                    context: "ui-list-or-menu"
                };

            function tr() {
                var e = ce(),
                    t = ve(),
                    r = (0, u.useCallback)(function(o) {
                        var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : er;
                        return e.General.getRegionDisplayName(o, v)
                    }, [e]),
                    n = (0, u.useCallback)(function(o) {
                        var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rr;
                        return e.General.getLanguageDisplayName(o, v)
                    }, [e]),
                    a = (0, u.useCallback)(function(o) {
                        var v, d = $e.LocaleResolver.parseLocale(o).language();
                        return (v = Ge[d]) !== null && v !== void 0 ? v : n(o)
                    }, [n]),
                    s = (0, u.useCallback)(function(o, v) {
                        var d = o.map(function(g) {
                            return [g, r(g, v)]
                        });
                        return d.sort(function(g, m) {
                            var f = K()(g, 2),
                                h = f[0],
                                j = f[1],
                                T = K()(m, 2),
                                N = T[0],
                                y = T[1];
                            return j.localeCompare(y, t)
                        }).reduce(function(g, m) {
                            var f = K()(m, 2),
                                h = f[0],
                                j = f[1];
                            return g[h] = j, g
                        }, {})
                    }, [r, t]),
                    l = (0, u.useCallback)(function() {
                        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : fe;
                        return s(Me, o)
                    }, [s]),
                    c = (0, u.useCallback)(function() {
                        var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : fe;
                        return s(ke, o)
                    }, [s]);
                return {
                    getCountryName: r,
                    getLanguageName: n,
                    getNativeLanguageName: a,
                    getCountries: l,
                    getOfacCountries: c
                }
            }
            var me = tr;

            function nr(e) {
                var t = (0, u.useContext)(C);
                if (t === null) throw new Error(A);
                if (!e.translationsLoader) throw new Error("useLoadTranslations() requires a passed translationsLoader function");
                var r = e.translationsLoader;
                return (0, u.useMemo)(function() {
                    return r(t.translationLocale)
                }, [t.translationLocale, r])
            }
            var q = nr,
                ar = i(432405),
                de = i.n(ar),
                or = i(291341),
                ge = i.n(or),
                be = i(87818),
                ur = i(485774),
                sr = i.n(ur),
                ir = /\{([^}]+)\}/g;

            function lr(e, t) {
                var r = t.map(function(n) {
                    return {
                        key: n,
                        index: e.indexOf(n)
                    }
                }).filter(function(n) {
                    var a = n.index;
                    return a !== -1
                }).sort(function(n, a) {
                    return n.index - a.index
                });
                return r[0] || null
            }

            function pe(e, t) {
                return Object.entries(e).reduce(function(r, n) {
                    var a = K()(n, 2),
                        s = a[0],
                        l = a[1];
                    return (!Object.values(t).includes(l) || !Object.keys(t).includes(s)) && (r[s] = l), r
                }, {})
            }

            function ee(e) {
                if (!e) return [];
                var t = e.match(ir);
                if (t === null) return [e];
                for (var r = []; e.length;) {
                    var n = lr(e, t);
                    if (n === null) break;
                    r.push(e.slice(0, n.index)), r.push(n.key), e = e.slice(n.index + (n.key ? n.key.length : 0))
                }
                return r.push(e), r
            }

            function ye(e, t) {
                var r = ee(e),
                    n = [];
                return t && (r = r.map(function(a) {
                    var s = sr()(t, function(l, c) {
                        return "{".concat(c, "}") === a
                    });
                    return s ? u.isValidElement(t[s]) && t[s].key === null ? (n = n.concat(s), u.cloneElement(t[s], {
                        key: s
                    })) : t[s] : a
                })), {
                    children: r,
                    replaced: n
                }
            }

            function Oe(e, t) {
                var r = {
                    project: e
                };
                return t && Object.assign(r, {
                    notes: t
                }), r
            }
            var he = function(t, r, n) {
                return n != null ? n : {}
            };

            function cr(e) {
                return e.displayName || e.name || "Component"
            }

            function w(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return u.createElement("span", t, e)
            }
            var vr = /({[^}]+})/g,
                fr = /{([^}]+)}/,
                mr = _()(function(e) {
                    return e.split(vr)
                }),
                dr = function(t, r) {
                    return "".concat(t.join(""), "-").concat(JSON.stringify(r))
                },
                gr = _()(function(e, t) {
                    return e.map(function(r) {
                        var n = r.match(fr);
                        return n && t[n[1]] ? t[n[1]] : r
                    }).join("")
                }, dr),
                Te = function(t, r) {
                    var n = mr(t);
                    return gr(n, r)
                },
                br = i(570004),
                pr = new br.VisualContext({
                    source: "@sqs/i18n-react"
                }),
                W = pr,
                yr = ["forms", "n", "project", "notes"];

            function Ce(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function je(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? Ce(Object(r), !0).forEach(function(n) {
                        L()(e, n, r[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ce(Object(r)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                    })
                }
                return e
            }

            function Or(e) {
                var t = (0, u.useContext)(C);
                if (t === null) throw new Error(A);
                if (!e || !e.translations) throw new Error("usePlural() requires a translations dictionary");
                var r = t.htmlAttributesTransform,
                    n = r === void 0 ? he : r,
                    a = e.translations,
                    s = ce(),
                    l = (0, u.useCallback)(function(o, v, d, g) {
                        var m, f = (0, be.Ju)(o, g),
                            h = s.Numbers.getPluralCardinal(v),
                            j = (m = a[f]) !== null && m !== void 0 ? m : o,
                            T = j[h],
                            N = je(je({}, d), {}, {
                                "%n": s.Numbers.formatDecimal(v, {
                                    group: !0,
                                    round: "half-up",
                                    errors: ["nan"]
                                })
                            }),
                            y = Te(T, N);
                        return W.isExtensionEnabled && W.updateStringMap(f, y), y
                    }, [s, a]),
                    c = (0, u.useCallback)(function(o) {
                        var v = o.forms,
                            d = o.n,
                            g = o.project,
                            m = o.notes,
                            f = de()(o, yr),
                            h = {},
                            j = {},
                            T = v && v.other ? v.other : null;
                        if (typeof d != "number" || !T) return null;
                        if (typeof T != "string") return w(T);
                        Object.keys(f).forEach(function(z) {
                            var H = f[z];
                            u.isValidElement(H) ? h[z] = H : j[z] = H
                        });
                        var N = Oe(g, m),
                            y = l(v, d, j, N),
                            re = ee(Object.values(v).join(",")),
                            S = ge()(j, function(z, H) {
                                return !re.includes("{".concat(H, "}"))
                            }),
                            V = pe(j, S),
                            U = {
                                strings: Object.keys(V)
                            };
                        if (Object.keys(h).length > 0) {
                            var B = ye(y, h),
                                M = B.children,
                                F = B.replaced;
                            return U.components = F, S = n(y, U, S), w(M, S)
                        }
                        return S = n(y, U, S), w(y, S)
                    }, [l, n]);
                return c.displayName = "PluralWrapper", {
                    pluralize: l,
                    Plural: c
                }
            }
            var hr = Or,
                Tr = function(t) {
                    var r = q({
                            translationsLoader: t
                        }),
                        n = hr({
                            translations: r
                        });
                    return n
                },
                Pe = Tr,
                Cr = ["children", "project", "notes"];

            function jr(e) {
                var t = (0, u.useContext)(C);
                if (t === null) throw new Error(A);
                if (!e || !e.translations) throw new Error(we);
                var r = t.htmlAttributesTransform,
                    n = r === void 0 ? he : r,
                    a = e.translations,
                    s = (0, u.useCallback)(function(c, o, v) {
                        var d = (0, be.H5)(c, v),
                            g = a[d],
                            m = g != null ? g : c,
                            f = o ? Te(m, o) : m;
                        return W.isExtensionEnabled && W.updateStringMap(d, f), f
                    }, [a]),
                    l = (0, u.useCallback)(function(c) {
                        var o = c.children,
                            v = c.project,
                            d = c.notes,
                            g = de()(c, Cr),
                            m = {},
                            f = {},
                            h = o;
                        if (!h) return null;
                        if (typeof h != "string") return w(h);
                        Object.keys(g).forEach(function(M) {
                            var F = g[M];
                            u.isValidElement(F) ? m[M] = F : f[M] = F
                        });
                        var j = Oe(v, d),
                            T = s(h, f, j),
                            N = ee(h),
                            y = ge()(f, function(M, F) {
                                return !N.includes("{".concat(F, "}"))
                            }),
                            re = pe(f, y),
                            S = {
                                strings: Object.keys(re)
                            };
                        if (Object.keys(m).length > 0) {
                            var V = ye(T, m),
                                U = V.children,
                                B = V.replaced;
                            return S.components = B, y = n(T, S, y), w(U, y)
                        }
                        return y = n(T, S, y), w(T, y)
                    }, [s, n]);
                return l.displayName = "TWrapper", {
                    t: s,
                    T: l
                }
            }
            var Pr = jr,
                Sr = function(t) {
                    var r = q({
                            translationsLoader: t
                        }),
                        n = Pr({
                            translations: r
                        });
                    return n
                },
                Se = Sr,
                Lr = i(987195),
                Nr = i.n(Lr),
                Er = i(192628),
                Dr = i.n(Er);

            function Le(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function Ne(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t] != null ? arguments[t] : {};
                    t % 2 ? Le(Object(r), !0).forEach(function(n) {
                        L()(e, n, r[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Le(Object(r)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                    })
                }
                return e
            }
            var Ar = function(t, r) {
                    var n = r.translationsLoader,
                        a = function(l) {
                            var c = Se(n),
                                o = c.t,
                                v = c.T,
                                d = Pe(n),
                                g = d.pluralize,
                                m = d.Plural,
                                f = Ne(Ne({
                                    t: o,
                                    T: v,
                                    pluralize: g,
                                    Plural: m
                                }, le()), me());
                            return u.createElement(t, Nr()({}, l, {
                                i18n: f
                            }))
                        };
                    return a.displayName = "withI18n(".concat(cr(t), ")"), Dr()(a, t)
                },
                Fr = Ar
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/837eaa29aa021fc1865c3356871cbb81/43246-a530c4071765a9e1d38e-min.en-US.js.map