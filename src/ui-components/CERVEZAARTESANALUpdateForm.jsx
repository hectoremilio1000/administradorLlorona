/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { CERVEZAARTESANAL } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function CERVEZAARTESANALUpdateForm(props) {
  const {
    id,
    cERVEZAARTESANAL,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nam: undefined,
  };
  const [nam, setNam] = React.useState(initialValues.nam);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...cERVEZAARTESANALRecord };
    setNam(cleanValues.nam);
    setErrors({});
  };
  const [cERVEZAARTESANALRecord, setCERVEZAARTESANALRecord] =
    React.useState(cERVEZAARTESANAL);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(CERVEZAARTESANAL, id)
        : cERVEZAARTESANAL;
      setCERVEZAARTESANALRecord(record);
    };
    queryData();
  }, [id, cERVEZAARTESANAL]);
  React.useEffect(resetStateValues, [cERVEZAARTESANALRecord]);
  const validations = {
    nam: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nam,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            CERVEZAARTESANAL.copyOf(cERVEZAARTESANALRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "CERVEZAARTESANALUpdateForm")}
    >
      <TextField
        label="Nam"
        isRequired={false}
        isReadOnly={false}
        defaultValue={nam}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nam: value,
            };
            const result = onChange(modelFields);
            value = result?.nam ?? value;
          }
          if (errors.nam?.hasError) {
            runValidationTasks("nam", value);
          }
          setNam(value);
        }}
        onBlur={() => runValidationTasks("nam", nam)}
        errorMessage={errors.nam?.errorMessage}
        hasError={errors.nam?.hasError}
        {...getOverrideProps(overrides, "nam")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
