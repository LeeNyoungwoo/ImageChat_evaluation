import { createAction, handleActions } from 'redux-actions'
import persona_0_result from "./datasets/persona_0_result.json";
import persona_1_result from "./datasets/persona_1_result.json";
import persona_2_result from "./datasets/persona_2_result.json";
import persona_3_result from "./datasets/persona_3_result.json";
import persona_4_result from "./datasets/persona_4_result.json";

const dataset_lists = [persona_0_result, persona_1_result, persona_2_result, persona_3_result, persona_4_result]

const ADD_IDX = 'chat/ADD_IDX' // 다음 대화로 이동
const SUB_IDX = 'chat/SUB_IDX' // 이전 대화로 이동
const PREV_STATUS = 'chat/PREV_STATUS' // 이전 대화로 이동
const NEXT_STATUS = 'chat/NEXT_STATUS' // 이전 대화로 이동
const CHANGE_DATASET = 'chat/CHANGE_DATASET'
const CHANGE_MODE = 'chat/CHANGE_MODE' // 모드 변경, Top1_mode - 0, Overall_mode - 1, Picture_only mode - 2
const SET_Q1 = 'chat/SET_Q1' // Questiong 1 rating 설정
const SET_Q2 = 'chat/SET_Q2' // Questiong 2 rating 설정
const SET_Q3 = 'chat/SET_Q3' // Questiong 3 rating 설정
const SET_Q4 = 'chat/SET_Q4' // Questiong 4 rating 설정

export const changePrev= createAction(PREV_STATUS)
export const changeNext= createAction(NEXT_STATUS)
export const addIdx= createAction(ADD_IDX)
export const subIdx= createAction(SUB_IDX)
export const changeDataset = createAction(CHANGE_DATASET, data_num => ({ data_num }))
export const setMode = createAction(CHANGE_MODE, mode => ({ mode }))
export const setQ1 = createAction(SET_Q1, object => ({ object }))
export const setQ2 = createAction(SET_Q2, object => ({ object }))
export const setQ3 = createAction(SET_Q3, object => ({ object }))
export const setQ4 = createAction(SET_Q4, object => ({ object }))

const initialState = {
    chatData: dataset_lists[0],
    chatData_length: Object.keys(dataset_lists[0]).length - 1,
    data_idx: 0,
    prev_status: false,
    next_status: true,
    stateOptions: [
        {
            key: 0,
            text: 'persona_0_result',
            value: 0
        },
        {
            key: 1,
            text: 'persona_1_result',
            value: 1
        },
        {
            key: 2,
            text: 'persona_2_result',
            value: 2
        },
        {
            key: 3,
            text: 'persona_3_result',
            value: 3
        },
        {
            key: 4,
            text: 'persona_4_result',
            value: 4
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
            key: 2,
            text: 'picture_only',
            value: 1
        }
    ],
    purposeOptions: [
        {
            key: 0,
            text: '질문에 대한 답변',
            value: 0
        },
        {
            key: 1,
            text: '새로운 주제 제안',
            value: 1
        },
        {
            key: 2,
            text: '이전 문맥에 대한 보충 설명',
            value: 2
        },
        {
            key: 3,
            text: '기타',
            value: 3
        }
    ],
    q1_rating: Array.from({length: Object.keys(dataset_lists[0]).length}, () => -1),
    q2_rating: Array.from({length: Object.keys(dataset_lists[0]).length}, () => -1),
    q3_rating: Array.from({length: Object.keys(dataset_lists[0]).length}, () => -1),
    q4_rating: Array.from({length: Object.keys(dataset_lists[0]).length}, () => -1),
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
        [CHANGE_DATASET]: (state, action) => ({
            ...state,
            chatData: dataset_lists[action.payload.data_num],
            chatData_length: Object.keys(dataset_lists[action.payload.data_num]).length - 1,
            data_idx: 0,
            prev_status: false,
            next_status: true,
            q1_rating: Array.from({length: Object.keys(dataset_lists[action.payload.data_num]).length}, () => -1),
            q2_rating: Array.from({length: Object.keys(dataset_lists[action.payload.data_num]).length}, () => -1),
            q3_rating: Array.from({length: Object.keys(dataset_lists[action.payload.data_num]).length}, () => -1),
            q4_rating: Array.from({length: Object.keys(dataset_lists[action.payload.data_num]).length}, () => -1),
        }),
        [CHANGE_MODE]: (state, action) => ({
            ...state,
            top1_mode: action.payload.mode
        }),
        [SET_Q1]: (state, action) => ({
            ...state,
            q1_rating: state.q1_rating.map((el, idx) => (idx === action.payload.object.idx) ? action.payload.object.value : el)
        }),
        [SET_Q2]: (state, action) => ({
            ...state,
            q2_rating: state.q2_rating.map((el, idx) => (idx === action.payload.object.idx) ? action.payload.object.value : el)
        }),
        [SET_Q3]: (state, action) => ({
            ...state,
            q3_rating: state.q3_rating.map((el, idx) => (idx === action.payload.object.idx) ? action.payload.object.value : el)
        }),
        [SET_Q4]: (state, action) => ({
            ...state,
            q4_rating: state.q4_rating.map((el, idx) => (idx === action.payload.object.idx) ? action.payload.object.value : el)
        })
    },
    initialState
)