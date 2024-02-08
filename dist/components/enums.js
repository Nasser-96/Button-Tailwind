"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/enums.ts
var enums_exports = {};
__export(enums_exports, {
  ColorsEnum: () => ColorsEnum,
  DirectionEnum: () => DirectionEnum,
  SizesEnum: () => SizesEnum,
  VariantsEnum: () => VariantsEnum
});
module.exports = __toCommonJS(enums_exports);
var ColorsEnum = /* @__PURE__ */ ((ColorsEnum2) => {
  ColorsEnum2["Primary"] = "primary";
  ColorsEnum2["Secondary"] = "secondary";
  ColorsEnum2["Danger"] = "danger";
  ColorsEnum2["Success"] = "success";
  ColorsEnum2["Warning"] = "warning";
  ColorsEnum2["Accent"] = "accent";
  ColorsEnum2["Muted"] = "muted";
  ColorsEnum2["White"] = "white";
  return ColorsEnum2;
})(ColorsEnum || {});
var VariantsEnum = /* @__PURE__ */ ((VariantsEnum2) => {
  VariantsEnum2["Filled"] = "filled";
  VariantsEnum2["Outline"] = "outline";
  VariantsEnum2["Muted"] = "muted";
  VariantsEnum2["Link"] = "link";
  VariantsEnum2["None"] = "none";
  VariantsEnum2["White"] = "white";
  return VariantsEnum2;
})(VariantsEnum || {});
var SizesEnum = /* @__PURE__ */ ((SizesEnum2) => {
  SizesEnum2["Small"] = "sm";
  SizesEnum2["Medium"] = "md";
  SizesEnum2["Large"] = "lg";
  return SizesEnum2;
})(SizesEnum || {});
var DirectionEnum = /* @__PURE__ */ ((DirectionEnum2) => {
  DirectionEnum2["LTR"] = "ltr";
  DirectionEnum2["RTL"] = "rtl";
  return DirectionEnum2;
})(DirectionEnum || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ColorsEnum,
  DirectionEnum,
  SizesEnum,
  VariantsEnum
});
//# sourceMappingURL=enums.js.map