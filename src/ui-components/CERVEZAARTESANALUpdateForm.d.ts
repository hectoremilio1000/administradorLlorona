/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CERVEZAARTESANAL } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CERVEZAARTESANALUpdateFormInputValues = {
    nam?: string;
};
export declare type CERVEZAARTESANALUpdateFormValidationValues = {
    nam?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CERVEZAARTESANALUpdateFormOverridesProps = {
    CERVEZAARTESANALUpdateFormGrid?: FormProps<GridProps>;
    nam?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CERVEZAARTESANALUpdateFormProps = React.PropsWithChildren<{
    overrides?: CERVEZAARTESANALUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cERVEZAARTESANAL?: CERVEZAARTESANAL;
    onSubmit?: (fields: CERVEZAARTESANALUpdateFormInputValues) => CERVEZAARTESANALUpdateFormInputValues;
    onSuccess?: (fields: CERVEZAARTESANALUpdateFormInputValues) => void;
    onError?: (fields: CERVEZAARTESANALUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CERVEZAARTESANALUpdateFormInputValues) => CERVEZAARTESANALUpdateFormInputValues;
    onValidate?: CERVEZAARTESANALUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CERVEZAARTESANALUpdateForm(props: CERVEZAARTESANALUpdateFormProps): React.ReactElement;
