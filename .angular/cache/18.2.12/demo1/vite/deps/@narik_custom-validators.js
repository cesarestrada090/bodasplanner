import {
  FormControl,
  NG_VALIDATORS,
  NgModel,
  Validators
} from "./chunk-6KUAVA4K.js";
import "./chunk-RIUIC27P.js";
import {
  Directive,
  Input,
  NgModule,
  forwardRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-LD5UPVJM.js";
import "./chunk-BBXAVYNX.js";
import "./chunk-4MWRP73S.js";

// node_modules/@narik/custom-validators/fesm2022/narik-custom-validators.mjs
function isPresent(obj) {
  return obj !== void 0 && obj !== null;
}
function isDate(obj) {
  try {
    const date2 = new Date(obj);
    return !isNaN(date2.getTime());
  } catch (e) {
    return false;
  }
}
function parseDate(obj) {
  try {
    if (obj._d instanceof Date) {
      const d = obj._d;
      const month = +d.getMonth() + 1;
      const day = +d.getDate();
      return `${d.getFullYear()}-${formatDayOrMonth(month)}-${formatDayOrMonth(day)}`;
    }
    if (typeof obj === "object" && obj.year != null && obj.month != null && obj.day != null) {
      const month = +obj.month;
      const day = +obj.day;
      return `${obj.year}-${formatDayOrMonth(month)}-${formatDayOrMonth(day)}`;
    }
  } catch (e) {
  }
  return obj;
}
function formatDayOrMonth(month) {
  return month < 10 ? `0${month}` : month;
}
var arrayLength = (value) => {
  return (control) => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const obj = control.value;
    return Array.isArray(obj) && obj.length >= +value ? null : {
      arrayLength: {
        minLength: value
      }
    };
  };
};
var ARRAY_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => ArrayLengthValidator),
  multi: true
};
var ArrayLengthValidator = class _ArrayLengthValidator {
  arrayLength;
  validator;
  onChange;
  ngOnInit() {
    this.validator = arrayLength(this.arrayLength);
  }
  ngOnChanges(changes) {
    for (const key in changes) {
      if (key === "arrayLength") {
        this.validator = arrayLength(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }
  validate(c) {
    return this.validator(c);
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  static ɵfac = function ArrayLengthValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArrayLengthValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ArrayLengthValidator,
    selectors: [["", "arrayLength", "", "formControlName", ""], ["", "arrayLength", "", "formControl", ""], ["", "arrayLength", "", "ngModel", ""]],
    inputs: {
      arrayLength: "arrayLength"
    },
    features: [ɵɵProvidersFeature([ARRAY_LENGTH_VALIDATOR]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArrayLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[arrayLength][formControlName],[arrayLength][formControl],[arrayLength][ngModel]",
      providers: [ARRAY_LENGTH_VALIDATOR]
    }]
  }], null, {
    arrayLength: [{
      type: Input
    }]
  });
})();
var base64 = (control) => {
  if (isPresent(Validators.required(control))) {
    return null;
  }
  const v = control.value;
  return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : {
    base64: true
  };
};
var BASE64_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => Base64Validator),
  multi: true
};
var Base64Validator = class _Base64Validator {
  validate(c) {
    return base64(c);
  }
  static ɵfac = function Base64Validator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Base64Validator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Base64Validator,
    selectors: [["", "base64", "", "formControlName", ""], ["", "base64", "", "formControl", ""], ["", "base64", "", "ngModel", ""]],
    features: [ɵɵProvidersFeature([BASE64_VALIDATOR])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Base64Validator, [{
    type: Directive,
    args: [{
      selector: "[base64][formControlName],[base64][formControl],[base64][ngModel]",
      providers: [BASE64_VALIDATOR]
    }]
  }], null, null);
})();
var creditCard = (control) => {
  if (isPresent(Validators.required(control))) {
    return null;
  }
  const v = control.value;
  const sanitized = v.replace(/[^0-9]+/g, "");
  if (!/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|(?:9792)\d{12})$/.test(sanitized)) {
    return {
      creditCard: true
    };
  }
  let sum = 0;
  let digit;
  let tmpNum;
  let shouldDouble;
  for (let i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  if (Boolean(sum % 10 === 0 ? sanitized : false)) {
    return null;
  }
  return {
    creditCard: true
  };
};
var CREDIT_CARD_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CreditCardValidator),
  multi: true
};
var CreditCardValidator = class _CreditCardValidator {
  validate(c) {
    return creditCard(c);
  }
  static ɵfac = function CreditCardValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreditCardValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CreditCardValidator,
    selectors: [["", "creditCard", "", "formControlName", ""], ["", "creditCard", "", "formControl", ""], ["", "creditCard", "", "ngModel", ""]],
    features: [ɵɵProvidersFeature([CREDIT_CARD_VALIDATOR])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditCardValidator, [{
    type: Directive,
    args: [{
      selector: "[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]",
      providers: [CREDIT_CARD_VALIDATOR]
    }]
  }], null, null);
})();
var dateISO = (control) => {
  if (isPresent(Validators.required(control))) {
    return null;
  }
  const v = control.value;
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : {
    dateISO: true
  };
};
var DATE_ISO_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => DateISOValidator),
  multi: true
};
var DateISOValidator = class _DateISOValidator {
  validate(c) {
    return dateISO(c);
  }
  static ɵfac = function DateISOValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateISOValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DateISOValidator,
    selectors: [["", "dateISO", "", "formControlName", ""], ["", "dateISO", "", "formControl", ""], ["", "dateISO", "", "ngModel", ""]],
    features: [ɵɵProvidersFeature([DATE_ISO_VALIDATOR])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateISOValidator, [{
    type: Directive,
    args: [{
      selector: "[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]",
      providers: [DATE_ISO_VALIDATOR]
    }]
  }], null, null);
})();
var date = (control) => {
  if (isPresent(Validators.required(control))) {
    return null;
  }
  let v = control.value;
  v = parseDate(v);
  return isDate(v) ? null : {
    date: true
  };
};
var DATE_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => DateValidator),
  multi: true
};
var DateValidator = class _DateValidator {
  validate(c) {
    return date(c);
  }
  static ɵfac = function DateValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DateValidator,
    selectors: [["", "date", "", "formControlName", ""], ["", "date", "", "formControl", ""], ["", "date", "", "ngModel", ""]],
    features: [ɵɵProvidersFeature([DATE_VALIDATOR])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateValidator, [{
    type: Directive,
    args: [{
      selector: "[date][formControlName],[date][formControl],[date][ngModel]",
      providers: [DATE_VALIDATOR]
    }]
  }], null, null);
})();
var digits = (control) => {
  if (isPresent(Validators.required(control))) {
    return null;
  }
  const v = control.value;
  return /^\d+$/.test(v) ? null : {
    digits: true
  };
};
var DIGITS_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => DigitsValidator),
  multi: true
};
var DigitsValidator = class _DigitsValidator {
  validate(c) {
    return digits(c);
  }
  static ɵfac = function DigitsValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DigitsValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DigitsValidator,
    selectors: [["", "digits", "", "formControlName", ""], ["", "digits", "", "formControl", ""], ["", "digits", "", "ngModel", ""]],
    features: [ɵɵProvidersFeature([DIGITS_VALIDATOR])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DigitsValidator, [{
    type: Directive,
    args: [{
      selector: "[digits][formControlName],[digits][formControl],[digits][ngModel]",
      providers: [DIGITS_VALIDATOR]
    }]
  }], null, null);
})();
var email = (control) => {
  if (isPresent(Validators.required(control))) {
    return null;
  }
  const v = control.value;
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : {
    "email": true
  };
};
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var EmailValidator = class _EmailValidator {
  validate(c) {
    return email(c);
  }
  static ɵfac = function EmailValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmailValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _EmailValidator,
    selectors: [["", "ngvemail", "", "formControlName", ""], ["", "ngvemail", "", "formControl", ""], ["", "ngvemail", "", "ngModel", ""]],
    features: [ɵɵProvidersFeature([EMAIL_VALIDATOR])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[ngvemail][formControlName],[ngvemail][formControl],[ngvemail][ngModel]",
      providers: [EMAIL_VALIDATOR]
    }]
  }], null, null);
})();
var equalTo = (equalControl) => {
  let subscribe = false;
  return (control) => {
    if (!subscribe) {
      subscribe = true;
      equalControl.valueChanges.subscribe(() => {
        control.updateValueAndValidity();
      });
    }
    const v = control.value;
    return equalControl.value === v ? null : {
      equalTo: {
        control: equalControl,
        value: equalControl.value
      }
    };
  };
};
var EQUAL_TO_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EqualToValidator),
  multi: true
};
var EqualToValidator = class _EqualToValidator {
  equalTo;
  validator;
  ngOnInit() {
    this.validator = equalTo(this.equalTo);
  }
  validate(c) {
    return this.validator(c);
  }
  static ɵfac = function EqualToValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EqualToValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _EqualToValidator,
    selectors: [["", "equalTo", "", "formControlName", ""], ["", "equalTo", "", "formControl", ""], ["", "equalTo", "", "ngModel", ""]],
    inputs: {
      equalTo: "equalTo"
    },
    features: [ɵɵProvidersFeature([EQUAL_TO_VALIDATOR])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EqualToValidator, [{
    type: Directive,
    args: [{
      selector: "[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]",
      providers: [EQUAL_TO_VALIDATOR]
    }]
  }], null, {
    equalTo: [{
      type: Input
    }]
  });
})();
var equal = (val) => {
  return (control) => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v = control.value;
    return val === v ? null : {
      equal: {
        value: val
      }
    };
  };
};
var EQUAL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EqualValidator),
  multi: true
};
var EqualValidator = class _EqualValidator {
  equal;
  validator;
  onChange;
  ngOnInit() {
    this.validator = equal(this.equal);
  }
  ngOnChanges(changes) {
    for (const key in changes) {
      if (key === "equal") {
        this.validator = equal(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }
  validate(c) {
    return this.validator(c);
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  static ɵfac = function EqualValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EqualValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _EqualValidator,
    selectors: [["", "equal", "", "formControlName", ""], ["", "equal", "", "formControl", ""], ["", "equal", "", "ngModel", ""]],
    inputs: {
      equal: "equal"
    },
    features: [ɵɵProvidersFeature([EQUAL_VALIDATOR]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EqualValidator, [{
    type: Directive,
    args: [{
      selector: "[equal][formControlName],[equal][formControl],[equal][ngModel]",
      providers: [EQUAL_VALIDATOR]
    }]
  }], null, {
    equal: [{
      type: Input
    }]
  });
})();
var gte = (value) => {
  return (control) => {
    if (!isPresent(value)) {
      return null;
    }
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v = +control.value;
    return v >= +value ? null : {
      gte: {
        value
      }
    };
  };
};
var GREATER_THAN_EQUAL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => GreaterThanEqualValidator),
  multi: true
};
var GreaterThanEqualValidator = class _GreaterThanEqualValidator {
  gte;
  validator;
  onChange;
  ngOnInit() {
    this.validator = gte(this.gte);
  }
  ngOnChanges(changes) {
    for (const key in changes) {
      if (key === "gte") {
        this.validator = gte(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }
  validate(c) {
    return this.validator(c);
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  static ɵfac = function GreaterThanEqualValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GreaterThanEqualValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _GreaterThanEqualValidator,
    selectors: [["", "gte", "", "formControlName", ""], ["", "gte", "", "formControl", ""], ["", "gte", "", "ngModel", ""]],
    inputs: {
      gte: "gte"
    },
    features: [ɵɵProvidersFeature([GREATER_THAN_EQUAL_VALIDATOR]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GreaterThanEqualValidator, [{
    type: Directive,
    args: [{
      selector: "[gte][formControlName],[gte][formControl],[gte][ngModel]",
      providers: [GREATER_THAN_EQUAL_VALIDATOR]
    }]
  }], null, {
    gte: [{
      type: Input
    }]
  });
})();
var gt = (value) => {
  return (control) => {
    if (!isPresent(value)) {
      return null;
    }
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v = +control.value;
    return v > +value ? null : {
      gt: {
        value
      }
    };
  };
};
var GREATER_THAN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => GreaterThanValidator),
  multi: true
};
var GreaterThanValidator = class _GreaterThanValidator {
  gt;
  validator;
  onChange;
  ngOnInit() {
    this.validator = gt(this.gt);
  }
  ngOnChanges(changes) {
    for (const key in changes) {
      if (key === "gt") {
        this.validator = gt(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }
  validate(c) {
    return this.validator(c);
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  static ɵfac = function GreaterThanValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GreaterThanValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _GreaterThanValidator,
    selectors: [["", "gt", "", "formControlName", ""], ["", "gt", "", "formControl", ""], ["", "gt", "", "ngModel", ""]],
    inputs: {
      gt: "gt"
    },
    features: [ɵɵProvidersFeature([GREATER_THAN_VALIDATOR]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GreaterThanValidator, [{
    type: Directive,
    args: [{
      selector: "[gt][formControlName],[gt][formControl],[gt][ngModel]",
      providers: [GREATER_THAN_VALIDATOR]
    }]
  }], null, {
    gt: [{
      type: Input
    }]
  });
})();
var includedIn = (includedInArr) => {
  return (control) => {
    if (!isPresent(includedInArr)) {
      return null;
    }
    if (isPresent(Validators.required(control))) {
      return null;
    }
    if (includedInArr.indexOf(control.value) < 0) {
      return {
        includedIn: {
          value: control.value,
          reason: includedInArr
        }
      };
    }
    return null;
  };
};
var INCLUDED_IN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => IncludedInValidator),
  multi: true
};
var IncludedInValidator = class _IncludedInValidator {
  includedIn;
  validator;
  onChange;
  ngOnInit() {
    this.validator = includedIn(this.includedIn);
  }
  ngOnChanges(changes) {
    for (const key in changes) {
      if (key === "includedIn") {
        this.validator = includedIn(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }
  validate(c) {
    return this.validator(c);
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  static ɵfac = function IncludedInValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IncludedInValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _IncludedInValidator,
    selectors: [["", "includedIn", "", "formControlName", ""], ["", "includedIn", "", "formControl", ""], ["", "includedIn", "", "ngModel", ""]],
    inputs: {
      includedIn: "includedIn"
    },
    features: [ɵɵProvidersFeature([INCLUDED_IN_VALIDATOR]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncludedInValidator, [{
    type: Directive,
    args: [{
      selector: "[includedIn][formControlName],[includedIn][formControl],[includedIn][ngModel]",
      providers: [INCLUDED_IN_VALIDATOR]
    }]
  }], null, {
    includedIn: [{
      type: Input
    }]
  });
})();
var json = (control) => {
  if (isPresent(Validators.required(control))) {
    return null;
  }
  const v = control.value;
  try {
    const obj = JSON.parse(v);
    if (Boolean(obj) && typeof obj === "object") {
      return null;
    }
  } catch (e) {
  }
  return {
    json: true
  };
};
var JSON_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => JSONValidator),
  multi: true
};
var JSONValidator = class _JSONValidator {
  validate(c) {
    return json(c);
  }
  static ɵfac = function JSONValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JSONValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _JSONValidator,
    selectors: [["", "json", "", "formControlName", ""], ["", "json", "", "formControl", ""], ["", "json", "", "ngModel", ""]],
    features: [ɵɵProvidersFeature([JSON_VALIDATOR])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JSONValidator, [{
    type: Directive,
    args: [{
      selector: "[json][formControlName],[json][formControl],[json][ngModel]",
      providers: [JSON_VALIDATOR]
    }]
  }], null, null);
})();
var lte = (value) => {
  return (control) => {
    if (!isPresent(value)) {
      return null;
    }
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v = +control.value;
    return v <= +value ? null : {
      lte: {
        value
      }
    };
  };
};
var LESS_THAN_EQUAL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => LessThanEqualValidator),
  multi: true
};
var LessThanEqualValidator = class _LessThanEqualValidator {
  lte;
  validator;
  onChange;
  ngOnInit() {
    this.validator = lte(this.lte);
  }
  ngOnChanges(changes) {
    for (const key in changes) {
      if (key === "lte") {
        this.validator = lte(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }
  validate(c) {
    return this.validator(c);
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  static ɵfac = function LessThanEqualValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LessThanEqualValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LessThanEqualValidator,
    selectors: [["", "lte", "", "formControlName", ""], ["", "lte", "", "formControl", ""], ["", "lte", "", "ngModel", ""]],
    inputs: {
      lte: "lte"
    },
    features: [ɵɵProvidersFeature([LESS_THAN_EQUAL_VALIDATOR]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LessThanEqualValidator, [{
    type: Directive,
    args: [{
      selector: "[lte][formControlName],[lte][formControl],[lte][ngModel]",
      providers: [LESS_THAN_EQUAL_VALIDATOR]
    }]
  }], null, {
    lte: [{
      type: Input
    }]
  });
})();
var lt = (value) => {
  return (control) => {
    if (!isPresent(value)) {
      return null;
    }
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v = +control.value;
    return v < +value ? null : {
      lt: {
        value
      }
    };
  };
};
var LESS_THAN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => LessThanValidator),
  multi: true
};
var LessThanValidator = class _LessThanValidator {
  lt;
  validator;
  onChange;
  ngOnInit() {
    this.validator = lt(this.lt);
  }
  ngOnChanges(changes) {
    for (const key in changes) {
      if (key === "lt") {
        this.validator = lt(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }
  validate(c) {
    return this.validator(c);
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  static ɵfac = function LessThanValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LessThanValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LessThanValidator,
    selectors: [["", "lt", "", "formControlName", ""], ["", "lt", "", "formControl", ""], ["", "lt", "", "ngModel", ""]],
    inputs: {
      lt: "lt"
    },
    features: [ɵɵProvidersFeature([LESS_THAN_VALIDATOR]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LessThanValidator, [{
    type: Directive,
    args: [{
      selector: "[lt][formControlName],[lt][formControl],[lt][ngModel]",
      providers: [LESS_THAN_VALIDATOR]
    }]
  }], null, {
    lt: [{
      type: Input
    }]
  });
})();
var maxDate = (maxInput) => {
  let value;
  let subscribe = false;
  let maxValue = maxInput;
  const isForm = maxInput instanceof FormControl || maxInput instanceof NgModel;
  return (control) => {
    if (!subscribe && isForm) {
      subscribe = true;
      maxInput.valueChanges.subscribe(() => {
        control.updateValueAndValidity();
      });
    }
    if (isForm) {
      maxValue = maxInput.value;
    }
    value = parseDate(maxValue);
    if (!isDate(value) && !(value instanceof Function)) {
      if (value == null) {
        return null;
      } else if (isForm) {
        return {
          maxDate: {
            error: "maxDate is invalid"
          }
        };
      } else {
        throw Error("maxDate value must be or return a formatted date");
      }
    }
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const d = new Date(parseDate(control.value)).getTime();
    if (!isDate(d)) {
      return {
        value: true
      };
    }
    if (value instanceof Function) {
      value = value();
    }
    return d <= new Date(value).getTime() ? null : isForm ? {
      maxDate: {
        control: maxInput,
        value: maxInput.value
      }
    } : {
      maxDate: {
        value: maxValue,
        control: void 0
      }
    };
  };
};
var MAX_DATE_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxDateValidator),
  multi: true
};
var MaxDateValidator = class _MaxDateValidator {
  maxDate;
  validator;
  onChange;
  ngOnInit() {
    this.validator = maxDate(this.maxDate);
  }
  ngOnChanges(changes) {
    for (const key in changes) {
      if (key === "maxDate") {
        this.validator = maxDate(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }
  validate(c) {
    return this.validator(c);
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  static ɵfac = function MaxDateValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaxDateValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MaxDateValidator,
    selectors: [["", "maxDate", "", "formControlName", ""], ["", "maxDate", "", "formControl", ""], ["", "maxDate", "", "ngModel", ""]],
    inputs: {
      maxDate: "maxDate"
    },
    features: [ɵɵProvidersFeature([MAX_DATE_VALIDATOR]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxDateValidator, [{
    type: Directive,
    args: [{
      selector: "[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]",
      providers: [MAX_DATE_VALIDATOR]
    }]
  }], null, {
    maxDate: [{
      type: Input
    }]
  });
})();
var max = (value) => {
  return (control) => {
    if (!isPresent(value)) {
      return null;
    }
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v = +control.value;
    return v <= +value ? null : {
      max: {
        value
      }
    };
  };
};
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var MaxValidator = class _MaxValidator {
  max;
  validator;
  onChange;
  ngOnInit() {
    this.validator = max(this.max);
  }
  ngOnChanges(changes) {
    for (const key in changes) {
      if (key === "max") {
        this.validator = max(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }
  validate(c) {
    return this.validator(c);
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  static ɵfac = function MaxValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaxValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MaxValidator,
    selectors: [["", "max", "", "formControlName", ""], ["", "max", "", "formControl", ""], ["", "max", "", "ngModel", ""]],
    inputs: {
      max: "max"
    },
    features: [ɵɵProvidersFeature([MAX_VALIDATOR]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "[max][formControlName],[max][formControl],[max][ngModel]",
      providers: [MAX_VALIDATOR]
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var minDate = (minInput) => {
  let value;
  let subscribe = false;
  let minValue = minInput;
  const isForm = minInput instanceof FormControl || minInput instanceof NgModel;
  return (control) => {
    if (!subscribe && isForm) {
      subscribe = true;
      minInput.valueChanges.subscribe(() => {
        control.updateValueAndValidity();
      });
    }
    if (isForm) {
      minValue = minInput.value;
    }
    value = parseDate(minValue);
    if (!isDate(value) && !(value instanceof Function)) {
      if (value == null) {
        return null;
      } else if (isForm) {
        return {
          minDate: {
            error: "minDate is invalid"
          }
        };
      } else {
        throw Error("minDate value must be or return a formatted date");
      }
    }
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const d = new Date(parseDate(control.value)).getTime();
    if (!isDate(d)) {
      return {
        value: true
      };
    }
    if (value instanceof Function) {
      value = value();
    }
    return d >= new Date(value).getTime() ? null : isForm ? {
      minDate: {
        control: minInput,
        value: minInput.value
      }
    } : {
      minDate: {
        value: minValue,
        control: void 0
      }
    };
  };
};
var MIN_DATE_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinDateValidator),
  multi: true
};
var MinDateValidator = class _MinDateValidator {
  minDate;
  validator;
  onChange;
  ngOnInit() {
    this.validator = minDate(this.minDate);
  }
  ngOnChanges(changes) {
    for (const key in changes) {
      if (key === "minDate") {
        this.validator = minDate(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }
  validate(c) {
    return this.validator(c);
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  static ɵfac = function MinDateValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MinDateValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MinDateValidator,
    selectors: [["", "minDate", "", "formControlName", ""], ["", "minDate", "", "formControl", ""], ["", "minDate", "", "ngModel", ""]],
    inputs: {
      minDate: "minDate"
    },
    features: [ɵɵProvidersFeature([MIN_DATE_VALIDATOR]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinDateValidator, [{
    type: Directive,
    args: [{
      selector: "[minDate][formControlName],[minDate][formControl],[minDate][ngModel]",
      providers: [MIN_DATE_VALIDATOR]
    }]
  }], null, {
    minDate: [{
      type: Input
    }]
  });
})();
var min = (value) => {
  return (control) => {
    if (!isPresent(value)) {
      return null;
    }
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v = +control.value;
    return v >= +value ? null : {
      min: {
        value
      }
    };
  };
};
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var MinValidator = class _MinValidator {
  min;
  validator;
  onChange;
  ngOnInit() {
    this.validator = min(this.min);
  }
  ngOnChanges(changes) {
    for (const key in changes) {
      if (key === "min") {
        this.validator = min(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }
  validate(c) {
    return this.validator(c);
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  static ɵfac = function MinValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MinValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MinValidator,
    selectors: [["", "min", "", "formControlName", ""], ["", "min", "", "formControl", ""], ["", "min", "", "ngModel", ""]],
    inputs: {
      min: "min"
    },
    features: [ɵɵProvidersFeature([MIN_VALIDATOR]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "[min][formControlName],[min][formControl],[min][ngModel]",
      providers: [MIN_VALIDATOR]
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var notEqualTo = (notEqualControl) => {
  let subscribe = false;
  return (control) => {
    if (!subscribe) {
      subscribe = true;
      notEqualControl.valueChanges.subscribe(() => {
        control.updateValueAndValidity();
      });
    }
    const v = control.value;
    if (notEqualControl.value == null && v == null) {
      return null;
    }
    return notEqualControl.value !== v ? null : {
      notEqualTo: {
        control: notEqualControl,
        value: notEqualControl.value
      }
    };
  };
};
var NOT_EQUAL_TO_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NotEqualToValidator),
  multi: true
};
var NotEqualToValidator = class _NotEqualToValidator {
  notEqualTo;
  validator;
  ngOnInit() {
    this.validator = notEqualTo(this.notEqualTo);
  }
  validate(c) {
    return this.validator(c);
  }
  static ɵfac = function NotEqualToValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotEqualToValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NotEqualToValidator,
    selectors: [["", "notEqualTo", "", "formControlName", ""], ["", "notEqualTo", "", "formControl", ""], ["", "notEqualTo", "", "ngModel", ""]],
    inputs: {
      notEqualTo: "notEqualTo"
    },
    features: [ɵɵProvidersFeature([NOT_EQUAL_TO_VALIDATOR])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotEqualToValidator, [{
    type: Directive,
    args: [{
      selector: "[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]",
      providers: [NOT_EQUAL_TO_VALIDATOR]
    }]
  }], null, {
    notEqualTo: [{
      type: Input
    }]
  });
})();
var notEqual = (val) => {
  return (control) => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v = control.value;
    return val !== v ? null : {
      notEqual: {
        value: val
      }
    };
  };
};
var NOT_EQUAL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NotEqualValidator),
  multi: true
};
var NotEqualValidator = class _NotEqualValidator {
  notEqual;
  validator;
  onChange;
  ngOnInit() {
    this.validator = notEqual(this.notEqual);
  }
  ngOnChanges(changes) {
    for (const key in changes) {
      if (key === "notEqual") {
        this.validator = notEqual(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }
  validate(c) {
    return this.validator(c);
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  static ɵfac = function NotEqualValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotEqualValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NotEqualValidator,
    selectors: [["", "notEqual", "", "formControlName", ""], ["", "notEqual", "", "formControl", ""], ["", "notEqual", "", "ngModel", ""]],
    inputs: {
      notEqual: "notEqual"
    },
    features: [ɵɵProvidersFeature([NOT_EQUAL_VALIDATOR]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotEqualValidator, [{
    type: Directive,
    args: [{
      selector: "[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]",
      providers: [NOT_EQUAL_VALIDATOR]
    }]
  }], null, {
    notEqual: [{
      type: Input
    }]
  });
})();
var notIncludedIn = (includedInArr) => {
  return (control) => {
    if (!isPresent(includedInArr)) {
      return null;
    }
    if (isPresent(Validators.required(control))) {
      return null;
    }
    if (includedInArr.indexOf(control.value) >= 0) {
      return {
        notIncludedIn: {
          value: control.value,
          reason: includedInArr
        }
      };
    }
    return null;
  };
};
var NOT_INCLUDED_IN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NotIncludedInValidator),
  multi: true
};
var NotIncludedInValidator = class _NotIncludedInValidator {
  notIncludedIn;
  validator;
  onChange;
  ngOnInit() {
    this.validator = notIncludedIn(this.notIncludedIn);
  }
  ngOnChanges(changes) {
    for (const key in changes) {
      if (key === "notIncludedIn") {
        this.validator = notIncludedIn(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }
  validate(c) {
    return this.validator(c);
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  static ɵfac = function NotIncludedInValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotIncludedInValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NotIncludedInValidator,
    selectors: [["", "notIncludedIn", "", "formControlName", ""], ["", "notIncludedIn", "", "formControl", ""], ["", "notIncludedIn", "", "ngModel", ""]],
    inputs: {
      notIncludedIn: "notIncludedIn"
    },
    features: [ɵɵProvidersFeature([NOT_INCLUDED_IN_VALIDATOR]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotIncludedInValidator, [{
    type: Directive,
    args: [{
      selector: "[notIncludedIn][formControlName],[notIncludedIn][formControl],[notIncludedIn][ngModel]",
      providers: [NOT_INCLUDED_IN_VALIDATOR]
    }]
  }], null, {
    notIncludedIn: [{
      type: Input
    }]
  });
})();
var notMatching = (p) => {
  if (!isPresent(p)) {
    return (control) => null;
  }
  const patternValidator = Validators.pattern(p);
  return (control) => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    if (!patternValidator(control)) {
      return {
        notMatching: {
          value: control.value,
          reason: p
        }
      };
    }
    return null;
  };
};
var NOT_MATCHING_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NotMatchingValidator),
  multi: true
};
var NotMatchingValidator = class _NotMatchingValidator {
  notMatching;
  validator;
  onChange;
  ngOnInit() {
    this.validator = notMatching(this.notMatching);
  }
  ngOnChanges(changes) {
    for (const key in changes) {
      if (key === "notMatching") {
        this.validator = notMatching(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }
  validate(c) {
    return this.validator(c);
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  static ɵfac = function NotMatchingValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotMatchingValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NotMatchingValidator,
    selectors: [["", "notMatching", "", "formControlName", ""], ["", "notMatching", "", "formControl", ""], ["", "notMatching", "", "ngModel", ""]],
    inputs: {
      notMatching: "notMatching"
    },
    features: [ɵɵProvidersFeature([NOT_MATCHING_VALIDATOR]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotMatchingValidator, [{
    type: Directive,
    args: [{
      selector: "[notMatching][formControlName],[notMatching][formControl],[notMatching][ngModel]",
      providers: [NOT_MATCHING_VALIDATOR]
    }]
  }], null, {
    notMatching: [{
      type: Input
    }]
  });
})();
var number = (control) => {
  if (isPresent(Validators.required(control))) {
    return null;
  }
  const v = control.value;
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : {
    number: true
  };
};
var NUMBER_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NumberValidator),
  multi: true
};
var NumberValidator = class _NumberValidator {
  validate(c) {
    return number(c);
  }
  static ɵfac = function NumberValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NumberValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NumberValidator,
    selectors: [["", "number", "", "formControlName", ""], ["", "number", "", "formControl", ""], ["", "number", "", "ngModel", ""]],
    features: [ɵɵProvidersFeature([NUMBER_VALIDATOR])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValidator, [{
    type: Directive,
    args: [{
      selector: "[number][formControlName],[number][formControl],[number][ngModel]",
      providers: [NUMBER_VALIDATOR]
    }]
  }], null, null);
})();
var property = (value) => {
  return (control) => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const properties = value.split(",");
    const obj = control.value;
    let isValid = true;
    for (const prop of properties) {
      if (obj[prop] == null) {
        isValid = false;
        break;
      }
    }
    return isValid ? null : {
      hasProperty: {
        value
      }
    };
  };
};
var PROPERTY_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PropertyValidator),
  multi: true
};
var PropertyValidator = class _PropertyValidator {
  property;
  validator;
  onChange;
  ngOnInit() {
    this.validator = property(this.property);
  }
  ngOnChanges(changes) {
    for (const key in changes) {
      if (key === "property") {
        this.validator = property(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }
  validate(c) {
    return this.validator(c);
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  static ɵfac = function PropertyValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PropertyValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PropertyValidator,
    selectors: [["", "property", "", "formControlName", ""], ["", "property", "", "formControl", ""], ["", "property", "", "ngModel", ""]],
    inputs: {
      property: "property"
    },
    features: [ɵɵProvidersFeature([PROPERTY_VALIDATOR]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PropertyValidator, [{
    type: Directive,
    args: [{
      selector: "[property][formControlName],[property][formControl],[property][ngModel]",
      providers: [PROPERTY_VALIDATOR]
    }]
  }], null, {
    property: [{
      type: Input
    }]
  });
})();
var rangeLength = (value) => {
  return (control) => {
    if (!isPresent(value)) {
      return null;
    }
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v = control.value;
    return v.length >= value[0] && v.length <= value[1] ? null : {
      rangeLength: {
        value
      }
    };
  };
};
var RANGE_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RangeLengthValidator),
  multi: true
};
var RangeLengthValidator = class _RangeLengthValidator {
  rangeLength;
  validator;
  onChange;
  ngOnInit() {
    this.validator = rangeLength(this.rangeLength);
  }
  ngOnChanges(changes) {
    for (const key in changes) {
      if (key === "rangeLength") {
        this.validator = rangeLength(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }
  validate(c) {
    return this.validator(c);
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  static ɵfac = function RangeLengthValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RangeLengthValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _RangeLengthValidator,
    selectors: [["", "rangeLength", "", "formControlName", ""], ["", "rangeLength", "", "formControl", ""], ["", "rangeLength", "", "ngModel", ""]],
    inputs: {
      rangeLength: "rangeLength"
    },
    features: [ɵɵProvidersFeature([RANGE_LENGTH_VALIDATOR]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]",
      providers: [RANGE_LENGTH_VALIDATOR]
    }]
  }], null, {
    rangeLength: [{
      type: Input
    }]
  });
})();
var range = (value) => {
  return (control) => {
    if (!isPresent(value)) {
      return null;
    }
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v = +control.value;
    return v >= value[0] && v <= value[1] ? null : {
      range: {
        value
      }
    };
  };
};
var RANGE_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RangeValidator),
  multi: true
};
var RangeValidator = class _RangeValidator {
  range;
  validator;
  onChange;
  ngOnInit() {
    this.validator = range(this.range);
  }
  ngOnChanges(changes) {
    for (const key in changes) {
      if (key === "range") {
        this.validator = range(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }
  validate(c) {
    return this.validator(c);
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  static ɵfac = function RangeValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RangeValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _RangeValidator,
    selectors: [["", "range", "", "formControlName", ""], ["", "range", "", "formControl", ""], ["", "range", "", "ngModel", ""]],
    inputs: {
      range: "range"
    },
    features: [ɵɵProvidersFeature([RANGE_VALIDATOR]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValidator, [{
    type: Directive,
    args: [{
      selector: "[range][formControlName],[range][formControl],[range][ngModel]",
      providers: [RANGE_VALIDATOR]
    }]
  }], null, {
    range: [{
      type: Input
    }]
  });
})();
var url = (control) => {
  if (isPresent(Validators.required(control))) {
    return null;
  }
  const v = control.value;
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : {
    "url": true
  };
};
var URL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => UrlValidator),
  multi: true
};
var UrlValidator = class _UrlValidator {
  validate(c) {
    return url(c);
  }
  static ɵfac = function UrlValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UrlValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _UrlValidator,
    selectors: [["", "url", "", "formControlName", ""], ["", "url", "", "formControl", ""], ["", "url", "", "ngModel", ""]],
    features: [ɵɵProvidersFeature([URL_VALIDATOR])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlValidator, [{
    type: Directive,
    args: [{
      selector: "[url][formControlName],[url][formControl],[url][ngModel]",
      providers: [URL_VALIDATOR]
    }]
  }], null, null);
})();
var uuids = {
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};
var uuid = (version) => {
  return (control) => {
    if (isPresent(Validators.required(control))) {
      return null;
    }
    const v = control.value;
    const pattern = uuids[version] || uuids.all;
    return new RegExp(pattern).test(v) ? null : {
      uuid: true
    };
  };
};
var UUID_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => UUIDValidator),
  multi: true
};
var UUIDValidator = class _UUIDValidator {
  uuid;
  validator;
  onChange;
  ngOnInit() {
    this.validator = uuid(this.uuid);
  }
  ngOnChanges(changes) {
    for (const key in changes) {
      if (key === "uuid") {
        this.validator = uuid(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
      }
    }
  }
  validate(c) {
    return this.validator(c);
  }
  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }
  static ɵfac = function UUIDValidator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UUIDValidator)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _UUIDValidator,
    selectors: [["", "uuid", "", "formControlName", ""], ["", "uuid", "", "formControl", ""], ["", "uuid", "", "ngModel", ""]],
    inputs: {
      uuid: "uuid"
    },
    features: [ɵɵProvidersFeature([UUID_VALIDATOR]), ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UUIDValidator, [{
    type: Directive,
    args: [{
      selector: "[uuid][formControlName],[uuid][formControl],[uuid][ngModel]",
      providers: [UUID_VALIDATOR]
    }]
  }], null, {
    uuid: [{
      type: Input
    }]
  });
})();
var CustomValidators = {
  arrayLength,
  base64,
  creditCard,
  date,
  dateISO,
  digits,
  email,
  equal,
  equalTo,
  gt,
  gte,
  includedIn,
  json,
  lt,
  lte,
  max,
  maxDate,
  min,
  minDate,
  notEqual,
  notEqualTo,
  notIncludedIn,
  notMatching,
  number,
  property,
  range,
  rangeLength,
  url,
  uuid
};
var CustomDirectives = [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, IncludedInValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NotIncludedInValidator, NotMatchingValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator];
var NarikCustomValidatorsModule = class _NarikCustomValidatorsModule {
  static ɵfac = function NarikCustomValidatorsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NarikCustomValidatorsModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NarikCustomValidatorsModule,
    declarations: [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, IncludedInValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NotIncludedInValidator, NotMatchingValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator],
    exports: [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, IncludedInValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NotIncludedInValidator, NotMatchingValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NarikCustomValidatorsModule, [{
    type: NgModule,
    args: [{
      declarations: [CustomDirectives],
      exports: [CustomDirectives]
    }]
  }], null, null);
})();
export {
  ArrayLengthValidator,
  Base64Validator,
  CreditCardValidator,
  CustomValidators,
  DateISOValidator,
  DateValidator,
  DigitsValidator,
  EmailValidator,
  EqualToValidator,
  EqualValidator,
  GreaterThanEqualValidator,
  GreaterThanValidator,
  IncludedInValidator,
  JSONValidator,
  LessThanEqualValidator,
  LessThanValidator,
  MaxDateValidator,
  MaxValidator,
  MinDateValidator,
  MinValidator,
  NarikCustomValidatorsModule,
  NotEqualToValidator,
  NotEqualValidator,
  NotIncludedInValidator,
  NotMatchingValidator,
  NumberValidator,
  PropertyValidator,
  RangeLengthValidator,
  RangeValidator,
  UUIDValidator,
  UrlValidator
};
//# sourceMappingURL=@narik_custom-validators.js.map
