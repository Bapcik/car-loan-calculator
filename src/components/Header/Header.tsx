import logo from "/logo_allur_write.svg";
import { CiGrid41 } from "react-icons/ci";
import { AiFillCar } from "react-icons/ai";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { AiOutlineShop } from "react-icons/ai";
import { AiOutlineCarryOut } from "react-icons/ai";
import { AiFillDingtalkCircle } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.container_header}>
      <div>
        <img className={styles.header_img_logo} src={logo} alt="logo_allur" />
        <a href="#" className={styles.header_link_main}>
          <div className={styles.header_text_main}>Главная</div>
          <CiGrid41 className={styles.header_icon_main} />
        </a>

        <div className={styles.header_item_link_container}>
          <div className={styles.header_item_link}>
            <a className={styles.header_link} href="#">
              <AiFillCar className={styles.header_item_link_icon}/> Автокредитование
            </a>
          </div>
          <div className={styles.header_item_link}>
            <a className={styles.header_link} href="#">
              <AiOutlineSafetyCertificate className={styles.header_item_link_icon}/>
              Страхование
            </a>
          </div>
          <div className={styles.header_item_link}>
            <a className={styles.header_link} href="#">
              <AiOutlineShop className={styles.header_item_link_icon}/>
              POS-кредитование
            </a>
          </div>
          <div className={styles.header_item_link}>
            <a className={styles.header_link} href="#">
              <AiOutlineCarryOut className={styles.header_item_link_icon}/>
              Урегулирование
            </a>
          </div>
          <div className={styles.header_item_link}>
            <a className={styles.header_link} href="#">
              <AiFillDingtalkCircle className={styles.header_item_link_icon}/>
              Лизинг
            </a>
          </div>
          <div className={styles.header_item_link}>
            <a className={styles.header_link} href="#">
              <AiOutlineTeam className={styles.header_item_link_icon}/>
              Клиенты
            </a>
          </div>
          <div className={styles.header_item_link}>
            <a className={styles.header_link} href="#">
              <AiOutlineFileText className={styles.header_item_link_icon}/>
              Отчеты
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.header_item_link}>
          <a className={styles.header_link} href="#">
            <AiFillQuestionCircle className={styles.header_item_link_icon}/>
            Поддержка
          </a>
        </div>
        <div className={styles.header_item_link}>
          <a className={styles.header_link} href="#">
            <AiFillSetting className={styles.header_item_link_icon}/>
            Настройки
          </a>
        </div>
      </div>
    </div>
  );
};
