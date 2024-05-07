import { SlArrowDown, SlArrowLeft } from "react-icons/sl";
import styles from "./TopItem.module.scss";
import { IoIosNotificationsOutline } from "react-icons/io";
import LH from "/LH.png";

export const TopItem = () => {
  return (
    <div className={styles.container_top_item}>
      <div className={styles.top_item_backward_title}>
        <a href="#">
          <SlArrowLeft />
        </a>
        <div className={styles.top_item_backward_title_container}>
          <h3 className={styles.top_item_title}>Предварительный расчет</h3>
          <p className={styles.top_item_backward}>Назад</p>
        </div>
      </div>
      <div className={styles.top_item_user_content}>
        <a className={styles.top_item_user_content_language} href="#">ru</a>
        <a className={styles.top_item_user_content_notification} href="#"><IoIosNotificationsOutline /></a>
        <div className={styles.top_item_user_content_container}>
            <img className={styles.top_item_user_content_img} src={LH} alt="LH" />
            <p className={styles.top_item_user_content_name_text}>Лучший Человек</p>
            <a className={styles.top_item_user_content_button} href="#"><SlArrowDown /></a>
        </div>
      </div>
    </div>
  );
};
