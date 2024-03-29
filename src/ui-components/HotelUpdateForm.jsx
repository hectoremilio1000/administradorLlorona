/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Hotel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function HotelUpdateForm(props) {
  const {
    id: idProp,
    hotel,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nombre: "",
    direccionCompleta: "",
    visitado: "",
    visitaRecepcionista: "",
    mandoClientes: "",
    fechaVisita: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [direccionCompleta, setDireccionCompleta] = React.useState(
    initialValues.direccionCompleta
  );
  const [visitado, setVisitado] = React.useState(initialValues.visitado);
  const [visitaRecepcionista, setVisitaRecepcionista] = React.useState(
    initialValues.visitaRecepcionista
  );
  const [mandoClientes, setMandoClientes] = React.useState(
    initialValues.mandoClientes
  );
  const [fechaVisita, setFechaVisita] = React.useState(
    initialValues.fechaVisita
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = hotelRecord
      ? { ...initialValues, ...hotelRecord }
      : initialValues;
    setNombre(cleanValues.nombre);
    setDireccionCompleta(cleanValues.direccionCompleta);
    setVisitado(cleanValues.visitado);
    setVisitaRecepcionista(cleanValues.visitaRecepcionista);
    setMandoClientes(cleanValues.mandoClientes);
    setFechaVisita(cleanValues.fechaVisita);
    setErrors({});
  };
  const [hotelRecord, setHotelRecord] = React.useState(hotel);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Hotel, idProp) : hotel;
      setHotelRecord(record);
    };
    queryData();
  }, [idProp, hotel]);
  React.useEffect(resetStateValues, [hotelRecord]);
  const validations = {
    nombre: [],
    direccionCompleta: [],
    visitado: [],
    visitaRecepcionista: [],
    mandoClientes: [],
    fechaVisita: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
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
          visitaRecepcionista,
          mandoClientes,
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
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Hotel.copyOf(hotelRecord, (updated) => {
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
      {...getOverrideProps(overrides, "HotelUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre: value,
              direccionCompleta,
              visitado,
              visitaRecepcionista,
              mandoClientes,
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
        value={direccionCompleta}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              direccionCompleta: value,
              visitado,
              visitaRecepcionista,
              mandoClientes,
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
        value={visitado}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              direccionCompleta,
              visitado: value,
              visitaRecepcionista,
              mandoClientes,
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
        label="Visita recepcionista"
        isRequired={false}
        isReadOnly={false}
        value={visitaRecepcionista}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              direccionCompleta,
              visitado,
              visitaRecepcionista: value,
              mandoClientes,
              fechaVisita,
            };
            const result = onChange(modelFields);
            value = result?.visitaRecepcionista ?? value;
          }
          if (errors.visitaRecepcionista?.hasError) {
            runValidationTasks("visitaRecepcionista", value);
          }
          setVisitaRecepcionista(value);
        }}
        onBlur={() =>
          runValidationTasks("visitaRecepcionista", visitaRecepcionista)
        }
        errorMessage={errors.visitaRecepcionista?.errorMessage}
        hasError={errors.visitaRecepcionista?.hasError}
        {...getOverrideProps(overrides, "visitaRecepcionista")}
      ></TextField>
      <TextField
        label="Mando clientes"
        isRequired={false}
        isReadOnly={false}
        value={mandoClientes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              direccionCompleta,
              visitado,
              visitaRecepcionista,
              mandoClientes: value,
              fechaVisita,
            };
            const result = onChange(modelFields);
            value = result?.mandoClientes ?? value;
          }
          if (errors.mandoClientes?.hasError) {
            runValidationTasks("mandoClientes", value);
          }
          setMandoClientes(value);
        }}
        onBlur={() => runValidationTasks("mandoClientes", mandoClientes)}
        errorMessage={errors.mandoClientes?.errorMessage}
        hasError={errors.mandoClientes?.hasError}
        {...getOverrideProps(overrides, "mandoClientes")}
      ></TextField>
      <TextField
        label="Fecha visita"
        isRequired={false}
        isReadOnly={false}
        value={fechaVisita}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              direccionCompleta,
              visitado,
              visitaRecepcionista,
              mandoClientes,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || hotel)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || hotel) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
