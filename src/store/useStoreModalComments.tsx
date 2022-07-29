import create from 'zustand';

export const useStoreModalComments = create((set: any) => {
  return {
    openModal: false,
    setopenModal: (newstate: boolean) =>
      set({
        openModal: newstate,
      }),
    postToFind: '',
    setpostToFind: (newTitle: string) =>
      set({
        postToFind: newTitle,
      }),
  };
});
