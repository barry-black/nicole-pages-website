import { useState, useRef } from "react";

export function usePhoneInput() {
    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const format = (digits: string) =>
        digits
            .slice(0, 10)
            .replace(/(\d{2})(?=\d)/g, "$1 ")
            .trim();

    const getCursorPositionAfterFormat = (digitPos: number, formatted: string) => {
        let digitsSeen = 0;
        for (let i = 0; i < formatted.length; i++) {
            if (/\d/.test(formatted[i])) {
                if (digitsSeen === digitPos) {
                    return i;
                }
                digitsSeen++;
            }
        }
        return formatted.length;
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const input = e.currentTarget;
        const selectionStart = input.selectionStart ?? 0;
        const digits = value.replace(/\D/g, "");

        // Calcul du nombre de chiffres avant la position actuelle
        const digitIndex = (() => {
            let count = 0;
            for (let i = 0; i < selectionStart; i++) {
                if (/\d/.test(value[i])) count++;
            }
            return count;
        })();

        // Gérer ←
        if (e.key === "ArrowLeft") {
            setTimeout(() => {
                const pos = input.selectionStart ?? 0;
                if (value[pos] === " ") {
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

        // Gérer saisie de chiffre
        if (/^\d$/.test(e.key)) {
            e.preventDefault();
            const newDigits = digits.split("");

            if (digitIndex < 10) {
                newDigits[digitIndex] = e.key;
            } else if (newDigits.length < 10) {
                newDigits.push(e.key);
            }

            while (newDigits.length < 10) {
                newDigits.push(" ");
            }

            const newFormatted = format(newDigits.join(""));
            setValue(newFormatted);

            setTimeout(() => {
                const newPos = getCursorPositionAfterFormat(digitIndex + 1, newFormatted);
                input.setSelectionRange(newPos, newPos);
            }, 0);
            return;
        }

        // Bloquer tout le reste sauf certaines touches
        const allowed = ["Backspace", "Delete", "Tab"];
        if (!allowed.includes(e.key)) {
            e.preventDefault();
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
            className: "border p-3 rounded md:col-span-2",
            onFocus: () => setIsFocused(true),
            onBlur: () => setIsFocused(false),
            placeholder: isFocused && value === "" ? "00 00 00 00 00" : "Téléphone",
            onChange: () => { }, // tout est géré dans onKeyDown
            onKeyDown: handleKeyDown,
        },
    };
}
