import './Select.css'

interface ISelectProps {
  options: string[] | number[]
  value: string
  onChange: (value: string) => void
}

export const Select: React.FC<ISelectProps> = ({
  options,
  value,
  onChange
}) => {
  return (
    <div className="select-wrapper">
      <select
        className="select"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}
