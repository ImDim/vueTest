import * as constants from '@/constants'

// Sync with local storage.
if (localStorage.getItem(constants.STORAGE_KEY)) {
  const syncedState = JSON.parse(localStorage.getItem(constants.STORAGE_KEY))

}

// LocalStorage plugin.
const localStoragePlugin = store => {
  store.subscribe((mutation, state) => {
    const syncedData = {

    };

    localStorage.setItem(constants.STORAGE_KEY, JSON.stringify(syncedData))

    if (mutation.type === 'common/clear') {
      localStorage.removeItem(constants.STORAGE_KEY)
    }
  })
}

export { localStoragePlugin }
