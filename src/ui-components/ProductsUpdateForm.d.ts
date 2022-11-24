/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Products } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductsUpdateFormInputValues = {
    name?: string;
};
export declare type ProductsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductsUpdateFormOverridesProps = {
    ProductsUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProductsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    products?: Products;
    onSubmit?: (fields: ProductsUpdateFormInputValues) => ProductsUpdateFormInputValues;
    onSuccess?: (fields: ProductsUpdateFormInputValues) => void;
    onError?: (fields: ProductsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ProductsUpdateFormInputValues) => ProductsUpdateFormInputValues;
    onValidate?: ProductsUpdateFormValidationValues;
}>;
export default function ProductsUpdateForm(props: ProductsUpdateFormProps): React.ReactElement;
