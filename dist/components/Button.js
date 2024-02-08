"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/Button.tsx
var Button_exports = {};
__export(Button_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(Button_exports);

// src/components/dynamic-classes.tsx
var import_jsx_runtime = require("react/jsx-runtime");

// src/components/Button.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Button = (_a) => {
  var _b = _a, {
    color = "primary" /* Primary */,
    size = "md" /* Medium */,
    variant = "filled" /* Filled */,
    icon = null
  } = _b, props = __objRest(_b, [
    "color",
    "size",
    "variant",
    "icon"
  ]);
  var _a2;
  const getSizes = () => {
    switch (size) {
      case "sm" /* Small */:
        return "px-4 h-9 text-xs";
      case "md" /* Medium */:
        return "px-6 h-10 text-sm";
      case "lg" /* Large */:
        return "px-8 h-12 text-base";
      default:
        return "px-6 h-10 text-sm";
    }
  };
  const getVariantWithColor = () => {
    switch (variant) {
      case "filled" /* Filled */:
        return `text-white bg-${getColorClasses()} hover:bg-${getColorClasses()}-600 focus:ring-2 focus:ring-bg-${getColorClasses()}-600`;
      case "outline" /* Outline */:
        return `bg-transparent border border-${getColorClasses()} text-${getColorClasses()} hover:bg-${getColorClasses()} hover:text-white focus:bg-${getColorClasses()} focus:border-0 focus:text-white`;
      case "link" /* Link */:
        return `bg-transparent hover:text-${getColorClasses()}-600 text-${getColorClasses()}`;
      case "muted" /* Muted */:
        return `text-${getColorClasses()} dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20 hover:bg-opacity-20 bg-opacity-10 focus:ring-2 bg-muted`;
      case "white" /* White */:
        return `text-${getColorClasses()} bg-white hover:bg-${getColorClasses()} hover:text-white`;
      default:
        return `bg-transparent hover:text-${getColorClasses()}-600 text-${getColorClasses()}`;
    }
  };
  const getColorClasses = () => {
    switch (color) {
      case "success" /* Success */:
        return "success";
      case "danger" /* Danger */:
        return "danger";
      case "warning" /* Warning */:
        return "warning";
      case "accent" /* Accent */:
        return "accent";
      case "primary" /* Primary */:
        return "primary";
      case "secondary" /* Secondary */:
        return "secondary";
      case "muted" /* Muted */:
        return "muted";
      case "white" /* White */:
        return "white";
      default:
        return color;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "button",
    __spreadProps(__spreadValues({}, props), {
      className: `inline-flex items-center ${getSizes()} ${getVariantWithColor()} rounded-[8px] justify-center disabled:cursor-not-allowed disabled:opacity-40 ${(_a2 = props.className) != null ? _a2 : ""}`,
      children: icon ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "inline-block", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "mr-2 inline-block", children: props.children })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: props.children })
    })
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
//# sourceMappingURL=Button.js.map