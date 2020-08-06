// If the application has new content let the user know to update the site with the new content
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`,
  )
  if (answer === true) {
    window.location.reload()
  }
}
