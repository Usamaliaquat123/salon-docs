"use strict";
(self.webpackChunkrne_website = self.webpackChunkrne_website || []).push([
  [19559],
  {
    15680: (e, t, a) => {
      a.d(t, { xA: () => g, yg: () => m });
      var o = a(96540);
      function n(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function s(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, o);
        }
        return a;
      }
      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(a), !0).forEach(function (t) {
                n(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : s(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t),
                );
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var a,
          o,
          n = (function (e, t) {
            if (null == e) return {};
            var a,
              o,
              n = {},
              s = Object.keys(e);
            for (o = 0; o < s.length; o++)
              (a = s[o]), t.indexOf(a) >= 0 || (n[a] = e[a]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (o = 0; o < s.length; o++)
            (a = s[o]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (n[a] = e[a]));
        }
        return n;
      }
      var i = o.createContext({}),
        u = function (e) {
          var t = o.useContext(i),
            a = t;
          return e && (a = "function" == typeof e ? e(t) : r(r({}, t), e)), a;
        },
        g = function (e) {
          var t = u(e.components);
          return o.createElement(i.Provider, { value: t }, e.children);
        },
        p = "mdxType",
        c = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return o.createElement(o.Fragment, {}, t);
          },
        },
        d = o.forwardRef(function (e, t) {
          var a = e.components,
            n = e.mdxType,
            s = e.originalType,
            i = e.parentName,
            g = l(e, ["components", "mdxType", "originalType", "parentName"]),
            p = u(a),
            d = n,
            m = p["".concat(i, ".").concat(d)] || p[d] || c[d] || s;
          return a
            ? o.createElement(m, r(r({ ref: t }, g), {}, { components: a }))
            : o.createElement(m, r({ ref: t }, g));
        });
      function m(e, t) {
        var a = arguments,
          n = t && t.mdxType;
        if ("string" == typeof e || n) {
          var s = a.length,
            r = new Array(s);
          r[0] = d;
          var l = {};
          for (var i in t) hasOwnProperty.call(t, i) && (l[i] = t[i]);
          (l.originalType = e),
            (l[p] = "string" == typeof e ? e : n),
            (r[1] = l);
          for (var u = 2; u < s; u++) r[u] = a[u];
          return o.createElement.apply(null, r);
        }
        return o.createElement.apply(null, a);
      }
      d.displayName = "MDXCreateElement";
    },
    6691: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => g,
          contentTitle: () => i,
          default: () => m,
          frontMatter: () => l,
          metadata: () => u,
          toc: () => p,
        });
      var o = a(58168),
        n = a(98587),
        s = (a(96540), a(15680)),
        r = ["components"],
        l = { title: "useHCustomer()", sidebar_position: 2 },
        i = void 0,
        u = {
          unversionedId: "customization/useHCustomer",
          id: "version-4.0.0-rc.8/customization/useHCustomer",
          title: "useHCustomer()",
          description: "favouriteBeauticians",
          source:
            "@site/versioned_docs/version-4.0.0-rc.8/customization/useHCustomer.mdx",
          sourceDirName: "customization",
          slug: "/customization/useHCustomer",
          permalink: "/docs/customization/useHCustomer",
          draft: !1,
          editUrl:
            "https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/customization/useHCustomer.mdx",
          tags: [],
          version: "4.0.0-rc.8",
          sidebarPosition: 2,
          frontMatter: { title: "useHCustomer()", sidebar_position: 2 },
          sidebar: "docs",
          previous: {
            title: "useHCart()",
            permalink: "/docs/customization/useHCart",
          },
          next: {
            title: "useHOtp()",
            permalink: "/docs/customization/useHOtp",
          },
        },
        g = {},
        p = [
          {
            value: "favouriteBeauticians",
            id: "favouritebeauticians",
            level: 2,
          },
          { value: "favouriteSaloons", id: "favouritesaloons", level: 2 },
          { value: "favouriteProducts", id: "favouriteproducts", level: 2 },
          { value: "favouriteServices", id: "favouriteservices", level: 2 },
          {
            value: "createCustomerFavouriteAPI",
            id: "createcustomerfavouriteapi",
            level: 2,
          },
          {
            value: "checkCustomerFavouriteAPI",
            id: "checkcustomerfavouriteapi",
            level: 2,
          },
          {
            value: "getCustomersBySaloonAPI",
            id: "getcustomersbysaloonapi",
            level: 2,
          },
          {
            value: "getOrdersByCustomerAPI",
            id: "getordersbycustomerapi",
            level: 2,
          },
          { value: "getCustomersAPI", id: "getcustomersapi", level: 2 },
          {
            value: "getCustomerFavouritesAPI",
            id: "getcustomerfavouritesapi",
            level: 2,
          },
          {
            value: "deleteCustomerFavouriteAPI",
            id: "deletecustomerfavouriteapi",
            level: 2,
          },
          {
            value: "createCustomerReviewAPI",
            id: "createcustomerreviewapi",
            level: 2,
          },
          { value: "getCustomerByIdAPI", id: "getcustomerbyidapi", level: 2 },
          {
            value: "getCustomerOffersAPI",
            id: "getcustomeroffersapi",
            level: 2,
          },
          { value: "deleteCustomerAPI", id: "deletecustomerapi", level: 2 },
          { value: "downloadInvoiceAPI", id: "downloadinvoiceapi", level: 2 },
          {
            value: "sendFeedByCustomerAPI",
            id: "sendfeedbycustomerapi",
            level: 2,
          },
          { value: "sendTipAPI", id: "sendtipapi", level: 2 },
          { value: "updateCustomerAPI", id: "updatecustomerapi", level: 2 },
          {
            value: "getCustomersByBeauticianAPI",
            id: "getcustomersbybeauticianapi",
            level: 2,
          },
          { value: "createCustomerAPI", id: "createcustomerapi", level: 2 },
          { value: "getCustomerByIdAPI", id: "getcustomerbyidapi-1", level: 2 },
        ],
        c = { toc: p },
        d = "wrapper";
      function m(e) {
        var t = e.components,
          a = (0, n.A)(e, r);
        return (0, s.yg)(
          d,
          (0, o.A)({}, c, a, { components: t, mdxType: "MDXLayout" }),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "import { useHCustomer } from '@umar-epacken/salon-data/src/hooks/customer/useCustomer';\n\nconst {\n  customers,\n    favouriteBeauticians,\n    favouriteSaloons,\n    favouriteProducts,\n    favouriteServices,\n    createCustomerFavouriteAPI,\n    checkCustomerFavouriteAPI,\n    getCustomersBySaloonAPI,\n    getOrdersByCustomerAPI,\n    getCustomersAPI,\n    getCustomerFavouritesAPI,\n    deleteCustomerFavouriteAPI,\n    createCustomerReviewAPI,\n    getCustomerByIdAPI,\n    createCustomerAPI,\n    getCustomersByBeauticianAPI,\n    updateCustomerAPI,\n    sendTipAPI,\n    sendFeedByCustomerAPI,\n    downloadInvoiceAPI,\n    deleteCustomerAPI,\n    getCustomerOffersAPI,\n} = useHCustomer()\n\n",
            ),
          ),
          (0, s.yg)(
            "h2",
            { id: "favouritebeauticians" },
            "favouriteBeauticians",
          ),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
          (0, s.yg)("h2", { id: "favouritesaloons" }, "favouriteSaloons"),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
          (0, s.yg)("h2", { id: "favouriteproducts" }, "favouriteProducts"),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
          (0, s.yg)("h2", { id: "favouriteservices" }, "favouriteServices"),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
          (0, s.yg)(
            "h2",
            { id: "createcustomerfavouriteapi" },
            "createCustomerFavouriteAPI",
          ),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
          (0, s.yg)(
            "h2",
            { id: "checkcustomerfavouriteapi" },
            "checkCustomerFavouriteAPI",
          ),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
          (0, s.yg)(
            "h2",
            { id: "getcustomersbysaloonapi" },
            "getCustomersBySaloonAPI",
          ),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
          (0, s.yg)(
            "h2",
            { id: "getordersbycustomerapi" },
            "getOrdersByCustomerAPI",
          ),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
          (0, s.yg)("h2", { id: "getcustomersapi" }, "getCustomersAPI"),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
          (0, s.yg)(
            "h2",
            { id: "getcustomerfavouritesapi" },
            "getCustomerFavouritesAPI",
          ),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
          (0, s.yg)(
            "h2",
            { id: "deletecustomerfavouriteapi" },
            "deleteCustomerFavouriteAPI",
          ),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
          (0, s.yg)(
            "h2",
            { id: "createcustomerreviewapi" },
            "createCustomerReviewAPI",
          ),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
          (0, s.yg)("h2", { id: "getcustomerbyidapi" }, "getCustomerByIdAPI"),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
          (0, s.yg)(
            "h2",
            { id: "getcustomeroffersapi" },
            "getCustomerOffersAPI",
          ),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
          (0, s.yg)("h2", { id: "deletecustomerapi" }, "deleteCustomerAPI"),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
          (0, s.yg)("h2", { id: "downloadinvoiceapi" }, "downloadInvoiceAPI"),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n\n",
            ),
          ),
          (0, s.yg)(
            "h2",
            { id: "sendfeedbycustomerapi" },
            "sendFeedByCustomerAPI",
          ),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
          (0, s.yg)("h2", { id: "sendtipapi" }, "sendTipAPI"),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
          (0, s.yg)("h2", { id: "updatecustomerapi" }, "updateCustomerAPI"),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
          (0, s.yg)(
            "h2",
            { id: "getcustomersbybeauticianapi" },
            "getCustomersByBeauticianAPI",
          ),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
          (0, s.yg)("h2", { id: "createcustomerapi" }, "createCustomerAPI"),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
          (0, s.yg)("h2", { id: "getcustomerbyidapi-1" }, "getCustomerByIdAPI"),
          (0, s.yg)("p", null, "loading state of the app"),
          (0, s.yg)(
            "pre",
            null,
            (0, s.yg)(
              "code",
              { parentName: "pre", className: "language-tsx" },
              "const { loading } = useHUser()\n\nconsole.log(loading) /** Loading state of the app **/\n",
            ),
          ),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
