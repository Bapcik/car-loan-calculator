import { DataUserInput } from "../../ElementsMainPage/InputDataUser/DataUserInput";
import { PhoneNumberInput } from "../../ElementsMainPage/InputPhoneNumber/PhoneNumberInput";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={styles.container_main_page}>
      <DataUserInput />
      <PhoneNumberInput />
    </div>
  );
};
