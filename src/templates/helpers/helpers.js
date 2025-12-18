import handlebars from 'handlebars';

handlebars.registerHelper('currentYear', () => {
  return new Date().getFullYear();
});
