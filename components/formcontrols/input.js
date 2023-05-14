export default function Input({
  label,
  name,
  onInputChange,
  id,
  value,
  errors,
}) {
  console.log(errors);
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input
        type="text"
        placeholder={label}
        id={id}
        name={name}
        value={value}
        className="form-control"
        onChange={onInputChange}
      />
      {errors}
    </div>
  );
}
