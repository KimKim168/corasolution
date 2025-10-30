import { Checkbox } from "@/components/ui/checkbox";
import { Beer, IceCreamBowl, Pizza, Sandwich } from "lucide-react";

const Deliverys = [
  {
    name: "Telegram",
    label: "Telegram",
    defaultChecked: true,
  },
  {
    name: "Phone Call",
    label: "Phone Call",

  },
];

export default function CheckBoxContact() {
  return (
    <div className="mt-2 flex flex-col items-start gap-4">
      {Deliverys.map(({ name, label, defaultChecked }) => (
        <div key={name} className="flex items-center gap-4">
          <Checkbox defaultChecked={defaultChecked} id={`${name}-vertical`} />
          <label
            htmlFor={`${name}-vertical`}
            className="flex items-center gap-2 text-[15px] font-manrope-regular leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        </div>
      ))}
    </div>
  );
}
