import React from "react";

export default function user(
  req: { cookies: { auth: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { message: string }): void; new (): any };
    };
  }
) {
  const { auth } = req.cookies;

  if (!auth) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  res.status(200).json({ message: "Success" });
}
