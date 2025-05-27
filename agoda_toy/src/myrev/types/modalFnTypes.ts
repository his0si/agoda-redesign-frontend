export type ModalHandler = () => void;

export interface ReviewModalHandlers {
  handleWriteRevOpen: ModalHandler;
  handleModifyRevOpen: ModalHandler;
}

export type handleWriteRevOpenType = {
  handleWriteRevOpen: () => void;
};

export type handleModifyRevOpenType = {
  handleModifyRevOpen: () => void;
};

export type MyRevCardText = handleModifyRevOpenType & handleWriteRevOpenType;

export type handleModalCloseType = {
  handleModalClose: () => void;
};
