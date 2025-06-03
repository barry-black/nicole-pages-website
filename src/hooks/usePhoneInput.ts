import { useState, useRef } from "react";

export function usePhoneInput() {
    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const format = (digits: string) =>
        digits
            .replace(/\D/g, "")
            .slice(0, 10)
            .replace(/(\d{2})(?=\d)/g, "$1 ")
            .trim();

    const getCursorPositionAfterFormat = (digitPos: number, formatted: string) => {
        let digitsSeen = 0;
        for (let i = 0; i < formatted.length; i++) {
            if (/\d/.test(formatted[i])) {
                if (digitsSeen === digitPos) return i;
                digitsSeen++;
            }
        }
        return formatted.length;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // autorise la sélection et collage
        const raw = e.target.value;
        const formatted = format(raw);
        setValue(formatted);
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("Text");
        const formatted = format(pasted);
        setValue(formatted);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const input = e.currentTarget;
        const selectionStart = input.selectionStart ?? 0;
        const selectionEnd = input.selectionEnd ?? 0;
        const digits = value.replace(/\D/g, "");

        // nombre de chiffres avant le curseur
        let digitIndex = 0;
        for (let i = 0; i < selectionStart; i++) {
            if (/\d/.test(value[i])) digitIndex++;
        }

        if (e.key === "ArrowLeft") {
            setTimeout(() => {
                const pos = input.selectionStart ?? 0;
                if (value[pos - 1] === " ") {
                    input.setSelectionRange(pos - 1, pos - 1);
                }
            }, 0);
            return;
        }

        if (e.key === "ArrowRight") {
            setTimeout(() => {
                const pos = input.selectionStart ?? 0;
                if (value[pos] === " ") {
                    input.setSelectionRange(pos + 1, pos + 1);
                }
            }, 0);
            return;
        }

        if (/^\d$/.test(e.key)) {
            e.preventDefault();

            const newDigits = digits.split("");
            if (selectionStart !== selectionEnd) {
                // remplacer la sélection par une seule valeur
                const leftDigits = value
                    .slice(0, selectionStart)
                    .replace(/\D/g, "")
                    .length;
                const rightDigits = digits.length - value.slice(selectionEnd).replace(/\D/g, "").length;

                newDigits.splice(leftDigits, rightDigits - leftDigits, e.key);
                digitIndex = leftDigits;
            } else {
                newDigits[digitIndex] = e.key;
            }

            const formatted = format(newDigits.join(""));
            setValue(formatted);

            setTimeout(() => {
                const newPos = getCursorPositionAfterFormat(digitIndex + 1, formatted);
                input.setSelectionRange(newPos, newPos);
            }, 0);
        }
    };

    return {
        value,
        setValue,
        inputProps: {
            ref: inputRef,
            value,
            required: true,
            inputMode: "numeric" as const,
            type: "tel",
            name: "telephone",
            autoComplete: "tel",
            className: "border p-3 rounded md:col-span-2",
            onFocus: () => setIsFocused(true),
            onBlur: () => setIsFocused(false),
            placeholder: isFocused && value === "" ? "00 00 00 00 00" : "Téléphone",
            onChange: handleChange,
            onKeyDown: handleKeyDown,
            onPaste: handlePaste,
        },
    };
}
