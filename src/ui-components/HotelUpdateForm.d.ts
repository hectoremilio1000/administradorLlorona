/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Hotel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HotelUpdateFormInputValues = {
    nombre?: string;
    direccionCompleta?: string;
    visitado?: string;
    visitaRecepcionista?: string;
    mandoClientes?: string;
    fechaVisita?: string;
};
export declare type HotelUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    direccionCompleta?: ValidationFunction<string>;
    visitado?: ValidationFunction<string>;
    visitaRecepcionista?: ValidationFunction<string>;
    mandoClientes?: ValidationFunction<string>;
    fechaVisita?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HotelUpdateFormOverridesProps = {
    HotelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    direccionCompleta?: PrimitiveOverrideProps<TextFieldProps>;
    visitado?: PrimitiveOverrideProps<TextFieldProps>;
    visitaRecepcionista?: PrimitiveOverrideProps<TextFieldProps>;
    mandoClientes?: PrimitiveOverrideProps<TextFieldProps>;
    fechaVisita?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HotelUpdateFormProps = React.PropsWithChildren<{
    overrides?: HotelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    hotel?: Hotel;
    onSubmit?: (fields: HotelUpdateFormInputValues) => HotelUpdateFormInputValues;
    onSuccess?: (fields: HotelUpdateFormInputValues) => void;
    onError?: (fields: HotelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HotelUpdateFormInputValues) => HotelUpdateFormInputValues;
    onValidate?: HotelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HotelUpdateForm(props: HotelUpdateFormProps): React.ReactElement;
