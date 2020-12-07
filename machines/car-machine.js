import { Machine } from 'xstate';

export const carMachine = Machine(
  {
    id: 'global',
    initial: 'hide',
    context: {
      filter: {
        brand: [],
        color: [],
        searchText: '',
      },
      open: false,
      text: '',
      handler: () => {},
      push: () => {},
      id: '',
    },
    states: {
      hide: {
        on: {
          SHOW: {
            target: 'show',
            actions: ['showDialog'],
          },
          ADD_BRANDS: {
            target: 'hide',
            actions: ['addBrandsToStore'],
          },
          ADD_SEARCH_TEXT: {
            target: 'hide',
            actions: ['addSearchText'],
          },
          CLEAR_FILTER: {
            target: 'hide',
            actions: ['clearFilter'],
          },
        },
      },
      show: {
        on: {
          DELETE: {
            target: 'hide',
            actions: ['runHandler', 'hideDialog', 'clearData', 'push'],
          },
          CANCEL: {
            target: 'hide',
            actions: ['hideDialog', 'clearData'],
          },
        },
      },
    },
  },
  {
    actions: {
      showDialog: (ctx, evt) => {
        ctx.text = evt.text;
        ctx.open = true;
        ctx.handler = evt.handler;
        ctx.push = evt.push;
      },
      hideDialog: (ctx) => {
        ctx.open = false;
      },
      runHandler: (ctx) => {
        ctx.handler();
      },
      clearData: (ctx) => {
        ctx.text = '';
        ctx.handler = () => {};
      },
      clearFilter: (ctx) => {
        ctx.filter = {
          brand: [],
          color: [],
          year: [],
        };
      },
      push: (ctx) => ctx.push(),
      addBrandsToStore: (ctx, evt) => (ctx.filter.brand = evt.brand),
      addSearchText: (ctx, evt) => (ctx.filter.searchText = evt.searchText),
    },
  }
);
