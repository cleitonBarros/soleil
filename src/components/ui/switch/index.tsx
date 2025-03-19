import { motion } from "framer-motion";

interface SwitchProps {
  type?: "deafult" | "icon";
  enabled: boolean;
  onChange: (value: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({
  enabled,
  onChange,
  type = "default",
}) => {
  return (
    <label className="relative flex cursor-pointer items-center">
      <input
        type="checkbox"
        checked={enabled}
        onChange={() => onChange(!enabled)}
        className="sr-only"
      />
      <div
        className={`flex h-7 w-12 items-center rounded-full p-1 transition-colors duration-300 ${
          enabled ? "bg-stone-100" : "bg-stone-950 fill-stone-100"
        }`}
      >
        <motion.div
          className={`h-5 w-5 rounded-full ${type === "icon" && (enabled ? "bg-day" : "bg-night")} bg-stone-100 shadow-md dark:bg-stone-950`}
          layout
          initial={false}
          animate={{ x: enabled ? 20 : 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      </div>
    </label>
  );
};

export default Switch;
