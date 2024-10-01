import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type UIStoreState = {
    side_panel_flag: boolean,
    input_block_flag: boolean,
    set_side_panel(enable: boolean): void,
    set_input_block(enable: boolean): void,
}

export const useUIStore = create<UIStoreState>()(
    immer((set, get) => ({
        input_block_flag: false,
        side_panel_flag: false,
        set_side_panel(enable: boolean) {
            set(state => {
                state.side_panel_flag = enable;
            })
        },

        set_input_block(enable: boolean) {
            set(state => {
                state.input_block_flag = enable;
            })
        }

    })   
    )
)
