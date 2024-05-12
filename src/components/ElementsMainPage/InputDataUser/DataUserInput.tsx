import { SetStateAction, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import Modal from "react-modal";
import styles from "./DataUserInput.module.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const DataUserInput = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState("Введите имя и фамилию");
  const [userIIN, setUserIIN] = useState("Введите ИИН");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    closeModal();
  };

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setUserName(event.target.value);
  };

  const handleChangeIIN = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setUserIIN(event.target.value);
  };

  return (
    <div className={styles.container_data_user_input}>
      <div className={styles.data_user_input_item}>
        <div className={styles.data_user_input_item_text}>
          <h3>{userName}</h3>
          <p>ИИН: {userIIN}</p>
        </div>
        <button className={styles.data_user_input_item_button} onClick={openModal}>
          <BiEditAlt />
        </button>
      </div>

      <Modal
        style={customStyles}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Редактировать данные"
      >
        <h2>Редактировать данные</h2>
        <input type="text" value={userName} onChange={handleChange} />
        <input type="text" value={userIIN} onChange={handleChangeIIN} />
        <button onClick={handleSave}>Сохранить</button>
        <button onClick={closeModal}>Отмена</button>
      </Modal>
    </div>
  );
};
