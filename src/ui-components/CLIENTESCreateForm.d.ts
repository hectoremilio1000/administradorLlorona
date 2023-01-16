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
export declare type CLIENTESCreateFormInputValues = {
    nombre?: string;
    cumple?: string;
    delegacion?: string;
    fechaLlegada?: string;
    HoraLlegada?: string;
    mesaAsignada?: string;
    numeroPersonas?: number;
    evento?: string;
    esReserva?: string;
    whatsapp?: number;
    email?: string;
    mesero?: string;
    servici?: string;
};
export declare type CLIENTESCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    cumple?: ValidationFunction<string>;
    delegacion?: ValidationFunction<string>;
    fechaLlegada?: ValidationFunction<string>;
    HoraLlegada?: ValidationFunction<string>;
    mesaAsignada?: ValidationFunction<string>;
    numeroPersonas?: ValidationFunction<number>;
    evento?: ValidationFunction<string>;
    esReserva?: ValidationFunction<string>;
    whatsapp?: ValidationFunction<number>;
    email?: ValidationFunction<string>;
    mesero?: ValidationFunction<string>;
    servici?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CLIENTESCreateFormOverridesProps = {
    CLIENTESCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    cumple?: PrimitiveOverrideProps<TextFieldProps>;
    delegacion?: PrimitiveOverrideProps<TextFieldProps>;
    fechaLlegada?: PrimitiveOverrideProps<TextFieldProps>;
    HoraLlegada?: PrimitiveOverrideProps<TextFieldProps>;
    mesaAsignada?: PrimitiveOverrideProps<TextFieldProps>;
    numeroPersonas?: PrimitiveOverrideProps<TextFieldProps>;
    evento?: PrimitiveOverrideProps<TextFieldProps>;
    esReserva?: PrimitiveOverrideProps<TextFieldProps>;
    whatsapp?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    mesero?: PrimitiveOverrideProps<TextFieldProps>;
    servici?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CLIENTESCreateFormProps = React.PropsWithChildren<{
    overrides?: CLIENTESCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CLIENTESCreateFormInputValues) => CLIENTESCreateFormInputValues;
    onSuccess?: (fields: CLIENTESCreateFormInputValues) => void;
    onError?: (fields: CLIENTESCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CLIENTESCreateFormInputValues) => CLIENTESCreateFormInputValues;
    onValidate?: CLIENTESCreateFormValidationValues;
} & React.CSSProperties>;
export default function CLIENTESCreateForm(props: CLIENTESCreateFormProps): React.ReactElement;
