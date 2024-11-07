(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [84467], {
        832979: (_, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var e;
            (function(a) {
                a.SUB_FOOTER = "SUB_FOOTER", a.PILL = "PILL", a.HIDDEN = "HIDDEN"
            })(e || (e = {}));
            var s = e;
            t.default = s, _.exports = t.default
        },
        845076: (_, t) => {
            var e, s;
            /*!
              Copyright (c) 2018 Jed Watson.
              Licensed under the MIT License (MIT), see
              http://jedwatson.github.io/classnames
            */
            (function() {
                "use strict";
                var a = {}.hasOwnProperty;

                function E() {
                    for (var l = [], d = 0; d < arguments.length; d++) {
                        var o = arguments[d];
                        if (o) {
                            var h = typeof o;
                            if (h === "string" || h === "number") l.push(o);
                            else if (Array.isArray(o)) {
                                if (o.length) {
                                    var v = E.apply(null, o);
                                    v && l.push(v)
                                }
                            } else if (h === "object")
                                if (o.toString === Object.prototype.toString)
                                    for (var u in o) a.call(o, u) && o[u] && l.push(u);
                                else l.push(o.toString())
                        }
                    }
                    return l.join(" ")
                }
                _.exports ? (E.default = E, _.exports = E) : (e = [], s = function() {
                    return E
                }.apply(t, e), s !== void 0 && (_.exports = s))
            })()
        },
        418008: (_, t, e) => {
            var s = "Expected a function",
                a = NaN,
                E = "[object Symbol]",
                l = /^\s+|\s+$/g,
                d = /^[-+]0x[0-9a-f]+$/i,
                o = /^0b[01]+$/i,
                h = /^0o[0-7]+$/i,
                v = parseInt,
                u = typeof e.g == "object" && e.g && e.g.Object === Object && e.g,
                r = typeof self == "object" && self && self.Object === Object && self,
                i = u || r || Function("return this")(),
                c = Object.prototype,
                y = c.toString,
                f = Math.max,
                b = Math.min,
                T = function() {
                    return i.Date.now()
                };

            function p(O, P, M) {
                var N, R, k, U, D, n, m = 0,
                    S = !1,
                    I = !1,
                    j = !0;
                if (typeof O != "function") throw new TypeError(s);
                P = w(P) || 0, C(M) && (S = !!M.leading, I = "maxWait" in M, k = I ? f(w(M.maxWait) || 0, P) : k, j = "trailing" in M ? !!M.trailing : j);

                function G(B) {
                    var K = N,
                        V = R;
                    return N = R = void 0, m = B, U = O.apply(V, K), U
                }

                function W(B) {
                    return m = B, D = setTimeout($, P), S ? G(B) : U
                }

                function Y(B) {
                    var K = B - n,
                        V = B - m,
                        J = P - K;
                    return I ? b(J, k - V) : J
                }

                function L(B) {
                    var K = B - n,
                        V = B - m;
                    return n === void 0 || K >= P || K < 0 || I && V >= k
                }

                function $() {
                    var B = T();
                    if (L(B)) return H(B);
                    D = setTimeout($, Y(B))
                }

                function H(B) {
                    return D = void 0, j && N ? G(B) : (N = R = void 0, U)
                }

                function X() {
                    D !== void 0 && clearTimeout(D), m = 0, N = n = R = D = void 0
                }

                function q() {
                    return D === void 0 ? U : H(T())
                }

                function z() {
                    var B = T(),
                        K = L(B);
                    if (N = arguments, R = this, n = B, K) {
                        if (D === void 0) return W(n);
                        if (I) return D = setTimeout($, P), G(n)
                    }
                    return D === void 0 && (D = setTimeout($, P)), U
                }
                return z.cancel = X, z.flush = q, z
            }

            function C(O) {
                var P = typeof O;
                return !!O && (P == "object" || P == "function")
            }

            function g(O) {
                return !!O && typeof O == "object"
            }

            function A(O) {
                return typeof O == "symbol" || g(O) && y.call(O) == E
            }

            function w(O) {
                if (typeof O == "number") return O;
                if (A(O)) return a;
                if (C(O)) {
                    var P = typeof O.valueOf == "function" ? O.valueOf() : O;
                    O = C(P) ? P + "" : P
                }
                if (typeof O != "string") return O === 0 ? O : +O;
                O = O.replace(l, "");
                var M = o.test(O);
                return M || h.test(O) ? v(O.slice(2), M ? 2 : 8) : d.test(O) ? a : +O
            }
            _.exports = p
        },
        131136: _ => {
            _.exports = {}
        },
        444947: (_, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });

            function s(g, A) {
                for (var w in A) Object.defineProperty(g, w, {
                    enumerable: !0,
                    get: A[w]
                })
            }
            s(t, {
                SITE_STYLES_ACCESSORIES: function() {
                    return v
                },
                SITE_STYLES_ANIMATIONS: function() {
                    return c
                },
                SITE_STYLES_BUTTONS: function() {
                    return o
                },
                SITE_STYLES_COLORS: function() {
                    return f
                },
                SITE_STYLES_COOKIE_BANNER: function() {
                    return y
                },
                SITE_STYLES_FONTS: function() {
                    return d
                },
                SITE_STYLES_FORMS: function() {
                    return p
                },
                SITE_STYLES_IMAGE_BLOCKS: function() {
                    return r
                },
                SITE_STYLES_PALETTE_EDITOR: function() {
                    return b
                },
                SITE_STYLES_PRODUCT_ITEMS: function() {
                    return h
                },
                SITE_STYLES_ROOT: function() {
                    return l
                },
                SITE_STYLES_SITE_SPACING: function() {
                    return i
                },
                SITE_STYLES_THEME_EDITOR: function() {
                    return T
                },
                default: function() {
                    return C
                }
            });
            var a = E(e(851198));

            function E(g) {
                return g && g.__esModule ? g : {
                    default: g
                }
            }
            var l = "".concat(a.default.forSiteStyles(), "/site-styles"),
                d = "".concat(l, "/fonts"),
                o = "".concat(l, "/buttons"),
                h = "".concat(l, "/product-items"),
                v = "".concat(l, "/accessories"),
                u = v,
                r = "".concat(u, "/image-blocks"),
                i = "".concat(u, "/site-spacing"),
                c = "".concat(u, "/animations"),
                y = "".concat(v, "/cookie-banner"),
                f = "".concat(l, "/colors"),
                b = "".concat(f, "/palette-editor"),
                T = "".concat(f, "/theme-editor"),
                p = "".concat(l, "/forms"),
                C = {
                    ROOT: l,
                    FONTS: d,
                    COLORS: f,
                    PALETTE_EDITOR: b,
                    THEME_EDITOR: T,
                    BUTTONS: o,
                    ACCESSORIES: v,
                    IMAGE_BLOCKS: r,
                    PRODUCT_ITEMS: h,
                    SITE_SPACING: i,
                    ANIMATIONS: c,
                    FORMS: p,
                    COOKIE_BANNER: y
                }
        },
        116444: (_, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });

            function s(n, m) {
                for (var S in m) Object.defineProperty(n, S, {
                    enumerable: !0,
                    get: m[S]
                })
            }
            s(t, {
                areCookiesSet: function() {
                    return k
                },
                default: function() {
                    return D
                }
            });
            var a = p(e(174161)),
                E = e(233284),
                l = b(e(687048)),
                d = b(e(602775)),
                o = b(e(994336)),
                h = b(e(977571)),
                v = b(e(704562)),
                u = e(467738),
                r = b(e(965183)),
                i = e(903585);

            function c(n, m) {
                (m == null || m > n.length) && (m = n.length);
                for (var S = 0, I = new Array(m); S < m; S++) I[S] = n[S];
                return I
            }

            function y(n) {
                if (Array.isArray(n)) return n
            }

            function f(n, m, S) {
                return m in n ? Object.defineProperty(n, m, {
                    value: S,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[m] = S, n
            }

            function b(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }

            function T(n) {
                if (typeof WeakMap != "function") return null;
                var m = new WeakMap,
                    S = new WeakMap;
                return (T = function(I) {
                    return I ? S : m
                })(n)
            }

            function p(n, m) {
                if (!m && n && n.__esModule) return n;
                if (n === null || typeof n != "object" && typeof n != "function") return {
                    default: n
                };
                var S = T(m);
                if (S && S.has(n)) return S.get(n);
                var I = {
                        __proto__: null
                    },
                    j = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var G in n)
                    if (G !== "default" && Object.prototype.hasOwnProperty.call(n, G)) {
                        var W = j ? Object.getOwnPropertyDescriptor(n, G) : null;
                        W && (W.get || W.set) ? Object.defineProperty(I, G, W) : I[G] = n[G]
                    }
                return I.default = n, S && S.set(n, I), I
            }

            function C(n, m) {
                var S = n == null ? null : typeof Symbol != "undefined" && n[Symbol.iterator] || n["@@iterator"];
                if (S != null) {
                    var I = [],
                        j = !0,
                        G = !1,
                        W, Y;
                    try {
                        for (S = S.call(n); !(j = (W = S.next()).done) && (I.push(W.value), !(m && I.length === m)); j = !0);
                    } catch (L) {
                        G = !0, Y = L
                    } finally {
                        try {
                            !j && S.return != null && S.return()
                        } finally {
                            if (G) throw Y
                        }
                    }
                    return I
                }
            }

            function g() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function A(n) {
                for (var m = 1; m < arguments.length; m++) {
                    var S = arguments[m] != null ? arguments[m] : {},
                        I = Object.keys(S);
                    typeof Object.getOwnPropertySymbols == "function" && (I = I.concat(Object.getOwnPropertySymbols(S).filter(function(j) {
                        return Object.getOwnPropertyDescriptor(S, j).enumerable
                    }))), I.forEach(function(j) {
                        f(n, j, S[j])
                    })
                }
                return n
            }

            function w(n, m) {
                var S = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var I = Object.getOwnPropertySymbols(n);
                    m && (I = I.filter(function(j) {
                        return Object.getOwnPropertyDescriptor(n, j).enumerable
                    })), S.push.apply(S, I)
                }
                return S
            }

            function O(n, m) {
                return m = m != null ? m : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(m)) : w(Object(m)).forEach(function(S) {
                    Object.defineProperty(n, S, Object.getOwnPropertyDescriptor(m, S))
                }), n
            }

            function P(n, m) {
                return y(n) || C(n, m) || M(n, m) || g()
            }

            function M(n, m) {
                if (n) {
                    if (typeof n == "string") return c(n, m);
                    var S = Object.prototype.toString.call(n).slice(8, -1);
                    if (S === "Object" && n.constructor && (S = n.constructor.name), S === "Map" || S === "Set") return Array.from(S);
                    if (S === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)) return c(n, m)
                }
            }
            var N = {
                    performance: "ss_performanceCookiesAllowed",
                    marketing: "ss_marketingCookiesAllowed"
                },
                R = [N.performance, N.marketing],
                k = () => R.some(n => !!o.default.get(n)),
                U = () => {
                    (0, l.default)(window.onCookieBannerInteraction) && window.onCookieBannerInteraction()
                };

            function D(n) {
                var m = n.cookiesControlledOutsideOfBanner,
                    S = P((0, a.useState)(!!n.forceShowCookieBanner), 2),
                    I = S[0],
                    j = S[1],
                    G = P((0, a.useState)(k()), 2),
                    W = G[0],
                    Y = G[1],
                    L = P((0, a.useState)(!1), 2),
                    $ = L[0],
                    H = L[1],
                    X = (0, a.useRef)(null),
                    q = (0, r.default)(X, $),
                    z = new Date(Date.now() + 1e3 * 60 * 60 * 24 * 30),
                    B = {
                        path: "/",
                        expires: z.toUTCString()
                    },
                    K = (n.hasDeclineCookies || n.hasManageCookies) && n.savedPreferencesLayout !== "HIDDEN";
                (0, a.useEffect)(() => {
                    var F = ee => {
                        j(ee.detail.forceShow)
                    };
                    return document.addEventListener(u.COOKIE_BANNER_FORCE_SHOW_EVENT, F), () => {
                        document.removeEventListener(u.COOKIE_BANNER_FORCE_SHOW_EVENT, F)
                    }
                }, []), (0, a.useEffect)(() => {
                    m && (0, v.default)({
                        performanceGranted: o.default.get(N.performance) === "true",
                        marketingGranted: o.default.get(N.marketing) === "true"
                    })
                }, [m]);
                var V = () => {
                        I || (R.forEach(F => {
                            o.default.set(F, "true", B)
                        }), Y(!0), (0, i.setThirdPartyConsentViaCookieBanner)({
                            performance: !0,
                            marketing: !0
                        }), U())
                    },
                    J = () => {
                        I || (R.forEach(F => {
                            o.default.set(F, "false", B)
                        }), Y(!0), (0, i.setThirdPartyConsentViaCookieBanner)({
                            performance: !1,
                            marketing: !1
                        }), U())
                    },
                    te = F => {
                        F || (q.current = !0), H(F)
                    },
                    ne = F => {
                        if (!I) {
                            R.forEach(x => {
                                var Z = F.includes(x) ? "true" : "false";
                                o.default.set(x, Z, B)
                            }), Y(!0), H(!1);
                            var ee = Object.keys(N).reduce((x, Z) => (x[Z] = F.includes(N[Z]), x), {});
                            (0, i.setThirdPartyConsentViaCookieBanner)(ee), U()
                        }
                    },
                    ie = () => {
                        H(!0)
                    },
                    oe = O(A({}, n), {
                        onAccept: V,
                        onDecline: J,
                        onSaveManageSettings: ne,
                        toggleManageOverlay: te,
                        showManageOverlay: $,
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
                    ae = a.default.createElement(d.default.ManageOverlay, {
                        theme: n.theme,
                        cookieNames: N,
                        onClose: () => {
                            te(!1)
                        },
                        onSave: ne
                    });
                return W && !I ? K ? a.default.createElement(h.default, null, a.default.createElement(d.default.ManageBar, {
                    savedPreferencesLayout: n.savedPreferencesLayout,
                    savedPreferencesText: n.savedPreferencesText,
                    theme: n.theme,
                    manageButtonRef: X,
                    openOverlay: ie
                }), $ && ae) : null : a.default.createElement(h.default, null, (0, E.createPortal)(a.default.createElement(d.default.Banner, oe), se), $ && ae)
            }
        },
        513088: (_, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });

            function s(f, b) {
                for (var T in b) Object.defineProperty(f, T, {
                    enumerable: !0,
                    get: b[T]
                })
            }
            s(t, {
                default: function() {
                    return y
                },
                renderCookieBannerManager: function() {
                    return c
                }
            });
            var a = u(e(174161)),
                E = e(233284),
                l = u(e(296269)),
                d = u(e(987008)),
                o = u(e(317936)),
                h = e(444947),
                v = u(e(116444));
            e(131136);

            function u(f) {
                return f && f.__esModule ? f : {
                    default: f
                }
            }
            var r = "/config".concat(h.SITE_STYLES_COOKIE_BANNER),
                i = "cookie-banner-manager",
                c = function() {
                    var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        b, T, p = (b = window.Static) === null || b === void 0 ? void 0 : b.SQUARESPACE_CONTEXT,
                        C = p || {},
                        g = C.cookieSettings,
                        A = C.pageType,
                        w = g && o.default.shouldShowCookieBanner({
                            settings: g,
                            urlSearch: window.location.search
                        });
                    if (w) {
                        var O = g.cookieBannerCtaText,
                            P = g.cookieBannerText,
                            M = g.cookieBannerOptOutCtaText,
                            N = g.cookieBannerHasOptOut,
                            R = g.cookieBannerHasManageCookies,
                            k = g.cookieBannerManageCookiesLabel,
                            U = g.cookieBannerSavedPreferencesLayout,
                            D = g.cookieBannerSavedPreferencesText,
                            n = g.cookieBannerTheme,
                            m = g.cookieBannerThemeName,
                            S = g.isRestrictiveCookiePolicyEnabled,
                            I = f.theme || (d.default.isSevenOne() ? m : "legacy-".concat(n.toLowerCase())),
                            j = f.bannerPosition || g.cookieBannerPosition,
                            G = ((T = window.top) === null || T === void 0 ? void 0 : T.location.pathname) === r,
                            W = A === l.default.SPLASH_PAGE,
                            Y = {
                                acceptCookiesLabel: O,
                                bannerPosition: j,
                                bannerText: P,
                                cookiesControlledOutsideOfBanner: S,
                                declineCookiesLabel: M,
                                forceShowCookieBanner: G,
                                hasDeclineCookies: N,
                                hasManageCookies: R,
                                manageCookiesLabel: k,
                                savedPreferencesLayout: U,
                                savedPreferencesText: D,
                                theme: I
                            },
                            L = document.querySelector(".".concat(i));
                        if (!L) {
                            L = document.createElement("div"), L.classList.add(i), W && L.classList.add("cover-page");
                            var $ = document.body.querySelector("#siteWrapper") || document.body;
                            $.appendChild(L)
                        }(0, E.render)(a.default.createElement(v.default, Y), L)
                    }
                },
                y = c
        },
        965183: (_, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return E
                }
            });
            var s = e(174161);

            function a(l, d) {
                var o = (0, s.useRef)(!1);
                return (0, s.useEffect)(() => {
                    !d && o.current && l.current && l.current.focus(), o.current = !1
                }, [l, d]), o
            }
            var E = a
        },
        903585: (_, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "setThirdPartyConsentViaCookieBanner", {
                enumerable: !0,
                get: function() {
                    return E
                }
            });
            var s = e(832974),
                a = e(7540),
                E = l => {
                    var d = l.marketing,
                        o = l.performance;
                    (0, s.setFacebookPixelConsentViaCookieBanner)(d), (0, a.setGoogleAnalyticsConsentViaCookieBanner)(o)
                }
        },
        611220: (_, t) => {
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
        139442: (_, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });

            function s(i, c) {
                for (var y in c) Object.defineProperty(i, y, {
                    enumerable: !0,
                    get: c[y]
                })
            }
            s(t, {
                isInitialPurchaseTermLengthTestEnabled: function() {
                    return r
                },
                isManageMultipleGoogleWorkspaceEnabled: function() {
                    return u
                }
            });
            var a = e(572991),
                E = e(829666),
                l;
            (function(i) {
                i.MANAGE_MULTIPLE_GOOGLE_WORKSPACE = "manage-multiple-google-workspace"
            })(l || (l = {}));
            var d = "variant",
                o = "domains",
                h = {
                    testName: "domains-initial-purchase-term-test",
                    defaultValue: "control",
                    activeValue: "test"
                },
                v = {
                    product_area: "domains"
                },
                u = () => {
                    var i, c;
                    return !!(!(a.getStatsigClient === null || a.getStatsigClient === void 0 || (i = (c = (0, a.getStatsigClient)()).checkGate) === null || i === void 0) && i.call(c, "manage-multiple-google-workspace"))
                },
                r = () => {
                    var i = (0, a.getStatsigClient)().getExperiment(h.testName);
                    return (0, E.trackAssignmentEvent)(i, o, v), i.get(d, h.defaultValue) === h.activeValue
                }
        },
        977571: (_, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            var s = o(e(174161)),
                a = e(251968),
                E = e(684353),
                l = e(491644),
                d = o(e(55399));

            function o(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }

            function h() {
                return l.context === null || l.context === void 0 ? void 0 : l.context.website.language
            }

            function v() {
                return E.translationLocale
            }
            var u = i => {
                    var c = i.children;
                    return s.default.createElement(a.I18nContext.Provider, {
                        value: {
                            translationLocale: v(),
                            formattingLocale: h(),
                            cldrLoader: d.default
                        }
                    }, c)
                },
                r = u
        },
        832974: (_, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "setFacebookPixelConsentViaCookieBanner", {
                enumerable: !0,
                get: function() {
                    return e
                }
            });
            var e = s => {
                window.fbq && window.facebookPixelRequiresConsentUpdates && window.fbq("consent", s ? "grant" : "revoke")
            }
        },
        7540: (_, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "setGoogleAnalyticsConsentViaCookieBanner", {
                enumerable: !0,
                get: function() {
                    return e
                }
            });
            var e = s => {
                window.gtag && window.googleAnalyticsRequiresConsentUpdates && (s ? window.gtag("consent", "update", {
                    analytics_storage: "granted"
                }) : window.gtag("consent", "update", {
                    analytics_storage: "denied"
                }))
            }
        },
        704562: (_, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });

            function s(v, u) {
                for (var r in u) Object.defineProperty(v, r, {
                    enumerable: !0,
                    get: u[r]
                })
            }
            s(t, {
                LEGACY_SQUARESPACE_COOKIES_TO_EXPIRE: function() {
                    return o
                },
                default: function() {
                    return h
                }
            });
            var a = E(e(994336));

            function E(v) {
                return v && v.__esModule ? v : {
                    default: v
                }
            }
            var l = ["SS_MID", "SS_MATTR", "SS_lastvisit", "user_segment"],
                d = ["ss_cid", "ss_cpvisit", "ss_cvisit", "ss_cvr", "ss_cvt"],
                o = ["ss_cookieAllowed"],
                h = v => {
                    var u = v.performanceGranted,
                        r = v.marketingGranted;
                    if (!(u && r)) {
                        var i = {
                                expires: new Date(0).toUTCString()
                            },
                            c = o;
                        u || (c = c.concat(d)), r || (c = c.concat(l)), c.forEach(y => {
                            a.default.set(y, "", i)
                        })
                    }
                }
        },
        851198: (_, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            var s = h(e(597284)),
                a = e(424464),
                E = h(e(611220)),
                l = e(787909),
                d = e(433829),
                o = e(139442);

            function h(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            }

            function v() {
                var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, l.getWebsiteType)();
                return r === s.default.PARKING_PAGE ? "/settings/email/google-workspace" : "/settings/domains-email/google-workspace"
            }
            var u = {
                forDomains() {
                    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, l.getWebsiteType)();
                    return r === s.default.PARKING_PAGE && !a.multiProductConfig.isStandaloneScheduling() ? "/" : "/settings/domains-email/domains/"
                },
                forDomainsAndEmail() {
                    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, l.getWebsiteType)();
                    return r === s.default.PARKING_PAGE && !a.multiProductConfig.isStandaloneScheduling() ? "/" : "/settings/domains-email/"
                },
                forDomainsFullWidth() {
                    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, l.getWebsiteType)();
                    return r === s.default.PARKING_PAGE && !a.multiProductConfig.isStandaloneScheduling() ? "/domains/" : "/settings/domains-email/domains/"
                },
                forDomainsInAccountService() {
                    return "/domains/"
                },
                forBilling() {
                    return a.multiProductConfig.isStandaloneScheduling() && !(0, d.isStandaloneSchedulingStaticNavEnabledByLabsOrStatsig)() ? "/billing/" : "/settings/billing/"
                },
                forBillingSubscriptionsList() {
                    var r = this.forBilling();
                    return "".concat(r, "subscriptions/")
                },
                forBillingSubscription(r) {
                    var i = this.forBillingSubscriptionsList();
                    return "".concat(i).concat(r)
                },
                forAccountMenu() {
                    return "/settings/billing/"
                },
                forSettingsOrConfig() {
                    return "/settings/"
                },
                forGoogleWorkspace: v,
                forGoogleWorkspaceAccount(r) {
                    var i = r.websiteType,
                        c = i === void 0 ? (0, l.getWebsiteType)() : i,
                        y = r.googleAppsSubscriptionInfoId;
                    return "".concat(v(c), "/account/").concat(y)
                },
                forGoogleWorkspaceSubscriptionRequest(r) {
                    var i = r.websiteType,
                        c = i === void 0 ? (0, l.getWebsiteType)() : i,
                        y = r.billingRequestId;
                    return "".concat(v(c), "/subscription-request/").concat(y)
                },
                forGSuiteBillingAndAccountingLink() {
                    return "".concat(this.forBilling(), "subscriptions/").concat(E.default.GOOGLE_APPS)
                },
                forSwitchProducts() {
                    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, l.getWebsiteType)();
                    return r === s.default.PARKING_PAGE ? "/upgrade/" : "/settings/billing/switch-products/"
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
                    return (0, o.isManageMultipleGoogleWorkspaceEnabled)() && r ? "/settings/gsuite-add-user/".concat(r) : "/settings/gsuite-add-user"
                },
                forGSuiteReactivation(r) {
                    return (0, o.isManageMultipleGoogleWorkspaceEnabled)() && r ? "/settings/gsuite-reactivation/".concat(r) : "/settings/gsuite-reactivation"
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
        433829: (_, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });

            function s(h, v) {
                for (var u in v) Object.defineProperty(h, u, {
                    enumerable: !0,
                    get: v[u]
                })
            }
            s(t, {
                isStandaloneSchedulingStaticNav: function() {
                    return o
                },
                isStandaloneSchedulingStaticNavEnabledByLabsOrStatsig: function() {
                    return d
                }
            });
            var a = e(424464),
                E = e(572991),
                l = "standalone_scheduling_with_static_nav",
                d = () => a.activationFunnelFeatureFlags.isStandaloneSchedulingStaticNavEnabled() ? !0 : (0, E.isFeatureEnabled)(l),
                o = () => a.multiProductConfig.isStandaloneScheduling() ? d() : !1
        },
        787909: (_, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });

            function s(i, c) {
                for (var y in c) Object.defineProperty(i, y, {
                    enumerable: !0,
                    get: c[y]
                })
            }
            s(t, {
                getWebsiteType: function() {
                    return d
                },
                isClassic: function() {
                    return v
                },
                isCommerce: function() {
                    return u
                },
                isCoverPage: function() {
                    return h
                },
                isEnterprise: function() {
                    return r
                },
                isParkingPage: function() {
                    return o
                }
            });
            var a = e(491644),
                E = l(e(597284));

            function l(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }
            var d = () => {
                    var i;
                    return a.context === null || a.context === void 0 || (i = a.context.website) === null || i === void 0 ? void 0 : i.websiteType
                },
                o = () => d() === E.default.PARKING_PAGE,
                h = () => d() === E.default.COVER_PAGE,
                v = () => d() === E.default.CLASSIC,
                u = () => d() === E.default.COMMERCE,
                r = () => d() === E.default.ENTERPRISE
        },
        160890: (_, t, e) => {
            "use strict";
            e.r(t), e.d(t, {
                ConfigSentryIntegration: () => d
            });
            var s = e(346797),
                a = e.n(s),
                E = e(392338),
                l = new Proxy({}, {
                    get: function(h, v, u) {
                        return () => h
                    }
                });
            class d {
                constructor(h, v) {
                    var u = this;
                    a()(this, "logToConsole", function(r) {
                        console.group("[Sentry] [".concat(u.meta.owner, "] [").concat(u.meta.project, "]"));
                        for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), y = 1; y < i; y++) c[y - 1] = arguments[y];
                        return typeof r == "string" ? console.log(r, c) : (console.error(r), c.length && console.error(c)), console.groupEnd(), "some-error-identifier"
                    }), a()(this, "isSentryConnected", !1), a()(this, "captureMessage", this.logToConsole), a()(this, "captureException", this.logToConsole), a()(this, "captureEvent", this.logToConsole), a()(this, "configureScope", () => {}), a()(this, "withScope", r => r(l)), a()(this, "meta", {
                        project: "config-frontend-undefined",
                        owner: "unknown"
                    }), a()(this, "withSquarespaceScope", r => {
                        this.isSentryConnected ? this.withScope(i => {
                            i.setTag("project", this.meta.project), i.setTag("owner", this.meta.owner), r(i)
                        }) : r(l)
                    }), a()(this, "initialize", r => {
                        this.captureMessage = r.captureMessage, this.captureException = r.captureException, this.captureEvent = r.captureEvent, this.configureScope = r.configureScope, this.withScope = r.withScope, this.isSentryConnected = !0
                    }), this.meta.project = h, this.meta.owner = v, window.SQUARESPACE_SENTRY && this.initialize(window.SQUARESPACE_SENTRY)
                }
            }
        },
        701268: (_, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.STATSIG_CLIENT_SDK_KEY = t.ENVIRONMENT = void 0;
            var s = e(365752),
                a = t.ENVIRONMENT = (0, s.getEnvironment)(),
                E = t.STATSIG_CLIENT_SDK_KEY = "client-hXbQ63BqA68Jpec4rnPjIAjGV2coXa9IB73ydOtHa4T"
        },
        254708: (_, t, e) => {
            "use strict";
            e(392338), e(392338), e(392338), e(392338), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.eventsClient = void 0;
            var s = l(e(221661)),
                a = e(365752);

            function E(o) {
                if (typeof WeakMap != "function") return null;
                var h = new WeakMap,
                    v = new WeakMap;
                return (E = function(r) {
                    return r ? v : h
                })(o)
            }

            function l(o, h) {
                if (!h && o && o.__esModule) return o;
                if (o === null || typeof o != "object" && typeof o != "function") return {
                    default: o
                };
                var v = E(h);
                if (v && v.has(o)) return v.get(o);
                var u = {
                        __proto__: null
                    },
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in o)
                    if (i !== "default" && Object.prototype.hasOwnProperty.call(o, i)) {
                        var c = r ? Object.getOwnPropertyDescriptor(o, i) : null;
                        c && (c.get || c.set) ? Object.defineProperty(u, i, c) : u[i] = o[i]
                    }
                return u.default = o, v && v.set(o, u), u
            }
            var d = t.eventsClient = new s.default({
                customSchemaName: "ABTestAssignment",
                sourceEnvironment: (0, a.isInternal)() ? s.SourceEnvironment.STAGING : s.SourceEnvironment.PROD
            }, {
                action: "assign",
                actor: "system",
                event_name: "StatsigAssignment_TestAssignment",
                event_source: "web",
                object_type: "subject",
                test_namespace: "Squarespace"
            })
        },
        332857: (_, t, e) => {
            "use strict";
            var s = e(875832);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sentry = void 0;
            var a = e(160890),
                E = s(e(581686)),
                l = t.sentry = new a.ConfigSentryIntegration("config-statsig", E.default.CONFIG_FRONTEND_ENG)
        },
        757183: (_, t, e) => {
            "use strict";
            e(392338), e(392338), e(392338), e(392338), e(392338);
            var s = e(875832);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createStatsigClient = i, t.extendUser = b, t.getStatsigClient = y, t.isFeatureEnabled = f;
            var a = s(e(544257)),
                E = s(e(346797)),
                l = s(e(385870)),
                d = s(e(646715)),
                o = e(310332),
                h = e(701268),
                v = e(73040);

            function u(p, C) {
                var g = Object.keys(p);
                if (Object.getOwnPropertySymbols) {
                    var A = Object.getOwnPropertySymbols(p);
                    C && (A = A.filter(function(w) {
                        return Object.getOwnPropertyDescriptor(p, w).enumerable
                    })), g.push.apply(g, A)
                }
                return g
            }

            function r(p) {
                for (var C = 1; C < arguments.length; C++) {
                    var g = arguments[C] != null ? arguments[C] : {};
                    C % 2 ? u(Object(g), !0).forEach(function(A) {
                        (0, E.default)(p, A, g[A])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(g)) : u(Object(g)).forEach(function(A) {
                        Object.defineProperty(p, A, Object.getOwnPropertyDescriptor(g, A))
                    })
                }
                return p
            }

            function i() {
                return c.apply(this, arguments)
            }

            function c() {
                return c = (0, l.default)(a.default.mark(function p() {
                    var C, g, A, w, O = arguments;
                    return a.default.wrap(function(M) {
                        for (;;) switch (M.prev = M.next) {
                            case 0:
                                return C = O.length > 0 && O[0] !== void 0 ? O[0] : {}, g = O.length > 1 && O[1] !== void 0 ? O[1] : {}, M.next = 4, (0, v.getStatsigUser)(C == null ? void 0 : C.context);
                            case 4:
                                return A = M.sent, w = new o.StatsigClient(h.STATSIG_CLIENT_SDK_KEY, A, r({
                                    environment: {
                                        tier: h.ENVIRONMENT
                                    }
                                }, g)), M.next = 8, w.initializeAsync();
                            case 8:
                                return M.abrupt("return", w);
                            case 9:
                            case "end":
                                return M.stop()
                        }
                    }, p)
                })), c.apply(this, arguments)
            }

            function y() {
                return o.StatsigClient.instance(h.STATSIG_CLIENT_SDK_KEY)
            }

            function f(p) {
                return y().checkGate(p)
            }

            function b(p) {
                return T.apply(this, arguments)
            }

            function T() {
                return T = (0, l.default)(a.default.mark(function p(C) {
                    var g, A, w;
                    return a.default.wrap(function(P) {
                        for (;;) switch (P.prev = P.next) {
                            case 0:
                                if (g = y(), g.loadingStatus === "Ready") {
                                    P.next = 3;
                                    break
                                }
                                return P.abrupt("return");
                            case 3:
                                return A = g.getContext(), w = A.user, P.next = 6, g.updateUserAsync((0, d.default)(w, C));
                            case 6:
                                return P.abrupt("return", g.getContext().user);
                            case 7:
                            case "end":
                                return P.stop()
                        }
                    }, p)
                })), T.apply(this, arguments)
            }
        },
        73040: (_, t, e) => {
            "use strict";
            var s = e(875832);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getStatsigUser = r;
            var a = s(e(544257)),
                E = s(e(385870)),
                l = s(e(375798));
            e(392338), e(392338), e(392338), e(392338), e(392338);
            var d = s(e(411148)),
                o = e(254708);

            function h(c) {
                var y, f = c == null ? void 0 : c.authenticatedAccount,
                    b = Object.entries(d.default).filter(p => {
                        var C, g = (0, l.default)(p, 2),
                            A = g[0],
                            w = g[1];
                        return typeof w == "number" && (f == null || (C = f.guilds) === null || C === void 0 ? void 0 : C[w]) === !0
                    }).map(p => {
                        var C = (0, l.default)(p, 1),
                            g = C[0];
                        return g
                    }),
                    T = f ? (f == null || (y = f.guilds) === null || y === void 0 ? void 0 : y[d.default.CIRCLE_USER]) || !1 : void 0;
                return {
                    data: f,
                    computed: {
                        guilds: b,
                        circleStatus: T
                    }
                }
            }

            function v(c) {
                return u.apply(this, arguments)
            }

            function u() {
                return u = (0, E.default)(a.default.mark(function c(y) {
                    var f;
                    return a.default.wrap(function(T) {
                        for (;;) switch (T.prev = T.next) {
                            case 0:
                                if (f = y == null ? void 0 : y.website, y) {
                                    T.next = 4;
                                    break
                                }
                                return T.next = 4, fetch("/api/rest/websites/mine").then(p => p.json()).then(p => {
                                    f = p
                                }).catch(p => {
                                    console.warn("Experimentation assignment data initialized without Website related values", p)
                                });
                            case 4:
                                return T.abrupt("return", {
                                    data: f
                                });
                            case 5:
                            case "end":
                                return T.stop()
                        }
                    }, c)
                })), u.apply(this, arguments)
            }

            function r(c) {
                return i.apply(this, arguments)
            }

            function i() {
                return i = (0, E.default)(a.default.mark(function c(y) {
                    var f, b, T, p, C, g, A, w, O, P, M, N, R, k, U;
                    return a.default.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return N = o.eventsClient._getAnalyticsId(), R = h(y), n.next = 4, v(y);
                            case 4:
                                return k = n.sent, U = {
                                    email: (f = R.data) === null || f === void 0 ? void 0 : f.email,
                                    customIDs: {
                                        analytics_id: N,
                                        member_account_id: (b = R.data) === null || b === void 0 ? void 0 : b.id,
                                        website_id: (T = k.data) === null || T === void 0 ? void 0 : T.id
                                    },
                                    custom: {
                                        circle_status: (p = R.computed) === null || p === void 0 ? void 0 : p.circleStatus,
                                        member_account_creation_date: (C = R.data) === null || C === void 0 ? void 0 : C.createdOn,
                                        member_account_guilds: (g = R.computed) === null || g === void 0 ? void 0 : g.guilds,
                                        member_account_language: (A = R.data) === null || A === void 0 ? void 0 : A.preferredLocale,
                                        site_status: (w = k.data) === null || w === void 0 || (w = w.siteStatus) === null || w === void 0 ? void 0 : w.value,
                                        template_version: y == null ? void 0 : y.templateVersion,
                                        website_creation_date: (O = k.data) === null || O === void 0 ? void 0 : O.createdOn,
                                        website_language: (P = k.data) === null || P === void 0 ? void 0 : P.language,
                                        website_type: (M = k.data) === null || M === void 0 ? void 0 : M.websiteType
                                    }
                                }, n.abrupt("return", U);
                            case 7:
                            case "end":
                                return n.stop()
                        }
                    }, c)
                })), i.apply(this, arguments)
            }
        },
        829666: (_, t, e) => {
            "use strict";
            e(392338), e(392338), e(392338), e(392338);
            var s = e(875832);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.trackAssignmentEvent = i;
            var a = s(e(544257)),
                E = s(e(346797)),
                l = s(e(385870));
            e(392338), e(392338), e(392338), e(392338);
            var d = e(254708),
                o = e(757183),
                h = e(332857);

            function v(f, b) {
                var T = Object.keys(f);
                if (Object.getOwnPropertySymbols) {
                    var p = Object.getOwnPropertySymbols(f);
                    b && (p = p.filter(function(C) {
                        return Object.getOwnPropertyDescriptor(f, C).enumerable
                    })), T.push.apply(T, p)
                }
                return T
            }

            function u(f) {
                for (var b = 1; b < arguments.length; b++) {
                    var T = arguments[b] != null ? arguments[b] : {};
                    b % 2 ? v(Object(T), !0).forEach(function(p) {
                        (0, E.default)(f, p, T[p])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(T)) : v(Object(T)).forEach(function(p) {
                        Object.defineProperty(f, p, Object.getOwnPropertyDescriptor(T, p))
                    })
                }
                return f
            }
            var r = new Set;

            function i(f, b) {
                return c.apply(this, arguments)
            }

            function c() {
                return c = (0, l.default)(a.default.mark(function f(b, T) {
                    var p, C, g, A, w, O, P, M, N, R, k, U, D, n, m, S, I, j, G, W = arguments;
                    return a.default.wrap(function(L) {
                        for (;;) switch (L.prev = L.next) {
                            case 0:
                                if (M = W.length > 2 && W[2] !== void 0 ? W[2] : {}, N = b.__evaluation, R = b.ruleID.endsWith("override"), !(r.has(b.name) || !N)) {
                                    L.next = 5;
                                    break
                                }
                                return L.abrupt("return");
                            case 5:
                                if (!(!R && (!N.is_experiment_active || !N.is_user_in_experiment))) {
                                    L.next = 7;
                                    break
                                }
                                return L.abrupt("return");
                            case 7:
                                if (k = (0, o.getStatsigClient)(), U = k.getContext(), D = U.user, n = N.id_type, m = (p = D.customIDs) === null || p === void 0 ? void 0 : p[n], S = b.get("variant", b.groupName), I = (C = (g = D.custom) === null || g === void 0 ? void 0 : g.website_language) !== null && C !== void 0 ? C : null, j = u({
                                        event_owner_team: T,
                                        experiment_name: b.name,
                                        is_override: R,
                                        group_name: b.groupName,
                                        variant: S,
                                        product_area: "cms",
                                        website_locale: I,
                                        subject_id: m != null ? m : null,
                                        subject_id_type: n,
                                        website_id: (A = (w = D.customIDs) === null || w === void 0 ? void 0 : w.website_id) !== null && A !== void 0 ? A : null,
                                        member_account_id: (O = D == null || (P = D.customIDs) === null || P === void 0 ? void 0 : P.member_account_id) !== null && O !== void 0 ? O : null
                                    }, M), G = y(j), G) {
                                    L.next = 18;
                                    break
                                }
                                return h.sentry.withSquarespaceScope($ => {
                                    $.setTag("experiment.name", b.name), $.setTag("experiment.owner_team", T), $.setTag("experiment.is_override", R), $.captureException("Invalid ABTestAssignment event payload \u2014 missing required properties")
                                }), L.abrupt("return");
                            case 18:
                                return L.next = 20, d.eventsClient.track(j);
                            case 20:
                                return r.add(b.name), L.abrupt("return", j);
                            case 22:
                            case "end":
                                return L.stop()
                        }
                    }, f)
                })), c.apply(this, arguments)
            }

            function y() {
                for (var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, b = ["experiment_name", "variant", "is_override", "subject_id", "subject_id_type", "member_account_id", "website_id", "event_owner_team", "product_area"], T = 0, p = b; T < p.length; T++) {
                    var C = p[T];
                    if (f[C] === void 0 || f[C] === null || typeof f[C] == "string" && f[C] === "") return !1
                }
                return !0
            }
        },
        572991: (_, t, e) => {
            "use strict";
            e(392338), e(392338), Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = {
                createStatsigClient: !0,
                extendUser: !0,
                getStatsigClient: !0,
                isFeatureEnabled: !0,
                LocalOverrideAdapter: !0
            };
            Object.defineProperty(t, "LocalOverrideAdapter", {
                enumerable: !0,
                get: function() {
                    return l.LocalOverrideAdapter
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
                E = e(310332);
            Object.keys(E).forEach(function(d) {
                d === "default" || d === "__esModule" || Object.prototype.hasOwnProperty.call(s, d) || d in t && t[d] === E[d] || Object.defineProperty(t, d, {
                    enumerable: !0,
                    get: function() {
                        return E[d]
                    }
                })
            });
            var l = e(934114)
        },
        365752: (_, t, e) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isStage = t.isQA = t.isInternal = t.isDev = t.getReleaseVersion = t.getEnvironment = t.getDomain = t.Environment = void 0, e(392338), e(392338), e(392338), e(392338), e(392338), e(392338);
            var s = t.Environment = function(u) {
                    return u.DEVELOPMENT = "development", u.STAGING = "staging", u.QA = "qa", u.PRODUCTION = "production", u
                }({}),
                a = t.getDomain = function() {
                    var r, i, c, y, f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window;
                    if (typeof f == "string") {
                        var b = new URL(f);
                        return b.hostname
                    }
                    return (r = (i = (c = f.Static) === null || c === void 0 || (c = c.SQUARESPACE_CONTEXT) === null || c === void 0 ? void 0 : c.appDomain) !== null && i !== void 0 ? i : (y = f.location) === null || y === void 0 ? void 0 : y.host) !== null && r !== void 0 ? r : ""
                },
                E = t.isInternal = function() {
                    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window;
                    return /\.(sqsp|squarespace)\.net$/.test(a(r))
                },
                l = t.isStage = function() {
                    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window;
                    return /stage\.(sqsp|squarespace)\.net$/.test(a(r))
                },
                d = t.isQA = function() {
                    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window;
                    return /qa[0-9]+\.(sqsp|squarespace)\.net$/.test(a(r))
                },
                o = t.isDev = function() {
                    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window;
                    return /dev\.(sqsp|squarespace)\.net$/.test(a(r))
                },
                h = () => {
                    var u = s.PRODUCTION;
                    return o() ? u = s.DEVELOPMENT : d() ? u = s.QA : (l() || E()) && (u = s.STAGING), u
                };
            t.getEnvironment = h;
            var v = () => window.__RELEASE_VERSION__;
            t.getReleaseVersion = v
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/e01851656ad330749d8211c3d7f2a533/async-gdpr-cookie-banner-0f9ccec15317de0590d9-min.en-US.js.map