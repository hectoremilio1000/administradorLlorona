/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CLIENTES } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CLIENTESUpdateFormInputValues = {
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
export declare type CLIENTESUpdateFormValidationValues = {
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
export declare type CLIENTESUpdateFormOverridesProps = {
    CLIENTESUpdateFormGrid?: FormProps<GridProps>;
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
export declare type CLIENTESUpdateFormProps = React.PropsWithChildren<{
    overrides?: CLIENTESUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cLIENTES?: CLIENTES;
    onSubmit?: (fields: CLIENTESUpdateFormInputValues) => CLIENTESUpdateFormInputValues;
    onSuccess?: (fields: CLIENTESUpdateFormInputValues) => void;
    onError?: (fields: CLIENTESUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CLIENTESUpdateFormInputValues) => CLIENTESUpdateFormInputValues;
    onValidate?: CLIENTESUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CLIENTESUpdateForm(props: CLIENTESUpdateFormProps): React.ReactElement;
