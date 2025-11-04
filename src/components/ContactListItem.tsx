import * as React from "react";

import { type Icon } from "lucide-react";

type ContactListItemProps = {
  link: string;
  IconComponent: typeof Icon;
  colors: string;
  text: string;
};

export const ContactListItem: React.FC<ContactListItemProps> = ({
  IconComponent,
  link,
  colors,
  text,
}) => {
  return (
    <li>
      <a href={link}>
        <span
          className={`flex items-center gap-2 ${colors} transition-colors duration-300`}
        >
          <IconComponent />
          <span className="text-xl"> {text} </span>
        </span>
      </a>
    </li>
  );
};
