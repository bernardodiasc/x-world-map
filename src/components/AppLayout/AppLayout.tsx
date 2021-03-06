import { useState } from 'react'

import useAppContext from '@contexts/App'

import AppHeader from '@components/AppHeader'
import Modal from '@components/generic/Modal'
import JoinScreen from '@components/JoinScreen'
import ProfileForm from '@containers/ProfileForm'
import LocationsManager from '@components/LocationsManager'
import EventsManager from '@containers/EventsManager'
import FrequentlyAskedQuestions from '@components/FrequentlyAskedQuestions'
import InfoPanel from '@components/InfoPanel'
import ConfirmationDialog from '@components/generic/ConfirmationDialog'

import { MODAL_IDS } from '@lib/constants'

import styles from './AppLayout.module.css'

type Props = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: Props): JSX.Element => {
  const {
    state: { visibleModal, shouldModalBeClosable },
    actions: { setVisibleModal },
  } = useAppContext()
  const [discardConfirmationVisibility, toggleDiscardConfirmationVisibility] = useState(false)
  const [hasUnsavedChanges, toggleHasUnsavedChanges] = useState(false)
  const [anotherModalVisibility, toggleAnotherModalVisibility] = useState(false)

  const handleDiscardConfirmation = () => {
    toggleDiscardConfirmationVisibility(false)
    toggleHasUnsavedChanges(false)
    anotherModalVisibility
      ? toggleAnotherModalVisibility(false)
      : setVisibleModal()
  }

  const handleCancelDiscardConfirmation = () => {
    toggleDiscardConfirmationVisibility(false)
  }

  const handleCloseModal = () => {
    if (hasUnsavedChanges) {
      toggleDiscardConfirmationVisibility(true)
    } else {
      anotherModalVisibility
        ? toggleAnotherModalVisibility(false)
        : setVisibleModal()
    }
  }

  const modalContents = {
    [MODAL_IDS.JOIN_SCREEN]: (
      <JoinScreen
        toggleHasUnsavedChanges={toggleHasUnsavedChanges}
      />
    ),
    [MODAL_IDS.PROFILE_FORM]: (
      <ProfileForm
        toggleHasUnsavedChanges={toggleHasUnsavedChanges}
      />
    ),
    [MODAL_IDS.LOCATIONS_MANAGER]: (
      <LocationsManager
        toggleHasUnsavedChanges={toggleHasUnsavedChanges}
      />
    ),
    [MODAL_IDS.EVENTS_MANAGER]: (
      <EventsManager
        handleCloseModal={handleCloseModal}
        anotherModalVisibility={anotherModalVisibility}
        toggleAnotherModalVisibility={toggleAnotherModalVisibility}
        toggleHasUnsavedChanges={toggleHasUnsavedChanges}
      />
    ),
    [MODAL_IDS.FAQ]: <FrequentlyAskedQuestions />,
  }

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <AppHeader />
      </div>
      <div className={styles.children}>
        {children}
      </div>
      {discardConfirmationVisibility && (
        <Modal defaultWidth={false}>
          <ConfirmationDialog
            title="Attention!"
            message="Are you sure you want to discard unsave changes?"
            onCancel={handleCancelDiscardConfirmation}
            onConfirm={handleDiscardConfirmation}
          />
        </Modal>
      )}
      {visibleModal && (
        <Modal onClose={shouldModalBeClosable && handleCloseModal}>
          {modalContents[visibleModal]}
        </Modal>
      )}
      <InfoPanel />
    </main>
  )
}

export default AppLayout
