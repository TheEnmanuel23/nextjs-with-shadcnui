import { useState } from "react";

export function Sidebar({ children }: { children: React.ReactNode }) {
  const data = useState(false);
  console.log(data);
  return (
    <div>
      <p>bar</p>
      <p>{children}</p>
    </div>
  );
}
