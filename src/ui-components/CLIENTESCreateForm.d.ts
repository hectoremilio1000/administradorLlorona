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
export declare type CLIENTESCreateFormInputValues = {
    nombre?: string;
    cumple?: string;
    delegacion?: string;
    fechaLlegada?: string;
    HoraLlegada?: string;
    mesaAsignada?: string;
    numeroPersonas?: string;
    evento?: string;
    esReserva?: string;
};
export declare type CLIENTESCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    cumple?: ValidationFunction<string>;
    delegacion?: ValidationFunction<string>;
    fechaLlegada?: ValidationFunction<string>;
    HoraLlegada?: ValidationFunction<string>;
    mesaAsignada?: ValidationFunction<string>;
    numeroPersonas?: ValidationFunction<string>;
    evento?: ValidationFunction<string>;
    esReserva?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CLIENTESCreateFormOverridesProps = {
    CLIENTESCreateFormGrid?: FormProps<GridProps>;
    nombre?: FormProps<TextFieldProps>;
    cumple?: FormProps<TextFieldProps>;
    delegacion?: FormProps<TextFieldProps>;
    fechaLlegada?: FormProps<TextFieldProps>;
    HoraLlegada?: FormProps<TextFieldProps>;
    mesaAsignada?: FormProps<TextFieldProps>;
    numeroPersonas?: FormProps<TextFieldProps>;
    evento?: FormProps<TextFieldProps>;
    esReserva?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CLIENTESCreateFormProps = React.PropsWithChildren<{
    overrides?: CLIENTESCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CLIENTESCreateFormInputValues) => CLIENTESCreateFormInputValues;
    onSuccess?: (fields: CLIENTESCreateFormInputValues) => void;
    onError?: (fields: CLIENTESCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CLIENTESCreateFormInputValues) => CLIENTESCreateFormInputValues;
    onValidate?: CLIENTESCreateFormValidationValues;
} & React.CSSProperties>;
export default function CLIENTESCreateForm(props: CLIENTESCreateFormProps): React.ReactElement;
