import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";

function ThemeSwitch() {
  const { setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) {
      setTheme("dark");
    } else {
      setTheme("lights");
    }
  }, [enabled]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex items-center h-6 rounded-full w-11  cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full transition ease-in-out duration-200`}
      />
    </Switch>
  );
}

export default ThemeSwitch;
