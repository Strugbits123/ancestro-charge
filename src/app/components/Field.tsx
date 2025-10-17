interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  hint?: string;
}

function Field({ label, value, onChange, error, hint }: FieldProps) {
  return (
    <div className="flex flex-col font-lato text-[14px] font-bold">
      {/* Label and hint in one row */}
      <div className="flex items-center gap-2 mb-1">
        <label className="text-[12px] text-white">{label}</label>
        {hint && <span className="text-[11.2px] text-white italic">{hint}</span>}
      </div>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`bg-transparent outline-none py-1 border-b ${
          error ? "border-red-500" : "border-[rgba(255,255,255,0.3)]"
        } text-white`}
      />
      {error && <span className="text-[12px] text-red-500 mt-1">{error}</span>}
    </div>
  );
}

export default Field;