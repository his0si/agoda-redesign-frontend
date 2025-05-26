export type ModalHandler = () => void;

export interface ReviewModalHandlers {
  handleWriteRevOpen: ModalHandler;
  handleModifyRevOpen: ModalHandler;
}

export type handleWriteRevOpenType = {
  handleWriteRevOpen: () => void;
};

export type handleModalCloseType = {
  handleModalClose: () => void;
};
