"use strict";
(self.webpackChunkrne_website = self.webpackChunkrne_website || []).push([
  [49141],
  {
    15680: (e, n, t) => {
      t.d(n, { xA: () => p, yg: () => d });
      var a = t(96540);
      function r(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function l(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n &&
            (a = a.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, a);
        }
        return t;
      }
      function i(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? l(Object(t), !0).forEach(function (n) {
                r(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                );
              });
        }
        return e;
      }
      function o(e, n) {
        if (null == e) return {};
        var t,
          a,
          r = (function (e, n) {
            if (null == e) return {};
            var t,
              a,
              r = {},
              l = Object.keys(e);
            for (a = 0; a < l.length; a++)
              (t = l[a]), n.indexOf(t) >= 0 || (r[t] = e[t]);
            return r;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (a = 0; a < l.length; a++)
            (t = l[a]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (r[t] = e[t]));
        }
        return r;
      }
      var s = a.createContext({}),
        g = function (e) {
          var n = a.useContext(s),
            t = n;
          return e && (t = "function" == typeof e ? e(n) : i(i({}, n), e)), t;
        },
        p = function (e) {
          var n = g(e.components);
          return a.createElement(s.Provider, { value: n }, e.children);
        },
        u = "mdxType",
        m = {
          inlineCode: "code",
          wrapper: function (e) {
            var n = e.children;
            return a.createElement(a.Fragment, {}, n);
          },
        },
        y = a.forwardRef(function (e, n) {
          var t = e.components,
            r = e.mdxType,
            l = e.originalType,
            s = e.parentName,
            p = o(e, ["components", "mdxType", "originalType", "parentName"]),
            u = g(t),
            y = r,
            d = u["".concat(s, ".").concat(y)] || u[y] || m[y] || l;
          return t
            ? a.createElement(d, i(i({ ref: n }, p), {}, { components: t }))
            : a.createElement(d, i({ ref: n }, p));
        });
      function d(e, n) {
        var t = arguments,
          r = n && n.mdxType;
        if ("string" == typeof e || r) {
          var l = t.length,
            i = new Array(l);
          i[0] = y;
          var o = {};
          for (var s in n) hasOwnProperty.call(n, s) && (o[s] = n[s]);
          (o.originalType = e),
            (o[u] = "string" == typeof e ? e : r),
            (i[1] = o);
          for (var g = 2; g < l; g++) i[g] = t[g];
          return a.createElement.apply(null, i);
        }
        return a.createElement.apply(null, t);
      }
      y.displayName = "MDXCreateElement";
    },
    28722: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => p,
          contentTitle: () => s,
          default: () => d,
          frontMatter: () => o,
          metadata: () => g,
          toc: () => u,
        });
      var a = t(58168),
        r = t(98587),
        l = (t(96540), t(15680)),
        i = ["components"],
        o = { title: "Overview", sidebar_position: 0, slug: "/customizing" },
        s = void 0,
        g = {
          unversionedId: "customization/index",
          id: "version-4.0.0-rc.8/customization/index",
          title: "Overview",
          description:
            "Congrats! You've installed @umar-epacken/salon-data and your immediate question",
          source:
            "@site/versioned_docs/version-4.0.0-rc.8/customization/index.mdx",
          sourceDirName: "customization",
          slug: "/customizing",
          permalink: "/docs/customizing",
          draft: !1,
          editUrl:
            "https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/customization/index.mdx",
          tags: [],
          version: "4.0.0-rc.8",
          sidebarPosition: 0,
          frontMatter: {
            title: "Overview",
            sidebar_position: 0,
            slug: "/customizing",
          },
          sidebar: "docs",
          previous: {
            title: "Troubleshooting",
            permalink: "/docs/troubleshooting",
          },
          next: {
            title: "useHUser()",
            permalink: "/docs/customization/theme_object",
          },
        },
        p = {},
        u = [
          { value: "useHUser()", id: "usehuser", level: 2 },
          { value: "1. useAppConfig", id: "1-useappconfig", level: 2 },
          { value: "2. useRegister", id: "2-useregister", level: 2 },
          { value: "3. useLogin", id: "3-uselogin", level: 2 },
          { value: "4. useOtp", id: "4-useotp", level: 2 },
          { value: "5. useSession", id: "5-usesession", level: 2 },
          {
            value: "6. useForgotPassword",
            id: "6-useforgotpassword",
            level: 2,
          },
          { value: "7. useResetPassword", id: "7-useresetpassword", level: 2 },
          {
            value: "8. useChangePassword",
            id: "8-usechangepassword",
            level: 2,
          },
          {
            value: "9. useEmailConfirmation",
            id: "9-useemailconfirmation",
            level: 2,
          },
        ],
        m = { toc: u },
        y = "wrapper";
      function d(e) {
        var n = e.components,
          t = (0, r.A)(e, i);
        return (0, l.yg)(
          y,
          (0, a.A)({}, m, t, { components: n, mdxType: "MDXLayout" }),
          (0, l.yg)(
            "p",
            null,
            "Congrats! You've installed ",
            (0, l.yg)(
              "inlineCode",
              { parentName: "p" },
              "@umar-epacken/salon-data",
            ),
            " and your immediate question\ngoes something like this:",
          ),
          (0, l.yg)(
            "blockquote",
            null,
            (0, l.yg)(
              "p",
              { parentName: "blockquote" },
              "So umm, how do can i get the user information through the redux",
            ),
          ),
          (0, l.yg)(
            "p",
            null,
            "Great question! you can get the current user information through ",
            (0, l.yg)("inlineCode", { parentName: "p" }, "useHUser()"),
            " hook",
          ),
          (0, l.yg)("h2", { id: "usehuser" }, "useHUser()"),
          (0, l.yg)(
            "p",
            null,
            "you can get the current user context by utilizing ",
            (0, l.yg)("inlineCode", { parentName: "p" }, "useHUser"),
          ),
          (0, l.yg)(
            "pre",
            null,
            (0, l.yg)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              "import { useHUser } from '@umar-epacken/salon-data';\n\nconst { loginInfo } = useHUser();\n\nconsole.log(loginInfo); /** current user info **/\n",
            ),
          ),
          (0, l.yg)("h1", { id: "application-hooks" }, "Application Hooks"),
          (0, l.yg)("h2", { id: "1-useappconfig" }, "1. useAppConfig"),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Platform:"),
            " WEB/MOBILE",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Usage:"),
            " Access application configuration.",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Returns:"),
          ),
          (0, l.yg)(
            "ul",
            null,
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "loading"),
              ": Application loading state.",
            ),
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "language"),
              ": Application language.",
            ),
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "themeMode"),
              ": Application theme mode (",
              (0, l.yg)("inlineCode", { parentName: "li" }, "light"),
              " | ",
              (0, l.yg)("inlineCode", { parentName: "li" }, "dark"),
              ").",
            ),
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "accessToken"),
              ": Application access token.",
            ),
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "userInfo"),
              ": Current logged-in user info.",
            ),
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "setReduxLanguage"),
              ": Public setter method for language.",
            ),
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)(
                "inlineCode",
                { parentName: "li" },
                "setReduxThemeMode",
              ),
              ": Public setter method for application theme mode.",
            ),
          ),
          (0, l.yg)("h2", { id: "2-useregister" }, "2. useRegister"),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Platform:"),
            " WEB/MOBILE",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Usage:"),
            " Sign up/register user to the application.",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Parameters:"),
          ),
          (0, l.yg)(
            "ul",
            null,
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "username"),
              ": string",
            ),
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "email"),
              ": string",
            ),
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "password"),
              ": string",
            ),
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Returns:"),
          ),
          (0, l.yg)(
            "ul",
            null,
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "userInfo"),
              ": Current registered user info.",
            ),
          ),
          (0, l.yg)("h2", { id: "3-uselogin" }, "3. useLogin"),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Platform:"),
            " WEB/MOBILE",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Usage:"),
            " Sign in/login user to the application.",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Parameters:"),
          ),
          (0, l.yg)(
            "ul",
            null,
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "identifier"),
              ": string",
            ),
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "password"),
              ": string",
            ),
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "provider"),
              ": string",
            ),
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Returns:"),
          ),
          (0, l.yg)(
            "ul",
            null,
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "userInfo"),
              ": Current logged-in user info.",
            ),
          ),
          (0, l.yg)("h2", { id: "4-useotp" }, "4. useOtp"),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Platform:"),
            " WEB/MOBILE",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Usage:"),
            " Phone number verification via OTP.",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Parameters:"),
          ),
          (0, l.yg)(
            "ul",
            null,
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "otpCode"),
              ": string",
            ),
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "otpReceiveType"),
              ": ",
              (0, l.yg)("em", { parentName: "li" }, "ENUM"),
              " EOtpReceive (",
              (0, l.yg)("inlineCode", { parentName: "li" }, "SMS"),
              " | ",
              (0, l.yg)("inlineCode", { parentName: "li" }, "EMAIL"),
              ")",
            ),
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Returns:"),
          ),
          (0, l.yg)(
            "ul",
            null,
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "OtpAPI"),
              ": Public method to get OTP.",
            ),
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "validateOtpAPI"),
              ": Public method to validate OTP.",
            ),
          ),
          (0, l.yg)("h2", { id: "5-usesession" }, "5. useSession"),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Platform:"),
            " WEB/MOBILE",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Usage:"),
            " Validate the current application session by verifying JWT.",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Parameters:"),
          ),
          (0, l.yg)(
            "ul",
            null,
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "accessToken"),
              ": string",
            ),
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Returns:"),
          ),
          (0, l.yg)(
            "ul",
            null,
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)(
                "inlineCode",
                { parentName: "li" },
                "validateSessionAPI()",
              ),
              ": Public method to validate token and update in redux.",
            ),
          ),
          (0, l.yg)(
            "h2",
            { id: "6-useforgotpassword" },
            "6. useForgotPassword",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Platform:"),
            " WEB/MOBILE",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Usage:"),
            " Send reset password email to user.",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Parameters:"),
          ),
          (0, l.yg)(
            "ul",
            null,
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "email"),
              ": string",
            ),
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Returns:"),
          ),
          (0, l.yg)(
            "ul",
            null,
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)(
                "inlineCode",
                { parentName: "li" },
                "forgotPasswordAPI()",
              ),
              ": Public method to access API and get response.",
            ),
          ),
          (0, l.yg)("h2", { id: "7-useresetpassword" }, "7. useResetPassword"),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Platform:"),
            " WEB/MOBILE",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Usage:"),
            " Reset user password.",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Parameters:"),
          ),
          (0, l.yg)(
            "ul",
            null,
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "password"),
              ": string",
            ),
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)(
                "inlineCode",
                { parentName: "li" },
                "passwordConfirmation",
              ),
              ": string",
            ),
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "code"),
              ": string",
            ),
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Returns:"),
          ),
          (0, l.yg)(
            "ul",
            null,
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)(
                "inlineCode",
                { parentName: "li" },
                "resetPasswordAPI()",
              ),
              ": Public method to access resetPassword API and get response.",
            ),
          ),
          (0, l.yg)(
            "h2",
            { id: "8-usechangepassword" },
            "8. useChangePassword",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Platform:"),
            " WEB/MOBILE",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Usage:"),
            " Change current user password.",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Parameters:"),
          ),
          (0, l.yg)(
            "ul",
            null,
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "currentPassword"),
              ": string",
            ),
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "password"),
              ": string",
            ),
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)(
                "inlineCode",
                { parentName: "li" },
                "passwordConfirmation",
              ),
              ": string",
            ),
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Returns:"),
          ),
          (0, l.yg)(
            "ul",
            null,
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)(
                "inlineCode",
                { parentName: "li" },
                "changePasswordAPI()",
              ),
              ": Public method to access changePassword API and get response.",
            ),
          ),
          (0, l.yg)(
            "h2",
            { id: "9-useemailconfirmation" },
            "9. useEmailConfirmation",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Platform:"),
            " WEB/MOBILE",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Usage:"),
            " Confirm user email.",
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Parameters:"),
          ),
          (0, l.yg)(
            "ul",
            null,
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)("inlineCode", { parentName: "li" }, "confirmation"),
              ": string",
            ),
          ),
          (0, l.yg)(
            "p",
            null,
            (0, l.yg)("strong", { parentName: "p" }, "Returns:"),
          ),
          (0, l.yg)(
            "ul",
            null,
            (0, l.yg)(
              "li",
              { parentName: "ul" },
              (0, l.yg)(
                "inlineCode",
                { parentName: "li" },
                "emailConfirmationAPI()",
              ),
              ": Public method to access emailConfirmation API and get response.",
            ),
          ),
          (0, l.yg)(
            "p",
            null,
            "Remember if you want to override the values set in the theme you can always use component props.",
          ),
          (0, l.yg)("p", null, ":::"),
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
