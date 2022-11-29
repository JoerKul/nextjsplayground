import { serialize } from "cookie";
import React from "react";

export default function logout(req: any, res: any) {
  const { auth } = req.cookies;

  if (!auth) {
    return res.status(401).json({ message: "Not authenticated" });
  } else {
    res.setHeader(
      "Set-Cookie",
      serialize("auth", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: -1,
        path: "/",
      })
    );
    res.status(200).json({ message: "Successfuly logged out!" });
  }
}
