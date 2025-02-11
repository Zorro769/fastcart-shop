import styles from "./Select.module.scss"
import { Option } from "../../../types/select/select";

type Props = {
    data: Option[];
    handleSelect: (arg: Option) => void;
};

const SelectDropdown = ({data, handleSelect}: Props) => {
  return (
    <ul className={styles.language_dropdown}>
      {data.map((option) => (
        <li key={option.code} onClick={() => handleSelect(option)}>
          {option.imageUrl && (
            <img src={option.imageUrl} alt={`${option.name} flag`} />
          )}
          {option.name}
        </li>
      ))}
    </ul>
  );
};

export default SelectDropdown;
