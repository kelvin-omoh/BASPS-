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

                user: {

                },
                addUserRole: (newRole: any) => set({ user: { role: newRole } }),

                systemData: {},
                addSystemData: (data: any) => set((state: any) => ({ systemData: { ...state.systemData, data } })),

                systemRole: {
                    role: '',
                },

                addSystemRole: (newRole: any) => set({ systemRoleu: { role: newRole } }),

                appraiseModal: false,

                appraiseNewStaff: () => set((state: any) => ({ appraiseModal: !state.appraiseModal })),


                toggle: false,
                setToggle: (modal: any) => set({ toggle: !modal }),


                compulsoryForm: false,
                setIfComulsoryFormIsFilled: () => set((state: any) => ({ compulsoryForm: !state.compulsoryForm })),

                profile: {},
                setProfile: (newProfile: any) => set({ profile: newProfile }),


                isAdmin: false,
                setIsAdmin: (newIsAdmin: any) => set({ isAdmin: newIsAdmin })

            }), { name: 'staffStore' },
        ),
    ),


)


