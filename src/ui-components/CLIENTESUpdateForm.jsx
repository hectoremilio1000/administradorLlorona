/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CLIENTES } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CLIENTESUpdateForm(props) {
  const {
    id: idProp,
    cLIENTES,
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
    cumple: "",
    delegacion: "",
    fechaLlegada: "",
    HoraLlegada: "",
    mesaAsignada: "",
    numeroPersonas: "",
    evento: "",
    esReserva: "",
    whatsapp: "",
    email: "",
    mesero: "",
    servici: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [cumple, setCumple] = React.useState(initialValues.cumple);
  const [delegacion, setDelegacion] = React.useState(initialValues.delegacion);
  const [fechaLlegada, setFechaLlegada] = React.useState(
    initialValues.fechaLlegada
  );
  const [HoraLlegada, setHoraLlegada] = React.useState(
    initialValues.HoraLlegada
  );
  const [mesaAsignada, setMesaAsignada] = React.useState(
    initialValues.mesaAsignada
  );
  const [numeroPersonas, setNumeroPersonas] = React.useState(
    initialValues.numeroPersonas
  );
  const [evento, setEvento] = React.useState(initialValues.evento);
  const [esReserva, setEsReserva] = React.useState(initialValues.esReserva);
  const [whatsapp, setWhatsapp] = React.useState(initialValues.whatsapp);
  const [email, setEmail] = React.useState(initialValues.email);
  const [mesero, setMesero] = React.useState(initialValues.mesero);
  const [servici, setServici] = React.useState(initialValues.servici);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = cLIENTESRecord
      ? { ...initialValues, ...cLIENTESRecord }
      : initialValues;
    setNombre(cleanValues.nombre);
    setCumple(cleanValues.cumple);
    setDelegacion(cleanValues.delegacion);
    setFechaLlegada(cleanValues.fechaLlegada);
    setHoraLlegada(cleanValues.HoraLlegada);
    setMesaAsignada(cleanValues.mesaAsignada);
    setNumeroPersonas(cleanValues.numeroPersonas);
    setEvento(cleanValues.evento);
    setEsReserva(cleanValues.esReserva);
    setWhatsapp(cleanValues.whatsapp);
    setEmail(cleanValues.email);
    setMesero(cleanValues.mesero);
    setServici(cleanValues.servici);
    setErrors({});
  };
  const [cLIENTESRecord, setCLIENTESRecord] = React.useState(cLIENTES);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(CLIENTES, idProp)
        : cLIENTES;
      setCLIENTESRecord(record);
    };
    queryData();
  }, [idProp, cLIENTES]);
  React.useEffect(resetStateValues, [cLIENTESRecord]);
  const validations = {
    nombre: [],
    cumple: [],
    delegacion: [],
    fechaLlegada: [],
    HoraLlegada: [],
    mesaAsignada: [],
    numeroPersonas: [],
    evento: [],
    esReserva: [],
    whatsapp: [],
    email: [],
    mesero: [],
    servici: [],
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
          cumple,
          delegacion,
          fechaLlegada,
          HoraLlegada,
          mesaAsignada,
          numeroPersonas,
          evento,
          esReserva,
          whatsapp,
          email,
          mesero,
          servici,
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
            CLIENTES.copyOf(cLIENTESRecord, (updated) => {
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
      {...getOverrideProps(overrides, "CLIENTESUpdateForm")}
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
              cumple,
              delegacion,
              fechaLlegada,
              HoraLlegada,
              mesaAsignada,
              numeroPersonas,
              evento,
              esReserva,
              whatsapp,
              email,
              mesero,
              servici,
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
        label="Cumple"
        isRequired={false}
        isReadOnly={false}
        value={cumple}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              cumple: value,
              delegacion,
              fechaLlegada,
              HoraLlegada,
              mesaAsignada,
              numeroPersonas,
              evento,
              esReserva,
              whatsapp,
              email,
              mesero,
              servici,
            };
            const result = onChange(modelFields);
            value = result?.cumple ?? value;
          }
          if (errors.cumple?.hasError) {
            runValidationTasks("cumple", value);
          }
          setCumple(value);
        }}
        onBlur={() => runValidationTasks("cumple", cumple)}
        errorMessage={errors.cumple?.errorMessage}
        hasError={errors.cumple?.hasError}
        {...getOverrideProps(overrides, "cumple")}
      ></TextField>
      <TextField
        label="Delegacion"
        isRequired={false}
        isReadOnly={false}
        value={delegacion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              cumple,
              delegacion: value,
              fechaLlegada,
              HoraLlegada,
              mesaAsignada,
              numeroPersonas,
              evento,
              esReserva,
              whatsapp,
              email,
              mesero,
              servici,
            };
            const result = onChange(modelFields);
            value = result?.delegacion ?? value;
          }
          if (errors.delegacion?.hasError) {
            runValidationTasks("delegacion", value);
          }
          setDelegacion(value);
        }}
        onBlur={() => runValidationTasks("delegacion", delegacion)}
        errorMessage={errors.delegacion?.errorMessage}
        hasError={errors.delegacion?.hasError}
        {...getOverrideProps(overrides, "delegacion")}
      ></TextField>
      <TextField
        label="Fecha llegada"
        isRequired={false}
        isReadOnly={false}
        value={fechaLlegada}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              cumple,
              delegacion,
              fechaLlegada: value,
              HoraLlegada,
              mesaAsignada,
              numeroPersonas,
              evento,
              esReserva,
              whatsapp,
              email,
              mesero,
              servici,
            };
            const result = onChange(modelFields);
            value = result?.fechaLlegada ?? value;
          }
          if (errors.fechaLlegada?.hasError) {
            runValidationTasks("fechaLlegada", value);
          }
          setFechaLlegada(value);
        }}
        onBlur={() => runValidationTasks("fechaLlegada", fechaLlegada)}
        errorMessage={errors.fechaLlegada?.errorMessage}
        hasError={errors.fechaLlegada?.hasError}
        {...getOverrideProps(overrides, "fechaLlegada")}
      ></TextField>
      <TextField
        label="Hora llegada"
        isRequired={false}
        isReadOnly={false}
        value={HoraLlegada}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              cumple,
              delegacion,
              fechaLlegada,
              HoraLlegada: value,
              mesaAsignada,
              numeroPersonas,
              evento,
              esReserva,
              whatsapp,
              email,
              mesero,
              servici,
            };
            const result = onChange(modelFields);
            value = result?.HoraLlegada ?? value;
          }
          if (errors.HoraLlegada?.hasError) {
            runValidationTasks("HoraLlegada", value);
          }
          setHoraLlegada(value);
        }}
        onBlur={() => runValidationTasks("HoraLlegada", HoraLlegada)}
        errorMessage={errors.HoraLlegada?.errorMessage}
        hasError={errors.HoraLlegada?.hasError}
        {...getOverrideProps(overrides, "HoraLlegada")}
      ></TextField>
      <TextField
        label="Mesa asignada"
        isRequired={false}
        isReadOnly={false}
        value={mesaAsignada}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              cumple,
              delegacion,
              fechaLlegada,
              HoraLlegada,
              mesaAsignada: value,
              numeroPersonas,
              evento,
              esReserva,
              whatsapp,
              email,
              mesero,
              servici,
            };
            const result = onChange(modelFields);
            value = result?.mesaAsignada ?? value;
          }
          if (errors.mesaAsignada?.hasError) {
            runValidationTasks("mesaAsignada", value);
          }
          setMesaAsignada(value);
        }}
        onBlur={() => runValidationTasks("mesaAsignada", mesaAsignada)}
        errorMessage={errors.mesaAsignada?.errorMessage}
        hasError={errors.mesaAsignada?.hasError}
        {...getOverrideProps(overrides, "mesaAsignada")}
      ></TextField>
      <TextField
        label="Numero personas"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numeroPersonas}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              cumple,
              delegacion,
              fechaLlegada,
              HoraLlegada,
              mesaAsignada,
              numeroPersonas: value,
              evento,
              esReserva,
              whatsapp,
              email,
              mesero,
              servici,
            };
            const result = onChange(modelFields);
            value = result?.numeroPersonas ?? value;
          }
          if (errors.numeroPersonas?.hasError) {
            runValidationTasks("numeroPersonas", value);
          }
          setNumeroPersonas(value);
        }}
        onBlur={() => runValidationTasks("numeroPersonas", numeroPersonas)}
        errorMessage={errors.numeroPersonas?.errorMessage}
        hasError={errors.numeroPersonas?.hasError}
        {...getOverrideProps(overrides, "numeroPersonas")}
      ></TextField>
      <TextField
        label="Evento"
        isRequired={false}
        isReadOnly={false}
        value={evento}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              cumple,
              delegacion,
              fechaLlegada,
              HoraLlegada,
              mesaAsignada,
              numeroPersonas,
              evento: value,
              esReserva,
              whatsapp,
              email,
              mesero,
              servici,
            };
            const result = onChange(modelFields);
            value = result?.evento ?? value;
          }
          if (errors.evento?.hasError) {
            runValidationTasks("evento", value);
          }
          setEvento(value);
        }}
        onBlur={() => runValidationTasks("evento", evento)}
        errorMessage={errors.evento?.errorMessage}
        hasError={errors.evento?.hasError}
        {...getOverrideProps(overrides, "evento")}
      ></TextField>
      <TextField
        label="Es reserva"
        isRequired={false}
        isReadOnly={false}
        value={esReserva}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              cumple,
              delegacion,
              fechaLlegada,
              HoraLlegada,
              mesaAsignada,
              numeroPersonas,
              evento,
              esReserva: value,
              whatsapp,
              email,
              mesero,
              servici,
            };
            const result = onChange(modelFields);
            value = result?.esReserva ?? value;
          }
          if (errors.esReserva?.hasError) {
            runValidationTasks("esReserva", value);
          }
          setEsReserva(value);
        }}
        onBlur={() => runValidationTasks("esReserva", esReserva)}
        errorMessage={errors.esReserva?.errorMessage}
        hasError={errors.esReserva?.hasError}
        {...getOverrideProps(overrides, "esReserva")}
      ></TextField>
      <TextField
        label="Whatsapp"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={whatsapp}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              cumple,
              delegacion,
              fechaLlegada,
              HoraLlegada,
              mesaAsignada,
              numeroPersonas,
              evento,
              esReserva,
              whatsapp: value,
              email,
              mesero,
              servici,
            };
            const result = onChange(modelFields);
            value = result?.whatsapp ?? value;
          }
          if (errors.whatsapp?.hasError) {
            runValidationTasks("whatsapp", value);
          }
          setWhatsapp(value);
        }}
        onBlur={() => runValidationTasks("whatsapp", whatsapp)}
        errorMessage={errors.whatsapp?.errorMessage}
        hasError={errors.whatsapp?.hasError}
        {...getOverrideProps(overrides, "whatsapp")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              cumple,
              delegacion,
              fechaLlegada,
              HoraLlegada,
              mesaAsignada,
              numeroPersonas,
              evento,
              esReserva,
              whatsapp,
              email: value,
              mesero,
              servici,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Mesero"
        isRequired={false}
        isReadOnly={false}
        value={mesero}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              cumple,
              delegacion,
              fechaLlegada,
              HoraLlegada,
              mesaAsignada,
              numeroPersonas,
              evento,
              esReserva,
              whatsapp,
              email,
              mesero: value,
              servici,
            };
            const result = onChange(modelFields);
            value = result?.mesero ?? value;
          }
          if (errors.mesero?.hasError) {
            runValidationTasks("mesero", value);
          }
          setMesero(value);
        }}
        onBlur={() => runValidationTasks("mesero", mesero)}
        errorMessage={errors.mesero?.errorMessage}
        hasError={errors.mesero?.hasError}
        {...getOverrideProps(overrides, "mesero")}
      ></TextField>
      <TextField
        label="Servici"
        isRequired={false}
        isReadOnly={false}
        value={servici}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              cumple,
              delegacion,
              fechaLlegada,
              HoraLlegada,
              mesaAsignada,
              numeroPersonas,
              evento,
              esReserva,
              whatsapp,
              email,
              mesero,
              servici: value,
            };
            const result = onChange(modelFields);
            value = result?.servici ?? value;
          }
          if (errors.servici?.hasError) {
            runValidationTasks("servici", value);
          }
          setServici(value);
        }}
        onBlur={() => runValidationTasks("servici", servici)}
        errorMessage={errors.servici?.errorMessage}
        hasError={errors.servici?.hasError}
        {...getOverrideProps(overrides, "servici")}
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
          isDisabled={!(idProp || cLIENTES)}
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
              !(idProp || cLIENTES) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
