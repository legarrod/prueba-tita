import create from 'zustand';

export const useStoreModalUsers = create((set: any) => {
  return {
    openModalUser: false,
    setopenModalUser: (newstate: boolean) =>
      set({
        openModalUser: newstate,
      }),
    userId: '',
    setuserId: (newTitle: string) =>
      set({
        userId: newTitle,
      }),
  };
});
