import { InputHTMLAttributes } from "react";
import { Control, Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import styles from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: string;
  control: Control;
  fieldName: string;
  name: string;
  error?: string;
  required?: boolean;
	placeholder?: string
}

export function Input({
  mask,
  control,
  error,
  fieldName,
  name,
  required,
	placeholder,
  ...rest
}: InputProps) {
  return (
    <>
      <Controller
        name={fieldName}
        render={({ field: { onChange, value, onBlur, ref } }) => (
          <div className={!error ? styles.container : styles['container-required']}>            
            {mask ? (
              <InputMask
                mask={mask}
                onBlur={onBlur}
                onChange={onChange}
                inputRef={ref}
								placeholder={placeholder}
              />
            ) : (
              <input
                value={value}
                onChange={onChange}
                onBlur={onBlur}
								placeholder={placeholder}
                {...rest}
                ref={ref}
              />
            )}
            <p style={error ? {} : { visibility: "hidden" }}>
              {error ? error : "*"}
            </p>
          </div>
        )}
        control={control}
      />
    </>
  );
}
