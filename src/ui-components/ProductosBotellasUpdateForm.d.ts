/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ProductosBotellas } from "../models";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductosBotellasUpdateFormOverridesProps = {
    ProductosBotellasUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductosBotellasUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProductosBotellasUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    productosBotellas?: ProductosBotellas;
    onSubmit?: (fields: ProductosBotellasUpdateFormInputValues) => ProductosBotellasUpdateFormInputValues;
    onSuccess?: (fields: ProductosBotellasUpdateFormInputValues) => void;
    onError?: (fields: ProductosBotellasUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductosBotellasUpdateFormInputValues) => ProductosBotellasUpdateFormInputValues;
    onValidate?: ProductosBotellasUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProductosBotellasUpdateForm(props: ProductosBotellasUpdateFormProps): React.ReactElement;
