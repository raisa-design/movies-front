import React, { useState } from "react";
import { Menu } from "lucide-react";
import arrow from "../../assets/ArrowDown.png";
import "./styles.css";

interface DropdownItem {
  icon: React.ReactNode;
  text: string;
  action: () => void;
}

interface ProfileDropdownProps {
  items: DropdownItem[];
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-dropdown-container">
      <button className="profile-dropdown-toggle" onClick={toggleDropdown}>
        <Menu className="menu-icon" />
        <img src={arrow} alt="Dropdown" className="dropdown-icon" />
      </button>

      {isOpen && (
        <div className="profile-dropdown-menu">
          {items.map((item, index) => (
            <button
              key={index}
              className="profile-dropdown-item"
              onClick={() => {
                item.action();
                setIsOpen(false);
              }}
            >
              {item.icon}
              <span>{item.text}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
