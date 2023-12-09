import { ChangeEvent, SetStateAction } from "react";

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
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={name}
            onChange={(e) => assignNewName(e)}
          />
        </div>
        <div>
          <label htmlFor="date">Birthday</label>
          <input
            type="date"
            name="date"
            id="date"
            defaultValue={date}
            onChange={(e) => setDate(e.currentTarget.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
