import { createAction, handleActions } from 'redux-actions'
import dialy_coco_10 from "./datasets/daily_coco_t5_upto65.json";
import persona_coco_10 from "./datasets/persona_coco_t5_upto65.json";
import persona_stopwords_coco_10 from "./datasets/persona_coco_stopwords_t5_up65.json";

const ADD_IDX = 'chat/ADD_IDX' // 다음 대화로 이동
const SUB_IDX = 'chat/SUB_IDX' // 이전 대화로 이동
const PREV_STATUS = 'chat/PREV_STATUS' // 이전 대화로 이동
const NEXT_STATUS = 'chat/NEXT_STATUS' // 이전 대화로 이동
const CHANGE_DATASET_A = 'chat/CHANGE_DATASET_A'
const CHANGE_DATASET_B = 'chat/CHANGE_DATASET_B'
const CHANGE_DATASET_C = 'chat/CHANGE_DATASET_C'
const CHANGE_MODE_T = 'chat/CHANGE_MODE_T' // 모드 변경, Top1_mode
const CHANGE_MODE_F = 'chat/CHANGE_MODE_F' // 모드 변경, Overall_mode
const CHANGE_MODE_P = 'chat/CHANGE_MODE_P' // 모드 변경, Picture_only mode

export const changePrev= createAction(PREV_STATUS)
export const changeNext= createAction(NEXT_STATUS)
export const addIdx= createAction(ADD_IDX)
export const subIdx= createAction(SUB_IDX)
export const changeDatasetA = createAction(CHANGE_DATASET_A)
export const changeDatasetB = createAction(CHANGE_DATASET_B)
export const changeDatasetC = createAction(CHANGE_DATASET_C)
export const setModeT = createAction(CHANGE_MODE_T)
export const setModeF = createAction(CHANGE_MODE_F)
export const setModeP = createAction(CHANGE_MODE_P)

const initialState = {
    chatData: dialy_coco_10,
    chatData_length: Object.keys(dialy_coco_10).length - 1,
    data_idx: 0,
    prev_status: false,
    next_status: true,
    stateOptions: [
        {
            key: 0,
            text: 'dialy_coco',
            value: 0
        },
        {
            key: 1,
            text: 'persona_coco',
            value: 1
        },
        {
            key: 2,
            text: 'persona_stopwords_coco',
            value: 2
        },
    ],
    top1_mode: 0,
    modeOptions: [
        {
            key: 0,
            text: 'top1_mode',
            value: 0
        },
        {
            key: 1,
            text: 'overall_mode',
            value: 1
        },
        {
            key: 2,
            text: 'picture_only',
            value: 2
        }
    ]
}

export default handleActions(
    {
        [ADD_IDX]: (state) => ({
            ...state,
            data_idx: state.data_idx + 1
        }),
        [SUB_IDX]: (state) => ({
            ...state,
            data_idx: state.data_idx - 1
        }),
        [PREV_STATUS]: (state) => ({
            ...state,
            prev_status: !state.prev_status
        }),
        [NEXT_STATUS]: (state) => ({
            ...state,
            next_status: !state.next_status
        }),
        [CHANGE_DATASET_A]: (state) => ({
            ...state,
            chatData: dialy_coco_10,
            chatData_length: Object.keys(dialy_coco_10).length - 1,
            data_idx: 0,
            prev_status: false,
            next_status: true,
        }),
        [CHANGE_DATASET_B]: (state) => ({
            ...state,
            chatData: persona_coco_10,
            chatData_length: Object.keys(persona_coco_10).length - 1,
            data_idx: 0,
            prev_status: false,
            next_status: true,
        }),
        [CHANGE_DATASET_C]: (state) => ({
            ...state,
            chatData: persona_stopwords_coco_10,
            chatData_length: Object.keys(persona_stopwords_coco_10).length - 1,
            data_idx: 0,
            prev_status: false,
            next_status: true,
        }),
        [CHANGE_MODE_T]: (state) => ({
            ...state,
            top1_mode: 0
        }),
        [CHANGE_MODE_F]: (state) => ({
            ...state,
            top1_mode: 1
        }),
        [CHANGE_MODE_P]: (state) => ({
            ...state,
            top1_mode: 2
        })
    },
    initialState
)