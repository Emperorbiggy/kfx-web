/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useForm,
  UseFormProps,
  FieldValues,
  SubmitHandler,
  Path,
  get,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

/**
 * useCustomForm Hook
 * A reusable hook for managing forms with React Hook Form and Zod validation.
 *
 * @param {Object} options - Configuration options for the form.
 * @param {Object} options.defaultValues - The default values for the form fields.
 * @param {Object} options.validationSchema - Zod validation schema for the form.
 * @param {Function} options.onSubmit - Callback function for form submission.
 * @param {string} options.mode - Validation mode (onBlur, onChange, onSubmit, etc.)
 * @returns {Object} - React Hook Form methods and helper functions.
 */
interface UseCustomFormProps<T extends FieldValues>
  extends Omit<UseFormProps<T>, "resolver"> {
  validationSchema?: z.ZodSchema<T>;
  onSubmit: SubmitHandler<T>;
}

const useCustomForm = <T extends FieldValues>({
  defaultValues,
  validationSchema,
  onSubmit,
  mode = "onBlur",
  ...options
}: UseCustomFormProps<T>) => {
  const form = useForm<T>({
    defaultValues,
    resolver: validationSchema ? zodResolver(validationSchema) : undefined,
    mode,
    ...options,
  });

  const {
    handleSubmit,
    formState: { errors, touchedFields, isSubmitting },
    getFieldState,
    control,
    ...rest
  } = form;

  // Helper functions using React Hook Form's built-in utilities
  const isFieldInvalid = (field: Path<T>) => {
    const fieldState = getFieldState(field, form.formState);
    return fieldState.isTouched && fieldState.invalid;
  };

  const getFieldError = (field: Path<T>) => {
    const fieldState = getFieldState(field, form.formState);
    return fieldState.isTouched && fieldState.error
      ? fieldState.error.message || ""
      : "";
  };

  // Alternative helper functions using get utility
  const isFieldInvalidAlt = (fieldName: string) => {
    return get(touchedFields, fieldName) && !!get(errors, fieldName);
  };

  const getFieldErrorAlt = (fieldName: string) => {
    const isTouched = get(touchedFields, fieldName);
    const error = get(errors, fieldName);
    return isTouched && error ? error.message || "" : "";
  };

  return {
    // Return the complete form object for compatibility with Form components
    form,
    control,
    isSubmitting,
    // Override handleSubmit to use our onSubmit handler
    handleSubmit: handleSubmit(onSubmit),
    // Custom helper functions
    isFieldInvalid,
    getFieldError,
    // Alternative helpers (use these if you prefer string field names)
    isFieldInvalidAlt,
    getFieldErrorAlt,
  };
};

export default useCustomForm;
