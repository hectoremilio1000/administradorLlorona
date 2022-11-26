/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmpresaCreateFormInputValues = {
    nombre?: string;
    direccionCompleta?: string;
    visitado?: string;
    yaContacto?: string;
    seCerroEvento?: string;
    fechaVisita?: string;
};
export declare type EmpresaCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    direccionCompleta?: ValidationFunction<string>;
    visitado?: ValidationFunction<string>;
    yaContacto?: ValidationFunction<string>;
    seCerroEvento?: ValidationFunction<string>;
    fechaVisita?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmpresaCreateFormOverridesProps = {
    EmpresaCreateFormGrid?: FormProps<GridProps>;
    nombre?: FormProps<TextFieldProps>;
    direccionCompleta?: FormProps<TextFieldProps>;
    visitado?: FormProps<TextFieldProps>;
    yaContacto?: FormProps<TextFieldProps>;
    seCerroEvento?: FormProps<TextFieldProps>;
    fechaVisita?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmpresaCreateFormProps = React.PropsWithChildren<{
    overrides?: EmpresaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EmpresaCreateFormInputValues) => EmpresaCreateFormInputValues;
    onSuccess?: (fields: EmpresaCreateFormInputValues) => void;
    onError?: (fields: EmpresaCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: EmpresaCreateFormInputValues) => EmpresaCreateFormInputValues;
    onValidate?: EmpresaCreateFormValidationValues;
} & React.CSSProperties>;
export default function EmpresaCreateForm(props: EmpresaCreateFormProps): React.ReactElement;
