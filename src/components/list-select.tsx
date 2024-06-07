'use client'

interface PropSelectOption {
  id: string,
  label: string
}

interface ListSelectProps {
  selectOptions: Array<PropSelectOption>,
  name: string,
  onSelect: (arg: string) => void
}

export default function ListSelect ({ selectOptions, name, onSelect }: ListSelectProps) {
  const handleOnSelectOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelect(event.target.value)
  }

  return (
    <div>
      {
        selectOptions.map((option) => (
          <div
            key={option.id}
            className="grid gap-4"
          >
            <label
              htmlFor={option.id}
              className="block w-full p-5 bg-cyan-900 border border-amber-50 rounded-2xl text-body font-medium"
            >
              {option.label}
            </label>

            <input
              type="radio"
              id={option.id}
              name={name}
              value={option.id}
              className="block w-full appearance-none"
              onChange={handleOnSelectOption}
            />
          </div>
        ))
      }
    </div>
  )
}
