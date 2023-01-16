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
export declare type CERVEZAARTESANALCreateFormInputValues = {
    nam?: string;
};
export declare type CERVEZAARTESANALCreateFormValidationValues = {
    nam?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CERVEZAARTESANALCreateFormOverridesProps = {
    CERVEZAARTESANALCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nam?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CERVEZAARTESANALCreateFormProps = React.PropsWithChildren<{
    overrides?: CERVEZAARTESANALCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CERVEZAARTESANALCreateFormInputValues) => CERVEZAARTESANALCreateFormInputValues;
    onSuccess?: (fields: CERVEZAARTESANALCreateFormInputValues) => void;
    onError?: (fields: CERVEZAARTESANALCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CERVEZAARTESANALCreateFormInputValues) => CERVEZAARTESANALCreateFormInputValues;
    onValidate?: CERVEZAARTESANALCreateFormValidationValues;
} & React.CSSProperties>;
export default function CERVEZAARTESANALCreateForm(props: CERVEZAARTESANALCreateFormProps): React.ReactElement;
