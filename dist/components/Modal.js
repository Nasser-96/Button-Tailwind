"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/Modal.tsx
var Modal_exports = {};
__export(Modal_exports, {
  Modal: () => Modal,
  ModalSizeEnum: () => ModalSizeEnum,
  default: () => Modal_default
});
module.exports = __toCommonJS(Modal_exports);
var import_react = require("react");
var import_react_confetti = __toESM(require("react-confetti"));
var import_jsx_runtime = require("react/jsx-runtime");
var ModalSizeEnum = /* @__PURE__ */ ((ModalSizeEnum2) => {
  ModalSizeEnum2["XLARGE"] = "XLARGE";
  ModalSizeEnum2["LARGE"] = "LARGE";
  ModalSizeEnum2["MEDIUM"] = "MEDIUM";
  ModalSizeEnum2["SMALL"] = "SMALL";
  return ModalSizeEnum2;
})(ModalSizeEnum || {});
function Modal({
  children,
  size = "LARGE" /* LARGE */,
  img,
  withConfetti,
  imgStyle,
  exstraClasses = ""
}) {
  const modalRef = (0, import_react.useRef)(null);
  const [isModalAnimationDone, setIsModalAnimationDone] = (0, import_react.useState)(false);
  const getModalSizeClass = () => {
    switch (size) {
      case "SMALL" /* SMALL */:
        return "sm:w-[343px]";
      case "MEDIUM" /* MEDIUM */:
        return "sm:w-[484px]";
      case "LARGE" /* LARGE */:
        return "sm:max-w-2xl";
      case "XLARGE" /* XLARGE */:
        return "lg:max-w-[990px]";
      default:
        return "lg:max-w-2xl";
    }
  };
  (0, import_react.useEffect)(() => {
    var _a, _b;
    window.document.body.style.setProperty("overflow-y", "hidden", "important");
    window.document.getElementsByTagName("html")[0].style.setProperty("overflow-y", "hidden", "important");
    window.document.body.style.width = "100%";
    (_b = (_a = window.document.getElementsByTagName("nav")) == null ? void 0 : _a.item(0)) == null ? void 0 : _b.classList.add("!z-10");
    return () => {
      var _a2, _b2;
      (_b2 = (_a2 = window.document.getElementsByTagName("nav")) == null ? void 0 : _a2.item(0)) == null ? void 0 : _b2.classList.remove("!z-10");
      window.document.body.style.overflowY = "auto";
      window.document.getElementsByTagName("html")[0].style.overflowY = "auto";
    };
  }, []);
  (0, import_react.useEffect)(() => {
    if (modalRef == null ? void 0 : modalRef.current) {
      setTimeout(() => {
        setIsModalAnimationDone(true);
      }, 50);
    } else {
      setIsModalAnimationDone(false);
    }
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "z-9999 fixed inset-0 min-h-full overflow-hidden bg-white/5 backdrop-blur-md dark:bg-black/30 dark:backdrop-blur-lg" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        className: "z-9999 fixed inset-0 flex h-full w-full items-center justify-center overflow-hidden bg-gray-600/50 dark:bg-black/50",
        id: `my-modal-${Math.random()}`,
        ref: modalRef,
        children: [
          withConfetti && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "fixed inset-x-0 h-full w-full", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react_confetti.default,
            {
              width: window.innerWidth,
              height: window.innerHeight,
              opacity: 100
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              className: `max-h-800 !bg-modal-color relative bottom-0 mx-auto mt-10 w-11/12 max-w-lg rounded-2xl p-5 shadow-lg transition-all duration-500 sm:p-8 ${getModalSizeClass()} dark:bg-dark border bg-white dark:border-0 ${img ? "" : "overflow-y-auto"} ${isModalAnimationDone ? "scale-100" : "scale-0"} ${exstraClasses}`,
              children: [
                img && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `${imgStyle} absolute z-10 mt-10 bg-transparent`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "img",
                  {
                    src: img,
                    alt: "badge",
                    loading: "lazy",
                    className: "h-full w-full object-contain"
                  }
                ) }),
                children
              ]
            }
          )
        ]
      }
    )
  ] });
}
var Modal_default = Modal;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Modal,
  ModalSizeEnum
});
//# sourceMappingURL=Modal.js.map