import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalIsOpen, setIsNewTransactionModalIsOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalIsOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalIsOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalIsOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
    </>
  );
}
