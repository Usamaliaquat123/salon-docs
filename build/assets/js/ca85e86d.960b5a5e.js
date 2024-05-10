"use strict";
(self.webpackChunkrne_website = self.webpackChunkrne_website || []).push([
  [75279],
  {
    15680: (e, t, n) => {
      n.d(t, { xA: () => p, yg: () => y });
      var r = n(96540);
      function a(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function i(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var s = r.createContext({}),
        c = function (e) {
          var t = r.useContext(s),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : l(l({}, t), e)), n;
        },
        p = function (e) {
          var t = c(e.components);
          return r.createElement(s.Provider, { value: t }, e.children);
        },
        u = "mdxType",
        d = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        m = r.forwardRef(function (e, t) {
          var n = e.components,
            a = e.mdxType,
            o = e.originalType,
            s = e.parentName,
            p = i(e, ["components", "mdxType", "originalType", "parentName"]),
            u = c(n),
            m = a,
            y = u["".concat(s, ".").concat(m)] || u[m] || d[m] || o;
          return n
            ? r.createElement(y, l(l({ ref: t }, p), {}, { components: n }))
            : r.createElement(y, l({ ref: t }, p));
        });
      function y(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ("string" == typeof e || a) {
          var o = n.length,
            l = new Array(o);
          l[0] = m;
          var i = {};
          for (var s in t) hasOwnProperty.call(t, s) && (i[s] = t[s]);
          (i.originalType = e),
            (i[u] = "string" == typeof e ? e : a),
            (l[1] = i);
          for (var c = 2; c < o; c++) l[c] = n[c];
          return r.createElement.apply(null, l);
        }
        return r.createElement.apply(null, n);
      }
      m.displayName = "MDXCreateElement";
    },
    39730: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => s,
          default: () => v,
          frontMatter: () => i,
          metadata: () => c,
          toc: () => u,
        });
      var r = n(58168),
        a = n(98587),
        o = (n(96540), n(15680)),
        l = (n(86025), ["components"]),
        i = { id: "installation", title: "", sidebar_label: "Installation" },
        s = void 0,
        c = {
          unversionedId: "installation",
          id: "version-4.0.0-rc.8/installation",
          title: "",
          description: "Installation",
          source: "@site/versioned_docs/version-4.0.0-rc.8/installation.mdx",
          sourceDirName: ".",
          slug: "/installation",
          permalink: "/docs/installation",
          draft: !1,
          editUrl:
            "https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/installation.mdx",
          tags: [],
          version: "4.0.0-rc.8",
          frontMatter: {
            id: "installation",
            title: "",
            sidebar_label: "Installation",
          },
          sidebar: "docs",
          previous: { title: "Overview", permalink: "/docs/" },
          next: {
            title: "Troubleshooting",
            permalink: "/docs/troubleshooting",
          },
        },
        p = {},
        u = [
          { value: "Installation", id: "installation", level: 2 },
          { value: "Stable", id: "stable", level: 3 },
        ],
        d = function (e) {
          return function (t) {
            return (
              console.warn(
                "Component " +
                  e +
                  " was not imported, exported, or provided by MDXProvider as global scope",
              ),
              (0, o.yg)("div", t)
            );
          };
        },
        m = d("Tabs"),
        y = d("TabItem"),
        b = { toc: u },
        f = "wrapper";
      function v(e) {
        var t = e.components,
          n = (0, a.A)(e, l);
        return (0, o.yg)(
          f,
          (0, r.A)({}, b, n, { components: t, mdxType: "MDXLayout" }),
          (0, o.yg)("h2", { id: "installation" }, "Installation"),
          (0, o.yg)("h3", { id: "stable" }, "Stable"),
          (0, o.yg)(
            m,
            {
              groupId: "pkg",
              values: [
                { label: "NPM", value: "npm" },
                { label: "Yarn", value: "yarn" },
              ],
              mdxType: "Tabs",
            },
            (0, o.yg)(
              y,
              { value: "npm", mdxType: "TabItem" },
              (0, o.yg)(
                "pre",
                null,
                (0, o.yg)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  "npm install @umar-epacken/salon-data\n",
                ),
              ),
            ),
            (0, o.yg)(
              y,
              { value: "yarn", mdxType: "TabItem" },
              (0, o.yg)(
                "pre",
                null,
                (0, o.yg)(
                  "code",
                  { parentName: "pre", className: "language-bash" },
                  "yarn add @umar-epacken/salon-data\n",
                ),
              ),
            ),
          ),
        );
      }
      v.isMDXComponent = !0;
    },
  },
]);
