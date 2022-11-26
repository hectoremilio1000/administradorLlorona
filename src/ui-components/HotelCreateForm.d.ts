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
export declare type HotelCreateFormInputValues = {
    nombre?: string;
    direccionCompleta?: string;
    visitado?: string;
    visitaRecepcionista?: string;
    mandoClientes?: string;
    fechaVisita?: string;
};
export declare type HotelCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    direccionCompleta?: ValidationFunction<string>;
    visitado?: ValidationFunction<string>;
    visitaRecepcionista?: ValidationFunction<string>;
    mandoClientes?: ValidationFunction<string>;
    fechaVisita?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HotelCreateFormOverridesProps = {
    HotelCreateFormGrid?: FormProps<GridProps>;
    nombre?: FormProps<TextFieldProps>;
    direccionCompleta?: FormProps<TextFieldProps>;
    visitado?: FormProps<TextFieldProps>;
    visitaRecepcionista?: FormProps<TextFieldProps>;
    mandoClientes?: FormProps<TextFieldProps>;
    fechaVisita?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HotelCreateFormProps = React.PropsWithChildren<{
    overrides?: HotelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HotelCreateFormInputValues) => HotelCreateFormInputValues;
    onSuccess?: (fields: HotelCreateFormInputValues) => void;
    onError?: (fields: HotelCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: HotelCreateFormInputValues) => HotelCreateFormInputValues;
    onValidate?: HotelCreateFormValidationValues;
} & React.CSSProperties>;
export default function HotelCreateForm(props: HotelCreateFormProps): React.ReactElement;
