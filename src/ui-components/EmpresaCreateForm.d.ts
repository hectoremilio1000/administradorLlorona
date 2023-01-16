/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmpresaCreateFormOverridesProps = {
    EmpresaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    direccionCompleta?: PrimitiveOverrideProps<TextFieldProps>;
    visitado?: PrimitiveOverrideProps<TextFieldProps>;
    yaContacto?: PrimitiveOverrideProps<TextFieldProps>;
    seCerroEvento?: PrimitiveOverrideProps<TextFieldProps>;
    fechaVisita?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmpresaCreateFormProps = React.PropsWithChildren<{
    overrides?: EmpresaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EmpresaCreateFormInputValues) => EmpresaCreateFormInputValues;
    onSuccess?: (fields: EmpresaCreateFormInputValues) => void;
    onError?: (fields: EmpresaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmpresaCreateFormInputValues) => EmpresaCreateFormInputValues;
    onValidate?: EmpresaCreateFormValidationValues;
} & React.CSSProperties>;
export default function EmpresaCreateForm(props: EmpresaCreateFormProps): React.ReactElement;
