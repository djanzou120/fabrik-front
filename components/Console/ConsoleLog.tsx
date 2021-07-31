import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ConsoleLog = () => {
  const Console = dynamic(import("console-feed/lib/Component"));

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setLogs(json));
  }, []);

  return (
    <div
      className="h-80 overflow-auto rounded-xl"
      style={{ backgroundColor: "#242424" }}
    >
      <Console
        logs={[
          {
            id: "result",
            method: "log",
            data: [logs],
          },
        ]}
        variant="dark"
      />
    </div>
  );
};

export default ConsoleLog;
