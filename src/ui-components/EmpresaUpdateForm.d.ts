/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Empresa } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmpresaUpdateFormInputValues = {
    nombre?: string;
    direccionCompleta?: string;
    visitado?: string;
    yaContacto?: string;
    seCerroEvento?: string;
    fechaVisita?: string;
};
export declare type EmpresaUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    direccionCompleta?: ValidationFunction<string>;
    visitado?: ValidationFunction<string>;
    yaContacto?: ValidationFunction<string>;
    seCerroEvento?: ValidationFunction<string>;
    fechaVisita?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmpresaUpdateFormOverridesProps = {
    EmpresaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    direccionCompleta?: PrimitiveOverrideProps<TextFieldProps>;
    visitado?: PrimitiveOverrideProps<TextFieldProps>;
    yaContacto?: PrimitiveOverrideProps<TextFieldProps>;
    seCerroEvento?: PrimitiveOverrideProps<TextFieldProps>;
    fechaVisita?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmpresaUpdateFormProps = React.PropsWithChildren<{
    overrides?: EmpresaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    empresa?: Empresa;
    onSubmit?: (fields: EmpresaUpdateFormInputValues) => EmpresaUpdateFormInputValues;
    onSuccess?: (fields: EmpresaUpdateFormInputValues) => void;
    onError?: (fields: EmpresaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmpresaUpdateFormInputValues) => EmpresaUpdateFormInputValues;
    onValidate?: EmpresaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EmpresaUpdateForm(props: EmpresaUpdateFormProps): React.ReactElement;
