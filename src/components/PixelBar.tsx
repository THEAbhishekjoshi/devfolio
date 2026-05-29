type PixelBarProps = {
    label: string;
    value: number;
};

export default function PixelBar({
    label,
    value,
}: PixelBarProps) {
    const blocks = 12;
    const filled = Math.round(value / 12);

    return (
        <div className="mb-5 font-press">
            <div className="flex justify-between text-xs mb-2">
                <span>{label}</span>
                <span>{value}%</span>
            </div>

            <div className="flex gap-2">
                {Array.from({ length: blocks }).map((_, i) => (
                    <div
                        key={i}
                        className={`
              h-4
              w-4
              pixel-box
              transition-all
              duration-300
              ${i < filled
                                ? "bg-yellow-300"
                                : "bg-white/10"}
            `}
                    />
                ))}
            </div>
        </div>
    );
}