import { DataUserInput } from "../../ElementsMainPage/InputDataUser/DataUserInput";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={styles.container_main_page}>
      <DataUserInput />
    </div>
  );
};
