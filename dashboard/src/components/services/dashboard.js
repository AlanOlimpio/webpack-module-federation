export function getDashboardList() {
  const dashboardPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: 'Card Title 1',
          subtitle: 'Card Subtitle 1',
          text: 'Some quick example text to build on the card title and make up the bulk of the cards content 1.',
          variant: 'primary',
        },
        {
          title: 'Card Title 2',
          subtitle: 'Card Subtitle 2',
          text: 'Some quick example text to build on the card title and make up the bulk of the cards content 2.',
          variant: 'secondary',
        },
        {
          title: 'Card Title 3',
          subtitle: 'Card Subtitle 3',
          text: 'Some quick example text to build on the card title and make up the bulk of the cards content 3.',
          variant: 'success',
        },
        {
          title: 'Card Title 4',
          subtitle: 'Card Subtitle 4',
          text: 'Some quick example text to build on the card title and make up the bulk of the cards content 4.',
          variant: 'danger',
        },
        {
          title: 'Card Title 5',
          subtitle: 'Card Subtitle 5',
          text: 'Some quick example text to build on the card title and make up the bulk of the cards content 5.',
          variant: 'warning',
        },
        {
          title: 'Card Title 6',
          subtitle: 'Card Subtitle 6',
          text: 'Some quick example text to build on the card title and make up the bulk of the cards content 6.',
          variant: 'info',
        },
        {
          title: 'Card Title 7',
          subtitle: 'Card Subtitle 7',
          text: 'Some quick example text to build on the card title and make up the bulk of the cards content 7.',
          variant: 'light',
        },
        {
          title: 'Card Title 8',
          subtitle: 'Card Subtitle 8',
          text: 'Some quick example text to build on the card title and make up the bulk of the cards content 8.',
          variant: 'dark',
        },
      ]);
    }, 250);
  });
  return dashboardPromise.then((response) => response);
}
