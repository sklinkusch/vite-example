import { ChangeEvent, SetStateAction } from "react";
import styles from "./Form.module.css";

type Props = {
  name: string;
  setName: React.Dispatch<SetStateAction<string>>;
  date: string;
  setDate: React.Dispatch<SetStateAction<string>>;
};

const Form = ({ name, setName, date, setDate }: Props) => {
  const assignNewName = (event: ChangeEvent<HTMLInputElement>) => {
    if (event && event.target && event.target.value) {
      setName(event.target.value);
    } else {
      setName("");
    }
  };
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <div className={styles.formElement}>
          <label htmlFor="name" className={styles.formLabel}>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={name}
            onChange={(e) => assignNewName(e)}
            className={styles.formInput}
          />
        </div>
        <div className={styles.formElement}>
          <label htmlFor="date" className={styles.formLabel}>
            Birthday
          </label>
          <input
            type="date"
            name="date"
            id="date"
            defaultValue={date}
            onChange={(e) => setDate(e.currentTarget.value)}
            className={styles.formInput}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
