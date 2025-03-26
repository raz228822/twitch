import { create } from "zustand"

interface CreatorSideBarStore {
    collapsed: boolean;
    onExpand: () => void;
    onCollapse: () => void;
};

export const useCreatorSidebar = create<CreatorSideBarStore>((set) => ({
    collapsed: false,
    onExpand: () => set(() => ({collapsed: false})),
    onCollapse: () => set(() => ({collapsed: true}))
}));