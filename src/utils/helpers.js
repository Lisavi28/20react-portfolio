export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function formatTitle(title) {
  const titleArray = title.split('-');
  const newTitleArray = []

  for (let i = 0; i < titleArray.length; i++) {
    newTitleArray.push(capitalizeFirstLetter(titleArray[i]))
  }

  const formattedTitle = newTitleArray.join(' ');

  return formattedTitle;
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}