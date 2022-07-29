import create from 'zustand';

export const useStoreGeneralInformation = create((set: any) => {
  const dataUser = localStorage.getItem('userInfo');
  return {
    userInformation: (dataUser && JSON.parse(dataUser)) || '',
    setuserInformation: (newstate: {}) =>
      set({
        userInformation: newstate,
      }),
  };
});
