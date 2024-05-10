"use strict";
(self.webpackChunkrne_website = self.webpackChunkrne_website || []).push([
  [77178],
  {
    15680: (e, t, n) => {
      n.d(t, { xA: () => p, yg: () => g });
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
      function i(e, t) {
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
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var c = r.createContext({}),
        s = function (e) {
          var t = r.useContext(c),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : o(o({}, t), e)), n;
        },
        p = function (e) {
          var t = s(e.components);
          return r.createElement(c.Provider, { value: t }, e.children);
        },
        u = "mdxType",
        d = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        y = r.forwardRef(function (e, t) {
          var n = e.components,
            a = e.mdxType,
            i = e.originalType,
            c = e.parentName,
            p = l(e, ["components", "mdxType", "originalType", "parentName"]),
            u = s(n),
            y = a,
            g = u["".concat(c, ".").concat(y)] || u[y] || d[y] || i;
          return n
            ? r.createElement(g, o(o({ ref: t }, p), {}, { components: n }))
            : r.createElement(g, o({ ref: t }, p));
        });
      function g(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ("string" == typeof e || a) {
          var i = n.length,
            o = new Array(i);
          o[0] = y;
          var l = {};
          for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
          (l.originalType = e),
            (l[u] = "string" == typeof e ? e : a),
            (o[1] = l);
          for (var s = 2; s < i; s++) o[s] = n[s];
          return r.createElement.apply(null, o);
        }
        return r.createElement.apply(null, n);
      }
      y.displayName = "MDXCreateElement";
    },
    85872: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => c,
          default: () => g,
          frontMatter: () => l,
          metadata: () => s,
          toc: () => u,
        });
      var r = n(58168),
        a = n(98587),
        i = (n(96540), n(15680)),
        o = ["components"],
        l = {
          id: "overview",
          title: "Overview",
          slug: "/",
          hide_table_of_contents: !0,
        },
        c = void 0,
        s = {
          unversionedId: "overview",
          id: "version-4.0.0-rc.8/overview",
          title: "Overview",
          description: "Installation",
          source: "@site/versioned_docs/version-4.0.0-rc.8/index.mdx",
          sourceDirName: ".",
          slug: "/",
          permalink: "/docs/",
          draft: !1,
          editUrl:
            "https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/index.mdx",
          tags: [],
          version: "4.0.0-rc.8",
          frontMatter: {
            id: "overview",
            title: "Overview",
            slug: "/",
            hide_table_of_contents: !0,
          },
          sidebar: "docs",
          next: { title: "Installation", permalink: "/docs/installation" },
        },
        p = {},
        u = [
          { value: "Installation", id: "installation", level: 2 },
          { value: "Quick start", id: "quick-start", level: 2 },
          { value: "Installation", id: "installation-1", level: 2 },
          { value: "Error Handling", id: "error-handling", level: 2 },
        ],
        d = { toc: u },
        y = "wrapper";
      function g(e) {
        var t = e.components,
          n = (0, a.A)(e, o);
        return (0, i.yg)(
          y,
          (0, r.A)({}, d, n, { components: t, mdxType: "MDXLayout" }),
          (0, i.yg)("h2", { id: "installation" }, "Installation"),
          (0, i.yg)("h2", { id: "quick-start" }, "Quick start"),
          (0, i.yg)(
            "pre",
            null,
            (0, i.yg)(
              "code",
              { parentName: "pre", className: "language-ts" },
              "yarn add @umar-epacken/salon-data\n",
            ),
          ),
          (0, i.yg)("p", null, "This is served as a private npm package."),
          (0, i.yg)("h2", { id: "installation-1" }, "Installation"),
          (0, i.yg)(
            "ol",
            null,
            (0, i.yg)(
              "li",
              { parentName: "ol" },
              (0, i.yg)(
                "p",
                { parentName: "li" },
                (0, i.yg)("strong", { parentName: "p" }, ".npmrc File:"),
                " You will need an ",
                (0, i.yg)("inlineCode", { parentName: "p" }, ".npmrc"),
                " file to have it installed in your project.",
              ),
            ),
            (0, i.yg)(
              "li",
              { parentName: "ol" },
              (0, i.yg)(
                "p",
                { parentName: "li" },
                (0, i.yg)(
                  "strong",
                  { parentName: "p" },
                  "Environment Variables:",
                ),
                " Double check the env variables in ",
                (0, i.yg)("inlineCode", { parentName: "p" }, "env.ts"),
                " are all set as requested by the package.",
              ),
            ),
            (0, i.yg)(
              "li",
              { parentName: "ol" },
              (0, i.yg)(
                "p",
                { parentName: "li" },
                (0, i.yg)(
                  "strong",
                  { parentName: "p" },
                  "Install Dependencies:",
                ),
                " Execute ",
                (0, i.yg)("inlineCode", { parentName: "p" }, "yarn"),
                " to install the dependencies.",
              ),
            ),
          ),
          (0, i.yg)("h2", { id: "error-handling" }, "Error Handling"),
          (0, i.yg)(
            "p",
            null,
            "Includes try-catch blocks within each API function in a hook to handle errors effectively.",
          ),
          (0, i.yg)("h1", { id: "contributing" }, "Contributing"),
          (0, i.yg)(
            "p",
            null,
            'Contributions are welcome! If you\'d like to contribute, please fork the repository and create a pull request, or open an issue with the tags "enhancement" or "bug".',
          ),
          (0, i.yg)("h1", { id: "license" }, "License"),
          (0, i.yg)(
            "p",
            null,
            "This project is proprietary and closed-source. All rights reserved. See the ",
            (0, i.yg)("inlineCode", { parentName: "p" }, "LICENSE.md"),
            " file for details.",
          ),
          (0, i.yg)("h1", { id: "contact" }, "Contact"),
          (0, i.yg)(
            "p",
            null,
            "If you have any questions or suggestions about the salon-data package, please contact ",
            (0, i.yg)(
              "a",
              { parentName: "p", href: "mailto:umar@epacken.com" },
              "umar@epacken.com",
            ),
            " or ",
            (0, i.yg)(
              "a",
              { parentName: "p", href: "mailto:usama@epacken.com" },
              "usama@epacken.com",
            ),
            ".",
          ),
        );
      }
      g.isMDXComponent = !0;
    },
  },
]);
