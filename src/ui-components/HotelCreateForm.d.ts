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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HotelCreateFormOverridesProps = {
    HotelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    direccionCompleta?: PrimitiveOverrideProps<TextFieldProps>;
    visitado?: PrimitiveOverrideProps<TextFieldProps>;
    visitaRecepcionista?: PrimitiveOverrideProps<TextFieldProps>;
    mandoClientes?: PrimitiveOverrideProps<TextFieldProps>;
    fechaVisita?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HotelCreateFormProps = React.PropsWithChildren<{
    overrides?: HotelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HotelCreateFormInputValues) => HotelCreateFormInputValues;
    onSuccess?: (fields: HotelCreateFormInputValues) => void;
    onError?: (fields: HotelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HotelCreateFormInputValues) => HotelCreateFormInputValues;
    onValidate?: HotelCreateFormValidationValues;
} & React.CSSProperties>;
export default function HotelCreateForm(props: HotelCreateFormProps): React.ReactElement;
