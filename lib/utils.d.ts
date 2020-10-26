import { Component } from 'react';
import { processColor } from 'react-native';
import { ObjPred } from 'ramda';
export declare const isArgument: (x1: any) => boolean;
export declare const isFunction: (x1: any) => boolean;
export declare const isString: (x1: any) => boolean;
export declare const isNumber: (x1: any) => boolean;
export declare const isDate: (x1: any) => boolean;
export declare const isRegExp: (x1: any) => boolean;
export declare const isError: (x1: any) => boolean;
declare const compact: <K extends any[] | import("ramda").Dictionary<any>>(source: K) => K extends (infer U)[] ? U[] : K extends import("ramda").Dictionary<infer U_1> ? import("ramda").Dictionary<U_1> : never;
declare function capitalize(str: string): string;
declare const toPixels: (layoutSize: number) => number;
declare function toDips(px: number): number;
declare function convertCoordinate(value: number): number;
declare function getFontSize(sp: number): number;
declare function extractPropsBy(view: Component, filter: ObjPred): unknown;
declare function extractProps(view: Component, propTypes: object): unknown;
declare function extractTouchableProps(view: Component): unknown;
export { capitalize, compact, toPixels, toDips, convertCoordinate, getFontSize, extractProps, extractPropsBy, extractTouchableProps, processColor as parseColor, };
//# sourceMappingURL=utils.d.ts.map