import React from 'react';

import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import type { InputProps } from '@chakra-ui/react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import { EyeIcon } from 'public/assets/svg/eye-icon';
import { EyeOffIcon } from 'public/assets/svg/eye-off-icon';

import { FieldWrapper } from '../field-wrapper';
import type { FieldWrapperProps } from '../field-wrapper';

export interface CustomInputProps extends InputProps, FieldWrapperProps {
  registration?: Partial<UseFormRegisterReturn>;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  showRightIcon?: boolean;
  onClickRightIcon?: () => void;
}

export const InputComponent = React.forwardRef<HTMLInputElement, CustomInputProps>((props, ref) => {
  const {
    labelProps,
    controlProps,
    errorMessageProps,
    registration,
    error,
    label,
    leftIcon,
    type = 'text',
    ...inputProps
  } = props;

  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  function renderType() {
    if (type === 'password' && show) {
      return 'text';
    }

    return type;
  }

  return (
    <FieldWrapper
      labelProps={labelProps}
      controlProps={{ ...controlProps, isRequired: inputProps.isRequired }}
      errorMessageProps={errorMessageProps}
      error={error}
      label={label}
    >
      <InputGroup>
        {leftIcon && (
          <InputLeftElement pointerEvents="none" alignSelf="center" display="flex" pt="5px">
            {leftIcon}
          </InputLeftElement>
        )}
        <Input
          ref={ref}
          type={renderType()}
          size="lg"
          focusBorderColor="primary"
          maxLength={255}
          _disabled={{
            opacity: 0.8,
          }}
          {...inputProps}
          {...registration}
        />
        {type === 'password' && (
          <InputRightElement width="24px" h="full" pr="20px" cursor="pointer">
            <Icon onClick={handleClick}>{show ? <EyeOffIcon /> : <EyeIcon />}</Icon>
          </InputRightElement>
        )}
      </InputGroup>
    </FieldWrapper>
  );
});
