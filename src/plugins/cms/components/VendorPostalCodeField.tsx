
interface VendorPostalCodeFieldProps {
    value: string;
    onChange: (value: string) => void;
}

export function VendorPostalCodeField({ value, onChange }: VendorPostalCodeFieldProps) {

    console.log("Minut ajettiin")
    return (
        <div className="flex items-center space-x-2">
            <input
                type="text"
                value={value || ''}
                onChange={e => onChange(e.target.value)}
                className="flex-1"
                placeholder="Postinumero"
            />
        </div>
    );
}
