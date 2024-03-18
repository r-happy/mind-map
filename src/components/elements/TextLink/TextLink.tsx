import Link from "next/link";
import clsx from "clsx";

import * as s from "./text_link.css";

interface TextLink_Props {
  href: string;
  children: string;
  blank: boolean;
}

export const TextLink = (p: TextLink_Props) => {
  return (
    <Link
      href={p.href}
      target={p.blank ? "_blank" : ""}
      className={clsx(s.main)}
    >
      <p>{p.children}</p>
    </Link>
  );
};
