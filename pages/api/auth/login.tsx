import React from "react";
import { Secret, sign } from "jsonwebtoken";
import { serialize } from "cookie";

const secret = process.env.SECRET;

export default function login(
  req: any,
  res: {
    [x: string]: any;
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { message: string }): any; new (): any };
    };
  }
) {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
        username: username,
      },
      secret as Secret
    );

    const serializedCookie = serialize("auth", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    res.setHeader("Set-Cookie", serializedCookie);
    res.status(200).json({ message: "Success" });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
}
