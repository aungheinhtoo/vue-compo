declare const _default: {
    CustomAlertVue: import("vue").DefineComponent<{
        title: {
            type: import("vue").PropType<string>;
            required: false;
        };
        color: {
            type: import("vue").PropType<string>;
            required: true;
        };
        content: {
            type: import("vue").PropType<string>;
            required: false;
        };
        filledButtonTitle: {
            type: import("vue").PropType<string>;
            required: false;
        };
        outlinedButtonTitle: {
            type: import("vue").PropType<string>;
            required: false;
        };
        filledButtonOnClick: {
            type: import("vue").PropType<Function>;
            required: false;
        };
        outlinedButtonOnClick: {
            type: import("vue").PropType<Function>;
            required: false;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "delete"[], "delete", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        title: {
            type: import("vue").PropType<string>;
            required: false;
        };
        color: {
            type: import("vue").PropType<string>;
            required: true;
        };
        content: {
            type: import("vue").PropType<string>;
            required: false;
        };
        filledButtonTitle: {
            type: import("vue").PropType<string>;
            required: false;
        };
        outlinedButtonTitle: {
            type: import("vue").PropType<string>;
            required: false;
        };
        filledButtonOnClick: {
            type: import("vue").PropType<Function>;
            required: false;
        };
        outlinedButtonOnClick: {
            type: import("vue").PropType<Function>;
            required: false;
        };
    }>> & {
        onDelete?: (...args: any[]) => any;
    }, {}>;
    CustomButtonVue: import("vue").DefineComponent<{
        title: {
            type: import("vue").PropType<string>;
            required: false;
        };
        color: {
            type: import("vue").PropType<string>;
            required: true;
        };
        icon: {
            type: import("vue").PropType<string>;
            required: false;
        };
        iconPosition: {
            type: import("vue").PropType<"left" | "right">;
            required: false;
        };
        variant: {
            type: import("vue").PropType<string>;
            required: false;
        };
        onClick: {
            type: import("vue").PropType<Function>;
            required: false;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        title: {
            type: import("vue").PropType<string>;
            required: false;
        };
        color: {
            type: import("vue").PropType<string>;
            required: true;
        };
        icon: {
            type: import("vue").PropType<string>;
            required: false;
        };
        iconPosition: {
            type: import("vue").PropType<"left" | "right">;
            required: false;
        };
        variant: {
            type: import("vue").PropType<string>;
            required: false;
        };
        onClick: {
            type: import("vue").PropType<Function>;
            required: false;
        };
    }>>, {}>;
};
export default _default;
