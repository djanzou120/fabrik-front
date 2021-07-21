import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ConsoleLog = () => {
  const Console = dynamic(import("console-feed/lib/Component"));

  const [logs, setLogs] = useState([]);

  // run once!
  useEffect(() => {
    const startConsole = async () => {
      const Hook = (await import("console-feed")).Hook;
      const Unhook = (await import("console-feed")).Unhook;
      Hook(
        window.console,
        (log) => setLogs((currLogs) => [...currLogs, log]),
        false
      );
      // @ts-ignore
      return () => Unhook(window.console);
    };

    startConsole();
  }, []);

  return (
    <div style={{ backgroundColor: "#242424" }}>
      <Console logs={logs} variant="dark" />
    </div>
  );
};

export default ConsoleLog;
