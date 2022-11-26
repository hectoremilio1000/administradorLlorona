/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Empresa } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function EmpresaCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    nombre: undefined,
    direccionCompleta: undefined,
    visitado: undefined,
    yaContacto: undefined,
    seCerroEvento: undefined,
    fechaVisita: undefined,
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [direccionCompleta, setDireccionCompleta] = React.useState(
    initialValues.direccionCompleta
  );
  const [visitado, setVisitado] = React.useState(initialValues.visitado);
  const [yaContacto, setYaContacto] = React.useState(initialValues.yaContacto);
  const [seCerroEvento, setSeCerroEvento] = React.useState(
    initialValues.seCerroEvento
  );
  const [fechaVisita, setFechaVisita] = React.useState(
    initialValues.fechaVisita
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombre(initialValues.nombre);
    setDireccionCompleta(initialValues.direccionCompleta);
    setVisitado(initialValues.visitado);
    setYaContacto(initialValues.yaContacto);
    setSeCerroEvento(initialValues.seCerroEvento);
    setFechaVisita(initialValues.fechaVisita);
    setErrors({});
  };
  const validations = {
    nombre: [],
    direccionCompleta: [],
    visitado: [],
    yaContacto: [],
    seCerroEvento: [],
    fechaVisita: [],
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
          nombre,
          direccionCompleta,
          visitado,
          yaContacto,
          seCerroEvento,
          fechaVisita,
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
          await DataStore.save(new Empresa(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "EmpresaCreateForm")}
    >
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre: value,
              direccionCompleta,
              visitado,
              yaContacto,
              seCerroEvento,
              fechaVisita,
            };
            const result = onChange(modelFields);
            value = result?.nombre ?? value;
          }
          if (errors.nombre?.hasError) {
            runValidationTasks("nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("nombre", nombre)}
        errorMessage={errors.nombre?.errorMessage}
        hasError={errors.nombre?.hasError}
        {...getOverrideProps(overrides, "nombre")}
      ></TextField>
      <TextField
        label="Direccion completa"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              direccionCompleta: value,
              visitado,
              yaContacto,
              seCerroEvento,
              fechaVisita,
            };
            const result = onChange(modelFields);
            value = result?.direccionCompleta ?? value;
          }
          if (errors.direccionCompleta?.hasError) {
            runValidationTasks("direccionCompleta", value);
          }
          setDireccionCompleta(value);
        }}
        onBlur={() =>
          runValidationTasks("direccionCompleta", direccionCompleta)
        }
        errorMessage={errors.direccionCompleta?.errorMessage}
        hasError={errors.direccionCompleta?.hasError}
        {...getOverrideProps(overrides, "direccionCompleta")}
      ></TextField>
      <TextField
        label="Visitado"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              direccionCompleta,
              visitado: value,
              yaContacto,
              seCerroEvento,
              fechaVisita,
            };
            const result = onChange(modelFields);
            value = result?.visitado ?? value;
          }
          if (errors.visitado?.hasError) {
            runValidationTasks("visitado", value);
          }
          setVisitado(value);
        }}
        onBlur={() => runValidationTasks("visitado", visitado)}
        errorMessage={errors.visitado?.errorMessage}
        hasError={errors.visitado?.hasError}
        {...getOverrideProps(overrides, "visitado")}
      ></TextField>
      <TextField
        label="Ya contacto"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              direccionCompleta,
              visitado,
              yaContacto: value,
              seCerroEvento,
              fechaVisita,
            };
            const result = onChange(modelFields);
            value = result?.yaContacto ?? value;
          }
          if (errors.yaContacto?.hasError) {
            runValidationTasks("yaContacto", value);
          }
          setYaContacto(value);
        }}
        onBlur={() => runValidationTasks("yaContacto", yaContacto)}
        errorMessage={errors.yaContacto?.errorMessage}
        hasError={errors.yaContacto?.hasError}
        {...getOverrideProps(overrides, "yaContacto")}
      ></TextField>
      <TextField
        label="Se cerro evento"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              direccionCompleta,
              visitado,
              yaContacto,
              seCerroEvento: value,
              fechaVisita,
            };
            const result = onChange(modelFields);
            value = result?.seCerroEvento ?? value;
          }
          if (errors.seCerroEvento?.hasError) {
            runValidationTasks("seCerroEvento", value);
          }
          setSeCerroEvento(value);
        }}
        onBlur={() => runValidationTasks("seCerroEvento", seCerroEvento)}
        errorMessage={errors.seCerroEvento?.errorMessage}
        hasError={errors.seCerroEvento?.hasError}
        {...getOverrideProps(overrides, "seCerroEvento")}
      ></TextField>
      <TextField
        label="Fecha visita"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              direccionCompleta,
              visitado,
              yaContacto,
              seCerroEvento,
              fechaVisita: value,
            };
            const result = onChange(modelFields);
            value = result?.fechaVisita ?? value;
          }
          if (errors.fechaVisita?.hasError) {
            runValidationTasks("fechaVisita", value);
          }
          setFechaVisita(value);
        }}
        onBlur={() => runValidationTasks("fechaVisita", fechaVisita)}
        errorMessage={errors.fechaVisita?.errorMessage}
        hasError={errors.fechaVisita?.hasError}
        {...getOverrideProps(overrides, "fechaVisita")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
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
