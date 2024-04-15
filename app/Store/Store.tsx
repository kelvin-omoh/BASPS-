import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useStaffStore = create(

    devtools(
        persist(


            (set) => ({
                bears: 0,
                increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
                removeAllBears: () => set({ bears: 0 }),
                updateBears: (newBears: any) => set({ bears: newBears }),

                name: "",
                changeName: (newName: string) => set({ name: newName }),

                staff: {},
                addNewStaff: (newUser: any) => set({ staff: newUser }),

                appraiseModal: false,
                appraiseNewStaff: (modal: any) => set({ appraiseModal: modal }),





            }), { name: 'staffStore' },
        ),
    ),


)


