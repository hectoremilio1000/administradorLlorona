/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ProductosBotellas } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductosBotellasUpdateFormInputValues = {
    name?: string;
};
export declare type ProductosBotellasUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductosBotellasUpdateFormOverridesProps = {
    ProductosBotellasUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductosBotellasUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProductosBotellasUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    productosBotellas?: ProductosBotellas;
    onSubmit?: (fields: ProductosBotellasUpdateFormInputValues) => ProductosBotellasUpdateFormInputValues;
    onSuccess?: (fields: ProductosBotellasUpdateFormInputValues) => void;
    onError?: (fields: ProductosBotellasUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ProductosBotellasUpdateFormInputValues) => ProductosBotellasUpdateFormInputValues;
    onValidate?: ProductosBotellasUpdateFormValidationValues;
}>;
export default function ProductosBotellasUpdateForm(props: ProductosBotellasUpdateFormProps): React.ReactElement;
