import React, { Component } from 'react';
import { Button, Dropdown } from 'semantic-ui-react'
import './RightGrid.css';

export default class RightGrid extends Component{

    render() {
        const { conv_addIdx, conv_subIdx, data_idx, chatData_length, 
            conv_changePrev, conv_changeNext, prev_status, next_status, stateOptions, conv_setModeP,
            conv_changeDatasetA, conv_changeDatasetB, conv_changeDatasetC, conv_setModeT, conv_setModeF, modeOptions,
        } = this.props;
        
        const setNextStatus = () => {
            console.log(chatData_length)
            if (!prev_status){
                conv_changePrev()
            }
            if (data_idx < chatData_length){
                if (chatData_length === data_idx + 1){
                    conv_changeNext()
                }
                conv_addIdx()
            }
        }

        const setPrevStatus = () => {
            if (!next_status){
                conv_changeNext()
            }
            if (0 < data_idx){
                if (data_idx - 1 === 0){
                    conv_changePrev()
                }
                conv_subIdx()
            }
        }

        const changeDataset = (e, data) => {
            if (data.value === 0){
                conv_changeDatasetA()
            } else if (data.value === 1){
                conv_changeDatasetB()
            } else if (data.value === 2){
                conv_changeDatasetC()
            }
        }

        const changeMode = (e, data) => {
            if (data.value === 0){
                conv_setModeT()
            } else if (data.value === 1){
                conv_setModeF()
            } else if (data.value === 2){
                conv_setModeP()
            }
        }

        const section = (data_idx+1) + ' / ' + (chatData_length+1)
    
        return (
            <div className="RightGrid">
                <div className="RightTagGrid">
                    <Dropdown
                        placeholder='Select the mode'
                        selection
                        options={modeOptions}
                        onChange={changeMode}
                    />
                    <div style={{height:'5%'}}></div>
                    <Dropdown
                        placeholder='Select the dataset'
                        selection
                        options={stateOptions}
                        onChange={changeDataset}
                    />
                </div>
                <div className="RightTextGrid">
                    <span className="RightTag">{section}</span>
                </div>
                <div style={{height:'5%'}}></div>
                <div className="RightButtonGrid">
                    { prev_status
                        ?   <Button onClick={setPrevStatus} style={{width:'90%', height:'40%', fontSize:'2vh'}} fluid color='red'>PREV</Button>
                        :   <Button disabled onClick={setPrevStatus} style={{width:'90%', height:'40%', fontSize:'2vh'}} fluid color='red'>PREV</Button>
                    }
                    <div style={{height:'5%'}}></div>
                    { next_status
                        ?   <Button onClick={setNextStatus} style={{width:'90%', height:'40%', fontSize:'2vh'}} fluid color='blue'>NEXT</Button>
                        :   <Button disabled onClick={setNextStatus} style={{width:'90%', height:'40%', fontSize:'2vh'}} fluid color='blue'>NEXT</Button>
                    }
                </div>
            </div>
        );
    }
}