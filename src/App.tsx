import { useState } from 'react';
import Modal from 'react-modal';

import { TransactionsProvider } from './hooks/useTransactions';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalIsOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
