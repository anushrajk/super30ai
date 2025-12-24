import { useState, useCallback } from 'react';
import { validateEmail, validatePhone, validateName, validateUrl } from '@/lib/validation';

export interface ValidationErrors {
  [key: string]: string | undefined;
}

export interface TouchedFields {
  [key: string]: boolean;
}

interface UsePopupValidationReturn {
  errors: ValidationErrors;
  touched: TouchedFields;
  setFieldTouched: (field: string) => void;
  validateField: (field: string, value: string, rules: ValidationRule) => string | undefined;
  validateAllFields: (fields: Record<string, string>, rules: Record<string, ValidationRule>) => boolean;
  clearErrors: () => void;
  getInputClassName: (field: string, baseClass: string) => string;
}

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  type?: 'email' | 'phone' | 'url' | 'name' | 'select';
}

export const usePopupValidation = (): UsePopupValidationReturn => {
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});

  const setFieldTouched = useCallback((field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  }, []);

  const validateField = useCallback((field: string, value: string, rules: ValidationRule): string | undefined => {
    // Required check
    if (rules.required && !value.trim()) {
      const error = 'This field is required';
      setErrors(prev => ({ ...prev, [field]: error }));
      return error;
    }

    // Skip further validation if empty and not required
    if (!value.trim()) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
      return undefined;
    }

    // Type-specific validation
    let error: string | undefined;

    switch (rules.type) {
      case 'email':
        if (!validateEmail(value)) {
          error = 'Please enter a valid email';
        }
        break;
      case 'phone':
        if (!validatePhone(value)) {
          error = 'Enter 10 digit number starting with 6, 7, 8, or 9';
        }
        break;
      case 'url':
        if (!validateUrl(value)) {
          error = 'Please enter a valid URL';
        }
        break;
      case 'name':
        if (!validateName(value)) {
          error = 'Name must be at least 2 characters';
        }
        break;
      case 'select':
        if (!value) {
          error = 'Please select an option';
        }
        break;
    }

    // Min length check
    if (!error && rules.minLength && value.trim().length < rules.minLength) {
      error = `Must be at least ${rules.minLength} characters`;
    }

    setErrors(prev => ({ ...prev, [field]: error }));
    return error;
  }, []);

  const validateAllFields = useCallback((
    fields: Record<string, string>, 
    rules: Record<string, ValidationRule>
  ): boolean => {
    let isValid = true;
    const newErrors: ValidationErrors = {};
    const newTouched: TouchedFields = {};

    Object.entries(rules).forEach(([field, rule]) => {
      newTouched[field] = true;
      const value = fields[field] || '';
      
      // Required check
      if (rule.required && !value.trim()) {
        newErrors[field] = 'This field is required';
        isValid = false;
        return;
      }

      if (!value.trim()) return;

      // Type validation
      switch (rule.type) {
        case 'email':
          if (!validateEmail(value)) {
            newErrors[field] = 'Please enter a valid email';
            isValid = false;
          }
          break;
        case 'phone':
          if (!validatePhone(value)) {
            newErrors[field] = 'Enter 10 digit number starting with 6, 7, 8, or 9';
            isValid = false;
          }
          break;
        case 'url':
          if (!validateUrl(value)) {
            newErrors[field] = 'Please enter a valid URL';
            isValid = false;
          }
          break;
        case 'name':
          if (!validateName(value)) {
            newErrors[field] = 'Name must be at least 2 characters';
            isValid = false;
          }
          break;
        case 'select':
          if (!value) {
            newErrors[field] = 'Please select an option';
            isValid = false;
          }
          break;
      }

      // Min length
      if (!newErrors[field] && rule.minLength && value.trim().length < rule.minLength) {
        newErrors[field] = `Must be at least ${rule.minLength} characters`;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched(newTouched);
    return isValid;
  }, []);

  const clearErrors = useCallback(() => {
    setErrors({});
    setTouched({});
  }, []);

  const getInputClassName = useCallback((field: string, baseClass: string): string => {
    const hasError = errors[field] && touched[field];
    return hasError 
      ? `${baseClass} ring-2 ring-destructive/50 bg-destructive/5` 
      : baseClass;
  }, [errors, touched]);

  return {
    errors,
    touched,
    setFieldTouched,
    validateField,
    validateAllFields,
    clearErrors,
    getInputClassName,
  };
};
