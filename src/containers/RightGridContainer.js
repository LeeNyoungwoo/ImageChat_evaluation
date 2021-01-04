import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addIdx, subIdx, changePrev, changeNext, changeDatasetA, changeDatasetB, changeDatasetC, setModeT, setModeF, setModeP } from '../store/modules/ChatData';
import RightGrid from '../components/RightGrid/RightGrid';

export default function RightGridContainer() {
    const dispatch = useDispatch();

    const data_idx = useSelector(state => state.chatdata.data_idx);
    const chatData_length = useSelector(state => state.chatdata.chatData_length);
    const prev_status = useSelector(state => state.chatdata.prev_status);
    const next_status = useSelector(state => state.chatdata.next_status);
    const stateOptions = useSelector(state => state.chatdata.stateOptions);
    const modeOptions = useSelector(state => state.chatdata.modeOptions);
    const top1_mode = useSelector(state => state.chatdata.top1_mode);

    const conv_addIdx = () => {
        dispatch(addIdx());
    }

    const conv_subIdx = () => {
        dispatch(subIdx());
    }

    const conv_changePrev = () => {
        dispatch(changePrev());
    }

    const conv_changeNext = () => {
        dispatch(changeNext());
    }

    const conv_changeDatasetA = () => {
        dispatch(changeDatasetA());
    }

    const conv_changeDatasetB = () => {
        dispatch(changeDatasetB());
    }

    const conv_changeDatasetC = () => {
        dispatch(changeDatasetC());
    }

    const conv_setModeT = () => {
        dispatch(setModeT());
    }

    const conv_setModeF = () => {
        dispatch(setModeF());
    }

    const conv_setModeP = () => {
        dispatch(setModeP());
    }

    return (
        <RightGrid
            data_idx={data_idx}
            stateOptions={stateOptions}
            prev_status={prev_status}
            next_status={next_status}
            chatData_length={chatData_length}
            modeOptions={modeOptions}
            top1_mode={top1_mode}
            conv_addIdx={conv_addIdx}
            conv_subIdx={conv_subIdx}
            conv_changePrev={conv_changePrev}
            conv_changeNext={conv_changeNext}
            conv_changeDatasetA={conv_changeDatasetA}
            conv_changeDatasetB={conv_changeDatasetB}
            conv_changeDatasetC={conv_changeDatasetC}
            conv_setModeT={conv_setModeT}
            conv_setModeF={conv_setModeF}
            conv_setModeP={conv_setModeP}
        />
    );
}