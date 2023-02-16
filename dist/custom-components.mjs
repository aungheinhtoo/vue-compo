import { defineComponent as N, resolveComponent as y, openBlock as o, createElementBlock as c, normalizeClass as s, createBlock as O, createCommentVNode as u, toDisplayString as w, createElementVNode as h, createVNode as d, unref as g } from "vue";
var i = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.WARNING = "warning", e.SUCCESS = "success", e.ERROR = "error", e))(i || {}), R = /* @__PURE__ */ ((e) => (e.OUTLINED = "outlined", e.FILLED = "filled", e))(R || {});
const I = { key: 1 }, k = /* @__PURE__ */ N({
  __name: "CustomButton",
  props: {
    title: null,
    color: null,
    icon: null,
    iconPosition: null,
    variant: null,
    onClick: { type: Function }
  },
  setup(e) {
    const a = e, r = (t, n) => {
      if (n === R.FILLED) {
        if (t === i.PRIMARY)
          return "bg-primary hover:bg-primary-hover text-black-text";
        if (t === i.WARNING)
          return "bg-warning hover:bg-warning-hover text-white";
        if (t === i.ERROR)
          return "bg-error hover:bg-error-hover text-white";
        if (t === i.SUCCESS)
          return "bg-success hover:bg-success-hover text-white";
      } else if (n === R.OUTLINED) {
        if (t === i.PRIMARY)
          return "bg-white text-primary outline outline-1 outline-solid";
        if (t === i.WARNING)
          return "bg-white text-warning outline outline-1 outline-solid";
        if (t === i.ERROR)
          return "bg-white text-error outline outline-1 outline-solid";
        if (t === i.SUCCESS)
          return "bg-white text-success outline outline-1 outline-solid";
      }
      throw new Error("Unsupported Color or Variant");
    }, x = (t) => t === "right" ? "order-last" : "order-first", m = (t) => t ? "py-2 px-6" : "p-2", C = (t, n, f) => `${r(t, n)} ${m(f)}`;
    function b() {
      a.onClick && a.onClick();
    }
    return (t, n) => {
      const f = y("font-awesome-icon");
      return o(), c("button", {
        class: s(["box-content flex flex-row justify-center gap-2 rounded-lg font-body text-base font-semibold hover:drop-shadow-custom", C(e.color, e.variant, e.title)]),
        onClick: b
      }, [
        e.icon ? (o(), O(f, {
          key: 0,
          icon: e.icon,
          size: "xl",
          class: s(x(e.iconPosition)),
          "fixed-width": ""
        }, null, 8, ["icon", "class"])) : u("", !0),
        e.title ? (o(), c("span", I, w(e.title), 1)) : u("", !0)
      ], 2);
    };
  }
});
var l = /* @__PURE__ */ ((e) => (e.INFO = "info", e.ERROR = "error", e.WARNING = "warning", e.SUCCESS = "success", e))(l || {});
const S = { class: "flex grow flex-col gap-4" }, E = { class: "flex flex-col gap-2" }, A = {
  key: 0,
  class: "font-body text-base font-semibold leading-6 text-black-text"
}, B = {
  key: 1,
  class: "font-body text-base font-normal leading-6 text-black-text"
}, F = {
  key: 0,
  class: "flex flex-col items-start gap-4 sm:flex-row"
}, U = /* @__PURE__ */ N({
  __name: "CustomAlert",
  props: {
    title: null,
    color: null,
    content: null,
    filledButtonTitle: null,
    outlinedButtonTitle: null,
    filledButtonOnClick: { type: Function },
    outlinedButtonOnClick: { type: Function }
  },
  emits: ["delete"],
  setup(e, { emit: a }) {
    const r = e, x = (n) => {
      if (n === "info")
        return "fa-solid fa-circle-info";
      if (n === l.ERROR)
        return "fa-solid fa-circle-exclamation";
      if (n === l.SUCCESS)
        return "fa-solid fa-circle-check";
      if (n === l.WARNING)
        return "fa-solid fa-triangle-exclamation";
    }, m = (n) => {
      if (n === l.INFO)
        return "outline-info bg-info-bg text-info";
      if (n === l.ERROR)
        return "outline-error bg-error-bg text-error";
      if (n === l.SUCCESS)
        return "outline-success bg-success-bg text-success";
      if (n === l.WARNING)
        return "outline-warning bg-warning-bg text-warning";
    }, C = () => {
      r.outlinedButtonOnClick && r.outlinedButtonOnClick();
    }, b = () => {
      r.filledButtonOnClick && r.filledButtonOnClick();
    };
    function t() {
      a("delete");
    }
    return (n, f) => {
      const v = y("font-awesome-icon");
      return o(), c("div", {
        class: s(["flex w-9/12 justify-between rounded-[4px] outline outline-1", m(e.color)])
      }, [
        h("div", {
          class: s(["flex w-full justify-between gap-2", e.title ? "m-4" : "m-2"])
        }, [
          d(v, {
            icon: x(e.color),
            size: "xl",
            "fixed-width": "",
            class: "grow-0"
          }, null, 8, ["icon"]),
          h("div", S, [
            h("div", E, [
              e.title ? (o(), c("div", A, w(e.title), 1)) : u("", !0),
              e.content ? (o(), c("div", B, w(e.content), 1)) : u("", !0)
            ]),
            e.filledButtonTitle || e.outlinedButtonTitle ? (o(), c("div", F, [
              d(k, {
                title: "Action",
                color: e.color === g(l).INFO ? g(i).WARNING : e.color,
                variant: "outlined",
                onClick: C
              }, null, 8, ["color"]),
              d(k, {
                title: "Action",
                color: e.color === g(l).INFO ? g(i).PRIMARY : e.color,
                variant: "filled",
                onClick: b
              }, null, 8, ["color"])
            ])) : u("", !0)
          ]),
          d(v, {
            icon: "fa-solid fa-xmark",
            size: "sm",
            "fixed-width": "",
            class: s(["grow-0 cursor-pointer text-gray", e.title && e.content ? null : "self-center"]),
            onClick: t
          }, null, 8, ["class"])
        ], 2)
      ], 2);
    };
  }
}), P = { CustomAlertVue: U, CustomButtonVue: k };
export {
  P as default
};
