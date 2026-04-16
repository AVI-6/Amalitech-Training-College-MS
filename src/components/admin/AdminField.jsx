import React from 'react';

function AdminField({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  options = [],
  readOnly = false,
  disabled = false,
  className = '',
  rows = 4,
}) {
  const fieldClassName = `admin-field ${className}`.trim();

  return (
    <div className={fieldClassName}>
      <label htmlFor={id}>{label}</label>
      {type === 'select' ? (
        <select id={id} name={id} value={value} onChange={onChange} disabled={disabled}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : null}
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
        />
      ) : null}
      {type !== 'select' && type !== 'textarea' ? (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          disabled={disabled}
        />
      ) : null}
    </div>
  );
}

export default AdminField;
