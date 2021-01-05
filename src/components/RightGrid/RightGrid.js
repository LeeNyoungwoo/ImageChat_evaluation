import React, { Component } from 'react';
import { Button, Dropdown, Rating } from 'semantic-ui-react'
import './RightGrid.css';

export default class RightGrid extends Component{

    render() {
        const { conv_addIdx, conv_subIdx, data_idx, chatData_length, 
            conv_changePrev, conv_changeNext, prev_status, next_status, stateOptions,
            conv_changeDataset, conv_setMode, modeOptions,
            conv_setQ1, conv_setQ2, q1_rating, q2_rating
        } = this.props;

        const downloadTxtFile = () => {
            const element = document.createElement("a");
            const file = new Blob(q1_rating, {type: 'text/plain'});
            element.href = URL.createObjectURL(file);
            element.download = "result.txt";
            document.body.appendChild(element); // Required for this to work in FireFox
            element.click();
        }
        
        const setNextStatus = () => {
            console.log(q1_rating)
            console.log(q2_rating)
            downloadTxtFile()

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
            conv_changeDataset(data.value)
        }

        const changeMode = (e, data) => {
            if (data.value === 0){
                conv_setMode(0)
            } else if (data.value === 1){
                conv_setMode(1)
            } else if (data.value === 2){
                conv_setMode(2)
            }
        }

        const changeRateQ1 = (e, data) => {
            const pair = {
                idx: data_idx,
                value: data.rating
            }
            conv_setQ1(pair)
        }

        const changeRateQ2 = (e, data) => {
            const pair = {
                idx: data_idx,
                value: data.rating
            }
            conv_setQ2(pair)
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
                <div className="RightQuestionGrid">
                    <div className="RightSubQuestionGrid">
                        <span>1. 바뀐 이미지는 원본 문장을 얼마나 잘 설명하나요?</span>
                        <Rating maxRating={5} icon='star' clearable onRate={changeRateQ1} rating={q1_rating[data_idx]} size='massive' />
                        <span>2. 치환된 이미지가 포함된 대화는 얼마나 자연스러운가요?</span>
                        <Rating maxRating={5} icon='star' clearable onRate={changeRateQ2} rating={q2_rating[data_idx]} size='massive' />
                    </div>
                </div>
                <div className="RightTextGrid">
                    <span className="RightTag">{section}</span>
                </div>
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