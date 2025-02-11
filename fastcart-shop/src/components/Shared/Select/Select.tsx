import { useState, useRef } from "react";
import { useClickOutsideDropdown } from "../../../hooks/useClickOutsideDropdown";
import { Option, SelectProps } from "../../../types/select/select";
import SelectDropdown from "./SelectDropdown";
import SelectedOption from "./SelectedOption";
import styles from "./Select.module.scss";

const Select = ({
  data,
  isVerticalLine = false,
  color = "white",
  arrowStyles,
  onChange,
}: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<Option>(data[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutsideDropdown(dropdownRef, setIsOpen);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.selectContainer} ref={dropdownRef}>
      <div
        className={styles.selectBox}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          color: color,
          borderRight: isVerticalLine
            ? "2px solid rgba(255,255,255,0.3)"
            : "none",
        }}
      >
        <SelectedOption
          color={color}
          selectedOption={selectedOption}
          arrowStyles={arrowStyles}
        />

        {isOpen && <SelectDropdown data={data} handleSelect={handleSelect} />}
      </div>
    </div>
  );
};

export default Select;
