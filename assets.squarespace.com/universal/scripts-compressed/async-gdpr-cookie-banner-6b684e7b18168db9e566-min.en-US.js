(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [84467], {
        832979: (h, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var e;
            (function(a) {
                a.SUB_FOOTER = "SUB_FOOTER", a.PILL = "PILL", a.HIDDEN = "HIDDEN"
            })(e || (e = {}));
            var o = e;
            t.default = o, h.exports = t.default
        },
        845076: (h, t) => {
            var e, o;
            /*!
              Copyright (c) 2018 Jed Watson.
              Licensed under the MIT License (MIT), see
              http://jedwatson.github.io/classnames
            */
            (function() {
                "use strict";
                var a = {}.hasOwnProperty;

                function f() {
                    for (var u = [], s = 0; s < arguments.length; s++) {
                        var i = arguments[s];
                        if (i) {
                            var y = typeof i;
                            if (y === "string" || y === "number") u.push(i);
                            else if (Array.isArray(i)) {
                                if (i.length) {
                                    var m = f.apply(null, i);
                                    m && u.push(m)
                                }
                            } else if (y === "object")
                                if (i.toString === Object.prototype.toString)
                                    for (var r in i) a.call(i, r) && i[r] && u.push(r);
                                else u.push(i.toString())
                        }
                    }
                    return u.join(" ")
                }
                h.exports ? (f.default = f, h.exports = f) : (e = [], o = function() {
                    return f
                }.apply(t, e), o !== void 0 && (h.exports = o))
            })()
        },
        418008: (h, t, e) => {
            var o = "Expected a function",
                a = NaN,
                f = "[object Symbol]",
                u = /^\s+|\s+$/g,
                s = /^[-+]0x[0-9a-f]+$/i,
                i = /^0b[01]+$/i,
                y = /^0o[0-7]+$/i,
                m = parseInt,
                r = typeof e.g == "object" && e.g && e.g.Object === Object && e.g,
                O = typeof self == "object" && self && self.Object === Object && self,
                g = r || O || Function("return this")(),
                S = Object.prototype,
                T = S.toString,
                E = Math.max,
                I = Math.min,
                _ = function() {
                    return g.Date.now()
                };

            function p(v, P, M) {
                var N, R, D, G, j, n, d = 0,
                    c = !1,
                    C = !1,
                    B = !0;
                if (typeof v != "function") throw new TypeError(o);
                P = w(P) || 0, b(M) && (c = !!M.leading, C = "maxWait" in M, D = C ? E(w(M.maxWait) || 0, P) : D, B = "trailing" in M ? !!M.trailing : B);

                function k(L) {
                    var V = N,
                        $ = R;
                    return N = R = void 0, d = L, G = v.apply($, V), G
                }

                function W(L) {
                    return d = L, j = setTimeout(F, P), c ? k(L) : G
                }

                function K(L) {
                    var V = L - n,
                        $ = L - d,
                        x = P - V;
                    return C ? I(x, D - $) : x
                }

                function U(L) {
                    var V = L - n,
                        $ = L - d;
                    return n === void 0 || V >= P || V < 0 || C && $ >= D
                }

                function F() {
                    var L = _();
                    if (U(L)) return H(L);
                    j = setTimeout(F, K(L))
                }

                function H(L) {
                    return j = void 0, B && N ? k(L) : (N = R = void 0, G)
                }

                function X() {
                    j !== void 0 && clearTimeout(j), d = 0, N = n = R = j = void 0
                }

                function q() {
                    return j === void 0 ? G : H(_())
                }

                function z() {
                    var L = _(),
                        V = U(L);
                    if (N = arguments, R = this, n = L, V) {
                        if (j === void 0) return W(n);
                        if (C) return j = setTimeout(F, P), k(n)
                    }
                    return j === void 0 && (j = setTimeout(F, P)), G
                }
                return z.cancel = X, z.flush = q, z
            }

            function b(v) {
                var P = typeof v;
                return !!v && (P == "object" || P == "function")
            }

            function l(v) {
                return !!v && typeof v == "object"
            }

            function A(v) {
                return typeof v == "symbol" || l(v) && T.call(v) == f
            }

            function w(v) {
                if (typeof v == "number") return v;
                if (A(v)) return a;
                if (b(v)) {
                    var P = typeof v.valueOf == "function" ? v.valueOf() : v;
                    v = b(P) ? P + "" : P
                }
                if (typeof v != "string") return v === 0 ? v : +v;
                v = v.replace(u, "");
                var M = i.test(v);
                return M || y.test(v) ? m(v.slice(2), M ? 2 : 8) : s.test(v) ? a : +v
            }
            h.exports = p
        },
        131136: h => {
            h.exports = {}
        },
        444947: (h, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });

            function o(l, A) {
                for (var w in A) Object.defineProperty(l, w, {
                    enumerable: !0,
                    get: A[w]
                })
            }
            o(t, {
                SITE_STYLES_ACCESSORIES: function() {
                    return m
                },
                SITE_STYLES_ANIMATIONS: function() {
                    return S
                },
                SITE_STYLES_BUTTONS: function() {
                    return i
                },
                SITE_STYLES_COLORS: function() {
                    return E
                },
                SITE_STYLES_COOKIE_BANNER: function() {
                    return T
                },
                SITE_STYLES_FONTS: function() {
                    return s
                },
                SITE_STYLES_FORMS: function() {
                    return p
                },
                SITE_STYLES_IMAGE_BLOCKS: function() {
                    return O
                },
                SITE_STYLES_PALETTE_EDITOR: function() {
                    return I
                },
                SITE_STYLES_PRODUCT_ITEMS: function() {
                    return y
                },
                SITE_STYLES_ROOT: function() {
                    return u
                },
                SITE_STYLES_SITE_SPACING: function() {
                    return g
                },
                SITE_STYLES_THEME_EDITOR: function() {
                    return _
                },
                default: function() {
                    return b
                }
            });
            var a = f(e(851198));

            function f(l) {
                return l && l.__esModule ? l : {
                    default: l
                }
            }
            var u = "".concat(a.default.forSiteStyles(), "/site-styles"),
                s = "".concat(u, "/fonts"),
                i = "".concat(u, "/buttons"),
                y = "".concat(u, "/product-items"),
                m = "".concat(u, "/accessories"),
                r = m,
                O = "".concat(r, "/image-blocks"),
                g = "".concat(r, "/site-spacing"),
                S = "".concat(r, "/animations"),
                T = "".concat(m, "/cookie-banner"),
                E = "".concat(u, "/colors"),
                I = "".concat(E, "/palette-editor"),
                _ = "".concat(E, "/theme-editor"),
                p = "".concat(u, "/forms"),
                b = {
                    ROOT: u,
                    FONTS: s,
                    COLORS: E,
                    PALETTE_EDITOR: I,
                    THEME_EDITOR: _,
                    BUTTONS: i,
                    ACCESSORIES: m,
                    IMAGE_BLOCKS: O,
                    PRODUCT_ITEMS: y,
                    SITE_SPACING: g,
                    ANIMATIONS: S,
                    FORMS: p,
                    COOKIE_BANNER: T
                }
        },
        116444: (h, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });

            function o(n, d) {
                for (var c in d) Object.defineProperty(n, c, {
                    enumerable: !0,
                    get: d[c]
                })
            }
            o(t, {
                areCookiesSet: function() {
                    return D
                },
                default: function() {
                    return j
                }
            });
            var a = p(e(174161)),
                f = e(233284),
                u = I(e(687048)),
                s = I(e(602775)),
                i = I(e(994336)),
                y = I(e(977571)),
                m = I(e(704562)),
                r = e(467738),
                O = I(e(965183)),
                g = e(903585);

            function S(n, d) {
                (d == null || d > n.length) && (d = n.length);
                for (var c = 0, C = new Array(d); c < d; c++) C[c] = n[c];
                return C
            }

            function T(n) {
                if (Array.isArray(n)) return n
            }

            function E(n, d, c) {
                return d in n ? Object.defineProperty(n, d, {
                    value: c,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[d] = c, n
            }

            function I(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }

            function _(n) {
                if (typeof WeakMap != "function") return null;
                var d = new WeakMap,
                    c = new WeakMap;
                return (_ = function(C) {
                    return C ? c : d
                })(n)
            }

            function p(n, d) {
                if (!d && n && n.__esModule) return n;
                if (n === null || typeof n != "object" && typeof n != "function") return {
                    default: n
                };
                var c = _(d);
                if (c && c.has(n)) return c.get(n);
                var C = {
                        __proto__: null
                    },
                    B = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var k in n)
                    if (k !== "default" && Object.prototype.hasOwnProperty.call(n, k)) {
                        var W = B ? Object.getOwnPropertyDescriptor(n, k) : null;
                        W && (W.get || W.set) ? Object.defineProperty(C, k, W) : C[k] = n[k]
                    }
                return C.default = n, c && c.set(n, C), C
            }

            function b(n, d) {
                var c = n == null ? null : typeof Symbol != "undefined" && n[Symbol.iterator] || n["@@iterator"];
                if (c != null) {
                    var C = [],
                        B = !0,
                        k = !1,
                        W, K;
                    try {
                        for (c = c.call(n); !(B = (W = c.next()).done) && (C.push(W.value), !(d && C.length === d)); B = !0);
                    } catch (U) {
                        k = !0, K = U
                    } finally {
                        try {
                            !B && c.return != null && c.return()
                        } finally {
                            if (k) throw K
                        }
                    }
                    return C
                }
            }

            function l() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function A(n) {
                for (var d = 1; d < arguments.length; d++) {
                    var c = arguments[d] != null ? arguments[d] : {},
                        C = Object.keys(c);
                    typeof Object.getOwnPropertySymbols == "function" && (C = C.concat(Object.getOwnPropertySymbols(c).filter(function(B) {
                        return Object.getOwnPropertyDescriptor(c, B).enumerable
                    }))), C.forEach(function(B) {
                        E(n, B, c[B])
                    })
                }
                return n
            }

            function w(n, d) {
                var c = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var C = Object.getOwnPropertySymbols(n);
                    d && (C = C.filter(function(B) {
                        return Object.getOwnPropertyDescriptor(n, B).enumerable
                    })), c.push.apply(c, C)
                }
                return c
            }

            function v(n, d) {
                return d = d != null ? d : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(d)) : w(Object(d)).forEach(function(c) {
                    Object.defineProperty(n, c, Object.getOwnPropertyDescriptor(d, c))
                }), n
            }

            function P(n, d) {
                return T(n) || b(n, d) || M(n, d) || l()
            }

            function M(n, d) {
                if (n) {
                    if (typeof n == "string") return S(n, d);
                    var c = Object.prototype.toString.call(n).slice(8, -1);
                    if (c === "Object" && n.constructor && (c = n.constructor.name), c === "Map" || c === "Set") return Array.from(c);
                    if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return S(n, d)
                }
            }
            var N = {
                    performance: "ss_performanceCookiesAllowed",
                    marketing: "ss_marketingCookiesAllowed"
                },
                R = [N.performance, N.marketing],
                D = () => R.some(n => !!i.default.get(n)),
                G = () => {
                    (0, u.default)(window.onCookieBannerInteraction) && window.onCookieBannerInteraction()
                };

            function j(n) {
                var d = n.cookiesControlledOutsideOfBanner,
                    c = P((0, a.useState)(!!n.forceShowCookieBanner), 2),
                    C = c[0],
                    B = c[1],
                    k = P((0, a.useState)(D()), 2),
                    W = k[0],
                    K = k[1],
                    U = P((0, a.useState)(!1), 2),
                    F = U[0],
                    H = U[1],
                    X = (0, a.useRef)(null),
                    q = (0, O.default)(X, F),
                    z = new Date(Date.now() + 1e3 * 60 * 60 * 24 * 30),
                    L = {
                        path: "/",
                        expires: z.toUTCString()
                    },
                    V = (n.hasDeclineCookies || n.hasManageCookies) && n.savedPreferencesLayout !== "HIDDEN";
                (0, a.useEffect)(() => {
                    var Y = ee => {
                        B(ee.detail.forceShow)
                    };
                    return document.addEventListener(r.COOKIE_BANNER_FORCE_SHOW_EVENT, Y), () => {
                        document.removeEventListener(r.COOKIE_BANNER_FORCE_SHOW_EVENT, Y)
                    }
                }, []), (0, a.useEffect)(() => {
                    d && (0, m.default)({
                        performanceGranted: i.default.get(N.performance) === "true",
                        marketingGranted: i.default.get(N.marketing) === "true"
                    })
                }, [d]);
                var $ = () => {
                        C || (R.forEach(Y => {
                            i.default.set(Y, "true", L)
                        }), K(!0), (0, g.setThirdPartyConsentViaCookieBanner)({
                            performance: !0,
                            marketing: !0
                        }), G())
                    },
                    x = () => {
                        C || (R.forEach(Y => {
                            i.default.set(Y, "false", L)
                        }), K(!0), (0, g.setThirdPartyConsentViaCookieBanner)({
                            performance: !1,
                            marketing: !1
                        }), G())
                    },
                    te = Y => {
                        Y || (q.current = !0), H(Y)
                    },
                    ne = Y => {
                        if (!C) {
                            R.forEach(J => {
                                var Z = Y.includes(J) ? "true" : "false";
                                i.default.set(J, Z, L)
                            }), K(!0), H(!1);
                            var ee = Object.keys(N).reduce((J, Z) => (J[Z] = Y.includes(N[Z]), J), {});
                            (0, g.setThirdPartyConsentViaCookieBanner)(ee), G()
                        }
                    },
                    ie = () => {
                        H(!0)
                    },
                    oe = v(A({}, n), {
                        onAccept: $,
                        onDecline: x,
                        onSaveManageSettings: ne,
                        toggleManageOverlay: te,
                        showManageOverlay: F,
                        cookieNames: N,
                        manageButtonRef: X
                    }),
                    re = "cookie-banner-mount-point",
                    Q = document.querySelector(".".concat(re));
                if (!Q) {
                    Q = document.createElement("div"), Q.classList.add(re);
                    var ue = document.body.querySelector("#siteWrapper") || document.body;
                    ue.prepend(Q)
                }
                var se = n.bannerPosition === "TOP" && document.body.querySelector(".sqs-announcement-bar-dropzone") || Q,
                    ae = a.default.createElement(s.default.ManageOverlay, {
                        theme: n.theme,
                        cookieNames: N,
                        onClose: () => {
                            te(!1)
                        },
                        onSave: ne
                    });
                return W && !C ? V ? a.default.createElement(y.default, null, a.default.createElement(s.default.ManageBar, {
                    savedPreferencesLayout: n.savedPreferencesLayout,
                    savedPreferencesText: n.savedPreferencesText,
                    theme: n.theme,
                    manageButtonRef: X,
                    openOverlay: ie
                }), F && ae) : null : a.default.createElement(y.default, null, (0, f.createPortal)(a.default.createElement(s.default.Banner, oe), se), F && ae)
            }
        },
        513088: (h, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });

            function o(E, I) {
                for (var _ in I) Object.defineProperty(E, _, {
                    enumerable: !0,
                    get: I[_]
                })
            }
            o(t, {
                default: function() {
                    return T
                },
                renderCookieBannerManager: function() {
                    return S
                }
            });
            var a = r(e(174161)),
                f = e(233284),
                u = r(e(296269)),
                s = r(e(987008)),
                i = r(e(317936)),
                y = e(444947),
                m = r(e(116444));
            e(131136);

            function r(E) {
                return E && E.__esModule ? E : {
                    default: E
                }
            }
            var O = "/config".concat(y.SITE_STYLES_COOKIE_BANNER),
                g = "cookie-banner-manager",
                S = function() {
                    var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        I, _, p = (I = window.Static) === null || I === void 0 ? void 0 : I.SQUARESPACE_CONTEXT,
                        b = p || {},
                        l = b.cookieSettings,
                        A = b.pageType,
                        w = l && i.default.shouldShowCookieBanner({
                            settings: l,
                            urlSearch: window.location.search
                        });
                    if (w) {
                        var v = l.cookieBannerCtaText,
                            P = l.cookieBannerText,
                            M = l.cookieBannerOptOutCtaText,
                            N = l.cookieBannerHasOptOut,
                            R = l.cookieBannerHasManageCookies,
                            D = l.cookieBannerManageCookiesLabel,
                            G = l.cookieBannerSavedPreferencesLayout,
                            j = l.cookieBannerSavedPreferencesText,
                            n = l.cookieBannerTheme,
                            d = l.cookieBannerThemeName,
                            c = l.isRestrictiveCookiePolicyEnabled,
                            C = E.theme || (s.default.isSevenOne() ? d : "legacy-".concat(n.toLowerCase())),
                            B = E.bannerPosition || l.cookieBannerPosition,
                            k = ((_ = window.top) === null || _ === void 0 ? void 0 : _.location.pathname) === O,
                            W = A === u.default.SPLASH_PAGE,
                            K = {
                                acceptCookiesLabel: v,
                                bannerPosition: B,
                                bannerText: P,
                                cookiesControlledOutsideOfBanner: c,
                                declineCookiesLabel: M,
                                forceShowCookieBanner: k,
                                hasDeclineCookies: N,
                                hasManageCookies: R,
                                manageCookiesLabel: D,
                                savedPreferencesLayout: G,
                                savedPreferencesText: j,
                                theme: C
                            },
                            U = document.querySelector(".".concat(g));
                        if (!U) {
                            U = document.createElement("div"), U.classList.add(g), W && U.classList.add("cover-page");
                            var F = document.body.querySelector("#siteWrapper") || document.body;
                            F.appendChild(U)
                        }(0, f.render)(a.default.createElement(m.default, K), U)
                    }
                },
                T = S
        },
        965183: (h, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            var o = e(174161);

            function a(u, s) {
                var i = (0, o.useRef)(!1);
                return (0, o.useEffect)(() => {
                    !s && i.current && u.current && u.current.focus(), i.current = !1
                }, [u, s]), i
            }
            var f = a
        },
        903585: (h, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "setThirdPartyConsentViaCookieBanner", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            var o = e(832974),
                a = e(7540),
                f = u => {
                    var s = u.marketing,
                        i = u.performance;
                    (0, o.setFacebookPixelConsentViaCookieBanner)(s), (0, a.setGoogleAnalyticsConsentViaCookieBanner)(i)
                }
        },
        611220: (h, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return e
                }
            });
            var e = {
                CAMPAIGNS: "campaigns",
                COMPED: "comped",
                DOMAIN: "domain",
                GETTY_IMAGE: "getty-image",
                GOOGLE_APPS: "googleapps",
                IAP: "resold",
                MEMBER_AREAS: "member-areas",
                DIGITAL_PRODUCTS: "digital-products",
                SCHEDULING: "scheduling",
                V5_LINKED: "v5-linked",
                WEBSITE: "website",
                SQUARESPACE: "squarespace"
            }
        },
        139442: (h, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isManageMultipleGoogleWorkspaceEnabled", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            var o = e(572991),
                a;
            (function(u) {
                u.MANAGE_MULTIPLE_GOOGLE_WORKSPACE = "manage-multiple-google-workspace"
            })(a || (a = {}));
            var f = () => {
                var u, s;
                return !!(!(o.getStatsigClient === null || o.getStatsigClient === void 0 || (u = (s = (0, o.getStatsigClient)()).checkGate) === null || u === void 0) && u.call(s, "manage-multiple-google-workspace"))
            }
        },
        977571: (h, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return O
                }
            });
            var o = i(e(174161)),
                a = e(943246),
                f = e(684353),
                u = e(491644),
                s = i(e(55399));

            function i(g) {
                return g && g.__esModule ? g : {
                    default: g
                }
            }

            function y() {
                return u.context === null || u.context === void 0 ? void 0 : u.context.website.language
            }

            function m() {
                return f.translationLocale
            }
            var r = g => {
                    var S = g.children;
                    return o.default.createElement(a.I18nContext.Provider, {
                        value: {
                            translationLocale: m(),
                            formattingLocale: y(),
                            cldrLoader: s.default
                        }
                    }, S)
                },
                O = r
        },
        832974: (h, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "setFacebookPixelConsentViaCookieBanner", {
                enumerable: !0,
                get: function() {
                    return e
                }
            });
            var e = o => {
                window.fbq && window.facebookPixelRequiresConsentUpdates && window.fbq("consent", o ? "grant" : "revoke")
            }
        },
        7540: (h, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "setGoogleAnalyticsConsentViaCookieBanner", {
                enumerable: !0,
                get: function() {
                    return e
                }
            });
            var e = o => {
                window.gtag && window.googleAnalyticsRequiresConsentUpdates && (o ? window.gtag("consent", "update", {
                    analytics_storage: "granted"
                }) : window.gtag("consent", "update", {
                    analytics_storage: "denied"
                }))
            }
        },
        704562: (h, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });

            function o(m, r) {
                for (var O in r) Object.defineProperty(m, O, {
                    enumerable: !0,
                    get: r[O]
                })
            }
            o(t, {
                LEGACY_SQUARESPACE_COOKIES_TO_EXPIRE: function() {
                    return i
                },
                default: function() {
                    return y
                }
            });
            var a = f(e(994336));

            function f(m) {
                return m && m.__esModule ? m : {
                    default: m
                }
            }
            var u = ["SS_MID", "SS_MATTR", "SS_lastvisit", "user_segment"],
                s = ["ss_cid", "ss_cpvisit", "ss_cvisit", "ss_cvr", "ss_cvt"],
                i = ["ss_cookieAllowed"],
                y = m => {
                    var r = m.performanceGranted,
                        O = m.marketingGranted;
                    if (!(r && O)) {
                        var g = {
                                expires: new Date(0).toUTCString()
                            },
                            S = i;
                        r || (S = S.concat(s)), O || (S = S.concat(u)), S.forEach(T => {
                            a.default.set(T, "", g)
                        })
                    }
                }
        },
        851198: (h, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return m
                }
            });
            var o = y(e(597284)),
                a = e(424464),
                f = y(e(611220)),
                u = e(787909),
                s = e(433829),
                i = e(139442);

            function y(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            }
            var m = {
                forDomains() {
                    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, u.getWebsiteType)();
                    return r === o.default.PARKING_PAGE && !a.multiProductConfig.isStandaloneScheduling() ? "/" : "/settings/domains-email/domains/"
                },
                forDomainsAndEmail() {
                    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, u.getWebsiteType)();
                    return r === o.default.PARKING_PAGE && !a.multiProductConfig.isStandaloneScheduling() ? "/" : "/settings/domains-email/"
                },
                forDomainsFullWidth() {
                    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, u.getWebsiteType)();
                    return r === o.default.PARKING_PAGE && !a.multiProductConfig.isStandaloneScheduling() ? "/domains/" : "/settings/domains-email/domains/"
                },
                forDomainsInAccountService() {
                    return "/domains/"
                },
                forBilling() {
                    return a.multiProductConfig.isStandaloneScheduling() && !(0, s.isStandaloneSchedulingStaticNavEnabledByLabsOrStatsig)() ? "/billing/" : "/settings/billing/"
                },
                forBillingSubscriptionsList() {
                    var r = this.forBilling();
                    return "".concat(r, "subscriptions/")
                },
                forBillingSubscription(r) {
                    var O = this.forBillingSubscriptionsList();
                    return "".concat(O).concat(r)
                },
                forAccountMenu() {
                    return "/settings/billing/"
                },
                forSettingsOrConfig() {
                    return "/settings/"
                },
                forGoogleWorkspace() {
                    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, u.getWebsiteType)();
                    return r === o.default.PARKING_PAGE ? "/settings/email/google-workspace" : "/settings/domains-email/google-workspace"
                },
                forGSuiteBillingAndAccountingLink() {
                    return "".concat(this.forBilling(), "subscriptions/").concat(f.default.GOOGLE_APPS)
                },
                forSwitchProducts() {
                    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, u.getWebsiteType)();
                    return r === o.default.PARKING_PAGE ? "/upgrade/" : "/settings/billing/switch-products/"
                },
                forMemberAreasCheckout() {
                    return "".concat(this.forBilling(), "digital-products-checkout")
                },
                forWebsiteCheckout() {
                    return "".concat(this.forBilling(), "upgrade")
                },
                forChangeWebsitePlan() {
                    return "/settings/billing/subscriptions/website"
                },
                forGSuiteIntitialPurchase() {
                    return "/settings/gsuite-checkout"
                },
                forGSuiteAddUser(r) {
                    return (0, i.isManageMultipleGoogleWorkspaceEnabled)() && r ? "/settings/gsuite-add-user/".concat(r) : "/settings/gsuite-add-user"
                },
                forGSuiteReactivation(r) {
                    return (0, i.isManageMultipleGoogleWorkspaceEnabled)() && r ? "/settings/gsuite-reactivation/".concat(r) : "/settings/gsuite-reactivation"
                },
                forPermissions() {
                    return "/settings/permissions-ownership/permissions"
                },
                forSiteStyles() {
                    return ""
                },
                forDesignPanel() {
                    return "/design"
                },
                forPagesPanel() {
                    return "/pages"
                },
                forWebsiteTools() {
                    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
                    return a.multiProductConfig.isStandaloneScheduling() ? "/settings" + r : this.forPagesPanel() + "/website-tools"
                },
                forMobilePathToPublish() {
                    return "/mobile-path-to-publish"
                }
            }
        },
        433829: (h, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });

            function o(y, m) {
                for (var r in m) Object.defineProperty(y, r, {
                    enumerable: !0,
                    get: m[r]
                })
            }
            o(t, {
                isStandaloneSchedulingStaticNav: function() {
                    return i
                },
                isStandaloneSchedulingStaticNavEnabledByLabsOrStatsig: function() {
                    return s
                }
            });
            var a = e(424464),
                f = e(572991),
                u = "standalone_scheduling_with_static_nav",
                s = () => a.activationFunnelFeatureFlags.isStandaloneSchedulingStaticNavEnabled() ? !0 : (0, f.isFeatureEnabled)(u),
                i = () => a.multiProductConfig.isStandaloneScheduling() ? s() : !1
        },
        787909: (h, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });

            function o(g, S) {
                for (var T in S) Object.defineProperty(g, T, {
                    enumerable: !0,
                    get: S[T]
                })
            }
            o(t, {
                getWebsiteType: function() {
                    return s
                },
                isClassic: function() {
                    return m
                },
                isCommerce: function() {
                    return r
                },
                isCoverPage: function() {
                    return y
                },
                isEnterprise: function() {
                    return O
                },
                isParkingPage: function() {
                    return i
                }
            });
            var a = e(491644),
                f = u(e(597284));

            function u(g) {
                return g && g.__esModule ? g : {
                    default: g
                }
            }
            var s = () => {
                    var g;
                    return a.context === null || a.context === void 0 || (g = a.context.website) === null || g === void 0 ? void 0 : g.websiteType
                },
                i = () => s() === f.default.PARKING_PAGE,
                y = () => s() === f.default.COVER_PAGE,
                m = () => s() === f.default.CLASSIC,
                r = () => s() === f.default.COMMERCE,
                O = () => s() === f.default.ENTERPRISE
        },
        701268: (h, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.STATSIG_CLIENT_SDK_KEY = t.ENVIRONMENT = void 0;
            var o = e(365752),
                a = t.ENVIRONMENT = (0, o.getEnvironment)(),
                f = t.STATSIG_CLIENT_SDK_KEY = "client-hXbQ63BqA68Jpec4rnPjIAjGV2coXa9IB73ydOtHa4T"
        },
        254708: (h, t, e) => {
            "use strict";
            e(392338), e(392338), e(392338), e(392338), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.eventsClient = void 0;
            var o = u(e(221661)),
                a = e(365752);

            function f(i) {
                if (typeof WeakMap != "function") return null;
                var y = new WeakMap,
                    m = new WeakMap;
                return (f = function(O) {
                    return O ? m : y
                })(i)
            }

            function u(i, y) {
                if (!y && i && i.__esModule) return i;
                if (i === null || typeof i != "object" && typeof i != "function") return {
                    default: i
                };
                var m = f(y);
                if (m && m.has(i)) return m.get(i);
                var r = {
                        __proto__: null
                    },
                    O = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var g in i)
                    if (g !== "default" && Object.prototype.hasOwnProperty.call(i, g)) {
                        var S = O ? Object.getOwnPropertyDescriptor(i, g) : null;
                        S && (S.get || S.set) ? Object.defineProperty(r, g, S) : r[g] = i[g]
                    }
                return r.default = i, m && m.set(i, r), r
            }
            var s = t.eventsClient = new o.default({
                customSchemaName: "ABTestAssignment",
                sourceEnvironment: (0, a.isInternal)() ? o.SourceEnvironment.STAGING : o.SourceEnvironment.PROD
            }, {
                action: "assign",
                actor: "system",
                event_name: "StatsigAssignment_TestAssignment",
                event_source: "web",
                object_type: "subject",
                test_namespace: "Squarespace"
            })
        },
        757183: (h, t, e) => {
            "use strict";
            e(392338), e(392338), e(392338), e(392338), e(392338);
            var o = e(875832);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createStatsigClient = g, t.extendUser = I, t.getStatsigClient = T, t.isFeatureEnabled = E;
            var a = o(e(544257)),
                f = o(e(346797)),
                u = o(e(385870)),
                s = o(e(646715)),
                i = e(310332),
                y = e(701268),
                m = e(73040);

            function r(p, b) {
                var l = Object.keys(p);
                if (Object.getOwnPropertySymbols) {
                    var A = Object.getOwnPropertySymbols(p);
                    b && (A = A.filter(function(w) {
                        return Object.getOwnPropertyDescriptor(p, w).enumerable
                    })), l.push.apply(l, A)
                }
                return l
            }

            function O(p) {
                for (var b = 1; b < arguments.length; b++) {
                    var l = arguments[b] != null ? arguments[b] : {};
                    b % 2 ? r(Object(l), !0).forEach(function(A) {
                        (0, f.default)(p, A, l[A])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(l)) : r(Object(l)).forEach(function(A) {
                        Object.defineProperty(p, A, Object.getOwnPropertyDescriptor(l, A))
                    })
                }
                return p
            }

            function g() {
                return S.apply(this, arguments)
            }

            function S() {
                return S = (0, u.default)(a.default.mark(function p() {
                    var b, l, A, w, v = arguments;
                    return a.default.wrap(function(M) {
                        for (;;) switch (M.prev = M.next) {
                            case 0:
                                return b = v.length > 0 && v[0] !== void 0 ? v[0] : {}, l = v.length > 1 && v[1] !== void 0 ? v[1] : {}, M.next = 4, (0, m.getStatsigUser)(b == null ? void 0 : b.context);
                            case 4:
                                return A = M.sent, w = new i.StatsigClient(y.STATSIG_CLIENT_SDK_KEY, A, O({
                                    environment: {
                                        tier: y.ENVIRONMENT
                                    }
                                }, l)), M.next = 8, w.initializeAsync();
                            case 8:
                                return M.abrupt("return", w);
                            case 9:
                            case "end":
                                return M.stop()
                        }
                    }, p)
                })), S.apply(this, arguments)
            }

            function T() {
                return i.StatsigClient.instance(y.STATSIG_CLIENT_SDK_KEY)
            }

            function E(p) {
                return T().checkGate(p)
            }

            function I(p) {
                return _.apply(this, arguments)
            }

            function _() {
                return _ = (0, u.default)(a.default.mark(function p(b) {
                    var l, A, w;
                    return a.default.wrap(function(P) {
                        for (;;) switch (P.prev = P.next) {
                            case 0:
                                if (l = T(), l.loadingStatus === "Ready") {
                                    P.next = 3;
                                    break
                                }
                                return P.abrupt("return");
                            case 3:
                                return A = l.getContext(), w = A.user, P.next = 6, l.updateUserAsync((0, s.default)(w, b));
                            case 6:
                                return P.abrupt("return", l.getContext().user);
                            case 7:
                            case "end":
                                return P.stop()
                        }
                    }, p)
                })), _.apply(this, arguments)
            }
        },
        73040: (h, t, e) => {
            "use strict";
            var o = e(875832);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getStatsigUser = O;
            var a = o(e(544257)),
                f = o(e(385870)),
                u = o(e(375798));
            e(392338), e(392338), e(392338), e(392338), e(392338);
            var s = o(e(411148)),
                i = e(254708);

            function y(S) {
                var T, E = S == null ? void 0 : S.authenticatedAccount,
                    I = Object.entries(s.default).filter(p => {
                        var b, l = (0, u.default)(p, 2),
                            A = l[0],
                            w = l[1];
                        return typeof w == "number" && (E == null || (b = E.guilds) === null || b === void 0 ? void 0 : b[w]) === !0
                    }).map(p => {
                        var b = (0, u.default)(p, 1),
                            l = b[0];
                        return l
                    }),
                    _ = E ? (E == null || (T = E.guilds) === null || T === void 0 ? void 0 : T[s.default.CIRCLE_USER]) || !1 : void 0;
                return {
                    data: E,
                    computed: {
                        guilds: I,
                        circleStatus: _
                    }
                }
            }

            function m(S) {
                return r.apply(this, arguments)
            }

            function r() {
                return r = (0, f.default)(a.default.mark(function S(T) {
                    var E;
                    return a.default.wrap(function(_) {
                        for (;;) switch (_.prev = _.next) {
                            case 0:
                                if (E = T == null ? void 0 : T.website, T) {
                                    _.next = 4;
                                    break
                                }
                                return _.next = 4, fetch("/api/rest/websites/mine").then(p => p.json()).then(p => {
                                    E = p
                                }).catch(p => {
                                    console.warn("Experimentation assignment data initialized without Website related values", p)
                                });
                            case 4:
                                return _.abrupt("return", {
                                    data: E
                                });
                            case 5:
                            case "end":
                                return _.stop()
                        }
                    }, S)
                })), r.apply(this, arguments)
            }

            function O(S) {
                return g.apply(this, arguments)
            }

            function g() {
                return g = (0, f.default)(a.default.mark(function S(T) {
                    var E, I, _, p, b, l, A, w, v, P, M, N, R, D, G;
                    return a.default.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return N = i.eventsClient._getAnalyticsId(), R = y(T), n.next = 4, m(T);
                            case 4:
                                return D = n.sent, G = {
                                    email: (E = R.data) === null || E === void 0 ? void 0 : E.email,
                                    customIDs: {
                                        analytics_id: N,
                                        member_account_id: (I = R.data) === null || I === void 0 ? void 0 : I.id,
                                        website_id: (_ = D.data) === null || _ === void 0 ? void 0 : _.id
                                    },
                                    custom: {
                                        circle_status: (p = R.computed) === null || p === void 0 ? void 0 : p.circleStatus,
                                        member_account_creation_date: (b = R.data) === null || b === void 0 ? void 0 : b.createdOn,
                                        member_account_guilds: (l = R.computed) === null || l === void 0 ? void 0 : l.guilds,
                                        member_account_language: (A = R.data) === null || A === void 0 ? void 0 : A.preferredLocale,
                                        site_status: (w = D.data) === null || w === void 0 || (w = w.siteStatus) === null || w === void 0 ? void 0 : w.value,
                                        template_version: T == null ? void 0 : T.templateVersion,
                                        website_creation_date: (v = D.data) === null || v === void 0 ? void 0 : v.createdOn,
                                        website_language: (P = D.data) === null || P === void 0 ? void 0 : P.language,
                                        website_type: (M = D.data) === null || M === void 0 ? void 0 : M.websiteType
                                    }
                                }, n.abrupt("return", G);
                            case 7:
                            case "end":
                                return n.stop()
                        }
                    }, S)
                })), g.apply(this, arguments)
            }
        },
        572991: (h, t, e) => {
            "use strict";
            e(392338), e(392338), Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = {
                createStatsigClient: !0,
                extendUser: !0,
                getStatsigClient: !0,
                isFeatureEnabled: !0,
                LocalOverrideAdapter: !0
            };
            Object.defineProperty(t, "LocalOverrideAdapter", {
                enumerable: !0,
                get: function() {
                    return u.LocalOverrideAdapter
                }
            }), Object.defineProperty(t, "createStatsigClient", {
                enumerable: !0,
                get: function() {
                    return a.createStatsigClient
                }
            }), Object.defineProperty(t, "extendUser", {
                enumerable: !0,
                get: function() {
                    return a.extendUser
                }
            }), Object.defineProperty(t, "getStatsigClient", {
                enumerable: !0,
                get: function() {
                    return a.getStatsigClient
                }
            }), Object.defineProperty(t, "isFeatureEnabled", {
                enumerable: !0,
                get: function() {
                    return a.isFeatureEnabled
                }
            });
            var a = e(757183),
                f = e(310332);
            Object.keys(f).forEach(function(s) {
                s === "default" || s === "__esModule" || Object.prototype.hasOwnProperty.call(o, s) || s in t && t[s] === f[s] || Object.defineProperty(t, s, {
                    enumerable: !0,
                    get: function() {
                        return f[s]
                    }
                })
            });
            var u = e(934114)
        },
        365752: (h, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isStage = t.isQA = t.isInternal = t.isDev = t.getReleaseVersion = t.getEnvironment = t.getDomain = t.Environment = void 0, e(392338), e(392338), e(392338), e(392338), e(392338), e(392338);
            var o = t.Environment = function(r) {
                    return r.DEVELOPMENT = "development", r.STAGING = "staging", r.QA = "qa", r.PRODUCTION = "production", r
                }({}),
                a = t.getDomain = function() {
                    var O, g, S, T, E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window;
                    if (typeof E == "string") {
                        var I = new URL(E);
                        return I.hostname
                    }
                    return (O = (g = (S = E.Static) === null || S === void 0 || (S = S.SQUARESPACE_CONTEXT) === null || S === void 0 ? void 0 : S.appDomain) !== null && g !== void 0 ? g : (T = E.location) === null || T === void 0 ? void 0 : T.host) !== null && O !== void 0 ? O : ""
                },
                f = t.isInternal = function() {
                    var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window;
                    return /\.(sqsp|squarespace)\.net$/.test(a(O))
                },
                u = t.isStage = function() {
                    var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window;
                    return /stage\.(sqsp|squarespace)\.net$/.test(a(O))
                },
                s = t.isQA = function() {
                    var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window;
                    return /qa[0-9]+\.(sqsp|squarespace)\.net$/.test(a(O))
                },
                i = t.isDev = function() {
                    var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window;
                    return /dev\.(sqsp|squarespace)\.net$/.test(a(O))
                },
                y = () => {
                    var r = o.PRODUCTION;
                    return i() ? r = o.DEVELOPMENT : s() ? r = o.QA : (u() || f()) && (r = o.STAGING), r
                };
            t.getEnvironment = y;
            var m = () => window.__RELEASE_VERSION__;
            t.getReleaseVersion = m
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/439b425370882a482130069478b2338c/async-gdpr-cookie-banner-6b684e7b18168db9e566-min.en-US.js.map