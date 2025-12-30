import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-RIUIC27P.js";
import {
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  EventEmitter,
  Host,
  HostBinding,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Optional,
  Output,
  TemplateRef,
  forwardRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
  ɵɵpureFunction7,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-LD5UPVJM.js";
import "./chunk-BBXAVYNX.js";
import "./chunk-4MWRP73S.js";

// node_modules/@rg-software/angular-archwizard/fesm2022/rg-software-angular-archwizard.mjs
var _c0 = ["*"];
var _c1 = (a0, a1, a2, a3, a4, a5) => ({
  "current": a0,
  "editing": a1,
  "done": a2,
  "optional": a3,
  "completed": a4,
  "navigable": a5
});
var _c2 = (a0) => ({
  "font-family": a0
});
var _c3 = (a0) => ({
  wizardStep: a0
});
function WizardNavigationBarComponent_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 7);
  }
  if (rf & 2) {
    const step_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngTemplateOutlet", step_r1.stepTitleTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, step_r1));
  }
}
function WizardNavigationBarComponent_li_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const step_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(step_r1.stepTitle);
  }
}
function WizardNavigationBarComponent_li_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 7);
  }
  if (rf & 2) {
    const step_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngTemplateOutlet", step_r1.stepSymbolTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, step_r1));
  }
}
function WizardNavigationBarComponent_li_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const step_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(step_r1.navigationSymbol.symbol);
  }
}
function WizardNavigationBarComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 1)(1, "a", 2)(2, "div", 3);
    ɵɵtemplate(3, WizardNavigationBarComponent_li_1_ng_container_3_Template, 1, 4, "ng-container", 4)(4, WizardNavigationBarComponent_li_1_ng_container_4_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 6);
    ɵɵtemplate(6, WizardNavigationBarComponent_li_1_ng_container_6_Template, 1, 4, "ng-container", 4)(7, WizardNavigationBarComponent_li_1_ng_container_7_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction6(8, _c1, ctx_r1.isCurrent(step_r1), ctx_r1.isEditing(step_r1), ctx_r1.isDone(step_r1), ctx_r1.isOptional(step_r1), ctx_r1.isCompleted(step_r1), ctx_r1.isNavigable(step_r1)));
    ɵɵattribute("id", step_r1.stepId);
    ɵɵadvance();
    ɵɵproperty("awGoToStep", step_r1);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", step_r1.stepTitleTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !step_r1.stepTitleTemplate);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(15, _c2, step_r1.stepSymbolTemplate ? "" : step_r1.navigationSymbol.fontFamily));
    ɵɵadvance();
    ɵɵproperty("ngIf", step_r1.stepSymbolTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !step_r1.stepSymbolTemplate);
  }
}
var _c4 = (a0, a1) => ({
  "wizard-steps": true,
  "vertical": a0,
  "horizontal": a1
});
var _c5 = (a0, a1, a2, a3, a4, a5, a6) => ({
  "vertical": a0,
  "horizontal": a1,
  "small": a2,
  "large-filled": a3,
  "large-filled-symbols": a4,
  "large-empty": a5,
  "large-empty-symbols": a6
});
function WizardComponent_aw_wizard_navigation_bar_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "aw-wizard-navigation-bar", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction7(1, _c5, ctx_r0.navBarLocation === "left", ctx_r0.navBarLocation === "top", ctx_r0.navBarLayout === "small", ctx_r0.navBarLayout === "large-filled", ctx_r0.navBarLayout === "large-filled-symbols", ctx_r0.navBarLayout === "large-empty", ctx_r0.navBarLayout === "large-empty-symbols"));
  }
}
function WizardComponent_aw_wizard_navigation_bar_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "aw-wizard-navigation-bar", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction7(1, _c5, ctx_r0.navBarLocation === "right", ctx_r0.navBarLocation === "bottom", ctx_r0.navBarLayout === "small", ctx_r0.navBarLayout === "large-filled", ctx_r0.navBarLayout === "large-filled-symbols", ctx_r0.navBarLayout === "large-empty", ctx_r0.navBarLayout === "large-empty-symbols"));
  }
}
var WizardStepSymbolDirective = class _WizardStepSymbolDirective {
  /**
   * Constructor
   *
   * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepSymbolDirective]]
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static {
    this.ɵfac = function WizardStepSymbolDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WizardStepSymbolDirective)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _WizardStepSymbolDirective,
      selectors: [["ng-template", "awStepSymbol", ""], ["ng-template", "awWizardStepSymbol", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardStepSymbolDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[awStepSymbol], ng-template[awWizardStepSymbol]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var WizardStepTitleDirective = class _WizardStepTitleDirective {
  /**
   * Constructor
   *
   * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepTitleDirective]]
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static {
    this.ɵfac = function WizardStepTitleDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WizardStepTitleDirective)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _WizardStepTitleDirective,
      selectors: [["ng-template", "awStepTitle", ""], ["ng-template", "awWizardStepTitle", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardStepTitleDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[awStepTitle], ng-template[awWizardStepTitle]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var WizardStep = class _WizardStep {
  constructor() {
    this.navigationSymbol = {
      symbol: ""
    };
    this.selected = false;
    this.completed = false;
    this.initiallyCompleted = false;
    this.editing = false;
    this.defaultSelected = false;
    this.optional = false;
    this.canEnter = true;
    this.canExit = true;
    this.stepEnter = new EventEmitter();
    this.stepExit = new EventEmitter();
  }
  /**
   * Returns true if this wizard step should be visible to the user.
   * If the step should be visible to the user false is returned, otherwise true
   */
  get hidden() {
    return !this.selected;
  }
  /**
   * This method returns true, if this wizard step can be transitioned with a given direction.
   * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
   *
   * @param condition A condition variable, deciding if the step can be transitioned
   * @param direction The direction in which this step should be transitioned
   * @returns A [[Promise]] containing `true`, if this step can transitioned in the given direction
   * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
   */
  static canTransitionStep(condition, direction) {
    if (typeof condition === "boolean") {
      return Promise.resolve(condition);
    } else if (condition instanceof Function) {
      return Promise.resolve(condition(direction));
    } else {
      return Promise.reject(new Error(`Input value '${condition}' is neither a boolean nor a function`));
    }
  }
  /**
   * A function called when the step is entered
   *
   * @param direction The direction in which the step is entered
   */
  enter(direction) {
    this.stepEnter.emit(direction);
  }
  /**
   * A function called when the step is exited
   *
   * @param direction The direction in which the step is exited
   */
  exit(direction) {
    this.stepExit.emit(direction);
  }
  /**
   * This method returns true, if this wizard step can be entered from the given direction.
   * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
   * nor a function.
   *
   * @param direction The direction in which this step should be entered
   * @returns A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
   * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
   */
  canEnterStep(direction) {
    return _WizardStep.canTransitionStep(this.canEnter, direction);
  }
  /**
   * This method returns true, if this wizard step can be exited into given direction.
   * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
   * nor a function.
   *
   * @param direction The direction in which this step should be left
   * @returns A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
   * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
   */
  canExitStep(direction) {
    return _WizardStep.canTransitionStep(this.canExit, direction);
  }
  static {
    this.ɵfac = function WizardStep_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WizardStep)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _WizardStep,
      contentQueries: function WizardStep_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, WizardStepTitleDirective, 5);
          ɵɵcontentQuery(dirIndex, WizardStepSymbolDirective, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stepTitleTemplate = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stepSymbolTemplate = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function WizardStep_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵhostProperty("hidden", ctx.hidden);
        }
      },
      inputs: {
        stepId: "stepId",
        stepTitle: "stepTitle",
        navigationSymbol: "navigationSymbol",
        canEnter: "canEnter",
        canExit: "canExit"
      },
      outputs: {
        stepEnter: "stepEnter",
        stepExit: "stepExit"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardStep, [{
    type: Directive
  }], null, {
    stepTitleTemplate: [{
      type: ContentChild,
      args: [WizardStepTitleDirective]
    }],
    stepSymbolTemplate: [{
      type: ContentChild,
      args: [WizardStepSymbolDirective]
    }],
    stepId: [{
      type: Input
    }],
    stepTitle: [{
      type: Input
    }],
    navigationSymbol: [{
      type: Input
    }],
    canEnter: [{
      type: Input
    }],
    canExit: [{
      type: Input
    }],
    stepEnter: [{
      type: Output
    }],
    stepExit: [{
      type: Output
    }],
    hidden: [{
      type: HostBinding,
      args: ["hidden"]
    }]
  });
})();
var WizardCompletionStep = class _WizardCompletionStep extends WizardStep {
  constructor() {
    super(...arguments);
    this.stepExit = new EventEmitter();
    this.canExit = false;
  }
  /**
   * @inheritDoc
   */
  enter(direction) {
    this.completed = true;
    this.stepEnter.emit(direction);
  }
  /**
   * @inheritDoc
   */
  exit(direction) {
    this.completed = this.initiallyCompleted;
    this.stepExit.emit(direction);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵWizardCompletionStep_BaseFactory;
      return function WizardCompletionStep_Factory(__ngFactoryType__) {
        return (ɵWizardCompletionStep_BaseFactory || (ɵWizardCompletionStep_BaseFactory = ɵɵgetInheritedFactory(_WizardCompletionStep)))(__ngFactoryType__ || _WizardCompletionStep);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _WizardCompletionStep,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardCompletionStep, [{
    type: Directive
  }], null, null);
})();
var WizardCompletionStepComponent = class _WizardCompletionStepComponent extends WizardCompletionStep {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵWizardCompletionStepComponent_BaseFactory;
      return function WizardCompletionStepComponent_Factory(__ngFactoryType__) {
        return (ɵWizardCompletionStepComponent_BaseFactory || (ɵWizardCompletionStepComponent_BaseFactory = ɵɵgetInheritedFactory(_WizardCompletionStepComponent)))(__ngFactoryType__ || _WizardCompletionStepComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _WizardCompletionStepComponent,
      selectors: [["aw-wizard-completion-step"]],
      features: [ɵɵProvidersFeature([{
        provide: WizardStep,
        useExisting: forwardRef(() => _WizardCompletionStepComponent)
      }, {
        provide: WizardCompletionStep,
        useExisting: forwardRef(() => _WizardCompletionStepComponent)
      }]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function WizardCompletionStepComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardCompletionStepComponent, [{
    type: Component,
    args: [{
      selector: "aw-wizard-completion-step",
      providers: [{
        provide: WizardStep,
        useExisting: forwardRef(() => WizardCompletionStepComponent)
      }, {
        provide: WizardCompletionStep,
        useExisting: forwardRef(() => WizardCompletionStepComponent)
      }],
      template: "<ng-content></ng-content>\n"
    }]
  }], null, null);
})();
var WizardBase = class _WizardBase {
  static {
    this.ɵfac = function WizardBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WizardBase)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _WizardBase,
      factory: _WizardBase.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardBase, [{
    type: Injectable
  }], null, null);
})();
function isStepId(value) {
  return Object.prototype.hasOwnProperty.call(value, "stepId") && !(value instanceof WizardStep);
}
function isStepIndex(value) {
  return Object.prototype.hasOwnProperty.call(value, "stepIndex");
}
function isStepOffset(value) {
  return Object.prototype.hasOwnProperty.call(value, "stepOffset");
}
var GoToStepDirective = class _GoToStepDirective {
  /**
   * Constructor
   *
   * @param wizard The wizard component
   * @param wizardStep The wizard step, which contains this [[GoToStepDirective]]
   */
  constructor(wizard, wizardStep) {
    this.wizard = wizard;
    this.wizardStep = wizardStep;
    this.preFinalize = new EventEmitter();
    this.postFinalize = new EventEmitter();
  }
  /**
   * A convenience field for `preFinalize`
   */
  get finalize() {
    return this.preFinalize;
  }
  /**
   * A convenience name for `preFinalize`
   *
   * @param emitter The [[EventEmitter]] to be set
   */
  set finalize(emitter) {
    this.preFinalize = emitter;
  }
  /**
   * Returns the destination step of this directive as an absolute step index inside the wizard
   *
   * @returns The index of the destination step
   * @throws If `targetStep` is of an unknown type an `Error` is thrown
   */
  get destinationStep() {
    let destinationStep;
    if (isStepIndex(this.targetStep)) {
      destinationStep = this.targetStep.stepIndex;
    } else if (isStepId(this.targetStep)) {
      destinationStep = this.wizard.getIndexOfStepWithId(this.targetStep.stepId);
    } else if (isStepOffset(this.targetStep) && this.wizardStep !== null) {
      destinationStep = this.wizard.getIndexOfStep(this.wizardStep) + this.targetStep.stepOffset;
    } else if (this.targetStep instanceof WizardStep) {
      destinationStep = this.wizard.getIndexOfStep(this.targetStep);
    } else {
      throw new Error(`Input 'targetStep' is neither a WizardStep, StepOffset, StepIndex or StepId`);
    }
    return destinationStep;
  }
  /**
   * Listener method for `click` events on the component with this directive.
   * After this method is called the wizard will try to transition to the `destinationStep`
   */
  onClick() {
    this.wizard.goToStep(this.destinationStep, this.preFinalize, this.postFinalize);
  }
  static {
    this.ɵfac = function GoToStepDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GoToStepDirective)(ɵɵdirectiveInject(WizardBase), ɵɵdirectiveInject(WizardStep, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _GoToStepDirective,
      selectors: [["", "awGoToStep", ""]],
      hostBindings: function GoToStepDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function GoToStepDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        targetStep: [0, "awGoToStep", "targetStep"]
      },
      outputs: {
        preFinalize: "preFinalize",
        postFinalize: "postFinalize",
        finalize: "finalize"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoToStepDirective, [{
    type: Directive,
    args: [{
      selector: "[awGoToStep]"
    }]
  }], () => [{
    type: WizardBase
  }, {
    type: WizardStep,
    decorators: [{
      type: Optional
    }]
  }], {
    preFinalize: [{
      type: Output
    }],
    postFinalize: [{
      type: Output
    }],
    targetStep: [{
      type: Input,
      args: ["awGoToStep"]
    }],
    finalize: [{
      type: Output
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var WizardNavigationBarComponent = class _WizardNavigationBarComponent {
  /**
   * Constructor
   *
   * @param wizard The state the wizard currently resides in
   */
  constructor(wizard) {
    this.wizard = wizard;
  }
  /**
   * Returns all [[WizardStep]]s contained in the wizard
   *
   * @returns An array containing all [[WizardStep]]s
   */
  get wizardSteps() {
    switch (this.wizard.navBarDirection) {
      case "right-to-left":
        return this.wizard.wizardSteps.slice().reverse();
      case "left-to-right":
      default:
        return this.wizard.wizardSteps;
    }
  }
  /**
   * Returns the number of wizard steps, that need to be displaced in the navigation bar
   *
   * @returns The number of wizard steps to be displayed
   */
  get numberOfWizardSteps() {
    return this.wizard.wizardSteps.length;
  }
  /**
   * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
   *
   * @param wizardStep The wizard step to be checked
   * @returns True if the step can be marked as `current`
   */
  isCurrent(wizardStep) {
    return wizardStep.selected;
  }
  /**
   * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
   *
   * @param wizardStep The wizard step to be checked
   * @returns True if the step can be marked as `editing`
   */
  isEditing(wizardStep) {
    return wizardStep.editing;
  }
  /**
   * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
   *
   * @param wizardStep The wizard step to be checked
   * @returns True if the step can be marked as `done`
   */
  isDone(wizardStep) {
    return wizardStep.completed;
  }
  /**
   * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
   *
   * @param wizardStep The wizard step to be checked
   * @returns True if the step can be marked as `optional`
   */
  isOptional(wizardStep) {
    return wizardStep.optional;
  }
  /**
   * Checks, whether a [[WizardStep]] can be marked as `completed` in the navigation bar.
   *
   * The `completed` class is only applied to completion steps.
   *
   * @param wizardStep The wizard step to be checked
   * @returns True if the step can be marked as `completed`
   */
  isCompleted(wizardStep) {
    return wizardStep instanceof WizardCompletionStep && this.wizard.completed;
  }
  /**
   * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
   * A wizard step can be navigated to if:
   * - the step is currently not selected
   * - the navigation bar isn't disabled
   * - the navigation mode allows navigation to the step
   *
   * @param wizardStep The wizard step to be checked
   * @returns True if the step can be marked as navigable
   */
  isNavigable(wizardStep) {
    return !wizardStep.selected && !this.wizard.disableNavigationBar && this.wizard.isNavigable(this.wizard.getIndexOfStep(wizardStep));
  }
  static {
    this.ɵfac = function WizardNavigationBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WizardNavigationBarComponent)(ɵɵdirectiveInject(WizardBase));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _WizardNavigationBarComponent,
      selectors: [["aw-wizard-navigation-bar"]],
      decls: 2,
      vars: 4,
      consts: [[3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "awGoToStep"], [1, "label"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [4, "ngIf"], [1, "step-indicator", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function WizardNavigationBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "ul");
          ɵɵtemplate(1, WizardNavigationBarComponent_li_1_Template, 8, 17, "li", 0);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵclassMapInterpolate1("steps-indicator steps-", ctx.numberOfWizardSteps, "");
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.wizardSteps);
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, GoToStepDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardNavigationBarComponent, [{
    type: Component,
    args: [{
      selector: "aw-wizard-navigation-bar",
      template: `<ul class="steps-indicator steps-{{numberOfWizardSteps}}">
  <li [attr.id]="step.stepId" *ngFor="let step of wizardSteps" [ngClass]="{
        'current': isCurrent(step),
        'editing': isEditing(step),
        'done': isDone(step),
        'optional': isOptional(step),
        'completed': isCompleted(step),
        'navigable': isNavigable(step)
  }">
    <a [awGoToStep]="step">
      <div class="label">
        <ng-container *ngIf="step.stepTitleTemplate" [ngTemplateOutlet]="step.stepTitleTemplate.templateRef"
          [ngTemplateOutletContext]="{wizardStep: step}"></ng-container>
        <ng-container *ngIf="!step.stepTitleTemplate">{{step.stepTitle}}</ng-container>
      </div>
      <div class="step-indicator"
        [ngStyle]="{ 'font-family': step.stepSymbolTemplate ? '' : step.navigationSymbol.fontFamily }">
        <ng-container *ngIf="step.stepSymbolTemplate" [ngTemplateOutlet]="step.stepSymbolTemplate.templateRef"
          [ngTemplateOutletContext]="{wizardStep: step}"></ng-container>
        <ng-container *ngIf="!step.stepSymbolTemplate">{{step.navigationSymbol.symbol}}</ng-container>
      </div>
    </a>
  </li>
</ul>
`
    }]
  }], () => [{
    type: WizardBase
  }], null);
})();
var WizardStepComponent = class _WizardStepComponent extends WizardStep {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵWizardStepComponent_BaseFactory;
      return function WizardStepComponent_Factory(__ngFactoryType__) {
        return (ɵWizardStepComponent_BaseFactory || (ɵWizardStepComponent_BaseFactory = ɵɵgetInheritedFactory(_WizardStepComponent)))(__ngFactoryType__ || _WizardStepComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _WizardStepComponent,
      selectors: [["aw-wizard-step"]],
      features: [ɵɵProvidersFeature([{
        provide: WizardStep,
        useExisting: forwardRef(() => _WizardStepComponent)
      }]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function WizardStepComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardStepComponent, [{
    type: Component,
    args: [{
      selector: "aw-wizard-step",
      providers: [{
        provide: WizardStep,
        useExisting: forwardRef(() => WizardStepComponent)
      }],
      template: "<ng-content></ng-content>\n"
    }]
  }], null, null);
})();
var MovingDirection;
(function(MovingDirection2) {
  MovingDirection2[MovingDirection2["Forwards"] = 0] = "Forwards";
  MovingDirection2[MovingDirection2["Backwards"] = 1] = "Backwards";
  MovingDirection2[MovingDirection2["Stay"] = 2] = "Stay";
})(MovingDirection || (MovingDirection = {}));
var BaseNavigationMode = class {
  /**
   * Checks, whether a wizard step, as defined by the given destination index, can be transitioned to.
   *
   * This method controls navigation by [[goToStep]], [[goToPreviousStep]], and [[goToNextStep]] directives.
   * Navigation by navigation bar is governed by [[isNavigable]].
   *
   * In this implementation, a destination wizard step can be entered if:
   * - it exists
   * - the current step can be exited in the direction of the destination step
   * - the destination step can be entered in the direction from the current step
   *
   * Subclasses can impose additional restrictions, see [[canTransitionToStep]].
   *
   * @param wizard The wizard component to operate on
   * @param destinationIndex The index of the destination step
   * @returns A [[Promise]] containing `true`, if the destination step can be transitioned to and `false` otherwise
   */
  canGoToStep(wizard, destinationIndex) {
    const hasStep = wizard.hasStep(destinationIndex);
    const movingDirection = wizard.getMovingDirection(destinationIndex);
    const canExitCurrentStep = (previous) => {
      return previous && wizard.currentStep.canExitStep(movingDirection);
    };
    const canEnterDestinationStep = (previous) => {
      return previous && wizard.getStepAtIndex(destinationIndex).canEnterStep(movingDirection);
    };
    const canTransitionToStep = (previous) => {
      return previous && this.canTransitionToStep(wizard, destinationIndex);
    };
    return Promise.resolve(hasStep).then(canTransitionToStep).then(canExitCurrentStep).then(canEnterDestinationStep);
  }
  /**
   * Imposes additional restrictions for `canGoToStep` in current navigation mode.
   *
   * The base implementation allows transition iff the given step is navigable from the navigation bar (see `isNavigable`).
   * However, in some navigation modes `canTransitionToStep` can be more relaxed to allow navigation to certain steps
   * by previous/next buttons, but not using the navigation bar.
   *
   * @param wizard The wizard component to operate on
   * @param destinationIndex The index of the destination step
   * @returns `true`, if the destination step can be transitioned to and `false` otherwise
   */
  canTransitionToStep(wizard, destinationIndex) {
    return this.isNavigable(wizard, destinationIndex);
  }
  /**
   * Tries to transition to the wizard step, as denoted by the given destination index.
   *
   * When entering the destination step, the following actions are done:
   * - the old current step is set as completed
   * - the old current step is set as unselected
   * - the old current step is exited
   * - the destination step is set as selected
   * - the destination step is entered
   *
   * When the destination step couldn't be entered, the following actions are done:
   * - the current step is exited and entered in the direction `MovingDirection.Stay`
   *
   * @param wizard The wizard component to operate on
   * @param destinationIndex The index of the destination wizard step, which should be entered
   * @param preFinalize An event emitter, to be called before the step has been transitioned
   * @param postFinalize An event emitter, to be called after the step has been transitioned
   */
  goToStep(wizard, destinationIndex, preFinalize, postFinalize) {
    this.canGoToStep(wizard, destinationIndex).then((navigationAllowed) => {
      if (navigationAllowed) {
        const movingDirection = wizard.getMovingDirection(destinationIndex);
        if (preFinalize) {
          preFinalize.emit();
        }
        wizard.currentStep.completed = true;
        wizard.currentStep.exit(movingDirection);
        wizard.currentStep.editing = false;
        wizard.currentStep.selected = false;
        this.transition(wizard, destinationIndex);
        const wasCompleted = wizard.completed || wizard.currentStep.completed;
        wizard.currentStep.enter(movingDirection);
        wizard.currentStep.selected = true;
        if (wasCompleted) {
          wizard.currentStep.editing = true;
        }
        if (postFinalize) {
          postFinalize.emit();
        }
      } else {
        wizard.currentStep.exit(MovingDirection.Stay);
        wizard.currentStep.enter(MovingDirection.Stay);
      }
    });
  }
  /**
   * Transitions the wizard to the given step index.
   *
   * Can perform additional actions in particular navigation mode implementations.
   *
   * @param wizard The wizard component to operate on
   * @param destinationIndex The index of the destination wizard step
   */
  transition(wizard, destinationIndex) {
    wizard.currentStepIndex = destinationIndex;
  }
  /**
   * Resets the state of this wizard.
   *
   * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
   * In addition the whole wizard is set as incomplete.
   *
   * @param wizard The wizard component to operate on
   */
  reset(wizard) {
    this.ensureCanReset(wizard);
    wizard.wizardSteps.forEach((step) => {
      step.completed = step.initiallyCompleted;
      step.selected = false;
      step.editing = false;
    });
    wizard.currentStepIndex = wizard.defaultStepIndex;
    wizard.currentStep.selected = true;
    wizard.currentStep.enter(MovingDirection.Forwards);
  }
  /**
   * Checks if wizard configuration allows to perform reset.
   *
   * A check failure is indicated by throwing an `Error` with the message discribing the discovered misconfiguration issue.
   *
   * Can include additional checks in particular navigation mode implementations.
   *
   * @param wizard The wizard component to operate on
   * @throws An `Error` is thrown, if a micconfiguration issue is discovered.
   */
  ensureCanReset(wizard) {
    if (!wizard.hasStep(wizard.defaultStepIndex)) {
      throw new Error(`The wizard doesn't contain a step with index ${wizard.defaultStepIndex}`);
    }
  }
};
var ConfigurableNavigationMode = class extends BaseNavigationMode {
  /**
   * Constructor
   *
   * @param navigateBackward Controls whether wizard steps before the current step are navigable
   * @param navigateForward Controls whether wizard steps before the current step are navigable
   */
  constructor(navigateBackward = null, navigateForward = null) {
    super();
    this.navigateBackward = navigateBackward;
    this.navigateForward = navigateForward;
    this.navigateBackward = this.navigateBackward || "allow";
    this.navigateForward = this.navigateForward || "deny";
  }
  /**
   * @inheritDoc
   */
  canTransitionToStep(wizard, destinationIndex) {
    if (this.isNavigable(wizard, destinationIndex)) {
      return true;
    }
    return wizard.wizardSteps.filter((step, index) => index < destinationIndex && index !== wizard.currentStepIndex).every((step) => step.completed || step.optional);
  }
  /**
   * @inheritDoc
   */
  transition(wizard, destinationIndex) {
    if (this.navigateForward === "deny") {
      wizard.wizardSteps.filter((step, index) => wizard.currentStepIndex > destinationIndex && index > destinationIndex).forEach((step) => step.completed = false);
    }
    super.transition(wizard, destinationIndex);
  }
  /**
   * @inheritDoc
   */
  isNavigable(wizard, destinationIndex) {
    const destinationStep = wizard.getStepAtIndex(destinationIndex);
    if (destinationStep instanceof WizardCompletionStep) {
      const previousStepsCompleted = wizard.wizardSteps.filter((step, index) => index < destinationIndex).every((step) => step.completed || step.optional || step.selected);
      if (!previousStepsCompleted) {
        return false;
      }
    }
    if (destinationIndex < wizard.currentStepIndex) {
      switch (this.navigateBackward) {
        case "allow":
          return true;
        case "deny":
          return false;
        default:
          throw new Error(`Invalid value for navigateBackward: ${this.navigateBackward}`);
      }
    } else if (destinationIndex > wizard.currentStepIndex) {
      switch (this.navigateForward) {
        case "allow":
          return true;
        case "deny":
          return false;
        case "visited":
          return destinationStep.completed;
        default:
          throw new Error(`Invalid value for navigateForward: ${this.navigateForward}`);
      }
    } else {
      return false;
    }
  }
  /**
   * @inheritDoc
   */
  ensureCanReset(wizard) {
    super.ensureCanReset(wizard);
    const defaultWizardStep = wizard.getStepAtIndex(wizard.defaultStepIndex);
    const defaultCompletionStep = defaultWizardStep instanceof WizardCompletionStep;
    if (defaultCompletionStep && wizard.wizardSteps.length !== 1) {
      throw new Error(`The default step index ${wizard.defaultStepIndex} references a completion step`);
    }
  }
};
var WizardComponent = class _WizardComponent {
  /**
   * The initially selected step, represented by its index
   * Beware: This initial default is only used if no wizard step has been enhanced with the `selected` directive
   */
  get defaultStepIndex() {
    const foundDefaultStep = this.wizardSteps.find((step) => step.defaultSelected);
    if (foundDefaultStep) {
      return this.getIndexOfStep(foundDefaultStep);
    } else {
      return this._defaultStepIndex;
    }
  }
  set defaultStepIndex(defaultStepIndex) {
    this._defaultStepIndex = defaultStepIndex;
  }
  /**
   * Constructor
   */
  constructor() {
    this.navBarLocation = "top";
    this.navBarLayout = "small";
    this.navBarDirection = "left-to-right";
    this._defaultStepIndex = 0;
    this.disableNavigationBar = false;
    this._navigation = new ConfigurableNavigationMode();
    this._wizardSteps = [];
    this.currentStepIndex = -1;
  }
  /**
   * Returns true if this wizard uses a horizontal orientation.
   * The wizard uses a horizontal orientation, iff the navigation bar is shown at the top or bottom of this wizard
   *
   * @returns True if this wizard uses a horizontal orientation
   */
  get horizontalOrientation() {
    return this.navBarLocation === "top" || this.navBarLocation === "bottom";
  }
  /**
   * Returns true if this wizard uses a vertical orientation.
   * The wizard uses a vertical orientation, iff the navigation bar is shown at the left or right of this wizard
   *
   * @returns True if this wizard uses a vertical orientation
   */
  get verticalOrientation() {
    return this.navBarLocation === "left" || this.navBarLocation === "right";
  }
  /**
   * Initialization work
   */
  ngAfterContentInit() {
    this.wizardStepsQueryList.changes.subscribe((changedWizardSteps) => {
      this.updateWizardSteps(changedWizardSteps.toArray());
    });
    this.updateWizardSteps(this.wizardStepsQueryList.toArray());
    setTimeout(() => this.reset());
  }
  /**
   * The WizardStep object belonging to the currently visible and selected step.
   * The currentStep is always the currently selected wizard step.
   * The currentStep can be either completed, if it was visited earlier,
   * or not completed, if it is visited for the first time or its state is currently out of date.
   *
   * If this wizard contains no steps, currentStep is null
   */
  get currentStep() {
    if (this.hasStep(this.currentStepIndex)) {
      return this.wizardSteps[this.currentStepIndex];
    } else {
      return null;
    }
  }
  /**
   * The completeness of the wizard.
   * If the wizard has been completed, i.e. all steps are either completed or optional, this value is true, otherwise it is false
   */
  get completed() {
    return this.wizardSteps.every((step) => step.completed || step.optional);
  }
  /**
   * An array representation of all wizard steps belonging to this model
   */
  get wizardSteps() {
    return this._wizardSteps;
  }
  /**
   * Updates the wizard steps to the new array
   *
   * @param wizardSteps The updated wizard steps
   */
  updateWizardSteps(wizardSteps) {
    if (this.wizardSteps.length > 0 && this.currentStepIndex > -1) {
      this.currentStepIndex = wizardSteps.indexOf(this.wizardSteps[this.currentStepIndex]);
    }
    this._wizardSteps = wizardSteps;
  }
  /**
   * The navigation mode used to navigate inside the wizard
   */
  get navigation() {
    return this._navigation;
  }
  /**
   * Updates the navigation mode for this wizard component
   *
   * @param navigation The updated navigation mode
   */
  set navigation(navigation) {
    this._navigation = navigation;
  }
  /**
   * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
   *
   * @param stepIndex The to be checked index of a step inside this wizard
   * @returns True if the given `stepIndex` is contained inside this wizard, false otherwise
   */
  hasStep(stepIndex) {
    return this.wizardSteps.length > 0 && 0 <= stepIndex && stepIndex < this.wizardSteps.length;
  }
  /**
   * Checks if this wizard has a previous step, compared to the current step
   *
   * @returns True if this wizard has a previous step before the current step
   */
  hasPreviousStep() {
    return this.hasStep(this.currentStepIndex - 1);
  }
  /**
   * Checks if this wizard has a next step, compared to the current step
   *
   * @returns True if this wizard has a next step after the current step
   */
  hasNextStep() {
    return this.hasStep(this.currentStepIndex + 1);
  }
  /**
   * Checks if this wizard is currently inside its last step
   *
   * @returns True if the wizard is currently inside its last step
   */
  isLastStep() {
    return this.wizardSteps.length > 0 && this.currentStepIndex === this.wizardSteps.length - 1;
  }
  /**
   * Finds the [[WizardStep]] at the given index `stepIndex`.
   * If no [[WizardStep]] exists at the given index an Error is thrown
   *
   * @param stepIndex The given index
   * @returns The found [[WizardStep]] at the given index `stepIndex`
   * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
   */
  getStepAtIndex(stepIndex) {
    if (!this.hasStep(stepIndex)) {
      throw new Error(`Expected a known step, but got stepIndex: ${stepIndex}.`);
    }
    return this.wizardSteps[stepIndex];
  }
  /**
   * Finds the index of the step with the given `stepId`.
   * If no step with the given `stepId` exists, `-1` is returned
   *
   * @param stepId The given step id
   * @returns The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
   */
  getIndexOfStepWithId(stepId) {
    return this.wizardSteps.findIndex((step) => step.stepId === stepId);
  }
  /**
   * Finds the index of the given [[WizardStep]] `step`.
   * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
   *
   * @param step The given [[WizardStep]]
   * @returns The found index of `step` or `-1` if the step is not included in the wizard
   */
  getIndexOfStep(step) {
    return this.wizardSteps.indexOf(step);
  }
  /**
   * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
   *
   * @param destinationStep The given destination step
   * @returns The calculated [[MovingDirection]]
   */
  getMovingDirection(destinationStep) {
    let movingDirection;
    if (destinationStep > this.currentStepIndex) {
      movingDirection = MovingDirection.Forwards;
    } else if (destinationStep < this.currentStepIndex) {
      movingDirection = MovingDirection.Backwards;
    } else {
      movingDirection = MovingDirection.Stay;
    }
    return movingDirection;
  }
  /**
   * Checks, whether a wizard step, as defined by the given destination index, can be transitioned to.
   *
   * This method controls navigation by [[goToStep]], [[goToPreviousStep]], and [[goToNextStep]] directives.
   * Navigation by navigation bar is governed by [[isNavigable]].
   *
   * @param destinationIndex The index of the destination step
   * @returns A [[Promise]] containing `true`, if the destination step can be transitioned to and false otherwise
   */
  canGoToStep(destinationIndex) {
    return this.navigation.canGoToStep(this, destinationIndex);
  }
  /**
   * Tries to transition to the wizard step, as denoted by the given destination index.
   *
   * Note: You do not have to call [[canGoToStep]] before calling [[goToStep]].
   * The [[canGoToStep]] method will be called automatically.
   *
   * @param destinationIndex The index of the destination wizard step, which should be entered
   * @param preFinalize An event emitter, to be called before the step has been transitioned
   * @param postFinalize An event emitter, to be called after the step has been transitioned
   */
  goToStep(destinationIndex, preFinalize, postFinalize) {
    return this.navigation.goToStep(this, destinationIndex, preFinalize, postFinalize);
  }
  /**
   * Tries to transition the wizard to the previous step
   *
   * @param preFinalize An event emitter, to be called before the step has been transitioned
   * @param postFinalize An event emitter, to be called after the step has been transitioned
   */
  goToPreviousStep(preFinalize, postFinalize) {
    return this.navigation.goToStep(this, this.currentStepIndex - 1, preFinalize, postFinalize);
  }
  /**
   * Tries to transition the wizard to the next step
   *
   * @param preFinalize An event emitter, to be called before the step has been transitioned
   * @param postFinalize An event emitter, to be called after the step has been transitioned
   */
  goToNextStep(preFinalize, postFinalize) {
    return this.navigation.goToStep(this, this.currentStepIndex + 1, preFinalize, postFinalize);
  }
  /**
   * Checks, whether the wizard step, located at the given index, can be navigated to using the navigation bar.
   *
   * @param destinationIndex The index of the destination step
   * @returns True if the step can be navigated to, false otherwise
   */
  isNavigable(destinationIndex) {
    return this.navigation.isNavigable(this, destinationIndex);
  }
  /**
   * Resets the state of this wizard.
   */
  reset() {
    this.navigation.reset(this);
  }
  static {
    this.ɵfac = function WizardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WizardComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _WizardComponent,
      selectors: [["aw-wizard"]],
      contentQueries: function WizardComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, WizardStep, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.wizardStepsQueryList = _t);
        }
      },
      hostVars: 4,
      hostBindings: function WizardComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("horizontal", ctx.horizontalOrientation)("vertical", ctx.verticalOrientation);
        }
      },
      inputs: {
        navBarLocation: "navBarLocation",
        navBarLayout: "navBarLayout",
        navBarDirection: "navBarDirection",
        defaultStepIndex: "defaultStepIndex",
        disableNavigationBar: "disableNavigationBar"
      },
      features: [ɵɵProvidersFeature([{
        provide: WizardBase,
        useExisting: _WizardComponent
      }])],
      ngContentSelectors: _c0,
      decls: 4,
      vars: 6,
      consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"]],
      template: function WizardComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, WizardComponent_aw_wizard_navigation_bar_0_Template, 1, 9, "aw-wizard-navigation-bar", 0);
          ɵɵelementStart(1, "div", 1);
          ɵɵprojection(2);
          ɵɵelementEnd();
          ɵɵtemplate(3, WizardComponent_aw_wizard_navigation_bar_3_Template, 1, 9, "aw-wizard-navigation-bar", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.navBarLocation === "top" || ctx.navBarLocation === "left");
          ɵɵadvance();
          ɵɵproperty("ngClass", ɵɵpureFunction2(3, _c4, ctx.navBarLocation === "left" || ctx.navBarLocation === "right", ctx.navBarLocation === "top" || ctx.navBarLocation === "bottom"));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.navBarLocation === "bottom" || ctx.navBarLocation === "right");
        }
      },
      dependencies: [NgClass, NgIf, WizardNavigationBarComponent],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardComponent, [{
    type: Component,
    args: [{
      selector: "aw-wizard",
      providers: [{
        provide: WizardBase,
        useExisting: WizardComponent
      }],
      template: `<aw-wizard-navigation-bar
  *ngIf="navBarLocation === 'top' || navBarLocation === 'left'"
  [ngClass]="{
    'vertical': navBarLocation === 'left',
    'horizontal': navBarLocation === 'top',
    'small': navBarLayout === 'small',
    'large-filled': navBarLayout === 'large-filled',
    'large-filled-symbols': navBarLayout === 'large-filled-symbols',
    'large-empty': navBarLayout === 'large-empty',
    'large-empty-symbols': navBarLayout === 'large-empty-symbols'
  }">
</aw-wizard-navigation-bar>

<div [ngClass]="{
  'wizard-steps': true,
  'vertical': navBarLocation === 'left' || navBarLocation === 'right',
  'horizontal': navBarLocation === 'top' || navBarLocation === 'bottom'
}">
  <ng-content></ng-content>
</div>

<aw-wizard-navigation-bar
  *ngIf="navBarLocation === 'bottom' || navBarLocation === 'right'"
  [ngClass]="{
    'vertical': navBarLocation === 'right',
    'horizontal': navBarLocation === 'bottom',
    'small': navBarLayout === 'small',
    'large-filled': navBarLayout === 'large-filled',
    'large-filled-symbols': navBarLayout === 'large-filled-symbols',
    'large-empty': navBarLayout === 'large-empty',
    'large-empty-symbols': navBarLayout === 'large-empty-symbols'
  }">
</aw-wizard-navigation-bar>
`
    }]
  }], () => [], {
    wizardStepsQueryList: [{
      type: ContentChildren,
      args: [WizardStep, {
        descendants: true
      }]
    }],
    navBarLocation: [{
      type: Input
    }],
    navBarLayout: [{
      type: Input
    }],
    navBarDirection: [{
      type: Input
    }],
    defaultStepIndex: [{
      type: Input
    }],
    disableNavigationBar: [{
      type: Input
    }],
    horizontalOrientation: [{
      type: HostBinding,
      args: ["class.horizontal"]
    }],
    verticalOrientation: [{
      type: HostBinding,
      args: ["class.vertical"]
    }]
  });
})();
var EnableBackLinksDirective = class _EnableBackLinksDirective {
  /**
   * Constructor
   *
   * @param completionStep The wizard completion step, which should be exitable
   */
  constructor(completionStep) {
    this.completionStep = completionStep;
    this.stepExit = new EventEmitter();
  }
  /**
   * Initialization work
   */
  ngOnInit() {
    this.completionStep.canExit = true;
    this.completionStep.stepExit = this.stepExit;
  }
  static {
    this.ɵfac = function EnableBackLinksDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnableBackLinksDirective)(ɵɵdirectiveInject(WizardCompletionStep, 1));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _EnableBackLinksDirective,
      selectors: [["", "awEnableBackLinks", ""]],
      outputs: {
        stepExit: "stepExit"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnableBackLinksDirective, [{
    type: Directive,
    args: [{
      selector: "[awEnableBackLinks]"
    }]
  }], () => [{
    type: WizardCompletionStep,
    decorators: [{
      type: Host
    }]
  }], {
    stepExit: [{
      type: Output
    }]
  });
})();
var NextStepDirective = class _NextStepDirective {
  /**
   * Constructor
   *
   * @param wizard The state of the wizard
   */
  constructor(wizard) {
    this.wizard = wizard;
    this.preFinalize = new EventEmitter();
    this.postFinalize = new EventEmitter();
  }
  /**
   * A convenience field for `preFinalize`
   */
  get finalize() {
    return this.preFinalize;
  }
  /**
   * A convenience name for `preFinalize`
   *
   * @param emitter The [[EventEmitter]] to be set
   */
  set finalize(emitter) {
    this.preFinalize = emitter;
  }
  /**
   * Listener method for `click` events on the component with this directive.
   * After this method is called the wizard will try to transition to the next step
   */
  onClick() {
    this.wizard.goToNextStep(this.preFinalize, this.postFinalize);
  }
  static {
    this.ɵfac = function NextStepDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NextStepDirective)(ɵɵdirectiveInject(WizardComponent));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NextStepDirective,
      selectors: [["", "awNextStep", ""]],
      hostBindings: function NextStepDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function NextStepDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      },
      outputs: {
        preFinalize: "preFinalize",
        postFinalize: "postFinalize",
        finalize: "finalize"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NextStepDirective, [{
    type: Directive,
    args: [{
      selector: "[awNextStep]"
    }]
  }], () => [{
    type: WizardComponent
  }], {
    preFinalize: [{
      type: Output
    }],
    postFinalize: [{
      type: Output
    }],
    finalize: [{
      type: Output
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var OptionalStepDirective = class _OptionalStepDirective {
  /**
   * Constructor
   *
   * @param wizardStep The wizard step, which contains this [[OptionalStepDirective]]
   */
  constructor(wizardStep) {
    this.wizardStep = wizardStep;
    this.optional = true;
  }
  /**
   * Initialization work
   */
  ngOnInit() {
    this.wizardStep.optional = this.optional || this.optional === "";
  }
  static {
    this.ɵfac = function OptionalStepDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OptionalStepDirective)(ɵɵdirectiveInject(WizardStep, 1));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _OptionalStepDirective,
      selectors: [["", "awOptionalStep", ""]],
      inputs: {
        optional: [0, "awOptionalStep", "optional"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OptionalStepDirective, [{
    type: Directive,
    args: [{
      selector: "[awOptionalStep]"
    }]
  }], () => [{
    type: WizardStep,
    decorators: [{
      type: Host
    }]
  }], {
    optional: [{
      type: Input,
      args: ["awOptionalStep"]
    }]
  });
})();
var PreviousStepDirective = class _PreviousStepDirective {
  /**
   * Constructor
   *
   * @param wizard The state of the wizard
   */
  constructor(wizard) {
    this.wizard = wizard;
    this.preFinalize = new EventEmitter();
    this.postFinalize = new EventEmitter();
  }
  /**
   * A convenience field for `preFinalize`
   */
  get finalize() {
    return this.preFinalize;
  }
  /**
   * A convenience field for `preFinalize`
   *
   * @param emitter The [[EventEmitter]] to be set
   */
  set finalize(emitter) {
    this.preFinalize = emitter;
  }
  /**
   * Listener method for `click` events on the component with this directive.
   * After this method is called the wizard will try to transition to the previous step
   */
  onClick() {
    this.wizard.goToPreviousStep(this.preFinalize, this.postFinalize);
  }
  static {
    this.ɵfac = function PreviousStepDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PreviousStepDirective)(ɵɵdirectiveInject(WizardComponent));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _PreviousStepDirective,
      selectors: [["", "awPreviousStep", ""]],
      hostBindings: function PreviousStepDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function PreviousStepDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      },
      outputs: {
        preFinalize: "preFinalize",
        postFinalize: "postFinalize",
        finalize: "finalize"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreviousStepDirective, [{
    type: Directive,
    args: [{
      selector: "[awPreviousStep]"
    }]
  }], () => [{
    type: WizardComponent
  }], {
    preFinalize: [{
      type: Output
    }],
    postFinalize: [{
      type: Output
    }],
    finalize: [{
      type: Output
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var ResetWizardDirective = class _ResetWizardDirective {
  /**
   * Constructor
   *
   * @param wizard The wizard component
   */
  constructor(wizard) {
    this.wizard = wizard;
    this.finalize = new EventEmitter();
  }
  /**
   * Resets the wizard
   */
  onClick() {
    this.finalize.emit();
    this.wizard.reset();
  }
  static {
    this.ɵfac = function ResetWizardDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResetWizardDirective)(ɵɵdirectiveInject(WizardComponent));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ResetWizardDirective,
      selectors: [["", "awResetWizard", ""]],
      hostBindings: function ResetWizardDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function ResetWizardDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      },
      outputs: {
        finalize: "finalize"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetWizardDirective, [{
    type: Directive,
    args: [{
      selector: "[awResetWizard]"
    }]
  }], () => [{
    type: WizardComponent
  }], {
    finalize: [{
      type: Output
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var SelectedStepDirective = class _SelectedStepDirective {
  /**
   * Constructor
   *
   * @param wizardStep The wizard step, which should be selected by default
   */
  constructor(wizardStep) {
    this.wizardStep = wizardStep;
  }
  /**
   * Initialization work
   */
  ngOnInit() {
    this.wizardStep.defaultSelected = true;
  }
  static {
    this.ɵfac = function SelectedStepDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SelectedStepDirective)(ɵɵdirectiveInject(WizardStep, 1));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _SelectedStepDirective,
      selectors: [["", "awSelectedStep", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectedStepDirective, [{
    type: Directive,
    args: [{
      selector: "[awSelectedStep]"
    }]
  }], () => [{
    type: WizardStep,
    decorators: [{
      type: Host
    }]
  }], null);
})();
var WizardCompletionStepDirective = class _WizardCompletionStepDirective extends WizardCompletionStep {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵWizardCompletionStepDirective_BaseFactory;
      return function WizardCompletionStepDirective_Factory(__ngFactoryType__) {
        return (ɵWizardCompletionStepDirective_BaseFactory || (ɵWizardCompletionStepDirective_BaseFactory = ɵɵgetInheritedFactory(_WizardCompletionStepDirective)))(__ngFactoryType__ || _WizardCompletionStepDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _WizardCompletionStepDirective,
      selectors: [["", "awWizardCompletionStep", ""]],
      features: [ɵɵProvidersFeature([{
        provide: WizardStep,
        useExisting: forwardRef(() => _WizardCompletionStepDirective)
      }, {
        provide: WizardCompletionStep,
        useExisting: forwardRef(() => _WizardCompletionStepDirective)
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardCompletionStepDirective, [{
    type: Directive,
    args: [{
      selector: "[awWizardCompletionStep]",
      providers: [{
        provide: WizardStep,
        useExisting: forwardRef(() => WizardCompletionStepDirective)
      }, {
        provide: WizardCompletionStep,
        useExisting: forwardRef(() => WizardCompletionStepDirective)
      }]
    }]
  }], null, null);
})();
var WizardStepDirective = class _WizardStepDirective extends WizardStep {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵWizardStepDirective_BaseFactory;
      return function WizardStepDirective_Factory(__ngFactoryType__) {
        return (ɵWizardStepDirective_BaseFactory || (ɵWizardStepDirective_BaseFactory = ɵɵgetInheritedFactory(_WizardStepDirective)))(__ngFactoryType__ || _WizardStepDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _WizardStepDirective,
      selectors: [["", "awWizardStep", ""]],
      features: [ɵɵProvidersFeature([{
        provide: WizardStep,
        useExisting: forwardRef(() => _WizardStepDirective)
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardStepDirective, [{
    type: Directive,
    args: [{
      selector: "[awWizardStep]",
      providers: [{
        provide: WizardStep,
        useExisting: forwardRef(() => WizardStepDirective)
      }]
    }]
  }], null, null);
})();
var NavigationModeDirective = class _NavigationModeDirective {
  constructor(wizard) {
    this.wizard = wizard;
  }
  ngOnChanges() {
    this.wizard.navigation = this.getNavigationMode();
  }
  getNavigationMode() {
    if (this.awNavigationMode) {
      return this.awNavigationMode;
    }
    return new ConfigurableNavigationMode(this.navigateBackward, this.navigateForward);
  }
  static {
    this.ɵfac = function NavigationModeDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavigationModeDirective)(ɵɵdirectiveInject(WizardComponent));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NavigationModeDirective,
      selectors: [["", "awNavigationMode", ""]],
      inputs: {
        awNavigationMode: "awNavigationMode",
        navigateBackward: "navigateBackward",
        navigateForward: "navigateForward"
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationModeDirective, [{
    type: Directive,
    args: [{
      selector: "[awNavigationMode]"
    }]
  }], () => [{
    type: WizardComponent
  }], {
    awNavigationMode: [{
      type: Input
    }],
    navigateBackward: [{
      type: Input
    }],
    navigateForward: [{
      type: Input
    }]
  });
})();
var CompletedStepDirective = class _CompletedStepDirective {
  /**
   * Constructor
   *
   * @param wizardStep The wizard step, which contains this [[CompletedStepDirective]]
   */
  constructor(wizardStep) {
    this.wizardStep = wizardStep;
    this.initiallyCompleted = true;
  }
  /**
   * Initialization work
   */
  ngOnInit() {
    this.wizardStep.initiallyCompleted = this.initiallyCompleted || this.initiallyCompleted === "";
  }
  static {
    this.ɵfac = function CompletedStepDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CompletedStepDirective)(ɵɵdirectiveInject(WizardStep, 1));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _CompletedStepDirective,
      selectors: [["", "awCompletedStep", ""]],
      inputs: {
        initiallyCompleted: [0, "awCompletedStep", "initiallyCompleted"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompletedStepDirective, [{
    type: Directive,
    args: [{
      selector: "[awCompletedStep]"
    }]
  }], () => [{
    type: WizardStep,
    decorators: [{
      type: Host
    }]
  }], {
    initiallyCompleted: [{
      type: Input,
      args: ["awCompletedStep"]
    }]
  });
})();
var ArchwizardModule = class _ArchwizardModule {
  /* istanbul ignore next */
  static forRoot() {
    return {
      ngModule: _ArchwizardModule,
      providers: [
        // Nothing here yet
      ]
    };
  }
  static {
    this.ɵfac = function ArchwizardModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ArchwizardModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ArchwizardModule,
      declarations: [WizardComponent, WizardStepComponent, WizardNavigationBarComponent, WizardCompletionStepComponent, GoToStepDirective, NextStepDirective, PreviousStepDirective, OptionalStepDirective, WizardStepSymbolDirective, WizardStepTitleDirective, EnableBackLinksDirective, WizardStepDirective, WizardCompletionStepDirective, SelectedStepDirective, ResetWizardDirective, NavigationModeDirective, CompletedStepDirective],
      imports: [CommonModule],
      exports: [WizardComponent, WizardStepComponent, WizardNavigationBarComponent, WizardCompletionStepComponent, GoToStepDirective, NextStepDirective, PreviousStepDirective, OptionalStepDirective, WizardStepSymbolDirective, WizardStepTitleDirective, EnableBackLinksDirective, WizardStepDirective, WizardCompletionStepDirective, SelectedStepDirective, ResetWizardDirective, NavigationModeDirective, CompletedStepDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArchwizardModule, [{
    type: NgModule,
    args: [{
      declarations: [WizardComponent, WizardStepComponent, WizardNavigationBarComponent, WizardCompletionStepComponent, GoToStepDirective, NextStepDirective, PreviousStepDirective, OptionalStepDirective, WizardStepSymbolDirective, WizardStepTitleDirective, EnableBackLinksDirective, WizardStepDirective, WizardCompletionStepDirective, SelectedStepDirective, ResetWizardDirective, NavigationModeDirective, CompletedStepDirective],
      imports: [CommonModule],
      exports: [WizardComponent, WizardStepComponent, WizardNavigationBarComponent, WizardCompletionStepComponent, GoToStepDirective, NextStepDirective, PreviousStepDirective, OptionalStepDirective, WizardStepSymbolDirective, WizardStepTitleDirective, EnableBackLinksDirective, WizardStepDirective, WizardCompletionStepDirective, SelectedStepDirective, ResetWizardDirective, NavigationModeDirective, CompletedStepDirective]
    }]
  }], null, null);
})();
export {
  ArchwizardModule,
  BaseNavigationMode,
  CompletedStepDirective,
  ConfigurableNavigationMode,
  EnableBackLinksDirective,
  GoToStepDirective,
  MovingDirection,
  NavigationModeDirective,
  NextStepDirective,
  OptionalStepDirective,
  PreviousStepDirective,
  ResetWizardDirective,
  SelectedStepDirective,
  WizardCompletionStep,
  WizardCompletionStepComponent,
  WizardCompletionStepDirective,
  WizardComponent,
  WizardNavigationBarComponent,
  WizardStep,
  WizardStepComponent,
  WizardStepDirective,
  WizardStepSymbolDirective,
  WizardStepTitleDirective,
  isStepId,
  isStepIndex,
  isStepOffset
};
//# sourceMappingURL=@rg-software_angular-archwizard.js.map
